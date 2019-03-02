const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'live' },
  { type: 'config', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  { type: 'config',
    id: 'info',
    children: [
      { type: 'config', id: 'tournaments' },
      { type: 'config', id: 'live' },
      { type: 'config', id: 'live' },
      { type: 'page', title: 'Une page', id: 4, link: '/test' },
      { type: 'config', id: 'live' },
      { type: 'config', id: 'live' },
      { type: 'page', title: 'Une page encore', id: 4, link: '/tesat2' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu
