import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LocaleAwareLinkProps extends React.PropsWithChildren {
  href: string
}

const LocaleAwareLink = (props: LocaleAwareLinkProps): ReactElement => {
  const { href, children } = props
  const { locale } = useRouter()

  const localeHref = locale ? `/${locale}/${href}` : `/${href}`
  return (
    <Link href={localeHref} scroll={false}>
      {children}
    </Link>
  )
}

export default LocaleAwareLink
