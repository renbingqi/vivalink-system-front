import VueRouter from "vue-router";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import userManagement from "../Pages/user_management";
import addUser from "../Pages/add_user";
import API from "../Pages/api_view";
import apiDetail from "../Pages/api_detail"

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "usermanagement",
                    component: userManagement,
                },
                {
                    path: "adduser",
                    component: addUser,
                },
                {
                    path: "api/detail",
                    component: apiDetail
                },
                {
                    path: "api",
                    component: API,
                    children: [
                        {
                            path: "vcloud",
                            component: API,
                        },
                        {
                            path: "sweden",
                            component: API
                        },
                    ]
                }
            ]
        },
        {
            path: "/login",
            component: Login
        }
    ]
})

