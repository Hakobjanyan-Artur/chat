import React, { useContext } from 'react';
import { themeContext } from '../../App';
import './Header.css'

const Header = () => {
    const {theme} = useContext(themeContext)
    return (
        <div className='header'>
            <span 
            style={{
                color: theme === 'light' ? '#222224' : ''
            }}
            >My Chat</span>
        </div>
    );
}

export default Header;
