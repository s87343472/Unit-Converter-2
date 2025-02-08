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
      description: 'さまざまな長さの単位を変換',
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
      description: 'さまざまな面積の単位を変換',
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
        traditional_mu: 'ムー（中国）',
        traditional_qing: 'チン（中国）'
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
      description: 'さまざまな体積の単位を変換',
      units: {
        metric_cubic_meter: '立方メートル',
        metric_liter: 'リットル',
        metric_milliliter: 'ミリリットル',
        imperial_gallon: 'ガロン',
        imperial_quart: 'クォート',
        imperial_pint: 'パイント',
        imperial_fluid_ounce: '液量オンス',
        imperial_cubic_inch: '立方インチ',
        imperial_cubic_foot: '立方フィート'
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
      title: '重量',
      description: 'さまざまな重量の単位を変換',
      units: {
        metric_kilogram: 'キログラム',
        metric_gram: 'グラム',
        metric_milligram: 'ミリグラム',
        imperial_pound: 'ポンド',
        imperial_ounce: 'オンス'
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
      description: 'さまざまな時間の単位を変換',
      units: {
        second: '秒',
        minute: '分',
        hour: '時間',
        day: '日',
        week: '週',
        month: '月',
        year: '年'
      }
    },
    temperature: {
      title: '温度',
      description: 'さまざまな温度の単位を変換',
      units: {
        celsius: '摂氏',
        fahrenheit: '華氏',
        kelvin: 'ケルビン'
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
      description: 'さまざまな速度の単位を変換',
      units: {
        meter_per_second: 'メートル毎秒',
        kilometer_per_hour: 'キロメートル毎時',
        mile_per_hour: 'マイル毎時',
        knot: 'ノット'
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
      description: 'さまざまな角度の単位を変換',
      units: {
        degree: '度',
        radian: 'ラジアン'
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
      description: 'さまざまな圧力の単位を変換',
      units: {
        pascal: 'パスカル',
        bar: 'バール',
        psi: 'ポンド毎平方インチ'
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
      description: 'さまざまな電力の単位を変換',
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
      description: 'さまざまなエネルギーの単位を変換',
      units: {
        joule: 'ジュール',
        kilojoule: 'キロジュール',
        calorie: 'カロリー',
        kilocalorie: 'キロカロリー'
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
      description: 'さまざまな力の単位を変換',
      units: {
        newton: 'ニュートン',
        kilonewton: 'キロニュートン'
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
      description: 'さまざまな密度の単位を変換',
      units: {
        kilogram_per_cubic_meter: 'キログラム毎立方メートル',
        gram_per_cubic_centimeter: 'グラム毎立方センチメートル'
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
      description: 'さまざまな流量の単位を変換',
      units: {
        cubic_meter_per_second: '立方メートル毎秒',
        liter_per_minute: 'リットル毎分'
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
      description: 'さまざまなトルクの単位を変換',
      units: {
        newton_meter: 'ニュートンメートル',
        pound_foot: 'ポンドフィート'
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
      description: 'さまざまなデータの単位を変換',
      units: {
        byte: 'バイト',
        kilobyte: 'キロバイト',
        megabyte: 'メガバイト',
        gigabyte: 'ギガバイト'
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
      title: 'データレート',
      description: 'さまざまなデータレートの単位を変換',
      units: {
        bit_per_second: 'ビット毎秒',
        kilobit_per_second: 'キロビット毎秒',
        megabit_per_second: 'メガビット毎秒'
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
      description: 'さまざまな通貨の単位を変換',
      units: {
        usd: '米ドル',
        eur: 'ユーロ',
        gbp: '英ポンド',
        jpy: '日本円'
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
      title: '料理',
      description: 'さまざまな料理の単位を変換',
      units: {
        teaspoon: '小さじ',
        tablespoon: '大さじ',
        cup: 'カップ'
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
      title: '数値システム',
      description: 'さまざまな数値システムを変換',
      units: {
        decimal: '十進法',
        binary: '二進法',
        octal: '八進法',
        hexadecimal: '十六進法'
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
      description: 'さまざまな周波数の単位を変換',
      units: {
        hertz: 'ヘルツ',
        kilohertz: 'キロヘルツ',
        megahertz: 'メガヘルツ'
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