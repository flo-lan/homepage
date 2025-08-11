'use client'

import React, { ReactElement, useState } from 'react'
import { useTranslations } from 'next-intl'

import { ServicePages } from './Services.types'
import ServicesMenu from './ServicesMenu'

const Services = (): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState(ServicePages.WebApps)
  const t = useTranslations('HomePage.sections.services')

  return (
    <div className="h-full p-8 md:p-20 flex flex-col">
      <div
        className="sm:grid grid-flow-col gap-4 h-full"
        style={{ gridTemplateRows: '50px calc(100% - 50px)' }}
      >
        <div className="col-span-2 prose pb-12">
          <h1>{t('title')}</h1>
        </div>
        <ServicesMenu
          onMenuClick={(servicePage: ServicePages) =>
            setSelectedMenu(servicePage)
          }
        />

        {selectedMenu === ServicePages.WebApps && (
          <>
            <article className="prose">
              <h2>{t('webApps.title')}</h2>
              <p>{t('webApps.description')}</p>
              <ul>
                {(t.raw('webApps.features') as string[]).map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
              <h3>{t('webApps.technologiesTitle')}</h3>
              <div className="flex flex-wrap gap-4">
                <div className="badge">Typescript</div>
                <div className="badge">React.js</div>
                <div className="badge">NestJS</div>
                <div className="badge">Node.js</div>
                <div className="badge">GraphQL</div>
                <div className="badge">Java</div>
                <div className="badge">Spring Boot</div>
                <div className="badge">Gitlab CI</div>
              </div>
            </article>
            <div className="invisible xl:visible h-0 w-0 xl:h-full xl:w-full mockup-window border row-span-2 g-base-300">
              <div className="flex h-full w-full justify-center px-4 py-16 bg-base-200">
                <div className="invisible">TODO: Mockup Content</div>
              </div>
            </div>
          </>
        )}
        {selectedMenu === ServicePages.MobileApps && (
          <>
            <article className="prose">
              <h2>{t('mobileApps.title')}</h2>
              <p>{t('mobileApps.description')}</p>
              <h3>{t('mobileApps.technologiesTitle')}</h3>
              <div className="flex flex-wrap gap-4">
                <div className="badge">Android SDK</div>
                <div className="badge">Typescript</div>
                <div className="badge">React Native</div>
                <div className="badge">Expo</div>
              </div>
            </article>
            <div
              style={{ maxWidth: 320 }}
              className="row-span-2 mockup-phone h-fit invisible xl:visible h-0 w-0 xl:h-full xl:w-full"
            >
              <div className="camera" />
              <div className="display">
                <div className="artboard artboard-demo phone-1" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Services
