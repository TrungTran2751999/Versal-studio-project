<style scoped>
    .hover-row:hover{
        background-color: beige;
    }
    .row-quan-tri{
        background-color: antiquewhite; 
        color: red; 
    }
    .row-ca-nhan{
        background-color: greenyellow; 
        color: red; 
    }   
    .row-clb{
        background-color: aquamarine; 
        color: red; 
    }
</style>
<template>
    <NavAdmin>
        <div class="pa-8">
            <div>
                <v-row>
                    <!-- <v-col cols="12" md="2">
                        <v-text-field
                        density="compact"
                        variant="outlined"
                        label="Ngày tạo"
                        type="date"
                        ></v-text-field>
                    </v-col> -->
                    <v-col cols="12" md="3">
                        <v-text-field
                        density="compact"
                        variant="outlined"
                        label="Tìm kiếm"
                        v-model="filter.search"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-autocomplete
                        density="compact"
                        variant="outlined"
                        label="Tỉnh/thành phố"
                        :items="filter.listProvince"
                        v-model="filter.tinhThanhPhoSelected"
                        @update:modelValue="onSelectedChange"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-select
                            density="compact"
                            variant="outlined"
                            label="Loại tài khoản"
                            :items="itemLoaiTaiKhoan"
                            v-model="itemSelectLoai"
                            item-title="name"
                            item-value="value"
                            return-object
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row style="margin-top: -40px;">
                    <v-col cols="6" md="11">
                        <v-btn @click="filterNguoiDung" style="background-color: #dc3545;">LỌC</v-btn>
                    </v-col>
                    <v-col cols="6" md="1">
                        <RouterLink to="/admin/chi-tiet-quan-ly-user">
                            <v-btn  style="background-color: green; margin-left: 15px;">Thêm mới</v-btn>
                        </RouterLink>
                    </v-col>
                </v-row>
            </div>
            <v-data-table-server height="70vh"
            fixed-header 
            :headers="tableNguoiDung.headers" 
            :items-length="tableNguoiDung.totalItems" 
            :items="tableNguoiDung.serverItems"
            :items-per-page="tableNguoiDung.itemsPerPage" 
            loading-text="Loading..."
            show-select 
            return-object 
            v-show="tableNguoiDung.loading"
            @update:options="loadItemsNguoiDung"
            >
            <template v-slot:[`headers`]>
                <tr>
                    <th style="min-width: 50px;">IdUser</th>
                    <th style="min-width: 200px;">Tên đăng nhập</th>
                    <th style="min-width: 200px;">Email</th>
                    <th style="min-width: 200px;">Tên đầy đủ</th>
                    <th style="min-width: 200px;">Điện thoại</th>
                    <th style="min-width: 200px;">Ngày sinh</th>
                    <th style="min-width: 200px;">Loại tài khoản</th>
                </tr>
            </template>
            <template v-slot:[`item`] = "{item}">
                <tr @click="xemChiTiet(item.GuidUser)" class="hover-row">
                    <td>{{ item.IdUser }}</td>
                    <td>{{ item.TenDangNhap }}</td>
                    <td>{{ item.Email }}</td>
                    <td>{{ item.TenDayDu }}</td>
                    <td>{{ item.DienThoai }}</td>
                    <td>{{ item.NgaySinh }}</td>
                    <td>
                        <div style="
                        width: fit-content;
                        padding: 8px;
                        font-size: smaller;
                        font-weight: bolder;
                        border-radius: 10px;"
                        :class="item.LoaiTaiKhoanId == '1' ? 'row-quan-tri' 
                        : item.LoaiTaiKhoanId == '2' ? 'row-ca-nhan' 
                        : item.LoaiTaiKhoanId == '3' ? 'row-clb': ''"
                        >{{ item.LoaiTaiKhoan }}</div>
                    </td>
                </tr>
            </template>
            </v-data-table-server>

            <Loading :loading="!tableNguoiDung.loading"></Loading>
        </div>
    </NavAdmin>
