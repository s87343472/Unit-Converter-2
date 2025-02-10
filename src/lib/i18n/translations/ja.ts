import type { Translation } from '../types';

const ja: Translation = {
  common: {
    title: '単位変換器',
    description: '強力なオンライン単位変換ツール。',
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
    pageNotFoundDesc: '申し訳ありませんが、訪問したページは存在しません。',
    backToHome: 'ホームに戻る',
    copyright: '著作権',
    enterValue: '値を入力',
    categories: {
      basic: '基本単位',
      area_volume: '面積と体積',
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
        auto: 'システムが自動的に他の単位の対応する値を計算して表示します',
        copy: '任意の結果をクリックして、単位付きの値をすばやくコピーします'
      },
      features: {
        title: '機能',
        range: {
          title: 'サポートされている値の範囲',
          description: '最大20桁（小数点を含む）をサポートし、最大10桁の小数を表示します。非常に大きいまたは小さい数値は科学的記数法で表示されます。'
        },
        copy: {
          title: 'コピー機能',
          description: '任意の変換結果をクリックして、値と単位をコピーし、貼り付けに便利です。'
        },
        paste: {
          title: '貼り付け機能',
          description: '単位付きの値をサポートし、システムが自動的に数値部分を抽出します。'
        }
      }
    },
    customOrder: 'カスタム順序',
    byName: '名前順',
    byCreatedTime: '作成日時順',
    byLastUsed: '最終使用順',

    clearAll: 'すべてクリア',
    noFavorites: 'お気に入りがありません',
    remove: '削除',
    clearConfirmTitle: 'すべてのお気に入りをクリア',
    clearConfirmMessage: 'すべてのお気に入りをクリアしてもよろしいですか？この操作は元に戻せません。',
    cancel: 'キャンセル',
    confirm: '確認',
    addFavorite: 'お気に入りに追加',
    removeFavorite: 'お気に入りから削除',
    enterFavoriteName: 'このお気に入りの名前を入力してください',
    favoriteNamePlaceholder: '例: メートルからフィート',
    showFavorites: 'お気に入りを表示',
    hideFavorites: 'お気に入りを非表示',
    from: 'から',
    to: 'へ',
    selectUnit: '単位を選択',
    inputValue: '入力値',
    convertResult: '結果',
    searchUnit: '単位を検索...',
    length: '長さ',
    conversionHistory: '変換履歴',
    clearHistory: '履歴をクリア',
    confirmClear: 'すべての履歴をクリアしてもよろしいですか？',
    delete: '削除'
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
        title: '知っていましたか？',
        items: [
          '光年は時間の単位ではなく、光が1年で進む距離の単位です。',
          '天文単位（AU）は、地球から太陽までの平均距離に基づいています。',
          'メートルはもともと、北極から赤道までの距離の1000万分の1として定義されていました。',
          '現在、メートルは真空中の光の速度によって定義されています。'
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
        title: '知っていましたか？',
        items: [
          'ヘクタールは土地面積の測定を簡素化するために作られ、1ヘクタールは10,000平方メートルに相当します。',
          'エーカーは中世に由来し、1日で牛のペアが耕すことができる面積として定義されました。',
          '中国のムーは商周時代に由来し、1ムーは約666.67平方メートルに相当します。',
          '平方マイルは最大の帝国面積単位で、640エーカーに相当します。'
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
        imperial_fluid_ounce: '液量オンス（英）',
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
        title: '知っていましたか？',
        items: [
          '1リットルは1000ミリリットルに相当します。',
          '立方メートルは、1メートルの立方体の体積です。',
          'ガロンは、アメリカとイギリスで異なる定義があります。'
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
        title: '知っていましたか？',
        items: [
          '1キログラムは約2.20462ポンドに相当します。',
          '1ポンドは16オンスに相当します。',
          'グラムは、キログラムの1000分の1です。'
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
        metric_decade: '十年',
        metric_century: '世紀',
        scientific_millisecond: 'ミリ秒',
        scientific_microsecond: 'マイクロ秒',
        scientific_nanosecond: 'ナノ秒'
      }
    },
    temperature: {
      title: '温度',
      description: '異なる温度の単位間で変換',
      units: {
        scientific_kelvin: 'ケルビン（科学）',
        metric_celsius: '摂氏（メートル法）',
        us_fahrenheit: '華氏（米）',
        scientific_rankine: 'ランキン（科学）',
        historical_reaumur: 'レオミュール（歴史）',
        meteorological_celsius: '摂氏（気象）',
        meteorological_fahrenheit: '華氏（気象）',
        industrial_celsius: '摂氏（工業）',
        industrial_fahrenheit: '華氏（工業）'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '摂氏と華氏の間の変換は、(°C × 9/5) + 32 = °F です。',
          'ケルビンは絶対温度の単位で、0Kは絶対零度です。',
          '水の氷点は0°C、沸点は100°Cです。'
        ]
      }
    },
    speed: {
      title: '速度',
      description: '異なる速度の単位間で変換',
      units: {
        meter_per_second: 'メートル毎秒',
        kilometer_per_hour: 'キロメートル毎時',
        mile_per_hour: 'マイル毎時',
        foot_per_second: 'フィート毎秒',
        knot: 'ノット',
        mach: 'マッハ',
        kilometer_per_second: 'キロメートル毎秒',
        light_speed: '光速'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1ノットは約1.852キロメートル毎時に相当します。',
          'メートル毎秒は、国際単位系(SI)の速度の単位です。',
          'キロメートル毎時は、主に道路交通の速度を表すのに使われます。'
        ]
      }
    },
    angle: {
      title: '角度',
      description: '異なる角度の単位間で変換',
      units: {
        degree: '度',
        radian: 'ラジアン',
        gradian: 'グラジアン',
        arcminute: '分（角）',
        arcsecond: '秒（角）'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1ラジアンは約57.2958度に相当します。',
          '360度は1周を表します。',
          'ラジアンは、円の半径に対する弧の長さで定義されます。'
        ]
      }
    },
    pressure: {
      title: '圧力',
      description: '異なる圧力の単位間で変換',
      units: {
        pascal: 'パスカル',
        kilopascal: 'キロパスカル',
        bar: 'バール',
        psi: 'PSI',
        atmosphere: '気圧'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1バールは約100,000パスカルに相当します。',
          'パスカルは、1ニュートンの力が1平方メートルの面積にかかる圧力です。',
          'psiは、主にアメリカで使用される圧力の単位です。'
        ]
      }
    },
    power: {
      title: '電力',
      description: '異なる電力の単位間で変換',
      units: {
        watt: 'ワット',
        kilowatt: 'キロワット',
        horsepower: '馬力'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1キロワットは1000ワットに相当します。',
          '馬力は、エンジンの出力を表すために使用されます。',
          'ワットは、エネルギーの消費率を示します。'
        ]
      }
    },
    energy: {
      title: 'エネルギー',
      description: '異なるエネルギーの単位間で変換',
      units: {
        joule: 'ジュール',
        kilojoule: 'キロジュール',
        calorie: 'カロリー',
        kilocalorie: 'キロカロリー',
        watt_hour: 'ワット時',
        kilowatt_hour: 'キロワット時'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1キロジュールは1000ジュールに相当します。',
          '1カロリーは、1グラムの水の温度を1度上げるのに必要なエネルギーです。',
          'キロカロリーは、食品のエネルギー量を表すのに使われます。'
        ]
      }
    },
    force: {
      title: '力',
      description: '異なる力の単位間で変換',
      units: {
        newton: 'ニュートン',
        kilonewton: 'キロニュートン',
        dyne: 'ダイン',
        pound_force: '重量ポンド'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1ニュートンは、1キログラムの物体に1メートル毎秒毎秒の加速度を与える力です。',
          'キロニュートンは、主に構造工学で使用される力の単位です。'
        ]
      }
    },
    density: {
      title: '密度',
      description: '異なる密度の単位間で変換',
      units: {
        kilogram_per_cubic_meter: 'キログラム毎立方メートル',
        gram_per_cubic_centimeter: 'グラム毎立方センチメートル',
        pound_per_cubic_foot: 'ポンド毎立方フィート',
        pound_per_cubic_inch: 'ポンド毎立方インチ',
        kilogram_per_liter: 'キログラム毎リットル',
        gram_per_milliliter: 'グラム毎ミリリットル',
        pound_per_gallon: 'ポンド毎ガロン',
        ounce_per_cubic_inch: 'オンス毎立方インチ'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '水の密度は約1グラム毎立方センチメートルです。',
          '密度は、物質の質量と体積の比率です。'
        ]
      }
    },
    flow: {
      title: '流量',
      description: '異なる流量の単位間で変換',
      units: {
        cubic_meter_per_second: '立方メートル毎秒',
        liter_per_minute: 'リットル毎分',
        gallon_per_minute: 'ガロン毎分'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1リットル毎分は約0.01667立方メートル毎秒に相当します。',
          '流量は、流体の移動速度を示します。'
        ]
      }
    },
    torque: {
      title: 'トルク',
      description: '異なるトルクの単位間で変換',
      units: {
        newton_meter: 'ニュートンメートル',
        pound_foot: 'フィートポンド',
        kilogram_force_meter: 'キログラム力メートル'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          'トルクは、回転力を示す物理量です。',
          '1ニュートンメートルは、1ニュートンの力が1メートルの距離で作用するトルクです。'
        ]
      }
    },
    data: {
      title: 'データ',
      description: '異なるデータの単位間で変換',
      units: {
        bit: 'ビット',
        kilobit: 'キロビット',
        megabit: 'メガビット',
        gigabit: 'ギガビット',
        terabit: 'テラビット',
        petabit: 'ペタビット',
        byte: 'バイト',
        kilobyte: 'キロバイト',
        megabyte: 'メガバイト',
        gigabyte: 'ギガバイト',
        terabyte: 'テラバイト',
        petabyte: 'ペタバイト',
        kibibit: 'キビビット',
        mebibit: 'メビビット',
        gibibit: 'ギビビット',
        tebibit: 'テビビット',
        pebibit: 'ペビビット',
        kibibyte: 'キビバイト',
        mebibyte: 'メビバイト',
        gibibyte: 'ギビバイト',
        tebibyte: 'テビバイト',
        pebibyte: 'ペビバイト'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1キロバイトは1024バイトに相当します。',
          '1メガバイトは1024キロバイトに相当します。',
          'データの単位は、情報の量を示します。'
        ]
      }
    },
    data_rate: {
      title: 'データ転送速度',
      description: '異なるデータ転送速度の単位間で変換',
      units: {
        bits_per_second: 'ビット毎秒',
        kilobits_per_second: 'キロビット毎秒',
        megabits_per_second: 'メガビット毎秒',
        gigabits_per_second: 'ギガビット毎秒',
        terabits_per_second: 'テラビット毎秒',
        bytes_per_second: 'バイト毎秒',
        kilobytes_per_second: 'キロバイト毎秒',
        megabytes_per_second: 'メガバイト毎秒',
        gigabytes_per_second: 'ギガバイト毎秒',
        terabytes_per_second: 'テラバイト毎秒',
        kibibits_per_second: 'キビビット毎秒',
        mebibits_per_second: 'メビビット毎秒',
        gibibits_per_second: 'ギビビット毎秒',
        tebibits_per_second: 'テビビット毎秒',
        kibibytes_per_second: 'キビバイト毎秒',
        mebibytes_per_second: 'メビバイト毎秒',
        gibibytes_per_second: 'ギビバイト毎秒',
        tebibytes_per_second: 'テビバイト毎秒'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1キロビット毎秒は1024ビット毎秒に相当します。',
          'データレートは、情報の転送速度を示します。'
        ]
      }
    },
    currency: {
      title: '通貨',
      description: '異なる通貨間で変換',
      units: {
        usd: 'アメリカドル',
        eur: 'ユーロ',
        gbp: 'イギリスポンド',
        jpy: '日本円',
        cny: '中国元',
        krw: '韓国ウォン',
        inr: 'インドルピー'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '米ドルは世界で最も広く使用されている通貨です。',
          'ユーロは、欧州連合の共通通貨です。'
        ]
      }
    },
    cooking: {
      title: '調理',
      description: '異なる調理単位間で変換',
      units: {
        us_fluid_ounce: '液量オンス（米）',
        us_tablespoon: '大さじ（米）',
        us_teaspoon: '小さじ（米）',
        imperial_fluid_ounce: '液量オンス（英）',
        imperial_tablespoon: '大さじ（英）',
        imperial_teaspoon: '小さじ（英）',
        chinese_bowl: '碗（中国）',
        chinese_cup: 'カップ（中国）',
        chinese_tablespoon: '大さじ（中国）',
        chinese_teaspoon: '小さじ（中国）',
        japanese_cup: '合',
        japanese_tablespoon: '大さじ',
        japanese_teaspoon: '小さじ'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1カップは約240ミリリットルに相当します。',
          '小さじと大さじは、料理の計量に使われる一般的な単位です。'
        ]
      }
    },
    numeral: {
      title: '進数',
      description: '異なる進数間で変換',
      units: {
        decimal: '10進数',
        binary: '2進数',
        octal: '8進数',
        hexadecimal: '16進数'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '二進法は、コンピュータの基本的な数値システムです。',
          '十六進法は、色の表現に広く使用されます。'
        ]
      }
    },
    frequency: {
      title: '周波数',
      description: '異なる周波数の単位間で変換',
      units: {
        hertz: 'ヘルツ',
        kilohertz: 'キロヘルツ',
        megahertz: 'メガヘルツ',
        gigahertz: 'ギガヘルツ'
      },
      knowledge: {
        title: '知っていましたか？',
        items: [
          '1キロヘルツは1000ヘルツに相当します。',
          '周波数は、1秒間に発生する周期的な現象の回数を示します。'
        ]
      }
    }
  },
  buttons: {
    convert: '変換',
    clear: 'クリア',
    swap: '交換',
    copy: 'コピー'
  },
  messages: {
    copied: 'コピーしました！',
    error: 'エラーが発生しました',
    invalidNumber: '有効な数値を入力してください',
    selectUnit: '単位を選択してください',
    conversionError: '変換エラー',
    invalidTemperature: '無効な温度値'
  },
  converter: {
    title: '単位変換器',
    description: 'オンライン単位変換ツール',
    from: 'から',
    to: 'へ',
    value: '値',
    result: '結果',
    instructions: {
      title: '使用方法',
      steps: [
        '変換したい値を入力',
        '入力値の単位を選択',
        'システムが自動的に対応する値を計算して表示します',
        '任意の結果をクリックして、値をすばやくコピーします'
      ]
    },
    limitations: {
      title: '制限',
      items: [
        '最大20桁（小数点を含む）をサポート',
        '最大10桁の小数',
        '非常に大きいまたは小さい数値は科学的記数法で表示されます'
      ]
    }
  },
  errors: {
    invalidInput: '無効な入力',
    invalidFormat: '無効な形式',
    conversionFailed: '変換に失敗しました',
    copyFailed: 'コピーに失敗しました'
  },
  footer: {
    about: '概要',
    description: '強力なオンライン単位変換ツール。',
    contact: 'お問い合わせ',
    email: 'support@metric-converter.com',
    legal: '法的情報',
    changelog: '変更履歴'
  }
};

export default ja; 