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
    // {
    //     name: "VIỆC LÀM",
    //     id:"nav-viec-lam-bigger",
    //     isShowChildren: false,
    //     idHambug:"nav-viec-lam",
    //     idActivator:"#nav-viec-lam-bigger",
    //     idChidren: "nav-viec-lam-chidren",
    //     children:[
    //         {name: "Việc làm Esport", link:""},
    //         {name: "Versal-studio tuyển dụng", link:""}
    //     ]
    // },
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
    {
        name: "CÔNG NGHỆ",
        id:"nav-mang-cong-nghe-bigger",
        idHambug:"nav-mang-cong-nghe-film",
        idActivator:"",
        isShowChildren: false,
        idChidren: "nav-mang-cong-nghe-chidren",
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
export let listBaiViet = [
    {
        id: 2,
        date:"29/03/2025",
        avartar:"https://lh3.googleusercontent.com/d/1ZHbhA7rkoBilqRKcftp-NjE18UotgX9Y?authuser=1/view",
        content:'<p><span style="background-color: transparent; color: rgb(8, 27, 58);">📣 BINGX PICKLEBALL OPEN TOUR 2025 – GIẢI ĐẤU THỂ THAO KẾT NỐI CỘNG ĐỒNG WEB3.0 ĐẦU TIÊN TẠI VIỆT NAM 📣</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">(𝑬𝒏𝒈𝒍𝒊𝒔𝒉 𝒃𝒆𝒍𝒐𝒘)</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">Tháng 03 này, Giải đấu BingX Pickleball Open Tour 2025 do PCC tổ chức sẽ chính thức khởi tranh tại TPHCM. Giải đấu hứa hẹn mang đến những màn tranh tài nghẹt thở cùng tổng giải thưởng siêu hấp dẫn lên đến 400 triệu đồng!</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">Với sự tài trợ của Sàn Giao Dịch BingX cùng hơn 20 Đối tác khác, giải đấu dự kiến thu hút hơn 200 vận động viên và các KOLs, Celebs yêu thích Pickleball nói chung và Web 3.0 nói riêng tham gia. Đây là cơ hội để bạn tranh tài, kết nối và trải nghiệm một giải đấu khác biệt.</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">🔥 Sẵn sàng bứt phá trên sân đấu? Đừng bỏ lỡ cơ hội tham gia!</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">🚨 THÔNG TIN GIẢI ĐẤU:</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">📅 Thời gian thi đấu: Ngày 29/03/2025</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">📍 Địa điểm: Tana Sport - Số 29 Đào Duy Anh, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">🎁 ƯU ĐÃI: Chỉ 100 suất đăng ký sớm đến hết 28/02!</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">👉 Đăng ký ngay: </span><a href="https://quickom.net/event/giai-dau-bingx-pickleball-open-tour-2025-2783" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(17, 85, 204);">https://quickom.net/event/giai-dau-bingx-pickleball-open-tour-2025-2783</a></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">#PCC #BingX #TanaSport #Pickleball #HealthFuelsWealth #PickleballOpenTour2025</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">--------------------------</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">📣 BINGX PICKLEBALL OPEN TOUR 2025 – VIETNAM’S FIRST WEB3.0 COMMUNITY SPORTS TOURNAMENT 📣</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">This March, the BingX Pickleball Open Tour 2025, organized by PCC, will officially kick off in Ho Chi Minh City. The tournament promises to deliver thrilling competitions with a super attractive total prize pool of up to $15,000!</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">Sponsored by the BingX Exchange and over 20 other partners, the tournament is expected to attract more than 200 athletes and KOLs, Celebrities who love Pickleball in general and Web 3.0 in particular. This is an opportunity for you to compete, connect and experience a different kind of tournament.</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">🔥 Ready to dominate the court? Don’t miss your chance to join!</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">🚨 TOURNAMENT DETAILS:</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">📅 Date: March 29, 2025</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">📍 Venue: Tana Sport – 29 Đào Duy Anh, Ward 9, Phu Nhuan District, Ho Chi Minh City</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">🎁 EARLY BIRD OFFER: Only 100 early registration slots available until February 28!</span></p><p><span style="background-color: transparent; color: rgb(8, 27, 58);">👉 Register now: </span><a href="https://quickom.net/event/giai-dau-bingx-pickleball-open-tour-2025-2783" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(17, 85, 204);">https://quickom.net/event/giai-dau-bingx-pickleball-open-tour-2025-2783</a></p><ul><li><br></li></ul><p><br></p>',
        title:"Kick-off BingX Pickleball Open Tour 2025",
        isBase64:false
    },
    {
        id: 1,
        date:"27/12/2024",
        avartar:"https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-1.jpg",
        content:'<p><strong style="color: rgb(73, 73, 84);">Nếu bạn là người yêu thích công nghệ, đam mê Esports, hay muốn kết nối với cộng đồng trẻ năng động, thì TEC 2024 (Technology – Esports – Community) chính là sự kiện bạn không thể bỏ lỡ!</strong></p><p><strong style="color: rgb(73, 73, 84);"><span class="ql-cursor">﻿</span></strong></p><p><strong>Được tổ chức bởi Versal Esports – đơn vị trực thuộc Versal Studios do anh&nbsp;Trần Minh Luân</strong>&nbsp;quản lý và điều hành, sự kiện thu hút được sự quan tâm của đông đảo sinh viên từ các trường Đại học trên địa bàn Thành phố Hồ Chí Minh.&nbsp;</p><p><br></p><p><a href="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-1.jpg" rel="noopener noreferrer" target="_blank" style="color: var(--GC-COLOR--LINK);"><strong><img src="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-1.jpg" height="439" width="1000"></strong></a></p><p><strong>Ngày 14/12/2024 vừa qua, sự kiện đã phối hợp tổ chức thành công cùng đơn vị đồng hành là Câu lạc bộ thể thao điện tử Greenwich Việt Nam cùng với các hoạt động đa dạng như:&nbsp;</strong></p><p><br></p><p><strong>Triển lãm công nghệ: Sân chơi cho tín đồ công nghệ</strong></p><p><br></p><p>Khu vực triển lãm tại TEC 2024 sẽ là nơi quy tụ các thương hiệu công nghệ lớn như&nbsp;<strong>Cooler Master</strong>,&nbsp;<strong>WD-Black</strong>,&nbsp;<strong>ViewSonic</strong>, cùng với các sản phẩm nổi bật dành riêng cho lĩnh vực Esports. Đặc biệt, gian hàng của nhóm sinh viên&nbsp;<strong>Regen Station</strong>&nbsp;từ Đại học FPT sẽ giới thiệu chủ đề mới lạ về&nbsp;<strong>sức khỏe trong Esports</strong>, mang đến góc nhìn đầy sáng tạo và ý nghĩa cho cộng đồng.</p><p><br></p><p><a href="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-2.jpg" rel="noopener noreferrer" target="_blank" style="color: var(--GC-COLOR--LINK);"><strong><img src="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-2.jpg" height="666" width="1000"></strong></a></p><p><br></p><p><a href="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-3.jpg" rel="noopener noreferrer" target="_blank" style="color: var(--GC-COLOR--LINK);"><strong><img src="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-3.jpg" height="666" width="1000"></strong></a></p><p><br></p><p><strong>Talkshow: Góc nhìn từ các chuyên gia hàng đầu</strong></p><p><strong>Chủ đề talkshow năm nay –&nbsp;“Xu hướng công nghệ mới: Esports – Ngành công nghiệp trẻ triển vọng”</strong>&nbsp;– thu hút sự tham gia của những diễn giả uy tín, bao gồm:</p><p><br></p><p>+&nbsp;<strong>Anh Đăng Sơn</strong>&nbsp;– Marketing, thương hiệu Cooler Master</p><p><br></p><p>+&nbsp;<strong>Anh Hoàng Tô</strong>&nbsp;– Marketing, thương hiệu ViewSonic</p><p><br></p><p>+&nbsp;<strong>Chị Trần Trang</strong>&nbsp;– Nhà sáng lập CLB Thể thao điện tử Greenwich Việt Nam &amp; Marketing Manager Hobby Horizon</p><p><br></p><p>+&nbsp;<strong>Anh Quang Huỳnh</strong>&nbsp;– Content Operation Team Leader, công ty BTG</p><p><br></p><p>Các diễn giả không chỉ chia sẻ về những thiết bị công nghệ tiên tiến trong ngành mà còn mang đến góc nhìn sâu sắc về tiềm năng phát triển của Esports. Buổi trò chuyện thu hút đông đảo sinh viên từ nhiều trường đại học, tạo nên không khí sôi động với những câu hỏi thú vị từ khán giả.</p><p><br></p><p><a href="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-4.jpg" rel="noopener noreferrer" target="_blank" style="color: var(--GC-COLOR--LINK);"><strong><img src="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-4.jpg" height="666" width="1000"></strong></a></p><p><br></p><p><strong>Showmatch Liên Quân Mobile: Sôi động và mãn nhãn</strong></p><p><strong>Sự kiện khép lại bằng trận showmatch đỉnh cao giữa hai đội mạnh từ các trường đại học –&nbsp;CLB ESC Hutech</strong>&nbsp;và&nbsp;<strong>UEF</strong>. Màn trình diễn không chỉ mang đến cảm xúc thăng hoa mà còn khuấy động bầu không khí, giúp khán giả cảm nhận rõ nét tinh thần của thể thao điện tử.</p><p><br></p><p><a href="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-5.jpg" rel="noopener noreferrer" target="_blank" style="color: var(--GC-COLOR--LINK);"><strong><img src="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-5.jpg" height="666" width="1000"></strong></a></p><p><br></p><p><a href="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-6.jpg" rel="noopener noreferrer" target="_blank" style="color: var(--GC-COLOR--LINK);"><strong><img src="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-6.jpg" height="666" width="1000"></strong></a></p><p><br></p><p><strong>TEC 2024: Cơ hội cho bạn trẻ yêu công nghệ và Esports</strong></p><p><strong>Với sự chuẩn bị kỹ lưỡng và các hoạt động đa dạng, TEC 2024 là điểm đến lý tưởng cho những ai muốn khám phá thế giới công nghệ hiện đại, tìm hiểu về ngành Esports đầy triển vọng, và kết nối với cộng đồng trẻ đam mê sáng tạo.</strong></p><p><br></p><p><a href="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-7.jpg" rel="noopener noreferrer" target="_blank" style="color: var(--GC-COLOR--LINK);"><strong><img src="https://img-cdn.2game.vn/2024/12/27/TEC2024-PR-7.jpg" height="666" width="1000"></strong></a><strong style="color: var(--GC-COLOR--LINK);"><span class="ql-cursor">﻿﻿﻿</span></strong></p>',
        title:"TEC 2024: Sự kiện Công nghệ – Esports – Cộng đồng hấp dẫn dành cho sinh viên do Versal Esports tổ chức",
        isBase64:false
    },
]