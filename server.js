const express = require('express')
const next = require('next')
const path = require('path')
const sm = require('sitemap')
const request = require('request')
const config = require('./config/config.js')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const sitemap = sm.createSitemap({
  hostname: process.env.BASE_URL,
  cacheTime: 600000,
  urls: [
    { url: '/', changefreq: 'weekly', priority: 1 }
  ]
})

if (config.news.active) sitemap.add({ url: '/news', changefreq: 'monthly', priority: 0.9 })
if (config.tournaments.active) sitemap.add({ url: '/tournois', changefreq: 'monthly', priority: 0.9 })
if (config.info.active) sitemap.add({ url: '/infos', changefreq: 'monthly', priority: 0.9 })
if (config.partners.active) sitemap.add({ url: '/partenaires', changefreq: 'monthly', priority: 0.9 })
if (config.contact.active) sitemap.add({ url: '/contacts', changefreq: 'yearly', priority: 0.5 })
if (config.press.active) sitemap.add({ url: '/espace-presse', changefreq: 'yearly', priority: 0.5 })
if (config.legals.active) sitemap.add({ url: '/mentions-legales', changefreq: 'yearly', priority: 0.5 })
if (config.recruit.active) sitemap.add({ url: '/recrutement', changefreq: 'yearly', priority: 0.5 })

const query = `
{
  nodeQuery(filter: {conditions: [{field: "type", value: ["news","tournament"]}, {field: "status", value: ["1"]}]}, limit: 9999) {
    entities {
      id: entityId
      type: entityBundle
      lastmod: entityChanged
      url: entityUrl {
        path
      }
    }
  }
}`

app.prepare()
  .then(() => {
    const server = express()

    server.get('/robots.txt', (req, res) => {
      return res.sendFile(path.join(__dirname, './static', 'robots.txt'))
    })

    server.get('/humans.txt', (req, res) => {
      return res.sendFile(path.join(__dirname, './static', 'humans.txt'))
    })

    server.get('/sitemap.xml', function (req, res) {
      request(`${process.env.BACKEND_API_URL}/graphql?query=${encodeURI(query)}`, function (error, response, body) {
        const result = JSON.parse(body)
        if (error) {
          console.error(error)
          next()
        } else {
          for (const index in result.data.nodeQuery.entities) {
            const entity = result.data.nodeQuery.entities[index]
            if (entity.url && entity.url.path) {
              sitemap.add({
                url: `${entity.url.path}`,
                changefreq: entity.type === 'tournament' ? 'monthly' : 'weekly',
                priority: entity.type === 'tournament' ? 0.9 : 0.5,
                lastmodISO: entity.lastmod
              })
            }
          }
          sitemap.toXML(function (err, xml) {
            if (err) {
              return res.status(500).end()
            }
            res.header('Content-Type', 'application/xml')
            res.send(xml)
          })
        }
      })
    })

    // Legacy to remove after a moment
    server.get('/tournament/:nid', (req, res) => {
      return app.render(req, res, '/tournois-single', { nid: Number(req.params.nid) })
    })

    server.get('/tournois/:nid', (req, res) => {
      if (!isNaN(req.params.nid)) {
        return app.render(req, res, '/tournois-single', { nid: Number(req.params.nid) })
      } else {
        return __transformToId(req, res)
      }
    })

    server.get('/news/:nid', (req, res) => {
      if (!isNaN(req.params.nid)) {
        return app.render(req, res, '/news-single', { nid: Number(req.params.nid) })
      } else {
        return __transformToId(req, res)
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })

function __transformToId (req, res) {
  request(`${process.env.BACKEND_API_URL}/graphql?query=${encodeURI(query)}`, function (error, response, body) {
    if (error) {
      console.error(error)
      next()
    } else {
      const result = JSON.parse(body)
      for (const index in result.data.nodeQuery.entities) {
        const entity = result.data.nodeQuery.entities[index]
        const type = entity.type === 'news' ? 'news' : 'tournois'
        if (entity.url.path === req.url) {
          return app.render(req, res, `/${type}-single`, { nid: Number(entity.id) })
        }
      }
      return handle(req, res)
    }
  })
}
