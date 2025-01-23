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
    from: '変換元',
    to: '変換先',
    selectUnit: '単位を選択',
    inputValue: '入力値',
    convertResult: '変換結果',
    searchUnit: '単位を検索...',
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
      description: '体積測定単位の変換 (ISO 31-1)'
    },
    weight: {
      title: '重量',
      description: '質量単位の変換 (ISO 31-3)'
    },
    time: {
      title: '時間',
      description: '時間単位の変換 (ISO 31-1)'
    },
    temperature: {
      title: '温度',
      description: '温度単位の変換 (ISO 31-4)'
    },
    speed: {
      title: '速度',
      description: '速度単位の変換 (ISO 31-3)'
    },
    angle: {
      title: '角度',
      description: '角度単位の変換 (ISO 31-1)'
    },
    pressure: {
      title: '圧力',
      description: '圧力単位の変換 (ISO 31-3)'
    },
    power: {
      title: '電力',
      description: '電力単位の変換 (ISO 31-3)'
    },
    energy: {
      title: 'エネルギー',
      description: 'エネルギー単位の変換 (ISO 31-3)'
    },
    force: {
      title: '力',
      description: '力の単位の変換 (ISO 31-3)'
    },
    density: {
      title: '密度',
      description: '密度単位の変換（ISO 31-3）',
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
        title: '豆知識',
        items: [
          '水は室温で約1グラム毎立方センチメートルの密度を持ちます。',
          '水銀は室温で最も密度が高い液体で、密度は13.5 g/cm³です。',
          '海面での空気の密度は約1.225 kg/m³です。',
          '密度は温度と圧力によって変化します。'
        ]
      }
    },
    flow: {
      title: '流量',
      description: '流量単位の変換'
    },
    torque: {
      title: 'トルク',
      description: 'トルク単位の変換 (ISO 31-3)'
    },
    data: {
      title: 'データストレージ',
      description: 'データストレージ単位の変換 (IEC 60027)'
    },
    data_rate: {
      title: 'データ転送速度',
      description: 'データ転送速度の変換 (ISO/IEC 80000)'
    },
    currency: {
      title: '通貨',
      description: '各国通貨間の変換 (ISO 4217)'
    },
    cooking: {
      title: '調理単位',
      description: '調理用計量単位の変換'
    },
    numeral: {
      title: '進数',
      description: '異なる進数系間の変換'
    },
    frequency: {
      title: '周波数',
      description: '周波数単位の変換',
      units: {
        hertz: 'ヘルツ',
        kilohertz: 'キロヘルツ',
        megahertz: 'メガヘルツ',
        gigahertz: 'ギガヘルツ',
        cycles_per_second: 'サイクル毎秒',
        rpm: '回転毎分',
        bpm: '拍毎分'
      },
      knowledge: {
        title: '豆知識',
        items: [
          'ヘルツはドイツの物理学者ハインリヒ・ヘルツにちなんで名付けられました。',
          '人間の可聴域は20 Hzから20 kHzの間です。',
          '現代のCPUはギガヘルツ帯で動作します。',
          '人間の心拍数は通常60-100 BPMの範囲です。'
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