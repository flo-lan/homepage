import React, { ReactElement, ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import Layout from '@/components/Layout/Layout'

type Props = {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

const inter = Inter({ subsets: ['latin'] })

const LocaleLayout = async ({
  params,
  children,
}: Props): Promise<ReactElement> => {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html className={inter.className} lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
