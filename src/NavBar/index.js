import {Link} from 'react-router-dom'
import './index.css'

const NavBar = () => (
    <nav className="nav-bar">
        <ul className="nav-list">
            <Link to="/counter" ><li className='nav-link'>Counter</li></Link>
            <Link to="/todolist" ><li className='nav-link'>Todo</li></Link>
            <Link to="/post-request" ><li className='nav-link'>PostRequest</li></Link>
        </ul>
    </nav>
)

export default NavBar