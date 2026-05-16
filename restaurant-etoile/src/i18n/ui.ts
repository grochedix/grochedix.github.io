import type { Locale } from '../types/locale'

type Nav = {
  home: string
  menu: string
  team: string
  reserve: string
  ariaMain: string
}
type LangLabel = { fr: string; en: string; nl: string; de: string }

export type UiBundle = {
  nav: Nav
  lang: LangLabel
  langAria: string
  brandTag: string
  home: {
    kicker: string
    title1: string
    titleAccent: string
    lead: string
    cta: string
    splitKicker: string
    splitTitle: string
    splitBody: string
    quote: string
    quoteCite: string
  }
  menuSection: { kicker: string; title: string; desc: string }
  menuBook: {
    hint: string
    prev: string
    next: string
    goTo: string
    navRegion: string
  }
  team: {
    title: string
    kicker: string
    p1: string
    p2: string
    p3: string
    chefTitle: string
    chefBio: string
    teamTitle: string
    teamBio: string
    quote: string
    altChef: string
    altRoom: string
  }
  reserve: {
    title: string
    kicker: string
    intro: string
    hoursHint: string
    date: string
    time: string
    periodLunch: string
    periodDinner: string
    noSlots: string
    guests: string
    name: string
    email: string
    submit: string
    demo: string
    success: string
    guestOption: (n: number) => string
  }
  notFound: {
    title: string
    body: string
    cta: string
  }
  footer: {
    line1: string
    line2: string
    hoursTitle: string
    hoursLunch: string
    hoursDinner: string
    hoursDays: string
    hoursClosed: string
    mapTitle: string
    mapIframeTitle: string
    socialTitle: string
    socialDemo: string
    socialInstagram: string
    socialWhatsapp: string
    socialFacebook: string
  }
}

