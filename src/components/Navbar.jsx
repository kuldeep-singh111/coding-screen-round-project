import React, { useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { FaHeartbeat, FaShoppingBag } from 'react-icons/fa'; 
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';
import './navbar.css';
import ess from "../assets/ess.jpg";

const Navbar = ({ cartItemCount }) => {
  const [showMenu, setShowMenu] = useState(false);
  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleClose = () => {
    setShowMenu(false);
  };

  

  return (
    <>
      <header>
        <Link to="/" className="logo_container">
          <img className="myntra_home" src={ess} alt="Myntra Home" />
        </Link>

        <nav className="nav_bar">
          <Link to="/">Home</Link>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Studio <sup>New</sup></a>
        </nav>

        <div className="search_bar">
          <span className="material-symbols-outlined search_icon"><FiSearch /></span>
          <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <MdPerson />
            <span className="action_name">Profile</span>
          </div>
          <div className="action_container">
            <FaHeartbeat />
            <span className="action_name">Wishlist</span>
          </div>
          <div className="action_container">
            <Link to="/cart">
              <FaShoppingBag />
              <span className="action_name">Bag</span>
              {cartItemCount > 0 && <span className="bag-item-count">{cartItemCount}</span>}
            </Link>
          </div>
          <div className="menubar" onClick={toggleMenu}>
            <IoMdMenu />
          </div>
        </div>

        {showMenu && (
          <div className='responsive'>
            <span className='close-icon' onClick={toggleClose}><IoMdClose /></span>
            <nav className="res-nav">
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Kids</a>
              <a href="#">Home & Living</a>
              <a href="#">Beauty</a>
              <a href="#">Studio <sup>New</sup></a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;


