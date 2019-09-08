import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div className="pv2 mw8 center">
        <nav className="tr pr4">
          <span className="link dim near-white f6 f5-ns dib mr3 pointer" title="About">About</span>
          <span className="link dim near-white f6 f5-ns dib pointer" title="Contact">Settings</span>
        </nav>
      </div>);
  }
};

export default Menu;