import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
  <div>
  <meta charSet="UTF-8" />
  <meta name="description" content=/>
  <meta name="keywords" content="HTML, CSS, JavaScript" />
  <meta name="author" content="John Doe" />
</div>

      </Helmet>
        <Header/>
        <main style={{minHeight:"80vh"}}>

        {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout