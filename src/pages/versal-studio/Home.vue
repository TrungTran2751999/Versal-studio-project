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
    .ngay-to-chuc{
        font-size: 10px;
    }
    @media (max-width: 900px) {
        #card-danh-sach-game {
            display: none;
        }
        .content-su-kien{
            display: none;
        }
    }
</style>
<template>
    <Nav>
        <!-- --------TIEU DE-------- -->
        <v-card>
            <v-card-actions style="background-color: rgb(42,42,42);">
                <v-row class="pa-12" v-show="listTinTuc.listTinNoiBat2">
                    <v-col cols="12" md="6">
                        <RouterLink :to="(`/news?id=${listTinTuc.listTinNoiBat1?.guid}&loaiTinTucId=${listTinTuc.listTinNoiBat1?.loaiTinTucId}`)">
                            <v-card style="margin-bottom: 25px; height: 725px;">
                                <v-card-actions class="container-mg-su-kien">
                                    <v-img height="410px" style="background-color: white;" :src="listTinTuc.listTinNoiBat1?.avartar" class="img-su-kien"></v-img>
                                </v-card-actions>
                                <v-card-actions class="pa-6">
                                    <div>
                                        <span class="loai-su-kien">{{ listTinTuc.listTinNoiBat1?.tenLoaiTinTuc?.toUpperCase() }}</span> 
                                        <span class="ngay-to-chuc">{{ listTinTuc.listTinNoiBat1?.updatedAt }}</span>
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="justify-center pa-6" style="margin-top: -30px;">
                                    <div>
                                        <span class="title-su-kien" style="font-size: 25px;">{{ listTinTuc.listTinNoiBat1?.name }}</span> 
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="pa-6 content-su-kien" style="margin-top: -30px;">
                                    <div style="font-size: 18px;">
                                        
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </RouterLink>
                    </v-col>
                    
                    <v-col cols="12" md="3" v-for="listTinNoiBat2 in listTinTuc.listTinNoiBat2" :key="listTinNoiBat2">
                        <RouterLink :to="(`/news?id=${item?.guid}&loaiTinTucId=${item?.loaiTinTucId}`)" v-for="item in listTinNoiBat2" :key="item">
                            <v-card class="card-child">
                                
                                <v-card-actions style="background-color: white;" class="container-mg-su-kien">
                                    <v-img height="146px" :src="item?.avartar" class="img-su-kien"></v-img>
                                </v-card-actions>
                                <v-card-actions class="pa-6">
                                    <div>
                                        <span class="loai-su-kien">{{ item?.tenLoaiTinTuc.toUpperCase() }} </span> 
                                        <span class="ngay-to-chuc">{{ item?.updatedAt }}</span>
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="pa-6 container-title-su-kien">
                                    <div>
                                        <span class="title-su-kien">{{ item?.name }}</span> 
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </RouterLink>
                    </v-col>

                </v-row>
                <!-- skeleton -->
                <v-row class="pa-12" v-show="!listTinTuc.listTinNoiBat2">
                    <v-col cols="12" md="6">
                        <v-skeleton-loader
                        style="height: 725px;"
                        class="mx-auto border"
                        type="image, article"
                        ></v-skeleton-loader>
                    </v-col>
                    <v-col cols="12" md="3" v-for="m in 2" :key="m">
                        <v-skeleton-loader
                        style="margin-bottom: 100px;"
                        v-for="n in 2" :key="n"
                        class="mx-auto border"
                        type="image, article"
                        ></v-skeleton-loader>
                    </v-col>
                </v-row>
            </v-card-actions>

        </v-card>
        <!-- ------- GAME ---------------->
        <v-card id="card-danh-sach-game">
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
                <v-col>
                    <v-row v-for="tinTuc in listTinTuc.listTinNoiBat3" :key="tinTuc">
                        <v-col cols="12" sm="3" v-for="item in tinTuc" :key="item">
                            <RouterLink :to="(`/news?id=${item?.guid}&loaiTinTucId=${item?.loaiTinTucId}`)">
                                <v-card class="card-child">
                                    <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                        <v-img style="background-color: white;" height="147px" :src="item.avartar" class="img-su-kien"></v-img>
                                    </v-card-actions>
                                    <v-card-actions class="pa-6">
                                        <div>
                                            <span class="loai-su-kien">{{item.tenLoaiTinTuc?.toUpperCase()}}</span> 
                                            <span class="ngay-to-chuc">{{item.updatedAt}}</span>
                                        </div>
                                    </v-card-actions>
                                    <v-card-actions class="pa-6" style="margin-top: -30px;">
                                        <div>
                                            <span>{{item.name}}</span> 
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </RouterLink>
                        </v-col>
                    </v-row>
                </v-col>
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
import { listBaiViet, listInfoGames } from './util/GlobalVariable';
import { RouterLink } from 'vue-router';
import { tinTucController } from '@/services/TinTucController';
import { utilController } from '@/services/Util';
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
                listDanhSachGame:[],
                baiVietGanNhat: listBaiViet.filter(x=>x.id==2)[0],
                listTinTuc:{}
            }
        },
        mounted(){
            this.setData();
            this.listInfoGame = listInfoGames
            this.listDanhSachGame = this.listInfoGame.DanhSachGame.filter(x=>x.type==1)
        },
        methods:{
            selectLoaiGame(idLoaiGame){
                this.loaiGameSelected = this.listInfoGame.LoaiGame.filter(x=>x.id==idLoaiGame)[0]
                this.listDanhSachGame = this.listInfoGame.DanhSachGame.filter(x=>x.type==idLoaiGame)
            },
            setData(){
                let postData = {
                    filter:{
                        keyWord: "",
                        status: 1,
                        loaiTinTucId: null
                    },
                    start: 0,
                    limit: 13
                }
                tinTucController.getAll(postData)
                .then(res=>{
                    let listTinTucParam = []
                    let lengthTinTuc = res.data.length;
                    let lengthTinTucMacDinh = 13 - lengthTinTuc;
                    res.data.map(item=>{
                        item.updatedAt = utilController.convertDate(item.updatedAt)
                    })
                    listTinTucParam = res.data
                    //them bai viet fake
                    for(let i=1; i<=lengthTinTucMacDinh; i++){
                        let baiVietMacDinh = listBaiViet.filter(x=>x.id==1)[0];
                        baiVietMacDinh.updatedAt = utilController.convertDate(baiVietMacDinh.updatedAt);
                        listTinTucParam.push(baiVietMacDinh)
                    }
                    this.listTinTuc.listTinNoiBat1 = listTinTucParam[0]

                    this.listTinTuc.listTinNoiBat2 = []
                    let mangCon = []
                    for(let i=1; i<=4; i++){
                        if(i % 2 != 0){
                            mangCon = []
                            mangCon.push(listTinTucParam[i])
                            this.listTinTuc.listTinNoiBat2.push(mangCon)
                        }else{
                            mangCon.push(listTinTucParam[i])
                        }
                        
                    } 
                    mangCon = []
                    this.listTinTuc.listTinNoiBat3 = []
                    let congSoTinTuc = 1;
                    for(let i=5; i<=12; i++){
                        if(congSoTinTuc+4==i){
                            congSoTinTuc = i
                            mangCon = []
                            mangCon.push(listTinTucParam[i])
                            this.listTinTuc.listTinNoiBat3.push(mangCon)
                        }else{
                            mangCon.push(listTinTucParam[i])
                        }
                    }
                    console.log(this.listTinTuc)
                })
                .catch(err=>{
                    console.log(err)
                })
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