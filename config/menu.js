const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  { type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      { type: 'external', title: 'Location', link: 'https://scoup-esport.fr/reservation/' },
      { type: 'page', title: 'Cosplay', id: 3569, link: '/cosplay' },
      { type: 'page', title: 'Région Occitanie', id: 3575, link: '/region' }
    ] },
  { type: 'external', title: 'ESL Pro League', link: 'https://pro.eslgaming.com/occitanie/' },
  { type: 'config', id: 'partners' }
]

module.exports = menu
