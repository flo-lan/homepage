import type { Metadata, NextPage } from 'next'
import React from 'react'
import { useTranslations } from 'next-intl'
import Services from '../../components/Services/Services'
import PortfolioOverview from '../../components/Portfolio/PortfolioOverview'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import ContactForm from '../../components/Contact/ContactForm'
import Company from '../../components/Company/Company'

export const metadata: Metadata = {
  title: 'CodeRain',
  description: 'CodeRain - Company',
  icons: {
    icon: '/favicon.ico',
  },
}

const Home: NextPage = () => {
  const t = useTranslations('HomePage')
  return (
    <div>
      <HomeHeader />
      <div
        id="services"
        className="md:px-12 lg:px-36 "
        style={{ minHeight: '75vh' }}
      >
        <Services />
      </div>
      <div id="portfolio" className="md:px-12 lg:px-36 bg-slate-100">
        <PortfolioOverview />
      </div>
      <div id="company" className="md:px-12 lg:px-36">
        <Company />
      </div>
      <div id="contact" className="md:px-12 lg:px-36 bg-slate-100">
        <div className="p-8 md:p-20">
          <div className="flex justify-end">
            <div className="prose pb-12">
              <h1>{t('contact')}</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
