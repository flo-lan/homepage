import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'de', 'jp'],
  defaultLocale: 'en',
  localeCookie:
    process.env.NEXT_PUBLIC_USE_CASE === 'locale-cookie-false'
      ? false
      : {
          // 200 days
          maxAge: 200 * 24 * 60 * 60,
        },
})
