import '../style/Header.css'
import '../style/menu.css'

const menu = document.querySelector('.hamburger');
const nav_wrapper = document.querySelector('.nav_wrapper')

const menuHandle = () => {
    menu.classList.toggle('hamburger--active');
    nav_wrapper.classList.toggle('show');
}

function Header() {
    
    return ( 
     <header>
        <div className="logo_wrapper">
            <a className ="logo" href="/"></a>
        </div>
        <nav>
        <button onClick={menuHandle} className="hamburger" aria-label="Menu">
            <span className="hamburger__container" tabindex="-1">
              <span className="hamburger__bars"></span>
            </span>
          </button>
          <div className="nav_wrapper">
            <ul className="main_nav">
                <li className="nav_link">HOME</li>
                <li className="nav_link">PORTFOLIO</li>
                <li className="nav_link">CONTACT ME</li>
            </ul>
          </div>
        </nav>
     </header>
     );
}

export default Header;
