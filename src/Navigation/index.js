import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



const Nav = () => {
    return (
        <div className="container">
            <div className="container left-list">
                <ul className="icon-list">
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <FontAwesomeIcon icon={faFolder} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="right-list">
                <ul className="icon-list">
                    <li>
                        <a href="https://www.instagram.com/__m_o_h_a_n__b/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mohan-kumar-boddepalli/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>


        </div>

    )
}

export default Nav;