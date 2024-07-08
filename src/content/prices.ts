interface Features {
  title: string;
  amount: boolean | number;
}

interface Price {
  popular: boolean,
  packageName: string,
  users: number,
  price: {
    monthly: string,
    yearly: string
  },
  subtitle: string,
  btn: string,
  purchaseLink: string,
  features: Array<Features>,
}

export const prices: Array<Price> = [
  {
    popular: false,
    packageName: 'Free',
    users: 1,
    price: { monthly: '0', yearly: '0' },
    subtitle: 'Features',
    btn: 'Registrieren',
    purchaseLink: 'https://my.orbnet.de/account/register/',
    features: [
      { title: 'Benutzer', amount: 1 },
      { title: 'Rechnungen schreiben', amount: 5 },
      { title: 'Angebote schreiben', amount: true },
    ],
  },
  {
    popular: false,
    packageName: 'Starter',
    users: 1,
    price: { monthly: '25', yearly: '240' },
    subtitle: 'Features',
    btn: 'Auswählen',
    purchaseLink: 'https://my.orbnet.de/account/register/',
    features: [
      { title: 'Benutzer', amount: 1 },
      { title: 'Rechnungen schreiben', amount: true },
      { title: 'Angebote schreiben', amount: true },
    ],
  },
  {
    popular: true,
    packageName: 'Premium',
    users: 10,
    price: { monthly: '50', yearly: '480' },
    subtitle: 'Features',
    btn: 'Abheben',
    purchaseLink: 'https://my.orbnet.de/account/register/',
    features: [
      { title: 'Benutzer', amount: 10 },
      { title: 'Rechnungen schreiben', amount: true },
      { title: 'Angebote schreiben', amount: true },
    ],
  },
];
