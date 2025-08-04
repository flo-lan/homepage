import React, { ReactElement, ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import Layout from '@/components/Layout/Layout'

type Props = {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
