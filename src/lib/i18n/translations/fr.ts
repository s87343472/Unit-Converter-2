import type { Translation } from '../types'

const fr: Translation = {
  common: {
    title: 'Convertisseur d\'unités',
    description: 'Un outil de conversion d\'unités en ligne puissant qui prend en charge diverses conversions d\'unités.',
    selectType: 'Sélectionner le type de conversion',
    selectLanguage: 'Sélectionner la langue',
    pageNotFound: 'Page non trouvée',
    pageNotFoundDesc: 'Désolé, la page que vous recherchez n\'existe pas.',
    backToHome: 'Retour à l\'accueil',
    copyright: 'Tous droits réservés.',
    categories: {
      basic: 'Unités de base',
      area_volume: 'Surface & Volume',
      time_related: 'Lié au temps',
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
    to: 'À',
    selectUnit: 'Sélectionner l\'unité'
  },
  units: {
    length: {
      title: 'Longueur',
      description: 'Conversion des unités de mesure linéaire (ISO 31-1)',
      units: {
        meter: 'Mètre',
        kilometer: 'Kilomètre',
        centimeter: 'Centimètre',
        millimeter: 'Millimètre',
        inch: 'Pouce',
        foot: 'Pied',
        yard: 'Yard',
        mile: 'Mile'
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
      description: 'Conversion des unités de densité (ISO 31-3)'
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
    selectUnit: 'Veuillez sélectionner les deux unités'
  }
}

export default fr 