import Head from 'next/head'
import React, { JSXElementConstructor, ReactHTMLElement } from 'react'

type Props = {
  children : any,
  title?: string,
  description?: string
}

const Layout : React.FC<Props> = ({children, title, description}) => {
  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw'}}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
      NAVBAR
      </nav>
      <main className='flex-grow' style={{ height: '100%', display: 'flex',flexDirection:'column',flex:1, flexGrow: 1}}>
        {children}
      </main>
      <footer>
        footer
      </footer>
      </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'NEXT JS SAMPLE APP',
  description: "LOREM IMPUSM"
}