import icon from '../images/icons/down-arrows.svg'
import '../style/PrimaryButton.css'



function PrimaryButton(props) {
    return <button>
        <div class="icon">
        <img src={icon} alt="down-arrows-icon" />
        </div>
        <span>{props.site}</span>
    </button>
}

export default PrimaryButton;