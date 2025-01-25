<style>

</style>
<template>
    <NavAdmin>
        <div class="pa-8">
            <div>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-text-field
                        density="compact"
                        variant="outlined"
                        label="Tìm kiếm"
                        v-model="search"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-select
                        density="compact"
                        variant="outlined"
                        label="Loại tin tức"
                        :items = "listStatus"
                        v-model="statusSelected"
                        ></v-select>
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
                    <td>{{ item.Id }}</td>
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
import { tinTucController } from '@/services/TinTucController';

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
                listStatus:[{title:"Tất cả", value:-1},{title:"Đã hủy", value:1}, {title:"Đang hoạt động", value:0}],
                statusSelected:0,
                search:""
            }
        },
        components:{
            NavAdmin,
            Loading
        },
        methods:{
            loadItemsNguoiDung({ page, itemsPerPage }){
                let obj = {
                    filter:{
                        keyWord: this.search,
                        status: this.statusSelected
                    },
                    start: (page-1)*itemsPerPage,
                    limit: itemsPerPage
                }
                tinTucController.getAll(obj)
                .then(res=>{
                    this.tableNguoiDung.loading = true;
                    res.data.map(item=>{
                        let obj = {
                            Id: item.id,
                            TieuDe: item.name,
                            //TrangThai: item.isDeleted == 0 ? "Đang hoạt động" : item.isDeleted == 1 ? "Đã hủy" :""
                        }
                        this.tableNguoiDung.serverItems.push(obj)
                    })
                    this.tableNguoiDung.page = page
                })
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