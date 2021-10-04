const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Parth',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '928903b85072a5e98530e7c0b151fb13',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi
  weatherLatitude: '19.796892',
  weatherLongitude: '72.745178',


  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Router',
      icon: 'share-2',
      link: '192.168.0.1',
    },
    {
      id: '3',
      name: 'torrent',
      icon: 'download',
      link: 'https://1337x.to/',
    },
    {
      id: '4',
      name: 'dortania',
      icon: 'code',
      link: 'https://dortania.github.io/OpenCore-Install-Guide/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'arrow-up',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Work Git',
      icon: 'git-branch',
      link: 'https://github.com/biztrology/lokobee',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'film',
  secondListIcon: 'flag',

  // Links
  lists: {
    firstList: [
      {
        name: 'Netflix',
        link: 'https://www.netflix.com/browse',
      },
      {
        name: 'Hotstar',
        link: 'https://hotstar.com/',
      },
      {
        name: 'Youtube',
        link: 'https://youtube.com/',
      },
      {
        name: 'imdb',
        link: 'https://www.imdb.com/',
      },
    ],
    secondList: [
      {
        name: 'Amazon',
        link: 'https://www.amazon.in',
      },
      {
        name: 'Flipkart',
        link: 'https://www.flipkart.com',
      },
      {
        name: '1 Lib',
        link: 'https://1lib.in',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};

