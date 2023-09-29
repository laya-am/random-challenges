import React from 'react'
import Navigation from '../Navigation'

export default function Layout({children}) {
  return (
    <>
      {/* <Head>Art Gallery</Head> */}
      <main>{children}</main>
      <Navigation />
    </>
  )
}
