import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <ul>
            <li><Link to='/'>Main</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>

    )
}

export default Nav;