import type { Translation } from '../types';

const fr: Translation = {
  common: {
    title: 'Convertisseur d\'unités',
    description: 'Un outil puissant de conversion d\'unités en ligne.',
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
    selectType: 'Sélectionner le type de conversion',
    selectLanguage: 'Sélectionner la langue',
    pageNotFound: 'Page non trouvée',
    pageNotFoundDesc: 'Désolé, la page que vous avez visitée n\'existe pas.',
    backToHome: 'Retour à l\'accueil',
    copyright: 'Droits d\'auteur',
    enterValue: 'Entrer la valeur',
    categories: {
      basic: 'Unités de base',
      area_volume: 'Aire & Volume',
      time_related: 'Temps',
      physics: 'Unités de physique',
      data: 'Unités de données',
      others: 'Autres unités'
    },
    instructions: {
      title: 'Instructions',
      steps: {
        input: 'Entrez la valeur que vous souhaitez convertir',
        select: 'Sélectionnez l\'unité de la valeur d\'entrée',
        auto: 'Le système calculera et affichera automatiquement les valeurs correspondantes dans d\'autres unités',
        copy: 'Cliquez sur n\'importe quel résultat pour copier rapidement la valeur avec son unité'
      },
      features: {
        title: 'Caractéristiques',
        range: {
          title: 'Plage de valeurs prise en charge',
          description: 'Prend en charge jusqu\'à 20 chiffres (y compris le point décimal) avec jusqu\'à 10 décimales. Pour les nombres très grands ou très petits, la notation scientifique est automatiquement utilisée.'
        },
        copy: {
          title: 'Fonction de copie',
          description: 'Cliquez sur n\'importe quel résultat de conversion pour copier la valeur et l\'unité pour un collage facile.'
        },
        paste: {
          title: 'Fonction de collage',
          description: 'Admet le collage de valeurs avec des unités, le système extrait automatiquement la partie numérique.'
        }
      }
    },
    customOrder: 'Ordre personnalisé',
    byName: 'Par nom',
    byCreatedTime: 'Par date de création',
    byLastUsed: 'Par dernier usage',

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
    favoriteNamePlaceholder: 'ex. Mètres en Pieds',
    showFavorites: 'Afficher les favoris',
    hideFavorites: 'Masquer les favoris',
    from: 'De',
    to: 'À',
    selectUnit: 'Sélectionner l\'unité',
    inputValue: 'Valeur d\'entrée',
    convertResult: 'Résultat',
    searchUnit: 'Rechercher des unités...',
    length: 'Longueur',
    conversionHistory: 'Historique des conversions',
    clearHistory: 'Effacer l\'historique',
    confirmClear: 'Êtes-vous sûr de vouloir effacer tout l\'historique ?',
    delete: 'Supprimer'
  },
  units: {
    length: {
      title: 'Longueur',
      description: 'Convertir entre différentes unités de longueur',
      units: {
        metric_meter: 'Mètre',
        metric_kilometer: 'Kilomètre',
        metric_centimeter: 'Centimètre',
        metric_millimeter: 'Millimètre',
        imperial_inch: 'Pouce',
        imperial_foot: 'Pied',
        imperial_yard: 'Yard',
        imperial_mile: 'Mile',
        astronomical_light_year: 'Année-lumière',
        astronomical_unit: 'Unité Astronomique',
        metric_decimeter: 'Décimètre',
        metric_micrometer: 'Micromètre',
        metric_nanometer: 'Nanomètre',
        metric_picometer: 'Picomètre',
        nautical_mile: 'Mille Marin',
        nautical_fathom: 'Brasse'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Une année-lumière n\'est pas une unité de temps, mais une unité de distance que la lumière parcourt en un an.',
          'L\'unité astronomique (UA) est basée sur la distance moyenne de la Terre au Soleil.',
          'Le mètre a été initialement défini comme un dix-millionième de la distance du pôle Nord à l\'équateur.',
          'Aujourd\'hui, le mètre est défini par la vitesse de la lumière dans le vide.'
        ]
      }
    },
    area: {
      title: 'Surface',
      description: 'Convertir entre différentes unités de surface',
      units: {
        metric_square_meter: 'Mètre Carré',
        metric_square_kilometer: 'Kilomètre Carré',
        metric_square_centimeter: 'Centimètre Carré',
        metric_square_millimeter: 'Millimètre Carré',
        imperial_square_inch: 'Pouce Carré',
        imperial_square_foot: 'Pied Carré',
        imperial_square_yard: 'Yard Carré',
        imperial_square_mile: 'Mile Carré',
        metric_hectare: 'Hectare',
        imperial_acre: 'Acre',
        metric_square_decimeter: 'Décimètre Carré',
        metric_are: 'Are',
        traditional_mu: 'Mu (Chinois)',
        traditional_qing: 'Qing (Chinois)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'L\'hectare a été créé pour simplifier les mesures de surface des terres, où 1 hectare équivaut à 10 000 mètres carrés.',
          'L\'acre provient du Moyen Âge et a été défini comme la surface qu\'une paire de bœufs pouvait labourer en un jour.',
          'Le Mu chinois provient de la période Shang-Zhou, où 1 Mu équivaut à environ 666,67 mètres carrés.',
          'Un mile carré est la plus grande unité de surface impériale et équivaut à 640 acres.'
        ]
      }
    },
    volume: {
      title: 'Volume',
      description: 'Convertir entre différentes unités de volume',
      units: {
        metric_cubic_meter: 'Mètre Cube',
        metric_cubic_kilometer: 'Kilomètre Cube',
        metric_cubic_centimeter: 'Centimètre Cube',
        metric_cubic_millimeter: 'Millimètre Cube',
        metric_cubic_decimeter: 'Décimètre Cube',
        metric_liter: 'Litre',
        metric_milliliter: 'Millilitre',
        imperial_gallon: 'Gallon Impérial',
        imperial_quart: 'Quart Impérial',
        imperial_pint: 'Pinte Impériale',
        us_cup: 'Tasse US',
        imperial_fluid_ounce: 'Once Fluide Impériale',
        us_tablespoon: 'Cuillère à Soupe US',
        us_teaspoon: 'Cuillère à Café US',
        imperial_cubic_yard: 'Yard Cube',
        imperial_cubic_foot: 'Pied Cube',
        imperial_cubic_inch: 'Pouce Cube',
        chinese_dan: 'Dan (Chinois)',
        chinese_dou: 'Dou (Chinois)',
        chinese_sheng: 'Sheng (Chinois)',
        japanese_koku: 'Koku (Japonais)',
        japanese_to: 'To (Japonais)',
        japanese_sho: 'Sho (Japonais)',
        japanese_go: 'Go (Japonais)',
        industrial_oil_barrel: 'Baril de Pétrole',
        industrial_beer_barrel: 'Baril de Bière'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un litre est égal à un décimètre cube.',
          'Le gallon impérial est utilisé principalement au Royaume-Uni.',
          'Un mètre cube contient 1 000 litres.'
        ]
      }
    },
    weight: {
      title: 'Poids',
      description: 'Convertir entre différentes unités de poids',
      units: {
        metric_kilogram: 'Kilogramme',
        metric_tonne: 'Tonne',
        metric_gram: 'Gramme',
        metric_milligram: 'Milligramme',
        metric_microgram: 'Microgramme',
        imperial_pound: 'Livre',
        imperial_ounce: 'Once',
        imperial_stone: 'Stone',
        imperial_long_ton: 'Tonne Longue',
        us_short_ton: 'Tonne Courte',
        jewelry_carat: 'Carat',
        jewelry_grain: 'Grain',
        traditional_jin: 'Jin (Chinois)',
        traditional_liang: 'Liang (Chinois)',
        traditional_qian: 'Qian (Chinois)',
        medical_grain: 'Grain Médical',
        medical_dram: 'Drachme Médicale',
        medical_ounce: 'Once Médicale'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un kilogramme est l\'unité de base de masse dans le Système international.',
          'Une livre équivaut à environ 0,453592 kilogrammes.',
          'Le gramme a été défini comme étant un millième de kilogramme.'
        ]
      }
    },
    temperature: {
      title: 'Température',
      description: 'Convertir entre différentes échelles de température',
      units: {
        scientific_kelvin: 'Kelvin (Scientifique)',
        metric_celsius: 'Celsius (Métrique)',
        us_fahrenheit: 'Fahrenheit (US)',
        scientific_rankine: 'Rankine (Scientifique)',
        historical_reaumur: 'Réaumur (Historique)',
        meteorological_celsius: 'Celsius (Météorologique)',
        meteorological_fahrenheit: 'Fahrenheit (Météorologique)',
        industrial_celsius: 'Celsius (Industriel)',
        industrial_fahrenheit: 'Fahrenheit (Industriel)'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le zéro absolu correspond à -273,15°C.',
          'L\'échelle Fahrenheit est principalement utilisée aux États-Unis.',
          'La température Kelvin est utilisée dans les sciences pour éviter les valeurs négatives.'
        ]
      }
    },
    time: {
      title: 'Temps',
      description: 'Convertir entre différentes unités de temps',
      units: {
        metric_second: 'Seconde',
        metric_minute: 'Minute',
        metric_hour: 'Heure',
        metric_day: 'Jour',
        metric_week: 'Semaine',
        metric_month: 'Mois',
        metric_year: 'Année',
        metric_decade: 'Décennie',
        metric_century: 'Siècle',
        scientific_millisecond: 'Milliseconde',
        scientific_microsecond: 'Microseconde',
        scientific_nanosecond: 'Nanoseconde'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Une minute est composée de 60 secondes.',
          'Le mois n\'a pas un nombre constant de jours.',
          'Une année bissextile compte 366 jours.'
        ]
      }
    },
    speed: {
      title: 'Vitesse',
      description: 'Convertir entre différentes unités de vitesse',
      units: {
        meter_per_second: 'Mètres par Seconde',
        kilometer_per_hour: 'Kilomètres par Heure',
        mile_per_hour: 'Miles par Heure',
        foot_per_second: 'Pieds par Seconde',
        knot: 'Nœuds',
        mach: 'Mach',
        kilometer_per_second: 'Kilomètres par Seconde',
        light_speed: 'Vitesse de la Lumière'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un nœud équivaut à une vitesse de 1 mille marin par heure.',
          'La vitesse du son dans l\'air est d\'environ 343 mètres par seconde.',
          'Le kilomètre par heure est l\'unité de vitesse la plus couramment utilisée dans le monde.'
        ]
      }
    },
    angle: {
      title: 'Angle',
      description: 'Convertir entre différentes unités d\'angle',
      units: {
        degree: 'Degré',
        radian: 'Radian',
        gradian: 'Grade',
        arcminute: 'Minute d\'Arc',
        arcsecond: 'Seconde d\'Arc'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un cercle complet a 360 degrés.',
          'Un radian équivaut à environ 57,2958 degrés.',
          'Le radian est l\'unité d\'angle utilisée dans le Système international.'
        ]
      }
    },
    pressure: {
      title: 'Pression',
      description: 'Convertir entre différentes unités de pression',
      units: {
        pascal: 'Pascal',
        kilopascal: 'Kilopascal',
        bar: 'Bar',
        psi: 'PSI',
        atmosphere: 'Atmosphère'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un bar équivaut à 100 000 pascals.',
          'Le pascal est l\'unité de pression dans le Système international.',
          'Psi est couramment utilisé aux États-Unis pour mesurer la pression des pneus.'
        ]
      }
    },
    power: {
      title: 'Puissance',
      description: 'Convertir entre différentes unités de puissance',
      units: {
        watt: 'Watt',
        kilowatt: 'Kilowatt',
        horsepower: 'Cheval-vapeur'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un cheval-vapeur équivaut à environ 735,5 watts.',
          'Le watt est l\'unité de puissance dans le Système international.',
          'La puissance nécessaire pour élever un kilogramme à un mètre par seconde est d\'un watt.'
        ]
      }
    },
    energy: {
      title: 'Énergie',
      description: 'Convertir entre différentes unités d\'énergie',
      units: {
        joule: 'Joule',
        kilojoule: 'Kilojoule',
        calorie: 'Calorie',
        kilocalorie: 'Kilocalorie',
        watt_hour: 'Watt-heure',
        kilowatt_hour: 'Kilowatt-heure'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un kilojoule équivaut à 1 000 joules.',
          'Une calorie est la quantité d\'énergie nécessaire pour élever 1 gramme d\'eau de 1°C.',
          'La kilocalorie est souvent utilisée pour mesurer l\'énergie dans les aliments.'
        ]
      }
    },
    force: {
      title: 'Force',
      description: 'Convertir entre différentes unités de force',
      units: {
        newton: 'Newton',
        kilonewton: 'Kilonewton',
        dyne: 'Dyne',
        pound_force: 'Livre-force'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un newton est l\'unité de force dans le Système international.',
          'Un kilonewton équivaut à 1 000 newtons.',
          'La force exercée par la gravité terrestre est d\'environ 9,81 newtons par kilogramme.'
        ]
      }
    },
    density: {
      title: 'Densité',
      description: 'Convertir entre différentes unités de densité',
      units: {
        kilogram_per_cubic_meter: 'Kilogramme par Mètre Cube',
        gram_per_cubic_centimeter: 'Gramme par Centimètre Cube',
        pound_per_cubic_foot: 'Livre par Pied Cube',
        pound_per_cubic_inch: 'Livre par Pouce Cube',
        kilogram_per_liter: 'Kilogramme par Litre',
        gram_per_milliliter: 'Gramme par Millilitre',
        pound_per_gallon: 'Livre par Gallon',
        ounce_per_cubic_inch: 'Once par Pouce Cube'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'La densité de l\'eau est de 1 gramme par centimètre cube.',
          'La densité est une mesure de masse par unité de volume.',
          'Différentes substances ont des densités variées, ce qui influence leur flottabilité.'
        ]
      }
    },
    flow: {
      title: 'Débit',
      description: 'Convertir entre différentes unités de débit',
      units: {
        cubic_meter_per_second: 'Mètre Cube par Seconde',
        liter_per_minute: 'Litre par Minute',
        gallon_per_minute: 'Gallon par Minute'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le débit en mètres cubes par seconde est utilisé pour mesurer le flux de gros volumes de liquides.',
          'Le litre par minute est couramment utilisé dans les systèmes de plomberie résidentiels.',
          'Le débit peut être influencé par la pression et la résistance du conduit.'
        ]
      }
    },
    torque: {
      title: 'Couple',
      description: 'Convertir entre différentes unités de couple',
      units: {
        newton_meter: 'Newton-mètre',
        pound_foot: 'Pied-livre',
        kilogram_force_meter: 'Kilogramme-force-mètre'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le couple est une mesure de la force de rotation.',
          'Un pound-foot équivaut à environ 1,35582 newton-mètres.',
          'Le couple est essentiel pour déterminer la puissance d\'un moteur.'
        ]
      }
    },
    data: {
      title: 'Données',
      description: 'Convertir entre différentes unités de données numériques',
      units: {
        bit: 'Bit',
        kilobit: 'Kilobit',
        megabit: 'Mégabit',
        gigabit: 'Gigabit',
        terabit: 'Térabit',
        petabit: 'Pétabit',
        byte: 'Octet',
        kilobyte: 'Kilooctet',
        megabyte: 'Mégaoctet',
        gigabyte: 'Gigaoctet',
        terabyte: 'Téraoctet',
        petabyte: 'Pétaoctet',
        kibibit: 'Kibibit',
        mebibit: 'Mébibit',
        gibibit: 'Gibibit',
        tebibit: 'Tébibit',
        pebibit: 'Pébibit',
        kibibyte: 'Kibioctet',
        mebibyte: 'Mébioctet',
        gibibyte: 'Gibioctet',
        tebibyte: 'Tébioctet',
        pebibyte: 'Pébioctet'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          '1 kilooctet équivaut à 1 024 octets.',
          'Le gigaoctet est souvent utilisé pour mesurer la capacité de stockage des ordinateurs.',
          'La quantité de données nécessaire pour stocker une photo dépend de sa résolution.'
        ]
      }
    },
    data_rate: {
      title: 'Débit de Données',
      description: 'Convertir entre différentes unités de débit de données',
      units: {
        bits_per_second: 'Bits par Seconde',
        kilobits_per_second: 'Kilobits par Seconde',
        megabits_per_second: 'Mégabits par Seconde',
        gigabits_per_second: 'Gigabits par Seconde',
        terabits_per_second: 'Térabits par Seconde',
        bytes_per_second: 'Octets par Seconde',
        kilobytes_per_second: 'Kilooctets par Seconde',
        megabytes_per_second: 'Mégaoctets par Seconde',
        gigabytes_per_second: 'Gigaoctets par Seconde',
        terabytes_per_second: 'Téraoctets par Seconde',
        kibibits_per_second: 'Kibibits par Seconde',
        mebibits_per_second: 'Mébibits par Seconde',
        gibibits_per_second: 'Gibibits par Seconde',
        tebibits_per_second: 'Tébibits par Seconde',
        kibibytes_per_second: 'Kibioctets par Seconde',
        mebibytes_per_second: 'Mébioctets par Seconde',
        gibibytes_per_second: 'Gibioctets par Seconde',
        tebibytes_per_second: 'Tébioctets par Seconde'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un mégabit par seconde est équivalent à 1 000 kilobits par seconde.',
          'Le débit de données influence la vitesse de téléchargement sur Internet.',
          'Les réseaux modernes peuvent atteindre des débits de plusieurs gigabits par seconde.'
        ]
      }
    },
    currency: {
      title: 'Devise',
      description: 'Convertir entre différentes devises',
      units: {
        usd: 'Dollar Américain',
        eur: 'Euro',
        gbp: 'Livre Sterling',
        jpy: 'Yen Japonais',
        cny: 'Yuan Chinois',
        krw: 'Won Sud-coréen',
        inr: 'Roupie Indienne'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le yen japonais est l\'une des devises les plus échangées au monde.',
          'L\'euro est utilisé par 19 des 27 pays membres de l\'UE.',
          'Le dollar américain est souvent utilisé comme monnaie de réserve internationale.'
        ]
      }
    },
    cooking: {
      title: 'Cuisine',
      description: 'Convertir entre différentes mesures de cuisine',
      units: {
        us_fluid_ounce: 'Once Liquide US',
        us_tablespoon: 'Cuillère à Soupe US',
        us_teaspoon: 'Cuillère à Café US',
        imperial_fluid_ounce: 'Once Liquide Impériale',
        imperial_tablespoon: 'Cuillère à Soupe Impériale',
        imperial_teaspoon: 'Cuillère à Café Impériale',
        chinese_bowl: 'Bol Chinois',
        chinese_cup: 'Tasse Chinoise',
        chinese_tablespoon: 'Cuillère à Soupe Chinoise',
        chinese_teaspoon: 'Cuillère à Café Chinoise',
        japanese_cup: 'Tasse Japonaise',
        japanese_tablespoon: 'Cuillère à Soupe Japonaise',
        japanese_teaspoon: 'Cuillère à Café Japonaise'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Une tasse américaine équivaut à environ 240 millilitres.',
          'Une cuillère à soupe contient trois cuillères à café.',
          'Les mesures de cuisine peuvent varier selon les pays.'
        ]
      }
    },
    numeral: {
      title: 'Système Numérique',
      description: 'Convertir entre différents systèmes numériques',
      units: {
        decimal: 'Décimal',
        binary: 'Binaire',
        octal: 'Octal',
        hexadecimal: 'Hexadécimal'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Le système binaire est la base du fonctionnement des ordinateurs.',
          'Le système hexadécimal est souvent utilisé en programmation pour simplifier la représentation binaire.',
          'Le système octal était plus courant dans les premiers ordinateurs avant l\'adoption généralisée de l\'hexadécimal.'
        ]
      }
    },
    frequency: {
      title: 'Fréquence',
      description: 'Convertir entre différentes unités de fréquence',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Mégahertz',
        gigahertz: 'Gigahertz'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'Un hertz équivaut à une oscillation par seconde.',
          'Les fréquences audio que l\'oreille humaine peut percevoir vont de 20 Hz à 20 kHz.',
          'Les ondes radio utilisent des fréquences mesurées en mégahertz.'
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
    copied: 'Copié !',
    error: 'Une erreur est survenue',
    invalidNumber: 'Veuillez entrer un nombre valide',
    selectUnit: 'Veuillez sélectionner une unité',
    conversionError: 'Erreur de conversion',
    invalidTemperature: 'Valeur de température invalide'
  },
  converter: {
    title: 'Convertisseur d\'unités',
    description: 'Outil de conversion d\'unités en ligne',
    from: 'De',
    to: 'À',
    value: 'Valeur',
    result: 'Résultat',
    instructions: {
      title: 'Instructions',
      steps: [
        'Entrez la valeur que vous souhaitez convertir',
        'Sélectionnez l\'unité de la valeur d\'entrée',
        'Le système calculera et affichera automatiquement les valeurs correspondantes',
        'Cliquez sur n\'importe quel résultat pour copier rapidement la valeur'
      ]
    },
    limitations: {
      title: 'Limitations',
      items: [
        'Prend en charge jusqu\'à 20 chiffres (y compris le point décimal)',
        'Jusqu\'à 10 décimales',
        'Les nombres très grands ou très petits seront affichés en notation scientifique'
      ]
    }
  },
  errors: {
    invalidInput: 'Entrée invalide',
    invalidFormat: 'Format invalide',
    conversionFailed: 'Échec de la conversion',
    copyFailed: 'Échec de la copie'
  },
  footer: {
    about: 'À propos',
    description: 'Un outil puissant de conversion d\'unités en ligne.',
    contact: 'Contact',
    email: 'support@metric-converter.com',
    legal: 'Mentions légales',
    changelog: 'Journal des modifications'
  }
};

export default fr; 