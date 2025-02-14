<template>
    <NavAdmin>
        <v-container>
            <v-card class="mx-auto" max-width="800">
                <v-card-title style="text-align: center;">THÔNG TIN TÀI KHOẢN</v-card-title>
                <v-card-actions class="justify-center">
                    <v-container fuild>
                        <!-- Loại tài khoản -->
                        <v-row>
                            <v-col cols="12" md="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Loại tài khoản</v-list-subheader>
                            </v-col>
                            <v-col col="12" md="4">
                                <v-radio-group
                                    inline
                                    v-model="loaiTaiKhoanId"
                                    :disabled="!isCreate"
                                >
                                    <v-radio
                                        label="Quản trị"
                                        value="1"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col col="12" md="4">
                                <v-radio-group
                                    inline
                                    v-model="loaiTaiKhoanId"
                                    :disabled="!isCreate"
                                >
                                    <v-radio
                                        label="Câu lạc bộ Esport"
                                        value="2"
                                    ></v-radio>
                                    <v-radio
                                        label="Cá nhân"
                                        value="3"
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
                                 v-model="userName"
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
                                 v-model="email"
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
                                 v-model="password"
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
                                 v-model="nhapLaiPassword"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <!-- Tên người dùng -->
                        <v-row>
                            <v-col cols="4" class="justify-center">
                                <v-list-subheader style="text-align: center;" >Tên người dùng</v-list-subheader>
                            </v-col>
                            <v-col col="8">
                                <v-text-field
                                 density="compact"
                                 variant="outlined"
                                 placeholder="Tên người dùng"
                                 v-model="name"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <!-- Ngay sinh -->
                        <v-row style="margin-top: 20px;">
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Ngày sinh</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact" 
                                    variant="outlined"
                                    type="date" 
                                    v-model="caNhan.ngaySinhCaNhan"
                                    ></v-text-field>
                                </v-col>
                        </v-row>
                        <!-- Dien-thoai -->
                        <v-row>
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Điện thoại</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Điện thoại"
                                    v-model="caNhan.dienThoaiCaNhan"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        <!-- Dang ky theo CLB -->
                        <v-sheet v-show="loaiTaiKhoanId=='2' ? true : false">
                            <v-divider>
                                <div style="font-size: 15px;">THÔNG TIN CÂU LẠC BỘ</div>
                            </v-divider>
                            <!-- Ten clb -->
                            <v-row style="margin-top: 20px;">
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Tên đầy đủ</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Tên đầy đủ"
                                    v-model="clb.tenClb"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <!-- Viet tat clb -->
                            <v-row>
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Viết tắt</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Viết tắt"
                                    v-model="clb.vietTatClb"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <!-- To chuc clb -->
                            <v-row>
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Tổ chức</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Tổ chức"
                                    v-model="clb.toChucClb"
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
                                    v-model="clb.linkFanpageClb"
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
                                    v-model="clb.hoTenDaiDienClb"
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
                                    v-model="clb.chucVuDaiDienClb"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Tỉnh/thành phố</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-autocomplete
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Tỉnh/thành phố"
                                    :items="itemsTinh"
                                    v-model="clb.tinhThanhPhoDaiDienClb"
                                    ></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-sheet>

                        <!-- Quyen tai khoan -->
                        <v-sheet v-show="loaiTaiKhoanId=='1' ? true : false">
                            <v-divider>
                                <div style="font-size: 15px;">QUYỀN TÀI KHOẢN</div>
                            </v-divider>

                            <v-row style="margin-top: 20px;" v-for="listQuyenSelecte in listQuyen" :key="listQuyenSelecte">
                                <v-col cols="12" md="4" v-for="quyenSelected in listQuyenSelecte" :key="quyenSelected">
                                    <v-switch
                                    v-model="listQuyenSelected"
                                    :label="quyenSelected.label"
                                    :value="quyenSelected.value"
                                    color="primary"
                                    hide-details
                                    inset
                                    ></v-switch>
                                </v-col>
                            </v-row>
                        </v-sheet>
                        <!-- Dang ky theo ca nhan -->
                        <v-sheet v-show="loaiTaiKhoanId=='3' ? true : false">
                            <v-row>
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Chức vụ</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-text-field
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Chức vụ"
                                    v-model="caNhan.chucVuCaNhan"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="4" class="justify-center">
                                    <v-list-subheader style="text-align: center;" >Tỉnh/thành phố</v-list-subheader>
                                </v-col>
                                <v-col col="8">
                                    <v-autocomplete
                                    density="compact"
                                    variant="outlined"
                                    placeholder="Tỉnh/thành phố"
                                    :items="itemsTinh"
                                    v-model="caNhan.tinhThanhPhoCaNhan"
                                    ></v-autocomplete>
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
                                    v-model="caNhan.clbCaNhan"
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
                                    v-model="caNhan.truongCaNhan"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-sheet>

                        <!-- Danh sach quyen -->


                    </v-container>
                </v-card-actions>
                <v-card-actions class="justify-center">
                    <v-btn :loading="loadingBtn" @click="!isCreate ? update() : createNewAccount()" style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </NavAdmin>
