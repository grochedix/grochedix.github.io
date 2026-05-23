export type Locale = 'fr' | 'en' | 'nl' | 'de'

const LOCALES: Locale[] = ['fr', 'en', 'nl', 'de']

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as string[]).includes(value)
}

export const LOCALE_STORAGE_KEY = 'lunathon-locale'

/** ISO 639-1 style labels for the language switcher */
export const LOCALE_OPTIONS: { locale: Locale; label: string }[] = [
  { locale: 'fr', label: 'FR' },
  { locale: 'en', label: 'EN' },
  { locale: 'nl', label: 'NL' },
  { locale: 'de', label: 'DE' },
]

export interface Copy {
  htmlLang: string
  metaDescription: string
  docTitle: string
  navSections: string
  langSwitcher: string
  theme: {
    switcher: string
    dark: string
    light: string
  }
  nav: {
    course: string
    dates: string
    parcours: string
    registration: string
    partners: string
  }
  hero: { badge: string; title: string; lead: string }
  orbitEarth: string
  orbitMoon: string
  course: { title: string; p1: string; p2: string }
  dates: {
    title: string
    month: string
    day30: string
    day31: string
    footnote: string
  }
  parcours: { title: string; steps: [string, string, string, string] }
  registration: {
    title: string
    fee: string
    labelName: string
    placeholderName: string
    labelEmail: string
    placeholderEmail: string
    labelCategory: string
    catSolo: string
    catRelay: string
    catWalk: string
    submit: string
    note: string
    toast: string
  }
  partners: {
    title: string
    items: { name: string; line: string }[]
  }
  footer: {
    line1: string
    line2: string
    socialTitle: string
    socialNav: string
    socialHint: string
    socialFacebook: string
    socialInstagram: string
    socialWhatsapp: string
  }
}

