const categories = ['All', 'Finance', 'News', 'E-commerce', 'Creative', 'Entertainment'];
const categoriesShort = ['All', 'Finance', 'News', 'E-comm', 'Creative', 'Entertainment'];

const frontSortOrder = [
  'ticketmaster',
  'invision',
  'marvel',
  'magic-leap',
  'nike',
  'netflix-jobs',
  'uber'
];

const sortOrder = [
  'marvel',
  'uber',
  'invision',
  'magic-leap',
  'nike',
  'netflix-jobs',
  'hulu',
  'audible',
  'boosted-boards',
  'elton-john',
  'binance',
  'ticketmaster',
  'scale',
  'open-collective',
  'styled-components',
  'auth0',
  'iota',
  'twitch',
  'eaze',
  'zeit',
  'a24',
  'avocode',
  'expo',
  'att',
  'sumup',
  'hashnode',
  'jet',
  'weedmaps',
  'ticketswap',
  'ign',
  'dicefm',
  'giveindia',
  'allvoices',
  'sanity',
  'aenetworks',
  'blendle',
  'tencent-news',
  'idean',
  'repl.it',
  'satoshis.place',
  'givecrypto',
  'fontbase',
  'square-enix-games',
  'midrive',
  'stv',
  'hyper',
  'typeform',
  'deliveroo',
  'colorbox',
  'hollar',
  'suburbia',
  'docker',
  'verge',
  'nteract',
  'institchu',
  'lego',
  'syntax.fm',
  'design-better',
  'pusher',
  'staples',
  'worldpopulationreview',
  'bitscreener',
  'starbucksreserve',
  'underbelly',
  'heramerica',
  'lightningdesignsystem',
  'nilefm',
  'yicaiglobal',
  'tvpublica',
  'piesync',
  'inflect',
  'eurostar',
  'plotly',
  'artsmia',
  'onuniverse',
  'garticio',
  'trip',
  'material-ui',
  'framer',
  'friday-digital',
  'supervielle',
  'theculturetrip',
  'carbon',
  'vogue',
  'bang-olufsen',
  'futurism',
  'nubank',
  'ferrari',
  'movietickets',
  'mesalva',
  'ohtuleht',
  'stargatecommand',
  'shakeshack',
  'coop',
  'mprnews',
  'thehhub',
  'realtor',
  'leafly',
  'playstation'
];

