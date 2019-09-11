import React from 'react';

const Menu = (props) => {
  return (
    <div className="pv2 mw8 center bg-black">
      <nav className="tr pr4">
        {/* <span className="link dim near-white f6 f5-ns dib mr3 pointer" title="About">About</span> */}
        <span className="link dim near-white f6 f5-ns dib pointer" 
          onClick={props.openSettingsModal}>Settings</span>
      </nav>
    </div>);
};

export default Menu;