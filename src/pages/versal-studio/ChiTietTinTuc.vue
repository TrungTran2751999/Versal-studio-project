<style>
.loai-su-kien {
    background-color: black;
    color: white;
    font-weight: bold;
    padding: 5px;
    margin-right: 8px;
    font-size: 15px;
}
.card-child{
        margin-bottom: 25px;
        height: 400px;
}
.img-su-kien{
    border: none;
}
</style>
<template>
    
    <Nav>
        <v-container>
            <v-row class="pa-12">
                <v-col cols="12" style="padding-right: 15px;" class="pa-1">
                    <v-img :src="baiVietSelected.avartar" 
                        max-width="4000"
                        max-height="2000"></v-img>
                    <div style="margin-top: 15px">
                        <span class="loai-su-kien">SỰ KIỆN ESPORTS </span>
                        <span class="ngay-to-chuc">{{ baiVietSelected.date }}</span>
                    </div>
                    <div style="font-size: 30px; font-weight: 900; margin-top: 15px; margin-bottom: 25px;">
                        <!-- TEC 2024: Sự kiện Công nghệ – Esports – Cộng đồng hấp dẫn dành cho sinh viên do Versal Esports
                        tổ chức -->
                        {{ baiVietSelected.title }}
                    </div>
                    <v-divider></v-divider>
                    <!-- CONTENT -->
                     
                    <div v-html="baiVietSelected.content"></div>
                </v-col>
            </v-row>
        </v-container>
        <!-- TIN TUC LIEN QUAN -->
        <v-card style="background-color: rgb(43,43,43);">
            <v-card-actions class="justify-center">
                <div style="text-align: center; font-size: 22px; font-weight: bold; color: wheat;">TIN TỨC LIÊN QUAN</div>
            </v-card-actions>
            <v-card-actions class="pa-12" style="margin-top: -30px;">
                <v-row>
                    <v-col cols="12" sm="3" v-for="n in 4" :key="n">
                        <RouterLink to="/news">
                            <v-card class="card-child" v-for="m in 2" :key="m">
                                <v-card-actions class="container-mg-su-kien">
                                    <v-img :src="listImg[0]" class="img-su-kien"></v-img>
                                </v-card-actions>
                                <v-card-actions class="pa-6">
                                    <div>
                                        <span class="loai-su-kien">SỰ KIỆN ESPORTS </span> 
                                        <span>16/07/2024</span>
                                    </div>
                                </v-card-actions>
                                <v-card-actions class="pa-6" style="margin-top: -30px;">
                                    <div>
                                        <span class="">Với sự chuẩn bị kỹ lưỡng và các hoạt động đa dạng, TEC 2024 là điểm đến lý tưởng cho những ai muốn khám phá thế giới công nghệ hiện đại, ...</span> 
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </RouterLink>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
        <Footer></Footer>
    </Nav>
</template>
<script>
import Footer from './layout/Footer.vue';
import Nav from './layout/Nav.vue';
import { listBaiViet } from './util/GlobalVariable';

export default {
    data() {
        return {
            listImg:[
                require("../../assets/img-event.png")
            ],
            baiVietSelected:{}
        }
    },
    created(){
        this.setData();
    },
    methods:{
        setData(){
            const currentUrl = window.location.href;
            const url = new URL(currentUrl);
            const params = new URLSearchParams(url.search);
            let id = params.get("id");
            if(id!=null){
                this.baiVietSelected = listBaiViet.filter(x=>x.id==id)[0];
            }else{
                this.baiVietSelected = listBaiViet.filter(x=>x.id==1)[0];
               
            }
            
        }
    },
    components: {
        Nav,
        Footer
    }
}
</script>
