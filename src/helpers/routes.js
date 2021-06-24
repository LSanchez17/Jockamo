import Home from '../components/Home';
import Locations from '../components/Locations';
import Specials from '../components/Specials';
import Logo from '../components/Logo';
import Contact from '../components/Contact';
import Employees from '../components/Employees';
import Donation from '../components/Donations';

const ROUTES = [
    {path: '/', exact: true, component: Home},
    {path: '/locations', exact: true, component: Locations},
    {path: '/specials', exact: true, component: Specials},
    {path: '/logo', exact: true, component: Logo},
    {path: '/contact', exact: true, component: Contact},
    {path: '/employees', exact: true, component: Employees},
    {path: '/donations', exact: true, component: Donation}
];

export default ROUTES;