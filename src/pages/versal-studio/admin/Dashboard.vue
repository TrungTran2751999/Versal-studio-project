<style>

</style>
<template>
    <NavAdmin>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card style="background-color: orange;">
                        <v-card-actions>
                            <v-row>
                                <v-col col="12" md="4">
                                    <v-icon style="font-size: 70px;">mdi-account</v-icon>
                                </v-col>
                                <v-col col="12" md="8">
                                    <span style="font-size: 40px;">12000</span> <span> user</span>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card style="background-color: green;">
                        <v-card-actions>
                            <v-row>
                                <v-col col="12" md="4">
                                    <v-icon style="font-size: 70px;">mdi-note-text</v-icon>
                                </v-col>
                                <v-col col="12" md="8">
                                    <span style="font-size: 40px;">12000</span> <span> tin tức</span>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card style="background-color: green;">
                        <v-card-actions>
                            <v-row>
                                <v-col col="12" md="4">
                                    <v-icon style="font-size: 70px;">mdi-google-controller</v-icon>
                                </v-col>
                                <v-col col="12" md="8">
                                    <span style="font-size: 40px;">12000</span> <span> giải đấu</span>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider>NGƯỜI DÙNG</v-divider>
            <v-data-table-server height="60vh"
            fixed-header 
            :headers="headers" 
            :items-length="totalItems" 
            :loading="loading" 
            :items="serverItems"
            :items-per-page="itemsPerPage" 
            return-object 
            @update:options="loadItems"
            >
            <template v-slot:[`headers`]>
                <tr>
                    <th>IdUser</th>
                    <th>Tên đăng nhập</th>
                    <th>Email</th>
                    <th>Tên đầy đủ</th>
                    <th>Điện thoại</th>
                    <th>Ngày sinh</th>
                    <th>Chức vụ</th>
                    <th>Tỉnh/thành phố</th>
                    <th>Câu lạc bộ</th>
                    <th>Trường</th>
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
        </v-container>
    </NavAdmin>
</template>
<script>
import { load } from 'webfontloader';
import NavAdmin from './layout/NavAdmin.vue';

    export default{
        data(){
            return{
                itemsPerPage: 10,
                serverItems: [],
                totalItems:0,
                page: 0,
                loading:true,
                headers: [
                    { title: 'IdUser', key: 'IdUser', align: 'start', sortable:false},
                    { title: 'Tên đăng nhập', key: 'TenDangNhap', align: 'start' ,sortable:false},
                    { title: 'Email', key: 'Email', align: 'start' ,sortable:false},
                    { title: 'Tên đầy đủ', key: 'TenDayDu', align: 'start' ,sortable:false},
                    { title: 'Điện thoại', key: 'DienThoai', align: 'start' ,sortable:false},
                    { title: 'Ngày sinh', key: 'NgaySinh', align: 'start' ,sortable:false},
                    { title: 'Chức vụ', key: 'ChucVu', align: 'start' ,sortable:false},
                    { title: 'Tỉnh/thành phố', key: 'TinhThanhPho', align: 'start' ,sortable:false},
                    { title: 'Câu lạc bộ', key: 'CauLacBo', align: 'start' ,sortable:false},
                    { title: 'Trường', key: 'Truong', align: 'start' ,sortable:false},
                ],
            }
        },
        components:{
            NavAdmin
        },
        methods:{
            loadItems({ page, itemsPerPage }){
                this.loading = false
                for(let i=1; i<=100; i++){
                    let item = {
                        IdUser: "1",
                        TenDangNhap: "ahaha",
                        Email: "gggg@gmail.com",
                        DienThoai: "0999"
                    }
                    this.serverItems.push(item)
                }
                this.page = page
                this.itemsPerPage = itemsPerPage
                this.totalItems = this.serverItems.length
            }
        }
    }
</script>