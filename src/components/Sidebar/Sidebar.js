//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import logo from '../../project_images/logo.jpg';


//import sidebar css from react-pro-sidebar module and our custom css 

import "./Sidebar.css";


const Sidebar = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  /*===== EXPANDER MENU  =====*/
  const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId),
      bodypadding = document.getElementById(bodyId)

    if (toggle && navbar) {
      toggle.addEventListener('click', () => {
        navbar.classList.toggle('expander')

        bodypadding.classList.toggle('body-pd')
      })
    }
  }
  showMenu('nav-toggle', 'navbar', 'body-pd')

  /*===== LINK ACTIVE  =====*/
  const linkColor = document.querySelectorAll('.nav__link')
  function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))


  /*===== COLLAPSE MENU  =====*/
  const linkCollapse = document.getElementsByClassName('collapse__link')
  var i

  for (i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function () {
      const collapseMenu = this.nextElementSibling
      collapseMenu.classList.toggle('showCollapse')

      const rotate = collapseMenu.previousElementSibling
      rotate.classList.toggle('rotate')
    })
  }



  class Submenu extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="nav__submenu-item ">
            <a>Our Company</a>
          </li>
          <li className="nav__submenu-item ">
            <a>Our Team</a>
          </li>
          <li className="nav__submenu-item ">
            <a>Our Portfolio</a>
          </li>
        </ul>
      )
    }
  }


  return (
    <>
      <div>


        <div className="l-navbar" id="navbar">
          <nav className="nav">
            <div>
              <div className="nav__brand">
                <ion-icon name="menu-outline" className="nav__toggle" id="nav-toggle" />
                <a href="#" className="nav__logo">Bedimcode</a>
              </div>
              <div className="nav__list">
                <a href="#" className="nav__link active">
                  <ion-icon name="home-outline" className="nav__icon" />
                  <span className="nav__name">Dashboard</span>
                </a>
                <a href="#" className="nav__link">
                  <ion-icon name="chatbubbles-outline" className="nav__icon" />
                  <span className="nav__name">Messenger</span>
                </a>
                <div className="nav__link collapse">
                  <ion-icon name="folder-outline" className="nav__icon" />
                  <span className="nav__name">Projects</span>
                  <ion-icon name="chevron-down-outline" className="collapse__link" />
                  <ul className="collapse__menu">
                    <a href="#" className="collapse__sublink">Data</a>
                    <a href="#" className="collapse__sublink">Group</a>
                    <a href="#" className="collapse__sublink">Members</a>
                  </ul>
                </div>
                <a href="#" className="nav__link">
                  <ion-icon name="pie-chart-outline" className="nav__icon" />
                  <span className="nav__name">Analytics</span>
                </a>
                <div className="nav__link collapse">
                  <ion-icon name="people-outline" className="nav__icon" />
                  <span className="nav__name">Team</span>
                  <ion-icon name="chevron-down-outline" className="collapse__link" />
                  <ul className="collapse__menu">
                    <a href="#" className="collapse__sublink">Data</a>
                    <a href="#" className="collapse__sublink">Group</a>
                    <a href="#" className="collapse__sublink">Members</a>
                  </ul>
                </div>
                <a href="#" className="nav__link">
                  <ion-icon name="settings-outline" className="nav__icon" />
                  <span className="nav__name">Settings</span>
                </a>
              </div>
            </div>
            <a href="#" className="nav__link">
              <ion-icon name="log-out-outline" className="nav__icon" />
              <span className="nav__name">Log Out</span>
            </a>
          </nav>
        </div>
        <h1>Componentes</h1>
        {/* ===== IONICONS ===== */}
        {/* ===== MAIN JS ===== */}
      </div>
    </>
  );
};

export default Sidebar;