<style>

</style>
<template>
    <NavAdmin>
        <div class="pa-8">
            <div>
                <v-row>
                    <v-col cols="12" md="2">
                        <v-text-field
                        density="compact"
                        variant="outlined"
                        label="Ngày tạo"
                        type="date"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-text-field
                        density="compact"
                        variant="outlined"
                        label="Tìm kiếm"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-select
                        density="compact"
                        variant="outlined"
                        label="Tỉnh/thành phố"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                        ></v-select>
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
                    <v-col cols="12" md="12">
                        <v-btn style="background-color: #dc3545;">LỌC</v-btn>
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
                    <th style="min-width: 200px;">Chức vụ</th>
                    <th style="min-width: 200px;">Tỉnh/thành phố</th>
                    <th style="min-width: 200px;">Câu lạc bộ</th>
                    <th style="min-width: 200px;">Trường</th>
                </tr>
            </template>
            <template v-slot:[`item`] = "{item}">
                <tr>
                    <td>{{ item.IdUser }}</td>
                    <td>{{ item.TenDangNhap }}</td>
                    <td>{{ item.Email }}</td>
                    <td>{{ item.TenDayDu }}</td>
                    <td>{{ item.DienThoai }}</td>
                    <td>{{ item.NgaySinh }}</td>
                    <td>{{ item.ChucVu }}</td>
                    <td>{{ item.TinhThanhPho }}</td>
                    <td>{{ item.CauLacBo }}</td>
                    <td>{{ item.Truong }}</td>
                </tr>
            </template>
            </v-data-table-server>

            <Loading :loading="!tableNguoiDung.loading"></Loading>
        </div>
    </NavAdmin>
</template>
<script>
import Loading from './layout/TableLoading.vue';
import NavAdmin from './layout/NavAdmin.vue';

    export default{
        data(){
            return{
                tableNguoiDung:{
                    itemsPerPage: 10,
                    serverItems: [],
                    totalItems:0,
                    page: 0,
                    loading:true,
                    headers: []
                },
                itemLoaiTaiKhoan:[
                    {name: 'Cá nhân', value: 'CaNhan'},
                    {name: 'Câu lạc bộ', value: 'CLB'}
                ],
                itemSelectLoai: {name: 'Câu lạc bộ', value: 'CLB'}
            }
        },
        components:{
            NavAdmin,
            Loading
        },
        methods:{
            loadItemsNguoiDung({ page, itemsPerPage }){
                setTimeout(()=>{
                    this.tableNguoiDung.loading = true
                },3000)
                this.tableNguoiDung.loading = false
                for(let i=1; i<=100; i++){
                    let item = {
                        IdUser: "1",
                        TenDangNhap: "ahaha",
                        Email: "gggg@gmail.com",
                        DienThoai: "0999"
                    }
                    this.tableNguoiDung.serverItems.push(item)
                }
                this.tableNguoiDung.page = page
                this.tableNguoiDung.itemsPerPage = itemsPerPage
                this.tableNguoiDung.totalItems= this.tableNguoiDung.serverItems.length
            },
        }
    }
</script>