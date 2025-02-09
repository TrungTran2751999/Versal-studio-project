<style scoped>
    .row-ban{
        background-color: red; 
        color: black; 
        width: fit-content;
        padding: 3px;
        border-radius: 3px;
        font-size: smaller; 
        font-weight: bolder; 
    }   
    .row-active{
        background-color: aquamarine; 
        color: black; 
        width: fit-content;
        padding: 3px;
        border-radius: 3px;
        font-size: smaller; 
        font-weight: bolder;  
    }
</style>
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
                                <v-list-subheader style="text-align: center;" >Position</v-list-subheader>
                            </v-col>
                            <v-col cols="8">
                                <v-text-field
                                density="compact"
                                variant="outlined"
                                v-model="positionLeader"
                                ></v-text-field>
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
                               <img width="200" height="200" :src="image" v-show="visibleAvaratar"/>
                            </v-col>
                        </v-row>

                        
                    </v-container>
                </v-card-actions>
                <v-card-actions class="justify-center">
                    <v-btn :loading="loadingBtn" @click="!isCreate ? update() : createNew()" style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="mx-auto" max-width="800" style="margin-top: 20px;" v-show="id!=''">
                <v-card-title style="text-align: center;">THÔNG TIN TEAM MEMBER</v-card-title>
                <v-card-actions>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                            density="compact"
                            variant="outlined"
                            label="Tìm kiếm member"
                            v-model="tableMember.search"
                            ></v-text-field>
                            <v-btn style="background-color: red;" @click="filerMember">LỌC</v-btn>
                            <v-btn style="background-color: green;" @click="openDialog">THÊM MEMBER</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-actions class="justify-center">
                    <v-row>
                        <v-col cols="12" style="overflow-x: scroll;">
                            <v-data-table-server
                            height="70vh"
                            fixed-header 
                            :headers="tableMember.headers" 
                            :items-length="tableMember.totalItems" 
                            :items="tableMember.serverItems"
                            :items-per-page="tableMember.itemsPerPage" 
                            loading-text="Loading..."
                            show-select 
                            return-object 
                            v-show="!tableMember.loading"
                            >
                            <template v-slot:[`headers`]>
                                <tr>
                                    <th style="min-width: 200px;">Tên thành viên</th>
                                    <th style="min-width: 200px;">Position</th>
                                    <th style="min-width: 200px;">Trạng thái</th>
                                    <th style="min-width: 200px"></th>
                                </tr>
                            </template>
                            <template v-slot:[`item`] = "{item}">
                                <tr class="hover-row">
                                    <td>{{ item.Name }}</td>
                                    <td>{{ item.Position }}</td>
                                    <td>
                                        <div :class="item.isDeleted ? 'row-ban' : 'row-active'">
                                            {{ item.Status }}
                                        </div>
                                    </td>
                                    <td>
                                        <v-btn 
                                        density="compact" 
                                        icon="mdi-delete" 
                                        style="background-color: red;" 
                                        @click="dialogXoaMember = true; tenMemberXoa=item.Name; idXoaMember = item.UserId"
                                        v-show="item.UserId!=leaderId">
                                        </v-btn>
                                    </td>

                                </tr>
                            </template>
                            </v-data-table-server>
                            <Loading :loading="tableMember.loading"></Loading>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-container>
        <v-dialog 
        v-model="dialogMember"
        max-width="600"
        >
        <v-container 
            fluid
        >
            <v-card
            title="THÊM MEMBER"
            >
            <v-card-actions>
                <v-row>
                    <v-col cols="12">
                        <v-autocomplete
                            :loading="loadingCanhan"
                            density="compact"
                            variant="outlined"
                            :items = "listCaNhan"
                            v-model="memberSelected"
                            item-title="name"
                            item-value="id"
                        ></v-autocomplete>
                        <v-text-field
                            :loading="loadingCanhan"
                            density="compact"
                            variant="outlined"
                            placeholder="Vị trí"
                            v-model="memberPosition"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-actions>
            <template v-slot:actions>
                <v-spacer></v-spacer>
                <v-btn style="background-color: green;" @click="addMember">THÊM</v-btn>
                <v-btn @click="dialogMember=false">ĐÓNG</v-btn>
            </template>
            </v-card>
        </v-container>
        </v-dialog>
        
        <v-dialog
        v-model="dialogXoaMember"
        max-width="600"
        >
            <v-card
            title="XÓA MEMBER"
            class="justify-center"
            >
                <v-card-actions class="justify-center">
                    <v-row>
                        <v-col cols="12" class="justify-center">
                            <div style="min-width: 100%; text-align: center;">Bạn có muốn xóa {{ tenMemberXoa }}</div>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn style="background-color: green;" @click="xoaMember">XÁC NHẬN</v-btn>
                    <v-btn @click="dialogXoaMember=false">ĐÓNG</v-btn>
                </template>
            </v-card>
        </v-dialog>
    </NavAdmin>
