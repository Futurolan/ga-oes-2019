const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'tickets' },
  { type: 'external', title: 'ESL ProLeague', link: 'https://pro.eslgaming.com/occitanie/' },
  { type: 'config', id: 'tournaments' },
  { type: 'nolink', title: 'Infos',
    children: [
      { type: 'page', title: 'Région Occitanie', id: 3575, link: '/region' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu
