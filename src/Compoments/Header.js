import React from 'react'
import { ReactDOM } from 'react'
export default function Header() {
  return (
    <>
    <div id="menu-bar" class="fas fa-bars"/>
    <br></br>

<nav class="navbar">
    <a id='link' href="#Home">Home </a>
    <a id='link' href="#Page1">Page1 </a>
    <a id='link' href="#Page2">Page2 </a>
    <a id='link' href="#Page3">Page3 </a>
    <a id='link' href="#Page4">Page4 </a>
</nav>

<div class="icons">
    <i class="fas fa-search" id="search-btn"></i>
    <i class="fas fa-user" id="login-btn"></i>
</div>

<form action="" class="search-bar-container">
    <input type="search" id="search-bar" placeholder="search here..."/>
    <label for="search-bar" class="fas fa-search"></label>
</form>
</>
  )
}
