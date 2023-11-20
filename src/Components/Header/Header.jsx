import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
             <h1>Knowledge Cafe</h1>
             <div>
                 <a href="">Home</a>
                 <a href="">About</a>
                 <a href="">service</a>
             </div>
             
        </nav>
    );
};

export default Header;