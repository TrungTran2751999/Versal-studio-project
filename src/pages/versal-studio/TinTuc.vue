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
</style>
<template>
    <Nav>
        <v-card class="bg-title">
            <v-img src="@/assets/bg-img.jpg" max-width="2000" max-height="1000">
                <v-card-actions class="pa-8">
                    <v-col>
                        <div class="title">{{ title }}</div>
                        <div class="visible" style="color: white; font-weight: bolder; font-size: 15px;">{{ description }}</div>
                    </v-col>
                </v-card-actions>
            </v-img>
        </v-card>
        <v-card style="background-color: rgb(43,43,43);">
            <v-card-actions class="pa-12">
                <v-row>
                    <v-col cols="12" sm="3" v-for="n in 4" :key="n">
                        <RouterLink to="/news">
                            <v-card class="card-child" v-for="m in 2" :key="m">
                                <v-card-actions style="background-color: black;" class="container-mg-su-kien">
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

            <v-card-actions class="justify-center" style="margin-top: -40px;">
                <v-card>
                    <v-pagination
                        v-model="page"
                        :length="15"
                        :total-visible="7"
                        style="background-color: white;"
                    ></v-pagination>
                </v-card>
            </v-card-actions>
        </v-card>
    </Nav>
</template>
<script>
import Nav from './layout/Nav.vue';
import Footer from './layout/Footer.vue';

    export default{
        data(){
            return{
                page:1,
                title: "",
                description:"",
                listTitle: [
                    {
                        "tin-tuc":
                        [
                           {
                             name: "esport-360",
                             title: "ESPORT-360",
                             des: "Tin tức chung về esports, cập nhật các sự kiện, giải đấu đang diễn ra trong nước và quốc tế."
                           },
                           {
                             name: "tin-cong-dong",
                             title: "TIN CỘNG ĐỒNG",
                             des: "Tin tức chung về esports, cập nhật các sự kiện, giải đấu đang diễn ra trong nước và quốc tế."
                           },
                           {
                             name: "kien-thuc-dao-tao",
                             title: "KIẾN THỨC ĐÀO TẠO",
                             des: "Tin tức chung về esports, cập nhật các sự kiện, giải đấu đang diễn ra trong nước và quốc tế."
                           }, 
                           {
                             name: "dien-dan-etalk",
                             title: "DIỄN ĐÀN E-TALK",
                             des: "Tin tức chung về esports, cập nhật các sự kiện, giải đấu đang diễn ra trong nước và quốc tế."
                           },    
                           {
                             name: "human-of-esport",
                             title: "HUMAN OF ESPORT",
                             des: "Tin tức chung về esports, cập nhật các sự kiện, giải đấu đang diễn ra trong nước và quốc tế."
                           },
                           {
                             name: "hoat-dong",
                             title: "HOẠT ĐỘNG",
                             des: "Tin tức chung về esports, cập nhật các sự kiện, giải đấu đang diễn ra trong nước và quốc tế."
                           },           
                        ]   
                    }
                ],
                listImg:[
                    require("../../assets/img-event.png")
                ]
            }
        },
        mounted(){
            this.setTitle();
        },
        updated(){
            this.setTitle();
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Thêm 'smooth' để cuộn mượt mà
            });

        },
        methods:{
            setTitle(){
                const currentUrl = window.location.href;
                const url = new URL(currentUrl);
                const params = new URLSearchParams(url.search);
                const main = params.get('main');
                const child = params.get('child');
                const childrenParam = this.listTitle.filter(x=>x[main].length > 0)
                let listChildrenParam = childrenParam[0][main];
                if(listChildrenParam){
                    const childParam = listChildrenParam.filter(x=>x.name==child)
                    this.title = childParam[0].title
                    this.description = childParam[0].des
                }
            }
        },
        components:{
            Nav:Nav
        }
    }
</script>