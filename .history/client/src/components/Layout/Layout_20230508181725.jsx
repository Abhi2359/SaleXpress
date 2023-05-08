import React from 'react'
import Header from './Header'

const Layout = (props) => {
  return (
    <div>
        <Header/>
        <main>
            
        </main>
        {props.children}
    </div>
  )
}

export default Layout