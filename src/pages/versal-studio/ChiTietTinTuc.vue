<style>
.loai-su-kien {
    background-color: black;
    color: white;
    font-weight: bold;
    padding: 5px;
    margin-right: 8px;
    font-size: 10px;
}
.card-child{
        margin-bottom: 25px;
        height: 400px;
}
.img-su-kien{
    border: none;
}
img{
    width: 100%;
    height: auto;
}
iframe{
    width: 100%;
    height: 600px;
}
.ngay-to-chuc{
    font-size: 13px;
}
</style>
<style scoped>
@media (min-width: 300px) {
    .bai-viet{
        padding: 0px !important;
    }
}
@media (min-width: 1023px) {
    .bai-viet {
        padding: 0px 50px !important;
    }
}
@media (min-width: 1600px) {
    .bai-viet{
        padding: 0px 100px !important;
    }
}
</style>
<template>
    
    <Nav>
        <v-container>
            <v-row class="pa-12 bai-viet" v-show="baiVietSelected.updatedAt!=undefined">
                <v-col cols="12" class="pa-1 content-tin-tuc">
                    <v-img :src="baiVietSelected?.avartar" 
                        max-width="4000"
                        max-height="2000"></v-img>
                    <div style="margin-top: 15px">
                        <span class="loai-su-kien">{{ baiVietSelected?.tenLoaiTinTuc?.toUpperCase() }}</span>
                        <span class="ngay-to-chuc">{{ baiVietSelected?.updatedAt }}</span>
                    </div>
                    <div style="font-size: 30px; font-weight: 900; margin-top: 15px; margin-bottom: 25px;">
                        {{ baiVietSelected?.name }}
                    </div>
                    <v-divider></v-divider>
                    <!-- CONTENT -->
                     
                    <div v-html="baiVietSelected.content"></div>
                </v-col>
            </v-row>
            <!-- SKELETON-LOADING -->
            <v-row class="pa-12 bai-viet" v-show="baiVietSelected.updatedAt==undefined">
                <v-col cols="12">
                    <v-skeleton-loader
                    class="mx-auto border"
                    type="image"
                    ></v-skeleton-loader>

                    <v-skeleton-loader
                    v-for="n in 5" :key="n"
                    style="text-align: center;"
                    type="paragraph"
                    ></v-skeleton-loader>
                    
                </v-col>
                
            </v-row>
            
        </v-container>
        <!-- TIN TUC LIEN QUAN -->
        <v-card style="background-color: rgb(43,43,43);" v-show="listTinTuc.length > 0">
            <v-card-actions class="justify-center">
                <div style="text-align: center; font-size: 22px; font-weight: bold; color: wheat;">TIN TỨC LIÊN QUAN</div>
            </v-card-actions>
            <v-card-actions class="bai-viet justify-center" >
                <v-col>
                    <v-row v-for="tinTucs in listTinTuc" :key="tinTucs" class="justify-center">
                        <v-col cols="12" sm="3" v-for="item in tinTucs" :key="item">
                            <RouterLink :to="(`/news?id=${item?.guid}&loaiTinTucId=${item?.loaiTinTucId}`)" >
                                <v-card class="card-child">
                                    <v-card-actions class="container-mg-su-kien">
                                        <v-img cover height="180px" :src="item?.avartar" class="img-su-kien"></v-img>
                                    </v-card-actions>
                                    <v-card-actions class="pa-6">
                                        <div>
                                            <span class="loai-su-kien" style="font-size: 11px;">{{ item?.tenLoaiTinTuc?.toUpperCase() }}</span> 
                                            <span style="font-size: 10px; font-weight: bold;">{{ item?.updatedAt }}</span>
                                        </div>
                                    </v-card-actions>
                                    <v-card-actions class="pa-6" style="margin-top: -30px;">
                                        <div>
                                            <span>{{ item?.name }}</span> 
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </RouterLink>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-actions>
        </v-card>
    </Nav>
</template>
<script>
import { tinTucController } from '@/services/TinTucController';
import Nav from './layout/Nav.vue';
import { listBaiViet } from './util/GlobalVariable';
import { utilController } from '@/services/Util';

export default {
    data() {
        return {
            listImg:[
                require("../../assets/img-event.png")
            ],
            baiVietSelected: {
                updatedAt: undefined
            },
            listTinTuc:[]
        }
    },
    created(){
        this.setData();
    },
    updated(){
        this.baiVietSelected.updatedAt = undefined
        this.setData();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Thêm 'smooth' để cuộn mượt mà
        });
    },
    methods:{
        setData(){
            
            this.listTinTuc = []
            const currentUrl = window.location.href;
            const url = new URL(currentUrl);
            const params = new URLSearchParams(url.search);
            let id = params.get("id");
            let loaiTinTucId = params.get("loaiTinTucId");
            if(id!="undefined" && loaiTinTucId!="undefined"){
                tinTucController.getByIdClient(id, loaiTinTucId)
                .then(res=>{
                    this.baiVietSelected = res.data.selected[0]
                    let listLienQuan = res.data.lienQuan
                    this.baiVietSelected.updatedAt = utilController.convertDate(this.baiVietSelected.updatedAt, "datetime")

                    res.data.lienQuan.map(item=>{
                        item.updatedAt = utilController.convertDate(item.updatedAt, "datetime")
                    })

                    let mangCon = []

                    for(let i=0; i<listLienQuan.length; i++){
                        if(i % 4==0){
                            mangCon = []
                            mangCon.push(listLienQuan[i])
                            this.listTinTuc.push(mangCon)
                        }else{
                            mangCon.push(listLienQuan[i])
                        }
                    }
                    console.log(this.listTinTuc)
                })
                .catch(err=>{
                    
                })
            }else{
                this.baiVietSelected = listBaiViet.filter(x=>x.id==1)[0];
            }
        }
    },
    components: {
        Nav
    }
}
</script>
