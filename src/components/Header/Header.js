import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../../project_images/logo.jpg';
import { AiOutlineMenu } from "react-icons/ai";


const Header = ({
  menuCollapse, menuIconClick
}) => (
  <div className="header">
    <img src={logo} className="project_logo" />
    <i onClick={menuIconClick} className="material-icons"><AiOutlineMenu /></i>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
