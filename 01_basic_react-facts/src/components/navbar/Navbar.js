import './navbar.css'
import logo from '../../images/icons8-react-40.png';
export function Navbar(){
    return (
        <nav className='navibar'>
           
            <img src={logo} alt="" />
            <h3>ReactFacts</h3>
          
            
            <h4>React Course - Project 1</h4>
        </nav>
    )
}