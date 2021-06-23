import {Router, Link, Switch} from 'react-router-dom';
import routes from '../helpers/routes';

const Nav = () => {
    return(
        <Router>
            <div>
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
                <Switch>
                    {routes.map((route, i) => {
                        <Route path={route.path} component={route.component} exact={route.exact} />
                    })}
                </Switch>
            </div>  
        </Router>
    )
}

export default Nav;