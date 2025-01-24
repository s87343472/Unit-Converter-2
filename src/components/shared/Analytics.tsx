'use client'

import Script from 'next/script'

export default function Analytics() {
  // 只在生产环境中加载 GA4
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-P71N1CBBV9`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P71N1CBBV9');
        `}
      </Script>
    </>
  )
} 