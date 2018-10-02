let config = {
  title: 'Gamers Assembly : Dev Front',
  logo: `/static/img/logo-orange-100x100.png`,
  description: 'Retrouvez la Gamers Assembly très prochainement',
  metaImage: `${process.env.BASE_URL}/static/img/logo-orange-200x200.png`,
  gaTrackingId: 'UA-7594737-17',
  home: {
    hero: {
      title: 'Gamers Assembly',
      subtitle: 'Dev Front',
      background: '/static/img/bg-blue-area.jpg'
    },
    banner: '/static/img/bg-banner-al2018.jpg',
    twitterAccount: 'GamersAssembly'
  },
  news: {
    active: true,
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly'
  },
  recruit: {
    active: true,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la GAMERS ASSEMBLY, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  partners: {
    active: true,
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires'
  },
  tournaments: {
    active: true,
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly'
  },
  info: {
    active: true,
    title: 'Informations pratiques',
    description: 'Toutes les informations sur cet évènement'
  },
  tickets: {
    title: 'Billeterie',
    description: 'Achetez vos places pour la Gamers Assembly'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: true,
    pageId: 7
  },
  legals: {
    active: true,
    pageId: 8
  },
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://www.flickr.com/photos/futurolan',
    youtube: 'https://twitch.tv/gamers_assembly',
    flickr: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw'
  }
}

module.exports = config