// src is added to the sites that don't look good with a screenshot from https://microlink.io/screenshot
const mapping = {
  typeform: {
    title: 'Typeform',
    link: 'https://www.typeform.com',
    // src: '/static/images/showcases/typeform.jpg',
    alexa: 1029,
    internalUrl: 'typeform',
    tags: ['creative']
  },
  blendle: {
    title: 'Blendle',
    link: 'https://blendle.com',
    // src: '/static/images/showcases/blendle.jpg',
    alexa: 126711,
    internalUrl: 'blendle',
    tags: ['news']
  },
  hollar: {
    title: 'Hollar',
    link: 'https://www.hollar.com',
    // src: '/static/images/showcases/hollar.jpg',
    alexa: 79897,
    internalUrl: 'hollar',
    tags: ['e-commerce']
  },
  yicaiglobal: {
    title: 'Yicai Global',
    link: 'https://yicaiglobal.com',
    // src: '/static/images/showcases/yicaiglobal.jpg',
    alexa: 303541,
    internalUrl: 'yicaiglobal',
    tags: ['news']
  },
  artsmia: {
    title: 'Minneapolis Institute of Art',
    link: 'https://new.artsmia.org',
    // src: '/static/images/showcases/artsmia.jpg',
    alexa: 230509,
    internalUrl: 'artsmia',
    tags: ['news']
  },
  tvpublica: {
    title: 'Televisión Pública Argentina',
    link: 'https://www.tvpublica.com.ar',
    // src: '/static/images/showcases/tvpublica.jpg',
    alexia: 55843,
    internalUrl: 'tvpublica',
    tags: ['news']
  },
  suburbia: {
    title: 'Suburbia',
    link: 'https://www.suburbia.com.mx',
    // src: '/static/images/showcases/suburbia.jpg',
    alexa: 71619,
    internalUrl: 'suburbia',
    tags: ['e-commerce']
  },
  att: {
    title: 'AT&T',
    link: 'https://www.att.com',
    // src: '/static/images/showcases/att.jpg',
    alexa: 486,
    internalUrl: 'att',
    tags: ['e-commerce', 'entertainment']
  },
  ticketswap: {
    title: 'TicketSwap',
    link: 'https://www.ticketswap.uk',
    // src: '/static/images/showcases/ticketswap.jpg',
    alexa: 353790,
    internalUrl: 'ticketswap',
    tags: ['e-commerce']
  },
  ign: {
    title: 'IGN',
    link: 'https://www.ign.com',
    src: '/static/images/showcases/ign.jpg',
    alexa: 523,
    internalUrl: 'ign',
    tags: ['entertainment']
  },
  audible: {
    title: 'Audible',
    link: 'https://www.audible.com/about/',
    src: '/static/images/showcases/audible.jpg',
    alexa: 965,
    internalUrl: 'audible',
    tags: ['entertainment']
  },
  dicefm: {
    title: 'DICE',
    link: 'https://dice.fm',
    // src: '/static/images/showcases/dicefm.jpg',
    alexa: 97926,
    internalUrl: 'dicefm',
    tags: ['e-commerce']
  },
  nilefm: {
    title: 'NileFM',
    link: 'https://nilefm.com',
    // src: '/static/images/showcases/nilefmonline.jpg',
    alexa: 408918,
    internalUrl: 'nilefm',
    tags: ['entertainment']
  },
  giveindia: {
    title: 'GiveIndia',
    link: 'https://www.giveindia.org',
    // src: '/static/images/showcases/giveindia.jpg',
    alexa: 84640,
    internalUrl: 'giveindia',
    tags: []
  },
  allvoices: {
    title: 'AllVoices',
    link: 'https://allvoices.co',
    // src: '/static/images/showcases/allvoices.jpg',
    alexa: 818074,
    internalUrl: 'allvoices',
    tags: []
  },
  onuniverse: {
    title: 'Universe',
    link: 'https://onuniverse.com',
    // src: '/static/images/showcases/onuniverse.jpg',
    alexa: 191350,
    internalUrl: 'onuniverse',
    tags: ['creative']
  },
  theculturetrip: {
    title: 'Culture Trip',
    link: 'https://theculturetrip.com',
    // src: '/static/images/showcases/theculturetrip.jpg',
    alexa: 2797,
    internalUrl: 'theculturetrip',
    tags: ['entertainment']
  },
  supervielle: {
    title: 'Supervielle',
    link: 'https://www.supervielle.com.ar',
    // src: '/static/images/showcases/supervielle.jpg',
    alexa: 24638,
    internalUrl: 'supervielle',
    tags: ['finance']
  },
  twitch: {
    title: 'Twitch',
    link: 'https://m.twitch.tv',
    // src: '/static/images/showcases/twitch.jpg',
    alexa: 36,
    highlighted: 1,
    internalUrl: 'twitch',
    tags: ['entertainment']
  },
  lego: {
    title: 'LEGO for Kids',
    link: 'https://www.lego.com/en-us/kids',
    // src: '/static/images/showcases/lego.jpg',
    alexa: 3948,
    internalUrl: 'lego',
    tags: ['entertainment', 'creative']
  },
  uber: {
    title: 'Uber Marketplace',
    link: 'https://marketplace.uber.com',
    // src: '/static/images/showcases/uber.jpg',
    internalUrl: 'uber',
    alexa: 800,
    tags: []
  },
  starbucksreserve: {
    title: 'Starbucks Reserve',
    link: 'https://starbucksreserve.com',
    // src: '/static/images/showcases/starbucksreserve.jpg',
    alexa: 280753,
    internalUrl: 'starbucksreserve',
    tags: ['e-commerce']
  },
  'material-ui': {
    title: 'Material-UI',
    link: 'https://material-ui.com',
    // src: '/static/images/showcases/material-ui.jpg',
    alexa: 12099,
    internalUrl: 'material-ui',
    tags: ['creative']
  },
  framer: {
    title: 'Framer Store',
    link: 'https://store.framer.com',
    // src: '/static/images/showcases/framer.jpg',
    alexa: 50549,
    internalUrl: 'framer',
    highlighted: 2,
    tags: ['creative']
  },
  garticio: {
    title: 'Gartic.io',
    link: 'https://gartic.io',
    // src: '/static/images/showcases/garticio.jpg',
    alexa: 33457,
    internalUrl: 'garticio',
    tags: ['entertainment', 'creative']
  },
  trip: {
    title: 'Trip.com',
    link: 'https://www.trip.com/travel-guide',
    // src: '/static/images/showcases/trip.jpg',
    alexa: 2123,
    internalUrl: 'trip',
    tags: ['e-commerce']
  },
  colorbox: {
    title: 'ColorBox',
    link: 'https://www.colorbox.io',
    // src: '/static/images/showcases/colorbox.jpg',
    alexa: 315118,
    internalUrl: 'colorbox',
    highlighted: 1,
    tags: ['creative']
  },
  inflect: {
    title: 'Inflect Global Marketplace',
    link: 'https://inflect.com',
    // src: '/static/images/showcases/inflect.jpg',
    alexa: 809263,
    internalUrl: 'inflect'
  },
  piesync: {
    title: 'PieSync',
    link: 'https://www.piesync.com',
    // src: '/static/images/showcases/piesync.jpg',
    alexa: 74385,
    internalUrl: 'piesync'
  },
  lightningdesignsystem: {
    title: 'Salesforce Lightning Design System',
    link: 'https://www.lightningdesignsystem.com',
    // src: '/static/images/showcases/lightningdesignsystem.jpg',
    alexa: 78744,
    internalUrl: 'lightningdesignsystem',
    tags: ['creative']
  },
  // heramerica: {
  //   title: 'Her America',
  //   link: 'https://www.heramerica.com',
  //   src: '/static/images/showcases/heramerica.jpg',
  //   internalUrl: 'heramerica'
  // },
  bitscreener: {
    title: 'Bitscreener',
    link: 'https://bitscreener.com',
    // src: '/static/images/showcases/bitscreener.jpg',
    alexa: 155844,
    internalUrl: 'bitscreener',
    tags: ['finance']
  },
  staples: {
    title: 'Staples',
    link: 'https://m.staples.com',
    // src: '/static/images/showcases/staples.jpg',
    alexa: 1653,
    internalUrl: 'staples',
    highlighted: 2,
    tags: ['e-commerce']
  },
  ticketmaster: {
    title: 'Ticketmaster',
    link: 'https://www.ticketmaster.com',
    // src: '/static/images/showcases/ticketmaster.jpg',
    alexa: 773,
    internalUrl: 'ticketmaster',
    tags: ['e-commerce']
  },
  verge: {
    title: 'Verge',
    link: 'https://vergecurrency.com',
    // src: '/static/images/showcases/verge.jpg',
    alexa: 285029,
    internalUrl: 'verge',
    tags: ['finance']
  },
  binance: {
    title: 'Binance',
    link: 'https://www.binance.com',
    // src: '/static/images/showcases/binance.jpg',
    alexa: 1682,
    internalUrl: 'binance',
    highlighted: 2,
    tags: ['finance']
  },
  pusher: {
    title: 'Pusher',
    link: 'https://pusher.com',
    src: '/static/images/showcases/pusher.jpg',
    alexa: 19482,
    internalUrl: 'pusher',
    tags: ['creative']
  },
  aenetworks: {
    title: 'A+E Networks',
    link: 'https://www.aenetworks.com',
    // src: '/static/images/showcases/aenetworks.jpg',
    alexa: 156068,
    internalUrl: 'aenetworks',
    tags: ['news']
  },
  worldpopulationreview: {
    title: 'World Population Review',
    link: 'http://worldpopulationreview.com',
    // src: '/static/images/showcases/worldpopulationreview.jpg',
    alexa: 6881,
    internalUrl: 'worldpopulationreview',
    tags: ['news']
  },
  underbelly: {
    title: 'Underbelly',
    link: 'https://underbelly.is',
    // src: '/static/images/showcases/underbelly.jpg',
    alexa: 1550898,
    internalUrl: 'underbelly',
    tags: ['creative']
  },
  'syntax.fm': {
    title: 'Syntax',
    link: 'https://syntax.fm',
    src: '/static/images/showcases/syntax.fm.jpg',
    alexa: 422189,
    internalUrl: 'syntax.fm',
    tags: ['dev', 'creative']
  },
  institchu: {
    title: 'InStitchu',
    link: 'https://www.institchu.com',
    // src: '/static/images/showcases/institchu.jpg',
    alexa: 268477,
    internalUrl: 'institchu',
    tags: ['e-commerce']
  },
  nteract: {
    title: 'nteract',
    link: 'https://nteract.io',
    // src: '/static/images/showcases/nteract.jpg',
    alexa: 1245645,
    internalUrl: 'nteract',
    tags: ['creative']
  },
  'square-enix-games': {
    title: 'Square Enix',
    link: 'https://square-enix-games.com',
    // src: '/static/images/showcases/square-enix-games.jpg',
    alexa: 15656,
    internalUrl: 'square-enix-games',
    highlighted: 1,
    tags: ['entertainment']
  },
  docker: {
    title: 'Docker',
    link: 'https://success.docker.com',
    // src: '/static/images/showcases/docker.jpg',
    alexa: 2861,
    internalUrl: 'docker',
    tags: ['dev']
  },
  plotly: {
    title: 'Plotly',
    link: 'https://plot.ly',
    // src: '/static/images/showcases/plotly.jpg',
    alexa: 16141,
    internalUrl: 'plotly',
    tags: ['creative']
  },
  deliveroo: {
    title: 'Deliveroo',
    link: 'https://deliveroo.co.uk',
    // src: '/static/images/showcases/deliveroo.jpg',
    alexa: 11556,
    internalUrl: 'deliveroo',
    tags: ['e-commerce']
  },
  eurostar: {
    title: 'Eurostar',
    link: 'https://hotels.eurostar.com/uk-en/paris',
    // src: '/static/images/showcases/eurostar.jpg',
    alexa: 23074,
    internalUrl: 'eurostar',
    tags: ['e-commerce']
  },
  stv: {
    title: 'STV',
    link: 'https://stv.tv',
    // src: '/static/images/showcases/stv.jpg',
    alexa: 41728,
    internalUrl: 'stv',
    tags: ['entertainment']
  },
  midrive: {
    title: 'Midrive',
    link: 'https://midrive.com',
    // src: '/static/images/showcases/midrive.jpg',
    alexa: 497657,
    internalUrl: 'midrive',
    tags: ['e-commerce']
  },
  fontbase: {
    title: 'FontBase',
    link: 'https://fontba.se',
    src: '/static/images/showcases/fontbase.jpg',
    alexa: 308517,
    internalUrl: 'fontbase',
    tags: ['creative']
  },
  givecrypto: {
    title: 'GiveCrypto',
    link: 'https://www.givecrypto.org',
    // src: '/static/images/showcases/givecrypto.jpg',
    alexa: 1252066,
    internalUrl: 'givecrypto',
    tags: ['finance']
  },
  'satoshis.place': {
    title: "Satoshi's Place",
    link: 'https://satoshis.place',
    // src: '/static/images/showcases/satoshis.place.jpg',
    alexa: 3061332,
    internalUrl: 'satoshis.place',
    tags: ['entertainment']
  },
  'repl.it': {
    title: 'repl.it',
    link: 'https://repl.it',
    // src: '/static/images/showcases/repl.it.jpg',
    alexa: 7074,
    internalUrl: 'repl.it',
    tags: ['dev']
  },
  'styled-components': {
    title: 'styled-components',
    link: 'https://www.styled-components.com',
    // src: '/static/images/showcases/styled-components.jpg',
    alexa: 59991,
    internalUrl: 'styled-components',
    tags: ['dev']
  },
  'tencent-news': {
    title: 'Tencent News',
    link: 'https://xw.qq.com',
    // src: '/static/images/showcases/tencentnews.jpg',
    alexa: 6,
    internalUrl: 'tencent-news',
    highlighted: 2,
    tags: ['news']
  },
  jet: {
    title: 'Jet',
    link: 'https://jet.com',
    // src: '/static/images/showcases/jet.jpg',
    alexa: 15822,
    internalUrl: 'jet',
    highlighted: 1,
    tags: ['e-commerce']
  },
  idean: {
    title: 'Idean',
    link: 'https://www.idean.com',
    // src: '/static/images/showcases/idean.jpg',
    alexa: 590539,
    internalUrl: 'idean',
    tags: ['creative']
  },
  'magic-leap': {
    title: 'Magic Leap',
    link: 'https://magicleap.com',
    // src: '/static/images/showcases/showcases-00.jpg',
    alexa: 92873,
    internalUrl: 'magic-leap',
    highlighted: 1,
    tags: ['entertainment']
  },
  marvel: {
    title: 'Marvel',
    link: 'https://www.marvel.com',
    src: '/static/images/showcases/marvel.jpg',
    width: 3840,
    height: 2204,
    internalUrl: 'marvel',
    tags: ['entertainment']
  },
  nike: {
    title: 'Nike',
    link: 'https://www.nike.com/help',
    // src: '/static/images/showcases/nike.jpg',
    alexa: 480,
    internalUrl: 'nike'
  },
  'boosted-boards': {
    title: 'Boosted',
    link: 'http://boostedboards.com',
    // src: '/static/images/showcases/boosted.jpg',
    alexa: 40796,
    internalUrl: 'boosted-boards',
    tags: ['e-commerce']
  },
  eaze: {
    title: 'Eaze',
    link: 'https://www.eaze.com',
    // src: '/static/images/showcases/showcases-01.jpg',
    alexa: 24869,
    internalUrl: 'eaze',
    tags: ['e-commerce']
  },
  'netflix-jobs': {
    title: 'Netflix Jobs',
    link: 'https://jobs.netflix.com',
    src: '/static/images/showcases/showcases-02.jpg',
    alexa: 21,
    internalUrl: 'netflix-jobs',
    tags: ['entertainment']
  },
  auth0: {
    title: 'Auth0',
    link: 'https://auth0.com',
    // src: '/static/images/showcases/showcases-03.jpg',
    alexa: 1979,
    internalUrl: 'auth0',
    tags: ['dev']
  },
  scale: {
    title: 'Scale',
    link: 'https://scale.com',
    // src: '/static/images/showcases/showcases-04.jpg',
    alexa: 104639,
    internalUrl: 'scale',
    tags: ['creative']
  },
  'elton-john': {
    title: 'Elton John',
    link: 'https://www.eltonjohn.com',
    // src: '/static/images/showcases/showcases-05.jpg',
    alexa: 209465,
    internalUrl: 'elton-john',
    tags: ['creative', 'entertainment']
  },
  'open-collective': {
    title: 'Open Collective',
    link: 'https://opencollective.com',
    // src: '/static/images/showcases/showcases-06.jpg',
    alexa: 48192,
    internalUrl: 'open-collective',
    tags: ['creative']
  },
  a24: {
    title: 'A24',
    link: 'https://www.a24.com',
    // src: '/static/images/showcases/showcases-07.jpg',
    alexa: 34393,
    internalUrl: 'a24',
    tags: ['news']
  },
  hyper: {
    title: 'Hyper',
    link: 'https://hyper.is',
    src: '/static/images/showcases/showcases-08.jpg',
    alexa: 156712,
    internalUrl: 'hyper',
    tags: ['dev']
  },
  zeit: {
    title: 'ZEIT',
    link: 'https://zeit.co',
    // src: '/static/images/showcases/showcases-09.jpg',
    alexa: 34585,
    internalUrl: 'zeit',
    tags: ['dev', 'creative']
  },
  avocode: {
    title: 'Avocode',
    link: 'https://avocode.com',
    // src: '/static/images/showcases/avocode.jpg',
    alexa: 48264,
    internalUrl: 'avocode',
    tags: ['creative']
  },
  iota: {
    title: 'IOTA',
    link: 'https://www.iota.org',
    // src: '/static/images/showcases/iota.jpg',
    alexa: 105797,
    internalUrl: 'iota',
    tags: ['dev', 'finance']
  },
  expo: {
    title: 'Expo',
    link: 'https://expo.io',
    // src: '/static/images/showcases/showcases-13.jpg',
    alexa: 15983,
    internalUrl: 'expo',
    tags: ['dev', 'creative']
  },
  sumup: {
    title: 'Sumup',
    link: 'https://sumup.com',
    src: '/static/images/showcases/showcases-14.jpg',
    alexa: 19891,
    internalUrl: 'sumup',
    tags: ['finance']
  },
  hashnode: {
    title: 'Hashnode',
    link: 'https://hashnode.com',
    // src: '/static/images/showcases/showcases-15.jpg',
    alexa: 37617,
    internalUrl: 'hashnode',
    tags: ['dev']
  },
  invision: {
    title: 'Invision',
    link: 'https://www.invisionapp.com',
    // src: '/static/images/showcases/showcases-16.jpg',
    alexa: 3136,
    internalUrl: 'invision',
    tags: ['dev', 'creative']
  },
  hulu: {
    title: 'Hulu',
    link: 'https://www.hulu.com',
    // src: '/static/images/showcases/showcases-17.jpg',
    alexa: 234,
    internalUrl: 'hulu',
    tags: ['entertainment']
  },
  'design-better': {
    title: 'DesignBetter.co',
    link: 'https://www.designbetter.co',
    src: '/static/images/showcases/showcases-18.jpg',
    alexa: 97014,
    internalUrl: 'design-better',
    tags: ['dev', 'creative']
  },
  weedmaps: {
    title: 'Weedmaps',
    link: 'https://weedmaps.com',
    // src: '/static/images/showcases/showcases-19.jpg',
    alexa: 9591,
    internalUrl: 'weedmaps',
    tags: ['e-commerce']
  },
  sanity: {
    title: 'Sanity.io',
    link: 'https://sanity.io',
    // src: '/static/images/showcases/showcases-20.jpg',
    alexa: 203629,
    internalUrl: 'sanity',
    tags: ['dev', 'creative']
  },
  'friday-digital': {
    title: 'FRIDAY DIGITAL',
    link: 'https://friday.kodansha.co.jp',
    // src: '/static/images/showcases/friday-digital.jpg',
    alexa: 12364,
    internalUrl: 'friday-digital',
    tags: ['news', 'entertainment']
  },
  carbon: {
    title: 'Carbon',
    link: 'https://carbon.now.sh',
    // src: '/static/images/showcases/carbon.jpg',
    alexa: 167367,
    internalUrl: 'carbon',
    tags: ['dev', 'creative']
  },
  vogue: {
    title: 'Vogue Fashion Shows',
    link: 'https://www.vogue.de/fashion-shows',
    // src: '/static/images/showcases/vogue-fashion-shows.png',
    alexa: 117866,
    internalUrl: 'vogue',
    tags: ['creative', 'entertainment']
  },
  'bang-olufsen': {
    title: 'BANG & OLUFSEN',
    link: 'https://www.bang-olufsen.com',
    src: '/static/images/showcases/bang-olufsen.jpg',
    alexa: 56521,
    internalUrl: 'bang-olufsen',
    tags: ['e-commerce', 'creative']
  },
  futurism: {
    title: 'Futurism',
    link: 'https://www.futurism.com',
    // src: '/static/images/showcases/futurism.jpg',
    alexa: 9133,
    internalUrl: 'futurism',
    tags: ['news']
  },
  nubank: {
    title: 'Nubank',
    link: 'https://nubank.com.br',
    // src: '/static/images/showcases/nubank.jpg',
    alexa: 9420,
    internalUrl: 'nubank',
    tags: ['finance']
  },
  ferrari: {
    title: 'Ferrari',
    link: 'https://www.ferrari.com',
    // src: '/static/images/showcases/ferrari.jpg',
    alexa: 26283,
    internalUrl: 'ferrari',
    highlighted: 1,
    tags: ['entertainment']
  },
  movietickets: {
    title: 'MovieTickets',
    link: 'https://www.movietickets.com',
    // src: '/static/images/showcases/movietickets.jpg',
    alexa: 55895,
    internalUrl: 'movietickets',
    tags: ['e-commerce']
  },
  mesalva: {
    title: 'Me Salva!',
    link: 'https://www.mesalva.com',
    // src: '/static/images/showcases/mesalva.png',
    alexa: 71308,
    internalUrl: 'mesalva',
    tags: ['education']
  },
  ohtuleht: {
    title: 'Õhtuleht',
    link: 'https://www.ohtuleht.ee',
    // src: '/static/images/showcases/ohtuleht.jpg',
    alexa: 53934,
    internalUrl: 'ohtuleht',
    tags: ['news']
  },
  stargatecommand: {
    title: 'Stargate Command',
    link: 'https://www.stargatecommand.co',
    // src: '/static/images/showcases/stargatecommand.jpg',
    alexa: 245817,
    internalUrl: 'stargatecommand',
    tags: ['entertainment']
  },
  shakeshack: {
    title: 'Shake Shack',
    link: 'https://order.shakeshack.com/',
    // src: '/static/images/showcases/shakeshack.jpg',
    alexa: 59713,
    internalUrl: 'shakeshack',
    tags: ['e-commerce']
  },
  coop: {
    title: 'Co-op Shop',
    link: 'https://shop.coop.co.uk',
    // src: '/static/images/showcases/coop.png',
    alexa: 77995,
    internalUrl: 'coop',
    tags: ['e-commerce']
  },
  mprnews: {
    title: 'MPR News',
    link: 'https://www.mprnews.org',
    // src: '/static/images/showcases/mprnews.jpg',
    alexa: 63031,
    internalUrl: 'mprnews',
    tags: ['news']
  },
  thehhub: {
    title: 'TheHHub',
    link: 'https://www.thehhub.com',
    src: '/static/images/showcases/thehhub.jpg',
    alexa: 124645,
    internalUrl: 'thehhub',
    tags: ['creative']
  },
  realtor: {
    title: 'realtor.com',
    link: 'https://www.realtor.com',
    alexa: 446,
    internalUrl: 'realtor',
    tags: ['e-commerce']
  },
  leafly: {
    title: 'Leafly',
    link: 'https://www.leafly.com',
    src: '/addonepls',
    alexa: 5850,
    internalUrl: 'leafly',
    tags: ['e-commerce']
  },
  playstation: {
    title: 'PlayStation Competition Center',
    link: 'https://compete.playstation.com/',
    alexa: 584,
    internalUrl: 'playstation',
    tags: ['entertainment']
  }
};

module.exports = {
  categories,
  categoriesShort,
  sortOrder,
  frontSortOrder,
  mapping
};
