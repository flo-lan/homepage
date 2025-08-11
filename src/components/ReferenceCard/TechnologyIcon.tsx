import { useTranslations } from 'next-intl'
import React, { ReactElement } from 'react'

type TechnologyIconProps = {
  type: 'Web' | 'Mobile'
}

const TechnologyIcon = (props: TechnologyIconProps): ReactElement => {
  const { type } = props
  const t = useTranslations('HomePage.sections.portfolio')
  const tooltipText = type === 'Web' ? t('webApp') : t('mobileApp')
  return (
    <div className="tooltip tooltip-primary" data-tip={tooltipText}>
      <div className="p-3">
        {type === 'Web' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            style={{ width: '20px' }}
          >
            <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z" />
          </svg>
        )}
        {type === 'Mobile' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            style={{ width: '15px' }}
          >
            <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z" />
          </svg>
        )}
      </div>
    </div>
  )
}

export default TechnologyIcon
