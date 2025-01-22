import { Translation } from '../types'

const translation: Translation = {
  common: {
    title: 'Conversor de Unidades',
    description: 'Herramienta para convertir unidades de medida',
    loading: 'Cargando...',
    error: 'Error',
    copy: 'Copiar',
    copied: 'Copiado',
    settings: 'Configuración',
    language: 'Idioma',
    theme: 'Tema',
    about: 'Acerca de',
    contact: 'Contacto',
    home: 'Inicio',
    selectType: 'Seleccionar tipo',
    selectLanguage: 'Seleccionar idioma',
    pageNotFound: 'Página no encontrada',
    pageNotFoundDesc: 'La página que buscas no existe',
    backToHome: 'Volver al inicio',
    copyright: 'Derechos reservados',
    categories: {
      basic: 'Básico',
      area_volume: 'Área y Volumen',
      time_related: 'Tiempo',
      physics: 'Física',
      data: 'Datos',
      others: 'Otros'
    },
    instructions: {
      title: 'Instrucciones',
      steps: {
        input: 'Ingresar valor',
        select: 'Seleccionar unidad',
        auto: 'Conversión automática',
        copy: 'Copiar resultado'
      },
      features: {
        title: 'Características',
        range: {
          title: 'Rango',
          description: 'Convertir valores en un rango'
        },
        copy: {
          title: 'Copiar',
          description: 'Copiar resultado al portapapeles'
        },
        paste: {
          title: 'Pegar',
          description: 'Pegar valores desde el portapapeles'
        }
      }
    },
    customOrder: 'Orden personalizado',
    byName: 'Por nombre',
    byCreatedTime: 'Por fecha de creación',
    byLastUsed: 'Por último uso',
    clearAll: 'Limpiar todo',
    noFavorites: 'Sin favoritos',
    remove: 'Eliminar',
    clearConfirmTitle: 'Confirmar eliminación',
    clearConfirmMessage: '¿Deseas eliminar todo?',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    addFavorite: 'Agregar a favoritos',
    removeFavorite: 'Quitar de favoritos',
    enterFavoriteName: 'Ingresar nombre del favorito',
    favoriteNamePlaceholder: 'Nombre del favorito',
    showFavorites: 'Mostrar favoritos',
    hideFavorites: 'Ocultar favoritos',
    from: 'De',
    to: 'A',
    selectUnit: 'Seleccionar unidad',
    inputValue: 'Ingresar valor',
    convertResult: 'Resultado de la conversión',
    searchUnit: 'Buscar unidad',
    length: 'Longitud'
  },
  units: {
    length: {
      title: 'Longitud',
      description: 'Convertir entre unidades de longitud',
      units: {
        meter: 'Metro',
        kilometer: 'Kilómetro',
        centimeter: 'Centímetro',
        millimeter: 'Milímetro',
        inch: 'Pulgada',
        foot: 'Pie',
        yard: 'Yarda',
        mile: 'Milla'
      }
    },
    weight: {
      title: 'Peso',
      description: 'Convertir entre unidades de peso',
      units: {
        kilogram: 'Kilogramo',
        gram: 'Gramo',
        milligram: 'Miligramo',
        pound: 'Libra',
        ounce: 'Onza',
        ton: 'Tonelada'
      }
    },
    temperature: {
      title: 'Temperatura',
      description: 'Convertir entre unidades de temperatura',
      units: {
        celsius: 'Celsius',
        fahrenheit: 'Fahrenheit',
        kelvin: 'Kelvin'
      }
    },
    area: {
      title: 'Área',
      description: 'Convertir entre unidades de área',
      units: {
        squareMeter: 'Metro cuadrado',
        squareKilometer: 'Kilómetro cuadrado',
        hectare: 'Hectárea',
        squareFoot: 'Pie cuadrado',
        acre: 'Acre'
      }
    },
    volume: {
      title: 'Volumen',
      description: 'Convertir entre unidades de volumen',
      units: {
        cubicMeter: 'Metro cúbico',
        liter: 'Litro',
        milliliter: 'Mililitro',
        gallon: 'Galón',
        quart: 'Cuarto',
        pint: 'Pinta',
        cup: 'Taza'
      }
    },
    time: {
      title: 'Tiempo',
      description: 'Convertir entre unidades de tiempo',
      units: {
        second: 'Segundo',
        minute: 'Minuto',
        hour: 'Hora',
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        decade: 'Década',
        century: 'Siglo'
      }
    },
    speed: {
      title: 'Velocidad',
      description: 'Convertir entre unidades de velocidad',
      units: {
        meterPerSecond: 'Metros por segundo',
        kilometerPerHour: 'Kilómetros por hora',
        milePerHour: 'Millas por hora',
        knot: 'Nudo',
        mach: 'Mach'
      }
    },
    angle: {
      title: 'Ángulo',
      description: 'Convertir entre unidades de ángulo',
      units: {
        degree: 'Grado',
        radian: 'Radián',
        gradian: 'Gradián',
        arcMinute: 'Minuto de arco',
        arcSecond: 'Segundo de arco'
      }
    },
    pressure: {
      title: 'Presión',
      description: 'Convertir entre unidades de presión',
      units: {
        pascal: 'Pascal',
        bar: 'Bar',
        atmosphere: 'Atmósfera',
        psi: 'Libra por pulgada cuadrada',
        torr: 'Torr'
      }
    },
    power: {
      title: 'Potencia',
      description: 'Convertir entre unidades de potencia',
      units: {
        watt: 'Vatio',
        kilowatt: 'Kilovatio',
        horsepower: 'Caballo de fuerza',
        btuPerHour: 'BTU por hora'
      }
    },
    energy: {
      title: 'Energía',
      description: 'Convertir entre unidades de energía',
      units: {
        joule: 'Julio',
        calorie: 'Caloría',
        kilowattHour: 'Kilovatio-hora',
        electronVolt: 'Electrón-voltio'
      }
    },
    force: {
      title: 'Fuerza',
      description: 'Convertir entre unidades de fuerza',
      units: {
        newton: 'Newton',
        dyne: 'Dina',
        poundForce: 'Libra-fuerza',
        kilogramForce: 'Kilogramo-fuerza'
      }
    },
    density: {
      title: 'Densidad',
      description: 'Convertir entre unidades de densidad',
      units: {
        kilogramPerCubicMeter: 'Kilogramo por metro cúbico',
        gramPerCubicCentimeter: 'Gramo por centímetro cúbico',
        poundPerCubicFoot: 'Libra por pie cúbico'
      }
    },
    flow: {
      title: 'Flujo',
      description: 'Convertir entre unidades de flujo',
      units: {
        cubicMeterPerSecond: 'Metro cúbico por segundo',
        literPerSecond: 'Litro por segundo',
        gallonPerMinute: 'Galón por minuto'
      }
    },
    torque: {
      title: 'Par',
      description: 'Convertir entre unidades de par',
      units: {
        newtonMeter: 'Newton-metro',
        poundFoot: 'Libra-pie',
        kilogramMeter: 'Kilogramo-metro'
      }
    },
    data: {
      title: 'Datos',
      description: 'Convertir entre unidades de datos',
      units: {
        bit: 'Bit',
        byte: 'Byte',
        kilobyte: 'Kilobyte',
        megabyte: 'Megabyte',
        gigabyte: 'Gigabyte',
        terabyte: 'Terabyte'
      }
    },
    data_rate: {
      title: 'Velocidad de datos',
      description: 'Convertir entre unidades de velocidad de datos',
      units: {
        bitPerSecond: 'Bits por segundo',
        bytePerSecond: 'Bytes por segundo',
        kilobitPerSecond: 'Kilobits por segundo',
        megabitPerSecond: 'Megabits por segundo'
      }
    },
    currency: {
      title: 'Moneda',
      description: 'Convertir entre monedas',
      units: {
        usd: 'Dólar estadounidense',
        eur: 'Euro',
        gbp: 'Libra esterlina',
        jpy: 'Yen japonés',
        cny: 'Yuan chino'
      }
    },
    cooking: {
      title: 'Cocina',
      description: 'Convertir entre unidades de cocina',
      units: {
        teaspoon: 'Cucharadita',
        tablespoon: 'Cucharada',
        cup: 'Taza',
        pint: 'Pinta',
        quart: 'Cuarto',
        gallon: 'Galón'
      }
    },
    numeral: {
      title: 'Números',
      description: 'Convertir entre sistemas numéricos',
      binary: {
        title: 'Binario',
        description: 'Sistema numérico binario (0-1)'
      },
      octal: {
        title: 'Octal',
        description: 'Sistema numérico octal (0-7)'
      },
      decimal: {
        title: 'Decimal',
        description: 'Sistema numérico decimal (0-9)'
      },
      hexadecimal: {
        title: 'Hexadecimal',
        description: 'Sistema numérico hexadecimal (0-9, A-F)'
      }
    },
    frequency: {
      title: 'Frecuencia',
      description: 'Convertir entre unidades de frecuencia',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Megahertz',
        gigahertz: 'Gigahertz',
        rpm: 'Revoluciones por minuto'
      }
    }
  },
  buttons: {
    convert: 'Convertir',
    clear: 'Limpiar',
    swap: 'Intercambiar',
    copy: 'Copiar'
  },
  messages: {
    copied: 'Copiado al portapapeles',
    error: 'Error',
    invalidNumber: 'Número inválido',
    selectUnit: 'Seleccione una unidad',
    conversionError: 'Error en la conversión',
    invalidTemperature: 'Temperatura inválida'
  },
  footer: {
    about: 'Acerca de',
    description: 'Herramientas gratuitas de conversión de unidades en línea',
    contact: 'Contacto',
    email: 'contacto@unitconverter.com',
    legal: 'Legal'
  },
  converter: {
    title: 'Conversor de Unidades',
    description: 'Herramienta en línea para convertir entre diferentes unidades de medida con precisión',
    from: 'De',
    to: 'A',
    instructions: {
      title: 'Instrucciones de uso',
      steps: [
        'Ingrese el valor que desea convertir en el campo "De"',
        'Seleccione la unidad de origen de la lista',
        'Los resultados se mostrarán automáticamente en todas las unidades disponibles',
        'Use el botón de copiar para guardar el resultado en el portapapeles'
      ]
    },
    limitations: {
      title: 'Limitaciones',
      items: [
        'Precisión garantizada hasta 10 dígitos significativos',
        'Los valores extremadamente grandes o pequeños pueden mostrar notación científica',
        'Las conversiones se realizan utilizando el Sistema Internacional de Unidades (SI) como referencia'
      ]
    },
    knowledge: {
      title: '¿Sabías que...?',
      items: [
        'El año luz no es una medida de tiempo, sino de distancia. Es la distancia que recorre la luz en un año.',
        'La unidad astronómica (AU) se basa en la distancia media entre la Tierra y el Sol.',
        'El metro se definió originalmente como una diezmillonésima parte de la distancia entre el polo norte y el ecuador.',
        'Actualmente, el metro se define en función de la velocidad de la luz en el vacío.'
      ]
    }
  }
}

export default translation 