import React, { ReactElement } from 'react'
import ReferenceCard, { EmptyCard } from '../ReferenceCard/ReferenceCard'

const PortfolioOverview = (): ReactElement => (
  <div className="p-8 md:p-20">
    <div className="flex justify-end">
      <div className="prose pb-12">
        <h1>Portfolio</h1>
      </div>
    </div>
    <div className="flex-wrap justify-center flex p-4 gap-14">
      <ReferenceCard
        title="neubauprojekte.wien"
        link="https://www.neubauprojekte.wien"
        imgSrc="/neubauprojekte-wien-logo.svg"
        alt="neubauprojekte.wien"
        tags={['Responsive Web-App', 'SEO', 'Deployment']}
      />

      <ReferenceCard
        title="grundbuch-auszug.at"
        link="https://www.grundbuch-auszug.at"
        imgSrc="/grundbuchauszug-oesterreich.svg"
        alt="grundbuch-auszug.at"
        tags={['Shop system integration', 'Backend']}
      />

      <EmptyCard />
    </div>
  </div>
)

export default PortfolioOverview
