import { Link } from 'react-router-dom';

import '../style/Footer.css'

function Footer() {
    return ( 
        <footer className='footer'>
            <div className="logo_white"></div>
                        <ul className="footer_nav">
                <li><Link to='/' className="nav_link">home</Link></li>
                <li> <Link to='/portfolio' className="nav_link">portfolio</Link></li>
                <li> <Link to='/contact' className="nav_link">contact me</Link></li>
            </ul>
                   <div className="socials_wrapper">
            <a className='social github' href="/"><i className="fa-brands fa-github"></i></a>
            <a className='social twitter' href="/"><i className="fa-brands fa-twitter"></i></a>
            <a className='social linkedin' href="/"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </footer>
     );
}

export default Footer;