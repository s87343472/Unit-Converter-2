import type { Translation } from '../types'

const en: Translation = {
  common: {
    title: 'Unit Converter',
    description: 'A powerful online unit conversion tool that supports various unit conversions.',
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
    searchUnit: 'Search units...'
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
      description: 'Convert between different units of weight',
      units: {
        metric_ton: 'Metric Ton',
        kilogram: 'Kilogram',
        gram: 'Gram',
        milligram: 'Milligram',
        microgram: 'Microgram',
        imperial_ton: 'Imperial Ton',
        us_ton: 'US Ton',
        stone: 'Stone',
        pound: 'Pound',
        ounce: 'Ounce',
        carat: 'Carat'
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
      description: 'Convert between different units of density',
      units: {
        kilogram_per_cubic_meter: 'Kilogram per Cubic Meter',
        gram_per_cubic_centimeter: 'Gram per Cubic Centimeter',
        pound_per_cubic_foot: 'Pound per Cubic Foot'
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
    selectUnit: 'Please select a unit',
    conversionError: 'Error converting values',
    invalidTemperature: 'Temperature cannot be below absolute zero'
  }
}

export default en 