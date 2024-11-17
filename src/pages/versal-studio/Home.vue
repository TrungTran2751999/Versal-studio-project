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
</style>
<template>
    <Nav>
        <!-- ---------------- -->
        <v-card>
            <v-card-actions style="background-color: rgb(42,42,42);">
                <v-row class="pa-12">
                    <v-col cols="12" md="6">
                        <v-card style="margin-bottom: 25px; height: 725px;">
                            <v-card-actions class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTS </span> 
                                    <span class="ngay-to-chuc">16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center pa-6">
                                <div>
                                    <span class="title-su-kien" style="font-size: 25px;">Giải đấu Liên Quân Mobile: Back To School 2024 Đà Nẵng</span> 
                                </div>
                            </v-card-actions>
                            <v-card-actions class="pa-6">
                                <div>
                                    MỞ ĐĂNG KÝ GIẢI ĐẤU LIÊN QU N MOBILE OFFLINE - BACK TO SCHOOL 2024 | 
 Gửi lời chào đến toàn bộ người chơi Liên Quân Mobile trong khu vực Đà Nẵng. Nhân dịp chào đón các bạn sinh viên, học sinh trở lại học tập sau một khoảng thời gian dài n...
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="3">
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="title-su-kien">SUMMER TEACH BEACH</span> 
                                </div>
                            </v-card-actions>
                        </v-card>

                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="title-su-kien">SUMMER TEACH BEACH</span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="3">
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="title-su-kien">SUMMER TEACH BEACH</span> 
                                </div>
                            </v-card-actions>
                        </v-card>

                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="title-su-kien">SUMMER TEACH BEACH</span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-actions>

        </v-card>
        <!-- ---------------- -->
        <v-card>
            <v-card-actions class="justify-center">
                <v-card-title style="font-size: 30px;font-weight: bolder;">GIẢI ĐẤU NỔI BẬT</v-card-title>
            </v-card-actions>
            <v-card-actions class="justify-center">
                <Carousel v-bind="config" style="width: 1400px;">
                    <slide v-for="slide in 10" :key="slide">
                        <v-card class="card-child-su-kien" style="background-color: #2a2a2a;">
                            <v-card-actions style="background-color: white;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
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
        <!-- -------------------- -->
         <v-card>
            <v-card-actions class="pa-12" style="background-color: rgb(42,42,42);;">
                <v-row>
                    <v-col cols="12" sm="3">
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="">ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản </span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="">ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản </span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="">ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản </span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="">ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản </span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="">ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản </span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="">ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản </span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="">ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản </span> 
                                </div>
                            </v-card-actions>
                        </v-card>
                        <v-card class="card-child">
                            <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                <v-img src="https://esca.vn/images/2024/09/13/back-to-school-dn_large.png" class="img-su-kien"></v-img>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="loai-su-kien">SỰ KIỆN ESPORTSs </span> 
                                    <span>16/07/2024</span>
                                </div>
                            </v-card-actions>
                            <v-card-actions class="justify-center">
                                <div>
                                    <span class="">ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản ESCA và FPT Polytechnic đồng hành cùng giải đấu của CLB Esport Trần Quốc Toản </span> 
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
    export default{
        data(){
            return{
                config : {
                    itemsToShow: 4.5,
                    snapAlign: 'center',
                    autoplay: 2000,
                    wrapAround: true,
                    pauseAutoplayOnHover: true
                }
            }
        },
        components:{
           Nav: Nav,
           Footer: Footer, 
           Carousel,
           Slide,
           Pagination,
           Navigation,
        }
    }
</script>