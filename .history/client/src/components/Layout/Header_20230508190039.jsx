import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
   <>
   <nav classNa="navbar navbar-expand-lg bg-body-tertiary">
  <div classNa="container-fluid">
    <button classNa="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span classNa="navbar-toggler-icon"></span>
    </button>
    <div classNa="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink  to='/'  classNa="navbar-brand" href="#">Hidden brand</NavLink>
      <ul classNa="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNa="nav-item">
          <NavLink  to='/' classNa="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li classNa="nav-item">
          <NavLink to='/'  classNa="nav-link" href="#">Link</NavLink>
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
