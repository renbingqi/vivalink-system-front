import VueRouter from "vue-router";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import userManagement from "../Pages/user/user_management";
import addUser from "../Pages/user/add_user";
import API from "../Pages/api/api_view";
import apiDetail from "../Pages/api/api_detail"
import S3 from "../Pages/s3/s3"
import S3result from "../Pages/s3/s3_detail_result"
import S3file from "../Pages/s3/s3_file_detail"
import S3sensor from "../Pages/s3/s3_sensor_detail"
import apiManagement from "../Pages/management/api/api_management";
import addApi from "../Pages/management/api/api_add";
import apiEdit from "../Pages/management/api/api_edit";
import s3Management from "../Pages/management/s3/s3_management";
import addS3 from "../Pages/management/s3/s3_add";
import s3Edit from "../Pages/management/s3/s3_edit";
import project from "../Pages/test/project";


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
                    path: "apimanagement",
                    component: apiManagement,
                },
                {
                    path: "s3management",
                    component: s3Management,
                },
                {
                    path: "apiedit",
                    component: apiEdit,
                },
                {
                    path: "s3edit",
                    component: s3Edit,
                },

                {
                    path: "adduser",
                    component: addUser,
                },
                {
                    path: "addapi",
                    component: addApi,
                },
                {
                    path: "adds3",
                    component: addS3,
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
                {
                    path: "test/project",
                    component:project
                },
            ]
        },
        {
            path: "/login",
            component: Login
        }
    ]
})

