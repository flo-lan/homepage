import React from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Layout from '../components/Layout/Layout'

import '../styles/globals.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
