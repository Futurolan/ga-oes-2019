let config = {
  title: 'Gamers Assembly : Occitanie Edition',
  logo: `/static/img/logo_ga_oes.png`,
  description: 'La Gamers Assembly Occitanie Edition aura lieu de 21 au 23 juin 2019 !',
  metaImagePath: `/static/img/logo_ga_oes.png`,
  gaTrackingId: 'UA-128777022-6',
  mainPartner: {
    logo: '/static/img/logo-occitanie-238x106.png',
    url: 'https://www.laregion.fr/'
  },
  home: {
    // hero: {
    //   title: '',
    //   subtitle: '',
    //   background: '/static/img/oes.jpg'
    // },
    banner: '/static/img/oes.jpg',
    twitterAccount: 'OccitanieEsport',
    partners: {
      active: false,
      delay: 10,
      count: 6
    }
  },
  news: {
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly Occitanie Edition',
    link: '/news'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires',
    link: '/partenaires'
  },
  tournaments: {
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly Occitanie Edition',
    link: '/tournois'
  },
  info: {
    title: 'Infos pratiques',
    description: 'Toutes les informations sur la Gamers Assembly Occitanie Edition',
    link: '/infos'
  },
  live: {
    title: 'Live',
    description: 'Tous les streams et résultats en direct',
    link: '/live'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly Occitanie Edition',
    link: '/billetterie',
    pass: {
      title: 'Pass "Manager/Accompagnateur"',
      text: 'Pour obtenir des pass "Manager/Accompagnateur", les équipes inscrites aux tournois peuvent réaliser une demande via le lien ci-dessous.',
      button: 'Obtenir un pass'
    },
    minor: {
      title: 'Informations pour les mineurs',
      text: 'Vous devez télécharger l\'autorisation parentale, l\'imprimer, la remplir et l\'apporter le jour de votre venue avec votre billet.',
      button: 'Télécharger l\'autorisation parentale (format pdf)'
    },
    rules: {
      title: 'Règlement intérieur',
      text: 'L\'acquisition d\'un ticket entraîne l\'adhésion au règlement intérieur disponible ci-dessous.',
      button: 'Télécharger le règlement intérieur (format pdf)'
    }
  },
  exhibitors: {
    title: 'Exposants',
    description: 'Les exposants que vous pourrez retrouver à la Gamers Assembly Occitanie Edition',
    link: '/exposants'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: false,
    pageId: 7
  },
  legals: {
    active: true,
    pageId: 8
  },
  recruit: {
    active: false,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la GAMERS ASSEMBLY, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://www.flickr.com/photos/futurolan',
    youtube: 'https://twitch.tv/gamers_assembly',
    flickr: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    discord: 'https://discordapp.com/invite/gamersassembly'
  }
}

module.exports = config
