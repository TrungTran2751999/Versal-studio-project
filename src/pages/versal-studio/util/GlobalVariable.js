export let listChildrenNav = [
    {
        name: "TIN TỨC",
        id:"nav-tin-tuc-bigger",
        idHambug:"nav-tin-tuc",
        idActivator:"#nav-tin-tuc-bigger",
        isShowChildren: false,
        idChidren: "nav-tin-tuc-chidren",
        children:[
            {name: "Esport 360", link:"/tin-tuc?main=tin-tuc&child=esport-360"},
            {name: "Tin cộng đồng", link:"/tin-tuc?main=tin-tuc&child=tin-cong-dong"},
            {name: "Kiến thức và đào tạo", link:"/tin-tuc?main=tin-tuc&child=kien-thuc-dao-tao"},
            {name: "Diễn đàn eTalk", link:"/tin-tuc?main=tin-tuc&child=dien-dan-etalk"},
            {name: "Human of Esport", link:"/tin-tuc?main=tin-tuc&child=human-of-esport"},
            {name: "Hoạt động Versal-studio", link:"/tin-tuc?main=tin-tuc&child=hoat-dong"}
        ]
    },
    {
        name: "CỘNG ĐỒNG",
        id:"nav-cong-dong-bigger",
        idHambug:"nav-cong-dong",
        idActivator:"#nav-cong-dong-bigger",
        isShowChildren: false,
        idChidren: "nav-cong-dong-chidren",
        children:[
            {name: "Hỗ trợ giải đấu", link:""},
            {name: "Chương trình Hội viên", link:""},
            {name: "Hệ thống giải đấu", link:""},
            {name: "Kênh Discord", link:""}
        ]
    },
    {
        name: "GIẢI ĐẤU",
        id:"nav-giai-dau-bigger",
        isShowChildren: false,
        idHambug:"nav-giai-dau",
        idActivator:"",
        idChidren: "nav-giai-dau-chidren",
        children:[]
    },
    {
        name: "VIỆC LÀM",
        id:"nav-viec-lam-bigger",
        isShowChildren: false,
        idHambug:"nav-viec-lam",
        idActivator:"#nav-viec-lam-bigger",
        idChidren: "nav-viec-lam-chidren",
        children:[
            {name: "Việc làm Esport", link:""},
            {name: "Versal-studio tuyển dụng", link:""}
        ]
    },
    {
        name: "VERSAL-STUDIO",
        id:"nav-project-bigger",
        idHambug:"nav-project",
        idActivator:"#nav-project-bigger",
        isShowChildren: false,
        idChidren: "nav-project-chidren",
        children:[
            {name: "Giới thiệu chung", link:""},
            {name: "Lĩnh vực hoạt động", link:""},
            {name: "Đội ngũ nhân sự", link:""},
            {name: "Đối tác & khách hàng", link:""},
            {name: "Tuyển dụng", link:""},
            {name: "Liên hệ hợp tác", link:""}
        ]
    },
]
export let listChildrenNavAdmin = [
    {
        name: "Quản lý data",
        id: "nav-quan-ly-bigger",
        idHambug: "nav-quan-ly",
        idActivator:"#nav-quan-ly-bigger",
        isShowChildren: false,
        idChidren: "nav-quan-ly-children",
        children:[
            {name: "Quản lý người dùng", link:"/admin/quan-ly-user"},
            {name: "Quản lý tin tức", link:"/admin/quan-ly-tin-tuc"},
            {name: "Quản lý giải đấu", link:"/admin/quan-ly-giai-dau"},
        ]
    }
]
let domainApi = "http://127.0.0.1:8000"
export const API = {
    ADMIN:{
        user:{
            login: `${domainApi}/api/admin/login`,
            register: `${domainApi}/api/admin/register`,
            getAll: `${domainApi}/api/admin/user`,
            getByUid: `${domainApi}/api/admin/user/chi-tiet`,
            update: `${domainApi}/api/admin/user/update`,
            filter: `${domainApi}/api/admin/user/filter`,
            count: `${domainApi}/api/admin/user/count`,
            getAllActive: `${domainApi}/api/admin/user/active`
        },
        role:{
            getAll: `${domainApi}/api/admin/role`
        },
        tinTuc:{
            getAllTinTuc: `${domainApi}/api/admin/tin-tuc`,
            createTinTuc: `${domainApi}/api/admin/tin-tuc/create`,
            updateTinTuc: `${domainApi}/api/admin/tin-tuc/update`,
            getById: `${domainApi}/api/admin/tin-tuc/chi-tiet`,
            getCount: `${domainApi}/api/admin/tin-tuc/count`,

            getAllLoaiTinTuc: `${domainApi}/api/admin/tin-tuc/loai-tin-tuc`, 
            getAllLoaiTinTucActive: `${domainApi}/api/admin/tin-tuc/loai-tin-tuc/active`,
            createLoaiTinTuc: `${domainApi}/api/admin/tin-tuc/loai-tin-tuc/create`,
            getLoaiTinTucById: `${domainApi}/api/admin/tin-tuc/loai-tin-tuc/chi-tiet`,
            updateLoaiTinTuc: `${domainApi}/api/admin/tin-tuc/loai-tin-tuc/update`,
            getCountLoaiTinTuc: `${domainApi}/api/admin/tin-tuc/loai-tin-tuc/count`,
        },
        tournament:{
            theLoaiGame:{
                getAll: `${domainApi}/api/admin/tournament/the-loai-game`,
                getById: `${domainApi}/api/admin/tournament/the-loai-game/chi-tiet`,
                create: `${domainApi}/api/admin/tournament/the-loai-game/create`,
                update: `${domainApi}/api/admin/tournament/the-loai-game/update`,
                getAllActive: `${domainApi}/api/admin/tournament/the-loai-game/active`
            },
            team:{
                getAll: `${domainApi}/api/admin/tournament/team`,
                getById: `${domainApi}/api/admin/tournament/team/chi-tiet`,
                create: `${domainApi}/api/admin/tournament/team/create`,
                update: `${domainApi}/api/admin/tournament/team/update`,
            }
        }
    },
    UTIL:{
        getProvince: "https://provinces.open-api.vn/api/" 
    }
}   
