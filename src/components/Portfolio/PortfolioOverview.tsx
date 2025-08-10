import React, { ReactElement } from 'react'
import ReferenceCard, { EmptyCard } from '../ReferenceCard/ReferenceCard'
import { useTranslations } from 'next-intl'

const PortfolioOverview = (): ReactElement => {
  const t = useTranslations('HomePage.sections.portfolio')

  return (
    <div className="p-8 md:p-20">
      <div className="flex justify-end">
        <div className="prose pb-12">
          <h1>{t('title')}</h1>
        </div>
      </div>
      <div className="flex-wrap justify-center flex p-4 gap-14">
        <ReferenceCard
          title={t('projects.neubauprojekte.name')}
          link="https://www.neubauprojekte.wien"
          imgSrc="/neubauprojekte-wien-logo.svg"
          alt="neubauprojekte.wien"
          tags={t.raw('projects.neubauprojekte.tags')}
        />

        <ReferenceCard
          title={t('projects.grundbuchauszug.name')}
          link="https://www.grundbuch-auszug.at"
          imgSrc="/grundbuchauszug-oesterreich.svg"
          alt="grundbuch-auszug.at"
          tags={t.raw('projects.grundbuchauszug.tags')}
        />

        <EmptyCard />
      </div>
    </div>
  )
}

export default PortfolioOverview
