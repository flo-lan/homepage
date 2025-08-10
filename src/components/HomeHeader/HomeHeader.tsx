import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { ReactElement } from 'react'

const HomeHeader = (): ReactElement => {
  const t = useTranslations('HomePage.sections.titleCard')

  return (
    <div
      className="hero"
      style={{
        height: '85vh',
        backgroundImage:
          'radial-gradient(circle at bottom right, #f59f00, #9A031E, #131D2A)',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content p-8 ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <Image src="/logo.png" width={405} height={105} alt="CodeRain" />
          </h1>
          <p className="mb-5">{t('tagline')}</p>
          <br />
          <a href="#services">
            <button
              type="button"
              className="btn btn-primary text-white hover:text-neutral"
            >
              {t('learnMore')}
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
