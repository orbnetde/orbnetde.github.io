export interface MenuItem {
  name: string,
  icon?: string,
  description?: string,
  href?: string,
  external?: boolean,
  highlight?: boolean,
  children?: MenuItem[],
  actions?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    name: 'Funktionen',
    children: [
      {
        name: 'Kundenverwaltung',
        description: 'Immer deine Kundendaten im Blick, selbst wenn du unterwegs bist.',
        href: '/funktionen/kundenverwaltung/',
        icon: 'users-outline',
        children: [
          {
            name: 'Lead Management',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/kundenverwaltung/lead-management/',
            icon: 'fluent--arrow-growth-24-filled',
          },
          {
            name: 'Notizen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/kundenverwaltung/notizen/',
            icon: 'fluent--note-16-filled',
          },
          {
            name: 'Lead Tagging',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/kundenverwaltung/lead-tagging/',
            icon: 'fluent--tag-24-filled',
          },
        ],
      },
      {
        name: 'Terminverwaltung',
        description: 'Kein lästiges E-Mail Ping-Pong oder hunderte Anrufe am Tag mehr.',
        href: '/funktionen/terminvereinbarung/',
        icon: 'calendar-days-outline',
        children: [
          {
            name: 'Google, Outlook and iCal Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/terminverwaltung/google-outlook-office365-apple-und-ical-integration/',
            icon: 'ic--baseline-integration-instructions',
          },
          {
            name: 'Website Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/terminverwaltung/website-integration/',
            icon: 'fluent--web-asset-24-filled',
          },
          {
            name: 'Buchungsmanagement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/terminverwaltung/buchungsmanagement/',
            icon: 'basil--book-check-solid',
          },
          {
            name: 'Zahlungsanbieter Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/terminverwaltung/zahlungsanbieter-integration/',
            icon: 'fluent--payment-24-filled',
          },
          {
            name: 'Online und Offline Workshops',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/terminverwaltung/online-und-offline-workshops/',
            icon: 'mingcute--video-fill',
          },
        ],
      },
      {
        name: 'Buchhaltung',
        description: 'Zu wenig Zeit für Familie und Freizeit! Ist die lästige Buchhaltung daran schuld? ',
        href: '/funktionen/buchhaltung/',
        icon: 'pencil-outline',
        children: [
          {
            name: 'Rechnung schreiben',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/buchhaltung/rechnung-schreiben/',
            icon: 'basil--invoice-solid',
          },
          {
            name: 'Angebot schreiben',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/buchhaltung/angebot-schreiben/',
            icon: 'material-symbols--request-quote-rounded',
          },
          {
            name: 'Mahnung schreiben',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/buchhaltung/mahnung-schreiben/',
            icon: 'material-symbols--unknown-document-rounded',
          },
          {
            name: 'Gutschrift erstellen',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/buchhaltung/gutschrift-erstellen/',
            icon: 'material-symbols--add-notes-rounded',
          },
          // {
          //   name: 'Wiederkehrende Rechnungen',
          //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
          //   href: '/funktionen/buchhaltung/wiederkehrende-rechnungen/',
          //   icon: 'fluent--arrow-clockwise-16-filled',
          // },
          // {
          //   name: 'Dokumentenmanagement (DMS)',
          //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
          //   href: '/funktionen/buchhaltung/dokumentenmanagement/',
          //   icon: 'solar--document-bold',
          // },
          // {
          //   name: 'Ausgaben Tracking',
          //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
          //   href: '/funktionen/buchhaltung/ausgaben-tracking/',
          //   icon: 'solar--dollar-bold',
          // },
          {
            name: 'Online Banking',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/buchhaltung/online-banking/',
            icon: 'mdi--bank',
          },
          {
            name: 'DATEV Schnittstelle',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
            href: '/funktionen/buchhaltung/datev-schnittstelle/',
            icon: 'material-symbols--partner-exchange-outline-rounded',
          },
        ]
      },
    ],
    actions: [
      {
        name: 'Demo ansehen',
        href: 'https://www.youtube.com/watch?v=gfRp2sI1lMU',
        external: true,
        icon: 'eye-outline',
      },
      {
        name: 'Alle Funktionen',
        href: '/funktionen/',
        highlight: true,
        icon: 'list-bullet-outline',
      },
      {
        name: 'On-Boarding buchen',
        href: 'https://www.orbnet.de/p/click/onboarding',
        icon: 'chat-bubble-left-ellipsis-outline',
      },
    ],
  },
  {
    name: 'Lösungen',
    children: [
      {
        name: 'Coaching Software',
        description: 'Perfekt für Coaches und Berater.',
        href: '/branchen/coaching-software-fuer-berater/',
        icon: 'academic-cap-outline',
      },
      {
        name: 'Handwerker Software',
        description: 'Dein Handwerker Business in der Hosentasche.',
        href: '/branchen/handwerker-software/',
        icon: 'wrench-screwdriver-outline',
      },
      {
        name: 'Praxis Software',
        description: 'Geeignete Praxissoftware für Therapeuten & Co.',
        href: '/branchen/praxissoftware-arzte-therapeuten/',
        icon: 'heart-outline',
      },
    ],
    actions: [
      {
        name: 'Demo ansehen',
        href: 'https://www.youtube.com/watch?v=gfRp2sI1lMU',
        external: true,
        icon: 'eye-outline',
      },
      {
        name: 'On-Boarding buchen',
        href: 'https://www.orbnet.de/p/click/onboarding',
        external: true,
        icon: 'chat-bubble-left-ellipsis-outline',
      },
    ],
  },
  {
    name: 'Preise',
    href: '/preise/',
    children: [],
    actions: [],
  },
  {
    name: 'Blog',
    href: '/blog/',
    children: [],
    actions: [],
  },
];
