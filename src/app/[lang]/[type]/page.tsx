import { redirect } from 'next/navigation'
import TypeNav from '@/components/conversion/TypeNav'
import UnitConverter from '@/components/conversion/UnitConverter'
import type { ConversionType } from '@/lib/conversion/types'

const typeLabels: Record<string, string> = {
  length: '长度',
  area: '面积',
  volume: '体积',
  weight: '质量',
  time: '时间',
  temperature: '温度',
  speed: '速度',
  angle: '角度',
  pressure: '压力',
  power: '功率',
  energy: '能量',
  force: '力',
  density: '密度',
  flow: '流量',
  frequency: '扭矩',
  data: '数据存储',
  datarate: '数据传输',
  currency: '货币',
  cooking: '烹饪',
  numeral: '进制',
}

const typeDescriptions: Record<string, string> = {
  length: '在线长度单位换算工具，支持米、厘米、英寸等单位间的转换。',
  area: '在线面积单位换算工具，支持平方米、公顷、英亩等单位间的转换。',
  volume: '在线体积和容量单位换算工具，支持立方米、升、加仑等单位间的转换。可用于液体和固体体积的计算。',
  weight: '在线重量单位换算工具，支持千克、磅、盎司等单位间的转换。',
  temperature: '在线温度单位换算工具，支持摄氏度、华氏度、开尔文等单位间的转换。',
}

export default async function ConversionPage({
  params,
}: {
  params: { lang: string; type: string }
}) {
  const type = params.type as ConversionType

  // 如果类型不存在，重定向到首页
  if (!typeLabels[type]) {
    redirect(`/${params.lang}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TypeNav />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {typeLabels[type]}单位转换器
          </h1>
          <p className="text-gray-600 mb-4">
            {typeDescriptions[type] || `在线${typeLabels[type]}单位换算工具，支持多种${typeLabels[type]}单位之间的转换。`}
          </p>
          
          {/* 使用说明 */}
          <div className="space-y-6 text-sm text-gray-600">
            <div>
              <h2 className="text-base font-medium text-gray-900 mb-2">使用说明</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>在输入框中输入需要转换的数值</li>
                <li>选择输入值的单位</li>
                <li>系统会自动计算并显示其他单位的对应值</li>
                <li>点击结果可以快速复制带单位的数值</li>
              </ol>
            </div>
            
            <div>
              <h2 className="text-base font-medium text-gray-900 mb-2">功能说明</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-800">支持的数值范围</h3>
                  <p>最多支持20位数字（含小数点），最多10位小数。对于超大或超小的数字，会自动使用科学计数法显示。</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">复制功能</h3>
                  <p>点击任意转换结果可以复制对应的数值和单位，方便粘贴使用。</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">粘贴功能</h3>
                  <p>支持粘贴带单位的数值，系统会自动提取数字部分。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <UnitConverter type={type} />
        </div>
      </div>
    </div>
  )
} 