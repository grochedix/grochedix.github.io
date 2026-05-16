import type { Locale } from '../types/locale'
import type { MenuPage } from '../types/menu'

const fr: MenuPage[] = [
  {
    id: 'cover',
    title: 'L’Auberge du Pavé',
    subtitle: 'Cuisine belge contemporaine — Menu dégustation',
    dishes: [],
  },
  {
    id: 'entree',
    title: 'Entrées',
    subtitle: 'Premiers gestes',
    dishes: [
      {
        name: 'Tomates cœur de bœuf',
        detail: 'Crevettes grises, mayonnaise légère à l’huile de noisette',
      },
      {
        name: 'Salade liégeoise revisitée',
        detail: 'Poireaux fondants, lard fumé de la ferme, vinaigrette chaude',
      },
      {
        name: 'Croquettes de crevettes grises',
        detail: 'Salade d’herbes fines, bisque corail, zeste de combava',
      },
      {
        name: 'Velouté de pois mange-tout',
        detail: 'Chèvre chaud du Condroz, fleurs de ciboulette',
      },
    ],
  },
  {
    id: 'plat',
    title: 'Plats',
    subtitle: 'Au cœur des saisons',
    dishes: [
      {
        name: 'Carbonnade flamande',
        detail: 'Joue de bœuf braisée, bière dubbel, mousseline de céleri-rave',
      },
      {
        name: 'Waterzooi de poulet de Brabant',
        detail: 'Légumes primeurs, crème légère au safran, estragon',
      },
      {
        name: 'Truite fumée des Fagnes',
        detail: 'Moules de Zélande, beurre blanc au vin du vignoble mosan',
      },
      {
        name: 'Stoemp du marché',
        detail: 'Filet de porc Duroc laqué au sirop de Liège, jus réduit',
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Desserts',
    subtitle: 'Douceurs du terroir',
    dishes: [
      {
        name: 'Tarte au sucre de Liège',
        detail: 'Caramel blond, glace vanille bourbon, fleur de sel',
      },
      {
        name: 'Parfait glacé au spéculoos de Malines',
        detail: 'Crumble sablé, coulis de poire Williams, poivre long',
      },
      {
        name: 'Gaufre de Liège croustillante',
        detail: 'Chocolat grand cru, chantilly mascarpone, praliné noisette',
      },
      {
        name: 'Soufflé tiède au chocolat belge',
        detail: 'Glace laitière, copeaux de cacao cru',
      },
    ],
  },
  {
    id: 'vins',
    title: 'Vins & boissons',
    subtitle: 'Sélection de la sommelière',
    dishes: [
      {
        name: 'Crémant de Wallonie brut',
        detail: 'Méthode traditionnelle, bulles fines — servi à l’ouverture du menu',
      },
      {
        name: 'Chardonnay du Pays de Herve',
        detail: 'Miellé et minéral, accord privilégié avec les poissons et crustacés',
      },
      {
        name: 'Pinot noir des coteaux mosans',
        detail: 'Rouge souple, épices douces — accord viandes braisées et volailles',
      },
      {
        name: 'Eau Spa Réine, jus de poire Williams, digestifs',
        detail: 'Boissons sans alcool et fin de repas proposées au salon',
      },
    ],
  },
  {
    id: 'back',
    title: 'Fin de menu',
    subtitle: 'Nous vous remercions de votre confiance',
    dishes: [],
  },
]

const en: MenuPage[] = [
  {
    id: 'cover',
    title: 'L’Auberge du Pavé',
    subtitle: 'Contemporary Belgian cuisine — Tasting menu',
    dishes: [],
  },
  {
    id: 'entree',
    title: 'Starters',
    subtitle: 'First gestures',
    dishes: [
      {
        name: 'Beef heart tomatoes',
        detail: 'Grey shrimp, light hazelnut-oil mayonnaise',
      },
      {
        name: 'Liège salad revisited',
        detail: 'Silky leeks, farm smoked bacon, warm vinaigrette',
      },
      {
        name: 'Grey shrimp croquettes',
        detail: 'Fine herb salad, coral bisque, kaffir lime zest',
      },
      {
        name: 'Sugar snap pea velouté',
        detail: 'Warm Condroz goat cheese, chive blossoms',
      },
    ],
  },
  {
    id: 'plat',
    title: 'Mains',
    subtitle: 'At the heart of the seasons',
    dishes: [
      {
        name: 'Flemish carbonnade',
        detail: 'Braised beef cheek, dubbel beer, celeriac mousseline',
      },
      {
        name: 'Brabant chicken waterzooi',
        detail: 'Spring vegetables, light saffron cream, tarragon',
      },
      {
        name: 'Smoked trout from the Fens',
        detail: 'Zeeland mussels, Meuse wine beurre blanc',
      },
      {
        name: 'Market stoemp',
        detail: 'Glazed Duroc pork fillet, Liège syrup reduction',
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Desserts',
    subtitle: 'Sweet terroir',
    dishes: [
      {
        name: 'Liège sugar tart',
        detail: 'Blond caramel, bourbon vanilla ice cream, fleur de sel',
      },
      {
        name: 'Mechelen speculoos frozen parfait',
        detail: 'Sable crumble, Williams pear coulis, long pepper',
      },
      {
        name: 'Crisp Liège waffle',
        detail: 'Grand cru chocolate, mascarpone chantilly, hazelnut praliné',
      },
      {
        name: 'Warm Belgian chocolate soufflé',
        detail: 'Milk ice cream, raw cacao shavings',
      },
    ],
  },
  {
    id: 'vins',
    title: 'Wines & beverages',
    subtitle: 'From our head sommelier',
    dishes: [
      {
        name: 'Walloon brut crémant',
        detail: 'Traditional method, fine bubbles — poured as the menu opens',
      },
      {
        name: 'Herve Country Chardonnay',
        detail: 'Honeyed and mineral, a natural match for fish and shellfish',
      },
      {
        name: 'Pinot noir from the Meuse slopes',
        detail: 'Supple red, gentle spice — pairs with braised meats and poultry',
      },
      {
        name: 'Spa Réine water, Williams pear juice, digestifs',
        detail: 'Non-alcoholic options and after-dinner pours served in the dining room',
      },
    ],
  },
  {
    id: 'back',
    title: 'End of menu',
    subtitle: 'Thank you for your trust',
    dishes: [],
  },
]

const nl: MenuPage[] = [
  {
    id: 'cover',
    title: 'L’Auberge du Pavé',
    subtitle: 'Eigentijdse Belgische keuken — Dégustatiemenu',
    dishes: [],
  },
  {
    id: 'entree',
    title: 'Voorgerechten',
    subtitle: 'Eerste handtekeningen',
    dishes: [
      {
        name: 'Runderhart-tomaten',
        detail: 'Grijze garnalen, lichte mayonaise met hazelnootolie',
      },
      {
        name: 'Luikse salade herwerkte',
        detail: 'Fondant prei, gerookt spek van de boerderij, warme vinaigrette',
      },
      {
        name: 'Kroketten van grijze garnalen',
        detail: 'Fijne kruidensalade, koraalbisque, combavazeste',
      },
      {
        name: 'Velouté van peultjes',
        detail: 'Warme geitenkaas uit de Condroz, bieslookbloesem',
      },
    ],
  },
  {
    id: 'plat',
    title: 'Hoofdgerechten',
    subtitle: 'Hart van de seizoenen',
    dishes: [
      {
        name: 'Vlaamse karbonaden',
        detail: 'Gestoofde ossenwang, dubbelbier, knolselderijmousseline',
      },
      {
        name: 'Waterzooi van Brabantse kip',
        detail: 'Jong groente, lichte saffraanroom, dragon',
      },
      {
        name: 'Gerookte forel uit de Venen',
        detail: 'Zeeuwse mosselen, beurre blanc met Maaswijn',
      },
      {
        name: 'Stoemp van de markt',
        detail: 'Gelakte Duroc-varkenshaas, Luikse siroopjus',
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Desserten',
    subtitle: 'Zoete streek',
    dishes: [
      {
        name: 'Luikse suikertaart',
        detail: 'Blond karamel, bourbonvanille-ijs, fleur de sel',
      },
      {
        name: 'Parfait van Mechelse speculaas',
        detail: 'Zanddeeg crumble, Williamspeer-coulis, lange peper',
      },
      {
        name: 'Knapperige Luikse wafel',
        detail: 'Grand cru-chocolade, mascarponechantilly, hazelnootpraliné',
      },
      {
        name: 'Lauwe Belgische chocoladesoufflé',
        detail: 'Melkijs, rauwe cacaoschilfers',
      },
    ],
  },
  {
    id: 'vins',
    title: 'Wijnen & dranken',
    subtitle: 'Selectie van de chef sommelier',
    dishes: [
      {
        name: 'Brute crémant uit Wallonië',
        detail: 'Traditionele methode, fijne bubbels — bij het openen van het menu',
      },
      {
        name: 'Chardonnay uit het Land van Herve',
        detail: 'Honingtoets en mineraliteit, ideaal bij vis en schaal- en schelpdieren',
      },
      {
        name: 'Pinot noir van de Maasheuvels',
        detail: 'Soepel rood, zachte kruiden — past bij gestoofd vlees en gevogelte',
      },
      {
        name: 'Spa Réine-water, Williamsperensap, digestieven',
        detail: 'Alcoholvrije keuzes en afsluitende glazen aan tafel',
      },
    ],
  },
  {
    id: 'back',
    title: 'Einde van het menu',
    subtitle: 'Dank voor uw vertrouwen',
    dishes: [],
  },
]

const de: MenuPage[] = [
  {
    id: 'cover',
    title: 'L’Auberge du Pavé',
    subtitle: 'Zeitgenössische belgische Küche — Degustationsmenü',
    dishes: [],
  },
  {
    id: 'entree',
    title: 'Vorspeisen',
    subtitle: 'Erste Handschrift',
    dishes: [
      {
        name: 'Ochsenherz-Tomaten',
        detail: 'Nordseekrabben, leichte Haselnuss-Mayonnaise',
      },
      {
        name: 'Lütticher Salat neu interpretiert',
        detail: 'Zartes Lauch, geräucherter Bauchspeck, warme Vinaigrette',
      },
      {
        name: 'Nordseekrabben-Kroketten',
        detail: 'Feiner Kräutersalat, Korallen-Bisque, Kaffirlimette',
      },
      {
        name: 'Zuckerschoten-Velouté',
        detail: 'Warmer Ziegenkäse aus dem Condroz, Schnittlauchblüten',
      },
    ],
  },
  {
    id: 'plat',
    title: 'Hauptgänge',
    subtitle: 'Im Rhythmus der Jahreszeiten',
    dishes: [
      {
        name: 'Flämische Carbonnade',
        detail: 'Geschmorte Ochsenbacke, Dubbel-Bier, Sellerie-Mousseline',
      },
      {
        name: 'Waterzooi vom Brabanter Huhn',
        detail: 'Frühlingsgemüse, leichte Safran-Sahne, Estragon',
      },
      {
        name: 'Geräucherte Forelle aus den Fennen',
        detail: 'Zeeuwse Miesmuscheln, Beurre blanc mit Maaswein',
      },
      {
        name: 'Markt-Stoemp',
        detail: 'Glasiertes Duroc-Schweinefilet, Lütticher Sirup-Jus',
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Desserts',
    subtitle: 'Süße Heimat',
    dishes: [
      {
        name: 'Lütticher Zuckertorte',
        detail: 'Blondes Karamell, Bourbon-Vanilleeis, Fleur de sel',
      },
      {
        name: 'Spekulatius-Parfait aus Mechelen',
        detail: 'Sablé-Streusel, Williams-Birnen-Coulis, Langpfeffer',
      },
      {
        name: 'Knusprige Lütticher Waffel',
        detail: 'Grand-Cru-Schokolade, Mascarpone-Chantilly, Haselnuss-Praliné',
      },
      {
        name: 'Lauwarmes belgisches Schokoladen-Soufflé',
        detail: 'Milcheis, rohe Kakaospäne',
      },
    ],
  },
  {
    id: 'vins',
    title: 'Weine & Getränke',
    subtitle: 'Auswahl unseres Chef-Sommeliers',
    dishes: [
      {
        name: 'Brut-Crémant aus der Wallonie',
        detail: 'Flaschengärung, feine Perlage — zum Auftakt des Menüs',
      },
      {
        name: 'Chardonnay aus dem Pays de Herve',
        detail: 'Honig und Mineralität, ideal zu Fisch und Meeresfrüchten',
      },
      {
        name: 'Pinot noir von den Maaslagen',
        detail: 'Samtiges Rot, feine Würze — zu Schmorbraten und Geflügel',
      },
      {
        name: 'Spa Réine, Williams-Birnensaft, Digestifs',
        detail: 'Alkoholfreie Begleiter und Abschluss am Tisch',
      },
    ],
  },
  {
    id: 'back',
    title: 'Ende der Speisekarte',
    subtitle: 'Vielen Dank für Ihr Vertrauen',
    dishes: [],
  },
]

export const menusByLocale: Record<Locale, MenuPage[]> = {
  fr,
  en,
  nl,
  de,
}

export function getMenuPages(locale: Locale): MenuPage[] {
  return menusByLocale[locale] ?? fr
}
