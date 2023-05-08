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
  <meta name="description" content={description}/>
  <meta name="keywords" content={keywords}/>
  <meta name="author" content={aur} />
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