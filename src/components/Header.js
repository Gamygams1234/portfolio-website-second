import Nav from './Nav'

import '../style/Header.css'

function Header() {
    return ( 
     <Header>
        <div className="logo">
            <img src="../images/logo.svg" alt="logo" />
        </div>
        <Nav/>
     </Header>
     );
}

export default Header;