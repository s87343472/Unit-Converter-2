import type { Translation } from '../types';

const es: Translation = {
  common: {
    title: 'Convertidor de Unidades',
    description: 'Una herramienta poderosa de conversión de unidades en línea.',
    loading: 'Cargando...',
    error: 'Error',
    copy: 'Copiar',
    copied: 'Copiado',
    settings: 'Configuraciones',
    language: 'Idioma',
    theme: 'Tema',
    about: 'Acerca de',
    contact: 'Contacto',
    home: 'Inicio',
    selectType: 'Seleccionar tipo de conversión',
    selectLanguage: 'Seleccionar idioma',
    pageNotFound: 'Página no encontrada',
    pageNotFoundDesc: 'Lo sentimos, la página que visitó no existe.',
    backToHome: 'Volver al inicio',
    copyright: 'Derechos de autor',
    enterValue: 'Ingresar valor',
    categories: {
      basic: 'Unidades básicas',
      area_volume: 'Área & Volumen',
      time_related: 'Relacionado con el tiempo',
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
          title: 'Rango de valores admitidos',
          description: 'Admite hasta 20 dígitos (incluido el punto decimal) con hasta 10 decimales. Para números muy grandes o muy pequeños, se utilizará automáticamente la notación científica.'
        },
        copy: {
          title: 'Función de copia',
          description: 'Haga clic en cualquier resultado de conversión para copiar el valor y la unidad para pegar fácilmente.'
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

    clearAll: 'Borrar todo',
    noFavorites: 'Aún no hay favoritos',
    remove: 'Eliminar',
    clearConfirmTitle: 'Borrar todos los favoritos',
    clearConfirmMessage: '¿Está seguro de que desea borrar todos los favoritos? Esta acción no se puede deshacer.',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    addFavorite: 'Agregar a favoritos',
    removeFavorite: 'Eliminar de favoritos',
    enterFavoriteName: 'Ingrese un nombre para este favorito',
    favoriteNamePlaceholder: 'ej. Metros a Pies',
    showFavorites: 'Mostrar favoritos',
    hideFavorites: 'Ocultar favoritos',
    from: 'De',
    to: 'A',
    selectUnit: 'Seleccionar unidad',
    inputValue: 'Valor de entrada',
    convertResult: 'Resultado',
    searchUnit: 'Buscar unidades...',
    length: 'Longitud',
    conversionHistory: 'Historial de conversiones',
    clearHistory: 'Borrar historial',
    confirmClear: '¿Está seguro de que desea borrar todo el historial?',
    delete: 'Eliminar'
  },
  units: {
    length: {
      title: 'Longitud',
      description: 'Convertir entre diferentes unidades de longitud',
      units: {
        metric_meter: 'Metro',
        metric_kilometer: 'Kilómetro',
        metric_centimeter: 'Centímetro',
        metric_millimeter: 'Milímetro',
        imperial_inch: 'Pulgada',
        imperial_foot: 'Pie',
        imperial_yard: 'Yarda',
        imperial_mile: 'Milla',
        astronomical_light_year: 'Año luz',
        astronomical_unit: 'Unidad astronómica',
        metric_decimeter: 'Decímetro',
        metric_micrometer: 'Micrómetro',
        metric_nanometer: 'Nanómetro',
        metric_picometer: 'Picómetro',
        nautical_mile: 'Milla náutica',
        nautical_fathom: 'Braza'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un año luz no es una unidad de tiempo, sino una unidad de distancia que la luz recorre en un año.',
          'La Unidad Astronómica (UA) se basa en la distancia promedio de la Tierra al Sol.',
          'El metro fue definido originalmente como una diez millonésima parte de la distancia del Polo Norte al Ecuador.',
          'Hoy en día, el metro se define por la velocidad de la luz en el vacío.'
        ]
      }
    },
    area: {
      title: 'Área',
      description: 'Convertir entre diferentes unidades de área',
      units: {
        metric_square_meter: 'Metro cuadrado',
        metric_square_kilometer: 'Kilómetro cuadrado',
        metric_square_centimeter: 'Centímetro cuadrado',
        metric_square_millimeter: 'Milímetro cuadrado',
        imperial_square_inch: 'Pulgada cuadrada',
        imperial_square_foot: 'Pie cuadrado',
        imperial_square_yard: 'Yarda cuadrada',
        imperial_square_mile: 'Milla cuadrada',
        metric_hectare: 'Hectárea',
        imperial_acre: 'Acre',
        metric_square_decimeter: 'Decímetro cuadrado',
        metric_are: 'Área',
        traditional_mu: 'Mu (Chino)',
        traditional_qing: 'Qing (Chino)'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'La hectárea se creó para simplificar las mediciones de áreas de tierra, donde 1 hectárea equivale a 10,000 metros cuadrados.',
          'El acre proviene de la Edad Media y se definió como el área que un par de bueyes podía arar en un día.',
          'El Mu chino proviene del período Shang-Zhou, donde 1 Mu equivale a aproximadamente 666.67 metros cuadrados.',
          'Una milla cuadrada es la unidad de área imperial más grande y equivale a 640 acres.'
        ]
      }
    },
    volume: {
      title: 'Volumen',
      description: 'Convertir entre diferentes unidades de volumen',
      units: {
        metric_cubic_meter: 'Metro cúbico',
        metric_liter: 'Litro',
        metric_milliliter: 'Mililitro',
        imperial_gallon: 'Galón',
        imperial_quart: 'Cuarto',
        imperial_pint: 'Pinta',
        imperial_fluid_ounce: 'Onza líquida',
        imperial_cubic_inch: 'Pulgada cúbica',
        imperial_cubic_foot: 'Pie cúbico'
      }
    },
    weight: {
      title: 'Peso',
      description: 'Convertir entre diferentes unidades de peso',
      units: {
        metric_kilogram: 'Kilogramo',
        metric_gram: 'Gramo',
        metric_milligram: 'Miligramo',
        imperial_pound: 'Libra',
        imperial_ounce: 'Onza'
      }
    },
    time: {
      title: 'Tiempo',
      description: 'Convertir entre diferentes unidades de tiempo',
      units: {
        second: 'Segundo',
        minute: 'Minuto',
        hour: 'Hora',
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año'
      }
    },
    temperature: {
      title: 'Temperatura',
      description: 'Convertir entre diferentes unidades de temperatura',
      units: {
        celsius: 'Celsius',
        fahrenheit: 'Fahrenheit',
        kelvin: 'Kelvin'
      }
    },
    speed: {
      title: 'Velocidad',
      description: 'Convertir entre diferentes unidades de velocidad',
      units: {
        meter_per_second: 'Metro por segundo',
        kilometer_per_hour: 'Kilómetro por hora',
        mile_per_hour: 'Milla por hora',
        knot: 'Nudo'
      }
    },
    angle: {
      title: 'Ángulo',
      description: 'Convertir entre diferentes unidades de ángulo',
      units: {
        degree: 'Grado',
        radian: 'Radián'
      }
    },
    pressure: {
      title: 'Presión',
      description: 'Convertir entre diferentes unidades de presión',
      units: {
        pascal: 'Pascal',
        bar: 'Bar',
        psi: 'Libra por pulgada cuadrada'
      }
    },
    power: {
      title: 'Potencia',
      description: 'Convertir entre diferentes unidades de potencia',
      units: {
        watt: 'Vatio',
        kilowatt: 'Kilovatio',
        horsepower: 'Caballo de fuerza'
      }
    },
    energy: {
      title: 'Energía',
      description: 'Convertir entre diferentes unidades de energía',
      units: {
        joule: 'Julio',
        kilojoule: 'Kilojulio',
        calorie: 'Caloría',
        kilocalorie: 'Kilocaloría'
      }
    },
    force: {
      title: 'Fuerza',
      description: 'Convertir entre diferentes unidades de fuerza',
      units: {
        newton: 'Newton',
        kilonewton: 'Kilonewton'
      }
    },
    density: {
      title: 'Densidad',
      description: 'Convertir entre diferentes unidades de densidad',
      units: {
        kilogram_per_cubic_meter: 'Kilogramo por metro cúbico',
        gram_per_cubic_centimeter: 'Gramo por centímetro cúbico'
      }
    },
    flow: {
      title: 'Flujo',
      description: 'Convertir entre diferentes unidades de flujo',
      units: {
        cubic_meter_per_second: 'Metro cúbico por segundo',
        liter_per_minute: 'Litro por minuto'
      }
    },
    torque: {
      title: 'Torque',
      description: 'Convertir entre diferentes unidades de torque',
      units: {
        newton_meter: 'Newton metro',
        pound_foot: 'Libra pie'
      }
    },
    data: {
      title: 'Datos',
      description: 'Convertir entre diferentes unidades de datos',
      units: {
        byte: 'Byte',
        kilobyte: 'Kilobyte',
        megabyte: 'Megabyte',
        gigabyte: 'Gigabyte'
      }
    },
    data_rate: {
      title: 'Tasa de datos',
      description: 'Convertir entre diferentes tasas de datos',
      units: {
        bit_per_second: 'Bit por segundo',
        kilobit_per_second: 'Kilobit por segundo',
        megabit_per_second: 'Megabit por segundo'
      }
    },
    currency: {
      title: 'Moneda',
      description: 'Convertir entre diferentes unidades de moneda',
      units: {
        usd: 'Dólar estadounidense',
        eur: 'Euro',
        gbp: 'Libra esterlina',
        jpy: 'Yen japonés'
      }
    },
    cooking: {
      title: 'Cocina',
      description: 'Convertir entre diferentes unidades de cocina',
      units: {
        teaspoon: 'Cucharadita',
        tablespoon: 'Cucharada',
        cup: 'Taza'
      }
    },
    numeral: {
      title: 'Sistema numérico',
      description: 'Convertir entre diferentes sistemas numéricos',
      units: {
        decimal: 'Decimal',
        binary: 'Binario',
        octal: 'Octal',
        hexadecimal: 'Hexadecimal'
      }
    },
    frequency: {
      title: 'Frecuencia',
      description: 'Convertir entre diferentes unidades de frecuencia',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Megahertz'
      }
    }
  },
  buttons: {
    convert: 'Convertir',
    clear: 'Borrar',
    swap: 'Intercambiar',
    copy: 'Copiar'
  },
  messages: {
    copied: '¡Copiado!',
    error: 'Ocurrió un error',
    invalidNumber: 'Por favor, ingrese un número válido',
    selectUnit: 'Por favor, seleccione una unidad',
    conversionError: 'Error de conversión',
    invalidTemperature: 'Valor de temperatura inválido'
  },
  converter: {
    title: 'Convertidor de Unidades',
    description: 'Herramienta de conversión de unidades en línea',
    from: 'De',
    to: 'A',
    value: 'Valor',
    result: 'Resultado',
    instructions: {
      title: 'Instrucciones',
      steps: [
        'Ingrese el valor que desea convertir',
        'Seleccione la unidad del valor de entrada',
        'El sistema calculará y mostrará automáticamente los valores correspondientes',
        'Haga clic en cualquier resultado para copiar rápidamente el valor'
      ]
    },
    limitations: {
      title: 'Limitaciones',
      items: [
        'Admite hasta 20 dígitos (incluido el punto decimal)',
        'Hasta 10 decimales',
        'Los números muy grandes o muy pequeños se mostrarán en notación científica'
      ]
    }
  },
  errors: {
    invalidInput: 'Entrada inválida',
    invalidFormat: 'Formato inválido',
    conversionFailed: 'Conversión fallida',
    copyFailed: 'Copia fallida'
  },
  footer: {
    about: 'Acerca de',
    description: 'Una herramienta poderosa de conversión de unidades en línea.',
    contact: 'Contacto',
    email: 'support@metric-converter.com',
    legal: 'Legal',
    changelog: 'Registro de cambios'
  }
};

export default es; 