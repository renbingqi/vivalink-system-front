import VueRouter from "vue-router";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/login",
            component:Login
        }
    ]
})