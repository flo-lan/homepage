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
          description={t('projects.neubauprojekte.description')}
          technicalDescription={t(
            'projects.neubauprojekte.technicalDescription'
          )}
          tags={t.raw('projects.neubauprojekte.tags')}
        />

        <ReferenceCard
          title={t('projects.grundbuchauszug.name')}
          link="https://www.grundbuch-auszug.at"
          imgSrc="/grundbuchauszug-oesterreich.svg"
          alt="grundbuch-auszug.at"
          description={t('projects.grundbuchauszug.description')}
          technicalDescription={t(
            'projects.grundbuchauszug.technicalDescription'
          )}
          tags={t.raw('projects.grundbuchauszug.tags')}
        />

        <ReferenceCard
          title={t('projects.uidcheck.name')}
          link="https://www.uid-check.at"
          imgSrc="/uid-check-logo.svg"
          alt="uid-check.at"
          description={t('projects.uidcheck.description')}
          technicalDescription={t('projects.uidcheck.technicalDescription')}
          tags={t.raw('projects.uidcheck.tags')}
        />

        <EmptyCard />
      </div>
    </div>
  )
}

export default PortfolioOverview
