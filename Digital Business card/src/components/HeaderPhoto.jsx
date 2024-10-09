import photoAdd from '../assets/person.png';
import './style.css';
function HeaderPhoto(){
    return (
        <>
        <div className="HeaderPhoto--container">
        <img src={photoAdd} className='profile-photo' alt="profile picture" />
        <h1 className="name"> Laura Smith</h1>
        <h3 className="role">Frontend Developer</h3>
        <p className="email">laurasmith.website</p>
        </div>
        </>
    )
}

export default HeaderPhoto;