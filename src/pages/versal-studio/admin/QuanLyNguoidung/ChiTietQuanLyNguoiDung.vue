<template>
    <NavAdmin>
        <v-container>
            <v-card class="mx-auto" max-width="800">
                <v-card-title style="text-align: center;">THÔNG TIN TÀI KHOẢN</v-card-title>
                <v-card-actions class="justify-center">
                    <v-container fuild>
                        <!-- Loại tài khoản -->
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Loại tài khoản</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-radio-group
                                    inline
                                    v-model="loaiTaiKhoan"
                                    disabled
                                >
                                    <v-radio
                                        label="Câu lạc bộ Esport"
                                        value="clb"
                                    ></v-radio>
                                    <v-radio
                                        label="Cá nhân"
                                        value="caNhan"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>
                        <!-- Tên đăng nhập -->
                        <v-row>
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

                        <!-- Dang ky theo CLB -->
                        <v-sheet v-show="loaiTaiKhoan=='clb' ? true : false">
                            <v-divider>
                                <div style="font-size: 15px;">THÔNG TIN CÂU LẠC BỘ</div>
                            </v-divider>

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
                                    <v-list-subheader style="text-align: center;" >Viết tắt</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Viết tắt"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Tổ chức</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Tổ chức"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Link fanpage</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Link fanpage"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-divider>
                                <div style="font-size: 15px;">NGƯỜI ĐẠI DIỆN</div>
                            </v-divider>

                            <v-row style="margin-top: 20px;">
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Họ và tên</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Họ và tên"
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
                        </v-sheet>

                        <!-- Dang ky theo ca nhan -->
                        <v-sheet  v-show="loaiTaiKhoan=='caNhan' ? true : false">
                            <v-divider>
                                <div style="font-size: 15px;">THÔNG TIN CÁ NHÂN</div>
                            </v-divider>

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

                            <v-row style="margin-top: 20px;">
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
                        </v-sheet>

                    </v-container>
                </v-card-actions>
                <v-card-actions class="justify-center">
                    <v-btn style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </NavAdmin>
</template>
<script>
import NavAdmin from '../layout/NavAdmin.vue';
    export default{
        data(){
            return {
                loaiTaiKhoan:"caNhan" 
            }
        },
        components:{
            NavAdmin
        }
    }
</script>