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
        astronomical_light_year: 'Año Luz',
        astronomical_unit: 'Unidad Astronómica',
        metric_decimeter: 'Decímetro',
        metric_micrometer: 'Micrómetro',
        metric_nanometer: 'Nanómetro',
        metric_picometer: 'Picómetro',
        nautical_mile: 'Milla Náutica',
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
        metric_square_meter: 'Metro Cuadrado',
        metric_square_kilometer: 'Kilómetro Cuadrado',
        metric_square_centimeter: 'Centímetro Cuadrado',
        metric_square_millimeter: 'Milímetro Cuadrado',
        imperial_square_inch: 'Pulgada Cuadrada',
        imperial_square_foot: 'Pie Cuadrado',
        imperial_square_yard: 'Yarda Cuadrada',
        imperial_square_mile: 'Milla Cuadrada',
        metric_hectare: 'Hectárea',
        imperial_acre: 'Acre',
        metric_square_decimeter: 'Decímetro Cuadrado',
        metric_are: 'Are',
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
        metric_cubic_meter: 'Metro Cúbico',
        metric_cubic_kilometer: 'Kilómetro Cúbico',
        metric_cubic_centimeter: 'Centímetro Cúbico',
        metric_cubic_millimeter: 'Milímetro Cúbico',
        metric_cubic_decimeter: 'Decímetro Cúbico',
        metric_liter: 'Litro',
        metric_milliliter: 'Mililitro',
        imperial_gallon: 'Galón Imperial',
        imperial_quart: 'Cuarto Imperial',
        imperial_pint: 'Pinta Imperial',
        us_cup: 'Taza US',
        imperial_fluid_ounce: 'Onza Líquida Imperial',
        us_tablespoon: 'Cucharada US',
        us_teaspoon: 'Cucharadita US',
        imperial_cubic_yard: 'Yarda Cúbica',
        imperial_cubic_foot: 'Pie Cúbico',
        imperial_cubic_inch: 'Pulgada Cúbica',
        chinese_dan: 'Dan (Chino)',
        chinese_dou: 'Dou (Chino)',
        chinese_sheng: 'Sheng (Chino)',
        japanese_koku: 'Koku (Japonés)',
        japanese_to: 'To (Japonés)',
        japanese_sho: 'Sho (Japonés)',
        japanese_go: 'Go (Japonés)',
        industrial_oil_barrel: 'Barril de Petróleo',
        industrial_beer_barrel: 'Barril de Cerveza'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un galón imperial equivale a aproximadamente 4.546 litros.',
          'El metro cúbico es una unidad de volumen utilizada principalmente en industrias como la construcción y la ingeniería.',
          'La onza líquida estadounidense es diferente a la británica en términos de volumen.'
        ]
      }
    },
    weight: {
      title: 'Peso',
      description: 'Convertir entre diferentes unidades de peso',
      units: {
        metric_kilogram: 'Kilogramo',
        metric_tonne: 'Tonelada',
        metric_gram: 'Gramo',
        metric_milligram: 'Miligramo',
        metric_microgram: 'Microgramo',
        imperial_pound: 'Libra',
        imperial_ounce: 'Onza',
        imperial_stone: 'Stone',
        imperial_long_ton: 'Tonelada Larga',
        us_short_ton: 'Tonelada Corta',
        jewelry_carat: 'Quilate',
        jewelry_grain: 'Grano',
        traditional_jin: 'Jin (Chino)',
        traditional_liang: 'Liang (Chino)',
        traditional_qian: 'Qian (Chino)',
        medical_grain: 'Grano Médico',
        medical_dram: 'Dracma Médico',
        medical_ounce: 'Onza Médica'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'La libra avoirdupois es la unidad de peso más comúnmente utilizada en los Estados Unidos.',
          'Un kilogramo es igual a 2.20462 libras.',
          'El miligramo es una unidad de peso utilizada principalmente para medir sustancias muy ligeras.'
        ]
      }
    },
    temperature: {
      title: 'Temperatura',
      description: 'Convertir entre diferentes escalas de temperatura',
      units: {
        scientific_kelvin: 'Kelvin (Científico)',
        metric_celsius: 'Celsius (Métrico)',
        us_fahrenheit: 'Fahrenheit (US)',
        scientific_rankine: 'Rankine (Científico)',
        historical_reaumur: 'Réaumur (Histórico)',
        meteorological_celsius: 'Celsius (Meteorológico)',
        meteorological_fahrenheit: 'Fahrenheit (Meteorológico)',
        industrial_celsius: 'Celsius (Industrial)',
        industrial_fahrenheit: 'Fahrenheit (Industrial)'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'La escala Kelvin es la unidad de temperatura en el Sistema Internacional de Unidades y comienza en el cero absoluto.',
          'Fahrenheit se utiliza principalmente en los Estados Unidos, mientras que Celsius es más común en el resto del mundo.',
          'La conversión de Celsius a Fahrenheit es (°C * 9/5) + 32.'
        ]
      }
    },
    time: {
      title: 'Tiempo',
      description: 'Convertir entre diferentes unidades de tiempo',
      units: {
        metric_second: 'Segundo',
        metric_minute: 'Minuto',
        metric_hour: 'Hora',
        metric_day: 'Día',
        metric_week: 'Semana',
        metric_month: 'Mes',
        metric_year: 'Año',
        metric_decade: 'Década',
        metric_century: 'Siglo',
        scientific_millisecond: 'Milisegundo',
        scientific_microsecond: 'Microsegundo',
        scientific_nanosecond: 'Nanosegundo'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un año no siempre tiene exactamente 365 días debido a los años bisiestos.',
          'El segundo se define como la duración de 9,192,631,770 periodos de la radiación correspondiente a la transición entre dos niveles hiperfinos del estado fundamental del átomo de cesio-133.',
          'Antes del Calendario Gregoriano, diferentes culturas tenían diferentes divisiones y nombres para las unidades de tiempo.'
        ]
      }
    },
    speed: {
      title: 'Velocidad',
      description: 'Convertir entre diferentes unidades de velocidad',
      units: {
        meter_per_second: 'Metros por Segundo',
        kilometer_per_hour: 'Kilómetros por Hora',
        mile_per_hour: 'Millas por Hora',
        foot_per_second: 'Pies por Segundo',
        knot: 'Nudos',
        mach: 'Mach',
        kilometer_per_second: 'Kilómetros por Segundo',
        light_speed: 'Velocidad de la Luz'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un nudo equivale a una milla náutica por hora.',
          'La velocidad de la luz es aproximadamente 299,792 kilómetros por segundo.',
          'Kilómetros por hora es la unidad de velocidad más utilizada en la mayoría de los países para medir la velocidad de los vehículos.'
        ]
      }
    },
    angle: {
      title: 'Ángulo',
      description: 'Convertir entre diferentes unidades de ángulo',
      units: {
        degree: 'Grado',
        radian: 'Radián',
        gradian: 'Gradián',
        arcminute: 'Minuto de Arco',
        arcsecond: 'Segundo de Arco'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un círculo completo tiene 360 grados.',
          'El radián es la unidad de ángulo en el sistema internacional y es la relación entre el largo del arco y el radio de un círculo.',
          'Existen otras unidades de ángulo como el gon y el minuto de arco, utilizadas en diferentes contextos.'
        ]
      }
    },
    pressure: {
      title: 'Presión',
      description: 'Convertir entre diferentes unidades de presión',
      units: {
        pascal: 'Pascal',
        kilopascal: 'Kilopascal',
        bar: 'Bar',
        psi: 'PSI',
        atmosphere: 'Atmósfera'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un pascal es igual a una newton por metro cuadrado.',
          'La presión atmosférica estándar al nivel del mar es de aproximadamente 101.325 pascales.',
          'El PSI (libra por pulgada cuadrada) es una unidad de presión comúnmente utilizada en Estados Unidos.'
        ]
      }
    },
    power: {
      title: 'Potencia',
      description: 'Convertir entre diferentes unidades de potencia',
      units: {
        watt: 'Vatio',
        kilowatt: 'Kilovatio',
        horsepower: 'Caballo de Fuerza'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un caballo de fuerza es una unidad de potencia que se originó para medir la potencia de las máquinas de vapor.',
          'El vatio es la unidad de potencia en el Sistema Internacional y equivale a un julio por segundo.',
          'Un kilovatio es igual a 1,000 vatios.'
        ]
      }
    },
    energy: {
      title: 'Energía',
      description: 'Convertir entre diferentes unidades de energía',
      units: {
        joule: 'Julio',
        kilojoule: 'Kilojulio',
        calorie: 'Caloría',
        kilocalorie: 'Kilocaloría',
        watt_hour: 'Vatio Hora',
        kilowatt_hour: 'Kilovatio Hora'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un julio es la cantidad de energía transferida cuando se aplica una fuerza de un newton a través de un metro.',
          'La caloría es una unidad de energía utilizada principalmente para medir el contenido energético de los alimentos.',
          'Un kilojulio es igual a 1,000 julios.'
        ]
      }
    },
    force: {
      title: 'Fuerza',
      description: 'Convertir entre diferentes unidades de fuerza',
      units: {
        newton: 'Newton',
        kilonewton: 'Kilonewton',
        dyne: 'Dina',
        pound_force: 'Libra Fuerza'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un newton es la fuerza necesaria para acelerar una masa de un kilogramo a un metro por segundo al cuadrado.',
          'El kilonewton es una unidad de fuerza utilizada principalmente en ingeniería y construcción.',
          'La libra-fuerza es una unidad de fuerza utilizada en el sistema imperial.'
        ]
      }
    },
    density: {
      title: 'Densidad',
      description: 'Convertir entre diferentes unidades de densidad',
      units: {
        kilogram_per_cubic_meter: 'Kilogramo por Metro Cúbico',
        gram_per_cubic_centimeter: 'Gramo por Centímetro Cúbico',
        pound_per_cubic_foot: 'Libra por Pie Cúbico',
        pound_per_cubic_inch: 'Libra por Pulgada Cúbica',
        kilogram_per_liter: 'Kilogramo por Litro',
        gram_per_milliliter: 'Gramo por Mililitro',
        pound_per_gallon: 'Libra por Galón',
        ounce_per_cubic_inch: 'Onza por Pulgada Cúbica'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'La densidad es la masa por unidad de volumen de una sustancia.',
          'El agua tiene una densidad de aproximadamente 1 gramo por centímetro cúbico a 4°C.',
          'La densidad del aire varía con la temperatura y la presión.'
        ]
      }
    },
    flow: {
      title: 'Caudal',
      description: 'Convertir entre diferentes unidades de caudal',
      units: {
        cubic_meter_per_second: 'Metro Cúbico por Segundo',
        liter_per_minute: 'Litro por Minuto',
        gallon_per_minute: 'Galón por Minuto'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'El flujo de volumen mide la cantidad de fluido que pasa por una sección transversal por unidad de tiempo.',
          'El litro por minuto es una unidad comúnmente utilizada para medir el flujo de líquidos en sistemas domésticos.',
          'El metro cúbico por segundo es una unidad de flujo utilizada principalmente en ingeniería hidráulica.'
        ]
      }
    },
    torque: {
      title: 'Par Motor',
      description: 'Convertir entre diferentes unidades de par motor',
      units: {
        newton_meter: 'Newton Metro',
        pound_foot: 'Libra Pie',
        kilogram_force_meter: 'Kilogramo Fuerza Metro'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'El torque es una medida de la fuerza que puede causar que un objeto gire alrededor de un eje.',
          'Un newton metro es la unidad de torque en el Sistema Internacional.',
          'El torque se utiliza ampliamente en la mecánica automotriz para describir la potencia de un motor.'
        ]
      }
    },
    data: {
      title: 'Datos',
      description: 'Convertir entre diferentes unidades de datos digitales',
      units: {
        bit: 'Bit',
        kilobit: 'Kilobit',
        megabit: 'Megabit',
        gigabit: 'Gigabit',
        terabit: 'Terabit',
        petabit: 'Petabit',
        byte: 'Byte',
        kilobyte: 'Kilobyte',
        megabyte: 'Megabyte',
        gigabyte: 'Gigabyte',
        terabyte: 'Terabyte',
        petabyte: 'Petabyte',
        kibibit: 'Kibibit',
        mebibit: 'Mebibit',
        gibibit: 'Gibibit',
        tebibit: 'Tebibit',
        pebibit: 'Pebibit',
        kibibyte: 'Kibibyte',
        mebibyte: 'Mebibyte',
        gibibyte: 'Gibibyte',
        tebibyte: 'Tebibyte',
        pebibyte: 'Pebibyte'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Un byte consta de 8 bits y es la unidad básica de almacenamiento de datos en informática.',
          'Un gigabyte equivale a aproximadamente 1,073,741,824 bytes.',
          'Las unidades de datos como kilobyte, megabyte y gigabyte se utilizan para medir la capacidad de almacenamiento de dispositivos electrónicos.'
        ]
      }
    },
    data_rate: {
      title: 'Velocidad de Datos',
      description: 'Convertir entre diferentes unidades de velocidad de datos',
      units: {
        bits_per_second: 'Bits por Segundo',
        kilobits_per_second: 'Kilobits por Segundo',
        megabits_per_second: 'Megabits por Segundo',
        gigabits_per_second: 'Gigabits por Segundo',
        terabits_per_second: 'Terabits por Segundo',
        bytes_per_second: 'Bytes por Segundo',
        kilobytes_per_second: 'Kilobytes por Segundo',
        megabytes_per_second: 'Megabytes por Segundo',
        gigabytes_per_second: 'Gigabytes por Segundo',
        terabytes_per_second: 'Terabytes por Segundo',
        kibibits_per_second: 'Kibibits por Segundo',
        mebibits_per_second: 'Mebibits por Segundo',
        gibibits_per_second: 'Gibibits por Segundo',
        tebibits_per_second: 'Tebibits por Segundo',
        kibibytes_per_second: 'Kibibytes por Segundo',
        mebibytes_per_second: 'Mebibytes por Segundo',
        gibibytes_per_second: 'Gibibytes por Segundo',
        tebibytes_per_second: 'Tebibytes por Segundo'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'La tasa de bits mide la cantidad de datos transmitidos por segundo en una red.',
          'Un megabit por segundo (Mbps) es comúnmente utilizado para medir velocidades de conexión a Internet.',
          'La tasa de datos es crucial para determinar la capacidad de transferencia de datos en transmisiones digitales.'
        ]
      }
    },
    currency: {
      title: 'Moneda',
      description: 'Convertir entre diferentes monedas',
      units: {
        usd: 'Dólar Estadounidense',
        eur: 'Euro',
        gbp: 'Libra Esterlina',
        jpy: 'Yen Japonés',
        cny: 'Yuan Chino',
        krw: 'Won Surcoreano',
        inr: 'Rupia India'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'El dólar estadounidense es una de las monedas más utilizadas en el comercio internacional.',
          'El euro es la moneda oficial de 19 de los 27 países miembros de la Unión Europea.',
          'La tasa de cambio entre monedas puede fluctuar debido a factores económicos y políticos.'
        ]
      }
    },
    cooking: {
      title: 'Cocina',
      description: 'Convertir entre diferentes medidas de cocina',
      units: {
        us_fluid_ounce: 'Onza Líquida US',
        us_tablespoon: 'Cucharada US',
        us_teaspoon: 'Cucharadita US',
        imperial_fluid_ounce: 'Onza Líquida Imperial',
        imperial_tablespoon: 'Cucharada Imperial',
        imperial_teaspoon: 'Cucharadita Imperial',
        chinese_bowl: 'Tazón Chino',
        chinese_cup: 'Taza China',
        chinese_tablespoon: 'Cucharada China',
        chinese_teaspoon: 'Cucharadita China',
        japanese_cup: 'Taza Japonesa',
        japanese_tablespoon: 'Cucharada Japonesa',
        japanese_teaspoon: 'Cucharadita Japonesa'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'Una cucharadita equivale a aproximadamente 5 mililitros.',
          'En algunas recetas, una taza puede variar en tamaño dependiendo del país (por ejemplo, EEUU vs. Reino Unido).',
          'La conversión precisa de unidades de cocina es esencial para el éxito en la repostería.'
        ]
      }
    },
    numeral: {
      title: 'Sistema Numérico',
      description: 'Convertir entre diferentes sistemas numéricos',
      units: {
        decimal: 'Decimal',
        binary: 'Binario',
        octal: 'Octal',
        hexadecimal: 'Hexadecimal'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'El sistema binario es la base de la computación digital.',
          'El sistema hexadecimal se utiliza frecuentemente en programación para simplificar la representación de bytes.',
          'El sistema octal fue utilizado en sistemas informáticos antiguos antes de ser reemplazado por el hexadecimal.'
        ]
      }
    },
    frequency: {
      title: 'Frecuencia',
      description: 'Convertir entre diferentes unidades de frecuencia',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Megahertz',
        gigahertz: 'Gigahertz'
      },
      knowledge: {
        title: '¿Sabías que?',
        items: [
          'El hertz es la unidad de frecuencia en el Sistema Internacional y equivale a un ciclo por segundo.',
          'Las ondas de radio se miden en kilohertz y megahertz.',
          'La frecuencia es una propiedad fundamental en campos como la acústica y las telecomunicaciones.'
        ]
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