const messages = {
    en: {
        call: 'Call Us',
        welcome: {
            welcome : 'Welcome visitor you can',
            login: 'login',
            or: 'or',
            create: 'create an account'
        },
        placeholder: 'Search entire store here...',
        userMenu: {
            account: 'my account',
            wishlist: 'my wishlist',
            login: 'log in',
            singup: 'sign up'
        },
        cartModal: {
            cart: 'Cart',
            header: 'Recently added item(s)',
            prod1: 'Faddywax Fragrance Diffuser Set Gardenia',
            prod2: 'Caldrea Linen and Room Spray',
            btn1: 'View shopping cart',
            btn2: 'Proceed to Checkout'
        },
        menu: {
            1: 'Home',
            2: 'Solids',
            3: 'Liquids',
            4: 'Spray',
            5: 'Electrics',
            6: 'For cars'
        },
        slider: {
            header: 'Breeze Noticeables',
            text1: 'The new series of natural air fresheners.',
            text2: 'Febreze Noticeables Meadows & Rain',
            text3: 'Air Freshener Refill.'
        },
        banner: {
            header1: 'Best price',
            header2: 'New smells',
            header3: 'Only natural',
            text1: 'this week',
            text2: 'in the next series',
            text3: 'air fresheners'
        },
        form: {
            header1: 'Sign Up',
            header2: 'Log In',
            email: 'Email',
            password: 'Password',
            confirm: 'Confirm Password',
            btn1: 'Create My Account',
            btn2: 'Log In To My Account'

        }
    },
    gm: {
        call: 'Rufen Sie Uns',
        welcome: {
            welcome : 'Willkommener Besucher, den Sie können',
            login: 'anmeldung',
            or: 'oder',
            create: 'ein Konto erstellen'
        },
        placeholder: 'Search eDurchsuche hier den gesamten Laden...',
        userMenu: {
            account: 'mein Konto',
            wishlist: 'Meine Wunschliste',
            login: 'Einloggen',
            singup: 'Anmelden'
        },
        cartModal: {
            cart: 'Wagen',
            header: 'Kürzlich hinzugefügte Artikel',
            prod1: 'Faddywax Duft Diffusor Set Gardenia',
            prod2: 'Caldrea Leinen- und Raumspray',
            btn1: 'Einkaufswagen anzeigen',
            btn2: 'Zur Kasse'
        },
        menu: {
            1: 'Zuhause',
            2: 'Feststoffe',
            3: 'Flüssigkeiten',
            4: 'Sprühen',
            5: 'Elektrik',
            6: 'Für Autos'
        },
        slider: {
            header: 'Breeze Noticeables',
            text1: 'Die neue Serie natürlicher Lufterfrischer.',
            text2: 'Febreze Noticeables Meadows & Rain',
            text3: 'Lufterfrischer nachfüllen.'
        },
        banner: {
            header1: 'Bestpreis',
            header2: 'Neue Gerüche',
            header3: 'Nur natürlich',
            text1: 'diese Woche',
            text2: 'in der nächsten Serie',
            text3: 'lufterfrischer'
        },
        form: {
            header1: 'Anmelden',
            header2: 'Einloggen',
            email: 'Email',
            password: 'Passwort',
            confirm: 'Passwort Bestätigen',
            btn1: 'Erstelle meinen Account',
            btn2: 'In mein Konto einloggen'
        }
    },
    fr: {
        call: 'Appelez Nous',
        welcome: {
            welcome : 'Bienvenue visiteur, vous pouvez',
            login: "s'identifier",
            or: 'ou',
            create: 'créer un compte'
        },
        placeholder: 'Parcourez le magasin entier ici...',
        userMenu: {
            account: 'Mon compte',
            wishlist: "Ma liste d'envies",
            login: "s'identifier",
            singup: "s'inscrire"
        },
        cartModal: {
            cart: 'Chariot',
            header: 'Article ajouté récemment',
            prod1: 'Ensemble de diffuseur de parfum Faddywax Gardenia',
            prod2: 'Linge de maison et vaporisateur Caldrea',
            btn1: "Voir Panier d'achat",
            btn2: 'Passer à la caisse'
        },
        menu: {
            1: 'Accueil',
            2: 'Solides',
            3: 'Liquides',
            4: 'Vaporisateur',
            5: 'Électrique',
            6: 'Pour les voitures'
        },
        slider: {
            header: 'Breeze Noticeables',
            text1: "La nouvelle série d'assainisseurs d'air naturels.",
            text2: 'Febreze Noticeables Meadows & Rain',
            text3: "Recharge Assainisseur D'air."
        },
        banner: {
            header1: 'Meilleur prix',
            header2: 'Nouvelles odeurs',
            header3: 'Seulement naturel',
            text1: 'cette semaine',
            text2: 'dans la prochaine série',
            text3: "assainisseurs d'air"
        },
        form: {
            header1: "S'inscrire",
            header2: "S'identifier",
            email: 'Email',
            password: 'Mot de passe',
            confirm: 'Passwort bestätigen',
            btn1: 'Créer mon compte',
            btn2: 'Connexion à mon compte'
        }
    }
  }

  const numberFormats = {
    'en-US': {
      currency: {
        style: 'currency', currency: 'USD'
      }
    },
    'de-DE': {
      currency: {
        style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'
      }
    },
    'en-GB': {
        currency: {
            style: 'currency', currency: 'GBP', currencyDisplay: 'symbol'
        }
    }
  }
  
  const i18n = new VueI18n({
    locale: 'en', 
    messages,
    numberFormats
  })
  

  new Vue({
    i18n,
    methods: {
        setLang(lang) {
            i18n.locale = lang
        },
        // setCarrency(cash) {
        //     i18n.locale = cash
        // }
    }
  }).$mount('#app')
