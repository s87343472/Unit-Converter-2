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
        astronomical_unit: 'Unité astronomique',
        metric_decimeter: 'Décimètre',
        metric_micrometer: 'Micromètre',
        metric_nanometer: 'Nanomètre',
        metric_picometer: 'Picomètre',
        nautical_mile: 'Mille marin',
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
      title: 'Aire',
      description: 'Convertir entre différentes unités d\'aire',
      units: {
        metric_square_meter: 'Mètre carré',
        metric_square_kilometer: 'Kilomètre carré',
        metric_square_centimeter: 'Centimètre carré',
        metric_square_millimeter: 'Millimètre carré',
        imperial_square_inch: 'Pouce carré',
        imperial_square_foot: 'Pied carré',
        imperial_square_yard: 'Yard carré',
        imperial_square_mile: 'Mile carré',
        metric_hectare: 'Hectare',
        imperial_acre: 'Acre',
        metric_square_decimeter: 'Décimètre carré',
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
        metric_cubic_meter: 'Mètre cube',
        metric_liter: 'Litre',
        metric_milliliter: 'Millilitre',
        imperial_gallon: 'Gallon',
        imperial_quart: 'Quart',
        imperial_pint: 'Pinte',
        imperial_fluid_ounce: 'Once liquide',
        imperial_cubic_inch: 'Pouce cube',
        imperial_cubic_foot: 'Pied cube'
      }
    },
    weight: {
      title: 'Poids',
      description: 'Convertir entre différentes unités de poids',
      units: {
        metric_kilogram: 'Kilogramme',
        metric_gram: 'Gramme',
        metric_milligram: 'Milligramme',
        imperial_pound: 'Livre',
        imperial_ounce: 'Once'
      }
    },
    time: {
      title: 'Temps',
      description: 'Convertir entre différentes unités de temps',
      units: {
        second: 'Seconde',
        minute: 'Minute',
        hour: 'Heure',
        day: 'Jour',
        week: 'Semaine',
        month: 'Mois',
        year: 'Année'
      }
    },
    temperature: {
      title: 'Température',
      description: 'Convertir entre différentes unités de température',
      units: {
        celsius: 'Celsius',
        fahrenheit: 'Fahrenheit',
        kelvin: 'Kelvin'
      }
    },
    speed: {
      title: 'Vitesse',
      description: 'Convertir entre différentes unités de vitesse',
      units: {
        meter_per_second: 'Mètre par seconde',
        kilometer_per_hour: 'Kilomètre par heure',
        mile_per_hour: 'Mile par heure',
        knot: 'Nœud'
      }
    },
    angle: {
      title: 'Angle',
      description: 'Convertir entre différentes unités d\'angle',
      units: {
        degree: 'Degré',
        radian: 'Radian'
      }
    },
    pressure: {
      title: 'Pression',
      description: 'Convertir entre différentes unités de pression',
      units: {
        pascal: 'Pascal',
        bar: 'Bar',
        psi: 'Livre par pouce carré'
      }
    },
    power: {
      title: 'Puissance',
      description: 'Convertir entre différentes unités de puissance',
      units: {
        watt: 'Watt',
        kilowatt: 'Kilowatt',
        horsepower: 'Cheval-vapeur'
      }
    },
    energy: {
      title: 'Énergie',
      description: 'Convertir entre différentes unités d\'énergie',
      units: {
        joule: 'Joule',
        kilojoule: 'Kilojoule',
        calorie: 'Calorie',
        kilocalorie: 'Kilocalorie'
      }
    },
    force: {
      title: 'Force',
      description: 'Convertir entre différentes unités de force',
      units: {
        newton: 'Newton',
        kilonewton: 'Kilonewton'
      }
    },
    density: {
      title: 'Densité',
      description: 'Convertir entre différentes unités de densité',
      units: {
        kilogram_per_cubic_meter: 'Kilogramme par mètre cube',
        gram_per_cubic_centimeter: 'Gramme par centimètre cube'
      }
    },
    flow: {
      title: 'Débit',
      description: 'Convertir entre différentes unités de débit',
      units: {
        cubic_meter_per_second: 'Mètre cube par seconde',
        liter_per_minute: 'Litre par minute'
      }
    },
    torque: {
      title: 'Couple',
      description: 'Convertir entre différentes unités de couple',
      units: {
        newton_meter: 'Newton mètre',
        pound_foot: 'Livre pied'
      }
    },
    data: {
      title: 'Données',
      description: 'Convertir entre différentes unités de données',
      units: {
        byte: 'Octet',
        kilobyte: 'Kilo-octet',
        megabyte: 'Mégaoctet',
        gigabyte: 'Gigaoctet'
      }
    },
    data_rate: {
      title: 'Débit de données',
      description: 'Convertir entre différents débits de données',
      units: {
        bit_per_second: 'Bit par seconde',
        kilobit_per_second: 'Kilobit par seconde',
        megabit_per_second: 'Mégabit par seconde'
      }
    },
    currency: {
      title: 'Monnaie',
      description: 'Convertir entre différentes unités de monnaie',
      units: {
        usd: 'Dollar américain',
        eur: 'Euro',
        gbp: 'Livre sterling',
        jpy: 'Yen japonais'
      }
    },
    cooking: {
      title: 'Cuisine',
      description: 'Convertir entre différentes unités de cuisine',
      units: {
        teaspoon: 'Cuillère à café',
        tablespoon: 'Cuillère à soupe',
        cup: 'Tasse'
      }
    },
    numeral: {
      title: 'Système numérique',
      description: 'Convertir entre différents systèmes numériques',
      units: {
        decimal: 'Décimal',
        binary: 'Binaire',
        octal: 'Octal',
        hexadecimal: 'Hexadécimal'
      }
    },
    frequency: {
      title: 'Fréquence',
      description: 'Convertir entre différentes unités de fréquence',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Mégahertz'
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