import React from 'react';
import './Header.scss';


const Header = (props) => {
  return (
  <header className="bg-navy tc ph4 pv3 gold">
    <h1 className="title gold f3 f2-m f1-l mv3">
      Speech Squares
    </h1>
    <h5>A tool to help language learners</h5>
  </header>);
};

export default Header;
