import type { Translation } from '../types'

const zh: Translation = {
  common: {
    title: '单位转换器',
    description: '一个功能强大的在线单位转换工具',
    selectType: '选择转换类型：',
  },
  units: {
    length: {
      title: '长度',
      units: {
        meter: '米',
        kilometer: '千米',
        centimeter: '厘米',
        millimeter: '毫米',
        inch: '英寸',
        foot: '英尺',
        yard: '码',
        mile: '英里',
      },
    },
    weight: {
      title: '重量',
      units: {
        kilogram: '千克',
        gram: '克',
        milligram: '毫克',
        pound: '磅',
        ounce: '盎司',
        ton: '吨',
      },
    },
    temperature: {
      title: '温度',
      units: {
        celsius: '摄氏度',
        fahrenheit: '华氏度',
        kelvin: '开尔文',
      },
    },
  },
  buttons: {
    convert: '转换',
    clear: '清除',
    swap: '交换',
    copy: '复制',
  },
  messages: {
    copied: '已复制到剪贴板',
    error: '发生错误',
    invalidNumber: '请输入有效数字',
  },
}

export default zh 