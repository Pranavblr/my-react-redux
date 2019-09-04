import Login from '../views/Login/Login'
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';

const indexRoutes = [
    {
        path:'/dashboard',name:'Dashboard',component:DashboardLayout
    },
    {
        path:'/', name:'Login', component:Login
    }
];

export default indexRoutes;