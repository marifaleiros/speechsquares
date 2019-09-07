import React from 'react';

const AddSquareForm = () => {
    return (
        <div className="bg-blue2 center pa4 cf">
            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="type a 'sound' and add it to the board" type="text" name="email-address" id="email-address" />
            <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Add" />
        </div>);
};

export default AddSquareForm;
