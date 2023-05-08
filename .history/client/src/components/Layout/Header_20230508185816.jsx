import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Nav class="navbar-brand" href="#">Hidden brand</Nav>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Nav class="nav-link active" aria-current="page" href="#">Home</Nav>
        </li>
        <li class="nav-item">
          <Nav class="nav-link" href="#">Link</Nav>
        </li>
        <li class="nav-item">
          <Nav class="nav-link disabled">Disabled</Nav>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Header
