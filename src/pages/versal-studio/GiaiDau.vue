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
                    <v-container style="background-color: #212529; margin-bottom: 15px;" class="pa-4">
                        <div style="color: white; margin-bottom: 15px;">
                            <span style="margin-right: 20px; opacity: 0.5; border: 2px solid green; padding: 5px">ĐÃ KẾT THÚC</span>
                            <span>SCO & DUT Esports</span>
                        </div>
                        <div style="color: white; font-size: 30px; font-weight: 900; margin-bottom: 15px">Giải đấu Liên Quân Mobile: Back To School 2024 Đà Nẵng</div>
                        <v-divider color="white"></v-divider>
                        <v-row style="margin-top: 3px;">
                            <v-col cols="12" md="4">
                                <div style="color: white; font-weight: 100; font-size: 18px;">Giải thưởng</div>
                                <div style="color: white; font-weight: 100; font-size: 18px;">155.000.000 VNĐ</div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <div style="color: white; font-weight: 100; font-size: 18px;">Địa điểm tổ chức</div>
                                <div style="color: white; font-weight: 100; font-size: 18px;">Đại học Bách Khoa Đà Nẵng</div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <!-- <div style="color: white; font-weight: 100; font-size: 18px;">Địa điểm tổ chức</div>
                                <div style="color: white; font-weight: 100; font-size: 18px;">Đại học Bách Khoa Đà Nẵng</div> -->
                            </v-col>
                        </v-row>
                    </v-container>
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
                <v-col cols="12" md="4">
                    <v-container style="background-color: #212529; margin-bottom: 15px;" class="pa-4">
                        <h2 style="color: white;">LỊCH TRÌNH GIẢI ĐẤU</h2>
                        <div style="margin-top: 20px;">
                            <div style="color: white; font-weight: 400; font-size: 15px; margin-bottom: 5px;">THỜI GIAN ĐĂNG KÝ</div>
                            <div style="color: white; font-weight: 200; font-size: 15px;">30/08/2024 - 13/09/2024</div>
                        </div>
                        <div style="margin-top: 20px;">
                            <div style="color: white; font-weight: 400; font-size: 15px; margin-bottom: 5px;">NGÀY THI ĐẤU</div>
                            <div style="color: white; font-weight: 200; font-size: 15px;">07:00 AM - Sat, 14/09/2024</div>
                        </div>
                        <div style="margin-top: 20px;">
                            <div style="color: white; font-weight: 400; font-size: 15px; margin-bottom: 5px;">THỜI GIAN ĐĂNG KÝ</div>
                            <div style="color: white; font-weight: 200; font-size: 15px;">30/08/2024 - 13/09/2024</div>
                        </div>
                        <v-divider color="white" style="margin-top: 20px;"></v-divider>
                        <div style="margin-top: 20px;">
                            <div style="color: white; font-weight: 400; font-size: 15px; margin-bottom: 5px;">BỘ MÔN THI ĐẤU</div>
                            <div style="color: white; font-weight: 200; font-size: 15px;">Liên Quân Mobile</div>
                        </div>
                        <div style="margin-top: 20px;">
                            <div style="color: white; font-weight: 400; font-size: 15px; margin-bottom: 5px;">ĐỘI THAM DỰ</div>
                            <div style="color: white; font-weight: 200; font-size: 15px;">128 teams</div>
                        </div>
                    </v-container>
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
            return{
            }
        },
        components:{
            Nav,
            Footer
        }
    }
</script>