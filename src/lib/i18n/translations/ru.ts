import type { Translation } from '../types';

const ru: Translation = {
  common: {
    title: 'Конвертер единиц',
    description: 'Мощный онлайн-инструмент для конвертации единиц.',
    loading: 'Загрузка...',
    error: 'Ошибка',
    copy: 'Копировать',
    copied: 'Скопировано',
    settings: 'Настройки',
    language: 'Язык',
    theme: 'Тема',
    about: 'О нас',
    contact: 'Контакт',
    home: 'Главная',
    selectType: 'Выберите тип конверсии',
    selectLanguage: 'Выберите язык',
    pageNotFound: 'Страница не найдена',
    pageNotFoundDesc: 'Извините, страница, которую вы посетили, не существует.',
    backToHome: 'Вернуться на главную',
    copyright: 'Авторские права',
    enterValue: 'Введите значение',
    categories: {
      basic: 'Основные единицы',
      area_volume: 'Площадь и объем',
      time_related: 'Время',
      physics: 'Физические единицы',
      data: 'Единицы данных',
      others: 'Другие единицы'
    },
    instructions: {
      title: 'Инструкции',
      steps: {
        input: 'Введите значение, которое вы хотите конвертировать',
        select: 'Выберите единицу входного значения',
        auto: 'Система автоматически рассчитает и отобразит соответствующие значения в других единицах',
        copy: 'Нажмите на любой результат, чтобы быстро скопировать значение с его единицей'
      },
      features: {
        title: 'Функции',
        range: {
          title: 'Поддерживаемый диапазон значений',
          description: 'Поддерживает до 20 цифр (включая десятичную точку) с до 10 десятичными знаками. Для очень больших или очень маленьких чисел автоматически используется научная нотация.'
        },
        copy: {
          title: 'Функция копирования',
          description: 'Нажмите на любой результат конверсии, чтобы скопировать значение и единицу для легкой вставки.'
        },
        paste: {
          title: 'Функция вставки',
          description: 'Поддерживает вставку значений с единицами, система автоматически извлекает числовую часть.'
        }
      }
    },
    customOrder: 'Пользовательский порядок',
    byName: 'По имени',
    byCreatedTime: 'По дате создания',
    byLastUsed: 'По последнему использованию',

    clearAll: 'Очистить все',
    noFavorites: 'Пока нет избранного',
    remove: 'Удалить',
    clearConfirmTitle: 'Очистить все избранное',
    clearConfirmMessage: 'Вы уверены, что хотите удалить все избранное? Это действие не может быть отменено.',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    addFavorite: 'Добавить в избранное',
    removeFavorite: 'Удалить из избранного',
    enterFavoriteName: 'Введите имя для этого избранного',
    favoriteNamePlaceholder: 'например, Метры в Футы',
    showFavorites: 'Показать избранное',
    hideFavorites: 'Скрыть избранное',
    from: 'От',
    to: 'До',
    selectUnit: 'Выберите единицу',
    inputValue: 'Входное значение',
    convertResult: 'Результат',
    searchUnit: 'Поиск единиц...',
    length: 'Длина',
    conversionHistory: 'История конверсий',
    clearHistory: 'Очистить историю',
    confirmClear: 'Вы уверены, что хотите очистить всю историю?',
    delete: 'Удалить'
  },
  units: {
    length: {
      title: 'Длина',
      description: 'Конвертировать между различными единицами длины',
      units: {
        metric_meter: 'Метр',
        metric_kilometer: 'Километр',
        metric_centimeter: 'Сантиметр',
        metric_millimeter: 'Миллиметр',
        imperial_inch: 'Дюйм',
        imperial_foot: 'Фут',
        imperial_yard: 'Ярд',
        imperial_mile: 'Миля',
        astronomical_light_year: 'Световой год',
        astronomical_unit: 'Астрономическая единица',
        metric_decimeter: 'Дециметр',
        metric_micrometer: 'Микрометр',
        metric_nanometer: 'Нанометр',
        metric_picometer: 'Пикометр',
        nautical_mile: 'Морская миля',
        nautical_fathom: 'Фатом'
      },
      knowledge: {
        title: 'Знаете ли вы?',
        items: [
          'Световой год - это не единица времени, а единица расстояния, которое свет проходит за один год.',
          'Астрономическая единица (АЕ) основана на среднем расстоянии от Земли до Солнца.',
          'Метр изначально был определен как одна десятимиллионная часть расстояния от Северного полюса до экватора.',
          'Сегодня метр определяется через скорость света в вакууме.'
        ]
      }
    },
    area: {
      title: 'Площадь',
      description: 'Конвертировать между различными единицами площади',
      units: {
        metric_square_meter: 'Квадратный метр',
        metric_square_kilometer: 'Квадратный километр',
        metric_square_centimeter: 'Квадратный сантиметр',
        metric_square_millimeter: 'Квадратный миллиметр',
        imperial_square_inch: 'Квадратный дюйм',
        imperial_square_foot: 'Квадратный фут',
        imperial_square_yard: 'Квадратный ярд',
        imperial_square_mile: 'Квадратная миля',
        metric_hectare: 'Гектар',
        imperial_acre: 'Акр',
        metric_square_decimeter: 'Квадратный дециметр',
        metric_are: 'Ар',
        traditional_mu: 'Му (Китайская)',
        traditional_qing: 'Цин (Китайская)'
      },
      knowledge: {
        title: 'Знаете ли вы?',
        items: [
          'Гектар был создан для упрощения измерений земельных участков, где 1 гектар равен 10 000 квадратных метров.',
          'Акр происходит из Средневековья и был определен как площадь, которую пара быков могла вспахать за один день.',
          'Китайский Му происходит из периода Шан-Чжоу, где 1 Му равен примерно 666,67 квадратных метров.',
          'Квадратная миля - это самая большая имперская единица площади и равна 640 акрам.'
        ]
      }
    },
    volume: {
      title: 'Объем',
      description: 'Конвертировать между различными единицами объема',
      units: {
        metric_cubic_meter: 'Кубический метр',
        metric_liter: 'Литр',
        metric_milliliter: 'Миллилитр',
        imperial_gallon: 'Галлон',
        imperial_quart: 'Кварта',
        imperial_pint: 'Пинта',
        imperial_fluid_ounce: 'Жидкая унция',
        imperial_cubic_inch: 'Кубический дюйм',
        imperial_cubic_foot: 'Кубический фут'
      }
    },
    weight: {
      title: 'Вес',
      description: 'Конвертировать между различными единицами веса',
      units: {
        metric_kilogram: 'Килограмм',
        metric_gram: 'Грамм',
        metric_milligram: 'Миллиграмм',
        imperial_pound: 'Фунт',
        imperial_ounce: 'Унция'
      }
    },
    time: {
      title: 'Время',
      description: 'Конвертировать между различными единицами времени',
      units: {
        second: 'Секунда',
        minute: 'Минута',
        hour: 'Час',
        day: 'День',
        week: 'Неделя',
        month: 'Месяц',
        year: 'Год'
      }
    },
    temperature: {
      title: 'Температура',
      description: 'Конвертировать между различными единицами температуры',
      units: {
        celsius: 'Цельсий',
        fahrenheit: 'Фаренгейт',
        kelvin: 'Кельвин'
      }
    },
    speed: {
      title: 'Скорость',
      description: 'Конвертировать между различными единицами скорости',
      units: {
        meter_per_second: 'Метр в секунду',
        kilometer_per_hour: 'Километр в час',
        mile_per_hour: 'Миля в час'
      }
    },
    angle: {
      title: 'Угол',
      description: 'Конвертировать между различными единицами угла',
      units: {
        degree: 'Градус',
        radian: 'Радиан'
      }
    },
    pressure: {
      title: 'Давление',
      description: 'Конвертировать между различными единицами давления',
      units: {
        pascal: 'Паскаль',
        bar: 'Бар',
        psi: 'Фунт на квадратный дюйм'
      }
    },
    power: {
      title: 'Мощность',
      description: 'Конвертировать между различными единицами мощности',
      units: {
        watt: 'Ватт',
        kilowatt: 'Киловатт',
        horsepower: 'Лошадиная сила'
      }
    },
    energy: {
      title: 'Энергия',
      description: 'Конвертировать между различными единицами энергии',
      units: {
        joule: 'Джоуль',
        kilojoule: 'Килоджоуль',
        calorie: 'Калория',
        kilocalorie: 'Килокалория'
      }
    },
    force: {
      title: 'Сила',
      description: 'Конвертировать между различными единицами силы',
      units: {
        newton: 'Ньютон',
        kilonewton: 'Килоньютон'
      }
    },
    density: {
      title: 'Плотность',
      description: 'Конвертировать между различными единицами плотности',
      units: {
        kilogram_per_cubic_meter: 'Килограмм на кубический метр',
        gram_per_cubic_centimeter: 'Грамм на кубический сантиметр'
      }
    },
    flow: {
      title: 'Поток',
      description: 'Конвертировать между различными единицами потока',
      units: {
        cubic_meter_per_second: 'Кубический метр в секунду',
        liter_per_minute: 'Литр в минуту'
      }
    },
    torque: {
      title: 'Крутящий момент',
      description: 'Конвертировать между различными единицами крутящего момента',
      units: {
        newton_meter: 'Ньютон-метр',
        pound_foot: 'Фунт-фут'
      }
    },
    data: {
      title: 'Данные',
      description: 'Конвертировать между различными единицами данных',
      units: {
        byte: 'Байт',
        kilobyte: 'Килобайт',
        megabyte: 'Мегабайт',
        gigabyte: 'Гигабайт'
      }
    },
    data_rate: {
      title: 'Скорость передачи данных',
      description: 'Конвертировать между различными скоростями передачи данных',
      units: {
        bit_per_second: 'Бит в секунду',
        kilobit_per_second: 'Килобит в секунду',
        megabit_per_second: 'Мегабит в секунду'
      }
    },
    currency: {
      title: 'Валюта',
      description: 'Конвертировать между различными валютами',
      units: {
        usd: 'Доллар США',
        eur: 'Евро',
        gbp: 'Британский фунт',
        jpy: 'Японская иена'
      }
    },
    cooking: {
      title: 'Кулинария',
      description: 'Конвертировать между различными кулинарными единицами',
      units: {
        teaspoon: 'Чайная ложка',
        tablespoon: 'Столовая ложка',
        cup: 'Чашка'
      }
    },
    numeral: {
      title: 'Числовая система',
      description: 'Конвертировать между различными числовыми системами',
      units: {
        decimal: 'Десятичная',
        binary: 'Двоичная',
        octal: 'Восьмеричная',
        hexadecimal: 'Шестнадцатеричная'
      }
    },
    frequency: {
      title: 'Частота',
      description: 'Конвертировать между различными единицами частоты',
      units: {
        hertz: 'Герц',
        kilohertz: 'Килогерц',
        megahertz: 'Мегагерц'
      }
    }
  },
  buttons: {
    convert: 'Конвертировать',
    clear: 'Очистить',
    swap: 'Поменять местами',
    copy: 'Копировать'
  },
  messages: {
    copied: 'Скопировано!',
    error: 'Произошла ошибка',
    invalidNumber: 'Пожалуйста, введите действительное число',
    selectUnit: 'Пожалуйста, выберите единицу',
    conversionError: 'Ошибка конверсии',
    invalidTemperature: 'Недопустимое значение температуры'
  },
  converter: {
    title: 'Конвертер единиц',
    description: 'Онлайн-инструмент для конвертации единиц',
    from: 'От',
    to: 'До',
    value: 'Значение',
    result: 'Результат',
    instructions: {
      title: 'Инструкции',
      steps: [
        'Введите значение, которое вы хотите конвертировать',
        'Выберите единицу входного значения',
        'Система автоматически рассчитает и отобразит соответствующие значения',
        'Нажмите на любой результат, чтобы быстро скопировать значение'
      ]
    },
    limitations: {
      title: 'Ограничения',
      items: [
        'Поддерживает до 20 цифр (включая десятичную точку)',
        'До 10 десятичных знаков',
        'Очень большие или маленькие числа будут отображаться в научной нотации'
      ]
    }
  },
  errors: {
    invalidInput: 'Недопустимый ввод',
    invalidFormat: 'Недопустимый формат',
    conversionFailed: 'Конвертация не удалась',
    copyFailed: 'Копирование не удалось'
  },
  footer: {
    about: 'О нас',
    description: 'Мощный онлайн-инструмент для конвертации единиц.',
    contact: 'Контакт',
    email: 'support@metric-converter.com',
    legal: 'Правовая информация',
    changelog: 'Журнал изменений'
  }
};

export default ru; 