import Aside from '../../components/Aside';
import '../../style/Manage.css'

import manageScreenshot1 from '../../images/detail/mobile/image-manage-preview-1@2x.jpg'
import manageScreenshot2 from '../../images/detail/mobile/image-manage-preview-2@2x.jpg'

import leftArrow from '../../images/icons/arrow-left.svg'
import rightArrow from '../../images/icons/arrow-right.svg'

function Manage() {
    return ( 
    <>
    <div className="detail_cover"></div>
    <div className="detail_description">
        <span className="line"></span>
        <h2 className="secondary_title">Manage</h2>
        <p className="description">This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
        <p className="green_text">Interaction Design / Front End Development</p>
        <p className="green_text">HTML / CSS / JS</p>
        <button className="secondary_button">visit website</button>
        <span className="line"></span>
    </div>
    <div className="detail_project_background">
        <h2 className="secondary_title">Project Background</h2>
        <p className="description">This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
        <h2 className="secondary_title">Static Previews</h2>
        <img src={manageScreenshot1} alt="static-screenshot-1" />
        <img src={manageScreenshot2} alt="static-screenshot-2" />
     </div>
    <div className="sites_nav">
        <span className="line"></span>
        <div className="swipe_left">
            <img src={leftArrow} alt="left-arrow-icon" />
            <h2 className="secondary_title">Fylo</h2>
            <p className="grey">Previous Project</p>
        </div>
        <span className="line"></span>
        <div className="swipe_right">
            <img src={rightArrow} alt="right-arrow-icon" />
            <h2 className="secondary_title">Bookmark</h2>
            <p className="grey">Next Project</p>
        </div>
        <span className="line"></span>
    </div>
    <Aside/>
    </>
     );
}

export default Manage;