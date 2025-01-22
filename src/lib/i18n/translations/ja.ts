import type { Translation } from '../types'

const ja: Translation = {
  common: {
    title: '単位変換ツール',
    description: '様々な単位を変換できる便利なオンラインツール。',
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
      others: 'その他の単位'
    },
    instructions: {
      title: '使用方法',
      steps: {
        input: '変換したい値を入力してください',
        select: '入力値の単位を選択してください',
        auto: 'システムが自動的に他の単位の対応する値を計算して表示します',
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
    from: 'から',
    to: 'へ',
    selectUnit: '単位を選択'
  },
  units: {
    length: {
      title: '長さ',
      description: '線形測定単位の変換 (ISO 31-1)'
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
      description: '密度単位の変換 (ISO 31-3)'
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
    selectUnit: '両方の単位を選択してください'
  }
}

export default ja 