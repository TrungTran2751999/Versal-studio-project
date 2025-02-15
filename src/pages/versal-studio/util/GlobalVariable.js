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
    {
        name: "KHÁM PHÁ",
        id:"nav-kham-pha-bigger",
        idHambug:"nav-kham-pha",
        idActivator:"",
        isShowChildren: false,
        idChidren: "nav-kham-pha-chidren",
        children:[]
    },
    {
        name: "MANGA/FILM",
        id:"nav-manga-film-bigger",
        idHambug:"nav-manga-film",
        idActivator:"",
        isShowChildren: false,
        idChidren: "nav-manga-film-chidren",
        children:[]
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
export const loginInfo = {
    userName:0
}
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
            getAllActive: `${domainApi}/api/admin/user/active`,
            getAllCaNhanActive: `${domainApi}/api/admin/user/ca-nhan-active`
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
                getMemberOfTeam: `${domainApi}/api/admin/tournament/team/member`,
                addMemberTeam: `${domainApi}/api/admin/tournament/team/member/add`,
                xoaMemberTeam: `${domainApi}/api/admin/tournament/team/member/delete`
            }
        }
    },
    UTIL:{
        getProvince: "https://provinces.open-api.vn/api/" 
    }
}   
export let listInfoGames = {
    LoaiGame : [
        {
            name:"MOBILE ESPORTS",
            id: 1,
        },
        {
            name:"MOBILE CASUAL",
            id: 2,
        },
        {
            name:"MOBILE NHẬP VAI",
            id: 3,
        },
    ],
    DanhSachGame: [
        {
            name:"Liên Quân Mobile",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2016/2-1478845016553.png",
            id:1,
            type: 1
        },
        {
            name:"Tốc Chiến",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/11/10/logo-1604977802844585809441.png",
            id:2,
            type: 1
        },
        {
            name:"PUBG Mobile VNG",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2018/11/28/pubg-mobile-ava-15433746905421396826985.jpg",
            id:3,
            type: 1
        },
        {
            name:"Badlanders",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2022/1/26/200x2000503ea876d-1e02-48c8-9130-6ed1b7310112-16431746694811534053773.png",
            id:4,
            type: 1
        },
        {
            name:"Call of Duty Mobile",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/2/10/786020851190673662262489186172298606936064o-158132226147035152101.jpg",
            id:5,
            type: 1
        },
        {
            name:"Mobile Legends",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2019/3/14/maxresdefault-1552579965996205591617.jpg",
            id:5,
            type: 1
        },
        {
            name:"Đấu Trường Chân Lý Mobile",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/2/8/2game-logo-dau-truong-chan-ly-mobile-1s-15811490351501166826297.jpg",
            id:5,
            type: 1
        },


        {
            name:"Audition X",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/2/10/827066741313149650164782968600413386833920o-15813219897102055096769.jpg",
            id:1,
            type: 2
        },
        {
            name:"Gun Gun Mobile",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/9/10/gungun-1599729810499775456889.png",
            id:1,
            type: 2
        },
        {
            name:"Gun Gun Mobile",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2019/10/11/1ok7-1ok7-code-game-poki-mobile-1-15707895170181287257685.jpg",
            id:2,
            type: 2
        },
        {
            name:"3Q Chạy Ngay Đi",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2019/10/11/ava-15707673576751603555022.jpg",
            id:3,
            type: 2
        },
        {
            name:"Gun Gun Mobile",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2019/10/11/1ok7-1ok7-code-game-poki-mobile-1-15707895170181287257685.jpg",
            id:4,
            type: 2
        },
        {
            name:"Epic Souls",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2019/10/11/maxresdefault-15707893135831724057834.jpg",
            id:4,
            type: 2
        },
        {
            name:"Gun Gun Mobile",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2019/10/11/1ok7-1ok7-code-game-poki-mobile-1-15707895170181287257685.jpg",
            id:4,
            type: 2
        },
        {
            name:"Long Kỷ Nguyên Mobile",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/2/10/862614031378163377099791218434629342593024o-1581321387186547318355.jpg",
            id:1,
            type: 3
        },
        {
            name:"Giang Hồ Chi Mộng",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/2/10/836408361622819918675656974996596299661312o-1581321114014582642121.jpg",
            id:1,
            type: 3
        },
        {
            name:"Thiên Ma Quyết",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/2/10/791365951552828591550567775542130490998784o-15813216846611627735411.jpg",
            id:1,
            type: 3
        },
        {
            name:"Dấu Ấn Rồng",
            image: "https://gamek.mediacdn.vn/zoom/90_90/133514250583805952/2020/2/10/sg277-avatar-1581329246096917566148-15813292798762139547046.png",
            id:1,
            type: 3
        },
        {
            name:"Tiên Duyên Kiếm",
            image: "https://gamek.mediacdn.vn/zoom/90_90/2020/1/2/773625931055767342622347642801738096836608n-1577951031499802495.png",
            id:1,
            type: 3
        },
    ]
}
