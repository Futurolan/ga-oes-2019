let config = {
  title: 'Gamers Assembly : Occitanie Edition',
  logo: `/static/img/blason2-100x100.png`,
  description: 'La Gamers Assembly Occitanie Edition aura lieu de 21 au 23 juin 2019 !',
  metaImagePath: `/static/img/blason2-100x100.png`,
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
    banner: '/static/img/banner.jpg',
    twitterAccount: 'OccitanieEsport',
    partners: {
      active: true,
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
  schedule: {
    title: 'Programme',
    description: 'Le programme heure par heure pour tout l\'évènement',
    link: '/schedule'
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
      title: 'Pass Visiteur',
      text: 'Pour acheter un pass "Visiteur Occitanie Esports" ou un pass "Visiteur ESL Pro League Occitanie", suivre le lien ci-dessous',
      button: 'Acheter un billet visiteur'
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
  family: {
    title: 'Espace Famille',
    description: 'Les activités à faire en famille durant la Gamers Assembly Occitanie Edition',
    link: '/espace-famille'
  },
  influencers: {
    title: 'VIPs',
    description: 'Les personnalités qui seront présentes pour la Gamers Assembly Occitanie Edition',
    link: '/vips'
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
    twitch: 'https://twitch.tv/gamers_assembly',
    youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    flickr: 'https://www.flickr.com/photos/futurolan',
    discord: 'https://discordapp.com/invite/gamersassembly'
  }
}

module.exports = config
