import '@fortawesome/fontawesome-free/css/all.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './style.css'

function Buttons(){
    return (
        <>
        <div className="social-media--buttons">
            <button className="btn email--btn">
            <FontAwesomeIcon icon={faEnvelope} />
                Email
            </button>
            <button className="btn linkidln--btn">
            <FontAwesomeIcon icon={faLinkedin} />
                Linkedln

            </button>
        </div>
        </>
    )
}

export default Buttons;