import VueRouter from "vue-router";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import userManagement from "../Pages/user_management"
import addUser from "../Pages/add_user"
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"usermanagement",
                    component:userManagement,
                },
                {
                    path:"adduser",
                    component:addUser,
                }
            ]
        },
        {
            path:"/login",
            component:Login
        }
    ]
})