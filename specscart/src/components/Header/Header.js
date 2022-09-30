import React from "react";
import "./Header.css";
import search from "../../images/Search.png";
import profile from "../../images/Profile.png";
import like from "../../images/Like.png";
import house from "../../images/House.png";
import cart from "../../images/Cart.png";

const Header = () => {
  return (
    <nav class="navbar">
      <ul className="nav-links_2">
        <li className="small_list">
          <a href="#">Free Returns</a>
        </li>
        <li className="small_list">|</li>
        <li className="small_list">
          <a href="#">Try At Home</a>
        </li>
        <li className="small_list">|</li>

        <li className="small_list">
          <a href="#">24 Hr Dispatch</a>
        </li>
      </ul>

      <ul className="nav-links">
        <li className="main_list">
          <a href="#">Glasses</a>
        </li>
        <li className="main_list">
          <a href="#">Sunglasses</a>
        </li>

        <li className="main_list">
          <a href="#">Eye-Test</a>
        </li>
        <li className="main_list">
          <a href="#">Blogs</a>
        </li>
      </ul>
      <h1 className="logo">Specscart</h1>

      <div>
        <ul className="nav-links_3">
          <li className="small_list_2">
            <a href="#">+441613125767</a>
          </li>
          <li className="small_list">|</li>
          <li className="small_list">
            <a href="#">Help</a>
          </li>
          <li className="small_list">|</li>

          <li className="small_list">
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>

      <div className="icons">
        <img className="search" src={search} alt="searc" />
        <img className="search" src={profile} alt="profil" />
        <img className="search" src={like} alt="lik" />
        <img className="search" src={house} alt="hous" />
        <img className="search" src={cart} alt="car" />
      </div>
    </nav>
  );
};

export default Header;
