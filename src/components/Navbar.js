import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg px-5 bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">
        <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666616500/logo.png" alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/discovery" className="nav-link" >Discovery</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact-us" className="nav-link" >Contact Us</Link>
        </li>
      </ul>
      <div className="d-flex" role="search">
        <Link to="/profile" className='text-decoration-none text-black'>
              <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666619060/Profile.png" alt="" />
        </Link>
        <Link to="/cart"   className='text-decoration-none text-black'>
            <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666619060/Cart.png" alt="" />
         </Link>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar;