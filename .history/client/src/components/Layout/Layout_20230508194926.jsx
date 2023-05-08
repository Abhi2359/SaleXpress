import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
const Layout = ({children}) => {
  return (
    <div>
      <Helmet>
      <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  
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