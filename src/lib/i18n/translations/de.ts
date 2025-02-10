import type { Translation } from '../types';

const de: Translation = {
  common: {
    title: 'Einheitenumrechner',
    description: 'Ein leistungsstarkes Online-Tool zur Einheitenumrechnung.',
    loading: 'Laden...',
    error: 'Fehler',
    copy: 'Kopieren',
    copied: 'Kopiert',
    settings: 'Einstellungen',
    language: 'Sprache',
    theme: 'Thema',
    about: 'Über uns',
    contact: 'Kontakt',
    home: 'Startseite',
    selectType: 'Konvertierungstyp auswählen',
    selectLanguage: 'Sprache auswählen',
    pageNotFound: 'Seite nicht gefunden',
    pageNotFoundDesc: 'Entschuldigung, die Seite, die Sie besucht haben, existiert nicht.',
    backToHome: 'Zurück zur Startseite',
    copyright: 'Urheberrecht',
    enterValue: 'Wert eingeben',
    categories: {
      basic: 'Grundeinheiten',
      area_volume: 'Fläche & Volumen',
      time_related: 'Zeitbezogen',
      physics: 'Physikalische Einheiten',
      data: 'Dateneinheiten',
      others: 'Andere Einheiten'
    },
    instructions: {
      title: 'Anleitung',
      steps: {
        input: 'Geben Sie den Wert ein, den Sie konvertieren möchten',
        select: 'Wählen Sie die Einheit des Eingabewerts',
        auto: 'Das System berechnet und zeigt automatisch die entsprechenden Werte in anderen Einheiten an',
        copy: 'Klicken Sie auf ein beliebiges Ergebnis, um den Wert mit seiner Einheit schnell zu kopieren'
      },
      features: {
        title: 'Funktionen',
        range: {
          title: 'Unterstützter Wertebereich',
          description: 'Unterstützt bis zu 20 Ziffern (einschließlich Dezimalpunkt) mit bis zu 10 Dezimalstellen. Für sehr große oder sehr kleine Zahlen wird automatisch die wissenschaftliche Notation verwendet.'
        },
        copy: {
          title: 'Kopierfunktion',
          description: 'Klicken Sie auf ein beliebiges Konvertierungsergebnis, um den Wert und die Einheit für einfaches Einfügen zu kopieren.'
        },
        paste: {
          title: 'Einfügenfunktion',
          description: 'Unterstützt das Einfügen von Werten mit Einheiten, das System extrahiert automatisch den numerischen Teil.'
        }
      }
    },
    customOrder: 'Benutzerdefinierte Reihenfolge',
    byName: 'Nach Name',
    byCreatedTime: 'Nach Erstellungsdatum',
    byLastUsed: 'Nach letzter Verwendung',

    clearAll: 'Alles löschen',
    noFavorites: 'Noch keine Favoriten',
    remove: 'Entfernen',
    clearConfirmTitle: 'Alle Favoriten löschen',
    clearConfirmMessage: 'Sind Sie sicher, dass Sie alle Favoriten löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    addFavorite: 'Zu Favoriten hinzufügen',
    removeFavorite: 'Aus Favoriten entfernen',
    enterFavoriteName: 'Geben Sie einen Namen für diesen Favoriten ein',
    favoriteNamePlaceholder: 'z.B. Meter in Fuß',
    showFavorites: 'Favoriten anzeigen',
    hideFavorites: 'Favoriten ausblenden',
    from: 'Von',
    to: 'Zu',
    selectUnit: 'Einheit auswählen',
    inputValue: 'Eingabewert',
    convertResult: 'Ergebnis',
    searchUnit: 'Einheiten suchen...',
    length: 'Länge',
    conversionHistory: 'Konvertierungshistorie',
    clearHistory: 'Verlauf löschen',
    confirmClear: 'Sind Sie sicher, dass Sie den gesamten Verlauf löschen möchten?',
    delete: 'Löschen'
  },
  units: {
    length: {
      title: 'Länge',
      description: 'Zwischen verschiedenen Längeneinheiten umrechnen',
      units: {
        metric_meter: 'Meter',
        metric_kilometer: 'Kilometer',
        metric_centimeter: 'Zentimeter',
        metric_millimeter: 'Millimeter',
        imperial_inch: 'Zoll',
        imperial_foot: 'Fuß',
        imperial_yard: 'Yard',
        imperial_mile: 'Meile',
        astronomical_light_year: 'Lichtjahr',
        astronomical_unit: 'Astronomische Einheit',
        metric_decimeter: 'Dezimeter',
        metric_micrometer: 'Mikrometer',
        metric_nanometer: 'Nanometer',
        metric_picometer: 'Pikometer',
        nautical_mile: 'Seemeile',
        nautical_fathom: 'Faden'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Ein Lichtjahr ist keine Zeiteinheit, sondern eine Entfernungseinheit, die das Licht in einem Jahr zurücklegt.',
          'Die Astronomische Einheit (AE) basiert auf der durchschnittlichen Entfernung von der Erde zur Sonne.',
          'Der Meter wurde ursprünglich als ein Zehnmillionstel der Entfernung vom Nordpol zum Äquator definiert.',
          'Heute wird der Meter durch die Lichtgeschwindigkeit im Vakuum definiert.'
        ]
      }
    },
    area: {
      title: 'Fläche',
      description: 'Zwischen verschiedenen Flächeneinheiten umrechnen',
      units: {
        metric_square_meter: 'Quadratmeter',
        metric_square_kilometer: 'Quadratkilometer',
        metric_square_centimeter: 'Quadratzentimeter',
        metric_square_millimeter: 'Quadratmillimeter',
        imperial_square_inch: 'Quadratzoll',
        imperial_square_foot: 'Quadratfuß',
        imperial_square_yard: 'Quadratyard',
        imperial_square_mile: 'Quadratmeile',
        metric_hectare: 'Hektar',
        imperial_acre: 'Acre',
        metric_square_decimeter: 'Quadratdezimeter',
        metric_are: 'Ar',
        traditional_mu: 'Mu (Chinesisch)',
        traditional_qing: 'Qing (Chinesisch)'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Der Hektar wurde geschaffen, um Landflächenmessungen zu vereinfachen, wobei 1 Hektar 10.000 Quadratmetern entspricht.',
          'Das Acre stammt aus dem Mittelalter und wurde als die Fläche definiert, die ein Ochsengespann an einem Tag pflügen konnte.',
          'Das chinesische Mu stammt aus der Shang-Zhou-Periode, wobei 1 Mu etwa 666,67 Quadratmetern entspricht.',
          'Eine Quadratmeile ist die größte imperiale Flächeneinheit und entspricht 640 Acres.'
        ]
      }
    },
    volume: {
      title: 'Volumen',
      description: 'Zwischen verschiedenen Volumeneinheiten umrechnen',
      units: {
        metric_cubic_meter: 'Kubikmeter',
        metric_cubic_kilometer: 'Kubikkilometer',
        metric_cubic_centimeter: 'Kubikzentimeter',
        metric_cubic_millimeter: 'Kubikmillimeter',
        metric_cubic_decimeter: 'Kubikdezimeter',
        metric_liter: 'Liter',
        metric_milliliter: 'Milliliter',
        imperial_gallon: 'Imperial Gallone',
        imperial_quart: 'Imperial Quart',
        imperial_pint: 'Imperial Pint',
        us_cup: 'US Tasse',
        imperial_fluid_ounce: 'Imperial Flüssigunze',
        us_tablespoon: 'US Esslöffel',
        us_teaspoon: 'US Teelöffel',
        imperial_cubic_yard: 'Kubikyard',
        imperial_cubic_foot: 'Kubikfuß',
        imperial_cubic_inch: 'Kubikzoll',
        chinese_dan: 'Dan (Chinesisch)',
        chinese_dou: 'Dou (Chinesisch)',
        chinese_sheng: 'Sheng (Chinesisch)',
        japanese_koku: 'Koku (Japanisch)',
        japanese_to: 'To (Japanisch)',
        japanese_sho: 'Sho (Japanisch)',
        japanese_go: 'Go (Japanisch)',
        industrial_oil_barrel: 'Ölfass',
        industrial_beer_barrel: 'Bierfass'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Liter entspricht 1000 Millilitern.',
          '1 Gallone entspricht 3,78541 Litern.'
        ]
      }
    },
    weight: {
      title: 'Gewicht',
      description: 'Zwischen verschiedenen Gewichtseinheiten umrechnen',
      units: {
        metric_kilogram: 'Kilogramm',
        metric_tonne: 'Tonne',
        metric_gram: 'Gramm',
        metric_milligram: 'Milligramm',
        metric_microgram: 'Mikrogramm',
        imperial_pound: 'Pfund',
        imperial_ounce: 'Unze',
        imperial_stone: 'Stone',
        imperial_long_ton: 'Long Ton',
        us_short_ton: 'Short Ton',
        jewelry_carat: 'Karat',
        jewelry_grain: 'Grain',
        traditional_jin: 'Jin (Chinesisch)',
        traditional_liang: 'Liang (Chinesisch)',
        traditional_qian: 'Qian (Chinesisch)',
        medical_grain: 'Medizinisches Grain',
        medical_dram: 'Medizinische Drachme',
        medical_ounce: 'Medizinische Unze'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Kilogramm entspricht 1000 Gramm.',
          '1 Pfund entspricht 0,453592 Kilogramm.'
        ]
      }
    },
    time: {
      title: 'Zeit',
      description: 'Zwischen verschiedenen Zeiteinheiten umrechnen',
      units: {
        metric_second: 'Sekunde',
        metric_minute: 'Minute',
        metric_hour: 'Stunde',
        metric_day: 'Tag',
        metric_week: 'Woche',
        metric_month: 'Monat',
        metric_year: 'Jahr',
        metric_decade: 'Jahrzehnt',
        metric_century: 'Jahrhundert',
        scientific_millisecond: 'Millisekunde',
        scientific_microsecond: 'Mikrosekunde',
        scientific_nanosecond: 'Nanosekunde'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Minute entspricht 60 Sekunden.',
          '1 Jahr entspricht ungefähr 365,25 Tagen.'
        ]
      }
    },
    temperature: {
      title: 'Temperatur',
      description: 'Zwischen verschiedenen Temperatureinheiten umrechnen',
      units: {
        scientific_kelvin: 'Kelvin (Wissenschaftlich)',
        metric_celsius: 'Celsius (Metrisch)',
        us_fahrenheit: 'Fahrenheit (US)',
        scientific_rankine: 'Rankine (Wissenschaftlich)',
        historical_reaumur: 'Réaumur (Historisch)',
        meteorological_celsius: 'Celsius (Meteorologisch)',
        meteorological_fahrenheit: 'Fahrenheit (Meteorologisch)',
        industrial_celsius: 'Celsius (Industriell)',
        industrial_fahrenheit: 'Fahrenheit (Industriell)'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '0 Grad Celsius entspricht 32 Grad Fahrenheit.',
          'Der absolute Nullpunkt ist -273,15 Grad Celsius.'
        ]
      }
    },
    speed: {
      title: 'Geschwindigkeit',
      description: 'Zwischen verschiedenen Geschwindigkeitseinheiten umrechnen',
      units: {
        metric_meter_per_second: 'Meter pro Sekunde',
        metric_kilometer_per_hour: 'Kilometer pro Stunde',
        imperial_mile_per_hour: 'Meilen pro Stunde',
        knot: 'Knoten'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Meter pro Sekunde entspricht 3,6 Kilometern pro Stunde.',
          '1 Knoten entspricht 1,852 Kilometern pro Stunde.'
        ]
      }
    },
    angle: {
      title: 'Winkel',
      description: 'Zwischen verschiedenen Winkeleinheiten umrechnen',
      units: {
        degree: 'Grad',
        radian: 'Radiant',
        gradian: 'Gradient',
        arcminute: 'Bogenminute',
        arcsecond: 'Bogensekunde'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '360 Grad entsprechen 2π Radiant.',
          '1 Grad entspricht 60 Winkelminuten.'
        ]
      }
    },
    pressure: {
      title: 'Druck',
      description: 'Zwischen verschiedenen Druckeinheiten umrechnen',
      units: {
        pascal: 'Pascal',
        kilopascal: 'Kilopascal',
        bar: 'Bar',
        psi: 'PSI',
        atmosphere: 'Atmosphäre'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Bar entspricht 100.000 Pascal.',
          '1 Pfund pro Quadratzoll entspricht 6894,76 Pascal.'
        ]
      }
    },
    power: {
      title: 'Leistung',
      description: 'Zwischen verschiedenen Leistungseinheiten umrechnen',
      units: {
        watt: 'Watt',
        kilowatt: 'Kilowatt',
        horsepower: 'Pferdestärke'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Kilowatt entspricht 1000 Watt.',
          '1 Pferdestärke entspricht 745,7 Watt.'
        ]
      }
    },
    energy: {
      title: 'Energie',
      description: 'Zwischen verschiedenen Energieeinheiten umrechnen',
      units: {
        joule: 'Joule',
        kilojoule: 'Kilojoule',
        calorie: 'Kalorie',
        kilocalorie: 'Kilokalorie'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Kilojoule entspricht 1000 Joule.',
          '1 Kalorie entspricht 4,184 Joule.'
        ]
      }
    },
    force: {
      title: 'Kraft',
      description: 'Zwischen verschiedenen Krafteinheiten umrechnen',
      units: {
        newton: 'Newton',
        kilonewton: 'Kilonewton',
        dyne: 'Dyn',
        pound_force: 'Pfund-Kraft'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Newton ist die Kraft, die benötigt wird, um eine Masse von 1 Kilogramm mit einer Beschleunigung von 1 Meter pro Sekunde² zu beschleunigen.',
          '1 Kilonewton entspricht 1000 Newton.'
        ]
      }
    },
    density: {
      title: 'Dichte',
      description: 'Zwischen verschiedenen Dichteeinheiten umrechnen',
      units: {
        kilogram_per_cubic_meter: 'Kilogramm pro Kubikmeter',
        gram_per_cubic_centimeter: 'Gramm pro Kubikzentimeter',
        pound_per_cubic_foot: 'Pfund pro Kubikfuß',
        pound_per_cubic_inch: 'Pfund pro Kubikzoll',
        kilogram_per_liter: 'Kilogramm pro Liter',
        gram_per_milliliter: 'Gramm pro Milliliter',
        pound_per_gallon: 'Pfund pro Gallone',
        ounce_per_cubic_inch: 'Unze pro Kubikzoll'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Die Dichte von Wasser beträgt etwa 1 Kilogramm pro Kubikmeter.',
          '1 Gramm pro Kubikzentimeter entspricht 1000 Kilogramm pro Kubikmeter.'
        ]
      }
    },
    flow: {
      title: 'Durchfluss',
      description: 'Zwischen verschiedenen Durchflusseinheiten umrechnen',
      units: {
        cubic_meter_per_second: 'Kubikmeter pro Sekunde',
        liter_per_minute: 'Liter pro Minute',
        gallon_per_minute: 'Gallonen pro Minute'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Kubikmeter pro Sekunde entspricht 1000 Litern pro Sekunde.',
          '1 Liter pro Minute entspricht ungefähr 0,01667 Kubikmeter pro Sekunde.'
        ]
      }
    },
    torque: {
      title: 'Drehmoment',
      description: 'Zwischen verschiedenen Drehmomenteinheiten umrechnen',
      units: {
        newton_meter: 'Newtonmeter',
        pound_foot: 'Pfund-Fuß'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Newtonmeter entspricht 0,737562 Pfund-Fuß.',
          '1 Pfund-Fuß entspricht 1,35582 Newtonmeter.'
        ]
      }
    },
    data: {
      title: 'Daten',
      description: 'Zwischen verschiedenen Dateneinheiten umrechnen',
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
        title: 'Wussten Sie schon?',
        items: [
          '1 Byte entspricht 8 Bits.',
          '1 Kilobyte entspricht 1024 Bytes.'
        ]
      }
    },
    data_rate: {
      title: 'Datenübertragungsrate',
      description: 'Zwischen verschiedenen Datenübertragungsraten umrechnen',
      units: {
        bits_per_second: 'Bit pro Sekunde',
        kilobits_per_second: 'Kilobit pro Sekunde',
        megabits_per_second: 'Megabit pro Sekunde',
        gigabits_per_second: 'Gigabit pro Sekunde',
        terabits_per_second: 'Terabit pro Sekunde',
        bytes_per_second: 'Byte pro Sekunde',
        kilobytes_per_second: 'Kilobyte pro Sekunde',
        megabytes_per_second: 'Megabyte pro Sekunde',
        gigabytes_per_second: 'Gigabyte pro Sekunde',
        terabytes_per_second: 'Terabyte pro Sekunde',
        kibibits_per_second: 'Kibibit pro Sekunde',
        mebibits_per_second: 'Mebibit pro Sekunde',
        gibibits_per_second: 'Gibibit pro Sekunde',
        tebibits_per_second: 'Tebibit pro Sekunde',
        kibibytes_per_second: 'Kibibyte pro Sekunde',
        mebibytes_per_second: 'Mebibyte pro Sekunde',
        gibibytes_per_second: 'Gibibyte pro Sekunde',
        tebibytes_per_second: 'Tebibyte pro Sekunde'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Byte entspricht 8 Bits.',
          '1 Kilobyte entspricht 1024 Bytes.'
        ]
      }
    },
    currency: {
      title: 'Währung',
      description: 'Zwischen verschiedenen Währungen umrechnen',
      units: {
        usd: 'US-Dollar',
        eur: 'Euro',
        gbp: 'Britisches Pfund',
        jpy: 'Japanischer Yen',
        cny: 'Chinesischer Yuan',
        krw: 'Südkoreanischer Won',
        inr: 'Indische Rupie'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Der US-Dollar ist die weltweit am häufigsten verwendete Reservewährung.',
          'Der Euro ist die offizielle Währung von 19 der 27 EU-Mitgliedstaaten.'
        ]
      }
    },
    cooking: {
      title: 'Kochen',
      description: 'Zwischen verschiedenen Kochmaßeinheiten umrechnen',
      units: {
        us_fluid_ounce: 'US Flüssigunze',
        us_tablespoon: 'US Esslöffel',
        us_teaspoon: 'US Teelöffel',
        imperial_fluid_ounce: 'Imperial Flüssigunze',
        imperial_tablespoon: 'Imperial Esslöffel',
        imperial_teaspoon: 'Imperial Teelöffel',
        chinese_bowl: 'Chinesische Schüssel',
        chinese_cup: 'Chinesische Tasse',
        chinese_tablespoon: 'Chinesischer Esslöffel',
        chinese_teaspoon: 'Chinesischer Teelöffel',
        japanese_cup: 'Japanische Tasse',
        japanese_tablespoon: 'Japanischer Esslöffel',
        japanese_teaspoon: 'Japanischer Teelöffel'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Teelöffel entspricht etwa 5 Millilitern.',
          '1 Esslöffel entspricht etwa 15 Millilitern.'
        ]
      }
    },
    numeral: {
      title: 'Zahlensystem',
      description: 'Zwischen verschiedenen Zahlensystemen umrechnen',
      units: {
        decimal: 'Dezimal',
        binary: 'Binär',
        octal: 'Oktal',
        hexadecimal: 'Hexadezimal'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Das Binärsystem wird intern in Computern verwendet.',
          'Hexadezimal wird häufig in der Programmierung zur Darstellung von Farben und Speicheradressen verwendet.'
        ]
      }
    },
    frequency: {
      title: 'Frequenz',
      description: 'Zwischen verschiedenen Frequenzeinheiten umrechnen',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Megahertz',
        gigahertz: 'Gigahertz'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          '1 Hertz entspricht 1 Zyklus pro Sekunde.',
          '1 Kilohertz entspricht 1000 Hertz.'
        ]
      }
    }
  },
  buttons: {
    convert: 'Konvertieren',
    clear: 'Löschen',
    swap: 'Tauschen',
    copy: 'Kopieren'
  },
  messages: {
    copied: 'Kopiert!',
    error: 'Ein Fehler ist aufgetreten',
    invalidNumber: 'Bitte geben Sie eine gültige Zahl ein',
    selectUnit: 'Bitte wählen Sie eine Einheit',
    conversionError: 'Konvertierungsfehler',
    invalidTemperature: 'Ungültiger Temperaturwert'
  },
  converter: {
    title: 'Einheitenumrechner',
    description: 'Online-Tool zur Einheitenumrechnung',
    from: 'Von',
    to: 'Zu',
    value: 'Wert',
    result: 'Ergebnis',
    instructions: {
      title: 'Anleitung',
      steps: [
        'Geben Sie den Wert ein, den Sie konvertieren möchten',
        'Wählen Sie die Einheit des Eingabewerts',
        'Das System berechnet und zeigt automatisch die entsprechenden Werte an',
        'Klicken Sie auf ein beliebiges Ergebnis, um den Wert schnell zu kopieren'
      ]
    },
    limitations: {
      title: 'Einschränkungen',
      items: [
        'Unterstützt bis zu 20 Ziffern (einschließlich Dezimalpunkt)',
        'Bis zu 10 Dezimalstellen',
        'Sehr große oder kleine Zahlen werden in wissenschaftlicher Notation angezeigt'
      ]
    }
  },
  errors: {
    invalidInput: 'Ungültige Eingabe',
    invalidFormat: 'Ungültiges Format',
    conversionFailed: 'Konvertierung fehlgeschlagen',
    copyFailed: 'Kopieren fehlgeschlagen'
  },
  footer: {
    about: 'Über uns',
    description: 'Ein leistungsstarkes Online-Tool zur Einheitenumrechnung.',
    contact: 'Kontakt',
    email: 'support@metric-converter.com',
    legal: 'Rechtliches',
    changelog: 'Änderungsprotokoll'
  }
};

export default de; 