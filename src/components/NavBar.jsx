import React from 'react';
import './Style/NavBar.css'

const NavBar = ({setCartcount,cartCount,SetProducts,Products}) => {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!" id="nav-title">Shop In Style</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse collapse show" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" id="ul-texts">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li class="dropdown-divider"> <hr></hr></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                       <span style={{marginRight:"0.6em"}}><i class="fa-solid fa-cart-shopping"></i></span> 
                            <span style={{marginRight:"0.3em"}}>Cart</span>
                            <span class="badge bg-dark text-white ms-1 rounded-pill" id="count">{cartCount}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;