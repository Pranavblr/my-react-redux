import Users from "../views/Users/Users";
import Blogs from "../views/Blogs/Blogs";
import Help from "../views/Help/Help";
import UserProfile from '../views/Users/UserProfile';


const dashboardRoutes = [
    {
        path:"/dashboard/users",
        name:"Users",
        component:Users
    },
    {
        path:"/dashboard/blogs",
        name:"Blogs",
        component:Blogs
    },
    {
        path:'/dashboard/help',
        name:"Help",
        component:Help
    },
    {
        path:'/dashboard/user/:username',
        component:UserProfile
    }
];

export default dashboardRoutes;