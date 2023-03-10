import React from 'react'

const Navbar = () => {
  return (
    <div className='outer'>
        <nav className='navbar'>
            <div className='logo'>
                <img src='assets/hedesha_logo.png' alt='hedesha logo'/>
                <h3><a href='#'>Hedesha Freighters</a></h3>
            </div>
            <ul className='right'>
                <li>
                    <a href='#about'>About us</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
                <li>
                    <a href='#'>News</a>
                </li>
                <li>
                    <a href='#'>Contact us</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar