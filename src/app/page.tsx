import { ReactElement } from 'react'
import { redirect } from 'next/navigation'

const IndexPage = (): ReactElement => {
  redirect('/en')
}

export default IndexPage