</template>
<script>
import NavAdmin from '../../layout/NavAdmin.vue';
import { utilController } from '@/services/Util';
import { tournamentController } from '@/services/TournamentController';
import { teamController } from '@/services/TeamController';
import { userController } from '@/services/UserController';
import Loading from '../../layout/TableLoading.vue';
import { loginInfo } from '@/pages/versal-studio/util/GlobalVariable';
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
                positionLeader:"",
                statusSelected:0,
                isCreate: true,
                listStatus:[{title:"Đang hoạt động", value:0}, {title:"Đã khóa", value:1}],
                listUser:[],
                userSelected:"",
                userSelectedGuid:"",
                listTheLoaigame:[],
                theLoaiGameSelected:"",
                linkChiTietUser:"",
                visibleAvaratar: false,
                tableMember:{
                    itemsPerPage: 10,
                    serverItems: [],
                    totalItems:0,
                    page: 0,
                    loading:true,
                    headers: [],
                    search:"",
                    statusSelected:0
                },
                dialogMember:false,
                listCaNhan:[],
                memberSelected:"",
                memberPosition:"",
                loadingCanhan:false,
                // xoa member
                dialogXoaMember: false,
                idXoaMember: 0,
                tenMemberXoa: "",
                leaderId:""
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
                        theLoaiGameId: this.theLoaiGameSelected,
                        positionLeader: this.positionLeader
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
                            //this.linkChiTietUser = `/admin/chi-tiet-quan-ly-user?id=${guid}`
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
                                this.statusSelected = res.data.isBan,
                                this.positionLeader = res.data.positionLeader
                                this.leaderId = res.data.userId
                                this.loadingBtn = false
                                this.changeUser()
                                this.visibleAvaratar = true
                                this.getMemberOfTeam({page:1, itemsPerPage:10})
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
                let guid = this.listUser.filter(x=>x.id==this.userSelected)[0]?.guid;
                this.linkChiTietUser = `/admin/chi-tiet-quan-ly-user?id=${guid}`
           },
           getMemberOfTeam({ page, itemsPerPage }){
                let obj = {
                    filter:{
                        keyWord: this.tableMember.search,
                        status: this.tableMember.statusSelected,
                        id: this.id
                    },
                    start: (page-1)*itemsPerPage,
                    limit: itemsPerPage
                }
                this.tableMember.loading = true
                teamController.getMemberOfTeam(obj)
                .then(res=>{
                    this.tableMember.serverItems = []
                    res.data?.members?.map(item=>{
                        let obj = {
                            UserId: item.id,
                            Name: item.name,
                            Status: item.isDeleted == false ? "ĐANG HỌAT ĐỘNG" : "ĐÃ RỜI",
                            Position: item.position
                        }
                        this.tableMember.serverItems.push(obj);
                        this.tableMember.page = page
                    })
                    this.tableMember.totalItems = res.data?.total[0].count
                    this.tableMember.loading = false
                })
           },
           openDialog(){
            this.dialogMember = true;
            if(this.listCaNhan.length == 0){
                this.loadingCanhan = true;
                userController.getAllUserActive()
                .then(res=>{
                    res.data.map(item=>{
                        let obj = {
                            name: item.name,
                            id: item.id
                        }
                        this.listCaNhan.push(obj)
                    });
                    this.loadingCanhan = false;
                })
            }
           },
           addMember(){
                let obj = {
                    "userId": this.memberSelected,
                    "teamId": this.id,
                    "position": this.memberPosition,
                    "updatedBy": loginInfo.userName,
                    "isDeleted":0
                }
                teamController.addMember(obj)
                .then(res=>{
                    this.$toast.success("Cập nhật thành công !")
                })
                .catch(err=>{
                    this.$toast.error("Cập nhật không thành công !")
                })
                .finally(()=>{
                    this.dialogMember = false
                })
           },
           filerMember(){
                this.getMemberOfTeam({page:1, itemsPerPage:10})
           },
           xoaMember(){
                let obj = {
                    userId: this.idXoaMember,
                    teamId: this.id
                }
                teamController.xoaMember(obj)
                .then(res=>{
                    this.$toast.success("Xóa thành công !");
                    this.filerMember()
                })
                .catch(err=>{
                    this.$toast.error("Xóa không thành công !")
                })
                .finally(()=>{
                    this.dialogXoaMember = false
                })
           }
        },
        components:{
            NavAdmin,
            Loading
        }
    }
</script>