import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import '../style/Header.css'
import '../style/menu.css'

function Header() {
    const [isActive, setActive] = useState(false)

    return ( 
     <header>
        <div className="logo_wrapper">
            <a className ="logo" href="/"></a>
        </div>
        <nav>
        <button onClick={()=> setActive(!isActive)} className="hamburger" aria-label="Menu">
            <span className="hamburger__container" tabindex="-1">
              <span className="hamburger__bars"></span>
            </span>
          </button>
          {isActive ? <div className="nav_wrapper">
            <ul className="main_nav">
                <li><Link onClick={()=> setActive(!isActive)} to='/' className="nav_link">home</Link></li>
                <li><Link onClick={()=> setActive(!isActive)} to='/portfolio' className="nav_link">portfolio</Link></li>
                <li><Link onClick={()=> setActive(!isActive)} to='/contact' className="nav_link">contact me</Link></li>
            </ul>
          </div> : null}
        </nav>
     </header>
     );
}

export default Header;
