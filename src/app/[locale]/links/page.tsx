import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Links')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LinksPage() {
  const t = await getTranslations('Links')

  const links = [
    {
      name: 'TopIndie.dev',
      url: 'https://topindie.dev/?utm_source=unitconverter&utm_medium=link&utm_campaign=links',
      description: 'A project gathering place for indie developers',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{link.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
} 