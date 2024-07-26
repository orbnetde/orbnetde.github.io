import './cookieconsent.umd.js';

CookieConsent.run({
  categories: {
    analytics: {},
  },
  language: {
    default: 'de',
    translations: {
      de: {
        consentModal: {
          title: 'Wir nutzen Cookies',
          description: 'Wir verwenden Cookies und andere Technologien auf unserer Webseite. Einige von ihnen sind essenziell, während andere uns helfen, diese Webseite und Ihre Erfahrung zu verbessern. Weitere Informationen über die Verwendung Ihrer Daten finden Sie in unserer Datenschutzerklärung.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          showPreferencesBtn: 'Individuelle Einstellungen',
        },
        preferencesModal: {
          title: 'Cookie Einstellungen bearbeiten',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          savePreferencesBtn: 'Aktuelle Auswahl akzeptieren',
          closeIconLabel: 'Schließen',
          sections: [{
            title: 'Google Analytics',
            description: 'Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.',
            linkedCategory: 'analytics',
          }],
        },
      },
    },
  },
  guiOptions: {
    consentModal: {
      layout: 'bar inline',
      position: 'bottom',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'bar wide',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
});
