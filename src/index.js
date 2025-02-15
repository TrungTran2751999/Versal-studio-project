import { createRouter, createWebHistory } from "vue-router";
import { util } from "./services/Util";
import Home from "./pages/versal-studio/Home.vue";
import TinTuc from "./pages/versal-studio/TinTuc.vue";
import DangNhap from "./pages/versal-studio/DangNhap.vue";
import DangKy from "./pages/versal-studio/DangKy.vue";
import ChiTietTinTuc from "./pages/versal-studio/ChiTietTinTuc.vue";
import GiaiDau from "./pages/versal-studio/GiaiDau.vue";
import HoSoTaiKhoan from "./pages/versal-studio/HoSoTaiKhoan.vue";
import Dashboard from "./pages/versal-studio/admin/Dashboard.vue";
import QuanLyNguoiDung from "./pages/versal-studio/admin/QuanLyNguoidung/QuanLyNguoiDung.vue";
import ChiTietQuanLyNguoiDung from "./pages/versal-studio/admin/QuanLyNguoidung/ChiTietQuanLyNguoiDung.vue";
import QuanLyTinTuc from "./pages/versal-studio/admin/QuanLyTinTuc/QuanLyTinTuc.vue";
import ChiTietQuanLyTinTuc from "./pages/versal-studio/admin/QuanLyTinTuc/ChiTietQuanLyTinTuc.vue";
import Login from "./pages/versal-studio/admin/Login.vue";
import QuanLyLoaiTinTuc from "./pages/versal-studio/admin/QuanLyTinTuc/QuanLyLoaiTinTuc/QuanLyLoaiTinTuc.vue";
import ChiTietQuanLyLoaiTinTuc from "./pages/versal-studio/admin/QuanLyTinTuc/QuanLyLoaiTinTuc/ChiTietQuanLyLoaiTinTuc.vue";
import QuanLyGiaiDau from "./pages/versal-studio/admin/QuanLyGiaiDau/QuanLyGiaiDau.vue";
import QuanLyTheLoaiGame from "./pages/versal-studio/admin/QuanLyGiaiDau/QuanLyTheLoaiGame/QuanLyTheLoaiGame.vue";
import ChiTietQuanLyTheLoaiGame from "./pages/versal-studio/admin/QuanLyGiaiDau/QuanLyTheLoaiGame/ChiTietQuanLyTheLoaiGame.vue";
import QuanLyTeam from "./pages/versal-studio/admin/QuanLyGiaiDau/QuanLyTeam/QuanLyTeam.vue";
import ChiTietQuanLyTeam from "./pages/versal-studio/admin/QuanLyGiaiDau/QuanLyTeam/ChiTietQuanLyTeam.vue";
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
    },
    {
        path: "/news",
        name: "news",
        component: ChiTietTinTuc
    },
    {
        path: "/giai-dau",
        name: "giai-dau",
        component: GiaiDau
    },
    {
        path: "/ho-so",
        name:"ho-so",
        component: HoSoTaiKhoan
    },
    {
        path: "/admin",
        name:"admin",
        component: Dashboard
    },
    {
        path: "/admin/quan-ly-user",
        name:"admin-quan-ly-nguoi-dung",
        component: QuanLyNguoiDung
    },
    {
        path: "/admin/chi-tiet-quan-ly-user",
        name:"admin-chi-tiet-quan-ly-nguoi-dung",
        component: ChiTietQuanLyNguoiDung
    },
    {
        path: "/admin/quan-ly-tin-tuc",
        name:"admin-quan-ly-tin-tuc",
        component: QuanLyTinTuc
    },
    {
        path: "/admin/chi-tiet-quan-ly-tin-tuc",
        name:"admin-chi-tiet-quan-ly-tin-tuc",
        component: ChiTietQuanLyTinTuc
    },
    {
        path: "/admin/quan-ly-loai-tin-tuc",
        name:"admin-quan-ly-loai-tin-tuc",
        component: QuanLyLoaiTinTuc
    },
    {
        path: "/admin/chi-tiet-quan-ly-loai-tin-tuc",
        name:"chi-tiet-admin-quan-ly-loai-tin-tuc",
        component: ChiTietQuanLyLoaiTinTuc
    },
    {
        path: "/admin/quan-ly-giai-dau",
        name:"admin-quan-ly-giai-dau",
        component: QuanLyGiaiDau
    },
    {
        path: "/admin/quan-ly-the-loai-game",
        name:"admin-quan-ly-the-loai-game",
        component: QuanLyTheLoaiGame
    },
    {
        path: "/admin/chi-tiet-quan-ly-the-loai-game",
        name:"admin-chi-tiet-quan-ly-the-loai-game",
        component: ChiTietQuanLyTheLoaiGame
    },
    {
        path: "/admin/quan-ly-team",
        name:"admin-quan-ly-team",
        component: QuanLyTeam
    },
    {
        path: "/admin/chi-tiet-quan-ly-team",
        name:"chi-tiet-admin-quan-ly-team",
        component: ChiTietQuanLyTeam
    },
    {
        path: "/admin/login",
        name:"admin-login",
        component: Login
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router