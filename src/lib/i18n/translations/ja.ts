import type { Translation } from '../types'

const ja: Translation = {
  common: {
    title: '単位変換ツール',
    description: '強力なオンライン単位変換ツール',
    loading: '読み込み中...',
    error: 'エラー',
    copy: 'コピー',
    copied: 'コピーしました',
    settings: '設定',
    language: '言語',
    theme: 'テーマ',
    about: '概要',
    contact: 'お問い合わせ',
    home: 'ホーム',
    selectType: '変換タイプを選択',
    selectLanguage: '言語を選択',
    pageNotFound: 'ページが見つかりません',
    pageNotFoundDesc: '申し訳ありませんが、お探しのページは存在しません。',
    backToHome: 'ホームに戻る',
    copyright: '著作権',
    enterValue: '値を入力',
    from: '変換元',
    to: '変換先',
    categories: {
      basic: '基本単位',
      area_volume: '面積・体積',
      time_related: '時間関連',
      physics: '物理単位',
      data: 'データ単位',
      others: 'その他の単位'
    },
    instructions: {
      title: '使用方法',
      steps: {
        input: '変換したい値を入力',
        select: '入力値の単位を選択',
        auto: 'システムが自動的に計算し、他の単位での対応する値を表示',
        copy: '任意の結果をクリックして、値と単位を素早くコピー'
      },
      features: {
        title: '機能',
        range: {
          title: '対応値の範囲',
          description: '小数点を含む最大20桁、小数点以下10桁まで対応。非常に大きい数値や小さい数値は、科学的記数法で自動的に表示されます。'
        },
        copy: {
          title: 'コピー機能',
          description: '任意の変換結果をクリックして、値と単位を簡単にコピーできます。'
        },
        paste: {
          title: '貼り付け機能',
          description: '単位付きの値を貼り付けることができ、システムが自動的に数値部分を抽出します。'
        }
      }
    },
    customOrder: 'カスタム順序',
    byName: '名前順',
    byCreatedTime: '作成時間順',
    byLastUsed: '最終使用順',
    clearAll: 'すべてクリア',
    noFavorites: 'お気に入りなし',
    remove: '削除',
    clearConfirmTitle: '確認',
    clearConfirmMessage: '本当にすべてをクリアしますか？',
    cancel: 'キャンセル',
    confirm: '確認',
    addFavorite: 'お気に入りに追加',
    removeFavorite: 'お気に入りから削除',
    enterFavoriteName: 'お気に入りの名前を入力',
    favoriteNamePlaceholder: 'お気に入りの名前',
    showFavorites: 'お気に入りを表示',
    hideFavorites: 'お気に入りを非表示',
    selectUnit: '単位を選択',
    inputValue: '値を入力',
    convertResult: '変換結果',
    searchUnit: '単位を検索',
    length: '長さ',
    conversionHistory: '変換履歴',
    clearHistory: '履歴をクリア',
    confirmClear: '履歴をクリアしてもよろしいですか？',
    delete: '削除',
    links: 'リンク'
  },
  units: {
    length: {
      title: '長さ',
      description: '異なる長さの単位間で変換',
      units: {
        metric_meter: 'メートル',
        metric_kilometer: 'キロメートル',
        metric_centimeter: 'センチメートル',
        metric_millimeter: 'ミリメートル',
        imperial_inch: 'インチ',
        imperial_foot: 'フィート',
        imperial_yard: 'ヤード',
        imperial_mile: 'マイル',
        astronomical_light_year: '光年',
        astronomical_unit: '天文単位',
        metric_decimeter: 'デシメートル',
        metric_micrometer: 'マイクロメートル',
        metric_nanometer: 'ナノメートル',
        metric_picometer: 'ピコメートル',
        nautical_mile: '海里',
        nautical_fathom: 'ファゾム'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '光年は時間の単位ではなく、光が1年間に進む距離の単位です。',
          '天文単位（AU）は地球から太陽までの平均距離に基づいています。',
          'メートルは元々、北極から赤道までの距離の1千万分の1として定義されていました。',
          '現在のメートルは真空中の光速に基づいて定義されています。'
        ]
      }
    },
    area: {
      title: '面積',
      description: '異なる面積の単位間で変換',
      units: {
        metric_square_meter: '平方メートル',
        metric_square_kilometer: '平方キロメートル',
        metric_square_centimeter: '平方センチメートル',
        metric_square_millimeter: '平方ミリメートル',
        imperial_square_inch: '平方インチ',
        imperial_square_foot: '平方フィート',
        imperial_square_yard: '平方ヤード',
        imperial_square_mile: '平方マイル',
        metric_hectare: 'ヘクタール',
        imperial_acre: 'エーカー',
        metric_square_decimeter: '平方デシメートル',
        metric_are: 'アール',
        traditional_mu: '畝（中国）',
        traditional_qing: '頃（中国）'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ヘクタールは土地面積の測定を簡単にするために作られ、1ヘクタールは10,000平方メートルです。',
          'エーカーは中世時代に、1対の牛が1日で耕せる面積として定義されました。',
          '中国の畝は商周時代に遡り、1畝はおよそ666.67平方メートルです。',
          '平方マイルは最大の帝国面積単位で、640エーカーに等しいです。',
          'アールは100平方メートルに等しいメートル法の面積単位ですが、あまり使用されません。',
          '頃は最大の伝統的な中国の面積単位で、100畝に等しいです。'
        ]
      }
    },
    volume: {
      title: '体積',
      description: '異なる体積の単位間で変換',
      units: {
        metric_cubic_meter: '立方メートル',
        metric_cubic_kilometer: '立方キロメートル',
        metric_cubic_centimeter: '立方センチメートル',
        metric_cubic_millimeter: '立方ミリメートル',
        metric_cubic_decimeter: '立方デシメートル',
        metric_liter: 'リットル',
        metric_milliliter: 'ミリリットル',
        imperial_gallon: 'ガロン（英）',
        imperial_quart: 'クォート（英）',
        imperial_pint: 'パイント（英）',
        us_cup: 'カップ（米）',
        imperial_fluid_ounce: 'フルイドオンス（英）',
        us_tablespoon: '大さじ（米）',
        us_teaspoon: '小さじ（米）',
        imperial_cubic_yard: '立方ヤード',
        imperial_cubic_foot: '立方フィート',
        imperial_cubic_inch: '立方インチ',
        chinese_dan: '石（中国）',
        chinese_dou: '斗（中国）',
        chinese_sheng: '升（中国）',
        japanese_koku: '石',
        japanese_to: '斗',
        japanese_sho: '升',
        japanese_go: '合',
        industrial_oil_barrel: '石油バレル',
        industrial_beer_barrel: 'ビールバレル'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '1リットルは正確に1立方デシメートル（1000立方センチメートル）に等しく、メートル法の体積変換が非常に便利です。',
          '米国と英国の液体単位には大きな違いがあります：1英ガロン≈4.546リットル、1米ガロン≈3.785リットルです。',
          '日本の1升は約1.8リットルで、10合に等しいです。',
          '米国の調理測定では、1カップ = 16大さじ = 48小さじ ≈ 237ミリリットルです。',
          '英国のパイントはビールの体積測定に使用され、568ミリリットルに等しいです。',
          '実験室のビーカーやメスシリンダーは通常メートル法の単位（ミリリットルまたはリットル）を使用します。'
        ]
      }
    },
    weight: {
      title: '重さ',
      description: '異なる重さの単位間で変換',
      units: {
        metric_kilogram: 'キログラム',
        metric_tonne: 'トン',
        metric_gram: 'グラム',
        metric_milligram: 'ミリグラム',
        metric_microgram: 'マイクログラム',
        imperial_pound: 'ポンド',
        imperial_ounce: 'オンス',
        imperial_stone: 'ストーン',
        imperial_long_ton: 'ロングトン',
        us_short_ton: 'ショートトン',
        jewelry_carat: 'カラット',
        jewelry_grain: 'グレーン',
        traditional_jin: '斤（中国）',
        traditional_liang: '両（中国）',
        traditional_qian: '銭（中国）',
        medical_grain: 'グレーン（医療）',
        medical_dram: 'ドラム（医療）',
        medical_ounce: 'オンス（医療）'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'カラットは元々イナゴマメの種子の重さに基づいていましたが、現在は正確に0.2グラムと定義されています。',
          'キログラムは2019年まで、物理的な人工物によって定義された唯一のSI基本単位でしたが、その後プランク定数を使用して再定義されました。',
          '日本の伝統的な単位：1斤 = 600g、1両 = 37.5g、1匁 = 3.75g。',
          '薬局単位は特別な換算比を持ち、薬局オンスはアボイルデュポイスオンスよりもわずかに軽いです。',
          'アボイルデュポイス制は英語圏で最も一般的に使用される重量システムで、1アボイルデュポイスポンドは453.59237グラムに等しいです。',
          'ロングトンとショートトンの違い：1ロングトン = 2240ポンド、1ショートトン = 2000ポンド。'
        ]
      }
    },
    time: {
      title: '時間',
      description: '異なる時間の単位間で変換',
      units: {
        metric_second: '秒',
        metric_minute: '分',
        metric_hour: '時間',
        metric_day: '日',
        metric_week: '週',
        metric_month: '月',
        metric_year: '年',
        metric_decade: '10年',
        metric_century: '世紀',
        scientific_millisecond: 'ミリ秒',
        scientific_microsecond: 'マイクロ秒',
        scientific_nanosecond: 'ナノ秒'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '1世紀は100年です。',
          '1年は約365.25日で、これは地球が太陽の周りを1周する時間です。',
          'うるう年は4年に1度追加され、2月29日が加えられます。',
          '1日は地球が自転する時間で、24時間または86,400秒です。'
        ]
      }
    },
    temperature: {
      title: '温度',
      description: '異なる温度単位間で変換',
      units: {
        metric_celsius: '摂氏（℃）',
        us_fahrenheit: '華氏（℉）',
        scientific_kelvin: 'ケルビン（K）',
        scientific_rankine: 'ランキン度（°R）'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '摂氏0度は水の凝固点、100度は沸点です。',
          'ケルビンは絶対温度の単位で、0Kは絶対零度（-273.15℃）です。',
          '華氏は日常生活で主に米国で使用されています。',
          'ランキン度は華氏の絶対温度版です。'
        ]
      }
    },
    speed: {
      title: '速度',
      description: '異なる速度単位間で変換',
      units: {
        meter_per_second: 'メートル毎秒',
        kilometer_per_hour: 'キロメートル毎時',
        mile_per_hour: 'マイル毎時',
        foot_per_second: 'フィート毎秒',
        knot: 'ノット',
        light_speed: '光速',
        mach: 'マッハ'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'マッハは音速の倍数で、標準大気圧では約340メートル/秒です。',
          'ノットは航海・航空で使用される速度単位で、1ノットは1海里/時です。',
          'キロメートル毎時は陸上交通で最も一般的な速度単位です。',
          '光速は真空中で約299,792,458メートル/秒です。'
        ]
      }
    },
    angle: {
      title: '角度',
      description: '異なる角度単位間で変換',
      units: {
        angle_degree: '度（°）',
        angle_radian: 'ラジアン（rad）',
        angle_gradian: 'グラジアン（gon）',
        angle_arcminute: '分（′）',
        angle_arcsecond: '秒（″）',
        angle_revolution: '回転（rev）'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '1周は360度または2πラジアンです。',
          'ラジアンは数学計算で使用される自然な角度単位です。',
          'グラジアンは円を400等分する単位で、測量で使用されます。',
          '分と秒は天文学の測定でよく使用されます。'
        ]
      }
    },
    pressure: {
      title: '圧力',
      description: '異なる圧力単位間で変換',
      units: {
        metric_pascal: 'パスカル',
        metric_kilopascal: 'キロパスカル',
        metric_megapascal: 'メガパスカル',
        industrial_bar: 'バール',
        scientific_atmosphere: '気圧',
        scientific_torr: 'トル',
        imperial_pound_per_square_inch: '重量ポンド毎平方インチ',
        medical_millimeter_mercury: '水銀柱ミリメートル'
      }
    },
    power: {
      title: '電力',
      description: '異なる電力単位間で変換',
      units: {
        metric_watt: 'ワット',
        metric_kilowatt: 'キロワット',
        metric_megawatt: 'メガワット',
        imperial_horsepower: '馬力',
        thermal_btu_per_hour: 'BTU毎時'
      }
    },
    energy: {
      title: 'エネルギー',
      description: '異なるエネルギー単位間で変換',
      units: {
        joule: 'ジュール',
        kilojoule: 'キロジュール',
        calorie: 'カロリー',
        kilocalorie: 'キロカロリー',
        electron_volt: '電子ボルト',
        british_thermal_unit: 'BTU',
        kilowatt_hour: 'キロワット時'
      }
    },
    force: {
      title: '力',
      description: '異なる力の単位間で変換',
      units: {
        newton: 'ニュートン',
        kilonewton: 'キロニュートン',
        dyne: 'ダイン',
        pound_force: '重量ポンド',
        kilogram_force: '重量キログラム'
      }
    },
    density: {
      title: '密度',
      description: '異なる密度単位間で変換',
      units: {
        kilogram_per_cubic_meter: 'キログラム毎立方メートル',
        gram_per_cubic_centimeter: 'グラム毎立方センチメートル',
        pound_per_cubic_foot: 'ポンド毎立方フィート'
      }
    },
    flow: {
      title: '流量',
      description: '異なる流量単位間で変換',
      units: {
        cubic_meter_per_second: '立方メートル毎秒',
        cubic_foot_per_second: '立方フィート毎秒',
        liter_per_minute: 'リットル毎分',
        gallon_per_minute: 'ガロン毎分'
      }
    },
    torque: {
      title: 'トルク',
      description: '異なるトルク単位間で変換',
      units: {
        metric_newton_meter: 'ニュートンメートル',
        metric_newton_centimeter: 'ニュートンセンチメートル',
        imperial_pound_foot: 'ポンドフィート',
        imperial_pound_inch: 'ポンドインチ',
        scientific_kilogram_force_meter: '千克力メートル',
        scientific_kilogram_force_centimeter: '千克力センチメートル'
      }
    },
    data: {
      title: 'データ',
      description: 'データ単位間で変換',
      units: {
        bit: 'ビット',
        byte: 'バイト',
        kilobyte: 'キロバイト',
        megabyte: 'メガバイト',
        gigabyte: 'ギガバイト',
        terabyte: 'テラバイト',
        petabyte: 'ペタバイト'
      }
    },
    data_rate: {
      title: 'データ転送速度',
      description: 'データ転送速度単位間で変換',
      units: {
        bit_per_second: 'ビット毎秒',
        kilobit_per_second: 'キロビット毎秒',
        megabit_per_second: 'メガビット毎秒',
        gigabit_per_second: 'ギガビット毎秒',
        byte_per_second: 'バイト毎秒',
        kilobyte_per_second: 'キロバイト毎秒',
        megabyte_per_second: 'メガバイト毎秒',
        gigabyte_per_second: 'ギガバイト毎秒'
      }
    },
    cooking: {
      title: '調理単位',
      description: '調理単位間で変換',
      units: {
        metric_cup: 'カップ（メートル法）',
        us_cup: 'カップ（米国）',
        us_tablespoon: '大さじ',
        us_teaspoon: '小さじ',
        imperial_fluid_ounce: '液量オンス',
        metric_milliliter: 'ミリリットル',
        metric_liter: 'リットル'
      }
    },
    numeral: {
      title: '数値体系',
      description: '異なる数値体系間で変換',
      binary: {
        title: '2進数',
        description: '0と1のみを使用する数値体系'
      },
      octal: {
        title: '8進数',
        description: '0から7までの数字を使用する数値体系'
      },
      decimal: {
        title: '10進数',
        description: '0から9までの数字を使用する一般的な数値体系'
      },
      hexadecimal: {
        title: '16進数',
        description: '0から9の数字とAからFまでの文字を使用する数値体系'
      }
    },
    frequency: {
      title: '周波数',
      description: '異なる周波数単位間で変換',
      units: {
        hertz: 'ヘルツ',
        kilohertz: 'キロヘルツ',
        megahertz: 'メガヘルツ',
        gigahertz: 'ギガヘルツ',
        revolution_per_minute: '回転毎分',
        revolution_per_second: '回転毎秒'
      }
    }
  },
  buttons: {
    convert: '変換',
    clear: 'クリア',
    swap: '入れ替え',
    copy: 'コピー'
  },
  messages: {
    copied: 'コピーしました',
    error: 'エラーが発生しました',
    invalidNumber: '無効な数値です',
    selectUnit: '単位を選択してください',
    conversionError: '変換エラー',
    invalidTemperature: '無効な温度値です'
  },
  errors: {
    invalidInput: '無効な入力です',
    invalidFormat: '無効な形式です',
    conversionFailed: '変換に失敗しました',
    copyFailed: 'コピーに失敗しました'
  },
  footer: {
    about: '概要',
    description: 'オンライン単位変換ツール',
    contact: 'お問い合わせ',
    email: 'メールアドレス',
    legal: '法的情報',
    changelog: '更新履歴'
  },
  converter: {
    title: '単位変換',
    description: '簡単に単位を変換できます',
    from: '変換元',
    to: '変換先',
    value: '値',
    result: '結果',
    instructions: {
      title: '使用方法',
      steps: [
        '変換したい値を入力',
        '変換元の単位を選択',
        '変換先の単位を選択',
        '結果をコピー'
      ]
    },
    limitations: {
      title: '制限事項',
      items: [
        '一部の単位変換には制限があります',
        '非常に大きな数値や小さな数値は科学的記数法で表示されます'
      ]
    },
    knowledge: {
      title: '豆知識',
      items: [
        '1メートルは100センチメートルです',
        '1キログラムは1000グラムです',
        '1リットルは1000ミリリットルです'
      ]
    }
  },
  Links: {
    title: 'リンク集',
    description: 'パートナーサイトとリソースを探索',
  },
}

export default ja 