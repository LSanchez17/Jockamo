import {Router, Link, Switch} from 'react-router-dom';
import routes from '../helpers/routes';

const Nav = () => {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='Home'></Link>
                    </li>
                    <li>
                        <Link to='Locations'></Link>
                    </li>
                    <li>
                        <Link to='Specials'></Link>
                    </li>
                    <li>
                        <Link to='Logo'></Link>
                    </li>
                    <li>
                        <Link to='Contact'></Link>
                    </li>
                    <li>
                        <Link to='Employees'></Link>
                    </li>
                    <li>
                        <Link to='Donations'></Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}