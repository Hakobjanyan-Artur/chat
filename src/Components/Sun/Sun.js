import React, { useContext } from 'react'
import { themeContext } from '../../App'
import './Sun.css'
export default function Sun() {
  const {theme, toggleTheme} = useContext(themeContext)
  return (
    <div
    onClick={toggleTheme}
    className='Sunborder'>
        <div className="sun">Sun</div>
        <div className="moon">Moon</div>
        <div
        style={{
            left: theme === 'light' ? '40px' : '0'
        }}
        className="switch"></div>
    </div>
  )
}
