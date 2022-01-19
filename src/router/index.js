import VueRouter from "vue-router";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import userManagement from "../Pages/user_management";
import addUser from "../Pages/add_user";
import API from "../Pages/api_view";
import apiDetail from "../Pages/api_detail"
import S3 from "../Pages/s3"
import S3result from "../Pages/s3_detail_result"
import S3file from "../Pages/s3_file_detail"
import S3sensor from "../Pages/s3_sensor_detail"

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
                },
                {
                    path: "s3",
                    component:S3
                },
                {
                    path: "s3/result",
                    component:S3result
                },
                {
                    path: "s3/file",
                    component:S3file
                },
                {
                    path: "s3/sensor",
                    component:S3sensor
                },
            ]
        },
        {
            path: "/login",
            component: Login
        }
    ]
})

