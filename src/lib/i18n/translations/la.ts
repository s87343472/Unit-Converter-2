import type { Translation } from '../types'

const la: Translation = {
  common: {
    title: 'Conversor Unitatum',
    description: 'Instrumentum potens ad convertendas unitates diversas.',
    loading: 'Onerando...',
    error: 'Error',
    copy: 'Exscribe',
    copied: 'Exscriptum',
    settings: 'Configurationes',
    language: 'Lingua',
    theme: 'Thema',
    about: 'De Nobis',
    contact: 'Contactus',
    home: 'Domus',
    conversionHistory: 'Historia Conversionum',
    clearHistory: 'Dele Historiam',
    confirmClear: 'Visne delere omnem historiam?',
    delete: 'Dele',
    selectType: 'Elige typum conversionis',
    selectLanguage: 'Elige linguam',
    pageNotFound: 'Pagina non inventa',
    pageNotFoundDesc: 'Pagina quam quaeris non existit.',
    backToHome: 'Redi domum',
    copyright: 'Omnia iura reservata.',
    categories: {
      basic: 'Unitates Fundamentales',
      area_volume: 'Area et Volumen',
      time_related: 'Tempus',
      physics: 'Unitates Physicae',
      data: 'Unitates Datorum',
      others: 'Aliae Unitates'
    },
    instructions: {
      title: 'Instructiones',
      steps: {
        input: 'Indue valorem convertendum',
        select: 'Elige unitatem valoris inducti',
        auto: 'Systema automatice calculabit et monstrabit valores respondentes in aliis unitatibus',
        copy: 'Pulsa quemlibet eventum ad celeriter exscribendum valorem cum unitate sua'
      },
      features: {
        title: 'Functiones',
        range: {
          title: 'Ambitus Valorum Admissorum',
          description: 'Admittit usque ad XX numeros (puncto decimali incluso) cum X numeris post punctum decimale. Pro numeris valde magnis vel parvis, notatio scientifica automatice adhibetur.'
        },
        copy: {
          title: 'Functio Exscribendi',
          description: 'Pulsa quemlibet eventum conversionis ad exscribendum valorem et unitatem pro facili glutinatione.'
        },
        paste: {
          title: 'Functio Glutinandi',
          description: 'Admittit glutinationem valorum cum unitatibus, systema automatice extrahet partem numericam.'
        }
      }
    },
    customOrder: 'Ordo Personalis',
    byName: 'Per Nomen',
    byCreatedTime: 'Per Tempus Creationis',
    byLastUsed: 'Per Ultimum Usum',
    clearAll: 'Dele Omnia',
    noFavorites: 'Nondum Favorita',
    remove: 'Remove',
    clearConfirmTitle: 'Dele Omnia Favorita',
    clearConfirmMessage: 'Visne delere omnia favorita? Haec actio revocari non potest.',
    cancel: 'Cancella',
    confirm: 'Confirma',
    addFavorite: 'Adde ad Favorita',
    removeFavorite: 'Remove e Favoritis',
    enterFavoriteName: 'Indue nomen pro hoc favorito',
    favoriteNamePlaceholder: 'e.g. Metra ad Pedes',
    showFavorites: 'Monstra Favorita',
    hideFavorites: 'Cela Favorita',
    from: 'Ab',
    to: 'Ad',
    selectUnit: 'Elige Unitatem',
    inputValue: 'Valor Inductus',
    convertResult: 'Eventus',
    searchUnit: 'Quaere unitates...',
    length: 'Longitudo'
  },
  units: {
    length: {
      title: 'Longitudo',
      description: 'Conversio inter diversas unitates longitudinis (ISO 31-1)',
      units: {
        meter: 'Metrum',
        kilometer: 'Chilometrum',
        centimeter: 'Centimetrum',
        millimeter: 'Millimetrum',
        inch: 'Digitus',
        foot: 'Pes',
        yard: 'Ulna',
        mile: 'Mille Passus',
        light_year: 'Annus Lucis',
        astronomical_unit: 'Unitas Astronomica',
        decimeter: 'Decimetrum',
        micrometer: 'Micrometrum',
        nanometer: 'Nanometrum',
        picometer: 'Picometrum'
      },
      knowledge: {
        title: 'Scisne?',
        items: [
          'Annus lucis non est unitas temporis, sed distantia quam lux uno anno percurrit.',
          'Unitas Astronomica (UA) fundatur in distantia media inter Terram et Solem.',
          'Metrum originaliter definitum est ut pars decies milliesima distantiae inter Polum Septentrionalem et Aequatorem.',
          'Hodie metrum definitur per celeritatem lucis in vacuo.'
        ]
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
      description: 'Conversio inter diversas unitates densitatis (ISO 31-3)',
      units: {
        kilogram_per_cubic_meter: 'Chilogramma per Metrum Cubicum',
        gram_per_cubic_centimeter: 'Gramma per Centimetrum Cubicum',
        pound_per_cubic_foot: 'Libra per Pedem Cubicum',
        pound_per_cubic_inch: 'Libra per Digitum Cubicum',
        kilogram_per_liter: 'Chilogramma per Litram',
        gram_per_milliliter: 'Gramma per Millilitram',
        pound_per_gallon: 'Libra per Gallonem',
        ounce_per_cubic_inch: 'Uncia per Digitum Cubicum'
      },
      knowledge: {
        title: 'Scisne?',
        items: [
          'Aqua habet densitatem circiter unius grammatis per centimetrum cubicum ad temperaturam cubiculi.',
          'Hydrargyrum est liquidum densissimum ad temperaturam cubiculi, densitate 13.5 g/cm³.',
          'Densitas aeris ad superficiem maris est circiter 1.225 kg/m³.',
          'Densitas mutatur cum temperatura et pressione.'
        ]
      }
    },
    flow: {
      title: 'Fluxus',
      description: 'Converte inter unitates fluxus',
      units: {
        cubicMeterPerSecond: 'Metrum Cubicum per Secundum',
        literPerSecond: 'Litrum per Secundum',
        gallonPerMinute: 'Congius per Minutum',
        cubicFootPerMinute: 'Pes Cubicus per Minutum',
        literPerMinute: 'Litrum per Minutum',
        cubicMeterPerHour: 'Metrum Cubicum per Horam'
      }
    },
    torque: {
      title: 'Torqueo',
      description: 'Converte inter unitates torsionis',
      units: {
        newtonMeter: 'Newton-Metrum',
        poundFoot: 'Libra-Pes',
        kilogramMeter: 'Chilogramma-Metrum',
        newtonCentimeter: 'Newton-Centimetrum',
        kilogramForceMeter: 'Chilogramma-Vis-Metrum',
        poundInch: 'Libra-Digitus'
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
        terabyte: 'Terabyte',
        petabyte: 'Petabyte',
        kibibyte: 'Kibibyte',
        mebibyte: 'Mebibyte',
        gibibyte: 'Gibibyte',
        tebibyte: 'Tebibyte'
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
      description: 'Conversio inter diversas unitates frequentiae',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Megahertz',
        gigahertz: 'Gigahertz',
        cycles_per_second: 'Cycli per Secundam',
        rpm: 'Rotationes per Minutam',
        bpm: 'Pulsus per Minutam'
      },
      knowledge: {
        title: 'Scisne?',
        items: [
          'Unitas Hertz nominata est in honorem physici Germanici Heinrich Hertz.',
          'Auditus humanus percipit frequentias inter XX Hz et XX kHz.',
          'Processores moderni operantur in ambitu gigahertz.',
          'Cor humanum normaliter pulsat LX-C vicibus per minutam.'
        ]
      }
    }
  },
  buttons: {
    convert: 'Converte',
    clear: 'Dele',
    swap: 'Permuta',
    copy: 'Exscribe'
  },
  messages: {
    copied: 'In tabulam temporariam exscriptum',
    error: 'Error accidit',
    invalidNumber: 'Quaeso, indue numerum validum',
    selectUnit: 'Quaeso, elige ambas unitates',
    conversionError: 'Error in conversione',
    invalidTemperature: 'Temperatura non potest esse infra zero absolutum'
  }
}

export default la 