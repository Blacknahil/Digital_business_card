import {  faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
function Footer(){
    return (
        <>
        <div className="footer">
            <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
            <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
            <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
            <FontAwesomeIcon className="icon" icon={faGithubSquare} />


            
        </div>
        </>
    )
}

export default Footer;