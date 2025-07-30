import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Services from '../components/Services/Services'
import PortfolioOverview from '../components/Portfolio/PortfolioOverview'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import ContactForm from '../components/Contact/ContactForm'
import Company from '../components/Company/Company'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>CodeRain</title>
      <meta name="description" content="CodeRain - Company" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
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
            <h1>Kontakt</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
)

export default Home
