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
      description: 'Conversion entre différentes unités de longueur (ISO 31-1)',
      units: {
        meter: 'Mètre',
        kilometer: 'Kilomètre',
        centimeter: 'Centimètre',
        millimeter: 'Millimètre',
        inch: 'Pouce',
        foot: 'Pied',
        yard: 'Yard',
        mile: 'Mile',
        light_year: 'Année-lumière',
        astronomical_unit: 'Unité astronomique',
        decimeter: 'Décimètre',
        micrometer: 'Micromètre',
        nanometer: 'Nanomètre',
        picometer: 'Picomètre'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'L\'année-lumière n\'est pas une unité de temps, mais une unité de distance que la lumière parcourt en un an.',
          'L\'Unité Astronomique (UA) est basée sur la distance moyenne entre la Terre et le Soleil.',
          'Le mètre était initialement défini comme un dix-millionième de la distance entre le pôle Nord et l\'équateur.',
          'Aujourd\'hui, le mètre est défini par la vitesse de la lumière dans le vide.'
        ]
      }
    },
    area: {
      title: 'Surface',
      description: 'Conversion des unités de mesure de surface (ISO 31-1)',
      units: {
        square_meter: 'Mètre carré',
        square_kilometer: 'Kilomètre carré',
        square_centimeter: 'Centimètre carré',
        square_millimeter: 'Millimètre carré',
        square_inch: 'Pouce carré',
        square_foot: 'Pied carré',
        square_yard: 'Yard carré',
        square_mile: 'Mile carré',
        hectare: 'Hectare',
        acre: 'Acre'
      }
    },
    volume: {
      title: 'Volume',
      description: 'Conversion des unités de mesure de volume (ISO 31-1)'
    },
    weight: {
      title: 'Poids',
      description: 'Conversion des unités de masse (ISO 31-3)'
    },
    time: {
      title: 'Temps',
      description: 'Conversion des unités de temps (ISO 31-1)'
    },
    temperature: {
      title: 'Température',
      description: 'Conversion des unités de température (ISO 31-4)'
    },
    speed: {
      title: 'Vitesse',
      description: 'Conversion des unités de vitesse (ISO 31-3)'
    },
    angle: {
      title: 'Angle',
      description: 'Conversion des unités d\'angle (ISO 31-1)'
    },
    pressure: {
      title: 'Pression',
      description: 'Conversion des unités de pression (ISO 31-3)'
    },
    power: {
      title: 'Puissance',
      description: 'Conversion des unités de puissance (ISO 31-3)'
    },
    energy: {
      title: 'Énergie',
      description: 'Conversion des unités d\'énergie (ISO 31-3)'
    },
    force: {
      title: 'Force',
      description: 'Conversion des unités de force (ISO 31-3)'
    },
    density: {
      title: 'Densité',
      description: 'Conversion entre différentes unités de densité (ISO 31-3)',
      units: {
        kilogram_per_cubic_meter: 'Kilogramme par mètre cube',
        gram_per_cubic_centimeter: 'Gramme par centimètre cube',
        pound_per_cubic_foot: 'Livre par pied cube',
        pound_per_cubic_inch: 'Livre par pouce cube',
        kilogram_per_liter: 'Kilogramme par litre',
        gram_per_milliliter: 'Gramme par millilitre',
        pound_per_gallon: 'Livre par gallon',
        ounce_per_cubic_inch: 'Once par pouce cube'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'L\'eau a une densité d\'environ 1 gramme par centimètre cube à température ambiante.',
          'Le mercure est le liquide le plus dense à température ambiante, avec une densité de 13,5 g/cm³.',
          'La densité de l\'air au niveau de la mer est d\'environ 1,225 kg/m³.',
          'La densité change avec la température et la pression.'
        ]
      }
    },
    flow: {
      title: 'Débit',
      description: 'Conversion des unités de débit'
    },
    torque: {
      title: 'Couple',
      description: 'Conversion des unités de couple (ISO 31-3)'
    },
    data: {
      title: 'Stockage de données',
      description: 'Conversion des unités de stockage de données (IEC 60027)'
    },
    data_rate: {
      title: 'Débit de données',
      description: 'Conversion des débits de transfert de données (ISO/IEC 80000)'
    },
    currency: {
      title: 'Devise',
      description: 'Conversion entre différentes devises (ISO 4217)'
    },
    cooking: {
      title: 'Mesures de cuisine',
      description: 'Conversion des unités de mesure de cuisine'
    },
    numeral: {
      title: 'Systèmes numériques',
      description: 'Conversion entre différents systèmes numériques'
    },
    frequency: {
      title: 'Fréquence',
      description: 'Conversion entre différentes unités de fréquence',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Mégahertz',
        gigahertz: 'Gigahertz',
        cycles_per_second: 'Cycles par seconde',
        rpm: 'Tours par minute',
        bpm: 'Battements par minute'
      },
      knowledge: {
        title: 'Le saviez-vous ?',
        items: [
          'L\'unité Hertz est nommée d\'après le physicien allemand Heinrich Hertz.',
          'L\'audition humaine se situe entre 20 Hz et 20 kHz.',
          'Les processeurs modernes fonctionnent dans la gamme des gigahertz.',
          'Le cœur humain bat normalement entre 60 et 100 BPM.'
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