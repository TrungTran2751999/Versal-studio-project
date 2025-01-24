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
                </v-row>
                <v-row style="margin-top: -40px;">
                    <v-col cols="6" md="10">
                        <v-btn style="background-color: #dc3545; ">LỌC</v-btn>
                    </v-col>
                    <v-col cols="6" md="1">
                        <RouterLink to="/admin/chi-tiet-quan-ly-tin-tuc">
                            <v-btn  style="background-color: green; margin-left: 15px;">Thêm mới</v-btn>
                        </RouterLink>
                    </v-col>
                    <v-col cols="6" md="1">
                        <RouterLink to="/admin/quan-ly-loai-tin-tuc">
                            <v-btn style="background-color: #dc3545;">Loại tin tức</v-btn>
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
                    <th style="min-width: 50px;">STT</th>
                    <th style="min-width: 200px;">Tiêu đề</th>
                    <th style="min-width: 200px;">Ngày tạo</th>
                    <th style="min-width: 200px;">Ngày cập nhật</th>
                    <th style="min-width: 200px;">Người tạo</th>
                </tr>
            </template>
            <template v-slot:[`item`] = "{item}">
                <tr @click="xemChiTiet(item.IdUser)">
                    <td>{{ item.IdUser }}</td>
                    <td>{{ item.TieuDe }}</td>
                    <td>{{ item.NgayTao }}</td>
                    <td>{{ item.NgayCapNhat }}</td>
                    <td>{{ item.NguoiCapNhat }}</td>
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
                        IdUser: i,
                        TieuDe: "ahaha",
                        NgayTao: "21/12/2024",
                        NgayCapNhat: "21/12/2024",
                        NguoiCapNhat: "user"
                    }
                    this.tableNguoiDung.serverItems.push(item)
                }
                this.tableNguoiDung.page = page
                this.tableNguoiDung.itemsPerPage = itemsPerPage
                this.tableNguoiDung.totalItems= this.tableNguoiDung.serverItems.length
            },
            xemChiTiet(id){
                this.$router.push(`/admin/chi-tiet-quan-ly-tin-tuc?id=${id}`);
            }
            
        }
    }
</script>