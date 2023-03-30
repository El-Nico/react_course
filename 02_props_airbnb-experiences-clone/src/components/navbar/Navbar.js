import airbnbLogo from '../../images/airbnb-logo.png'
import './Navbar.css'
export function Navbar(){
    return(
        <nav className="bar">
            <img src={airbnbLogo} alt="" />
        </nav>
    )
}