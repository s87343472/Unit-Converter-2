import type { Translation } from '../types'

const de: Translation = {
  common: {
    title: 'Einheitenumrechner',
    description: 'Ein leistungsfähiges Online-Tool zur Umrechnung verschiedener Einheiten.',
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
    selectUnit: 'Einheit auswählen'
  },
  units: {
    length: {
      title: 'Länge',
      description: 'Umrechnung von linearen Messeinheiten (ISO 31-1)'
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
      description: 'Umrechnung von Dichteeinheiten (ISO 31-3)'
    },
    flow: {
      title: 'Durchfluss',
      description: 'Umrechnung von Durchflussraten'
    },
    torque: {
      title: 'Drehmoment',
      description: 'Umrechnung von Drehmomenteinheiten (ISO 31-3)'
    },
    data: {
      title: 'Datenspeicher',
      description: 'Umrechnung von Datenspeichereinheiten (IEC 60027)'
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
    selectUnit: 'Bitte wählen Sie beide Einheiten'
  }
}

export default de 