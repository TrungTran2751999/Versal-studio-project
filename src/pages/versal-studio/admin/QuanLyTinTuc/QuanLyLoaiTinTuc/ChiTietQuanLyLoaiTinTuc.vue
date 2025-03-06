<template>
    <NavAdmin>
        <v-container>
            <v-card class="mx-auto" max-width="800">
                <v-card-title style="text-align: center;">THÔNG TIN LOẠI TIN TỨC</v-card-title>
                <v-card-actions class="justify-center">
                    <v-container fuild>

                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Tên loại tin tức</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                 density="compact"
                                 variant="outlined"
                                 placeholder="Tên loại tin tức"
                                 v-model="name"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Trạng thái</v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-select
                                density="compact"
                                variant="outlined"
                                :items = "listStatus"
                                v-model="statusSelected"
                                ></v-select>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Thứ tự hiển thị</v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-text-field
                                 density="compact"
                                 variant="outlined"
                                 placeholder="Thứ tự hiển thị"
                                 v-model="thuTuHienThi"
                                 type="number"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                    </v-container>
                </v-card-actions>
                <v-card-actions class="justify-center">

                        <v-btn :loading="loadingBtn" @click="!isCreate ? update() : createNew()" style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>

                </v-card-actions>
            </v-card>
        </v-container>
    </NavAdmin>
</template>
<script>
import { tinTucController } from '@/services/TinTucController';
import NavAdmin from '../../layout/NavAdmin.vue';
    export default{
        data(){
            return {
                id:"",
                name:"",
                statusSelected:0,
                isCreate: true,
                listStatus:[{title:"Đang hoạt động", value:0}, {title:"Đã hủy", value:1}],
                thuTuHienThi:0
            }
        },
        created(){
            this.setData()
        },
        methods:{
            createNew(){
                let obj = {
                    name: this.name,
                    updatedBy: 0,
                    display:this.thuTuHienThi
                }
                tinTucController.createLoaiTinTuc(obj)
                .then(res=>{
                    this.$toast.success("Cập nhật thành công")
                    this.$router.push("/admin/quan-ly-loai-tin-tuc")
                })
                .catch(err=>{
                    this.$toast.error("Cập nhật lỗi")
                })
            },
           setData(){
                const urlParams = new URLSearchParams(window.location.search)
                const id = urlParams.get("id")
                if(id){
                    this.id = id;
                    this.isCreate = false;
                    tinTucController.getLoaiTinTucById(id)
                    .then(res=>{
                        this.name = res.data.name
                        this.statusSelected = res.data.isDeleted
                        this.thuTuHienThi = res.data.display
                    })
                }
           },
           update(){
                let obj = {
                    id: this.id,
                    name: this.name,
                    updatedBy: 0,
                    isDeleted: this.statusSelected,
                    display:this.thuTuHienThi
                }
                tinTucController.updateLoaiTinTuc(obj)
                .then(res=>{
                    this.$toast.success("Cập nhật thành công")
                    this.$router.push("/admin/quan-ly-loai-tin-tuc")
                })
                .catch(err=>{
                    this.$toast.error(err.response.data)
                })   
           }
        },
        components:{
            NavAdmin
        }
    }
</script>