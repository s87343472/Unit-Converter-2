import type { Translation } from '../types'

const en: Translation = {
  common: {
    title: 'Metric Converter',
    description: 'A powerful online unit conversion tool.',
    loading: 'Loading...',
    error: 'Error',
    copy: 'Copy',
    copied: 'Copied',
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    about: 'About',
    contact: 'Contact',
    home: 'Home',
    selectType: 'Select conversion type',
    selectLanguage: 'Select language',
    pageNotFound: 'Page not found',
    pageNotFoundDesc: 'Sorry, the page you visited does not exist.',
    backToHome: 'Back to home',
    copyright: 'Copyright',
    enterValue: 'Enter value',
    categories: {
      basic: 'Basic Units',
      area_volume: 'Area & Volume',
      time_related: 'Time Related',
      physics: 'Physics Units',
      data: 'Data Units',
      others: 'Other Units'
    },
    instructions: {
      title: 'Instructions',
      steps: {
        input: 'Enter the value you want to convert',
        select: 'Select the unit of the input value',
        auto: 'The system will automatically calculate and display the corresponding values in other units',
        copy: 'Click on any result to quickly copy the value with its unit'
      },
      features: {
        title: 'Features',
        range: {
          title: 'Supported Value Range',
          description: 'Supports up to 20 digits (including decimal point) with up to 10 decimal places. For very large or small numbers, scientific notation is automatically used.'
        },
        copy: {
          title: 'Copy Function',
          description: 'Click on any conversion result to copy the value and unit for easy pasting.'
        },
        paste: {
          title: 'Paste Function',
          description: 'Supports pasting values with units, the system will automatically extract the numeric part.'
        }
      }
    },
    customOrder: 'Custom Order',
    byName: 'By Name',
    byCreatedTime: 'By Created Time',
    byLastUsed: 'By Last Used',
    clearAll: 'Clear All',
    noFavorites: 'No favorites yet',
    remove: 'Remove',
    clearConfirmTitle: 'Clear All Favorites',
    clearConfirmMessage: 'Are you sure you want to clear all favorites? This action cannot be undone.',
    cancel: 'Cancel',
    confirm: 'Confirm',
    addFavorite: 'Add to Favorites',
    removeFavorite: 'Remove from Favorites',
    enterFavoriteName: 'Enter a name for this favorite',
    favoriteNamePlaceholder: 'e.g. Meters to Feet',
    showFavorites: 'Show Favorites',
    hideFavorites: 'Hide Favorites',
    from: 'From',
    to: 'To',
    selectUnit: 'Select Unit',
    inputValue: 'Input Value',
    convertResult: 'Result',
    searchUnit: 'Search units...',
    length: 'Length',
    conversionHistory: 'Conversion History',
    clearHistory: 'Clear History',
    confirmClear: 'Are you sure you want to clear all history?',
    delete: 'Delete'
  },
  units: {
    length: {
      title: 'Length',
      description: 'Convert between different units of length',
      units: {
        metric_meter: 'Meter',
        metric_kilometer: 'Kilometer',
        metric_centimeter: 'Centimeter',
        metric_millimeter: 'Millimeter',
        imperial_inch: 'Inch',
        imperial_foot: 'Foot',
        imperial_yard: 'Yard',
        imperial_mile: 'Mile',
        astronomical_light_year: 'Light Year',
        astronomical_unit: 'Astronomical Unit',
        metric_decimeter: 'Decimeter',
        metric_micrometer: 'Micrometer',
        metric_nanometer: 'Nanometer',
        metric_picometer: 'Picometer',
        nautical_mile: 'Nautical Mile',
        nautical_fathom: 'Fathom'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          'A light year is not a unit of time, but a unit of distance that light travels in one year.',
          'The Astronomical Unit (AU) is based on the average distance from Earth to the Sun.',
          'The meter was originally defined as one ten-millionth of the distance from the North Pole to the Equator.',
          'Today, the meter is defined by the speed of light in a vacuum.'
        ]
      }
    },
    area: {
      title: 'Area',
      description: 'Convert between different units of area',
      units: {
        metric_square_meter: 'Square Meter',
        metric_square_kilometer: 'Square Kilometer',
        metric_square_centimeter: 'Square Centimeter',
        metric_square_millimeter: 'Square Millimeter',
        imperial_square_inch: 'Square Inch',
        imperial_square_foot: 'Square Foot',
        imperial_square_yard: 'Square Yard',
        imperial_square_mile: 'Square Mile',
        metric_hectare: 'Hectare',
        imperial_acre: 'Acre',
        metric_square_decimeter: 'Square Decimeter',
        metric_are: 'Are',
        traditional_mu: 'Mu (Chinese)',
        traditional_qing: 'Qing (Chinese)'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          'The hectare was created to simplify land area measurements, with 1 hectare equal to 10,000 square meters.',
          'The acre originated in medieval times, defined as the area one pair of oxen could plow in a day.',
          'The Chinese mu dates back to the Shang-Zhou period, with 1 mu approximately equal to 666.67 square meters.',
          'A square mile is the largest imperial area unit, equal to 640 acres.',
          'The are is a metric area unit equal to 100 square meters, but is rarely used.',
          'The qing is the largest traditional Chinese area unit, equal to 100 mu.'
        ]
      }
    },
    volume: {
      title: 'Volume',
      description: 'Convert between different units of volume',
      units: {
        metric_cubic_meter: 'Cubic Meter',
        metric_cubic_kilometer: 'Cubic Kilometer',
        metric_cubic_centimeter: 'Cubic Centimeter',
        metric_cubic_millimeter: 'Cubic Millimeter',
        metric_cubic_decimeter: 'Cubic Decimeter',
        metric_liter: 'Liter',
        metric_milliliter: 'Milliliter',
        imperial_gallon: 'Imperial Gallon',
        imperial_quart: 'Imperial Quart',
        imperial_pint: 'Imperial Pint',
        us_cup: 'US Cup',
        imperial_fluid_ounce: 'Imperial Fluid Ounce',
        us_tablespoon: 'US Tablespoon',
        us_teaspoon: 'US Teaspoon',
        imperial_cubic_yard: 'Cubic Yard',
        imperial_cubic_foot: 'Cubic Foot',
        imperial_cubic_inch: 'Cubic Inch',
        chinese_dan: 'Dan (Chinese)',
        chinese_dou: 'Dou (Chinese)',
        chinese_sheng: 'Sheng (Chinese)',
        japanese_koku: 'Koku (Japanese)',
        japanese_to: 'To (Japanese)',
        japanese_sho: 'Sho (Japanese)',
        japanese_go: 'Go (Japanese)',
        industrial_oil_barrel: 'Oil Barrel',
        industrial_beer_barrel: 'Beer Barrel'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          '1 liter is exactly equal to 1 cubic decimeter (1000 cubic centimeters), making metric volume conversions very convenient.',
          'There is a significant difference between US and Imperial liquid units: 1 Imperial gallon ≈ 4.546 liters, 1 US gallon ≈ 3.785 liters.',
          'The Chinese dou was an important unit of measurement in ancient times, with 1 dou equal to 10 sheng.',
          'In US cooking measurements, 1 cup = 16 tablespoons = 48 teaspoons ≈ 237 milliliters.',
          'The Imperial pint is used for measuring beer volume, equal to 568 milliliters.',
          'Laboratory beakers and graduated cylinders typically use metric units (milliliters or liters).'
        ]
      }
    },
    weight: {
      title: 'Weight',
      description: 'Convert between different units of weight',
      units: {
        metric_kilogram: 'Kilogram',
        metric_tonne: 'Tonne',
        metric_gram: 'Gram',
        metric_milligram: 'Milligram',
        metric_microgram: 'Microgram',
        imperial_pound: 'Pound',
        imperial_ounce: 'Ounce',
        imperial_stone: 'Stone',
        imperial_long_ton: 'Long Ton',
        us_short_ton: 'Short Ton',
        jewelry_carat: 'Carat',
        jewelry_grain: 'Grain',
        traditional_jin: 'Jin (Chinese)',
        traditional_liang: 'Liang (Chinese)',
        traditional_qian: 'Qian (Chinese)',
        medical_grain: 'Medical Grain',
        medical_dram: 'Medical Dram',
        medical_ounce: 'Medical Ounce'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          'The carat was originally based on the weight of carob seeds, but is now precisely defined as 0.2 grams.',
          'The kilogram was the only SI base unit defined by a physical artifact until 2019, when it was redefined using the Planck constant.',
          'Traditional Chinese units: 1 jin = 500g, 1 liang = 50g, 1 qian = 5g.',
          'Pharmacy units have special conversion ratios, with the pharmacy ounce being slightly lighter than the avoirdupois ounce.',
          'The avoirdupois system is the most commonly used weight system in English-speaking countries, with 1 avoirdupois pound equal to 453.59237 grams.',
          'The difference between long and short tons: 1 long ton = 2240 pounds, 1 short ton = 2000 pounds.'
        ]
      }
    },
    time: {
      title: 'Time',
      description: 'Convert between different units of time',
      units: {
        metric_second: 'Second',
        metric_minute: 'Minute',
        metric_hour: 'Hour',
        metric_day: 'Day',
        metric_week: 'Week',
        metric_month: 'Month',
        metric_year: 'Year',
        metric_decade: 'Decade',
        metric_century: 'Century',
        scientific_millisecond: 'Millisecond',
        scientific_microsecond: 'Microsecond',
        scientific_nanosecond: 'Nanosecond'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          'A light year is not a unit of time, but a unit of distance that light travels in one year.',
          'The Astronomical Unit (AU) is based on the average distance from Earth to the Sun.',
          'The meter was originally defined as one ten-millionth of the distance from the North Pole to the Equator.',
          'Today, the meter is defined by the speed of light in a vacuum.'
        ]
      }
    },
    temperature: {
      title: 'Temperature',
      description: 'Convert between different temperature scales and specialized units',
      units: {
        scientific_kelvin: 'Kelvin (Scientific)',
        metric_celsius: 'Celsius (Metric)',
        us_fahrenheit: 'Fahrenheit (US)',
        scientific_rankine: 'Rankine (Scientific)',
        historical_reaumur: 'Réaumur (Historical)',
        meteorological_celsius: 'Celsius (Meteorological)',
        meteorological_fahrenheit: 'Fahrenheit (Meteorological)',
        industrial_celsius: 'Celsius (Industrial)',
        industrial_fahrenheit: 'Fahrenheit (Industrial)'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          'The Kelvin scale is the primary unit of temperature measurement in the International System of Units (SI).',
          'Meteorological temperature units are specifically used in weather forecasting and climate studies.',
          'Industrial temperature units follow specific safety standards and regulations in manufacturing.',
          'The absolute zero temperature is 0 K, -273.15°C, or -459.67°F.',
          'The Celsius scale was originally defined using the freezing and boiling points of water.',
          'The Fahrenheit scale was created by Daniel Gabriel Fahrenheit in 1724.'
        ]
      },
      conversion_tips: {
        title: 'Conversion Tips',
        items: [
          'Room temperature is typically around 20-22°C (68-72°F).',
          'Normal human body temperature is about 37°C (98.6°F).',
          'Water freezes at 0°C (32°F) and boils at 100°C (212°F) at sea level.',
          'Industrial processes often involve temperatures much higher than everyday measurements.',
          'Meteorological temperatures are reported with specific precision for weather forecasting.'
        ]
      }
    },
    speed: {
      title: 'Speed',
      description: 'Convert between different units of speed',
      units: {
        meter_per_second: 'Meters per Second',
        kilometer_per_hour: 'Kilometers per Hour',
        mile_per_hour: 'Miles per Hour',
        foot_per_second: 'Feet per Second',
        knot: 'Knots',
        mach: 'Mach',
        kilometer_per_second: 'Kilometers per Second',
        light_speed: 'Speed of Light'
      }
    },
    angle: {
      title: 'Angle',
      description: 'Convert between different units of angle',
      units: {
        degree: 'Degree',
        radian: 'Radian',
        gradian: 'Gradian',
        arcminute: 'Arcminute',
        arcsecond: 'Arcsecond'
      }
    },
    pressure: {
      title: 'Pressure',
      description: 'Convert between different units of pressure',
      units: {
        pascal: 'Pascal',
        kilopascal: 'Kilopascal',
        bar: 'Bar',
        psi: 'PSI',
        atmosphere: 'Atmosphere'
      }
    },
    power: {
      title: 'Power',
      description: 'Convert between different units of power',
      units: {
        watt: 'Watt',
        kilowatt: 'Kilowatt',
        horsepower: 'Horsepower'
      }
    },
    energy: {
      title: 'Energy',
      description: 'Convert between different units of energy',
      units: {
        joule: 'Joule',
        kilojoule: 'Kilojoule',
        calorie: 'Calorie',
        kilocalorie: 'Kilocalorie',
        watt_hour: 'Watt Hour',
        kilowatt_hour: 'Kilowatt Hour'
      }
    },
    force: {
      title: 'Force',
      description: 'Convert between different units of force',
      units: {
        newton: 'Newton',
        kilonewton: 'Kilonewton',
        dyne: 'Dyne',
        pound_force: 'Pound Force'
      }
    },
    density: {
      title: 'Density',
      description: 'Convert between different units of density (ISO 31-3)',
      units: {
        kilogram_per_cubic_meter: 'Kilogram per Cubic Meter',
        gram_per_cubic_centimeter: 'Gram per Cubic Centimeter',
        pound_per_cubic_foot: 'Pound per Cubic Foot',
        pound_per_cubic_inch: 'Pound per Cubic Inch',
        kilogram_per_liter: 'Kilogram per Liter',
        gram_per_milliliter: 'Gram per Milliliter',
        pound_per_gallon: 'Pound per Gallon',
        ounce_per_cubic_inch: 'Ounce per Cubic Inch'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          'Water has a density of approximately 1 gram per cubic centimeter at room temperature.',
          'Mercury is the densest liquid at room temperature, with a density of 13.5 g/cm³.',
          'The density of air at sea level is approximately 1.225 kg/m³.',
          'Density changes with temperature and pressure.'
        ]
      }
    },
    flow: {
      title: 'Flow Rate',
      description: 'Convert between different units of flow rate',
      units: {
        cubic_meter_per_second: 'Cubic Meter per Second',
        liter_per_minute: 'Liter per Minute',
        gallon_per_minute: 'Gallon per Minute'
      }
    },
    torque: {
      title: 'Torque',
      description: 'Convert between different units of torque',
      units: {
        newton_meter: 'Newton Meter',
        pound_foot: 'Pound Foot',
        kilogram_force_meter: 'Kilogram Force Meter'
      }
    },
    data: {
      title: 'Data Size',
      description: 'Convert between different units of digital data',
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
        title: 'Did you know?',
        items: [
          '1 Kilobit per Second equals 1000 Bits per Second.',
          '1 Megabit per Second equals 1000 Kilobits per Second.'
        ]
      }
    },
    data_rate: {
      title: 'Data Transfer Rate',
      description: 'Convert between different units of data transfer rate',
      units: {
        bits_per_second: 'Bits per Second',
        kilobits_per_second: 'Kilobits per Second',
        megabits_per_second: 'Megabits per Second',
        gigabits_per_second: 'Gigabits per Second',
        terabits_per_second: 'Terabits per Second',
        bytes_per_second: 'Bytes per Second',
        kilobytes_per_second: 'Kilobytes per Second',
        megabytes_per_second: 'Megabytes per Second',
        gigabytes_per_second: 'Gigabytes per Second',
        terabytes_per_second: 'Terabytes per Second',
        kibibits_per_second: 'Kibibits per Second',
        mebibits_per_second: 'Mebibits per Second',
        gibibits_per_second: 'Gibibits per Second',
        tebibits_per_second: 'Tebibits per Second',
        kibibytes_per_second: 'Kibibytes per Second',
        mebibytes_per_second: 'Mebibytes per Second',
        gibibytes_per_second: 'Gibibytes per Second',
        tebibytes_per_second: 'Tebibytes per Second'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          '1 Kilobit per Second equals 1000 Bits per Second.',
          '1 Megabit per Second equals 1000 Kilobits per Second.'
        ]
      }
    },
    currency: {
      title: 'Currency',
      description: 'Convert between different currencies',
      units: {
        usd: 'US Dollar',
        eur: 'Euro',
        gbp: 'British Pound',
        jpy: 'Japanese Yen',
        cny: 'Chinese Yuan',
        krw: 'Korean Won',
        inr: 'Indian Rupee'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          'The US Dollar is the most widely used reserve currency in the world.',
          'The Euro is the official currency of 19 of the 27 European Union member states.'
        ]
      }
    },
    cooking: {
      title: 'Cooking',
      description: 'Convert between different cooking measurements',
      units: {
        us_fluid_ounce: 'US Fluid Ounce',
        us_tablespoon: 'US Tablespoon',
        us_teaspoon: 'US Teaspoon',
        imperial_fluid_ounce: 'Imperial Fluid Ounce',
        imperial_tablespoon: 'Imperial Tablespoon',
        imperial_teaspoon: 'Imperial Teaspoon',
        chinese_bowl: 'Chinese Bowl',
        chinese_cup: 'Chinese Cup',
        chinese_tablespoon: 'Chinese Tablespoon',
        chinese_teaspoon: 'Chinese Teaspoon',
        japanese_cup: 'Japanese Cup',
        japanese_tablespoon: 'Japanese Tablespoon',
        japanese_teaspoon: 'Japanese Teaspoon'
      },
      knowledge: {
        title: 'Did you know?',
        items: [
          '1 US fluid ounce is approximately 29.5735 milliliters.',
          '1 Imperial fluid ounce is approximately 28.4131 milliliters.',
          '1 US tablespoon equals 3 teaspoons.',
          '1 Chinese cup is traditionally used in culinary measurements and varies regionally.'
        ]
      }
    },
    numeral: {
      title: 'Number Base',
      description: 'Convert numbers between different number bases (binary, octal, decimal, hexadecimal)',
      units: {
        decimal: 'Decimal',
        binary: 'Binary',
        octal: 'Octal',
        hexadecimal: 'Hexadecimal'
      },
      knowledge: {
        title: 'Number Base Knowledge',
        items: [
          'Decimal: Uses digits 0-9',
          'Binary: Uses digits 0-1, commonly used in computer systems',
          'Octal: Uses digits 0-7',
          'Hexadecimal: Uses digits 0-9 and letters A-F, commonly used in programming'
        ]
      },
      conversion_tips: {
        title: 'Conversion Tips',
        items: [
          'Binary prefix: 0b or 0B',
          'Octal prefix: 0o or 0O',
          'Hexadecimal prefix: 0x or 0X',
          'Common uses:\n  - Binary: Computer data\n  - Octal: Unix file permissions\n  - Hexadecimal: Color codes, memory addresses'
        ]
      }
    },
    frequency: {
      title: 'Frequency',
      description: 'Convert between different units of frequency',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Megahertz',
        gigahertz: 'Gigahertz'
      }
    }
  },
  buttons: {
    convert: 'Convert',
    clear: 'Clear',
    swap: 'Swap',
    copy: 'Copy'
  },
  messages: {
    copied: 'Copied!',
    error: 'An error occurred',
    invalidNumber: 'Please enter a valid number',
    selectUnit: 'Please select a unit',
    conversionError: 'Conversion error',
    invalidTemperature: 'Invalid temperature value'
  },
  converter: {
    title: 'Unit Converter',
    description: 'Online unit conversion tool',
    from: 'From',
    to: 'To',
    value: 'Value',
    result: 'Result',
    instructions: {
      title: 'Instructions',
      steps: [
        'Enter the value you want to convert',
        'Select the unit of the input value',
        'The system will automatically calculate and display the corresponding values',
        'Click on any result to quickly copy the value'
      ]
    },
    limitations: {
      title: 'Limitations',
      items: [
        'Supports up to 20 digits (including decimal point)',
        'Up to 10 decimal places',
        'Very large or small numbers will be displayed in scientific notation'
      ]
    }
  },
  errors: {
    invalidInput: 'Invalid input',
    invalidFormat: 'Invalid format',
    conversionFailed: 'Conversion failed',
    copyFailed: 'Copy failed'
  },
  footer: {
    about: 'About',
    description: 'A powerful online unit conversion tool.',
    contact: 'Contact',
    email: 'support@metric-converter.com',
    legal: 'Legal',
    changelog: 'Changelog'
  }
}

export default en 