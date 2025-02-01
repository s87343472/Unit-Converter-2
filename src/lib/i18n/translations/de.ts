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
      description: 'Umrechnung von Flächenmesseinheiten (ISO 31-1)',
      units: {
        square_meter: 'Quadratmeter',
        square_kilometer: 'Quadratkilometer',
        hectare: 'Hektar',
        are: 'Ar',
        square_decimeter: 'Quadratdezimeter',
        square_centimeter: 'Quadratzentimeter',
        square_millimeter: 'Quadratmillimeter',
        square_mile: 'Quadratmeile',
        acre: 'Acre',
        square_yard: 'Quadratyard',
        square_foot: 'Quadratfuß',
        square_inch: 'Quadratzoll'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Ein Hektar entspricht genau 10.000 Quadratmetern und wurde ursprünglich für die Landvermessung entwickelt.',
          'Der Ar (100 m²) war die Basis für die Entwicklung des Hektars.',
          'Ein Acre basiert historisch auf der Fläche, die ein Ochsengespann an einem Tag pflügen konnte.',
          'Eine Quadratmeile entspricht 640 Acres.',
          'In der Landwirtschaft und Forstwirtschaft ist der Hektar die am häufigsten verwendete Flächeneinheit.'
        ]
      }
    },
    volume: {
      title: 'Volumen',
      description: 'Umrechnung von Raummesseinheiten (ISO 31-1)',
      units: {
        cubic_meter: 'Kubikmeter',
        cubic_kilometer: 'Kubikkilometer',
        cubic_decimeter: 'Kubikdezimeter',
        cubic_centimeter: 'Kubikzentimeter',
        cubic_millimeter: 'Kubikmillimeter',
        liter: 'Liter',
        milliliter: 'Milliliter',
        cubic_yard: 'Kubikyard',
        cubic_foot: 'Kubikfuß',
        cubic_inch: 'Kubikzoll',
        gallon_uk: 'Gallone (GB)',
        gallon_us: 'Gallone (US)',
        quart_uk: 'Quart (GB)',
        quart_us: 'Quart (US)',
        pint_uk: 'Pint (GB)',
        pint_us: 'Pint (US)',
        fluid_ounce_us: 'Flüssigunze (US)',
        fluid_ounce_uk: 'Flüssigunze (GB)'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Ein Liter entspricht genau einem Kubikdezimeter (1000 Kubikzentimeter).',
          'Britische und amerikanische Volumeneinheiten unterscheiden sich: 1 britische Gallone = 4,546 Liter, 1 US-Gallone = 3,785 Liter.',
          'Der Kubikmeter ist die Basiseinheit für Volumen im internationalen Einheitensystem (SI).',
          'In der Getränkeindustrie wird häufig mit Millilitern und Litern gearbeitet.',
          'Für wissenschaftliche Messungen werden meist metrische Einheiten verwendet.'
        ]
      }
    },
    weight: {
      title: 'Gewicht',
      description: 'Umrechnung von Masseinheiten (ISO 31-3)',
      units: {
        kilogram: 'Kilogramm',
        gram: 'Gramm',
        milligram: 'Milligramm',
        metric_ton: 'Metrische Tonne',
        pound: 'Pfund',
        ounce: 'Unze',
        carat: 'Karat',
        atomic_mass_unit: 'Atomare Masseneinheit',
        stone: 'Stone',
        long_ton: 'Long Ton (GB)',
        short_ton: 'Short Ton (US)',
        grain: 'Grain'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Das Kilogramm war bis 2019 die letzte SI-Basiseinheit, die durch einen physischen Prototyp definiert wurde.',
          'Ein Karat entspricht genau 0,2 Gramm und wird hauptsächlich für Edelsteine verwendet.',
          'Die atomare Masseneinheit wird in der Chemie und Physik verwendet und entspricht 1/12 der Masse eines Kohlenstoff-12-Atoms.',
          'Das britische Stone (14 Pfund) wird noch heute im Vereinigten Königreich für das Körpergewicht verwendet.',
          'Die metrische Tonne (1000 kg) ist die am häufigsten verwendete Gewichtseinheit im internationalen Handel.'
        ]
      }
    },
    time: {
      title: 'Zeit',
      description: 'Umrechnung von Zeiteinheiten (ISO 31-1)',
      units: {
        second: 'Sekunde',
        minute: 'Minute',
        hour: 'Stunde',
        day: 'Tag',
        week: 'Woche',
        month: 'Monat',
        year: 'Jahr',
        decade: 'Jahrzehnt',
        century: 'Jahrhundert',
        millennium: 'Jahrtausend',
        millisecond: 'Millisekunde',
        microsecond: 'Mikrosekunde',
        nanosecond: 'Nanosekunde',
        picosecond: 'Pikosekunde'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Die Sekunde ist durch 9.192.631.770 Schwingungen des Cäsium-133-Atoms definiert.',
          'Ein Jahr hat genau 365,242190419 Tage, was der Grund für Schaltjahre ist.',
          'Die Genauigkeit moderner Atomuhren ist so hoch, dass sie in einer Million Jahren nur etwa eine Sekunde abweichen.',
          'Die alten Ägypter teilten den Tag bereits in 24 Stunden ein.',
          'Die Verwendung von Millisekunden ist besonders in der Computertechnik und Wissenschaft wichtig.'
        ]
      }
    },
    temperature: {
      title: 'Temperatur',
      description: 'Umrechnung von Temperatureinheiten (ISO 31-4)',
      units: {
        celsius: 'Celsius',
        fahrenheit: 'Fahrenheit',
        kelvin: 'Kelvin',
        rankine: 'Rankine',
        reaumur: 'Réaumur',
        gas_mark: 'Gas Mark',
        delisle: 'Delisle',
        newton: 'Newton'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Der absolute Nullpunkt liegt bei -273,15°C oder 0 Kelvin.',
          'Die Celsius-Skala wurde ursprünglich mit 0°C als Siedepunkt und 100°C als Gefrierpunkt von Wasser definiert, wurde aber später umgekehrt.',
          'Die Kelvin-Skala ist die einzige Temperaturskala, die keine negativen Werte hat.',
          'Die Fahrenheit-Skala wurde so definiert, dass 0°F der tiefsten Temperatur entspricht, die Daniel Fahrenheit im Winter 1708/1709 messen konnte.',
          'Die Réaumur-Skala war im 18. und 19. Jahrhundert in Europa weit verbreitet.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Raumtemperatur liegt typischerweise bei 20-22°C (68-72°F).',
          'Körpertemperatur beträgt etwa 37°C (98,6°F).',
          'Wasser gefriert bei 0°C (32°F) und siedet bei 100°C (212°F) auf Meereshöhe.',
          'Für wissenschaftliche Berechnungen wird meist die Kelvin-Skala verwendet.'
        ]
      }
    },
    speed: {
      title: 'Geschwindigkeit',
      description: 'Umrechnung von Geschwindigkeitseinheiten (ISO 31-3)',
      units: {
        meter_per_second: 'Meter pro Sekunde',
        kilometer_per_hour: 'Kilometer pro Stunde',
        mile_per_hour: 'Meilen pro Stunde',
        knot: 'Knoten',
        foot_per_second: 'Fuß pro Sekunde',
        mach: 'Mach',
        light_speed: 'Lichtgeschwindigkeit',
        kilometer_per_second: 'Kilometer pro Sekunde',
        mile_per_second: 'Meilen pro Sekunde'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Die Lichtgeschwindigkeit beträgt exakt 299.792.458 Meter pro Sekunde im Vakuum.',
          'Ein Knoten entspricht einer Seemeile pro Stunde und wird hauptsächlich in der Schifffahrt und Luftfahrt verwendet.',
          'Die Mach-Zahl ist das Verhältnis der Geschwindigkeit eines Objekts zur lokalen Schallgeschwindigkeit.',
          'Die Schallgeschwindigkeit in Luft beträgt etwa 343 Meter pro Sekunde bei 20°C.',
          'Geschwindigkeitsbegrenzungen auf deutschen Autobahnen sind meist freiwillig, die empfohlene Richtgeschwindigkeit beträgt 130 km/h.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Typische Geschwindigkeiten:\n  - Fußgänger: 4-6 km/h\n  - Fahrrad: 15-25 km/h\n  - Auto in der Stadt: 50 km/h\n  - Flugzeug: 800-900 km/h',
          'Umrechnung zwischen häufigen Einheiten:\n  - 1 m/s ≈ 3,6 km/h\n  - 1 Knoten ≈ 1,852 km/h\n  - 1 Meile/h ≈ 1,609 km/h',
          'Die Mach-Zahl variiert mit der Temperatur und Höhe, da sich die Schallgeschwindigkeit ändert.'
        ]
      }
    },
    angle: {
      title: 'Winkel',
      description: 'Umrechnung von Winkeleinheiten (ISO 31-1)',
      units: {
        degree: 'Grad',
        radian: 'Radiant',
        gradian: 'Gon',
        arcminute: 'Bogenminute',
        arcsecond: 'Bogensekunde',
        milliradian: 'Milliradiant',
        revolution: 'Umdrehung',
        quadrant: 'Quadrant',
        sextant: 'Sextant'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Ein vollständiger Kreis hat 360 Grad, 2π Radiant oder 400 Gon.',
          'Die Verwendung von 360 Grad geht auf die Babylonier zurück, die ein Sexagesimalsystem (Basis 60) verwendeten.',
          'Der Radiant ist die SI-Einheit für Winkel und ist definiert als der Winkel, bei dem der Kreisbogen gleich dem Radius ist.',
          'Bogenminuten und Bogensekunden werden häufig in der Astronomie verwendet.',
          'Gon (oder Neugrad) wurde während der französischen Revolution eingeführt und teilt den rechten Winkel in 100 Teile.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Häufige Winkel:\n  - Rechter Winkel: 90° = π/2 rad = 100 gon\n  - Gestreckter Winkel: 180° = π rad = 200 gon\n  - Vollwinkel: 360° = 2π rad = 400 gon',
          'Umrechnung zwischen Grad und Radiant:\n  - 1° = π/180 rad ≈ 0,017453 rad\n  - 1 rad = 180°/π ≈ 57,29578°',
          'In der Trigonometrie werden meist Radiant verwendet, da dies die Formeln vereinfacht.'
        ]
      }
    },
    pressure: {
      title: 'Druck',
      description: 'Umrechnung von Druckeinheiten (ISO 31-3)',
      units: {
        pascal: 'Pascal',
        kilopascal: 'Kilopascal',
        megapascal: 'Megapascal',
        bar: 'Bar',
        millibar: 'Millibar',
        atmosphere: 'Atmosphäre',
        torr: 'Torr',
        millimeter_of_mercury: 'Millimeter Quecksilbersäule',
        pound_per_square_inch: 'Pfund pro Quadratzoll',
        inch_of_mercury: 'Zoll Quecksilbersäule',
        inch_of_water: 'Zoll Wassersäule',
        kilopound_per_square_inch: 'Kilopfund pro Quadratzoll',
        centimeter_of_water: 'Zentimeter Wassersäule'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Ein Pascal ist definiert als ein Newton pro Quadratmeter (N/m²).',
          'Der normale Atmosphärendruck auf Meereshöhe beträgt etwa 1013,25 hPa oder 1 atm.',
          'Die Einheit Torr ist nach Evangelista Torricelli benannt, der das Quecksilberbarometer erfand.',
          'In der Medizin wird der Blutdruck traditionell in Millimeter Quecksilbersäule (mmHg) gemessen.',
          'Die Meteorologie verwendet hauptsächlich Hektopascal (hPa) oder Millibar (mbar) für Luftdruck.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Atmosphärischer Druck:\n  - Normaldruck auf Meereshöhe: 1013,25 hPa\n  - Pro 100 m Höhenzunahme sinkt der Luftdruck um etwa 12 hPa',
          'Medizinische Werte:\n  - Normaler Blutdruck: 120/80 mmHg\n  - Reifendruck: 2-3 bar\n  - Dampfkesseldruck: mehrere MPa',
          'Technische Anwendungen:\n  - Vakuum: < 1 Pa\n  - Hydrauliksysteme: 20-400 bar\n  - Pneumatiksysteme: 6-12 bar'
        ]
      }
    },
    power: {
      title: 'Leistung',
      description: 'Umrechnung von Leistungseinheiten (ISO 31-3)',
      units: {
        watt: 'Watt',
        kilowatt: 'Kilowatt',
        megawatt: 'Megawatt',
        gigawatt: 'Gigawatt',
        horsepower_mechanical: 'Mechanische Pferdestärke',
        horsepower_metric: 'Metrische Pferdestärke',
        horsepower_electric: 'Elektrische Pferdestärke',
        horsepower_boiler: 'Kessel-Pferdestärke',
        btu_per_hour: 'BTU pro Stunde',
        ton_refrigeration: 'Kühltonnen',
        kilocalorie_per_hour: 'Kilokalorien pro Stunde',
        joule_per_second: 'Joule pro Sekunde'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Das Watt wurde nach James Watt benannt, dem Erfinder der modernen Dampfmaschine.',
          'Eine Pferdestärke (PS) entspricht etwa 735,5 Watt.',
          'Eine Kühltonne entspricht der Kühlleistung, die benötigt wird, um eine Tonne Eis in 24 Stunden zu schmelzen.',
          'Moderne Windkraftanlagen können Leistungen von mehreren Megawatt erreichen.',
          'Ein durchschnittlicher Haushalt in Deutschland verbraucht etwa 3.500 kWh pro Jahr.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Haushaltsgeräte:\n  - Wasserkocher: 2000-3000 W\n  - Mikrowelle: 600-1200 W\n  - Kühlschrank: 100-200 W\n  - LED-Lampe: 5-15 W',
          'Fahrzeuge:\n  - Kleinwagen: 50-100 PS\n  - Sportwagen: 200-500 PS\n  - E-Bike: 250 W\n  - Elektroauto: 100-250 kW',
          'Kraftwerke:\n  - Kleines Wasserkraftwerk: 1-10 MW\n  - Windkraftanlage: 2-5 MW\n  - Kernkraftwerk: 1000-1500 MW'
        ]
      }
    },
    energy: {
      title: 'Energie',
      description: 'Umrechnung von Energieeinheiten (ISO 31-3)',
      units: {
        joule: 'Joule',
        kilojoule: 'Kilojoule',
        megajoule: 'Megajoule',
        calorie: 'Kalorie',
        kilocalorie: 'Kilokalorie',
        watt_hour: 'Wattstunde',
        kilowatt_hour: 'Kilowattstunde',
        megawatt_hour: 'Megawattstunde',
        electronvolt: 'Elektronenvolt',
        british_thermal_unit: 'Britische Wärmeeinheit',
        therm: 'Therm',
        foot_pound_force: 'Fuß-Pfund-Kraft',
        erg: 'Erg',
        ton_of_tnt: 'TNT-Äquivalent'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Ein Joule ist die Energie, die benötigt wird, um einen Körper mit einer Kraft von einem Newton einen Meter weit zu bewegen.',
          'Die Kalorie wurde ursprünglich definiert als die Energie, die benötigt wird, um ein Gramm Wasser um 1°C zu erwärmen.',
          'Ein Elektronenvolt ist die Energie, die ein Elektron beim Durchlaufen einer Spannungsdifferenz von einem Volt gewinnt.',
          'Die TNT-Äquivalent-Tonne wird verwendet, um die Energie von Kernwaffen zu vergleichen.',
          'Die Kilowattstunde ist die am häufigsten verwendete Einheit für den Stromverbrauch in Haushalten.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Nahrungsenergie:\n  - Ein Apfel: etwa 50 kcal\n  - Eine Tafel Schokolade: etwa 550 kcal\n  - Täglicher Bedarf: 2000-2500 kcal',
          'Stromverbrauch:\n  - Monatlicher Haushaltsverbrauch: 250-350 kWh\n  - Jahresverbrauch E-Auto: 2000-4000 kWh\n  - Industrieanlage: mehrere MWh pro Tag',
          'Wissenschaftliche Anwendungen:\n  - Chemische Bindungen: wenige eV\n  - Kernreaktionen: Millionen eV\n  - Teilchenbeschleuniger: Milliarden eV'
        ]
      }
    },
    force: {
      title: 'Kraft',
      description: 'Umrechnung von Krafteinheiten (ISO 31-3)',
      units: {
        newton: 'Newton',
        kilonewton: 'Kilonewton',
        meganewton: 'Meganewton',
        dyne: 'Dyn',
        kilogram_force: 'Kilopond',
        pound_force: 'Pfund-Kraft',
        ounce_force: 'Unzen-Kraft',
        ton_force: 'Tonnen-Kraft',
        gram_force: 'Gramm-Kraft',
        poundal: 'Poundal',
        kip: 'Kip'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Das Newton ist die SI-Einheit der Kraft und entspricht der Kraft, die benötigt wird, um 1 kg in einer Sekunde auf 1 m/s zu beschleunigen.',
          'Das Kilopond (kp) ist die Gewichtskraft von einem Kilogramm unter Normfallbeschleunigung.',
          'Die Dyn ist die CGS-Einheit der Kraft und entspricht 10⁻⁵ Newton.',
          'Die Poundal ist eine im angelsächsischen Raum verwendete Krafteinheit.',
          'Der Kip ist eine in der amerikanischen Bauindustrie verwendete Einheit und entspricht 1000 Pfund-Kraft.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Grundlegende Umrechnungen:\n  - 1 N = 0,102 kp\n  - 1 kp = 9,81 N\n  - 1 lbf = 4,448 N\n  - 1 kN = 1000 N',
          'Alltägliche Kräfte:\n  - Gewicht eines Apfels: ~1 N\n  - Handkraft: 100-500 N\n  - Autobremse: 1-2 kN',
          'Technische Anwendungen:\n  - Aufzugsseil: 5-50 kN\n  - Raketenschub: mehrere MN\n  - Brückenbelastung: mehrere MN'
        ]
      }
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
        cubic_meter_per_second: 'Kubikmeter pro Sekunde',
        liter_per_second: 'Liter pro Sekunde',
        gallon_per_minute: 'Gallonen pro Minute',
        cubic_foot_per_minute: 'Kubikfuß pro Minute',
        liter_per_minute: 'Liter pro Minute',
        cubic_meter_per_hour: 'Kubikmeter pro Stunde',
        gallon_per_hour: 'Gallonen pro Stunde',
        milliliter_per_second: 'Milliliter pro Sekunde',
        milliliter_per_minute: 'Milliliter pro Minute',
        cubic_foot_per_second: 'Kubikfuß pro Sekunde'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Durchflussraten sind besonders wichtig in der Prozessindustrie und Hydraulik.',
          'Die Messung des Durchflusses kann auf verschiedenen physikalischen Prinzipien basieren.',
          'In der Wasserversorgung wird der Durchfluss oft in Kubikmeter pro Stunde gemessen.',
          'Bei Pumpen wird die Förderleistung häufig in Liter pro Minute angegeben.',
          'Die Wahl der Durchflusseinheit hängt von der Größenordnung und dem Anwendungsbereich ab.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Wasserversorgung:\n  - Hausanschluss: 1-2 m³/h\n  - Industrieanschluss: 10-100 m³/h\n  - Wasserwerk: 1000+ m³/h',
          'Pumpen:\n  - Aquariumpumpe: 100-1000 ml/min\n  - Gartenpumpe: 50-100 l/min\n  - Industriepumpe: 10-100 m³/h',
          'Gasströme:\n  - Atemluft: 6-8 l/min\n  - Industriegas: 100-1000 m³/h\n  - Prozessanlage: mehrere 1000 m³/h'
        ]
      }
    },
    torque: {
      title: 'Drehmoment',
      description: 'Umrechnung von Drehmomenteinheiten (ISO 31-3)',
      units: {
        newton_meter: 'Newtonmeter',
        newton_centimeter: 'Newtonzentimeter',
        kilogram_force_meter: 'Kilogramm-Kraft-Meter',
        pound_foot: 'Pfund-Fuß',
        pound_inch: 'Pfund-Zoll',
        ounce_inch: 'Unzen-Zoll',
        kilonewton_meter: 'Kilonewtonmeter',
        gram_force_centimeter: 'Gramm-Kraft-Zentimeter',
        dyne_centimeter: 'Dyn-Zentimeter'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Das Drehmoment ist das Produkt aus Kraft und Hebelarm.',
          'In der Automobilindustrie wird das Motordrehmoment oft in Newtonmeter angegeben.',
          'Bei Schraubverbindungen ist das richtige Anzugsdrehmoment entscheidend für die Sicherheit.',
          'Das Drehmoment ist eine vektorielle Größe und hat eine Richtung.',
          'In der Werkstatt werden Drehmomentschlüssel zur präzisen Einstellung des Drehmoments verwendet.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Fahrzeuge:\n  - Kleinwagen: 100-200 Nm\n  - Sportwagen: 400-800 Nm\n  - LKW: 1000-3000 Nm',
          'Schraubverbindungen:\n  - Fahrradschrauben: 5-40 Nm\n  - Radschrauben: 100-150 Nm\n  - Maschinenschrauben: nach Spezifikation',
          'Werkzeuge:\n  - Handschraubendreher: 1-5 Nm\n  - Drehmomentschlüssel: 20-200 Nm\n  - Industriewerkzeuge: bis 1000 Nm'
        ]
      }
    },
    data: {
      title: 'Datenspeicher',
      description: 'Umrechnung von Datenspeichereinheiten (IEC 60027)',
      units: {
        bit: 'Bit',
        byte: 'Byte',
        kilobyte: 'Kilobyte (KB)',
        megabyte: 'Megabyte (MB)',
        gigabyte: 'Gigabyte (GB)',
        terabyte: 'Terabyte (TB)',
        petabyte: 'Petabyte (PB)',
        kibibyte: 'Kibibyte (KiB)',
        mebibyte: 'Mebibyte (MiB)',
        gibibyte: 'Gibibyte (GiB)',
        tebibyte: 'Tebibyte (TiB)',
        pebibyte: 'Pebibyte (PiB)'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Ein Byte besteht aus 8 Bits und kann 256 verschiedene Werte darstellen.',
          'Der Unterschied zwischen KB und KiB liegt in der Basis: KB verwendet 1000 als Basis, KiB verwendet 1024.',
          'Festplattenhersteller verwenden meist dezimale Präfixe (KB, MB, GB), während Betriebssysteme binäre Präfixe (KiB, MiB, GiB) verwenden.',
          'Ein typisches digitales Foto kann zwischen 2 und 10 MB groß sein.',
          'Moderne Datenzentren können Speicherkapazitäten im Petabyte-Bereich haben.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Speichermedien:\n  - USB-Stick: 8-256 GB\n  - SSD: 256 GB-2 TB\n  - Externe Festplatte: 1-18 TB',
          'Dateigröße:\n  - Textdokument: wenige KB\n  - MP3-Lied: 3-10 MB\n  - HD-Film: 4-8 GB\n  - 4K-Film: 50-100 GB',
          'Arbeitsspeicher:\n  - Smartphone: 4-12 GB\n  - Laptop: 8-32 GB\n  - Gaming-PC: 16-128 GB\n  - Server: 64 GB-2 TB'
        ]
      }
    },
    data_rate: {
      title: 'Datenübertragung',
      description: 'Umrechnung von Datenübertragungsraten (ISO/IEC 80000)',
      units: {
        bit_per_second: 'Bit pro Sekunde (bps)',
        kilobit_per_second: 'Kilobit pro Sekunde (kbps)',
        megabit_per_second: 'Megabit pro Sekunde (Mbps)',
        gigabit_per_second: 'Gigabit pro Sekunde (Gbps)',
        terabit_per_second: 'Terabit pro Sekunde (Tbps)',
        byte_per_second: 'Byte pro Sekunde (B/s)',
        kilobyte_per_second: 'Kilobyte pro Sekunde (KB/s)',
        megabyte_per_second: 'Megabyte pro Sekunde (MB/s)',
        gigabyte_per_second: 'Gigabyte pro Sekunde (GB/s)',
        terabyte_per_second: 'Terabyte pro Sekunde (TB/s)'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Netzwerkgeschwindigkeiten werden üblicherweise in Bit pro Sekunde angegeben, während Dateiübertragungen oft in Byte pro Sekunde gemessen werden.',
          'Ein Byte entspricht 8 Bit, daher ist eine 100 Mbps Verbindung etwa 12,5 MB/s schnell.',
          '5G-Netzwerke können theoretisch Geschwindigkeiten von bis zu 20 Gbps erreichen.',
          'Die tatsächliche Übertragungsrate ist oft niedriger als die theoretische maximale Geschwindigkeit.',
          'Moderne Glasfaserverbindungen können Geschwindigkeiten im Terabit-Bereich erreichen.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Internet-Geschwindigkeiten:\n  - DSL: 16-250 Mbps\n  - Kabel: 100-1000 Mbps\n  - Glasfaser: 1-10 Gbps\n  - 5G: bis zu 20 Gbps',
          'Lokale Netzwerke:\n  - WLAN (WiFi 6): bis zu 9,6 Gbps\n  - Ethernet: 100 Mbps-100 Gbps\n  - USB 3.0: 5 Gbps\n  - USB 4.0: 40 Gbps',
          'Speichergeräte:\n  - SSD Lesen: 500-7000 MB/s\n  - HDD Lesen: 80-160 MB/s\n  - SD-Karte: 10-300 MB/s'
        ]
      }
    },
    currency: {
      title: 'Währung',
      description: 'Umrechnung zwischen verschiedenen Währungen (ISO 4217)',
      units: {
        eur: 'Euro (EUR)',
        usd: 'US-Dollar (USD)',
        gbp: 'Britisches Pfund (GBP)',
        jpy: 'Japanischer Yen (JPY)',
        cny: 'Chinesischer Yuan (CNY)',
        chf: 'Schweizer Franken (CHF)',
        aud: 'Australischer Dollar (AUD)',
        cad: 'Kanadischer Dollar (CAD)',
        sek: 'Schwedische Krone (SEK)',
        nok: 'Norwegische Krone (NOK)',
        dkk: 'Dänische Krone (DKK)',
        inr: 'Indische Rupie (INR)',
        btc: 'Bitcoin (BTC)',
        eth: 'Ethereum (ETH)'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Der Euro wurde 1999 als Buchgeld und 2002 als Bargeld eingeführt.',
          'Der US-Dollar ist die am häufigsten gehandelte Währung der Welt.',
          'Der Schweizer Franken gilt als "sicherer Hafen" in Krisenzeiten.',
          'Kryptowährungen wie Bitcoin sind dezentral organisiert und basieren auf Blockchain-Technologie.',
          'Die Wechselkurse schwanken ständig aufgrund verschiedener wirtschaftlicher und politischer Faktoren.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Hauptwährungen:\n  - EUR/USD: Wichtigster Währungsmarkt\n  - USD/JPY: Zweitwichtigster Markt\n  - GBP/USD: "Cable" genannt',
          'Kryptowährungen:\n  - Sehr volatil\n  - 24/7 Handel\n  - Dezentrale Struktur',
          'Wechselgebühren beachten:\n  - Banken: 1-3%\n  - Wechselstuben: variabel\n  - Online-Dienste: oft günstiger'
        ]
      }
    },
    cooking: {
      title: 'Kochmaße',
      description: 'Umrechnung von Kochmaßeinheiten',
      units: {
        teaspoon_metric: 'Teelöffel (metrisch)',
        teaspoon_us: 'Teelöffel (US)',
        tablespoon_metric: 'Esslöffel (metrisch)',
        tablespoon_us: 'Esslöffel (US)',
        cup_metric: 'Tasse (metrisch)',
        cup_us: 'Tasse (US)',
        cup_uk: 'Tasse (UK)',
        fluid_ounce_us: 'Flüssigunze (US)',
        fluid_ounce_uk: 'Flüssigunze (UK)',
        pint_us: 'Pint (US)',
        pint_uk: 'Pint (UK)',
        quart_us: 'Quart (US)',
        quart_uk: 'Quart (UK)',
        gallon_us: 'Gallone (US)',
        gallon_uk: 'Gallone (UK)',
        milliliter: 'Milliliter',
        liter: 'Liter',
        gram: 'Gramm',
        kilogram: 'Kilogramm',
        ounce: 'Unze',
        pound: 'Pfund'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Metrische und US-amerikanische Kochmaße unterscheiden sich: 1 US-Tasse = 237 ml, 1 metrische Tasse = 250 ml.',
          'Ein metrischer Esslöffel fasst genau 15 ml, ein metrischer Teelöffel 5 ml.',
          'Beim Backen ist die Verwendung von Gewichtsmaßen genauer als Volumenmaße.',
          'In Europa werden hauptsächlich metrische Maße verwendet, in den USA dagegen US-Maße.',
          'Die Umrechnung von Volumen in Gewicht hängt von der Dichte des Lebensmittels ab.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Grundlegende Umrechnungen:\n  - 1 EL = 3 TL\n  - 1 Tasse = 16 EL\n  - 1 Pfund = 454 g\n  - 1 Unze = 28,35 g',
          'Typische Gewichte:\n  - 1 Tasse Mehl = 120-125 g\n  - 1 Tasse Zucker = 200 g\n  - 1 Tasse Butter = 227 g',
          'Flüssigkeiten:\n  - 1 Tasse = 250 ml (metrisch)\n  - 1 EL = 15 ml (metrisch)\n  - 1 TL = 5 ml (metrisch)'
        ]
      }
    },
    numeral: {
      title: 'Zahlensysteme',
      description: 'Umrechnung zwischen verschiedenen Zahlensystemen',
      units: {
        binary: 'Binär (Basis 2)',
        octal: 'Oktal (Basis 8)',
        decimal: 'Dezimal (Basis 10)',
        hexadecimal: 'Hexadezimal (Basis 16)',
        base_3: 'Ternär (Basis 3)',
        base_4: 'Quaternär (Basis 4)',
        base_32: 'Base32',
        base_36: 'Base36',
        base_58: 'Base58',
        base_64: 'Base64'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Das Binärsystem ist die Grundlage der digitalen Datenverarbeitung, da es nur die Zustände 0 und 1 verwendet.',
          'Das Hexadezimalsystem verwendet die Ziffern 0-9 und die Buchstaben A-F und wird häufig in der Programmierung verwendet.',
          'Das Oktalsystem wird traditionell in Unix-Systemen für Dateiberechtigungen verwendet.',
          'Base64 wird häufig verwendet, um binäre Daten in ASCII-Text zu kodieren.',
          'Base58 wird in Kryptowährungen wie Bitcoin für Adressen verwendet und vermeidet verwechselbare Zeichen.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Binär zu Hexadezimal:\n  - Gruppiere Binärzahlen in 4er-Gruppen\n  - 0000 = 0, 1111 = F\n  - Beispiel: 1010 = A, 1011 = B',
          'Farben in Hex:\n  - Rot: #FF0000\n  - Grün: #00FF00\n  - Blau: #0000FF\n  - Weiß: #FFFFFF',
          'Unix-Berechtigungen:\n  - 777 (oktal) = rwxrwxrwx\n  - 644 (oktal) = rw-r--r--\n  - 755 (oktal) = rwxr-xr-x'
        ]
      }
    },
    frequency: {
      title: 'Frequenz',
      description: 'Umrechnung von Frequenzeinheiten',
      units: {
        hertz: 'Hertz (Hz)',
        kilohertz: 'Kilohertz (kHz)',
        megahertz: 'Megahertz (MHz)',
        gigahertz: 'Gigahertz (GHz)',
        terahertz: 'Terahertz (THz)',
        cycle_per_second: 'Schwingungen pro Sekunde',
        revolution_per_minute: 'Umdrehungen pro Minute (U/min)',
        beat_per_minute: 'Schläge pro Minute (BPM)',
        frame_per_second: 'Bilder pro Sekunde (FPS)',
        millihertz: 'Millihertz (mHz)',
        microhertz: 'Mikrohertz (µHz)'
      },
      knowledge: {
        title: 'Wussten Sie schon?',
        items: [
          'Die Einheit Hertz ist nach dem deutschen Physiker Heinrich Hertz benannt.',
          'Der menschliche Hörbereich liegt zwischen 20 Hz und 20 kHz.',
          'Moderne Computer-Prozessoren arbeiten im Gigahertz-Bereich.',
          'Die Netzfrequenz in Deutschland beträgt 50 Hz.',
          'Radiofrequenzen reichen von Kilohertz bis Gigahertz.'
        ]
      },
      conversion_tips: {
        title: 'Umrechnungstipps',
        items: [
          'Alltagsfrequenzen:\n  - Herzschlag: 60-100 BPM\n  - Filme: 24-30 FPS\n  - Bildschirme: 60-240 Hz\n  - Netzstrom: 50/60 Hz',
          'Technische Frequenzen:\n  - CPU: 2-5 GHz\n  - WLAN: 2,4/5 GHz\n  - UKW-Radio: 87,5-108 MHz\n  - Mobilfunk: 700 MHz-3,8 GHz',
          'Musik:\n  - Kammerton A: 440 Hz\n  - Bass: 20-200 Hz\n  - Mittelton: 200-2000 Hz\n  - Hochton: 2-20 kHz'
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
    selectUnit: 'Bitte wählen Sie eine Einheit',
    conversionError: 'Umrechnungsfehler',
    invalidTemperature: 'Temperatur kann nicht unter dem absoluten Nullpunkt liegen'
  }
}

export default de 