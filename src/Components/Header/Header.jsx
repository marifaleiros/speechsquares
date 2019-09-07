import React from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
  <header className="bg-navy tc ph4 pv3">
    <h1 className="title gold f3 f2-m f1-l mv3">
      Speech Squares
    </h1>
    <Menu/>
  </header>);
};

export default Header;
