import { Locale, useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LocaleData {
  label: string
  flag: string
}

interface Locales {
  [key: Locale]: LocaleData
}

const locales: Locales = {
  en: { label: 'English', flag: '🇬🇧' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
  jp: { label: '日本語', flag: '🇯🇵' },
}

export default function LocaleSwitcher() {
  const currentLocale = useLocale()
  const currentPath = usePathname()

  function stripLocale(pathname: string) {
    const segments = pathname.split('/')
    if (Object.keys(locales).includes(segments[1])) {
      segments.splice(1, 1) // remove the current locale
    }
    return segments.join('/') || '/'
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost rounded-field hover:bg-primary"
      >
        <span className="pr-1">
          {currentLocale ? locales[currentLocale].flag : '🇬🇧'}
        </span>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <ul className="menu dropdown-content bg-neutral rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
        {Object.keys(locales).map((locale) => (
          <li className="hover:bg-primary">
            <Link
              key={locale}
              href={`/${locale}${stripLocale(currentPath)}`}
              locale={locale}
              scroll={false}
            >
              {locales[locale].flag} {locales[locale].label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