</template>
<script>
import roleController from '@/services/RoleController';
import NavAdmin from '../layout/NavAdmin.vue';
import { userController } from '@/services/UserController';
import { forEach } from 'lodash';
import { utilController } from '@/services/Util';
    export default{
        data(){
            return {
                isCreate: true,
                loadingBtn: false,
                loaiTaiKhoanId:"1" ,
                listQuyenSelected:[],
                listQuyen:[],
                listAllQuyen:[],

                idUser: "",
                guidUser:"",
                userName: "",
                name:"",
                email:"",
                password: "",
                nhapLaiPassword: "",

                itemsTinh:[],

                caNhan: {
                    dienThoaiCaNhan:"",
                    ngaySinhCaNhan: "",
                    chucVuCaNhan: "",
                    tinhThanhPhoCaNhan:"",
                    clbCaNhan: "",
                    truongCaNhan:"",
                },

                clb:{
                    tenClb:"",
                    vietTatClb:"",
                    toChucClb:"",
                    linkFanpageClb:"",
                    hoTenDaiDienClb: "",
                    chucVuDaiDienClb:"",
                    tinhThanhPhoDaiDienClb:""
                }

            }
        },
        created(){
            this.setRole(),
            this.setData(),
            this.setListProvince()
        },
        methods:{
            setListProvince(){
                utilController.getListProvince()
                .then(res=>{
                    res.data.map(item=>{
                        this.itemsTinh.push(item.name)
                    })
                })
            },
            setRole(){
                let arrChild = []
                roleController.getAll()
                .then(res=>{
                    res.data.forEach(e => {
                        let role = {
                            "label": e.role_name,
                            "value": e.id
                        }
                        this.listAllQuyen.push(role)
                        if(this.listQuyen.length % 3==0){
                            arrChild = []
                            arrChild.push(role)
                            this.listQuyen.push(arrChild)
                        }else{
                            arrChild.push(role)
                        }
                        
                    });
                })
            },
            createNewAccount(){
                this.loadingBtn = true
                let obj = {}
                obj.userName = this.userName
                obj.name = this.name
                obj.email = this.email
                obj.passWord = this.password
                obj.nhapLaiPassword = this.nhapLaiPassword
                obj.loaiTaiKhoanId = this.loaiTaiKhoanId
                obj.ngaySinhCaNhan = this.caNhan.ngaySinhCaNhan
                obj.dienThoaiCaNhan = this.caNhan.dienThoaiCaNhan
                obj.listRoleId = []

                if(this.loaiTaiKhoanId == "1"){
                    obj.listRoleId = this.listQuyenSelected
                }else if(this.loaiTaiKhoanId == "2"){
                    for(let key of Object.keys(this.clb)){
                        obj[key] = this.clb[key]
                    }
                }else if(this.loaiTaiKhoanId == "3"){
                    for(let key of Object.keys(this.caNhan)){
                        obj[key] = this.caNhan[key]
                    }
                }
                userController.create(obj)
                .then(res=>{
                    this.loadingBtn = false
                    alert("SUCCESS")
                })
                .catch(err=>{
                    this.loadingBtn = false
                    alert(err.response.data)
                })
            },
            setData(){
                const urlParams = new URLSearchParams(window.location.search)
                const id = urlParams.get("id")
                if(id){
                    this.isCreate = false
                    userController.getById(id)
                    .then(res=>{
                        if(res!=null){
                            res = res.data
                            this.loaiTaiKhoanId = `${res.loaiTaiKhoanId}`;
                            this.idUser = res.id;
                            this.guidUser = res.guid;
                            this.userName = res.userName;
                            this.name = res.name;
                            this.email = res.email;
                            this.caNhan.ngaySinhCaNhan = res.ngaySinhCaNhan.split(" ")[0];
                            this.caNhan.dienThoaiCaNhan = res.dienThoaiCaNhan;
                            if(this.loaiTaiKhoanId=="3"){
                                this.caNhan.dienThoaiCaNhan = res.dienThoaiCaNhan;
                               
                                this.caNhan.chucVuCaNhan = res.chucVuCaNhan;
                                this.caNhan.tinhThanhPhoCaNhan = res.tinhThanhPhoCaNhan;
                                this.caNhan.clbCaNhan = res.clbCaNhan;
                                this.caNhan.truongCaNhan = res.truongCaNhan;
                            }
                            if(this.loaiTaiKhoanId == "2"){
                                this.clb.tenClb = res.tenClb;
                                this.clb.vietTatClb = res.vietTatClb;
                                this.clb.toChucClb = res.toChucClb;
                                this.clb.linkFanpageClb = res.linkFanpageClb;
                                this.clb.hoTenDaiDienClb = res.hoTenDaiDienClb;
                                this.clb.chucVuDaiDienClb = res.chucVuDaiDienClb;
                                this.clb.tinhThanhPhoDaiDienClb = res.tinhThanhPhoDaiDienClb;
                            }
                            for(let quyen of res.listRole){
                                this.listQuyenSelected.push(quyen.roleId)
                            }
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
            update(){
                this.loadingBtn = true
                let obj = {
                    loaiTaiKhoanId: this.loaiTaiKhoanId,
                    id: this.idUser,
                    guid: this.guidUser,
                    userName: this.userName,
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    nhapLaiPassword: this.nhapLaiPassword,

                    dienThoaiCaNhan: this.caNhan.dienThoaiCaNhan,
                    ngaySinhCaNhan: this.caNhan.ngaySinhCaNhan,
                    chucVuCaNhan: this.caNhan.chucVuCaNhan,
                    tinhThanhPhoCaNhan: this.caNhan.tinhThanhPhoCaNhan,
                    clbCaNhan: this.caNhan.clbCaNhan,
                    truongCaNhan: this.caNhan.truongCaNhan,

                    tenClb: this.clb.tenClb,
                    vietTatClb: this.clb.vietTatClb,
                    toChucClb: this.clb.toChucClb,
                    linkFanpageClb: this.clb.linkFanpageClb,
                    hoTenDaiDienClb: this.clb.hoTenDaiDienClb,
                    chucVuDaiDienClb: this.clb.chucVuDaiDienClb,
                    tinhThanhPhoDaiDienClb: this.clb.tinhThanhPhoDaiDienClb,

                    listRole:[]
                }

                for(let i=0; i<this.listAllQuyen.length; i++){
                    let quyenSelected = this.listQuyenSelected.filter(x=>x==this.listAllQuyen[i].value)[0];
                    let objQuyenSelected = {
                        roleId: quyenSelected || this.listAllQuyen[i].value,
                        userId: this.idUser
                    }
                    if(quyenSelected){
                        objQuyenSelected.isDeleted = null;
                    }else{
                        objQuyenSelected.isDeleted = true;
                    }
                    obj.listRole.push(objQuyenSelected)
                }
                userController.update(obj)
                .then(res=>{
                    this.loadingBtn = false
                    this.$toast.success("cập nhật thành công!")
                })
                .catch(err=>{
                    this.loadingBtn = false
                    this.$toast.error(err.response.data)
                })
            },
        },
        components:{
            NavAdmin
        }
    }
</script>