import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
   <>
   <nav N="navbar navbar-expand-lg bg-body-tertiary">
  <div N="container-fluid">
    <button N="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span N="navbar-toggler-icon"></span>
    </button>
    <div N="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink  to='/'  N="navbar-brand" href="#">Hidden brand</NavLink>
      <ul N="navbar-nav me-auto mb-2 mb-lg-0">
        <li N="nav-item">
          <NavLink  to='/' N="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li N="nav-item">
          <NavLink to='/'  N="nav-link" href="#">Link</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/'  class="nav-link disabled">Disabled</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Header
