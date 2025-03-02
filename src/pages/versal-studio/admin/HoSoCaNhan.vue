<style scoped>
.bg-card {
    font-size: 20px;
    font-weight: 900;
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
    <NavAdmin>
        <div class="bg-card">
            <v-container fluid>
                <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="800" rounded="lg">
                    <v-card-title style="text-align: center;">THÔNG TIN CÁ NHÂN</v-card-title>
                    <v-sheet v-show="listInfoView.filter(x=>x.name=='ThongTinCaNhan')[0].isShow">
                            <v-col>
                                <v-row style="margin-top: 20px;">
                                    <v-col cols="4" class="justify-center">
                                        <v-list-subheader style="text-align: center;" >Tên đầy đủ</v-list-subheader>
                                    </v-col>
                                    <v-col col="8">
                                        <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        placeholder="Tên đầy đủ"
                                        v-model="name.content"
                                        ></v-text-field>
                                        <div style="font-weight: normal; font-size: 13px; color: red;">{{ name.err }}</div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col>
                                <v-row>
                                    <v-col cols="4" class="justify-center">
                                        <v-list-subheader style="text-align: center;" >Mật khẩu</v-list-subheader>
                                    </v-col>
                                    <v-col col="8">
                                        <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        placeholder="Mật khẩu"
                                        v-model="password.content"
                                        type="password"
                                        ></v-text-field>
                                        <div style="font-weight: normal; font-size: 13px; color: red;">{{ password.err }}</div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4" class="justify-center">
                                        <v-list-subheader style="text-align: center;" >Nhập lại mật khẩu</v-list-subheader>
                                    </v-col>
                                    <v-col col="8">
                                        <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        placeholder="Nhập lại mật khẩu"
                                        v-model="rePassword.content"
                                        type="password"
                                        ></v-text-field>
                                        <div style="font-weight: normal; font-size: 13px;color: red;">{{ rePassword.err }}</div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-card-actions class="justify-center">
                                <v-btn :loading="loading" @click="updateAdmin" style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>
                            </v-card-actions>
                    </v-sheet>
                </v-card>
            </v-container>
        </div>
    </NavAdmin>
    

</template>
<script>
import Cookies from 'js-cookie';
import NavAdmin from './layout/NavAdmin.vue';
import { userController } from '@/services/UserController';

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
            ],
            name:{
                content:"",
                err:"",
                isPass:false
            },
            password:{
                content:"",
                err:"",
                isPass:false
            },
            rePassword:{
                content:"",
                err:"",
                isPass:false
            },
            loading:false
        }
    },
    created(){
        this.setData()
    },
    methods: {
        setData(){
            this.name.content = Cookies.get("name")
        },
        updateAdmin(){
            if(this.name.content.trim().length<=8){
                this.name.err = "Tên phải có hơn 8 kí tự"
            }else{
                this.name.isPass = true
            }
            if(this.password.content.length>0){
                if(this.password.content.trim().length<=8){
                    this.password.err = "Password phải có hơn 8 kí tự"
                }else{
                    this.password.isPass = true
                }
            }else{
                this.password.isPass = true
            }
            

            if(this.password.content.trim() != this.rePassword.content.trim()){
                this.rePassword.err = "Nhập lại password không đúng"
            }else{
                this.rePassword.isPass = true
            }

            if(this.name.isPass && this.password.isPass && this.rePassword.isPass){
                this.loading = true
                let postData = {
                    id: Cookies.get("guid"),
                    name: this.name.content,
                    password: this.password.content
                }
                userController.updateAdmin(postData)
                .then(res=>{
                    this.$toast.success("Cập nhật thành công !")
                    this.loading = false
                    Cookies.set("name", this.name.content)
                    location.reload()
                })
                .catch(err=>{
                    this.loading = false
                    this.$toast.error("Cập nhật không thành công !")
                })
            }
        }
    },
    components: {
        NavAdmin
    },
}
</script>
