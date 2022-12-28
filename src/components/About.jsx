import '../style/About.css'
import portrait from '../images/homepage/mobile/image-homepage-profile.jpg'

function About() {
    return ( 
        <>
        <section className='about'>
            <div className="portrait_wrapper">
                <img src={portrait} alt="portrait-image" />
            </div>
            <span className="underline"></span>
            <h2 className="section_title">About Me</h2>
            <p className="text">I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
            </p>
            <button className='secondary_button'>Go to portfolio</button>
			<span className="underline"></span>
        </section>

        </>
     );
}

export default About;