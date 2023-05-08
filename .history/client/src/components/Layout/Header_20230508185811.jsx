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
      < class="navbar-brand" href="#">Hidden brand</>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          < class="nav-link active" aria-current="page" href="#">Home</>
        </li>
        <li class="nav-item">
          < class="nav-link" href="#">Link</>
        </li>
        <li class="nav-item">
          < class="nav-link disabled">Disabled</>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Header
