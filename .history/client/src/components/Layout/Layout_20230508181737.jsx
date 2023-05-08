import React from 'react'
import Header from './Header'

const Layout = (props) => {
  return (
    <div>
        <Header/>
        <main>

        {props.children}
        </main>
        <Fo
    </div>
  )
}

export default Layout