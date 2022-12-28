import '../style/Hero.css'
import icon from '../images/icons/down-arrows.svg'

function Hero() {
    return ( 
        <>
        <div className="hero_wrapper">
            <div className="hero_image"></div>
            <h1 className="hero_title">Hey, I'm Allex Spencer and I love building beautiful webistes</h1>
            <button className="primary_button">
                <div className="icon">
                <img className='down_arrows' src={icon} alt="down-arrows-icon" />
                </div>
                <span>about me</span>
            </button>
        </div>
        </>
        
     );
}

export default Hero;

