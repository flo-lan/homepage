import React, { FunctionComponent } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout: FunctionComponent = (props) => {
  const { children } = props
  return (
    <>
      <Navbar>
        <main>{children}</main>
        <Footer />
      </Navbar>
    </>
  )
}

export default Layout
