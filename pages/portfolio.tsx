import { NextPage } from 'next'
import React from 'react'
import PortfolioOverview from '../components/Portfolio/PortfolioOverview'

const Portfolio: NextPage = () => (
  <div className="page bg-base-300 h-full">
    <PortfolioOverview />
  </div>
)

export default Portfolio
