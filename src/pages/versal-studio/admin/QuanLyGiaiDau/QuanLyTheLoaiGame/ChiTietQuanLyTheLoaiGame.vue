<template>
    <NavAdmin>
        <v-container>
            <v-card class="mx-auto" max-width="800">
                <v-card-title style="text-align: center;">THÔNG TIN THỂ LOẠI GAME</v-card-title>
                <v-card-actions class="justify-center">
                    <v-container fuild>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Tên</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                 density="compact"
                                 variant="outlined"
                                 placeholder="Tên"
                                 v-model="name"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Tên viết tắt</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                 density="compact"
                                 variant="outlined"
                                 placeholder="Tên viết tắt"
                                 v-model="tenVietTat"
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
                                <v-list-subheader style="text-align: center;" >Avartar</v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-file-input
                                density="compact"
                                accept="image/*"
                                variant="outlined"
                                v-model="avartar"
                                @change="changeImage"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" ></v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                               <img width="200" height="200" :src="image" />
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
import NavAdmin from '../../layout/NavAdmin.vue';
import { utilController } from '@/services/Util';
import { tournamentController } from '@/services/TournamentController';
    export default{
        data(){
            return {
                loadingBtn: false,
                id:"",
                name:"",
                tenVietTat:"",
                avartar: null,
                image:null,
                statusSelected:0,
                isCreate: true,
                listStatus:[{title:"Đang hoạt động", value:0}, {title:"Đã hủy", value:1}]
            }
        },
        created(){
            this.setData()
        },
        methods:{
            createNew(){
                this.loadingBtn = true;
                utilController.convertFileToBase64(this.avartar)
                .then(res=>{
                    let obj = {
                        name: this.name,
                        updatedBy: 0,
                        tenVietTat:this.tenVietTat,
                        isDeleted: this.statusSelected,
                        image: res.split(",")[1]
                    }
                    tournamentController.createTheLoaiGame(obj)
                    .then(res=>{
                        this.loadingBtn = false
                        this.$toast.success("Cập nhật thể loại game thành công")
                    })
                    .catch(err=>{
                        this.loadingBtn = false
                        this.$toast.error("Cập nhật thể loại game ko thành công")
                    })
                })
            },
           setData(){
                const urlParams = new URLSearchParams(window.location.search)
                const id = urlParams.get("id")
                if(id){
                    this.id = id;
                    this.isCreate = false;
                    tournamentController.getTheLoaiGameById(id)
                    .then(res=>{
                        console.log(res.data)
                        this.name = res.data.name
                        this.tenVietTat = res.data.tenVietTat
                        this.statusSelected = res.data.isDeleted
                        this.image = `data:image/png;base64,${res.data.image}`
                    })
                }
           },
           update(){
                this.loadingBtn = true;
                let obj = {
                    id:this.id,
                    name: this.name,
                    updatedBy: 0,
                    tenVietTat:this.tenVietTat,
                    isDeleted: this.statusSelected,
                    image: this.image.split(",")[1]
                }
                tournamentController.updateTheLoaiGame(obj)
                .then(res=>{
                    this.loadingBtn = false;
                    this.$toast.success("Cập nhật thành công")
                })
                .catch(err=>{
                    this.loadingBtn = true;
                    this.$toast.error(err.response.data)
                })   
           },
           changeImage(){
                utilController.convertFileToBase64(this.avartar)
                .then(res=>{
                    this.image = res
                })
           }
        },
        components:{
            NavAdmin
        }
    }
</script>