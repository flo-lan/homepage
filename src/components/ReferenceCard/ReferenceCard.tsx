import Image from 'next/image'
import React, { ReactElement } from 'react'
import { useTranslations } from 'next-intl'

import TechnologyIcon from './TechnologyIcon'

type ReferenceCardProps = {
  title: string
  link: string
  tags?: string[]
  imgSrc: string
  description: string
  technicalDescription: string
  alt: string
}

export const EmptyCard = (): ReactElement => {
  const t = useTranslations('HomePage')

  return (
    <div className="flex items-center">
      <div
        className="h-fit card  bg-base-100 shadow-xl
    transition ease-in-out hover:-translate-y-3"
      >
        <div className="card-body">
          <h2 className="card-title">{t('sections.portfolio.note')}</h2>
        </div>
      </div>
    </div>
  )
}

const ReferenceCard = (props: ReferenceCardProps): ReactElement => {
  const { title, link, tags, imgSrc, description, technicalDescription, alt } =
    props

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="card bg-base-100 shadow-xl
    transition ease-in-out hover:-translate-y-3 w-80 sm:w-96"
      >
        <figure style={{ height: '150px' }}>
          <Image src={imgSrc} alt={alt} height={150} width={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="divider divider-horizontal" />
            <TechnologyIcon type="Web" />
          </h2>
          <p>{description}</p>
          <div className="divider"></div>
          <p>{technicalDescription}</p>
          {tags && tags.length > 0 && (
            <div className="card-actions justify-end">
              {tags.map((tag) => (
                <div key={tag} className="badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  )
}

ReferenceCard.defaultProps = {
  tags: [],
}

export default ReferenceCard
