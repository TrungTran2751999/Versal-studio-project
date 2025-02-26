<style scoped>
.bg-card {
    font-size: 20px;
    font-weight: 900;
    background-image: url("../../assets/bg-card-footer.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
}

.v-row {
    padding: 0;
    margin: 0;
}

.v-col {
    padding: 0;
    margin: 0;
}

.form {
    width: 70%;
}

@media (max-width: 900px) {
    .form {
        width: auto;
    }
}
</style>
<template v-slot:activator="{ on }">
    <div class="bg-card">
        <v-container fluid>
            <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="800" rounded="lg">
                 <v-tabs>
                    <v-tab @click="selectInfoView('ThongTinCaNhan')">THÔNG TIN CÁ NHÂN</v-tab>
                    <v-tab @click="selectInfoView('TaiKhoan')">TÀI KHOẢN</v-tab>
                 </v-tabs>
                 <v-sheet v-show="listInfoView.filter(x=>x.name=='ThongTinCaNhan')[0].isShow">
                        <v-row style="margin-top: 20px;">
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Tên đầy đủ</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Tên đầy đủ"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Điện thoại</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Điện thoại"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Ngày sinh</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                density="compact" 
                                variant="outlined"
                                type="date" 
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Chức vụ</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Chức vụ"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Tỉnh/thành phố</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-select
                                density="compact"
                                variant="outlined"
                                placeholder="Tỉnh/thành phố"
                                :items="itemsTinh"
                                ></v-select>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Câu lạc bộ</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Câu lạc bộ"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Trường</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Trường"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-card-actions class="justify-center">
                            <v-btn style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>
                        </v-card-actions>
                 </v-sheet>
                 <v-sheet v-show="listInfoView.filter(x=>x.name=='TaiKhoan')[0].isShow">
                     <!-- Tên đăng nhập -->
                    <v-row style="margin-top:15px">
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Tên đăng nhập</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                 density="compact"
                                 variant="outlined"
                                 placeholder="Tên đăng nhập"
                                ></v-text-field>
                            </v-col>
                    </v-row>
                    <!-- Email -->
                    <v-row>
                        <v-col cols="4" class="justify-center">
                            <v-list-subheader style="text-align: center;" >Email</v-list-subheader>
                        </v-col>
                        <v-col col="8">
                            <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Email"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- Mật khẩu -->
                    <v-row>
                        <v-col cols="4" class="justify-center">
                            <v-list-subheader style="text-align: center;" >Mật khẩu</v-list-subheader>
                        </v-col>
                        <v-col col="8">
                            <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Mật khẩu"
                                type="password"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- Nhập lại Mật khẩu -->
                    <v-row>
                        <v-col cols="4" class="justify-center">
                            <v-list-subheader style="text-align: center;" >Nhập lại mật khẩu</v-list-subheader>
                        </v-col>
                        <v-col col="8">
                            <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Nhập lại mật khẩu"
                                type="password"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-card-actions class="justify-center">
                        <v-btn style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>
                    </v-card-actions>
                 </v-sheet>
            </v-card>
        </v-container>
    </div>

</template>
<script>
import Footer from './layout/Footer.vue';

export default {
    data() {
        return {
            isShowPass: false,
            tab: null,
            listInfoView:[
                {
                    name: "ThongTinCaNhan",
                    isShow: true
                },
                {
                    name: "TaiKhoan",
                    isShow: false
                }
            ]
        }
    },
    methods: {
        selectInfoView(name){
            this.listInfoView.filter(x=>x.name!=name).map(x=>x.isShow=false)
            this.listInfoView.filter(x=>x.name==name)[0].isShow = true
        }
    },
    components: {
        
    }
}
</script>
