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
