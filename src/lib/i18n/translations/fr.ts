import type { Translation } from '../types'

const fr: Translation = {
  common: {
    title: 'Convertisseur d\'unités',
    description: 'Un outil en ligne puissant pour convertir différentes unités.',
    loading: 'Chargement...',
    error: 'Erreur',
    copy: 'Copier',
    copied: 'Copié',
    settings: 'Paramètres',
    language: 'Langue',
    theme: 'Thème',
    about: 'À propos',
    contact: 'Contact',
    home: 'Accueil',
    conversionHistory: 'Historique des conversions',
    clearHistory: 'Effacer l\'historique',
    confirmClear: 'Êtes-vous sûr de vouloir effacer tout l\'historique ?',
    delete: 'Supprimer',
    selectType: 'Sélectionner le type de conversion',
    selectLanguage: 'Sélectionner la langue',
    pageNotFound: 'Page non trouvée',
    pageNotFoundDesc: 'Désolé, la page que vous recherchez n\'existe pas.',
    backToHome: 'Retour à l\'accueil',
    copyright: 'Tous droits réservés.',
    categories: {
      basic: 'Unités de base',
      area_volume: 'Surface & Volume',
      time_related: 'Temps',
      physics: 'Unités physiques',
      data: 'Unités de données',
      others: 'Autres unités'
    },
    instructions: {
      title: 'Instructions',
      steps: {
        input: 'Entrez la valeur à convertir',
        select: 'Sélectionnez l\'unité de la valeur d\'entrée',
        auto: 'Le système calculera et affichera automatiquement les valeurs correspondantes dans d\'autres unités',
        copy: 'Cliquez sur un résultat pour copier rapidement la valeur avec son unité'
      },
      features: {
        title: 'Fonctionnalités',
        range: {
          title: 'Plage de valeurs prise en charge',
          description: 'Prend en charge jusqu\'à 20 chiffres (point décimal inclus) avec jusqu\'à 10 décimales. Pour les très grands ou très petits nombres, la notation scientifique est automatiquement utilisée.'
        },
        copy: {
          title: 'Fonction de copie',
          description: 'Cliquez sur n\'importe quel résultat de conversion pour copier la valeur et l\'unité pour un collage facile.'
        },
        paste: {
          title: 'Fonction de collage',
          description: 'Prend en charge le collage de valeurs avec unités, le système extraira automatiquement la partie numérique.'
        }
      }
    },
    customOrder: 'Ordre personnalisé',
    byName: 'Par nom',
    byCreatedTime: 'Par date de création',
    byLastUsed: 'Par dernière utilisation',
    clearAll: 'Tout effacer',
    noFavorites: 'Pas encore de favoris',
    remove: 'Supprimer',
    clearConfirmTitle: 'Effacer tous les favoris',
    clearConfirmMessage: 'Êtes-vous sûr de vouloir effacer tous les favoris ? Cette action ne peut pas être annulée.',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    addFavorite: 'Ajouter aux favoris',
    removeFavorite: 'Retirer des favoris',
    enterFavoriteName: 'Entrez un nom pour ce favori',
    favoriteNamePlaceholder: 'ex: Mètres en Pieds',
    showFavorites: 'Afficher les favoris',
    hideFavorites: 'Masquer les favoris',
    from: 'De',
    to: 'Vers',
    selectUnit: 'Sélectionner une unité',
    inputValue: 'Valeur d\'entrée',
    convertResult: 'Résultat',
    searchUnit: 'Rechercher des unités...',
    length: 'Longueur'
  },
  units: {
    length: {
      title: 'Longueur',
      description: 'Conversion des unités de longueur',
      units: {
        meter: 'Mètre (métrique)',
        kilometer: 'Kilomètre (métrique)',
        decimeter: 'Décimètre (métrique)',
        centimeter: 'Centimètre (métrique)',
        millimeter: 'Millimètre (métrique)',
        micrometer: 'Micromètre (métrique)',
        nanometer: 'Nanomètre (métrique)',
        picometer: 'Picomètre (métrique)',
        mile: 'Mile (impérial)',
        yard: 'Yard (impérial)',
        foot: 'Pied (impérial)',
        inch: 'Pouce (impérial)',
        light_year: 'Année-lumière (astronomique)',
        astronomical_unit: 'Unité astronomique (UA)',
        parsec: 'Parsec (astronomique)',
        light_second: 'Seconde-lumière (astronomique)',
        nautical_mile: 'Mille marin (maritime)',
        fathom: 'Brasse (maritime)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'L\'année-lumière est la distance parcourue par la lumière dans le vide en un an, soit environ 9,461 billions de kilomètres.',
          'L\'unité astronomique (UA) est la distance moyenne entre la Terre et le Soleil, soit environ 149,6 millions de kilomètres.',
          'Le parsec est l\'unité de distance la plus utilisée en astronomie, 1 parsec équivaut à environ 3,26 années-lumière.',
          'Le mille marin était initialement défini comme la longueur d\'un arc d\'une minute du méridien terrestre, maintenant fixé à 1852 mètres.',
          'La brasse est une unité traditionnelle de profondeur maritime, 1 brasse équivaut à 6 pieds (environ 1,8288 mètres).',
          'La définition du mètre a évolué au fil du temps, elle est maintenant basée sur la vitesse de la lumière et la seconde.'
        ]
      }
    },
    area: {
      title: 'Surface',
      description: 'Conversion des unités de surface',
      units: {
        square_meter: 'Mètre carré (métrique)',
        square_kilometer: 'Kilomètre carré (métrique)',
        square_decimeter: 'Décimètre carré (métrique)',
        square_centimeter: 'Centimètre carré (métrique)',
        square_millimeter: 'Millimètre carré (métrique)',
        square_micrometer: 'Micromètre carré (métrique)',
        square_nanometer: 'Nanomètre carré (métrique)',
        square_mile: 'Mile carré (impérial)',
        square_yard: 'Yard carré (impérial)',
        square_foot: 'Pied carré (impérial)',
        square_inch: 'Pouce carré (impérial)',
        acre: 'Acre (impérial)',
        hectare: 'Hectare (métrique)',
        are: 'Are (métrique)',
        mu: 'Mu (chinois)',
        qing: 'Qing (chinois)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'L\'hectare est l\'unité de surface la plus utilisée en agriculture, 1 hectare équivaut à 10 000 mètres carrés.',
          'L\'are est une unité métrique de surface, 1 are équivaut à 100 mètres carrés.',
          'Le mu est une unité de surface traditionnelle chinoise, 1 mu équivaut à environ 666,67 mètres carrés.',
          'Le qing est une ancienne unité de surface chinoise, 1 qing équivaut à 100 mu.',
          'L\'acre était historiquement définie comme la surface qu\'une paire de bœufs pouvait labourer en un jour.',
          'Le mètre carré est l\'unité de base de surface dans le Système International (SI).'
        ]
      }
    },
    volume: {
      title: 'Volume',
      description: 'Conversion des unités de volume',
      units: {
        cubic_meter: 'Mètre cube (métrique)',
        cubic_kilometer: 'Kilomètre cube (métrique)',
        cubic_decimeter: 'Décimètre cube (métrique)',
        cubic_centimeter: 'Centimètre cube (métrique)',
        cubic_millimeter: 'Millimètre cube (métrique)',
        cubic_mile: 'Mile cube (impérial)',
        cubic_yard: 'Yard cube (impérial)',
        cubic_foot: 'Pied cube (impérial)',
        cubic_inch: 'Pouce cube (impérial)',
        liter: 'Litre (métrique)',
        milliliter: 'Millilitre (métrique)',
        gallon_us: 'Gallon (US)',
        gallon_uk: 'Gallon (UK)',
        quart_us: 'Quart (US)',
        quart_uk: 'Quart (UK)',
        pint_us: 'Pinte (US)',
        pint_uk: 'Pinte (UK)',
        cup_us: 'Tasse (US)',
        cup_uk: 'Tasse (UK)',
        fluid_ounce_us: 'Once liquide (US)',
        fluid_ounce_uk: 'Once liquide (UK)',
        barrel_oil: 'Baril de pétrole',
        barrel_us: 'Baril (US)',
        barrel_uk: 'Baril (UK)',
        barrel_beer_us: 'Baril de bière (US)',
        barrel_beer_uk: 'Baril de bière (UK)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le litre était initialement défini comme le volume d\'un kilogramme d\'eau pure à 4°C.',
          'Le baril de pétrole est une unité standard dans l\'industrie pétrolière, équivalant à 42 gallons US.',
          'Les unités de volume britanniques et américaines, bien que portant le même nom, ont des valeurs différentes.',
          'Le mètre cube est l\'unité de base de volume dans le Système International (SI).',
          'Un gallon US est différent d\'un gallon impérial britannique, ce dernier étant environ 20% plus grand.',
          'Le baril de bière varie selon les pays et les régions, reflétant les traditions locales de brassage.'
        ]
      }
    },
    weight: {
      title: 'Masse',
      description: 'Conversion des unités de masse',
      units: {
        kilogram: 'Kilogramme (métrique)',
        gram: 'Gramme (métrique)',
        milligram: 'Milligramme (métrique)',
        microgram: 'Microgramme (métrique)',
        metric_ton: 'Tonne métrique',
        pound: 'Livre (avoirdupois)',
        ounce: 'Once (avoirdupois)',
        grain: 'Grain (avoirdupois)',
        stone: 'Stone (avoirdupois)',
        dram: 'Dram (avoirdupois)',
        short_ton: 'Tonne courte (US)',
        long_ton: 'Tonne longue (UK)',
        troy_ounce: 'Once troy',
        troy_pound: 'Livre troy',
        troy_grain: 'Grain troy',
        carat: 'Carat (métrique)',
        atomic_mass_unit: 'Unité de masse atomique',
        quintal: 'Quintal (métrique)',
        pharmacy_grain: 'Grain (pharmacie)',
        pharmacy_dram: 'Dram (pharmacie)',
        pharmacy_ounce: 'Once (pharmacie)',
        pharmacy_pound: 'Livre (pharmacie)',
        avoirdupois_dram: 'Dram (avoirdupois)',
        avoirdupois_long_ton: 'Tonne longue (avoirdupois)',
        avoirdupois_short_ton: 'Tonne courte (avoirdupois)',
        avoirdupois_pound: 'Livre (avoirdupois)',
        avoirdupois_ounce: 'Once (avoirdupois)',
        avoirdupois_stone: 'Stone (avoirdupois)',
        avoirdupois_grain: 'Grain (avoirdupois)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le kilogramme est la seule unité de base du SI qui utilise encore un préfixe (kilo) dans son nom.',
          'Le carat métrique est exactement égal à 200 milligrammes, utilisé pour les pierres précieuses.',
          'L\'once troy est toujours utilisée pour peser les métaux précieux comme l\'or et l\'argent.',
          'Le système avoirdupois est le système de poids le plus couramment utilisé dans les pays anglophones.',
          'L\'unité de masse atomique est basée sur la masse d\'un atome de carbone-12.',
          'Les unités de pharmacie sont différentes des unités avoirdupois, bien qu\'elles portent parfois les mêmes noms.'
        ]
      }
    },
    time: {
      title: 'Temps',
      description: 'Conversion des unités de temps',
      units: {
        second: 'Seconde (SI)',
        minute: 'Minute',
        hour: 'Heure',
        day: 'Jour',
        week: 'Semaine',
        month: 'Mois',
        year: 'Année',
        decade: 'Décennie',
        century: 'Siècle',
        millennium: 'Millénaire',
        millisecond: 'Milliseconde',
        microsecond: 'Microseconde',
        nanosecond: 'Nanoseconde',
        picosecond: 'Picoseconde',
        sidereal_day: 'Jour sidéral',
        sidereal_year: 'Année sidérale',
        tropical_year: 'Année tropique',
        lunar_month: 'Mois lunaire'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'La seconde est définie par la transition entre deux niveaux d\'énergie de l\'atome de césium-133.',
          'Un jour sidéral est légèrement plus court qu\'un jour solaire, environ 23 heures 56 minutes et 4 secondes.',
          'Une année sidérale est le temps que met la Terre pour faire une révolution complète autour du Soleil par rapport aux étoiles fixes.',
          'Le mois lunaire, ou lunaison, est basé sur le cycle des phases de la Lune, soit environ 29,53 jours.',
          'L\'année tropique est la durée entre deux passages du Soleil au point vernal, soit environ 365,242190 jours.',
          'La nanoseconde est devenue une unité cruciale avec l\'avènement de l\'informatique et des télécommunications.'
        ]
      }
    },
    temperature: {
      title: 'Température',
      description: 'Conversion des unités de température',
      units: {
        kelvin: 'Kelvin (K)',
        celsius: 'Celsius (°C)',
        fahrenheit: 'Fahrenheit (°F)',
        rankine: 'Rankine (°R)',
        reaumur: 'Réaumur (°Ré)',
        newton: 'Newton (°N)',
        romer: 'Rømer (°Rø)',
        delisle: 'Delisle (°De)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le kelvin est l\'unité de base de température dans le SI, défini par la constante de Boltzmann.',
          'L\'échelle Celsius a été créée par Anders Celsius en 1742, initialement avec 0° pour le point d\'ébullition et 100° pour le point de congélation de l\'eau.',
          'L\'échelle Fahrenheit a été proposée par Daniel Gabriel Fahrenheit en 1724, basée sur trois points fixes.',
          'L\'échelle Réaumur, créée par René Antoine Ferchault de Réaumur, était largement utilisée en Europe continentale au 18e siècle.',
          'L\'échelle Newton a été créée par Isaac Newton vers 1700, utilisant le point de congélation de l\'eau et la température du corps humain.',
          'L\'échelle Rømer, première échelle de température moderne, a été créée par Ole Christensen Rømer en 1701.'
        ]
      }
    },
    speed: {
      title: 'Vitesse',
      description: 'Conversion des unités de vitesse',
      units: {
        meter_per_second: 'Mètre par seconde (m/s)',
        kilometer_per_hour: 'Kilomètre par heure (km/h)',
        mile_per_hour: 'Mile par heure (mph)',
        foot_per_second: 'Pied par seconde (ft/s)',
        knot: 'Nœud (kn)',
        knot_uk: 'Nœud britannique (kn UK)',
        mach: 'Mach (M)',
        light_speed: 'Vitesse de la lumière (c)',
        kilometer_per_second: 'Kilomètre par seconde (km/s)',
        mile_per_second: 'Mile par seconde (mi/s)',
        foot_per_minute: 'Pied par minute (ft/min)',
        meter_per_minute: 'Mètre par minute (m/min)',
        kilometer_per_minute: 'Kilomètre par minute (km/min)',
        mile_per_minute: 'Mile par minute (mi/min)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'La vitesse de la lumière dans le vide est exactement 299 792 458 mètres par seconde.',
          'Le nombre de Mach est nommé d\'après Ernst Mach et varie selon la température de l\'air.',
          'Le nœud était historiquement mesuré avec une ligne de loch, d\'où son nom.',
          'Le nœud britannique est légèrement différent du nœud international, basé sur la définition historique du mille marin.',
          'La vitesse du son (Mach 1) est d\'environ 343 mètres par seconde au niveau de la mer à 20°C.',
          'Les vitesses supersoniques commencent à Mach 1, les vitesses hypersoniques à partir de Mach 5.'
        ]
      }
    },
    angle: {
      title: 'Angle',
      description: 'Conversion des unités d\'angle',
      units: {
        degree: 'Degré (°)',
        radian: 'Radian (rad)',
        gradian: 'Grade (gon)',
        minute_of_arc: 'Minute d\'arc (\')',
        second_of_arc: 'Seconde d\'arc (\")',
        mil: 'Millième (mil)',
        revolution: 'Tour complet (rev)',
        quadrant: 'Quadrant (quad)',
        sextant: 'Sextant (sext)',
        octant: 'Octant (oct)',
        sign: 'Signe (30°)',
        circle: 'Cercle (360°)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le radian est l\'unité d\'angle du SI, défini comme l\'angle au centre qui intercepte un arc de longueur égale au rayon.',
          'Un tour complet fait exactement 2π radians, 360 degrés, ou 400 grades.',
          'Le grade, aussi appelé gon, a été créé pendant la Révolution française pour diviser le cercle en 400 parties.',
          'Une minute d\'arc est 1/60 de degré, et une seconde d\'arc est 1/60 de minute d\'arc.',
          'Le millième (mil) est utilisé en balistique et en artillerie, avec 6400 mils dans un cercle complet.',
          'Les signes du zodiaque divisent le cercle en 12 parties égales de 30 degrés chacune.'
        ]
      }
    },
    pressure: {
      title: 'Pression',
      description: 'Conversion des unités de pression',
      units: {
        pascal: 'Pascal (Pa)',
        kilopascal: 'Kilopascal (kPa)',
        megapascal: 'Mégapascal (MPa)',
        hectopascal: 'Hectopascal (hPa)',
        bar: 'Bar (bar)',
        millibar: 'Millibar (mbar)',
        atmosphere: 'Atmosphère (atm)',
        technical_atmosphere: 'Atmosphère technique (at)',
        torr: 'Torr (Torr)',
        pound_per_square_inch: 'Livre par pouce carré (psi)',
        kip_per_square_inch: 'Kip par pouce carré (ksi)',
        millimeter_of_mercury: 'Millimètre de mercure (mmHg)',
        inch_of_mercury: 'Pouce de mercure (inHg)',
        centimeter_of_water: 'Centimètre d\'eau (cmH₂O)',
        millimeter_of_water: 'Millimètre d\'eau (mmH₂O)',
        inch_of_water: 'Pouce d\'eau (inH₂O)',
        foot_of_water: 'Pied d\'eau (ftH₂O)',
        kilogram_force_per_square_meter: 'Kilogramme-force par mètre carré (kgf/m²)',
        kilogram_force_per_square_centimeter: 'Kilogramme-force par centimètre carré (kgf/cm²)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le pascal est l\'unité de pression du SI, défini comme un newton par mètre carré.',
          'La pression atmosphérique standard au niveau de la mer est de 101 325 pascals ou 1 atmosphère.',
          'Le torr est nommé d\'après Evangelista Torricelli, inventeur du baromètre à mercure.',
          'Le bar est une unité couramment utilisée en météorologie, 1 bar = 100 000 pascals.',
          'Le PSI (pound per square inch) est très utilisé dans les pays anglophones pour la pression des pneus.',
          'La colonne d\'eau est souvent utilisée en plomberie et en médecine pour mesurer la pression.'
        ]
      }
    },
    power: {
      title: 'Puissance',
      description: 'Conversion des unités de puissance',
      units: {
        watt: 'Watt (W)',
        kilowatt: 'Kilowatt (kW)',
        megawatt: 'Mégawatt (MW)',
        gigawatt: 'Gigawatt (GW)',
        terawatt: 'Térawatt (TW)',
        horsepower_mechanical: 'Cheval-vapeur mécanique (ch)',
        horsepower_metric: 'Cheval-vapeur métrique (CV)',
        horsepower_electric: 'Cheval-vapeur électrique (hp)',
        horsepower_boiler: 'Cheval-vapeur chaudière (hp)',
        btu_per_hour: 'BTU par heure (BTU/h)',
        btu_per_minute: 'BTU par minute (BTU/min)',
        btu_per_second: 'BTU par seconde (BTU/s)',
        ton_refrigeration: 'Tonne de réfrigération (TR)',
        calorie_per_second: 'Calorie par seconde (cal/s)',
        kilocalorie_per_hour: 'Kilocalorie par heure (kcal/h)',
        volt_ampere: 'Volt-ampère (VA)',
        kilovolt_ampere: 'Kilovolt-ampère (kVA)',
        megavolt_ampere: 'Mégavolt-ampère (MVA)',
        reactive_power: 'Puissance réactive (VAR)',
        joule_per_second: 'Joule par seconde (J/s)',
        exawatt: 'Exawatt (EW)',
        petawatt: 'Pétawatt (PW)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le watt est l\'unité SI de puissance, nommée d\'après James Watt, l\'inventeur de la machine à vapeur moderne.',
          'Un cheval-vapeur mécanique équivaut à environ 746 watts, tandis qu\'un cheval-vapeur métrique vaut 735,5 watts.',
          'La tonne de réfrigération est basée sur la puissance nécessaire pour faire fondre une tonne de glace en 24 heures.',
          'Le volt-ampère (VA) mesure la puissance apparente dans les circuits électriques, tenant compte du déphasage.',
          'Les centrales électriques modernes peuvent produire plusieurs gigawatts de puissance.',
          'La puissance réactive (VAR) est importante pour maintenir la tension dans les réseaux électriques.'
        ]
      }
    },
    energy: {
      title: 'Énergie',
      description: 'Conversion des unités d\'énergie',
      units: {
        joule: 'Joule (J)',
        kilojoule: 'Kilojoule (kJ)',
        megajoule: 'Mégajoule (MJ)',
        gigajoule: 'Gigajoule (GJ)',
        terajoule: 'Térajoule (TJ)',
        petajoule: 'Pétajoule (PJ)',
        erg: 'Erg (erg)',
        calorie: 'Calorie (cal)',
        kilocalorie: 'Kilocalorie (kcal)',
        british_thermal_unit: 'BTU (BTU)',
        therm: 'Therm (thm)',
        watt_hour: 'Watt-heure (Wh)',
        kilowatt_hour: 'Kilowatt-heure (kWh)',
        megawatt_hour: 'Mégawatt-heure (MWh)',
        gigawatt_hour: 'Gigawatt-heure (GWh)',
        terawatt_hour: 'Térawatt-heure (TWh)',
        electron_volt: 'Électron-volt (eV)',
        kilo_electron_volt: 'Kiloélectron-volt (keV)',
        mega_electron_volt: 'Mégaélectron-volt (MeV)',
        giga_electron_volt: 'Gigaélectron-volt (GeV)',
        tera_electron_volt: 'Téraélectron-volt (TeV)',
        ton_tnt: 'Tonne TNT',
        kiloton_tnt: 'Kilotonne TNT',
        megaton_tnt: 'Mégatonne TNT',
        gigaton_tnt: 'Gigatonne TNT',
        foot_pound: 'Pied-livre (ft⋅lb)',
        newton_meter: 'Newton-mètre (N⋅m)',
        horsepower_hour: 'Cheval-vapeur heure (ch⋅h)',
        barrel_oil_equivalent: 'Baril équivalent pétrole (bep)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le joule est l\'unité SI d\'énergie, égal au travail effectué par une force d\'un newton sur un déplacement d\'un mètre.',
          'La calorie alimentaire (grande calorie) est en réalité une kilocalorie, soit 4184 joules.',
          'L\'électron-volt est l\'énergie acquise par un électron accéléré par une différence de potentiel d\'un volt.',
          'Le baril équivalent pétrole représente environ 6,1 gigajoules d\'énergie.',
          'Le TeV (téraélectron-volt) est l\'ordre de grandeur des énergies atteintes dans les plus grands accélérateurs de particules.',
          'Le kilowatt-heure est l\'unité de facturation de l\'énergie électrique, équivalant à 3,6 mégajoules.'
        ]
      }
    },
    force: {
      title: 'Force',
      description: 'Conversion des unités de force (ISO 80000-4)',
      units: {
        newton: 'Newton (N)',
        kilonewton: 'Kilonewton (kN)',
        meganewton: 'Méganewton (MN)',
        giganewton: 'Giganewton (GN)',
        dyne: 'Dyne (dyn)',
        kilogram_force: 'Kilogramme-force (kgf)',
        gram_force: 'Gramme-force (gf)',
        ton_force: 'Tonne-force (tf)',
        pound_force: 'Livre-force (lbf)',
        ounce_force: 'Once-force (ozf)',
        poundal: 'Poundal (pdl)',
        kip: 'Kip (kip)',
        kilogram_force_per_square_millimeter: 'Kilogramme-force par millimètre carré (kgf/mm²)',
        kilogram_force_per_square_centimeter: 'Kilogramme-force par centimètre carré (kgf/cm²)',
        ton_force_metric: 'Tonne-force métrique (tf)',
        ton_force_short: 'Tonne-force courte (ton-force)',
        ton_force_long: 'Tonne-force longue (ton-force)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le newton est l\'unité SI de force, définie comme la force nécessaire pour accélérer une masse d\'1 kg à 1 m/s².',
          'La dyne est l\'unité CGS de force, 1 newton = 100 000 dynes.',
          'Le kilogramme-force est la force exercée par la gravité terrestre standard sur une masse d\'un kilogramme.',
          'Le kip (kilopound-force) est égal à 1000 livres-force, couramment utilisé en ingénierie structurelle.',
          'Le poundal est une unité cohérente dans le système pied-livre-seconde.',
          'La tonne-force métrique est égale au poids d\'une tonne sous gravité standard (environ 9,807 kN).'
        ]
      }
    },
    density: {
      title: 'Densité',
      description: 'Conversion des unités de densité (ISO 80000-4)',
      units: {
        kilogram_per_cubic_meter: 'Kilogramme par mètre cube (kg/m³)',
        gram_per_cubic_centimeter: 'Gramme par centimètre cube (g/cm³)',
        gram_per_milliliter: 'Gramme par millilitre (g/mL)',
        kilogram_per_liter: 'Kilogramme par litre (kg/L)',
        pound_per_cubic_foot: 'Livre par pied cube (lb/ft³)',
        pound_per_cubic_inch: 'Livre par pouce cube (lb/in³)',
        pound_per_gallon_us: 'Livre par gallon US (lb/gal US)',
        pound_per_gallon_uk: 'Livre par gallon impérial (lb/gal UK)',
        ounce_per_cubic_foot: 'Once par pied cube (oz/ft³)',
        ounce_per_gallon_us: 'Once par gallon US (oz/gal US)',
        ounce_per_gallon_uk: 'Once par gallon impérial (oz/gal UK)',
        gram_per_cubic_meter: 'Gramme par mètre cube (g/m³)',
        milligram_per_cubic_meter: 'Milligramme par mètre cube (mg/m³)',
        milligram_per_milliliter: 'Milligramme par millilitre (mg/mL)',
        gram_per_liter: 'Gramme par litre (g/L)',
        milligram_per_liter: 'Milligramme par litre (mg/L)',
        slug_per_cubic_foot: 'Slug par pied cube (slug/ft³)',
        grain_per_gallon_us: 'Grain par gallon US (gr/gal US)',
        grain_per_gallon_uk: 'Grain par gallon impérial (gr/gal UK)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le kilogramme par mètre cube (kg/m³) est l\'unité SI de masse volumique.',
          'L\'eau pure a une densité maximale de 999,972 kg/m³ à 4°C et à pression atmosphérique normale.',
          'La densité relative est le rapport entre la densité d\'une substance et celle de l\'eau pure à 4°C.',
          'L\'osmium est l\'élément naturel le plus dense (22,59 g/cm³), suivi de l\'iridium (22,56 g/cm³).',
          'L\'hydrogène liquide a la plus faible densité de tous les liquides (0,07 g/cm³).',
          'La densité de l\'air varie avec l\'altitude, la température et l\'humidité, affectant les performances aéronautiques.'
        ]
      }
    },
    flow: {
      title: 'Débit',
      description: 'Conversion des unités de débit',
      units: {
        cubic_meter_per_second: 'Mètre cube par seconde',
        cubic_meter_per_hour: 'Mètre cube par heure',
        liter_per_second: 'Litre par seconde',
        liter_per_minute: 'Litre par minute',
        liter_per_hour: 'Litre par heure',
        gallon_per_minute: 'Gallon par minute',
        gallon_per_hour: 'Gallon par heure',
        cubic_foot_per_second: 'Pied cube par seconde',
        cubic_foot_per_minute: 'Pied cube par minute',
        barrel_per_day: 'Baril par jour',
        barrel_per_hour: 'Baril par heure',
        standard_cubic_foot_per_minute: 'Pied cube standard par minute'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le débit est le volume de fluide passant par une section par unité de temps.',
          'Le baril de pétrole est une unité spéciale, 1 baril = 42 gallons US ou 158,987 litres.',
          'Le pied cube standard (SCFM) est mesuré dans des conditions standard de température et de pression.',
          'Le débit d\'une centrale hydroélectrique, généralement exprimé en m³/s, influence directement sa production d\'électricité.',
          'La conception des canalisations doit tenir compte du débit maximal et du débit économique.',
          'Le choix d\'un débitmètre dépend du type de fluide, de la pression et de la température.'
        ]
      }
    },
    torque: {
      title: 'Couple',
      description: 'Conversion des unités de couple',
      units: {
        newton_meter: 'Newton-mètre',
        newton_centimeter: 'Newton-centimètre',
        kilogram_force_meter: 'Kilogramme-force mètre',
        kilogram_force_centimeter: 'Kilogramme-force centimètre',
        pound_force_foot: 'Pied-livre',
        pound_force_inch: 'Pouce-livre',
        ounce_force_inch: 'Once-force pouce',
        dyne_centimeter: 'Dyne-centimètre',
        gram_force_centimeter: 'Gramme-force centimètre',
        gram_force_meter: 'Gramme-force mètre'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le couple est la force qui fait tourner un objet, égal à la force multipliée par le bras de levier.',
          'Le newton-mètre (N⋅m) est l\'unité SI de couple, identique à l\'unité de travail, le joule.',
          'Le couple des moteurs est généralement exprimé en newton-mètres ou en pieds-livres.',
          'La clé dynamométrique est un outil essentiel pour contrôler précisément le couple de serrage.',
          'Le couple d\'un moteur électrique est inversement proportionnel à sa vitesse de rotation.',
          'Un couple excessif peut endommager les pièces mécaniques, d\'où l\'importance d\'un contrôle précis.'
        ]
      }
    },
    data: {
      title: 'Données',
      description: 'Conversion des unités de données (binaires et décimales)',
      units: {
        bit: 'Bit',
        byte: 'Octet',
        kibibyte: 'Kibioctet (binaire)',
        mebibyte: 'Mébioctet (binaire)',
        gibibyte: 'Gibioctet (binaire)',
        tebibyte: 'Tébioctet (binaire)',
        pebibyte: 'Pébioctet (binaire)',
        exbibyte: 'Exbioctet (binaire)',
        kilobyte: 'Kilooctet (décimal)',
        megabyte: 'Mégaoctet (décimal)',
        gigabyte: 'Gigaoctet (décimal)',
        terabyte: 'Téraoctet (décimal)',
        petabyte: 'Pétaoctet (décimal)',
        exabyte: 'Exaoctet (décimal)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le bit est la plus petite unité de données, ne pouvant représenter que 0 ou 1.',
          'L\'octet est composé de 8 bits, permettant de représenter 256 états différents.',
          'Différence entre unités binaires et décimales :\n  - Binaire : base 1024 (2¹⁰)\n  - Décimal : base 1000 (10³)',
          'La norme IEC a introduit les préfixes binaires (Ki, Mi, Gi) pour les distinguer des préfixes décimaux (k, M, G).',
          'Les ordinateurs modernes utilisent le stockage à l\'échelle du PB, les centres de données à l\'échelle de l\'EB.',
          'Les systèmes d\'exploitation peuvent afficher différemment les capacités selon qu\'ils utilisent des unités binaires ou décimales.'
        ]
      }
    },
    data_rate: {
      title: 'Débit de données',
      description: 'Conversion des unités de débit de données',
      units: {
        bit_per_second: 'Bit par seconde',
        kilobit_per_second: 'Kilobit par seconde',
        megabit_per_second: 'Mégabit par seconde',
        gigabit_per_second: 'Gigabit par seconde',
        terabit_per_second: 'Térabit par seconde',
        byte_per_second: 'Octet par seconde',
        kilobyte_per_second: 'Kilooctet par seconde',
        megabyte_per_second: 'Mégaoctet par seconde',
        gigabyte_per_second: 'Gigaoctet par seconde',
        terabyte_per_second: 'Téraoctet par seconde'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le débit de données mesure la quantité de données transmises par unité de temps.',
          'Les fournisseurs d\'accès Internet utilisent souvent des bits/s, tandis que les logiciels affichent en octets/s.',
          'La fibre optique peut atteindre des débits de plusieurs térabits par seconde.',
          'Le Wi-Fi 6 (802.11ax) peut théoriquement atteindre 9,6 Gbit/s.',
          'Les réseaux 5G promettent des débits jusqu\'à 20 Gbit/s en conditions optimales.',
          'La latence est aussi importante que le débit pour de nombreuses applications.'
        ]
      }
    },
    currency: {
      title: 'Devises',
      description: 'Conversion des devises internationales',
      units: {
        usd: 'Dollar américain (USD)',
        eur: 'Euro (EUR)',
        gbp: 'Livre sterling (GBP)',
        jpy: 'Yen japonais (JPY)',
        aud: 'Dollar australien (AUD)',
        cad: 'Dollar canadien (CAD)',
        chf: 'Franc suisse (CHF)',
        cny: 'Yuan chinois (CNY)',
        hkd: 'Dollar de Hong Kong (HKD)',
        nzd: 'Dollar néo-zélandais (NZD)',
        sek: 'Couronne suédoise (SEK)',
        krw: 'Won sud-coréen (KRW)',
        sgd: 'Dollar de Singapour (SGD)',
        nok: 'Couronne norvégienne (NOK)',
        mxn: 'Peso mexicain (MXN)',
        inr: 'Roupie indienne (INR)',
        rub: 'Rouble russe (RUB)',
        zar: 'Rand sud-africain (ZAR)',
        try: 'Livre turque (TRY)',
        brl: 'Real brésilien (BRL)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le dollar américain est la devise la plus échangée au monde.',
          'L\'euro est la monnaie officielle de 20 des 27 pays de l\'Union européenne.',
          'Le symbole $ vient de l\'ancien peso espagnol, marqué PS.',
          'Le symbole € combine un E (pour Europe) et le symbole grec epsilon.',
          'Le Bitcoin a été la première cryptomonnaie décentralisée.',
          'Le Forex est le plus grand marché financier avec plus de 6,6 billions de dollars échangés par jour.'
        ]
      }
    },
    cooking: {
      title: 'Cuisine',
      description: 'Conversion des unités de mesure culinaires',
      units: {
        teaspoon: 'Cuillère à café',
        tablespoon: 'Cuillère à soupe',
        cup: 'Tasse',
        fluid_ounce: 'Once liquide',
        pint: 'Pinte',
        quart: 'Quart',
        gallon: 'Gallon',
        milliliter: 'Millilitre',
        liter: 'Litre',
        deciliter: 'Décilitre',
        pound: 'Livre',
        ounce: 'Once',
        gram: 'Gramme',
        kilogram: 'Kilogramme',
        cup_us: 'Tasse US',
        cup_metric: 'Tasse métrique',
        pound_metric: 'Livre métrique'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Les mesures culinaires varient selon les pays et les traditions.',
          'Une tasse américaine = 236,588 millilitres, une tasse métrique = 250 millilitres.',
          'La cuillère à café française fait 5 ml, l\'américaine 4,93 ml.',
          'La cuillère à soupe française fait 15 ml, l\'américaine 14,79 ml.',
          'Les recettes professionnelles utilisent souvent le système métrique pour plus de précision.',
          'Les conversions précises sont essentielles en pâtisserie pour la réussite des recettes.'
        ]
      }
    },
    numeral: {
      title: 'Systèmes numériques',
      description: 'Conversion entre différents systèmes de numération',
      units: {
        decimal: 'Décimal (base 10)',
        binary: 'Binaire (base 2)',
        octal: 'Octal (base 8)',
        hexadecimal: 'Hexadécimal (base 16)',
        roman: 'Chiffres romains',
        scientific: 'Notation scientifique'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le système décimal utilise 10 chiffres (0-9), probablement inspiré du nombre de doigts humains.',
          'Le système binaire n\'utilise que 0 et 1, base de l\'informatique moderne.',
          'Le système hexadécimal utilise 16 symboles : 0-9 et A-F.',
          'Les chiffres romains ne contiennent pas de zéro.',
          'La notation scientifique est essentielle pour représenter des nombres très grands ou très petits.',
          'L\'octal était couramment utilisé en informatique mais est maintenant moins fréquent.'
        ]
      }
    },
    frequency: {
      title: 'Fréquence',
      description: 'Conversion des unités de fréquence',
      units: {
        hertz: 'Hertz (Hz)',
        kilohertz: 'Kilohertz (kHz)',
        megahertz: 'Mégahertz (MHz)',
        gigahertz: 'Gigahertz (GHz)',
        terahertz: 'Térahertz (THz)',
        revolution_per_minute: 'Tours par minute (tr/min)',
        revolution_per_second: 'Tours par seconde (tr/s)',
        cycle_per_second: 'Cycles par seconde',
        beat_per_minute: 'Battements par minute (BPM)',
        frame_per_second: 'Images par seconde (FPS)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le hertz est l\'unité SI de fréquence, nommée d\'après Heinrich Hertz.',
          'La fréquence du courant électrique est de 50 Hz en Europe et 60 Hz en Amérique du Nord.',
          'L\'oreille humaine peut percevoir des fréquences entre 20 Hz et 20 kHz.',
          'Les processeurs modernes fonctionnent à des fréquences de plusieurs gigahertz.',
          'Le BPM est utilisé en musique et en médecine pour mesurer le rythme.',
          'Le cinéma utilise traditionnellement 24 FPS, les jeux vidéo visent souvent 60 FPS ou plus.'
        ]
      }
    }
  },
  buttons: {
    convert: 'Convertir',
    clear: 'Effacer',
    swap: 'Échanger',
    copy: 'Copier'
  },
  messages: {
    copied: 'Copié dans le presse-papiers',
    error: 'Une erreur s\'est produite',
    invalidNumber: 'Veuillez entrer un nombre valide',
    selectUnit: 'Veuillez sélectionner les deux unités',
    conversionError: 'Erreur lors de la conversion',
    invalidTemperature: 'La température ne peut pas être inférieure au zéro absolu'
  }
}

export default fr 