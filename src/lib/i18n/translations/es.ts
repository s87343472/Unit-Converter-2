import type { Translation } from '../types'

const es: Translation = {
  common: {
    title: 'Conversor de unidades',
    description: 'Una potente herramienta en línea para convertir diferentes unidades.',
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
    conversionHistory: 'Historial de conversiones',
    clearHistory: 'Limpiar historial',
    confirmClear: '¿Está seguro de que desea borrar todo el historial?',
    delete: 'Eliminar',
    selectType: 'Seleccionar tipo de conversión',
    selectLanguage: 'Seleccionar idioma',
    pageNotFound: 'Página no encontrada',
    pageNotFoundDesc: 'Lo sentimos, la página que busca no existe.',
    backToHome: 'Volver al inicio',
    copyright: 'Todos los derechos reservados.',
    categories: {
      basic: 'Unidades básicas',
      area_volume: 'Área y volumen',
      time_related: 'Tiempo',
      physics: 'Unidades físicas',
      data: 'Unidades de datos',
      others: 'Otras unidades'
    },
    instructions: {
      title: 'Instrucciones',
      steps: {
        input: 'Ingrese el valor que desea convertir',
        select: 'Seleccione la unidad del valor de entrada',
        auto: 'El sistema calculará y mostrará automáticamente los valores correspondientes en otras unidades',
        copy: 'Haga clic en cualquier resultado para copiar rápidamente el valor con su unidad'
      },
      features: {
        title: 'Características',
        range: {
          title: 'Rango de valores admitido',
          description: 'Admite hasta 20 dígitos (incluyendo punto decimal) con hasta 10 decimales. Para números muy grandes o pequeños, se utiliza automáticamente la notación científica.'
        },
        copy: {
          title: 'Función de copia',
          description: 'Haga clic en cualquier resultado de conversión para copiar el valor y la unidad para un fácil pegado.'
        },
        paste: {
          title: 'Función de pegado',
          description: 'Admite pegar valores con unidades, el sistema extraerá automáticamente la parte numérica.'
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
    clearConfirmTitle: 'Eliminar todos los favoritos',
    clearConfirmMessage: '¿Está seguro de que desea eliminar todos los favoritos? Esta acción no se puede deshacer.',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    addFavorite: 'Agregar a favoritos',
    removeFavorite: 'Quitar de favoritos',
    enterFavoriteName: 'Ingrese un nombre para este favorito',
    favoriteNamePlaceholder: 'ej: Metros a Pies',
    showFavorites: 'Mostrar favoritos',
    hideFavorites: 'Ocultar favoritos',
    from: 'De',
    to: 'A',
    selectUnit: 'Seleccionar unidad',
    inputValue: 'Valor de entrada',
    convertResult: 'Resultado',
    searchUnit: 'Buscar unidades...',
    length: 'Longitud'
  },
  units: {
    length: {
      title: 'Longitud',
      description: 'Conversión entre diferentes unidades de longitud (ISO 31-1)',
      units: {
        meter: 'Metro',
        kilometer: 'Kilómetro',
        centimeter: 'Centímetro',
        millimeter: 'Milímetro',
        inch: 'Pulgada',
        foot: 'Pie',
        yard: 'Yarda',
        mile: 'Milla',
        light_year: 'Año luz',
        astronomical_unit: 'Unidad astronómica',
        decimeter: 'Decímetro',
        micrometer: 'Micrómetro',
        nanometer: 'Nanómetro',
        picometer: 'Picómetro'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'El año luz no es una unidad de tiempo, sino la distancia que recorre la luz en un año.',
          'La Unidad Astronómica (UA) se basa en la distancia promedio entre la Tierra y el Sol.',
          'El metro se definió originalmente como una diezmillonésima parte de la distancia entre el Polo Norte y el Ecuador.',
          'Hoy en día, el metro se define por la velocidad de la luz en el vacío.'
        ]
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
      description: 'Conversión entre diferentes unidades de densidad (ISO 31-3)',
      units: {
        kilogram_per_cubic_meter: 'Kilogramo por metro cúbico',
        gram_per_cubic_centimeter: 'Gramo por centímetro cúbico',
        pound_per_cubic_foot: 'Libra por pie cúbico',
        pound_per_cubic_inch: 'Libra por pulgada cúbica',
        kilogram_per_liter: 'Kilogramo por litro',
        gram_per_milliliter: 'Gramo por mililitro',
        pound_per_gallon: 'Libra por galón',
        ounce_per_cubic_inch: 'Onza por pulgada cúbica'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'El agua tiene una densidad de aproximadamente 1 gramo por centímetro cúbico a temperatura ambiente.',
          'El mercurio es el líquido más denso a temperatura ambiente, con una densidad de 13,5 g/cm³.',
          'La densidad del aire al nivel del mar es aproximadamente 1,225 kg/m³.',
          'La densidad cambia con la temperatura y la presión.'
        ]
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
      description: 'Conversión entre diferentes unidades de frecuencia',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Megahertz',
        gigahertz: 'Gigahertz',
        cycles_per_second: 'Ciclos por segundo',
        rpm: 'Revoluciones por minuto',
        bpm: 'Latidos por minuto'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'La unidad Hertz fue nombrada en honor al físico alemán Heinrich Hertz.',
          'El oído humano puede percibir frecuencias entre 20 Hz y 20 kHz.',
          'Los procesadores modernos funcionan en el rango de gigahertz.',
          'El corazón humano late normalmente entre 60 y 100 BPM.'
        ]
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
    error: 'Se produjo un error',
    invalidNumber: 'Por favor, ingrese un número válido',
    selectUnit: 'Por favor, seleccione ambas unidades',
    conversionError: 'Error al convertir valores',
    invalidTemperature: 'La temperatura no puede ser inferior al cero absoluto'
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

export default es 