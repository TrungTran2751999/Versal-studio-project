<style>
    .hover-row:hover{
        background-color: beige;
    }
    .row-duyet{
        background-color: greenyellow; 
        color: white; 
    }
    .row-chua-duyet{
        background-color: red; 
        color: white; 
    } 
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
                        label="Trạng thái"
                        :items = "listStatus"
                        v-model="statusSelected"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-autocomplete
                        density="compact"
                        variant="outlined"
                        label="Loại tin tức"
                        :items = "listLoaiTinTuc"
                        v-model="loaiTinTucSelected"
                        item-title="name"
                        item-value="value"
                        ></v-autocomplete>
                    </v-col>
                </v-row>
                <v-row style="display: flex; gap: 10px;">
                    <v-btn @click="filter" style="background-color: #dc3545; ">LỌC</v-btn>
                    <RouterLink to="/admin/chi-tiet-quan-ly-tin-tuc">
                        <v-btn  style="background-color: green; margin-left: 15px;">Thêm mới</v-btn>
                    </RouterLink>
                    <RouterLink to="/admin/quan-ly-the-loai-game">
                        <v-btn style="background-color: #dc3545; font-size: 12px;">Thể loại game</v-btn>
                    </RouterLink>
                    <RouterLink to="/admin/quan-ly-team">
                        <v-btn style="background-color: blue; font-size: 12px;">Team</v-btn>
                    </RouterLink>
                </v-row>
            </div>
            <v-data-table-server 
            style="margin-top: 15px;"
            height="70vh"
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
                    <th style="min-width: 200px;">Loại tin tức</th>
                    <th style="min-width: 200px;">Trạng thái</th>
                </tr>
            </template>
            <template v-slot:[`item`] = "{item}">
                <tr @click="xemChiTiet(item.guid)" class="hover-row">
                    <td>{{ item.Id }}</td>
                    <td>{{ item.TieuDe }}</td>
                    <td>{{ item.NgayTao }}</td>
                    <td>{{ item.NgayCapNhat }}</td>
                    <td>{{ item.TenTinTuc }}</td>
                    <td><div style="
                        width: fit-content;
                        padding: 8px;
                        font-size: smaller;
                        font-weight: bolder;
                        border-radius: 10px;"
                        :class="item.status == 0 ? 'row-chua-duyet' 
                        : item.status == 1 ? 'row-duyet' 
                        :''"
                        >{{ item.TrangThai }}</div></td>
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
                    loading:false,
                    headers: []
                },
                listStatus:[{title:"Tất cả", value:-1},{title:"Đã phê duyệt", value:1}, {title:"Chưa phê duyệt", value:0}],
                listLoaiTinTuc:[{name:"Tất cả", value:0}],
                loaiTinTucSelected:0,
                statusSelected:-1,
                search:""
            }
        },
        components:{
            NavAdmin,
            Loading
        },
        methods:{
            loadItemsNguoiDung({ page, itemsPerPage }){
                this.tableNguoiDung.serverItems = []
                this.tableNguoiDung.loading = false;
                let obj = {
                    filter:{
                        keyWord: this.search,
                        status: this.statusSelected,
                        loaiTinTucId: this.loaiTinTucSelected
                    },
                    start: (page-1)*itemsPerPage,
                    limit: itemsPerPage
                }
                tinTucController.getAllLoaiTinTucActive()
                .then(res=>{
                    res.data.map(item=>{
                        let obj = {
                            name: item.name,
                            value: item.id
                        }
                        this.listLoaiTinTuc.push(obj)
                    })
                })
                tinTucController.getAll(obj)
                .then(res=>{
                    this.tableNguoiDung.loading = true;
                    res.data.map(item=>{
                        let obj = {
                            Id: item.id,
                            TieuDe: item.name,
                            NgayTao: item.createdAt,
                            NgayCapNhat: item.updatedAt,
                            status: item.status,
                            guid: item.guid,
                            TrangThai: item.status==0 ? "Chưa duyệt" : item.status==1 ? "Đã duyệt":"",
                            TenTinTuc: item.tenTinTuc
                        }
                        this.tableNguoiDung.serverItems.push(obj)
                    })
                })
                this.tableNguoiDung.page = page
                this.tableNguoiDung.itemsPerPage = itemsPerPage

                tinTucController.getCount(obj)
                .then(res=>{
                    this.tableNguoiDung.totalItems= res.data[0].count
                })
                
            },
            xemChiTiet(id){
                this.$router.push(`/admin/chi-tiet-quan-ly-tin-tuc?id=${id}`);
            },
            filter(){
                this.loadItemsNguoiDung({page:1, itemsPerPage:10})
            }
        }
    }
</script>