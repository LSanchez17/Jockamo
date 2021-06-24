import routes from '../helpers/routes';
import {Switch, Route, Redirect} from 'react-router-dom';

const routeSwitch = () => {
    return(
        <Switch>
            {routes.map((route, i) => {
                <Route path={route.path} component={route.component} exact={route.exact} />
            })}

            <Redirect to='/' />
        </Switch>
    );
}        

export default routeSwitch;
    