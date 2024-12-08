<style scoped>
    .bg-card{
        font-size: 20px;
        font-weight: 900;
        background-image: url("../../../assets/bg-card-footer.jpg");
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    .title{
        color: white;
    }
    .children{
        color: white;
        font-weight: 100;
    }
    .children:hover{
        color: brown;
    }
    .icon:hover{
        cursor: pointer;
        color: white; 
        font-size: larger;
    }
    .icon-facebook{
        font-size: larger;
        color: white;
    }
    .icon-facebook:hover{
        cursor: pointer;
        color: blue;
    }
    .icon-youtube{
        font-size: larger;
        color: white;
    }
    .icon-youtube:hover{
        cursor: pointer;
        color: red;
    }
    .icon-discord{
        font-size: larger;
        color: white;
    }
    .icon-discord:hover{
        cursor: pointer;
        color: #6781d6;
    }
    a{
        text-decoration: none
    }
</style>
<template>
    <v-card class="bg-card">
        <v-card-actions style="width: 100%;">
            <v-row justify="center">
                <v-col cols="12" sm="3" v-for="child in listChildrenNav" :key="child" style="text-align: center;">
                    <div class="title" style="margin-top: 10px;">{{ child.name }}</div>
                    <div style="margin-top: 10px;"  v-for="childOfChild in child.children" :key="childOfChild">
                        <RouterLink class="children" :to="childOfChild.link">{{ childOfChild.name }}</RouterLink>
                    </div>
                </v-col>
            </v-row>
        </v-card-actions>
        <v-card-actions class="pa-8 justify-center">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-row>
                        <v-col cols="12" sm="3">
                            <div style="color: rgb(42,42,42); font-size: 20px;">
                                <v-img src="@/assets/logo-2.png" max-height="70"></v-img>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="5" style="margin-top: 18px; text-align: center">
                            <div style="color: white; font-size: 14px; font-weight: 500">CTY TNHH VERSAL STUDIO VIETNAM</div>
                            <div style="color: white; font-size: 14px; font-weight: 100">TP.HCM: PARC MALL, Tạ Quang Bửu, Q8</div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="6" style="margin-top: 18px;">
                    <v-row>
                        <v-col cols="12" sm="9"></v-col>
                        <v-col cols="12" sm="3">
                            <v-row>
                                <v-col cols="4" style="text-align: center">
                                    <div class="icon-discord"><v-icon>mdi-discord</v-icon></div>
                                </v-col>
                                <v-col cols="4" style="text-align: center">
                                    <a target="_blank" class="icon-facebook" href="https://www.facebook.com/versalesports"><v-icon>mdi-facebook</v-icon></a>
                                </v-col>
                                <v-col cols="4" style="text-align: center">
                                    <div class="icon-youtube"><v-icon>mdi-youtube</v-icon></div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
import { RouterLink } from 'vue-router';
import { listChildrenNav } from '../util/GlobalVariable';

     export default{
        data(){
            return{
                config : {
                    itemsToShow: 4.5,
                    snapAlign: 'center',
                    autoplay: 2000,
                    wrapAround: true,
                    pauseAutoplayOnHover: true,
                },
                listChildrenNav: listChildrenNav.filter(x=>x.children.length>0)
            }
        },
        mounted(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Thêm 'smooth' để cuộn mượt mà
            });
        },
        
    }
</script>