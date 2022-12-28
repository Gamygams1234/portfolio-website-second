import React, {useState} from 'react';


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
                <li className="nav_link">HOME</li>
                <li className="nav_link">PORTFOLIO</li>
                <li className="nav_link">CONTACT ME</li>
            </ul>
          </div> : null}
        </nav>
     </header>
     );
}

export default Header;
