<style scoped>
    .container-mg-su-kien{
        background-color: black;
        padding: 0;
    }
    .img-su-kien{
        
    }   
    .loai-su-kien{
        background-color: black;
        color: white;
        font-weight: bold;
        padding: 5px;
        margin-right: 8px;
        font-size: 12px;
    }
    .title-su-kien{
        font-weight: bolder;
        text-transform: uppercase;
    }
    .card-child{
        margin-bottom: 25px;
        height: 350px;
    }
    .status-su-kien{
        border: 2px solid wheat;
        padding: 5px;
        font-size: 12px;
    }
    .card-child-su-kien{
       width: 300px;
    }
    .container-title-su-kien{
        margin-top: -30px;
    }
    .active-game{
        background-color: green;
    }
</style>
<template>
    <Nav>
        <!-- --------TIEU DE-------- -->
        <v-card>
            <v-card-actions style="background-color: rgb(42,42,42);">
                <v-row class="pa-12">
                    <v-col cols="12" md="6">
                        <RouterLink to="/news">
                            <v-card style="margin-bottom: 25px; height: 725px;">
                                <v-card-actions class="container-mg-su-kien">
                                    <v-img :src="listImg[0]" class="img-su-kien"></v-img>
                                </v-card-actions>
                                <v-card-actions class="pa-6">
                                    <div>
                                        <span class="loai-su-kien">SỰ KIỆN ESPORTS </span> 
                                        <span class="ngay-to-chuc">16/07/2024</span>
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="justify-center pa-6" style="margin-top: -30px;">
                                    <div>
                                        <span class="title-su-kien" style="font-size: 25px;">TEC 2024: Sự kiện Công nghệ – Esports – Cộng đồng hấp dẫn dành cho sinh viên do Versal Esports tổ chức</span> 
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="pa-6" style="margin-top: -30px;">
                                    <div style="font-size: 18px;">
                                        Khu vực triển lãm tại TEC 2024 sẽ là nơi quy tụ các thương hiệu công nghệ lớn như Cooler Master, WD-Black, ViewSonic, cùng với các sản phẩm nổi bật dành riêng cho lĩnh vực Esports. Đặc biệt, gian hàng của nhóm sinh viên Regen Station từ Đại học FPT sẽ giới thiệu chủ đề mới lạ về sức khỏe trong Esports, mang đến góc nhìn đầy sáng tạo và ý nghĩa cho cộng đồng.
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </RouterLink>
                    </v-col>

                    <v-col cols="12" md="3">
                        <RouterLink to="/news">
                            <v-card class="card-child">
                                
                                <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                    <v-img :src="listImg[0]" class="img-su-kien"></v-img>
                                </v-card-actions>
                                <v-card-actions class="pa-6">
                                    <div>
                                        <span class="loai-su-kien">SỰ KIỆN ESPORTS </span> 
                                        <span>16/07/2024</span>
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="pa-6 container-title-su-kien">
                                    <div>
                                        <span class="title-su-kien su-kien-con">SUMMER TEACH BEACH</span> 
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </RouterLink>

                        <RouterLink to="/news">
                            <v-card class="card-child">
                                <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                    <v-img :src="listImg[0]" class="img-su-kien"></v-img>
                                </v-card-actions>
                                <v-card-actions class="pa-6">
                                    <div>
                                        <span class="loai-su-kien">SỰ KIỆN ESPORTS </span> 
                                        <span>16/07/2024</span>
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="pa-6 container-title-su-kien">
                                    <div>
                                        <span class="title-su-kien">SUMMER TEACH BEACH</span> 
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </RouterLink>                        
                    </v-col>

                    <v-col cols="12" md="3">
                        <RouterLink to="/news">
                            <v-card class="card-child">
                                <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                    <v-img :src="listImg[0]" class="img-su-kien"></v-img>
                                </v-card-actions>
                                <v-card-actions class="pa-6">
                                    <div>
                                        <span class="loai-su-kien">SỰ KIỆN ESPORTS </span> 
                                        <span>16/07/2024</span>
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="pa-6 container-title-su-kien">
                                    <div>
                                        <span class="title-su-kien">SUMMER TEACH BEACH</span> 
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </RouterLink>
                        
                        <RouterLink to="/news">
                            <v-card class="card-child">
                                <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                    <v-img :src="listImg[0]" class="img-su-kien"></v-img>
                                </v-card-actions>
                                <v-card-actions class="pa-6">
                                    <div>
                                        <span class="loai-su-kien">SỰ KIỆN ESPORTS </span> 
                                        <span>16/07/2024</span>
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="pa-6 container-title-su-kien">
                                    <div>
                                        <span class="title-su-kien">SUMMER TEACH BEACH</span> 
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </RouterLink>
                        
                    </v-col>
                </v-row>
            </v-card-actions>

        </v-card>
        <!-- ------- GAME ---------------->
        <v-card>
            <v-card-actions class="justify-center">
                <v-card-title style="font-size: 30px;font-weight: bolder;">DANH SÁCH GAME</v-card-title>
            </v-card-actions>
            <v-card-actions class="pa-6" style="margin-top: -30px;">
                <v-tabs v-for="loaiGame in listInfoGame.LoaiGame" :key="loaiGame.id">
                    <v-tab 
                    @click="selectLoaiGame(loaiGame.id)" 
                    style="margin-right: 20px;" 
                    :class="(loaiGame.id == loaiGameSelected.id ? 'active-game':'')">{{ loaiGame.name }}</v-tab>
                </v-tabs>
            </v-card-actions>
            <v-card-actions class="pa-6 justify-center" style="overflow-x: scroll;">
                <v-sheet v-for="game in listDanhSachGame" :key="game">
                    <v-row>
                        <div style="margin-right: 50px;">
                            <img :src="game.image" width="120px" height="120px" style="border-radius: 15px;">
                            <div style="width: 120px; text-align: center;">{{ game.name }}</div>
                        </div>
                    </v-row>
                </v-sheet>
            </v-card-actions>
            
        </v-card>
        <!-- -------GIAI DAU--------- -->
        <v-card v-show="false">
            <v-card-actions class="justify-center">
                <v-card-title style="font-size: 30px;font-weight: bolder;">GIẢI ĐẤU NỔI BẬT</v-card-title>
            </v-card-actions>
            <v-card-actions class="justify-center">
                <Carousel v-bind="config" style="width: 1400px;">
                    <slide v-for="slide in 10" :key="slide">
                        <v-card class="card-child-su-kien" style="background-color: #2a2a2a;">
                            <v-card-actions style="background-color: white;" class="container-mg-su-kien">
                                <v-img :src="listImg[0]" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="status-su-kien" style="color: white;">ĐÃ KẾT THÚC</span> 
                                </div>
                                
                            </v-card-actions>
                            <v-card-actions class="justify-center pa-7" style="margin-top: -20px;">
                                <div>
                                    <span class="title-su-kien" style="color: white;">GIẢI ĐẤU CỘNG ĐỒNG TEAMFIGHT: ROAD TO GLORY </span> 
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center pa-7" style="margin-top: -20px;">
                                <v-col>
                                    <div>
                                        <span style="color: white;">
                                            <v-icon>mdi mdi-flag</v-icon> <span>CCE Esport Community</span>
                                        </span> 
                                    </div>
                                    <div style="margin-top: 12px;">
                                        <span style="color: white;">
                                            <v-icon>mdi mdi-calendar</v-icon> <span>16/11/2024 - 16/12/2024</span>
                                        </span> 
                                    </div>
                                </v-col>
                            </v-card-actions>
                            <v-divider></v-divider>
                            <v-card-actions class="pa-7">
                                <v-row>
                                    <v-col cols="6">
                                        <div style="color: wheat;">GIẢI THƯỞNG</div>
                                        <div style="color: wheat;">5.000.000 VND</div>
                                    </v-col>
                                    <v-col cols="3"></v-col>
                                    <v-col cols="3">
                                        <v-icon style="color: wheat;font-size: 40px;">mdi-codepen</v-icon>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </slide>
                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                    </Carousel>
            </v-card-actions>
        </v-card>
        <!-- ----------TIN TUC---------- -->
         <v-card>
            <v-card-actions class="pa-12" style="background-color: rgb(42,42,42);;">
                <v-row>
                    <v-col cols="12" sm="3" v-for="n in 4" :key="n">
                        <v-card class="card-child" v-for="m in 2" :key="m">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img :src="listImg[0]" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="pa-6">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTS</span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="pa-6" style="margin-top: -30px;">
                                <div>
                                    <span class="">Với sự chuẩn bị kỹ lưỡng và các hoạt động đa dạng, TEC 2024 là điểm đến lý tưởng cho những ai muốn khám phá thế giới công nghệ hiện đại, ...</span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                
            </v-card-actions>
         </v-card>
         <!-- ----------------------- -->
        <Footer></Footer>
    </Nav>
</template>

<script>
import Nav from './layout/Nav.vue';
import Footer from './layout/Footer.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { listInfoGames } from './util/GlobalVariable';
    export default{
        data(){
            return{
                config : {
                    itemsToShow: 4.5,
                    snapAlign: 'center',
                    autoplay: 2000,
                    wrapAround: true,
                    pauseAutoplayOnHover: true
                },
                listImg:[
                    require("../../assets/img-event.png")
                ],
                listInfoGame:{},
                loaiGameSelected:{
                    id: 1
                },
                listDanhSachGame:[]
            }
        },
        mounted(){
            this.listInfoGame = listInfoGames
            this.listDanhSachGame = this.listInfoGame.DanhSachGame.filter(x=>x.type==1)
        },
        methods:{
            selectLoaiGame(idLoaiGame){
                this.loaiGameSelected = this.listInfoGame.LoaiGame.filter(x=>x.id==idLoaiGame)[0]
                console.log(this.loaiGameSelected)
                this.listDanhSachGame = this.listInfoGame.DanhSachGame.filter(x=>x.type==idLoaiGame)
            }
        },
        components:{
           Nav: Nav,
           Footer: Footer, 
           Carousel,
           Slide,
           Pagination,
           Navigation,
        },
    }
</script>