export const ui: Record<Locale, UiBundle> = {
  fr: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      team: 'Maison',
      reserve: 'Réserver',
      ariaMain: 'Navigation principale',
    },
    lang: { fr: 'FR', en: 'EN', nl: 'NL', de: 'DE' },
    langAria: 'Choisir la langue',
    brandTag: 'Bruxelles',
    home: {
      kicker: 'Une étoile — cuisine belge d’exception',
      title1: 'L’élégance du terroir,',
      titleAccent: 'l’émotion du geste',
      lead:
        'Dans un cadre feutré près du Parc Royal, nous célébrons les produits belges : mer du Nord, Ardennes, Hesbaye et vignoble mosan — en menus dégustation qui évoluent au rythme des saisons.',
      cta: 'Demander une table',
      splitKicker: 'Maison',
      splitTitle: 'Une table intime',
      splitBody:
        'Vingt-six couverts seulement, service attentif sans ostentation, cave tournée vers les vins de Belgique et du pourtour lorrain. Tenue élégante appréciée.',
      quote:
        '« Nous servons la Belgique avec la précision d’un chef et la chaleur d’une auberge. »',
      quoteCite: '— Chef Thomas Verlinden',
    },
    menuSection: {
      kicker: 'Carte',
      title: 'Le menu en pages',
      desc:
        'Feuilletez notre dégustation comme un menu imprimé : chaque chapitre se tourne sur le côté gauche, avec le relief du papier et la lumière du salon.',
    },
    menuBook: {
      hint:
        'Tournez les pages comme un menu — flèches, points ou glisser sur mobile.',
      prev: 'Page précédente',
      next: 'Page suivante',
      goTo: 'Aller à',
      navRegion: 'Pagination du menu',
    },
    team: {
      title: 'Le chef & l’équipe',
      kicker: 'Notre histoire',
      p1:
        'En 1987, une ancienne remise de pavés de pierre bleue devient une petite salle à manger : l’« Auberge du Pavé » naît d’un pari entre amoureux du plat pays et de la gastronomie.',
      p2:
        'Après des années dans les maisons bruxelloises et flamandes, Thomas Verlinden reprend la direction en 2014. Il y installe une cuisine belge affirmée : sauces longues, jus clairs, humour discret dans l’assiette.',
      p3:
        'Aujourd’hui, une brigade soudée — salle et cuisine — accueille chaque soir une poignée de tables. Nous croyons qu’un restaurant étoilé doit d’abord ressembler à une maison.',
      chefTitle: 'Thomas Verlinden',
      chefBio:
        'Chef exécutif, passionné par les artisans du Nord et les légumes des maraîchers wallons. Il compose des menus qui racontent un voyage en Belgique, sans jamais crier trop fort.',
      teamTitle: 'L’équipe',
      teamBio:
        'Camille au service des vins, Mehdi en salle, Inès en pâtisserie, et toute l’équipe en cuisine : nous travaillons en cercle restreint pour garder la même exigence du premier au dernier couvert.',
      quote:
        '« Ici, l’étoile est un repère — pas un décor. Ce qui compte, c’est le geste juste et le sourire sincère. »',
      altChef: 'Le chef au passe',
      altRoom: 'La salle à manger',
    },
    reserve: {
      title: 'Réserver une table',
      kicker: 'Disponibilités',
      intro:
        'Choisissez une date, une heure et le nombre de convives. Ceci est une démonstration : aucune réservation réelle n’est enregistrée.',
      hoursHint:
        'Service : midi 12h00–14h00 et soir 19h00–22h00 — fermé le lundi.',
      date: 'Date',
      time: 'Heure',
      periodLunch: 'Midi',
      periodDinner: 'Soir',
      noSlots: 'Aucun créneau — choisissez une autre date.',
      guests: 'Convives',
      name: 'Nom',
      email: 'E-mail',
      submit: 'Confirmer la demande',
      demo: 'Démonstration — pas de serveur connecté.',
      success: 'Merci ! Votre sélection (démo) :',
      guestOption: (n) => `${n} ${n === 1 ? 'personne' : 'personnes'}`,
    },
    notFound: {
      title: 'Page introuvable',
      body: "L'adresse demandée n'existe pas ou le lien est incorrect.",
      cta: "Retour à l'accueil",
    },
    footer: {
      line1: 'L’Auberge du Pavé',
      line2: 'Rue de la Régence 12, 1000 Bruxelles',
      hoursTitle: 'Horaires',
      hoursLunch: 'Déjeuner : 12h00 – 14h00',
      hoursDinner: 'Dîner : 19h00 – 22h00',
      hoursDays: 'Du mardi au dimanche',
      hoursClosed: 'Fermé le lundi',
      mapTitle: 'Localisation',
      mapIframeTitle: 'Carte — Rue de la Régence 12, Bruxelles',
      socialTitle: 'Réseaux sociaux',
      socialDemo: 'Liens de démonstration',
      socialInstagram: 'Instagram',
      socialWhatsapp: 'WhatsApp',
      socialFacebook: 'Facebook',
    },
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      team: 'The house',
      reserve: 'Book',
      ariaMain: 'Main navigation',
    },
    lang: { fr: 'FR', en: 'EN', nl: 'NL', de: 'DE' },
    langAria: 'Choose language',
    brandTag: 'Brussels',
    home: {
      kicker: 'One star — exceptional Belgian cuisine',
      title1: 'The elegance of the land,',
      titleAccent: 'the emotion of craft',
      lead:
        'In an intimate setting near the Royal Park, we celebrate Belgian produce: the North Sea, the Ardennes, Hesbaye and the Meuse wine country — tasting menus that follow the seasons.',
      cta: 'Request a table',
      splitKicker: 'The house',
      splitTitle: 'An intimate table',
      splitBody:
        'Just twenty-six seats, attentive service without pretence, and a cellar focused on Belgian wines and the nearby Moselle. Smart dress appreciated.',
      quote:
        '“We serve Belgium with a chef’s precision and an innkeeper’s warmth.”',
      quoteCite: '— Chef Thomas Verlinden',
    },
    menuSection: {
      kicker: 'Menu',
      title: 'The menu in pages',
      desc:
        'Browse our tasting menu like a printed booklet: each chapter turns on the left, with the texture of paper and the glow of the dining room.',
    },
    menuBook: {
      hint:
        'Turn the pages like a real menu — arrows, dots, or swipe on your phone.',
      prev: 'Previous page',
      next: 'Next page',
      goTo: 'Go to',
      navRegion: 'Menu pagination',
    },
    team: {
      title: 'The chef & the team',
      kicker: 'Our story',
      p1:
        'In 1987, a former blue-stone paver’s workshop became a small dining room: “L’Auberge du Pavé” was born from a wager between lovers of the Low Countries and fine cooking.',
      p2:
        'After years in Brussels and Flemish houses, Thomas Verlinden took the helm in 2014 and anchored a clearly Belgian kitchen: long sauces, clear jus, a quiet wit on the plate.',
      p3:
        'Today a tight brigade — dining room and kitchen — welcomes a handful of tables each night. We believe a starred restaurant should feel like a home first.',
      chefTitle: 'Thomas Verlinden',
      chefBio:
        'Executive chef, devoted to North Sea artisans and Walloon market gardeners. His menus tell a journey through Belgium without ever shouting.',
      teamTitle: 'The team',
      teamBio:
        'Camille on wine, Mehdi in the dining room, Inès on pastry, and the whole kitchen crew: we work in a small circle so the first guest and the last receive the same care.',
      quote:
        '“Here, the star is a bearing — not a prop. What matters is the right gesture and a sincere smile.”',
      altChef: 'Chef at the pass',
      altRoom: 'The dining room',
    },
    reserve: {
      title: 'Book a table',
      kicker: 'Availability',
      intro:
        'Pick a date, time and party size. This is a demo — no real booking is stored.',
      hoursHint:
        'Service: lunch 12:00–2:00 p.m. and dinner 7:00–10:00 p.m. — closed on Mondays.',
      date: 'Date',
      time: 'Time',
      periodLunch: 'Lunch',
      periodDinner: 'Dinner',
      noSlots: 'No slots left — please pick another date.',
      guests: 'Guests',
      name: 'Name',
      email: 'Email',
      submit: 'Send request',
      demo: 'Demo — no backend connected.',
      success: 'Thank you! Your selection (demo):',
      guestOption: (n) => `${n} ${n === 1 ? 'guest' : 'guests'}`,
    },
    notFound: {
      title: 'Page not found',
      body: 'The address you requested does not exist or the link is incorrect.',
      cta: 'Back to home',
    },
    footer: {
      line1: 'L’Auberge du Pavé',
      line2: 'Rue de la Régence 12, 1000 Brussels',
      hoursTitle: 'Opening hours',
      hoursLunch: 'Lunch: 12:00 – 2:00 p.m.',
      hoursDinner: 'Dinner: 7:00 – 10:00 p.m.',
      hoursDays: 'Tuesday to Sunday',
      hoursClosed: 'Closed on Mondays',
      mapTitle: 'Location',
      mapIframeTitle: 'Map — Rue de la Régence 12, Brussels',
      socialTitle: 'Social',
      socialDemo: 'Demo links',
      socialInstagram: 'Instagram',
      socialWhatsapp: 'WhatsApp',
      socialFacebook: 'Facebook',
    },
  },
  nl: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      team: 'Het huis',
      reserve: 'Reserveren',
      ariaMain: 'Hoofdnavigatie',
    },
    lang: { fr: 'FR', en: 'EN', nl: 'NL', de: 'DE' },
    langAria: 'Taal kiezen',
    brandTag: 'Brussel',
    home: {
      kicker: 'Eén ster — uitzonderlijke Belgische keuken',
      title1: 'De elegantie van het land,',
      titleAccent: 'de emotie van het ambacht',
      lead:
        'In een intieme setting bij het Koninklijk Park vieren we Belgische producten: de Noordzee, de Ardennen, de Haspengouw en de Maaswijnstreek — proefmenu’s die meebewegen met de seizoenen.',
      cta: 'Tafel aanvragen',
      splitKicker: 'Het huis',
      splitTitle: 'Een intieme tafel',
      splitBody:
        'Slechts zesentwintig couverts, attent zonder pretentie, en een kelder gericht op Belgische wijnen en de Moezel. Nette kledij wordt gewaardeerd.',
      quote:
        '“Wij serveren België met de precisie van een chef en de warmte van een herberg.”',
      quoteCite: '— Chef Thomas Verlinden',
    },
    menuSection: {
      kicker: 'Kaart',
      title: 'Het menu op pagina’s',
      desc:
        'Blader door ons proefmenu als een gedrukt boekje: elk hoofdstuk slaat links om, met het papier en het licht van de zaal.',
    },
    menuBook: {
      hint:
        'Sla de bladzijden om als een echt menu — pijlen, stippen of veeg op je telefoon.',
      prev: 'Vorige pagina',
      next: 'Volgende pagina',
      goTo: 'Ga naar',
      navRegion: 'Menu-paginering',
    },
    team: {
      title: 'De chef & het team',
      kicker: 'Ons verhaal',
      p1:
        'In 1987 wordt een oude steenopslag een kleine eetzaal: “L’Auberge du Pavé” ontstaat uit een weddenschap tussen liefhebbers van de Lage Landen en gastronomie.',
      p2:
        'Na jaren in Brusselse en Vlaamse huizen neemt Thomas Verlinden in 2014 de leiding en verankert een duidelijk Belgische keuken: lange sauzen, heldere jussen, een subtiele humor op het bord.',
      p3:
        'Vandaag verwelkomt een hechte brigade — zaal en keuken — elke avond een handvol tafels. Wij geloven dat een sterrenrestaurant eerst een huis moet zijn.',
      chefTitle: 'Thomas Verlinden',
      chefBio:
        'Executive chef, verbonden met ambachtslui van de Noordzee en Waalse markttuinders. Zijn menu’s vertellen een reis door België, zonder te schreeuwen.',
      teamTitle: 'Het team',
      teamBio:
        'Camille met de wijnen, Mehdi in de zaal, Inès met het nagerecht, en de hele keukenploeg: we werken in een kleine kring zodat elke gast dezelfde zorg krijgt.',
      quote:
        '“Hier is de ster een kompas — geen decor. Wat telt, is het juiste gebaar en een oprechte glimlach.”',
      altChef: 'Chef aan de uitgifte',
      altRoom: 'De eetzaal',
    },
    reserve: {
      title: 'Een tafel reserveren',
      kicker: 'Beschikbaarheid',
      intro:
        'Kies een datum, uur en aantal personen. Dit is een demo — er wordt niets opgeslagen.',
      hoursHint:
        'Service: middag 12.00–14.00 uur en avond 19.00–22.00 uur — gesloten op maandag.',
      date: 'Datum',
      time: 'Uur',
      periodLunch: 'Middag',
      periodDinner: 'Avond',
      noSlots: 'Geen uren beschikbaar — kies een andere datum.',
      guests: 'Personen',
      name: 'Naam',
      email: 'E-mail',
      submit: 'Verzoek verzenden',
      demo: 'Demo — geen server gekoppeld.',
      success: 'Dank u! Uw keuze (demo):',
      guestOption: (n) => `${n} ${n === 1 ? 'persoon' : 'personen'}`,
    },
    notFound: {
      title: 'Pagina niet gevonden',
      body: 'Het opgevraagde adres bestaat niet of de link is onjuist.',
      cta: 'Terug naar start',
    },
    footer: {
      line1: 'L’Auberge du Pavé',
      line2: 'Rue de la Régence 12, 1000 Brussel',
      hoursTitle: 'Openingsuren',
      hoursLunch: 'Middag: 12.00 – 14.00 uur',
      hoursDinner: 'Avond: 19.00 – 22.00 uur',
      hoursDays: 'Dinsdag t/m zondag',
      hoursClosed: 'Gesloten op maandag',
      mapTitle: 'Locatie',
      mapIframeTitle: 'Kaart — Rue de la Régence 12, Brussel',
      socialTitle: 'Social media',
      socialDemo: 'Demolinks',
      socialInstagram: 'Instagram',
      socialWhatsapp: 'WhatsApp',
      socialFacebook: 'Facebook',
    },
  },
  de: {
    nav: {
      home: 'Start',
      menu: 'Menü',
      team: 'Das Haus',
      reserve: 'Reservieren',
      ariaMain: 'Hauptnavigation',
    },
    lang: { fr: 'FR', en: 'EN', nl: 'NL', de: 'DE' },
    langAria: 'Sprache wählen',
    brandTag: 'Brüssel',
    home: {
      kicker: 'Ein Stern — außergewöhnliche belgische Küche',
      title1: 'Die Eleganz des Terroirs,',
      titleAccent: 'die Emotion des Handwerks',
      lead:
        'In einem zurückhaltenden Ambiente beim Königlichen Park feiern wir belgische Produkte: Nordsee, Ardennen, Hesbaye und die Maas-Weinregion — Degustationsmenüs im Rhythmus der Jahreszeiten.',
      cta: 'Tisch anfragen',
      splitKicker: 'Das Haus',
      splitTitle: 'Ein intimer Tisch',
      splitBody:
        'Nur sechsundzwanzig Plätze, aufmerksamer Service ohne Pose, und ein Keller mit Fokus auf belgische Weine und die nahe Mosel. Elegante Kleidung willkommen.',
      quote:
        '„Wir servieren Belgien mit der Präzision eines Küchenchefs und der Wärme eines Gasthauses.“',
      quoteCite: '— Chef Thomas Verlinden',
    },
    menuSection: {
      kicker: 'Karte',
      title: 'Das Menü in Seiten',
      desc:
        'Blättern Sie durch unser Degustationsmenü wie durch ein gedrucktes Heft: jedes Kapitel schlägt links um, mit Papierstruktur und dem Licht des Saals.',
    },
    menuBook: {
      hint:
        'Blättern Sie wie in einem echten Menü — Pfeile, Punkte oder Wischen auf dem Handy.',
      prev: 'Vorherige Seite',
      next: 'Nächste Seite',
      goTo: 'Gehe zu',
      navRegion: 'Menü-Seitenwahl',
    },
    team: {
      title: 'Der Chef & das Team',
      kicker: 'Unsere Geschichte',
      p1:
        'Im Jahr 1987 wird aus einem alten Pflastersteinlager ein kleiner Speisesaal: „L’Auberge du Pavé“ entsteht aus einer Wette zwischen Liebhabern der Region und der Haute Cuisine.',
      p2:
        'Nach Jahren in Brüsseler und flämischen Häusern übernimmt Thomas Verlinden 2014 die Führung und verankert eine klar belgische Küche: lange Saucen, klare Jus, ein leiser Witz auf dem Teller.',
      p3:
        'Heute empfängt eine enge Brigade — Service und Küche — jeden Abend wenige Tische. Wir glauben, dass ein Sternerestaurant zuerst wie ein Zuhause wirken soll.',
      chefTitle: 'Thomas Verlinden',
      chefBio:
        'Küchenchef, verbunden mit Handwerkern der Nordsee und wallonischen Gemüsebauern. Seine Menüs erzählen eine Reise durch Belgien — ohne zu schreien.',
      teamTitle: 'Das Team',
      teamBio:
        'Camille beim Wein, Mehdi im Service, Inès bei der Patisserie und die ganze Küchencrew: wir arbeiten im kleinen Kreis, damit jeder Gast dieselbe Sorgfalt erfährt.',
      quote:
        '„Hier ist der Stern eine Peilung — kein Dekor. Zählt der richtige Griff und ein aufrichtiges Lächeln.“',
      altChef: 'Chef an der Pass',
      altRoom: 'Der Speisesaal',
    },
    reserve: {
      title: 'Tisch reservieren',
      kicker: 'Verfügbarkeit',
      intro:
        'Wählen Sie Datum, Uhrzeit und Personenzahl. Dies ist eine Demo — es wird nichts gespeichert.',
      hoursHint:
        'Service: Mittag 12:00–14:00 Uhr und Abend 19:00–22:00 Uhr — montags geschlossen.',
      date: 'Datum',
      time: 'Uhrzeit',
      periodLunch: 'Mittag',
      periodDinner: 'Abend',
      noSlots: 'Keine Uhrzeit frei — bitte anderes Datum wählen.',
      guests: 'Personen',
      name: 'Name',
      email: 'E-Mail',
      submit: 'Anfrage senden',
      demo: 'Demo — kein Backend verbunden.',
      success: 'Danke! Ihre Auswahl (Demo):',
      guestOption: (n) => `${n} ${n === 1 ? 'Person' : 'Personen'}`,
    },
    notFound: {
      title: 'Seite nicht gefunden',
      body: 'Die angeforderte Adresse existiert nicht oder der Link ist fehlerhaft.',
      cta: 'Zur Startseite',
    },
    footer: {
      line1: 'L’Auberge du Pavé',
      line2: 'Rue de la Régence 12, 1000 Brüssel',
      hoursTitle: 'Öffnungszeiten',
      hoursLunch: 'Mittag: 12:00 – 14:00 Uhr',
      hoursDinner: 'Abend: 19:00 – 22:00 Uhr',
      hoursDays: 'Dienstag bis Sonntag',
      hoursClosed: 'Montags geschlossen',
      mapTitle: 'Standort',
      mapIframeTitle: 'Karte — Rue de la Régence 12, Brüssel',
      socialTitle: 'Soziale Netzwerke',
      socialDemo: 'Demo-Links',
      socialInstagram: 'Instagram',
      socialWhatsapp: 'WhatsApp',
      socialFacebook: 'Facebook',
    },
  },
}

export function getUi(locale: Locale): UiBundle {
  return ui[locale] ?? ui.fr
}
