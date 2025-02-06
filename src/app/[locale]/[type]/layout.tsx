import { Metadata } from 'next'
import { ValidLocale } from '@/lib/i18n/types'
import { seoConfig } from '@/lib/i18n/seo'

interface LayoutProps {
    params: {
        locale: ValidLocale
        type: string
    }
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const baseUrl = 'https://www.metric-converter.com'
    const canonicalUrl = `${baseUrl}/${params.locale}/${params.type}`

    const seo = seoConfig[params.locale] || seoConfig['en']

    return {
        title: seo.title,
        description: seo.description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: canonicalUrl,
            siteName: 'Metric Converter',
            type: 'website',
        },
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}