</template>
<script>
import Loading from '../layout/TableLoading.vue';
import NavAdmin from '../layout/NavAdmin.vue';
import { RouterLink } from 'vue-router';
import { userController } from '@/services/UserController';
import { utilController } from '@/services/Util';

    export default{
        data(){
            return{
                filter:{
                    search:"",
                    listProvince:[],
                    tinhThanhPhoSelected:""
                },
                tableNguoiDung:{
                    itemsPerPage: 10,
                    serverItems: [],
                    totalItems:0,
                    page: 0,
                    loading:true,
                    headers: []
                },
                itemLoaiTaiKhoan:[
                    {name: 'Tất cả', value: 0},
                    {name: 'Cá nhân', value: 2},
                    {name: 'Câu lạc bộ', value: 3},
                    {name: 'Admin', value: 1}
                ],
                itemSelectLoai:  {name: 'Tất cả', value: ''}
            }
        },
        components:{
            NavAdmin,
            Loading
        },
        created(){
            this.setListProvince()
        },
        methods:{
            setListProvince(){
                utilController.getListProvince()
                .then(res=>{
                    res.data.map(item=>{
                        this.filter.listProvince.push(item.name)
                    })
                })
            },
            loadItemsNguoiDung({ page, itemsPerPage }){
                this.tableNguoiDung.serverItems = []
                let filter = {
                    start: (page-1)*itemsPerPage,
                    limit: itemsPerPage,
                    filter:{
                        keyWord: this.filter.search,
                        tinhThanhPho: this.filter.tinhThanhPhoSelected, 
                        loaiTaiKhoan: this.itemSelectLoai.value
                    }
                }
                this.tableNguoiDung.loading = false
                userController.filter(filter)
                .then(res=>{
                    this.tableNguoiDung.loading = true
                    res.data.map(item=>{
                        let obj = {
                            IdUser: item.id,
                            GuidUser: item.guid,
                            TenDangNhap: item.userName,
                            TenDayDu: item.name,
                            Email: item.email,
                            DienThoai: item.dienThoaiCaNhan,
                            NgaySinh: item.ngaySinhCaNhan,
                            LoaiTaiKhoanId: item.loaiTaiKhoanId,
                            LoaiTaiKhoan: item.loaiTaiKhoanId == "1" ? "QUẢN TRỊ" : item.loaiTaiKhoanId == "2" ? "CÁ NHÂN" : item.loaiTaiKhoanId == "3"? "CÂU LẠC BỘ" :""
                        }
                        this.tableNguoiDung.serverItems.push(obj)
                        
                    })
                    this.tableNguoiDung.itemsPerPage = itemsPerPage
                    userController.getCount()
                    .then(res=>{
                        this.tableNguoiDung.totalItems= res.data
                    })
                })
                .catch(err=>{
                    
                })
                
                // setTimeout(()=>{
                //     this.tableNguoiDung.loading = true
                // },3000)
                // this.tableNguoiDung.loading = false
                // for(let i=1; i<=100; i++){
                //     let item = {
                //         IdUser: i,
                //         TenDangNhap: "ahaha",
                //         Email: "gggg@gmail.com",
                //         DienThoai: "0999"
                //     }
                //     this.tableNguoiDung.serverItems.push(item)
                // }
                // this.tableNguoiDung.page = page
                // this.tableNguoiDung.itemsPerPage = itemsPerPage
                // this.tableNguoiDung.totalItems= this.tableNguoiDung.serverItems.length
            },
            xemChiTiet(id){
                this.$router.push(`/admin/chi-tiet-quan-ly-user?id=${id}`);
            },
            filterNguoiDung(){
                this.loadItemsNguoiDung({page:1, itemsPerPage:10})
            },
            onSelectedChange(){
                console.log(this.filter.tinhThanhPhoSelected)
            }
        }
    }
</script>