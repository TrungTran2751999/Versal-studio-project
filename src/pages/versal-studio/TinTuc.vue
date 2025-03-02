<style scoped>
    .title{
        color: white; 
        font-weight: bolder; 
        font-size: 50px;
    }
    .bg-title{
        background-color: black;
        height: 200px;
    }
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
        height: 400px;
    }
    .status-su-kien{
        border: 2px solid wheat;
        padding: 5px;
        font-size: 12px;
    }
    .card-child-su-kien{
       width: 300px;
    }
    @media (max-width: 900px) {
        .hidden{
            display: block;
        }
        .visible{
            display: none;
        }
        .title{
            margin-top: 40px;
            font-size: 30px;
            text-align: center;
        }
    }
    .bai-viet{
        min-height: 100vh
    }
    @media (max-width: 480px) {
        .bai-viet{
            padding: 0px !important;
            min-height: 100%
        }
    }
</style>
<template>
    <Nav>
        <v-card class="bg-title">
            <v-img src="@/assets/bg-img.jpg" max-width="2000" max-height="1000">
                <v-card-actions class="pa-8">
                    <v-col>
                        <div class="title">{{ title?.toUpperCase() }}</div>
                        <div class="visible" style="color: white; font-weight: bolder; font-size: 15px;">{{ description }}</div>
                    </v-col>
                </v-card-actions>
            </v-img>
        </v-card>
        <v-card style="background-color: rgb(43,43,43);" class="pa-12 bai-viet">
            <v-card-actions>
                <v-col v-show="!loading">
                    <v-row v-for="datas in listData" :key="datas" class="justify-center">
                        <v-col cols="12" sm="3" v-for="item in datas" :key="item" class="justify-center">
                            <RouterLink :to="(`/news?id=${item.guid}`)">
                                <v-card class="card-child">
                                    <v-card-actions style="background-color: black;" class="container-mg-su-kien">
                                        <v-img height="146px" :src="item.avartar" class="img-su-kien"></v-img>
                                    </v-card-actions>
                                    <v-card-actions class="pa-6">
                                        <div>
                                            <span class="loai-su-kien">{{ item.loaiTinTuc?.toUpperCase() }}</span> 
                                            <span style="font-size: 10px">{{ item.updatedAt }}</span>
                                        </div>
                                    </v-card-actions>
                                    <v-card-actions class="pa-6" style="margin-top: -30px;">
                                        <div>
                                            <span>{{ item.name }}</span> 
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </RouterLink>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col v-show="loading">
                    <v-row v-for="n in 2" :key="n">
                        <v-col cols="12" md="3" v-for="m in 4" :key="m">
                            <v-skeleton-loader
                            type="card"
                            ></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-actions>

            <v-card-actions class="justify-center" style="margin-top: -40px;" v-show="Math.ceil(count)>1">
                <v-card>
                    <v-pagination
                        v-model="page"
                        :length="count"
                        :total-visible="Math.ceil(count)"
                        style="background-color: white;"
                        @click="setData"
                    ></v-pagination>
                </v-card>
            </v-card-actions>
        </v-card>
        
    </Nav>
</template>
<script>
import Nav from './layout/Nav.vue';
import Footer from './layout/Footer.vue';
import { tinTucController } from '@/services/TinTucController';
import { utilController } from '@/services/Util';

    export default{
        data(){
            return{
                page:1,
                title: "",
                description:"Tin tức chung về esports, cập nhật các sự kiện, giải đấu đang diễn ra trong nước và quốc tế.",
                count:"",
                listData:[],
                loading:true
            }
        },
        mounted(){
            //this.setTitle();
        },
        updated(){
            this.setData();
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Thêm 'smooth' để cuộn mượt mà
            });

        },
        created(){
            this.setData()
        },
        methods:{
            setData(){
                this.loading = true
                const currentUrl = window.location.href;
                const url = new URL(currentUrl);
                const params = new URLSearchParams(url.search);
                let loaiTinTucId = params.get("child");
                if(loaiTinTucId!=null){
                    let postData = {
                        loaiTinTucId: loaiTinTucId,
                        limit:8,
                        start:(this.page-1)*8
                    }
                    tinTucController.getAllTinTucByLoaiTinTuc(postData)
                    .then(res=>{
                        this.title = res.data.loaiTinTuc[0]?.name
                        let listResult = res.data.list
                        this.count = Math.ceil(res.data.count[0].count/8)
                        res.data.list.map(item=>{
                            item.updatedAt = utilController.convertDate(item.updatedAt)
                        })
                        let mangCon = []
                        this.listData = []
                        for(let i=0; i<listResult.length; i++){
                            if(i % 4==0){
                                mangCon = []
                                mangCon.push(listResult[i])
                                this.listData.push(mangCon)
                            }else{
                                mangCon.push(listResult[i])
                            }
                        }
                        if(this.listData.length > 0) this.loading = false
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Thêm 'smooth' để cuộn mượt mà
                });
            }
        },
        components:{
            Nav:Nav
        }
    }
</script>