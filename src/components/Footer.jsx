import '../style/Footer.css'




function Footer() {
    return ( 
        <footer className='footer'>
            <div className="logo_white"></div>
            
            <ul className="footer_nav">
                <li className="nav_link">HOME</li>
                <li className="nav_link">PORTFOLIO</li>
                <li className="nav_link">CONTACT ME</li>
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