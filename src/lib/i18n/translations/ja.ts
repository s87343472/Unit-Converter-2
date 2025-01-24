import type { Translation } from '../types'

const ja: Translation = {
  common: {
    title: '単位変換ツール',
    description: '様々な単位の変換に対応したパワフルなオンラインツール',
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
    conversionHistory: '変換履歴',
    clearHistory: '履歴をクリア',
    confirmClear: '履歴をすべて削除してもよろしいですか？',
    delete: '削除',
    selectType: '変換タイプを選択',
    selectLanguage: '言語を選択',
    pageNotFound: 'ページが見つかりません',
    pageNotFoundDesc: '申し訳ありませんが、お探しのページは存在しません。',
    backToHome: 'ホームに戻る',
    copyright: 'All rights reserved.',
    from: 'から',
    to: 'まで',
    selectUnit: '単位を選択',
    inputValue: '入力値',
    convertResult: '変換結果',
    searchUnit: '単位を検索...',
    categories: {
      basic: '基本単位',
      area_volume: '面積・体積',
      time_related: '時間関連',
      physics: '物理単位',
      data: 'データ単位',
      others: 'その他'
    },
    instructions: {
      title: '使用方法',
      steps: {
        input: '変換したい値を入力してください',
        select: '入力値の単位を選択してください',
        auto: 'システムが自動的に他の単位の値を計算して表示します',
        copy: '結果をクリックすると、単位付きの値をすぐにコピーできます'
      },
      features: {
        title: '機能説明',
        range: {
          title: '対応する値の範囲',
          description: '小数点を含めて最大20桁、小数点以下最大10桁まで対応。非常に大きな数値や小さな数値は自動的に科学的記数法で表示されます。'
        },
        copy: {
          title: 'コピー機能',
          description: '変換結果をクリックすると、値と単位を簡単に貼り付けられるようにコピーできます。'
        },
        paste: {
          title: '貼り付け機能',
          description: '単位付きの値の貼り付けに対応し、システムが自動的に数値部分を抽出します。'
        }
      }
    },
    customOrder: 'カスタム順序',
    byName: '名前順',
    byCreatedTime: '作成日時順',
    byLastUsed: '最終使用順',
    clearAll: 'すべてクリア',
    noFavorites: 'お気に入りはまだありません',
    remove: '削除',
    clearConfirmTitle: 'お気に入りをすべて削除',
    clearConfirmMessage: 'すべてのお気に入りを削除してもよろしいですか？この操作は取り消せません。',
    cancel: 'キャンセル',
    confirm: '確認',
    addFavorite: 'お気に入りに追加',
    removeFavorite: 'お気に入りから削除',
    enterFavoriteName: 'このお気に入りの名前を入力',
    favoriteNamePlaceholder: '例：メートルからフィート',
    showFavorites: 'お気に入りを表示',
    hideFavorites: 'お気に入りを非表示',
    length: '長さ'
  },
  units: {
    length: {
      title: '長さ',
      description: '長さの単位変換（ISO 31-1）',
      units: {
        meter: 'メートル',
        kilometer: 'キロメートル',
        centimeter: 'センチメートル',
        millimeter: 'ミリメートル',
        inch: 'インチ',
        foot: 'フィート',
        yard: 'ヤード',
        mile: 'マイル',
        light_year: '光年',
        astronomical_unit: '天文単位',
        decimeter: 'デシメートル',
        micrometer: 'マイクロメートル',
        nanometer: 'ナノメートル',
        picometer: 'ピコメートル'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '光年は時間の単位ではなく、光が1年間に進む距離を表す長さの単位です。',
          '天文単位（AU）は地球と太陽の平均距離に基づいています。',
          'メートルは当初、北極から赤道までの距離の1000万分の1として定義されていました。',
          '現在のメートルは真空中の光速に基づいて定義されています。'
        ]
      }
    },
    area: {
      title: '面積',
      description: '面積測定単位の変換 (ISO 31-1)'
    },
    volume: {
      title: '体積',
      description: '体積測定単位の変換 (ISO 31-1)',
      units: {
        cubic_meter: '立方メートル',
        cubic_kilometer: '立方キロメートル',
        cubic_centimeter: '立方センチメートル',
        cubic_millimeter: '立方ミリメートル',
        cubic_inch: '立方インチ',
        cubic_foot: '立方フィート',
        cubic_yard: '立方ヤード',
        liter: 'リットル',
        milliliter: 'ミリリットル',
        gallon_us: 'ガロン(米)',
        gallon_uk: 'ガロン(英)',
        quart_us: 'クォート(米)',
        quart_uk: 'クォート(英)',
        pint_us: 'パイント(米)',
        pint_uk: 'パイント(英)',
        fluid_ounce_us: '液量オンス(米)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '1リットルは1立方デシメートル（1000立方センチメートル）に等しいです。',
          '米国ガロンと英国ガロンは異なり、1米国ガロンは約3.785リットル、1英国ガロンは約4.546リットルです。',
          '立方メートルは国際単位系（SI）の基本的な体積単位です。'
        ]
      }
    },
    weight: {
      title: '重量',
      description: '質量単位の変換 (ISO 31-3)',
      units: {
        kilogram: 'キログラム',
        gram: 'グラム',
        milligram: 'ミリグラム',
        metric_ton: 'メートルトン',
        pound: 'ポンド',
        ounce: 'オンス',
        carat: 'カラット',
        atomic_mass_unit: '原子質量単位'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'カラットは元々豆の重さを基準としていましたが、現在は正確に0.2グラムと定義されています。',
          '原子質量単位は炭素12原子の質量の1/12として定義されています。',
          'キログラムは2019年まで実物標準で定義されていた唯一の基本単位でした。'
        ]
      }
    },
    time: {
      title: '時間',
      description: '時間単位の変換 (ISO 31-1)',
      units: {
        second: '秒',
        minute: '分',
        hour: '時間',
        day: '日',
        week: '週',
        month: '月',
        year: '年',
        decade: '十年',
        century: '世紀',
        millisecond: 'ミリ秒',
        microsecond: 'マイクロ秒',
        nanosecond: 'ナノ秒'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '秒はセシウム133原子の9,192,631,770周期に基づいて定義されています。',
          '1年の正確な長さは365.242190419日です。',
          '原子時計の精度は非常に高く、数百万年で1秒のずれしか生じません。'
        ]
      }
    },
    temperature: {
      title: '温度',
      description: '温度単位の変換 (ISO 31-4)',
      units: {
        celsius: '摂氏',
        fahrenheit: '華氏',
        kelvin: 'ケルビン',
        rankine: 'ランキン',
        reaumur: 'レオミュール'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ケルビンは人名を冠した唯一の基本単位です。',
          '絶対零度は-273.15°Cで、理論的に到達可能な最低温度です。',
          '華氏の0度は塩水が凍る温度を基準としています。'
        ]
      }
    },
    speed: {
      title: '速度',
      description: '速度単位の変換 (ISO 31-3)',
      units: {
        meter_per_second: 'メートル毎秒',
        kilometer_per_hour: 'キロメートル毎時',
        mile_per_hour: 'マイル毎時',
        knot: 'ノット',
        foot_per_second: 'フィート毎秒'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ノットは元々、ロープの結び目の数で船速を測定していました。現在は1時間に1海里進む速さと定義されています。',
          '音速は海面で約340メートル毎秒です。',
          '光速は真空中で約299,792,458メートル毎秒です。'
        ]
      }
    },
    angle: {
      title: '角度',
      description: '角度単位の変換 (ISO 31-1)',
      units: {
        degree: '度',
        radian: 'ラジアン',
        gradian: 'グラジアン',
        arcminute: '分',
        arcsecond: '秒'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ラジアンは円周の長さを半径で割った比率に基づく単位です。',
          '1周は360度、2πラジアン、または400グラジアンに等しいです。',
          '天文学では角分（arcminute）と角秒（arcsecond）が頻繁に使用されます。'
        ]
      }
    },
    pressure: {
      title: '圧力',
      description: '圧力単位の変換 (ISO 31-3)',
      units: {
        pascal: 'パスカル (公制)',
        kilopascal: 'キロパスカル (公制)',
        megapascal: 'メガパスカル (公制)',
        bar: 'バール (工学)',
        millibar: 'ミリバール (気象)',
        atmosphere: '標準大気圧 (科学)',
        torr: 'トル (科学)',
        millimeter_of_mercury: '水銀柱ミリメートル (医学)',
        pound_per_square_inch: '重量ポンド毎平方インチ (英制)',
        inch_of_mercury: '水銀柱インチ (英制)',
        inch_of_water: '水柱インチ (英制)',
        kilopound_per_square_inch: 'キロ重量ポンド毎平方インチ (英制)',
        centimeter_of_water: '水柱センチメートル (工学)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'パスカルは1平方メートルあたり1ニュートンの圧力として定義されています。',
          '標準大気圧は海面での平均大気圧として定義され、101,325パスカルです。',
          '医療分野では血圧の測定に水銀柱ミリメートル（mmHg）が広く使用されています。',
          '気象学では一般的にヘクトパスカル（hPa）が使用され、これはミリバール（mbar）と同じ値です。'
        ]
      }
    },
    power: {
      title: '電力',
      description: '電力単位の変換 (ISO 31-3)',
      units: {
        watt: 'ワット (公制)',
        kilowatt: 'キロワット (公制)',
        megawatt: 'メガワット (公制)',
        gigawatt: 'ギガワット (公制)',
        horsepower_mechanical: '機械馬力 (英制)',
        horsepower_metric: 'メートル馬力 (公制)',
        horsepower_electric: '電気馬力 (工学)',
        horsepower_boiler: 'ボイラー馬力 (工学)',
        btu_per_hour: '英熱単位毎時 (英制)',
        ton_refrigeration: '冷凍トン (工学)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ワットは蒸気機関の改良で知られるジェームズ・ワットにちなんで名付けられました。',
          '1馬力は約746ワットで、18世紀の馬の平均的な仕事率に基づいています。',
          '冷凍トンは24時間で1トンの氷を溶かすのに必要な冷却能力として定義されています。',
          'ボイラー馬力は1時間あたり34.5ポンドの水を212°Fまで加熱する能力として定義されています。'
        ]
      }
    },
    energy: {
      title: 'エネルギー',
      description: 'エネルギー単位の変換 (ISO 31-3)',
      units: {
        joule: 'ジュール (公制)',
        kilojoule: 'キロジュール (公制)',
        megajoule: 'メガジュール (公制)',
        calorie: 'カロリー (熱力)',
        kilocalorie: 'キロカロリー (熱力)',
        watt_hour: 'ワット時 (電力)',
        kilowatt_hour: 'キロワット時 (電力)',
        megawatt_hour: 'メガワット時 (電力)',
        electronvolt: '電子ボルト (原子)',
        british_thermal_unit: '英熱単位 (英制)',
        therm: 'サーム (英制)',
        foot_pound_force: 'フィートポンド力 (英制)',
        erg: 'エルグ (CGS)',
        ton_of_tnt: 'TNT換算トン (爆発)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ジュールは1ニュートンの力が物体を1メートル動かす時のエネルギーとして定義されています。',
          'キロカロリーは食品のエネルギー量を表す単位として広く使用されています。',
          '1電子ボルトは1個の電子が1ボルトの電位差で加速されるときに得るエネルギーです。',
          'TNT換算トンは核爆発の威力を表す単位として使用され、1キロトンは1000トンのTNTの爆発に相当します。'
        ]
      }
    },
    force: {
      title: '力',
      description: '力の単位の変換 (ISO 31-3)',
      units: {
        newton: 'ニュートン',
        kilonewton: 'キロニュートン',
        dyne: 'ダイン',
        kilogram_force: 'キログラム重',
        pound_force: 'ポンド重',
        ounce_force: 'オンス重'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ニュートンは1キログラムの質量に1メートル毎秒²の加速度を与える力として定義されます。',
          'キログラム重は地球の標準重力加速度(約9.80665 m/s²)における1キログラムの重さです。',
          'ダインはCGS単位系での力の単位で、1グラムに1センチメートル毎秒²の加速度を与える力です。'
        ]
      }
    },
    density: {
      title: '密度',
      description: '密度単位の変換 (ISO 31-3)',
      units: {
        kilogram_per_cubic_meter: 'キログラム毎立方メートル (公制)',
        gram_per_cubic_centimeter: 'グラム毎立方センチメートル (公制)',
        gram_per_milliliter: 'グラム毎ミリリットル (公制)',
        kilogram_per_liter: 'キログラム毎リットル (公制)',
        pound_per_cubic_foot: 'ポンド毎立方フィート (英制)',
        pound_per_cubic_inch: 'ポンド毎立方インチ (英制)',
        pound_per_gallon_us: 'ポンド毎ガロン (米制)',
        pound_per_gallon_uk: 'ポンド毎ガロン (英制)',
        ounce_per_cubic_foot: 'オンス毎立方フィート (英制)',
        ounce_per_gallon_us: 'オンス毎ガロン (米制)',
        ounce_per_gallon_uk: 'オンス毎ガロン (英制)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '水の密度は4°Cで最大となり、約1グラム毎立方センチメートルです。',
          '空気の密度は海面標準状態で約1.225キログラム毎立方メートルです。',
          '密度は物質の特性を示す重要な物理量で、物質の識別や純度の判定に利用されます。',
          '液体の密度は温度によって変化し、一般的に温度が上がると密度は下がります。'
        ]
      }
    },
    flow: {
      title: '流量',
      description: '流量単位の変換 (ISO 31-3)',
      units: {
        cubic_meter_per_second: '立方メートル毎秒 (公制)',
        cubic_meter_per_hour: '立方メートル毎時 (公制)',
        liter_per_second: 'リットル毎秒 (公制)',
        liter_per_minute: 'リットル毎分 (公制)',
        liter_per_hour: 'リットル毎時 (公制)',
        gallon_per_minute_us: 'ガロン毎分 (米制)',
        gallon_per_hour_us: 'ガロン毎時 (米制)',
        gallon_per_minute_uk: 'ガロン毎分 (英制)',
        gallon_per_hour_uk: 'ガロン毎時 (英制)',
        cubic_foot_per_second: '立方フィート毎秒 (英制)',
        cubic_foot_per_minute: '立方フィート毎分 (英制)',
        cubic_foot_per_hour: '立方フィート毎時 (英制)',
        kilogram_per_second: 'キログラム毎秒 (質量)',
        kilogram_per_hour: 'キログラム毎時 (質量)',
        pound_per_second: 'ポンド毎秒 (質量)',
        pound_per_hour: 'ポンド毎時 (質量)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '流量には体積流量と質量流量の2種類があり、それぞれ異なる用途に使用されます。',
          '工業プロセスでは、液体の場合は体積流量、気体の場合は質量流量が一般的に使用されます。',
          '配管設計では、流量と圧力損失の関係が重要な設計要素となります。',
          '米国とイギリスではガロンの定義が異なり、それぞれの流量単位も異なる値となります。'
        ]
      }
    },
    torque: {
      title: 'トルク',
      description: 'トルク単位の変換 (ISO 31-3)',
      units: {
        newton_meter: 'ニュートンメートル (公制)',
        kilonewton_meter: 'キロニュートンメートル (公制)',
        newton_centimeter: 'ニュートンセンチメートル (公制)',
        kilogram_force_meter: 'キログラム力メートル (工学)',
        gram_force_meter: 'グラム力メートル (工学)',
        foot_pound_force: 'フィートポンド力 (英制)',
        inch_pound_force: 'インチポンド力 (英制)',
        ounce_force_inch: 'オンス力インチ (英制)',
        dyne_centimeter: 'ダインセンチメートル (科学)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'トルクは回転力を表す物理量で、力と距離の積として定義されます。',
          '自動車のエンジン出力はトルクと回転数で表されます。',
          'ボルトの締め付けトルクは適切な締め付け力を確保するために重要です。',
          'トルクレンチは正確なトルク値で締め付けを行うための工具です。'
        ]
      }
    },
    data: {
      title: 'データ容量',
      description: 'データ容量単位の変換 (IEC 60027)',
      units: {
        bit: 'ビット (基本)',
        byte: 'バイト (基本)',
        kilobyte: 'キロバイト (十進)',
        megabyte: 'メガバイト (十進)',
        gigabyte: 'ギガバイト (十進)',
        terabyte: 'テラバイト (十進)',
        kibibyte: 'キビバイト (二進)',
        mebibyte: 'メビバイト (二進)',
        gibibyte: 'ギビバイト (二進)',
        tebibyte: 'テビバイト (二進)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '1バイトは8ビットで構成され、1文字を表現するのに使用されます。',
          'キロバイト（KB）は1000バイト、キビバイト（KiB）は1024バイトを表します。',
          'ハードディスクメーカーは十進接頭辞（KB, MB, GB）を使用しますが、OSは二進接頭辞（KiB, MiB, GiB）を使用することが多いです。',
          'IEC規格では、混乱を避けるため、二進接頭辞（Ki, Mi, Gi, Ti）の使用を推奨しています。'
        ]
      }
    },
    data_rate: {
      title: 'データ転送速度',
      description: 'データ転送速度単位の変換 (ISO/IEC 80000)',
      units: {
        bit_per_second: 'ビット毎秒 (基本)',
        kilobit_per_second: 'キロビット毎秒 (基本)',
        megabit_per_second: 'メガビット毎秒 (基本)',
        gigabit_per_second: 'ギガビット毎秒 (基本)',
        byte_per_second: 'バイト毎秒 (基本)',
        kilobyte_per_second: 'キロバイト毎秒 (基本)',
        megabyte_per_second: 'メガバイト毎秒 (基本)',
        gigabyte_per_second: 'ギガバイト毎秒 (基本)',
        terabyte_per_second: 'テラバイト毎秒 (基本)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ネットワーク速度は通常ビット毎秒（bps）で表されますが、ファイル転送速度はバイト毎秒（B/s）で表されることが多いです。',
          '1バイト毎秒は8ビット毎秒に相当します。',
          'インターネット回線速度の理論値と実効速度には差があり、実効速度は通常理論値より低くなります。',
          '5G通信では最大20ギガビット毎秒の通信速度を実現できます。'
        ]
      }
    },
    currency: {
      title: '通貨',
      description: '通貨単位の変換 (ISO 4217)',
      units: {
        usd: 'アメリカドル (USD)',
        eur: 'ユーロ (EUR)',
        jpy: '日本円 (JPY)',
        gbp: 'イギリスポンド (GBP)',
        cny: '中国人民元 (CNY)',
        krw: '韓国ウォン (KRW)',
        chf: 'スイスフラン (CHF)',
        aud: 'オーストラリアドル (AUD)',
        cad: 'カナダドル (CAD)',
        hkd: '香港ドル (HKD)',
        sgd: 'シンガポールドル (SGD)',
        inr: 'インドルピー (INR)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '為替レートは市場の需要と供給によって常に変動しています。',
          'ユーロは1999年に導入された比較的新しい通貨です。',
          '日本円は世界で最も取引される通貨の一つです。',
          '仮想通貨は中央銀行による管理がない点で、従来の法定通貨とは異なります。'
        ]
      }
    },
    cooking: {
      title: '調理',
      description: '調理用計量単位の変換',
      units: {
        cup_us: 'カップ (米式)',
        cup_metric: 'カップ (公制)',
        cup_jp: 'カップ (日本)',
        tablespoon_us: '大さじ (米式)',
        tablespoon_metric: '大さじ (公制)',
        tablespoon_jp: '大さじ (日本)',
        teaspoon_us: '小さじ (米式)',
        teaspoon_metric: '小さじ (公制)',
        teaspoon_jp: '小さじ (日本)',
        fluid_ounce: '液量オンス (米式)',
        milliliter: 'ミリリットル (公制)',
        gou: '合 (日本)',
        shaku: '勺 (日本)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '日本のカップは200ml、米国のカップは約237mlと異なります。',
          '日本の大さじは15ml、小さじは5mlで統一されています。',
          '「合」は日本の伝統的な米の計量単位で、1合は約180mlです。',
          'レシピの国によって計量単位のサイズが異なるため、出典の確認が重要です。'
        ]
      }
    },
    numeral: {
      title: '進数',
      description: '異なる進数系間の変換',
      units: {
        binary: '2進数 (基本)',
        octal: '8進数 (基本)',
        decimal: '10進数 (基本)',
        hexadecimal: '16進数 (基本)',
        base_3: '3進数 (拡張)',
        base_4: '4進数 (拡張)',
        base_32: '32進数 (拡張)',
        base_36: '36進数 (拡張)',
        base_58: '58進数 (拡張)',
        base_64: '64進数 (拡張)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          '2進数はコンピュータの基本的な数値表現方式です。',
          '16進数は1バイトを2桁で表現でき、プログラミングでよく使用されます。',
          '8進数はUNIXシステムでファイル権限の表現に使用されます。',
          'Base64はバイナリデータをテキストとして扱うためのエンコード方式です。'
        ]
      }
    },
    frequency: {
      title: '周波数',
      description: '周波数単位の変換 (ISO 31-3)',
      units: {
        hertz: 'ヘルツ (基本)',
        kilohertz: 'キロヘルツ (基本)',
        megahertz: 'メガヘルツ (基本)',
        gigahertz: 'ギガヘルツ (基本)',
        terahertz: 'テラヘルツ (基本)',
        cycle_per_second: '毎秒周期 (基本)',
        revolution_per_minute: '毎分回転数 (基本)',
        beat_per_minute: '毎分拍数 (基本)'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ヘルツ（Hz）は1秒間あたりの周期的な事象の回数を表す単位です。',
          'キロヘルツ（kHz）からギガヘルツ（GHz）は電波や電子機器の周波数を表すのに使用されます。',
          '毎分回転数（RPM）は機械の回転速度を表す一般的な単位です。',
          '毎分拍数（BPM）は音楽のテンポや心拍数の測定に使用されます。'
        ]
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
    copied: 'クリップボードにコピーしました',
    error: 'エラーが発生しました',
    invalidNumber: '有効な数値を入力してください',
    selectUnit: '両方の単位を選択してください',
    conversionError: '変換エラーが発生しました',
    invalidTemperature: '温度は絶対零度より低くすることはできません'
  }
}

export default ja 