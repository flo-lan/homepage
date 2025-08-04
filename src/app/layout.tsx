import React, { FunctionComponent } from 'react'

import '../../styles/globals.css'

const RootLayout: FunctionComponent = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
