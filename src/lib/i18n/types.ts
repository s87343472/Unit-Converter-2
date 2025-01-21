export interface Translation {
  common: {
    title: string
    description: string
    selectType: string
  }
  units: {
    length: {
      title: string
      units: {
        meter: string
        kilometer: string
        centimeter: string
        millimeter: string
        inch: string
        foot: string
        yard: string
        mile: string
      }
    }
    weight: {
      title: string
      units: {
        kilogram: string
        gram: string
        milligram: string
        pound: string
        ounce: string
        ton: string
      }
    }
    temperature: {
      title: string
      units: {
        celsius: string
        fahrenheit: string
        kelvin: string
      }
    }
  }
  buttons: {
    convert: string
    clear: string
    swap: string
    copy: string
  }
  messages: {
    copied: string
    error: string
    invalidNumber: string
  }
} 