export const COPY: Record<Locale, Copy> = {
  fr: {
    htmlLang: 'fr',
    metaDescription:
      'Lunathón — le marathon (non) officiel entre la Terre et la Lune. Endurance, calendrier et bon sens.',
    docTitle: 'Lunathón — Marathon Terre–Lune',
    navSections: 'Sections',
    langSwitcher: 'Langue',
    theme: {
      switcher: "Thème d'affichage",
      dark: 'Sombre',
      light: 'Clair',
    },
    nav: {
      course: 'La course',
      dates: 'Dates',
      parcours: 'Parcours',
      registration: 'Inscription',
      partners: 'Partenaires',
    },
    hero: {
      badge: 'Édition zéro — calendrier lunaire approuvé',
      title: 'Le marathon entre la Terre et la Lune',
      lead:
        "384\u00a0400\u00a0km d'adrénaline, zéro virage serré, une gravité discrète et un dossard qui tient dans un cargo spatial. Si vous finissez avant le prochain alignement des planètes, on vous offre un regard admiratif (non contractuel).",
    },
    orbitEarth: 'Départ Terre',
    orbitMoon: 'Arrivée Lune',
    course: {
      title: 'Présentation de la course',
      p1:
        'Le **Lunathón** est la seule épreuve au monde où le chronomètre peut afficher « environ trois jours » sans que personne ne crie au scandale. Vous quittez le pas de tir habituel (un parking près de Baïkonour, imagination requise), vous longez l’atmosphère comme on longe une file d’attente, puis vous enchaînez le vide sidéral en mode « j’ai oublié de couper mon appli running ».',
      p2:
        'Catégories ouvertes : **solo**, **relai orbital** (minimum 12\u00a0000 coureurs pour tenir la corde), et **marche nordique à bâtons télescopiques** (interdit au-dessus de Mach\u00a00,000001). Les chaussures à crampons sont déconseillées sur la poussière lunaire : bruit de pastilles effervescentes géantes et satellites perturbés.',
    },
    dates: {
      title: 'Dates clés',
      month: 'février',
      day30:
        'Journée technique : retrait des dossards, pesée des ambitions et atelier « Comment respirer quand il n’y a rien à respirer ».',
      day31:
        'Départ canon à **25\u00a0h\u00a012** (fuseau Neptune, pratique pour éviter le réveil trop tôt). Remise des médailles en orbite géostationnaire si la météo coopère — c’est-à-dire jamais, mais l’intention compte.',
      footnote:
        'Si votre agenda refuse ces dates, c’est normal : il manque de sens cosmique. Mettez à jour vers la version « réalité alternative ».',
    },
    parcours: {
      title: 'Parcours',
      steps: [
        '**0\u00a0km** — Départ sous les acclamations d’une foule composée à 100\u00a0% de CGI bienveillante.',
        '**~\u00a0100\u00a0km** — Premier ravitaillement en gelée d’hydrogène saveur « mystère quantique » (goût : métallique).',
        '**~\u00a0190\u00a0000\u00a0km** — Point médian : selfie obligatoire avec la Terre. Hashtag imposé : **#JaiPresqueFiniLol**.',
        '**~\u00a0384\u00a0400\u00a0km** — Arrivée lunaire. Tapis rouge en régolithe, champagne sans bulles, discours du maire local — un caillou nommé « Bernard ».',
      ],
    },
    registration: {
      title: 'Inscription',
      fee:
        'Tarif unique : **42,195\u00a0€** (symbole fort, aucun lien mathématique avec la distance — nous assumons). Assurance « perte d’oxygène » incluse dans la limite des stocks inexistants.',
      labelName: 'Nom de course (ou pseudonyme héroïque)',
      placeholderName: 'ex. Capitaine Endurance',
      labelEmail: 'E-mail (dossier d’inscription fictif)',
      placeholderEmail: 'vous@exemple.com',
      labelCategory: 'Catégorie',
      catSolo: 'Solo intersidéral',
      catRelay: 'Relai orbital (équipe)',
      catWalk: 'Marche nordique lunaire',
      submit: 'Valider ma pré-inscription cosmique',
      note:
        'Aucune donnée n’est envoyée : vitrine pure. Le bouton fait avancer la paperasse interplanétaire dans votre tête uniquement.',
      toast:
        'Félicitations ! Dossier enregistré dans une variable React volatile. Présentez ce message au vide absolu le jour J — on vous reconnaîtra à l’aura.',
    },
    partners: {
      title: 'Partenaires',
      items: [
        {
          name: 'Gravité Minimale SA',
          line: '« Moins lourd, plus haut, toujours en retard sur les factures. »',
        },
        {
          name: 'NASA (Non Associée à cette Super Affaire)',
          line: 'Partenaire imaginaire. Toute ressemblance avec une agence réelle serait fortuite et flatteuse.',
        },
        {
          name: 'Snack Orbital™',
          line: 'Barres énergétiques au goût de vide spatial — autrement dit : carton.',
        },
        {
          name: 'Banque du Trou Noir',
          line: '« Votre argent disparaît… mais avec style. » Dossards en antimatière (non remboursables).',
        },
        {
          name: 'Pression Atmosphérique & Fils',
          line: 'Gonflage des egos au départ. Dégonflage automatique à 120\u00a0km d’altitude.',
        },
      ],
    },
    footer: {
      line1:
        'Lunathón — événement 100\u00a0% fictif, 0\u00a0% assuré. Aucun coureur n’a été blessé pendant la conception de ce site.',
      line2: 'Fait avec React et Vite — même les marathons lunaires méritent un hot reload.',
      socialTitle: 'Réseaux (fiction)',
      socialNav: 'Réseaux sociaux de démonstration',
      socialHint:
        'Liens factices vers example.org — aucun profil réel, aucune messagerie derrière.',
      socialFacebook: 'Facebook — lien de démonstration (example.org)',
      socialInstagram: 'Instagram — lien de démonstration (example.org)',
      socialWhatsapp: 'WhatsApp — lien de démonstration (example.org)',
    },
  },

  en: {
    htmlLang: 'en',
    metaDescription:
      'Lunathón — the (non-) official marathon from Earth to the Moon. Endurance, calendar sense, and common sense.',
    docTitle: 'Lunathón — Earth–Moon Marathon',
    navSections: 'Sections',
    langSwitcher: 'Language',
    theme: {
      switcher: 'Display theme',
      dark: 'Dark',
      light: 'Light',
    },
    nav: {
      course: 'The race',
      dates: 'Dates',
      parcours: 'Route',
      registration: 'Registration',
      partners: 'Partners',
    },
    hero: {
      badge: 'Edition zero — lunar calendar approved',
      title: 'The marathon from Earth to the Moon',
      lead:
        "384,400\u00a0km of adrenaline, zero hairpin turns, discreet gravity, and a bib that fits in a cargo bay. If you finish before the next planetary alignment, we offer an admiring glance (non-binding).",
    },
    orbitEarth: 'Start Earth',
    orbitMoon: 'Finish Moon',
    course: {
      title: 'About the race',
      p1:
        'The **Lunathón** is the only event where a stopwatch can read “about three days” without scandal. You leave the usual launch pad (a car park near Baikonur—imagination required), skim the atmosphere like a queue at the bakery, then cruise deep space in full “I forgot to stop my running app” mode.',
      p2:
        'Open categories: **solo**, **orbital relay** (minimum 12,000 runners to hold the rope), and **Nordic walking with telescopic poles** (forbidden above Mach\u00a00.000001). Spiked shoes are discouraged on lunar dust—they sound like giant effervescent tablets and upset the satellites.',
    },
    dates: {
      title: 'Key dates',
      month: 'February',
      day30:
        'Tech day: bib pickup, ambition weigh-in, and workshop “How to breathe when there is nothing to breathe.”',
      day31:
        'Mass start at **25:12** (Neptune time zone—great for not waking up too early). Medal ceremony in geostationary orbit if the weather plays along—i.e. never, but the thought counts.',
      footnote:
        'If your calendar rejects these dates, it probably lacks cosmic humour. Upgrade to the “alternate reality” calendar pack.',
    },
    parcours: {
      title: 'Route',
      steps: [
        '**0\u00a0km** — Start line cheered on by a crowd that is 100\u00a0% benevolent CGI.',
        '**~\u00a0100\u00a0km** — First aid station: hydrogen jelly with “quantum mystery” flavour (taste: metallic).',
        '**~\u00a0190,000\u00a0km** — Halfway selfie with Earth in the background. Mandatory hashtag: **#AlmostDoneLOL**.',
        '**~\u00a0384,400\u00a0km** — Lunar finish. Regolith red carpet, bubble-free champagne, speech by the local mayor—a pebble named “Bernard.”',
      ],
    },
    registration: {
      title: 'Registration',
      fee:
        'Flat fee: **€42.195** (strong symbolism, no mathematical link to the distance—we own it). “Oxygen loss” insurance included while non-existent supplies last.',
      labelName: 'Race name (or heroic alias)',
      placeholderName: 'e.g. Captain Endurance',
      labelEmail: 'Email (for the fictional registration file)',
      placeholderEmail: 'you@example.com',
      labelCategory: 'Category',
      catSolo: 'Intersidereal solo',
      catRelay: 'Orbital relay (team)',
      catWalk: 'Lunar Nordic walking',
      submit: 'Confirm my cosmic pre-registration',
      note:
        'Nothing is sent anywhere—this is a showcase site. The button only advances interplanetary paperwork in your imagination.',
      toast:
        'Congratulations! Your file lives in a volatile React variable. Show this message at the vacuum of space on race day—we will know you by your aura.',
    },
    partners: {
      title: 'Partners',
      items: [
        {
          name: 'Minimum Gravity Ltd',
          line: '“Lighter, higher, always late on invoices.”',
        },
        {
          name: 'NASA (Not Affiliated with this Super Deal)',
          line: 'Imaginary partner. Any resemblance to a real agency is coincidental and flattering.',
        },
        {
          name: 'Snack Orbital™',
          line: 'Energy bars that taste like the void of space—in other words, cardboard.',
        },
        {
          name: 'Black Hole Bank',
          line: '“Your money vanishes… with style.” Dark-matter bibs (non-refundable).',
        },
        {
          name: 'Atmospheric Pressure & Sons',
          line: 'Inflating egos before the start. Automatic deflation at 120\u00a0km altitude.',
        },
      ],
    },
    footer: {
      line1:
        'Lunathón — 100\u00a0% fictional event, 0\u00a0% insured. No runners were harmed while building this site.',
      line2: 'Built with React and Vite—even lunar marathons deserve hot reload.',
      socialTitle: 'Social (demo)',
      socialNav: 'Demo social links',
      socialHint: 'Placeholder links to example.org — no real profiles or chats.',
      socialFacebook: 'Facebook — demo link (example.org)',
      socialInstagram: 'Instagram — demo link (example.org)',
      socialWhatsapp: 'WhatsApp — demo link (example.org)',
    },
  },

  nl: {
    htmlLang: 'nl',
    metaDescription:
      'Lunathón — de (niet-)officiële marathon tussen de Aarde en de Maan. Uithouding, kalenderzin en gezond verstand.',
    docTitle: 'Lunathón — Aarde–Maanmarathon',
    navSections: 'Secties',
    langSwitcher: 'Taal',
    theme: {
      switcher: 'Weergavethema',
      dark: 'Donker',
      light: 'Licht',
    },
    nav: {
      course: 'De wedstrijd',
      dates: "Data",
      parcours: 'Parcours',
      registration: 'Inschrijving',
      partners: 'Partners',
    },
    hero: {
      badge: 'Editie nul — goedgekeurde maankalender',
      title: 'De marathon tussen de Aarde en de Maan',
      lead:
        "384.400\u00a0km adrenaline, geen haarspeldbochten, discrete zwaartekracht en een startnummer dat in een vrachtruim past. Als je eindigt vóór de volgende planetenstand, krijg je een bewonderende blik (niet-contractueel).",
    },
    orbitEarth: 'Start Aarde',
    orbitMoon: 'Finish Maan',
    course: {
      title: 'Over de wedstrijd',
      p1:
        'De **Lunathón** is het enige evenement waar een stopwatch “ongeveer drie dagen” mag tonen zonder schandaal. Je verlaat het gebruikelijke platform (een parkeerplaats bij Bajkonoer—fantasie vereist), strijkt langs de atmosfeer als een rij bij de bakker, en vliegt dan door de ruimte alsof je je hardloop-app bent vergeten uit te zetten.',
      p2:
        'Open categorieën: **solo**, **orbitaal estafetteteam** (minimaal 12.000 lopers voor het touw), en **Nordic walking met telescopische stokken** (verboden boven Mach\u00a00,000001). Pinnen op maanstof klinken als reuzenbruistabletten en storen satellieten.',
    },
    dates: {
      title: 'Belangrijke data',
      month: 'februari',
      day30:
        'Technische dag: startnummer ophalen, ambitie wegen, workshop “Ademen als er niets te ademen valt.”',
      day31:
        'Massastart om **25:12** (tijdzone Neptunus—handig om niet te vroeg op te staan). Medailles in geostationaire baan als het weer meewerkt—oftewel nooit, maar de intentie telt.',
      footnote:
        'Weigert je agenda deze data? Logisch: te weinig kosmisch gevoel voor humor. Update naar “alternatieve realiteit”.',
    },
    parcours: {
      title: 'Parcours',
      steps: [
        '**0\u00a0km** — Start onder toejuichingen van een menigte die 100\u00a0% goedaardige CGI is.',
        '**~\u00a0100\u00a0km** — Eerste bevoorrading: waterstofgel met smaak “quantummysterie” (smaak: metaal).',
        '**~\u00a0190.000\u00a0km** — Halverwege-selfie met de Aarde. Verplichte hashtag: **#BijnaKlaarLOL**.',
        '**~\u00a0384.400\u00a0km** — Maanfinish. Rood regoliettapijt, champagne zonder bubbels, toespraak van de burgemeester—een kiezelsteen genaamd “Bernard.”',
      ],
    },
    registration: {
      title: 'Inschrijving',
      fee:
        'Vast tarief: **€\u00a042,195** (sterk symbool, geen wiskundige link met de afstand—dat nemen we op de koop toe). Verzekering “verlies van zuurstof” zolang de niet-bestaande voorraad strekt.',
      labelName: 'Wedstrijdnaam (of helderlijke schuilnaam)',
      placeholderName: 'bijv. Kapitein Uithouding',
      labelEmail: 'E-mail (voor het fictieve dossier)',
      placeholderEmail: 'jij@voorbeeld.nl',
      labelCategory: 'Categorie',
      catSolo: 'Interstellair solo',
      catRelay: 'Orbitaal estafette (team)',
      catWalk: 'Lunar Nordic walking',
      submit: 'Bevestig mijn kosmische pre-inschrijving',
      note:
        'Er wordt niets verstuurd—dit is een vitrine. De knop laat alleen interplanetaire administratie in je hoofd vooruitgaan.',
      toast:
        'Gefeliciteerd! Je dossier staat in een vluchtige React-variabele. Toon dit bericht bij de receptie van het absolute vacuüm op racedag—we herkennen je aan je aura.',
    },
    partners: {
      title: 'Partners',
      items: [
        {
          name: 'Minimale Zwaartekracht NV',
          line: '“Lichter, hoger, altijd te laat met facturen.”',
        },
        {
          name: 'NASA (Niet Aangesloten bij deze Superdeal)',
          line: 'Denkbeeldige partner. Gelijkenis met een echte instantie is toevallig en vleierig.',
        },
        {
          name: 'Snack Orbital™',
          line: 'Energierepen die smaken naar de leegte van de ruimte—oftewel karton.',
        },
        {
          name: 'Bank van het Zwarte Gat',
          line: '“Je geld verdwijnt… met stijl.” Startnummers uit antimaterie (niet terugbetaalbaar).',
        },
        {
          name: 'Luchtdruk & Zonen',
          line: "Ego's opblazen vóór de start. Automatisch leeglopen op 120\u00a0km hoogte.",
        },
      ],
    },
    footer: {
      line1:
        'Lunathón — 100\u00a0% fictief evenement, 0\u00a0% verzekerd. Geen loper gewond tijdens het bouwen van deze site.',
      line2: 'Gemaakt met React en Vite—zelfs maanmarathons verdienen hot reload.',
      socialTitle: 'Socials (fictie)',
      socialNav: 'Demonstratielinks voor sociale netwerken',
      socialHint: 'Nep-links naar example.org — geen echte profielen of chats.',
      socialFacebook: 'Facebook — demolink (example.org)',
      socialInstagram: 'Instagram — demolink (example.org)',
      socialWhatsapp: 'WhatsApp — demolink (example.org)',
    },
  },

  de: {
    htmlLang: 'de',
    metaDescription:
      'Lunathón — der (in-)offizielle Marathon zwischen Erde und Mond. Ausdauer, Kalendersinn und gesunder Menschenverstand.',
    docTitle: 'Lunathón — Erde–Mond-Marathon',
    navSections: 'Abschnitte',
    langSwitcher: 'Sprache',
    theme: {
      switcher: 'Erscheinungsbild',
      dark: 'Dunkel',
      light: 'Hell',
    },
    nav: {
      course: 'Das Rennen',
      dates: 'Termine',
      parcours: 'Strecke',
      registration: 'Anmeldung',
      partners: 'Partner',
    },
    hero: {
      badge: 'Edition Null — Mondkalender genehmigt',
      title: 'Der Marathon zwischen Erde und Mond',
      lead:
        "384.400\u00a0km Adrenalin, keine Haarnadelkurven, dezente Schwerkraft und eine Startnummer, die in den Frachtraum passt. Wenn du vor der nächsten Planetenkonstellation fertig wirst, gibt es einen bewundernden Blick (unverbindlich).",
    },
    orbitEarth: 'Start Erde',
    orbitMoon: 'Ziel Mond',
    course: {
      title: 'Zum Rennen',
      p1:
        'Der **Lunathón** ist das einzige Event, bei dem die Stoppuhr „ungefähr drei Tage“ anzeigen darf, ohne Skandal. Du verlässt die übliche Rampe (ein Parkplatz bei Baikonur—Fantasie nötig), streifst die Atmosphäre wie eine Bäckerschlange, und cruisest dann im Modus „Ich habe die Lauf-App nicht beendet“.',
      p2:
        'Offene Kategorien: **Solo**, **Orbital-Staffel** (mindestens 12.000 Läufer fürs Seil), und **Nordic Walking mit Teleskopstöcken** (oberhalb Mach\u00a00,000001 verboten). Stollenschuhe auf Mondstaub klingen wie Riesen-Brausetabletten und stören Satelliten.',
    },
    dates: {
      title: 'Wichtige Termine',
      month: 'Februar',
      day30:
        'Techniktag: Startnummer, Ambitionen wiegen, Workshop „Atmen, wenn es nichts zum Atmen gibt.“',
      day31:
        'Massenstart um **25:12** (Neptun-Zeitzone—praktisch, um nicht zu früh aufzustehen). Medaillen in geostationärer Umlaufbahn, wenn das Wetter mitspielt—also nie, aber die Absicht zählt.',
      footnote:
        'Lehnt dein Kalender diese Daten ab? Normal—zu wenig kosmischer Humor. Update auf „alternative Realität“.',
    },
    parcours: {
      title: 'Strecke',
      steps: [
        '**0\u00a0km** — Start unter dem Jubel einer Menge aus 100\u00a0% wohlwollendem CGI.',
        '**~\u00a0100\u00a0km** — Erste Verpflegung: Wasserstoff-Gelee mit Geschmack „Quantenrätsel“ (schmeckt: metallisch).',
        '**~\u00a0190.000\u00a0km** — Selfie mit der Erde. Pflicht-Hashtag: **#FastFertigLOL**.',
        '**~\u00a0384.400\u00a0km** — Mond-Finish. Roter Teppich aus Regolith, Champagner ohne Bläschen, Rede des Bürgermeisters—ein Stein namens „Bernard.“',
      ],
    },
    registration: {
      title: 'Anmeldung',
      fee:
        'Pauschal: **42,195\u00a0€** (starkes Symbol, kein mathematischer Bezug zur Distanz—stehen wir zu). „Sauerstoffverlust“-Versicherung, solange der nicht existierende Vorrat reicht.',
      labelName: 'Renname (oder heldenhafter Alias)',
      placeholderName: 'z. B. Kapitän Ausdauer',
      labelEmail: 'E-Mail (für die fiktive Akte)',
      placeholderEmail: 'du@beispiel.de',
      labelCategory: 'Kategorie',
      catSolo: 'Interstellares Solo',
      catRelay: 'Orbital-Staffel (Team)',
      catWalk: 'Mond-Nordic-Walking',
      submit: 'Kosmische Voranmeldung bestätigen',
      note:
        'Es werden keine Daten gesendet—nur Schaufenster. Der Button lässt interplanetäre Bürokratie nur in deinem Kopf vorankommen.',
      toast:
        'Glückwunsch! Deine Akte liegt in einer flüchtigen React-Variable. Zeige diese Nachricht am Tag X im absoluten Vakuum—wir erkennen dich an der Aura.',
    },
    partners: {
      title: 'Partner',
      items: [
        {
          name: 'Minimale Schwerkraft AG',
          line: '„Leichter, höher, mit Rechnungen immer im Verzug.“',
        },
        {
          name: 'NASA (Nicht An diesem Superangebot beteiligt)',
          line: 'Imaginärer Partner. Ähnlichkeit mit echten Behörden wäre zufällig und schmeichelhaft.',
        },
        {
          name: 'Snack Orbital™',
          line: 'Energieriegel, die nach dem Weltraum schmecken—sprich: Pappe.',
        },
        {
          name: 'Schwarzes-Loch-Bank',
          line: '„Dein Geld verschwindet… mit Stil.“ Startnummern aus Antimaterie (nicht erstattungsfähig).',
        },
        {
          name: 'Luftdruck & Söhne',
          line: 'Egos vor dem Start aufpumpen. Automatisches Ablassen ab 120\u00a0km Höhe.',
        },
      ],
    },
    footer: {
      line1:
        'Lunathón — 100\u00a0% fiktives Event, 0\u00a0% versichert. Beim Bau dieser Seite wurde kein Läufer verletzt.',
      line2: 'Gebaut mit React und Vite—selbst Mond-Marathons verdienen Hot Reload.',
      socialTitle: 'Social Media (Demo)',
      socialNav: 'Demonstrations-Links zu sozialen Netzwerken',
      socialHint: 'Platzhalter-Links zu example.org — keine echten Profile oder Chats.',
      socialFacebook: 'Facebook — Demo-Link (example.org)',
      socialInstagram: 'Instagram — Demo-Link (example.org)',
      socialWhatsapp: 'WhatsApp — Demo-Link (example.org)',
    },
  },
}

export function getInitialLocale(): Locale {
  try {
    const mainStored = localStorage.getItem('lang')
    if (isLocale(mainStored)) return mainStored

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    /* ignore */
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2).toLowerCase() : 'fr'
  if (nav === 'en') return 'en'
  if (nav === 'nl') return 'nl'
  if (nav === 'de') return 'de'
  return 'fr'
}
