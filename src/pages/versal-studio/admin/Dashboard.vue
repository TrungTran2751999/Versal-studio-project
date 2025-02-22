<style>

</style>
<template>
    <NavAdmin>
        <v-container v-show="false">
            <v-row class="justify-center">
                <v-col cols="12" md="4">
                    <RouterLink to="/admin/quan-ly-user" style="text-decoration: none;">
                        <v-card style="background-color: #dc3545;">
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
                    </RouterLink>
                    
                    <RouterLink to="/admin/quan-ly-tin-tuc" style="text-decoration: none;">
                        <v-card style="background-color: #ffc107; margin-top: 15px;">
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
                    </RouterLink>
                    <RouterLink to="/admin/quan-ly-giai-dau" style="text-decoration: none;">
                        <v-card style="background-color: #6c757d; margin-top: 15px;">
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
                    </RouterLink>
                </v-col>
                <!-- <v-col cols="12" md="4">
                    <RouterLink to="/admin/quan-ly-tin-tuc" style="text-decoration: none;">
                        <v-card style="background-color: #ffc107;">
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
                    </RouterLink>
                </v-col> -->
                <!-- <v-col cols="12" md="4">
                    <RouterLink to="/admin/quan-ly-giai-dau" style="text-decoration: none;">
                    <v-card style="background-color: #6c757d;">
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
                    </RouterLink>
                </v-col> -->
            </v-row>
            <!-- Bang data -->
             <!-- NGUOI DUNG -->
            <div v-show="false">
                <v-divider><span style="font-weight: bolder;">NGƯỜI DÙNG</span></v-divider>
                <v-data-table-server height="60vh"
                fixed-header 
                :headers="tableNguoiDung.headers" 
                :items-length="tableNguoiDung.totalItems" 
                :loading="tableNguoiDung.loading" 
                :items="tableNguoiDung.serverItems"
                :items-per-page="tableNguoiDung.itemsPerPage" 
                return-object 
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
                        <th style="min-width: 200px;">Loại</th>
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
            </div>
            <!-- TIN TUC -->
            <div v-show="false">
                <v-divider><span style="font-weight: bolder;">TIN TỨC</span></v-divider>
                <v-data-table-server height="60vh"
                fixed-header 
                :headers="tableTinTuc.headers" 
                :items-length="tableTinTuc.totalItems" 
                :loading="tableTinTuc.loading" 
                :items="tableTinTuc.serverItems"
                :items-per-page="tableTinTuc.itemsPerPage" 
                return-object 
                @update:options="loadItemsTinTuc"
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
                    <tr>
                        <td>{{ item.IdUser }}</td>
                        <td>{{ item.TieuDe }}</td>
                        <td>{{ item.NgayTao }}</td>
                        <td>{{ item.NgayCapNhat }}</td>
                        <td>{{ item.NguoiCapNhat }}</td>
                    </tr>
                </template>
                </v-data-table-server>
            </div>
            <!-- GIAI DAU -->
            <div v-show="false">
                <v-divider><span style="font-weight: bolder;">GIẢI ĐẤU</span></v-divider>
                <v-data-table-server height="60vh"
                fixed-header 
                :headers="tableGiaiDau.headers" 
                :items-length="tableGiaiDau.totalItems" 
                :loading="tableGiaiDau.loading" 
                :items="tableGiaiDau.serverItems"
                :items-per-page="tableGiaiDau.itemsPerPage" 
                return-object 
                @update:options="loadItemsGiaiDau"
                >
                <template v-slot:[`headers`]>
                    <tr>
                        <th style="min-width: 50px;">STT</th>
                        <th style="min-width: 200px;">Tên giải đấu</th>
                        <th style="min-width: 200px;">Thể loại game</th>
                        <th style="min-width: 200px;">Số lượng tham gia</th>
                        <th style="min-width: 200px;">Số lượng đội bị loại</th>
                        <th style="min-width: 200px;">Trạng thái</th>
                        <th style="min-width: 200px;">Ngày tổ chức</th>
                        <th style="min-width: 200px;">Ngày kết thúc</th>
                    </tr>
                </template>
                <template v-slot:[`item`] = "{item}">
                    <tr>
                        <td>{{ item.Id }}</td>
                        <td>{{ item.TenGiaiDau }}</td>
                        <td>{{ item.TheLoaiGame }}</td>
                        <td>{{ item.SoLuongThamGia }}</td>
                        <td>{{ item.SoLuongDoiBiLoai }}</td>
                        <td>{{ item.TrangThai }}</td>
                        <td>{{ item.NgayToChuc }}</td>
                        <td>{{ item.NgayKetThuc }}</td>
                    </tr>
                </template>
                </v-data-table-server>
            </div>
        </v-container>
    </NavAdmin>
</template>
<script>
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
                    headers: [],
                },
                tableTinTuc:{
                    itemsPerPage: 10,
                    serverItems: [],
                    totalItems:0,
                    page: 0,
                    loading:true,
                    headers: [],
                },
                tableGiaiDau:{
                    itemsPerPage: 10,
                    serverItems: [],
                    totalItems:0,
                    page: 0,
                    loading:true,
                    headers: [],
                }
            }
        },
        components:{
            NavAdmin
        },
        methods:{
            loadItemsNguoiDung({ page, itemsPerPage }){
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
            loadItemsTinTuc({ page, itemsPerPage }){
                this.tableTinTuc.loading = false
                for(let i=1; i<=100; i++){
                    let item = {
                        IdUser: "1",
                        TieuDe: "ahaha",
                        NgayTao: "21/12/2024",
                        NgayCapNhat: "21/12/2024",
                        NguoiCapNhat: "user"
                    }
                    this.tableTinTuc.serverItems.push(item)
                }
                this.tableTinTuc.page = page
                this.tableTinTuc.itemsPerPage = itemsPerPage
                this.tableTinTuc.totalItems= this.tableTinTuc.serverItems.length
            },
            loadItemsGiaiDau({ page, itemsPerPage }){
                this.tableGiaiDau.loading = false
                for(let i=1; i<=100; i++){
                    let item = {
                        TenGiaiDau: "Giải đấu Đại học Huế",
                        TheLoaiGame: "LOL",
                        SoLuongThamGia: 100,
                        SoLuongDoiBiLoai: 10,
                        TrangThai: "ĐANG DIỄN RA",
                        NgayToChuc: "21/12/2024",
                        NgayKetThuc: "21/12/2024"
                    }
                    item.Id = i
                    this.tableGiaiDau.serverItems.push(item)
                }
                this.tableGiaiDau.page = page
                this.tableGiaiDau.itemsPerPage = itemsPerPage
                this.tableGiaiDau.totalItems= this.tableGiaiDau.serverItems.length
            }
        }
    }
</script>