'use client'

import React from 'react'
import { useLanguage } from '@/components/shared/LanguageProvider'
import type { ConversionType } from '@/lib/conversion/types'

interface ConversionIntroductionProps {
  type: ConversionType
  fromUnit: string
  toUnit: string
  fromUnitLabel: string
  toUnitLabel: string
  fromUnitSymbol?: string
  toUnitSymbol?: string
}

export default function ConversionIntroduction({
  type,
  fromUnit,
  toUnit,
  fromUnitLabel,
  toUnitLabel,
  fromUnitSymbol,
  toUnitSymbol
}: ConversionIntroductionProps) {
  const { language } = useLanguage()

  // 根据不同语言返回不同的介绍内容
  const getIntroduction = () => {
    // 默认返回中文内容
    if (language === 'en') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Converting {fromUnitLabel} to {toUnitLabel}
          </h2>
          <p className="mb-3">
            metric-converter's {type === 'length' ? 'length' : type} converter allows you to easily convert from {fromUnitLabel} to {toUnitLabel} with high precision. 
            This is a useful conversion for a variety of practical applications in everyday life, education, 
            and professional fields.
          </p>
          <p className="mb-3">
            The {fromUnitLabel} is {getUnitDescription(fromUnit, 'en')} while the {toUnitLabel} is {getUnitDescription(toUnit, 'en')}. 
            Understanding the relationship between these units helps in making accurate conversions.
          </p>
          <p>
            Use this conversion tool to instantly calculate {fromUnitLabel} to {toUnitLabel} with up to 10 decimal places 
            of precision. metric-converter's converter handles both very large and very small numbers accurately.
          </p>
        </>
      )
    } else if (language === 'zh-TW') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4">
            {fromUnitLabel}轉{toUnitLabel}換算
          </h2>
          <p className="mb-3">
            metric-converter的{type === 'length' ? '長度' : type}換算器可讓您輕鬆精確地將{fromUnitLabel}轉換為{toUnitLabel}。
            這項換算在日常生活、教育和專業領域中具有各種實用應用。
          </p>
          <p className="mb-3">
            {fromUnitLabel}是{getUnitDescription(fromUnit, 'zh-TW')}，而{toUnitLabel}是{getUnitDescription(toUnit, 'zh-TW')}。
            了解這些單位之間的關係有助於進行準確的換算。
          </p>
          <p>
            使用此換算工具可立即計算{fromUnitLabel}至{toUnitLabel}，精確度可達小數點後10位。
            metric-converter的換算器能夠精確處理極大和極小的數字。
          </p>
        </>
      )
    } else if (language === 'ja') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4">
            {fromUnitLabel}から{toUnitLabel}への変換
          </h2>
          <p className="mb-3">
            metric-converterの{type === 'length' ? '長さ' : type}変換ツールを使用すると、{fromUnitLabel}から{toUnitLabel}への高精度変換が簡単に行えます。
            この変換は、日常生活、教育、専門分野で様々な実用的な用途があります。
          </p>
          <p className="mb-3">
            {fromUnitLabel}は{getUnitDescription(fromUnit, 'ja')}であり、{toUnitLabel}は{getUnitDescription(toUnit, 'ja')}です。
            これらの単位間の関係を理解することで、正確な変換が可能になります。
          </p>
          <p>
            この変換ツールを使用して、{fromUnitLabel}から{toUnitLabel}への計算を小数点以下10桁の精度で即座に行うことができます。
            metric-converterの変換ツールは、非常に大きな数値と非常に小さな数値を正確に処理します。
          </p>
        </>
      )
    } else {
      // 默认中文（简体）
      return (
        <>
          <h2 className="text-xl font-semibold mb-4">
            {fromUnitLabel}转{toUnitLabel}换算
          </h2>
          <p className="mb-3">
            metric-converter的{type === 'length' ? '长度' : type}换算器允许您轻松精确地将{fromUnitLabel}转换为{toUnitLabel}。
            这种换算在日常生活、教育和专业领域中有各种实用应用。
          </p>
          <p className="mb-3">
            {fromUnitLabel}是{getUnitDescription(fromUnit, 'zh-CN')}，而{toUnitLabel}是{getUnitDescription(toUnit, 'zh-CN')}。
            了解这些单位之间的关系有助于进行准确的换算。
          </p>
          <p>
            使用此换算工具可立即计算{fromUnitLabel}至{toUnitLabel}，精确度可达小数点后10位。
            metric-converter的换算器能够精确处理极大和极小的数字。
          </p>
        </>
      )
    }
  }
  
  // 获取单位的历史背景
  const getUnitHistory = () => {
    if (language === 'en') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4 mt-8">
            History of {fromUnitLabel} and {toUnitLabel}
          </h2>
          <div className="mb-3">
            {getUnitHistoryContent(fromUnit, toUnit, 'en')}
          </div>
        </>
      )
    } else if (language === 'zh-TW') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4 mt-8">
            {fromUnitLabel}和{toUnitLabel}的歷史背景
          </h2>
          <div className="mb-3">
            {getUnitHistoryContent(fromUnit, toUnit, 'zh-TW')}
          </div>
        </>
      )
    } else if (language === 'ja') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4 mt-8">
            {fromUnitLabel}と{toUnitLabel}の歴史
          </h2>
          <div className="mb-3">
            {getUnitHistoryContent(fromUnit, toUnit, 'ja')}
          </div>
        </>
      )
    } else {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4 mt-8">
            {fromUnitLabel}和{toUnitLabel}的历史背景
          </h2>
          <div className="mb-3">
            {getUnitHistoryContent(fromUnit, toUnit, 'zh-CN')}
          </div>
        </>
      )
    }
  }
  
  // 获取实际应用场景
  const getPracticalApplications = () => {
    if (language === 'en') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4 mt-8">
            Practical Applications of {fromUnitLabel} to {toUnitLabel} Conversion
          </h2>
          {getApplicationContent(fromUnit, toUnit, type, 'en')}
        </>
      )
    } else if (language === 'zh-TW') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4 mt-8">
            {fromUnitLabel}至{toUnitLabel}換算的實際應用
          </h2>
          {getApplicationContent(fromUnit, toUnit, type, 'zh-TW')}
        </>
      )
    } else if (language === 'ja') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4 mt-8">
            {fromUnitLabel}から{toUnitLabel}への変換の実用的な応用
          </h2>
          {getApplicationContent(fromUnit, toUnit, type, 'ja')}
        </>
      )
    } else {
      return (
        <>
          <h2 className="text-xl font-semibold mb-4 mt-8">
            {fromUnitLabel}至{toUnitLabel}换算的实际应用
          </h2>
          {getApplicationContent(fromUnit, toUnit, type, 'zh-CN')}
        </>
      )
    }
  }

  // 根据单位ID和语言获取单位描述
  const getUnitDescription = (unitId: string, lang: string): React.ReactNode => {
    // 这里应该根据unitId返回对应的单位描述，目前使用简单的模拟数据
    const descriptions: Record<string, Record<string, string>> = {
      'metric_meter': {
        'en': 'the basic unit of length in the metric system',
        'zh-CN': '公制系统中的基本长度单位',
        'zh-TW': '公制系統中的基本長度單位',
        'ja': 'メートル法の基本的な長さの単位'
      },
      'metric_kilometer': {
        'en': 'a unit equal to 1000 meters',
        'zh-CN': '等于1000米的单位',
        'zh-TW': '等於1000米的單位',
        'ja': '1000メートルに相当する単位'
      },
      'imperial_foot': {
        'en': 'a unit of length equal to 12 inches or 0.3048 meters',
        'zh-CN': '等于12英寸或0.3048米的长度单位',
        'zh-TW': '等於12英寸或0.3048米的長度單位',
        'ja': '12インチまたは0.3048メートルに相当する長さの単位'
      },
      'metric_kilogram': {
        'en': 'the basic unit of mass in the metric system',
        'zh-CN': '公制系统中的基本质量单位',
        'zh-TW': '公制系統中的基本質量單位',
        'ja': 'メートル法の基本的な質量の単位'
      },
      // 可以根据需要添加更多单位描述
    }

    const descriptionText = descriptions[unitId]?.[lang] || `common ${type} unit`;
    return <span>{descriptionText}</span>;
  }
  
  // 获取单位历史内容
  const getUnitHistoryContent = (fromUnit: string, toUnit: string, lang: string): React.ReactNode => {
    // 根据单位类型和语言提供历史背景信息
    let contentText = '';
    
    if (fromUnit.includes('metric') && toUnit.includes('imperial') || 
        fromUnit.includes('imperial') && toUnit.includes('metric')) {
      
      if (lang === 'en') {
        contentText = `The metric system originated during the French Revolution in the late 18th century, designed as a decimal-based system for scientific precision. The imperial system, on the other hand, evolved over centuries in England from various traditional measurement systems. The relationship between these systems was officially defined in 1959 when the international yard and pound agreement standardized the conversion rates between imperial and metric units.`;
      } else if (lang === 'zh-CN') {
        contentText = `公制系统起源于18世纪末法国大革命时期，被设计为以十进制为基础的科学精确系统。而英制系统则是在英格兰经过几个世纪从各种传统测量系统演变而来。这两个系统之间的关系在1959年正式确定，当时国际码和磅协议标准化了英制和公制单位之间的转换率。`;
      } else if (lang === 'zh-TW') {
        contentText = `公制系統起源於18世紀末法國大革命時期，被設計為以十進制為基礎的科學精確系統。而英制系統則是在英格蘭經過幾個世紀從各種傳統測量系統演變而來。這兩個系統之間的關係在1959年正式確定，當時國際碼和磅協議標準化了英制和公制單位之間的轉換率。`;
      } else if (lang === 'ja') {
        contentText = `メートル法は18世紀末のフランス革命時に誕生し、科学的精度のための十進法に基づくシステムとして設計されました。一方、インペリアル（英国式）システムは、イングランドで何世紀にもわたりさまざまな伝統的な測定システムから発展しました。これらのシステム間の関係は、1959年に国際ヤードとポンド協定がインペリアル単位とメートル単位間の変換率を標準化したときに正式に定義されました。`;
      }
    } else {
      // 默认返回通用的历史信息
      if (lang === 'en') {
        contentText = `Measurement systems have evolved throughout human history to meet the needs of commerce, science, and everyday life. Different civilizations developed their own units of measurement, which were eventually standardized as global trade and scientific cooperation increased. Today, we have international standards that define precisely how units relate to each other, making conversions between ${fromUnitLabel} and ${toUnitLabel} consistent worldwide.`;
      } else if (lang === 'zh-CN') {
        contentText = `测量系统在人类历史上不断发展，以满足商业、科学和日常生活的需求。不同的文明发展了自己的计量单位，随着全球贸易和科学合作的增加，这些单位最终被标准化。今天，我们拥有国际标准，精确定义了单位之间的关系，使${fromUnitLabel}和${toUnitLabel}之间的转换在全球范围内保持一致。`;
      } else if (lang === 'zh-TW') {
        contentText = `測量系統在人類歷史上不斷發展，以滿足商業、科學和日常生活的需求。不同的文明發展了自己的計量單位，隨著全球貿易和科學合作的增加，這些單位最終被標準化。今天，我們擁有國際標準，精確定義了單位之間的關係，使${fromUnitLabel}和${toUnitLabel}之間的轉換在全球範圍內保持一致。`;
      } else if (lang === 'ja') {
        contentText = `測定システムは、商業、科学、日常生活のニーズを満たすために人類の歴史を通じて進化してきました。異なる文明は独自の測定単位を開発し、グローバル貿易と科学的協力が増加するにつれて、これらの単位は最終的に標準化されました。今日、単位間の関係を正確に定義する国際標準があり、${fromUnitLabel}と${toUnitLabel}の間の変換が世界中で一貫して行われるようになっています。`;
      } else {
        contentText = `The history of measurement units is a fascinating journey through human civilization and scientific advancement.`;
      }
    }
    
    // 将文本内容包装在p标签中返回
    return <p>{contentText}</p>;
  }
  
  // 获取应用场景内容
  const getApplicationContent = (fromUnit: string, toUnit: string, type: ConversionType, lang: string): React.ReactNode => {
    // 根据转换类型提供应用场景
    if (type === 'length') {
      if (lang === 'en') {
        return (
          <>
            <p className="mb-2">Converting between {fromUnitLabel} and {toUnitLabel} is essential in many fields:</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Construction and architecture: Blueprints and materials may use different units depending on location and industry standards.</li>
              <li>International travel and shipping: Distance calculations often require converting between metric and imperial units.</li>
              <li>Manufacturing: Product specifications may need to be communicated in different measurement systems.</li>
              <li>Education: Students learn to convert between different units as part of mathematics and science curricula.</li>
            </ul>
          </>
        );
      } else if (lang === 'zh-CN') {
        return (
          <>
            <p className="mb-2">{fromUnitLabel}和{toUnitLabel}之间的转换在许多领域至关重要：</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>建筑和建筑设计：蓝图和材料可能会根据位置和行业标准使用不同的单位。</li>
              <li>国际旅行和运输：距离计算通常需要在公制和英制单位之间进行转换。</li>
              <li>制造业：产品规格可能需要以不同的计量系统进行沟通。</li>
              <li>教育：学生学习在不同单位之间进行转换，作为数学和科学课程的一部分。</li>
            </ul>
          </>
        );
      } else if (lang === 'zh-TW') {
        return (
          <>
            <p className="mb-2">{fromUnitLabel}和{toUnitLabel}之間的轉換在許多領域至關重要：</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>建築和建築設計：藍圖和材料可能會根據位置和行業標準使用不同的單位。</li>
              <li>國際旅行和運輸：距離計算通常需要在公制和英制單位之間進行轉換。</li>
              <li>製造業：產品規格可能需要以不同的計量系統進行溝通。</li>
              <li>教育：學生學習在不同單位之間進行轉換，作為數學和科學課程的一部分。</li>
            </ul>
          </>
        );
      } else if (lang === 'ja') {
        return (
          <>
            <p className="mb-2">{fromUnitLabel}と{toUnitLabel}の間の変換は、多くの分野で不可欠です：</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>建設と建築：設計図と材料は、場所や業界標準によって異なる単位を使用する場合があります。</li>
              <li>国際旅行と輸送：距離計算では、メートル法と英国式単位の間の変換が必要になることがよくあります。</li>
              <li>製造：製品仕様は、異なる測定システムで伝達する必要がある場合があります。</li>
              <li>教育：学生は数学と科学のカリキュラムの一環として、異なる単位間の変換を学びます。</li>
            </ul>
          </>
        );
      }
    } else if (type === 'weight') {
      if (lang === 'en') {
        return (
          <>
            <p className="mb-2">Converting between {fromUnitLabel} and {toUnitLabel} is common in:</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Cooking and baking: Recipes from different regions often specify ingredients in different weight units.</li>
              <li>Medicine: Dosages may be calculated based on body weight in specific units.</li>
              <li>Fitness and health: Body weight and exercise equipment weights may be measured in different systems.</li>
              <li>Shipping and logistics: Package weights may need to be converted for international shipping requirements.</li>
            </ul>
          </>
        );
      } else if (lang === 'zh-CN') {
        return (
          <>
            <p className="mb-2">{fromUnitLabel}和{toUnitLabel}之间的转换在以下方面很常见：</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>烹饪和烘焙：来自不同地区的食谱通常以不同的重量单位指定配料。</li>
              <li>医学：剂量可能根据特定单位的体重计算。</li>
              <li>健身和健康：体重和健身器材的重量可能以不同的系统测量。</li>
              <li>运输和物流：为了满足国际运输要求，可能需要转换包裹重量。</li>
            </ul>
          </>
        );
      } else if (lang === 'zh-TW') {
        return (
          <>
            <p className="mb-2">{fromUnitLabel}和{toUnitLabel}之間的轉換在以下方面很常見：</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>烹飪和烘焙：來自不同地區的食譜通常以不同的重量單位指定配料。</li>
              <li>醫學：劑量可能根據特定單位的體重計算。</li>
              <li>健身和健康：體重和健身器材的重量可能以不同的系統測量。</li>
              <li>運輸和物流：為了滿足國際運輸要求，可能需要轉換包裹重量。</li>
            </ul>
          </>
        );
      } else if (lang === 'ja') {
        return (
          <>
            <p className="mb-2">{fromUnitLabel}と{toUnitLabel}の間の変換は、以下の分野で一般的です：</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>料理とベーキング：異なる地域のレシピでは、材料をさまざまな重量単位で指定することがよくあります。</li>
              <li>医学：投薬量は、特定の単位での体重に基づいて計算される場合があります。</li>
              <li>フィットネスと健康：体重とエクササイズ機器の重量は、異なるシステムで測定される場合があります。</li>
              <li>配送と物流：国際配送要件のためにパッケージの重量を変換する必要がある場合があります。</li>
            </ul>
          </>
        );
      }
    }
    
    // 默认通用应用
    if (lang === 'en') {
      return (
        <>
          <p className="mb-2">Converting between {fromUnitLabel} and {toUnitLabel} is useful in various scenarios:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>International communication: Different regions use different measurement standards.</li>
            <li>Technical documentation: Specifications may need to be provided in multiple unit systems.</li>
            <li>Education: Understanding conversion helps build mathematical skills and scientific literacy.</li>
            <li>Everyday problem-solving: From cooking to DIY projects, unit conversion is a practical skill.</li>
          </ul>
        </>
      );
    } else if (lang === 'zh-CN') {
      return (
        <>
          <p className="mb-2">{fromUnitLabel}和{toUnitLabel}之间的转换在各种情况下都很有用：</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>国际交流：不同地区使用不同的测量标准。</li>
            <li>技术文档：可能需要以多种单位系统提供规格。</li>
            <li>教育：理解转换有助于建立数学技能和科学素养。</li>
            <li>日常问题解决：从烹饪到DIY项目，单位转换是一项实用技能。</li>
          </ul>
        </>
      );
    } else if (lang === 'zh-TW') {
      return (
        <>
          <p className="mb-2">{fromUnitLabel}和{toUnitLabel}之間的轉換在各種情況下都很有用：</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>國際交流：不同地區使用不同的測量標準。</li>
            <li>技術文檔：可能需要以多種單位系統提供規格。</li>
            <li>教育：理解轉換有助於建立數學技能和科學素養。</li>
            <li>日常問題解決：從烹飪到DIY項目，單位轉換是一項實用技能。</li>
          </ul>
        </>
      );
    } else if (lang === 'ja') {
      return (
        <>
          <p className="mb-2">{fromUnitLabel}と{toUnitLabel}の間の変換は、さまざまなシナリオで役立ちます：</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>国際コミュニケーション：地域によって異なる測定標準が使用されています。</li>
            <li>技術文書：仕様は複数の単位システムで提供する必要がある場合があります。</li>
            <li>教育：変換を理解することは、数学的スキルと科学的リテラシーの構築に役立ちます。</li>
            <li>日常的な問題解決：料理からDIYプロジェクトまで、単位変換は実用的なスキルです。</li>
          </ul>
        </>
      );
    }
    
    return (
      <p>Converting between different units is a practical skill used in many real-world situations.</p>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {getIntroduction()}
      {getPracticalApplications()}
      {getUnitHistory()}
    </div>
  )
} 