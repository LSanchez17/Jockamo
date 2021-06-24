import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='Home'>Home</Link>
                </li>
                
                <li>
                    <Link to='Locations'>Locations</Link>
                </li>
            
                <li>
                    <Link to='Specials'>Specials</Link>
                </li>
                
                <li>
                    <Link to='Logo'>About our Logo</Link>
                </li>
                
                <li>
                    <Link to='Contact'>Contact</Link>
                </li>
                
                <li>
                    <Link to='Employees'>Employees</Link>
                </li>
                
                <li>
                    <Link to='Donations'>Donations</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;