import { Translation } from '../types'

const translation: Translation = {
  common: {
    title: 'Conversor Unitatum',
    description: 'Instrumentum ad convertendas unitates mensurae',
    loading: 'Oneratur...',
    error: 'Error accidit',
    copy: 'Exemplar',
    copied: 'Exemplatum',
    settings: 'Configurationes',
    language: 'Lingua',
    theme: 'Thema',
    about: 'De Nobis',
    contact: 'Contactus',
    home: 'Domus',
    selectType: 'Elige typum',
    selectLanguage: 'Elige linguam',
    pageNotFound: 'Pagina non inventa',
    pageNotFoundDesc: 'Pagina quam quaeris non existit',
    backToHome: 'Redi domum',
    copyright: 'Iura reservata',
    categories: {
      basic: 'Fundamentalia',
      area_volume: 'Area et Volumen',
      time_related: 'Tempus',
      physics: 'Physica',
      data: 'Data',
      others: 'Alia'
    },
    instructions: {
      title: 'Instructiones',
      steps: {
        input: 'Indue valorem',
        select: 'Elige unitatem',
        auto: 'Conversio automatica',
        copy: 'Exemplar resultatum'
      },
      features: {
        title: 'Functiones',
        range: {
          title: 'Intervallum',
          description: 'Converte valores in intervallo'
        },
        copy: {
          title: 'Exemplar',
          description: 'Exemplar resultatum in arcula'
        },
        paste: {
          title: 'Glutina',
          description: 'Glutina valores ex arcula'
        }
      }
    },
    customOrder: 'Ordo personalis',
    byName: 'Per nomen',
    byCreatedTime: 'Per tempus creationis',
    byLastUsed: 'Per ultimum usum',
    clearAll: 'Dele omnia',
    noFavorites: 'Nulla favorita',
    remove: 'Remove',
    clearConfirmTitle: 'Confirma deletionem',
    clearConfirmMessage: 'Visne delere omnia?',
    cancel: 'Cancella',
    confirm: 'Confirma',
    addFavorite: 'Adde ad favorita',
    removeFavorite: 'Remove ex favoritis',
    enterFavoriteName: 'Indue nomen favoriti',
    favoriteNamePlaceholder: 'Nomen favoriti',
    showFavorites: 'Ostende favorita',
    hideFavorites: 'Absconde favorita',
    from: 'Ab',
    to: 'Ad',
    selectUnit: 'Elige unitatem',
    inputValue: 'Indue valorem',
    convertResult: 'Resultatum conversionis',
    searchUnit: 'Quaere unitatem'
  },
  units: {
    length: {
      title: 'Longitudo',
      description: 'Converte inter unitates longitudinis',
      units: {
        meter: 'Metrum',
        kilometer: 'Chilometrum',
        centimeter: 'Centimetrum',
        millimeter: 'Millimetrum',
        inch: 'Digitus',
        foot: 'Pes',
        yard: 'Ulna',
        mile: 'Mille Passus'
      }
    },
    weight: {
      title: 'Pondus',
      description: 'Converte inter unitates ponderis',
      units: {
        kilogram: 'Chilogramma',
        gram: 'Gramma',
        milligram: 'Milligramma',
        pound: 'Libra',
        ounce: 'Uncia',
        ton: 'Tonna'
      }
    },
    temperature: {
      title: 'Temperatura',
      description: 'Converte inter unitates temperaturae',
      units: {
        celsius: 'Celsius',
        fahrenheit: 'Fahrenheit',
        kelvin: 'Kelvin'
      }
    },
    area: {
      title: 'Area',
      description: 'Converte inter unitates areae',
      units: {
        squareMeter: 'Metrum Quadratum',
        squareKilometer: 'Chilometrum Quadratum',
        hectare: 'Hectara',
        squareFoot: 'Pes Quadratus',
        acre: 'Iugerum'
      }
    },
    volume: {
      title: 'Volumen',
      description: 'Converte inter unitates voluminis',
      units: {
        cubicMeter: 'Metrum Cubicum',
        liter: 'Litrum',
        milliliter: 'Millilitrum',
        gallon: 'Congius',
        quart: 'Quartarius',
        pint: 'Sextarius',
        cup: 'Cyathus'
      }
    },
    time: {
      title: 'Tempus',
      description: 'Converte inter unitates temporis',
      units: {
        second: 'Secundum',
        minute: 'Minutum',
        hour: 'Hora',
        day: 'Dies',
        week: 'Hebdomada',
        month: 'Mensis',
        year: 'Annus',
        decade: 'Decennium',
        century: 'Saeculum'
      }
    },
    speed: {
      title: 'Velocitas',
      description: 'Converte inter unitates velocitatis',
      units: {
        meterPerSecond: 'Metra per Secundum',
        kilometerPerHour: 'Chilometra per Horam',
        milePerHour: 'Milia Passuum per Horam',
        knot: 'Nodus',
        mach: 'Numerus Mach'
      }
    },
    angle: {
      title: 'Angulus',
      description: 'Converte inter unitates angulorum',
      units: {
        degree: 'Gradus',
        radian: 'Radius',
        gradian: 'Gradus Centesimalis',
        arcMinute: 'Minuta',
        arcSecond: 'Secunda'
      }
    },
    pressure: {
      title: 'Pressura',
      description: 'Converte inter unitates pressurae',
      units: {
        pascal: 'Pascal',
        bar: 'Bar',
        atmosphere: 'Atmosphaera',
        psi: 'Libra per Pollicem Quadratum',
        torr: 'Torricelli'
      }
    },
    power: {
      title: 'Potentia',
      description: 'Converte inter unitates potentiae',
      units: {
        watt: 'Watt',
        kilowatt: 'Chilowatt',
        horsepower: 'Vis Equi',
        btuPerHour: 'BTU per Horam'
      }
    },
    energy: {
      title: 'Energia',
      description: 'Converte inter unitates energiae',
      units: {
        joule: 'Joule',
        calorie: 'Caloria',
        kilowattHour: 'Chilowatt-Hora',
        electronVolt: 'Electron-Volt'
      }
    },
    force: {
      title: 'Vis',
      description: 'Converte inter unitates virium',
      units: {
        newton: 'Newton',
        dyne: 'Dyne',
        poundForce: 'Vis Librae',
        kilogramForce: 'Vis Chilogrammatis'
      }
    },
    density: {
      title: 'Densitas',
      description: 'Converte inter unitates densitatis',
      units: {
        kilogramPerCubicMeter: 'Chilogramma per Metrum Cubicum',
        gramPerCubicCentimeter: 'Gramma per Centimetrum Cubicum',
        poundPerCubicFoot: 'Libra per Pedem Cubicum'
      }
    },
    flow: {
      title: 'Fluxus',
      description: 'Converte inter unitates fluxus',
      units: {
        cubicMeterPerSecond: 'Metrum Cubicum per Secundum',
        literPerSecond: 'Litrum per Secundum',
        gallonPerMinute: 'Congius per Minutum'
      }
    },
    torque: {
      title: 'Torqueo',
      description: 'Converte inter unitates torsionis',
      units: {
        newtonMeter: 'Newton-Metrum',
        poundFoot: 'Libra-Pes',
        kilogramMeter: 'Chilogramma-Metrum'
      }
    },
    data: {
      title: 'Data',
      description: 'Converte inter unitates datorum',
      units: {
        bit: 'Bit',
        byte: 'Byte',
        kilobyte: 'Chilobyte',
        megabyte: 'Megabyte',
        gigabyte: 'Gigabyte',
        terabyte: 'Terabyte'
      }
    },
    data_rate: {
      title: 'Velocitas Datorum',
      description: 'Converte inter unitates velocitatis datorum',
      units: {
        bitPerSecond: 'Bit per Secundum',
        bytePerSecond: 'Byte per Secundum',
        kilobitPerSecond: 'Chilobit per Secundum',
        megabitPerSecond: 'Megabit per Secundum'
      }
    },
    currency: {
      title: 'Moneta',
      description: 'Converte inter monetas',
      units: {
        usd: 'Nummus Americanus',
        eur: 'Euro',
        gbp: 'Libra Britannica',
        jpy: 'Nummus Iaponicus',
        cny: 'Nummus Sinicus'
      }
    },
    cooking: {
      title: 'Coquinaria',
      description: 'Converte inter unitates coquinarias',
      units: {
        teaspoon: 'Cochlear Parvum',
        tablespoon: 'Cochlear Magnum',
        cup: 'Cyathus',
        pint: 'Sextarius',
        quart: 'Quartarius',
        gallon: 'Congius'
      }
    },
    numeral: {
      title: 'Numeri',
      description: 'Converte inter systemata numerorum',
      binary: {
        title: 'Binarius',
        description: 'Systema numerorum binarium (0-1)'
      },
      octal: {
        title: 'Octalis',
        description: 'Systema numerorum octale (0-7)'
      },
      decimal: {
        title: 'Decimalis',
        description: 'Systema numerorum decimale (0-9)'
      },
      hexadecimal: {
        title: 'Hexadecimalis',
        description: 'Systema numerorum hexadecimale (0-9, A-F)'
      }
    },
    frequency: {
      title: 'Frequentia',
      description: 'Converte inter unitates frequentiae',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Chilohertz',
        megahertz: 'Megahertz',
        gigahertz: 'Gigahertz',
        rpm: 'Rotationes per Minutum'
      }
    }
  },
  buttons: {
    convert: 'Converte',
    clear: 'Dele',
    swap: 'Permuta',
    copy: 'Exemplar'
  },
  messages: {
    copied: 'Exemplatum',
    error: 'Error',
    invalidNumber: 'Numerus invalidus',
    selectUnit: 'Elige unitatem',
    conversionError: 'Error conversionis',
    invalidTemperature: 'Temperatura invalida'
  }
}

export default translation 