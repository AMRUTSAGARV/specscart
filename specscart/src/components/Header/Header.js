import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar">
      <ul class="nav-links">
        <li>
          <a href="#">Glasses</a>
        </li>
        <li>
          <a href="#">Sunglasses</a>
        </li>

        <li>
          <a href="#">Eye-Test</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
      </ul>
      <h1 class="logo">Specscart</h1>
    </nav>
  );
};

export default Header;
