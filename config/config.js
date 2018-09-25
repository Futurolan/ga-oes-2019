let config = {
  title: 'Gamers Assembly : Dev Front',
  logo: `${process.env.BASE_URL}/static/img/logo-orange-100x100.png`,
  description: 'Retrouvez la Gamers Assembly très prochainement',
  metaImage: `${process.env.BASE_URL}/static/img/logo-orange-200x200.png`,
  home: {
    hero: {
      title: 'Gamers Assembly',
      subtitle: 'Dev Front',
      background: '/static/img/bg-banner-al2018.jpg'
    }
  },
  news: {
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly'
  },
  recruit: {
    title: 'Recrutement',
    description: 'Devenir bénévole pour la GAMERS ASSEMBLY, c\'est par ici !!!'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires'
  },
  tournaments: {
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly'
  },
  infos: {
    title: 'Informations pratiques',
    description: 'Toutes les informations sur cet évènement'
  },
  tickets: {
    title: 'Billeterie',
    description: 'Achetez vos places pour la Gamers Assembly'
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
