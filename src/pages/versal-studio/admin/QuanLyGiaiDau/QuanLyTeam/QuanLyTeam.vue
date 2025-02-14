<style>
    .hover-row:hover{
        background-color: beige;
    }
    .row-huy{
        background-color: red; 
        color: white; 
    }   
    .row-hoat-dong{
        background-color: aquamarine; 
        color: red; 
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
                </v-row>
                <v-row style="margin-top: -40px;">
                    <v-col cols="6" md="10">
                        <v-btn style="background-color: #dc3545;" @click="filter">LỌC</v-btn>
                    </v-col>
                    <v-col cols="6" md="1">
                        <RouterLink to="/admin/chi-tiet-quan-ly-team">
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
                    <th style="min-width: 50px;">STT</th>
                    <th style="min-width: 200px;">Tên</th>
                    <th style="min-width: 200px;">Avartar</th>
                    <th style="min-width: 200px;">Trạng thái</th>
                </tr>
            </template>
            <template v-slot:[`item`] = "{item}">
                <tr @click="xemChiTiet(item.Id, item.guid)" class="hover-row">
                    <td>{{ item.Id }}</td>
                    <td>{{ item.Name }}</td>
                    <td><img :src="item.Image" width="100px" height="100px" /></td>
                    <td><div style="
                        width: fit-content;
                        padding: 8px;
                        font-size: smaller;
                        font-weight: bolder;
                        border-radius: 10px;"
                        :class="item.IsDeleted == 0 ? 'row-hoat-dong' 
                        : item.IsDeleted == 1 ? 'row-huy' :''" 
                        >{{ item.TrangThai }}</div>
                    </td>
                </tr>
            </template>
            </v-data-table-server>

            <Loading :loading="!tableNguoiDung.loading"></Loading>
        </div>
    </NavAdmin>
</template>
<script>
import { teamController } from '@/services/TeamController';
import NavAdmin from '../../layout/NavAdmin.vue';
import Loading from '../../layout/TableLoading.vue';

    export default{
        data(){
            return{
                search:"",
                statusSelected:0,
                listStatus:[{title:"Tất cả", value:-1},{title:"Đã khóa", value:1}, {title:"Đang hoạt động", value:0}],
                tableNguoiDung:{
                    itemsPerPage: 10,
                    serverItems: [],
                    totalItems:0,
                    page: 0,
                    loading:true,
                    headers: []
                }
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
                        status: this.statusSelected
                    },
                    start: (page-1)*itemsPerPage,
                    limit: itemsPerPage
                }
                teamController.getAll(obj)
                .then(res=>{
                    this.tableNguoiDung.loading = true;
                    res.data.listData.map(item=>{
                        let obj = {
                            Id: item.id,
                            Name: item.name,
                            NgayTao: item.createdAt,
                            NgayCapNhat: item.updatedAt,
                            NguoiCapNhat: item.updatedBy,
                            IsDeleted: item.isBan,
                            TrangThai: item.isBan == 0 ? "Đang hoạt động" : item.isBan == 1 ? "Đã khóa" :"",
                            Image: `data:image/png;base64,${item.image}`,
                            guid: item.guid
                        }
                        this.tableNguoiDung.serverItems.push(obj)
                    })
                    this.tableNguoiDung.page = page
                    this.tableNguoiDung.itemsPerPage = itemsPerPage
                    this.tableNguoiDung.totalItems= res.data.count[0].count
                    
                })
                
            },
            xemChiTiet(id, guid){
                this.$router.push(`/admin/chi-tiet-quan-ly-team?id=${id}&guid=${guid}`);
            },
            filter(){
                this.loadItemsNguoiDung({page:1, itemsPerPage:10})
            }
        }
    }
</script>