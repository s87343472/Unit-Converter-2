import type { Translation } from '../types'

const en: Translation = {
  common: {
    title: 'Unit Converter',
    description: 'A powerful online unit conversion tool',
    selectType: 'Select a conversion type:',
  },
  units: {
    length: {
      title: 'Length',
      units: {
        meter: 'Meter',
        kilometer: 'Kilometer',
        centimeter: 'Centimeter',
        millimeter: 'Millimeter',
        inch: 'Inch',
        foot: 'Foot',
        yard: 'Yard',
        mile: 'Mile',
      },
    },
    weight: {
      title: 'Weight',
      units: {
        kilogram: 'Kilogram',
        gram: 'Gram',
        milligram: 'Milligram',
        pound: 'Pound',
        ounce: 'Ounce',
        ton: 'Ton',
      },
    },
    temperature: {
      title: 'Temperature',
      units: {
        celsius: 'Celsius',
        fahrenheit: 'Fahrenheit',
        kelvin: 'Kelvin',
      },
    },
  },
  buttons: {
    convert: 'Convert',
    clear: 'Clear',
    swap: 'Swap',
    copy: 'Copy',
  },
  messages: {
    copied: 'Copied to clipboard',
    error: 'An error occurred',
    invalidNumber: 'Please enter a valid number',
  },
}

export default en 