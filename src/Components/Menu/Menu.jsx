import React from 'react';

const Menu = (props) => {
  return (
    <div className="pv2 bg-black w-100">
      <div className="center">
        <nav className="tr pr4">
          <span className="link dim near-white f6 f5-ns dib pointer"
            onClick={props.openSettingsModal}>Settings</span>
        </nav>
      </div>
    </div>);
};

export default Menu;