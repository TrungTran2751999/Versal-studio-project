<template>
    <NavAdmin>
        <v-container>
            <v-card class="mx-auto" max-width="800">
                <v-card-title style="text-align: center;">THÔNG TIN TEAM</v-card-title>
                <v-card-actions class="justify-center">
                    <v-container fuild>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Tên</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                :loading="loadingBtn"
                                 density="compact"
                                 variant="outlined"
                                 placeholder="Tên"
                                 v-model="name"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >User</v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-row>
                                    <v-col cols="10">
                                        <v-autocomplete
                                        :loading="loadingBtn"
                                        density="compact"
                                        variant="outlined"
                                        :items = "listUser"
                                        v-model="userSelected"
                                        item-title="name"
                                        item-value="id"
                                        @update:modelValue="changeUser"
                                        ></v-autocomplete>
                                    </v-col>
                                    <v-col cols="2">
                                        <RouterLink :to="linkChiTietUser">
                                            <v-btn style="font-size: small;">Xem chi tiết</v-btn>
                                        </RouterLink>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Thể loại game</v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-autocomplete
                                :loading="loadingBtn"
                                density="compact"
                                variant="outlined"
                                :items = "listTheLoaigame"
                                v-model="theLoaiGameSelected"
                                item-title="name"
                                item-value="id"
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Trạng thái</v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-select
                                :loading="loadingBtn"
                                density="compact"
                                variant="outlined"
                                :items = "listStatus"
                                v-model="statusSelected"
                                item-title="title"
                                item-value="value"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Avartar</v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-file-input
                                :loading="loadingBtn"
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
import { teamController } from '@/services/TeamController';
import { tinTucController } from '@/services/TinTucController';
import { userController } from '@/services/UserController';
    export default{
        data(){
            return {
                loadingBtn: false,
                id:"",
                guid:"",
                name:"",
                tenVietTat:"",
                avartar: null,
                image:null,
                description:"",
                statusSelected:0,
                isCreate: true,
                listStatus:[{title:"Đang hoạt động", value:0}, {title:"Đã khóa", value:1}],
                listUser:[],
                userSelected:"",
                userSelectedGuid:"",
                listTheLoaigame:[],
                theLoaiGameSelected:"",
                linkChiTietUser:""
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
                        status: this.statusSelected,
                        image: res.split(",")[1],
                        description: this.description,
                        userId: this.userSelected,
                        theLoaiGameId: this.theLoaiGameSelected
                    }
                    teamController.create(obj)
                    .then(res=>{
                        this.loadingBtn = false
                        this.$toast.success("Cập nhật team thành công")
                    })
                    .catch(err=>{
                        this.loadingBtn = false
                        this.$toast.error("Cập nhật team ko thành công")
                    })
                })
            },
           setData(){
                tournamentController.getAllTheLoaiGameActive()
                .then(res=>{
                    res.data.map(item=>{
                        let obj = {
                            name: item.name,
                            tenVietTat: item.tenVietTat,
                            id: item.id
                        }
                        this.listTheLoaigame.push(obj);
                    })
                    userController.getAllActive()
                    .then(res=>{
                        res.data.map(item=>{
                            let obj = {
                                name: item.name,
                                id: item.id,
                                guid: item.guid
                            }
                            this.listUser.push(obj);
                        })
                        const urlParams = new URLSearchParams(window.location.search)
                        const id = urlParams.get("id")
                        const guid = urlParams.get("guid");
                        if(id && guid){
                            this.linkChiTietUser = `/admin/chi-tiet-quan-ly-user?id=${guid}`
                            this.loadingBtn = true
                            this.id = id;
                            this.guid = guid;
                            this.isCreate = false;
                            teamController.getById(id, guid)
                            .then(res=>{
                                this.name = res.data.name
                                this.tenVietTat = res.data.tenVietTat
                                this.statusSelected = res.data.isBan
                                this.theLoaiGameSelected = res.data.theLoaiGameId
                                this.userSelected = res.data.userId
                                this.image = `data:image/png;base64,${res.data.image}`
                                this.statusSelected = res.data.isBan

                                this.loadingBtn = false
                            })
                        }
                    })  
                })
           },
           update(){
                this.loadingBtn = true;
                let obj = {
                    name: this.name,
                    updatedBy: 0,
                    status: this.statusSelected,
                    image: this.image.split(",")[1],
                    description: this.description,
                    userId: this.userSelected,
                    theLoaiGameId: this.theLoaiGameSelected,
                    id: this.id,
                    guid: this.guid
                }
                teamController.update(obj)
                .then(res=>{
                    this.loadingBtn = false;
                    this.$toast.success("Cập nhật thành công")
                })
                .catch(err=>{
                    this.loadingBtn = false;
                    this.$toast.error(err.response.data)
                })   
           },
           changeImage(){
                utilController.convertFileToBase64(this.avartar)
                .then(res=>{
                    this.image = res
                })
           },
           changeUser(){
                let guid = this.listUser.filter(x=>x.id==this.userSelected)[0].guid;
                this.linkChiTietUser = `/admin/chi-tiet-quan-ly-user?id=${guid}`
           }
        },
        components:{
            NavAdmin
        }
    }
</script>