import React from 'react';
import './Header.css'

const Header = function(props){
    return(
        <div className="headerStyle">
            { props.heading }
        </div>
    )
}


export default Header;