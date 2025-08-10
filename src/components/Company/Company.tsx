import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { ReactElement } from 'react'

const Company = (): ReactElement => {
  const t = useTranslations('HomePage.sections.about')

  return (
    <div className="p-8 md:p-20 grid grid-cols-1 md:grid-cols-2">
      <div>
        <div className="prose">
          <h1>{t('title')}</h1>
          <div>
            <p>{t('content.paragraph1')}</p>
            <p>{t('content.paragraph2')}</p>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <div className="relative " style={{ height: '400px' }}>
            <Image
              src="/team.png"
              alt="team"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="flex justify-center">
            <a
              className="text-xs text-slate-400"
              href="https://www.freepik.com/vectors/illustrations"
            >
              Illustrations vector created by pch.vector - www.freepik.com
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Company
