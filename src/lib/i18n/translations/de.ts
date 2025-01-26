import type { Translation } from '../types'

const de: Translation = {
  common: {
    title: 'Einheitenumrechner',
    description: 'Ein leistungsfähiges Online-Tool zur Umrechnung verschiedener Einheiten.',
    loading: 'Wird geladen...',
    error: 'Fehler',
    copy: 'Kopieren',
    copied: 'Kopiert',
    settings: 'Einstellungen',
    language: 'Sprache',
    theme: 'Design',
    about: 'Über',
    contact: 'Kontakt',
    home: 'Startseite',
    selectType: 'Umrechnungstyp auswählen',
    selectLanguage: 'Sprache auswählen',
    pageNotFound: 'Seite nicht gefunden',
    pageNotFoundDesc: 'Entschuldigung, die gesuchte Seite existiert nicht.',
    backToHome: 'Zurück zur Startseite',
    copyright: 'Alle Rechte vorbehalten.',
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
        input: 'Geben Sie den umzurechnenden Wert ein',
        select: 'Wählen Sie die Einheit des Eingabewerts',
        auto: 'Das System berechnet und zeigt automatisch die entsprechenden Werte in anderen Einheiten an',
        copy: 'Klicken Sie auf ein Ergebnis, um den Wert mit Einheit schnell zu kopieren'
      },
      features: {
        title: 'Funktionen',
        range: {
          title: 'Unterstützter Wertebereich',
          description: 'Unterstützt bis zu 20 Stellen (einschließlich Dezimalpunkt) mit bis zu 10 Dezimalstellen. Für sehr große oder kleine Zahlen wird automatisch die wissenschaftliche Notation verwendet.'
        },
        copy: {
          title: 'Kopierfunktion',
          description: 'Klicken Sie auf ein Umrechnungsergebnis, um den Wert und die Einheit zum einfachen Einfügen zu kopieren.'
        },
        paste: {
          title: 'Einfügefunktion',
          description: 'Unterstützt das Einfügen von Werten mit Einheiten, das System extrahiert automatisch den numerischen Teil.'
        }
      }
    },
    customOrder: 'Benutzerdefinierte Reihenfolge',
    byName: 'Nach Name',
    byCreatedTime: 'Nach Erstellungszeit',
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
    enterFavoriteName: 'Namen für diesen Favoriten eingeben',
    favoriteNamePlaceholder: 'z.B. Meter zu Fuß',
    showFavorites: 'Favoriten anzeigen',
    hideFavorites: 'Favoriten ausblenden',
    from: 'Von',
    to: 'Nach',
    selectUnit: 'Einheit auswählen',
    inputValue: 'Eingabewert',
    convertResult: 'Ergebnis',
    searchUnit: 'Einheiten suchen...',
    length: 'Länge',
    conversionHistory: 'Umrechnungsverlauf',
    clearHistory: 'Verlauf löschen',
    confirmClear: 'Sind Sie sicher, dass Sie den gesamten Verlauf löschen möchten?',
    delete: 'Löschen'
  },
  units: {
    length: {
      title: 'Länge',
      description: 'Umrechnung von Längeneinheiten (ISO 31-1)',
      units: {
        meter: 'Meter',
        kilometer: 'Kilometer',
        centimeter: 'Zentimeter',
        millimeter: 'Millimeter',
        inch: 'Zoll',
        foot: 'Fuß',
        yard: 'Yard',
        mile: 'Meile',
        light_year: 'Lichtjahr',
        astronomical_unit: 'Astronomische Einheit',
        decimeter: 'Dezimeter',
        micrometer: 'Mikrometer',
        nanometer: 'Nanometer',
        picometer: 'Pikometer'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Ein Lichtjahr ist keine Zeiteinheit, sondern die Strecke, die Licht in einem Jahr zurücklegt.',
          'Die Astronomische Einheit (AE) basiert auf dem durchschnittlichen Abstand zwischen Erde und Sonne.',
          'Der Meter wurde ursprünglich als ein Zehnmillionstel der Entfernung vom Nordpol zum Äquator definiert.',
          'Heute wird der Meter über die Lichtgeschwindigkeit im Vakuum definiert.'
        ]
      }
    },
    area: {
      title: 'Fläche',
      description: 'Umrechnung von Flächenmesseinheiten (ISO 31-1)'
    },
    volume: {
      title: 'Volumen',
      description: 'Umrechnung von Raummesseinheiten (ISO 31-1)'
    },
    weight: {
      title: 'Gewicht',
      description: 'Umrechnung von Masseinheiten (ISO 31-3)'
    },
    time: {
      title: 'Zeit',
      description: 'Umrechnung von Zeiteinheiten (ISO 31-1)'
    },
    temperature: {
      title: 'Temperatur',
      description: 'Umrechnung von Temperatureinheiten (ISO 31-4)'
    },
    speed: {
      title: 'Geschwindigkeit',
      description: 'Umrechnung von Geschwindigkeitseinheiten (ISO 31-3)'
    },
    angle: {
      title: 'Winkel',
      description: 'Umrechnung von Winkeleinheiten (ISO 31-1)'
    },
    pressure: {
      title: 'Druck',
      description: 'Umrechnung von Druckeinheiten (ISO 31-3)'
    },
    power: {
      title: 'Leistung',
      description: 'Umrechnung von Leistungseinheiten (ISO 31-3)'
    },
    energy: {
      title: 'Energie',
      description: 'Umrechnung von Energieeinheiten (ISO 31-3)'
    },
    force: {
      title: 'Kraft',
      description: 'Umrechnung von Krafteinheiten (ISO 31-3)'
    },
    density: {
      title: 'Dichte',
      description: 'Umrechnung von Dichteeinheiten (ISO 31-3)',
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
          'Wasser hat bei Raumtemperatur eine Dichte von etwa 1 Gramm pro Kubikzentimeter.',
          'Quecksilber ist die dichteste Flüssigkeit bei Raumtemperatur mit einer Dichte von 13,5 g/cm³.',
          'Die Luftdichte auf Meereshöhe beträgt etwa 1,225 kg/m³.',
          'Die Dichte ändert sich mit Temperatur und Druck.'
        ]
      }
    },
    flow: {
      title: 'Durchfluss',
      description: 'Umrechnung von Durchflussraten',
      units: {
        cubicMeterPerSecond: 'Kubikmeter pro Sekunde',
        literPerSecond: 'Liter pro Sekunde',
        gallonPerMinute: 'Gallonen pro Minute',
        cubicFootPerMinute: 'Kubikfuß pro Minute',
        literPerMinute: 'Liter pro Minute',
        cubicMeterPerHour: 'Kubikmeter pro Stunde'
      }
    },
    torque: {
      title: 'Drehmoment',
      description: 'Umrechnung von Drehmomenteinheiten (ISO 31-3)',
      units: {
        newtonMeter: 'Newtonmeter',
        poundFoot: 'Pfund-Fuß',
        kilogramMeter: 'Kilogramm-Meter',
        newtonCentimeter: 'Newtonzentimeter',
        kilogramForceMeter: 'Kilogramm-Kraft-Meter',
        poundInch: 'Pfund-Zoll'
      }
    },
    data: {
      title: 'Datenspeicher',
      description: 'Umrechnung von Datenspeichereinheiten (IEC 60027)',
      units: {
        bit: 'Bit',
        byte: 'Byte',
        kilobyte: 'Kilobyte',
        megabyte: 'Megabyte',
        gigabyte: 'Gigabyte',
        terabyte: 'Terabyte',
        petabyte: 'Petabyte',
        kibibyte: 'Kibibyte',
        mebibyte: 'Mebibyte',
        gibibyte: 'Gibibyte',
        tebibyte: 'Tebibyte'
      }
    },
    data_rate: {
      title: 'Datenübertragung',
      description: 'Umrechnung von Datenübertragungsraten (ISO/IEC 80000)'
    },
    currency: {
      title: 'Währung',
      description: 'Umrechnung zwischen verschiedenen Währungen (ISO 4217)'
    },
    cooking: {
      title: 'Kochmaße',
      description: 'Umrechnung von Kochmaßeinheiten'
    },
    numeral: {
      title: 'Zahlensysteme',
      description: 'Umrechnung zwischen verschiedenen Zahlensystemen'
    },
    frequency: {
      title: 'Frequenz',
      description: 'Umrechnung von Frequenzeinheiten',
      units: {
        hertz: 'Hertz',
        kilohertz: 'Kilohertz',
        megahertz: 'Megahertz',
        gigahertz: 'Gigahertz',
        cycles_per_second: 'Schwingungen pro Sekunde',
        rpm: 'Umdrehungen pro Minute',
        bpm: 'Schläge pro Minute'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Die Einheit Hertz ist nach dem deutschen Physiker Heinrich Hertz benannt.',
          'Die menschliche Hörschwelle liegt zwischen 20 Hz und 20 kHz.',
          'Moderne CPUs arbeiten im Gigahertz-Bereich.',
          'Das menschliche Herz schlägt normalerweise mit 60-100 BPM.'
        ]
      }
    }
  },
  buttons: {
    convert: 'Umrechnen',
    clear: 'Löschen',
    swap: 'Tauschen',
    copy: 'Kopieren'
  },
  messages: {
    copied: 'In die Zwischenablage kopiert',
    error: 'Ein Fehler ist aufgetreten',
    invalidNumber: 'Bitte geben Sie eine gültige Zahl ein',
    selectUnit: 'Bitte wählen Sie beide Einheiten',
    conversionError: 'Fehler bei der Umrechnung',
    invalidTemperature: 'Temperatur kann nicht unter dem absoluten Nullpunkt liegen'
  }
}

export default de 