<style>
    .loai-su-kien{
        background-color: black;
        color: white;
        font-weight: bold;
        padding: 5px;
        margin-right: 8px;
        font-size: 15px;
    }
</style>
<template>
    <Nav>
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <v-img src="@/assets/bg-img.jpg" max-width="4000" max-height="2000"></v-img>
                    <div style="margin-top: 15px">
                        <span class="loai-su-kien">SỰ KIỆN ESPORTS </span> 
                        <span class="ngay-to-chuc">16/07/2024</span>
                    </div>
                    <div style="font-size: 30px; font-weight: 900; margin-top: 15px; margin-bottom: 25px;">
                        Sinh viên ĐH Bách Khóa TP.HCM hào hứng tham gia giải đấu chào xuân 2024
                    </div>
                    <v-divider></v-divider>
                    <!-- CONTENT -->
                    <div>

                    </div>
                </v-col>
            </v-row>
        </v-container>
        <Footer></Footer>
    </Nav>
</template>
<script>
import Footer from './layout/Footer.vue';
import Nav from './layout/Nav.vue';

    export default{
        data(){
            return {

            }
        },
        components:{
            Nav,
            Footer
        }
    }
</script>