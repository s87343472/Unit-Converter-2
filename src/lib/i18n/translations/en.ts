import type { Translation } from '../types'

const en: Translation = {
  common: {
    title: 'metric-converter',
    description: 'A powerful online unit conversion tool that supports various unit conversions.',
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
    pageNotFound: 'Page Not Found',
    pageNotFoundDesc: 'Sorry, the page you are looking for does not exist.',
    backToHome: 'Back to Home',
    copyright: 'All rights reserved.',
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
        meter: 'Meter',
        kilometer: 'Kilometer',
        centimeter: 'Centimeter',
        millimeter: 'Millimeter',
        inch: 'Inch',
        foot: 'Foot',
        yard: 'Yard',
        mile: 'Mile',
        light_year: 'Light Year',
        astronomical_unit: 'Astronomical Unit',
        decimeter: 'Decimeter',
        micrometer: 'Micrometer',
        nanometer: 'Nanometer',
        picometer: 'Picometer'
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
        square_meter: 'Square Meter',
        square_kilometer: 'Square Kilometer',
        square_centimeter: 'Square Centimeter',
        square_millimeter: 'Square Millimeter',
        square_inch: 'Square Inch',
        square_foot: 'Square Foot',
        square_yard: 'Square Yard',
        square_mile: 'Square Mile',
        hectare: 'Hectare',
        acre: 'Acre',
        square_decimeter: 'Square Decimeter'
      }
    },
    volume: {
      title: 'Volume',
      description: 'Convert between different units of volume',
      units: {
        cubic_meter: 'Cubic Meter',
        cubic_kilometer: 'Cubic Kilometer',
        cubic_centimeter: 'Cubic Centimeter',
        cubic_millimeter: 'Cubic Millimeter',
        cubic_decimeter: 'Cubic Decimeter',
        liter: 'Liter',
        milliliter: 'Milliliter',
        gallon: 'Gallon',
        quart: 'Quart',
        pint: 'Pint',
        cup: 'Cup',
        fluid_ounce: 'Fluid Ounce',
        tablespoon: 'Tablespoon',
        teaspoon: 'Teaspoon',
        cubic_yard: 'Cubic Yard',
        cubic_foot: 'Cubic Foot',
        cubic_inch: 'Cubic Inch'
      }
    },
    weight: {
      title: 'Weight',
      description: 'Convert between different units of weight (including metric, avoirdupois, traditional, jewelry, and pharmacy units)',
      units: {
        // Metric units
        metric_kilogram: 'Kilogram (Metric)',
        metric_tonne: 'Tonne (Metric)',
        metric_gram: 'Gram (Metric)',
        metric_milligram: 'Milligram (Metric)',
        metric_microgram: 'Microgram (Metric)',
        
        // Avoirdupois units
        avoirdupois_pound: 'Pound (Avoirdupois)',
        avoirdupois_ounce: 'Ounce (Avoirdupois)',
        avoirdupois_stone: 'Stone (Avoirdupois)',
        avoirdupois_long_ton: 'Long Ton (Avoirdupois)',
        avoirdupois_short_ton: 'Short Ton (Avoirdupois)',
        
        // Jewelry units
        jewelry_carat: 'Carat (Jewelry)',
        jewelry_grain: 'Grain (Jewelry)',
        
        // Traditional Chinese units
        traditional_jin: 'Jin (Chinese Traditional)',
        traditional_liang: 'Liang (Chinese Traditional)',
        traditional_qian: 'Qian (Chinese Traditional)',
        
        // Pharmacy units
        pharmacy_grain: 'Grain (Pharmacy)',
        pharmacy_ounce: 'Ounce (Pharmacy)',
        pharmacy_pound: 'Pound (Pharmacy)',
        pharmacy_scruple: 'Scruple (Pharmacy)',
        pharmacy_dram: 'Dram (Pharmacy)'
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
        second: 'Second',
        minute: 'Minute',
        hour: 'Hour',
        day: 'Day',
        week: 'Week',
        month: 'Month',
        year: 'Year',
        millisecond: 'Millisecond',
        microsecond: 'Microsecond'
      }
    },
    temperature: {
      title: 'Temperature',
      description: 'Convert between different temperature scales',
      units: {
        celsius: 'Celsius',
        fahrenheit: 'Fahrenheit',
        kelvin: 'Kelvin'
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
      }
    },
    cooking: {
      title: 'Cooking',
      description: 'Convert between different cooking measurements',
      units: {
        milliliter: 'Milliliter',
        liter: 'Liter',
        us_cup: 'US Cup',
        us_tablespoon: 'US Tablespoon',
        us_teaspoon: 'US Teaspoon',
        imperial_cup: 'Imperial Cup',
        imperial_tablespoon: 'Imperial Tablespoon',
        imperial_teaspoon: 'Imperial Teaspoon'
      }
    },
    numeral: {
      title: 'Number Base',
      description: 'Convert numbers between different number bases (binary, octal, decimal, hexadecimal)',
      binary: {
        title: 'Binary',
        description: 'Base-2 number system (0-1)'
      },
      octal: {
        title: 'Octal',
        description: 'Base-8 number system (0-7)'
      },
      decimal: {
        title: 'Decimal',
        description: 'Base-10 number system (0-9)'
      },
      hexadecimal: {
        title: 'Hexadecimal',
        description: 'Base-16 number system (0-9, A-F)'
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
    copied: 'Copied to clipboard',
    error: 'An error occurred',
    invalidNumber: 'Please enter a valid number',
    selectUnit: 'Please select both units',
    conversionError: 'Error converting values',
    invalidTemperature: 'Temperature cannot be below absolute zero'
  },
  converter: {
    title: 'metric-converter',
    description: 'Online unit conversion tool that supports precise conversion between multiple units',
    from: 'From',
    to: 'To',
    instructions: {
      title: 'Instructions',
      steps: [
        'Enter the value you want to convert in the "From" field',
        'Select the unit of the input value from the list',
        'The system will automatically calculate and display values in all available units',
        'Click the copy button to copy the result to clipboard'
      ]
    },
    limitations: {
      title: 'Limitations',
      items: [
        'Maintains precision up to 10 significant digits',
        'Very large or small values are displayed in scientific notation',
        'All conversions are based on the International System of Units (SI)'
      ]
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
  }
}

export default en 