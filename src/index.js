import { createRouter, createWebHistory } from "vue-router";
import { util } from "./services/Util";
import Home from "./pages/versal-studio/Home.vue";
import TinTuc from "./pages/versal-studio/TinTuc.vue";
import DangNhap from "./pages/versal-studio/DangNhap.vue";
import DangKy from "./pages/versal-studio/DangKy.vue";
const checkBefore = (to, from ,next)=>{
    let result = util.checkJWTToken();
    if(result){
        next()
    }else{
        next("/login")
    }
}
const routes = [
    {
        path: "/",
        name: "home-route",
        component: Home,
        //beforeEnter: checkBefore
    },
    {
        path: "/tin-tuc",
        name: "tin-tuc",
        component: TinTuc,
        //beforeEnter: checkBefore
    },
    {
        path: "/dang-nhap",
        name: "dang-nhap",
        component: DangNhap
    },
    {
        path: "/dang-ky",
        name: "dang-ky",
        component: DangKy
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router