<template>
    <NavAdmin>
        <v-container>
            <v-card class="mx-auto" max-width="1500">
                <v-card-title style="text-align: center;">THÔNG TIN TIN TỨC</v-card-title>
                <v-card-actions class="justify-center">
                        <v-container fuild>
                            <v-text-field
                                density="compact"
                                variant="outlined"
                                label="Tên tin tức"
                                v-model="name"
                            ></v-text-field>
                            <v-autocomplete
                                density="compact"
                                variant="outlined"
                                label="Loại tin tức"
                                :items="listLoaiTinTuc"
                                item-title = "name"
                                item-value = "value"
                                v-model="loaiTinTucSelected"
                            ></v-autocomplete>
                            
                            <QuillEditor contentType="html" v-model:content="htmlContent" ref="quillEditor"  style="height: 70vh;" :options="editorOptions"></QuillEditor>
                    </v-container>
                </v-card-actions>
                <v-card-actions class="justify-center">
                    <v-btn @click="isCreate ? createTinTuc() : updateTinTuc()" :loading="loading" style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </NavAdmin>
</template>
<script>
import { tinTucController } from '@/services/TinTucController';
import NavAdmin from '../layout/NavAdmin.vue';
import { QuillEditor } from '@vueup/vue-quill';
import $ from "jquery";

    export default{
        data(){
            return {
                isCreate:true,
                id:"",
                guid:"",
                loading: false,
                loaiTinTucSelected:null,
                listLoaiTinTuc: [] ,
                name:"",
                quillContent:"",
                htmlContent:'',
                editorOptions: {
                    theme: 'snow',
                    imageResize: {
                            displaySize: true
                        },
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }], // Tiêu đề
                            ['bold', 'italic', 'underline', 'strike'], // Định dạng văn bản
                            [{ list: 'ordered' }, { list: 'bullet' }], // Danh sách
                            ['link', 'image', 'video'], // Chèn liên kết, hình ảnh, video
                            [{ color: ["red", "green" ,"blue"] }, { background: [] }], // Màu chữ và nền
                            ['clean'], // Xóa định dạng
                            ['code-block'], // Khối mã
                            ['align', { align: [] }], // Căn chỉnh
                            ['blockquote'], // Trích dẫn
                        ],
                    },
                },
            }
        },
        components:{
            NavAdmin,
            QuillEditor
        },
        created(){
            this.setData();
        },
        methods:{
            setData(){
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
                const urlParams = new URLSearchParams(window.location.search)
                const id = urlParams.get("id")
                if(id){
                    this.isCreate = false;
                    tinTucController.getById(id)
                    .then(res=>{
                        this.name = res.data.name
                        this.htmlContent = res.data.content
                        this.loaiTinTucSelected = res.data.loaiTinTucId
                        this.id = res.data.id
                        this.guid = res.data.guid
                    })
                }
            },
            createTinTuc(){
                this.loading = true
                let obj = {
                    name: this.name,
                    loaiTinTucId: this.loaiTinTucSelected,
                    content: this.$refs.quillEditor.getHTML(),
                    updatedBy:0,
                    status: 0
                }
                tinTucController.create(obj)
                .then(res=>{
                    this.loading = false
                    this.$toast.success("Cập nhật tin tức thành công")
                })
                .catch(err=>{
                    this.loading = false
                    this.$toast.error(err.message)
                    
                })
            },
            updateTinTuc(){
                this.loading = true
                let obj = {
                    id: this.id,
                    guid: this.guid,
                    name: this.name,
                    loaiTinTucId: this.loaiTinTucSelected,
                    content: this.$refs.quillEditor.getHTML(),
                    updatedBy:0,
                    status: 0
                }
                tinTucController.update(obj)
                .then(res=>{
                    this.loading = false
                    this.$toast.success("Cập nhật tin tức thành công")
                })
                .catch(err=>{
                    this.loading = false
                    this.$toast.error(err.message)
                    
                })
            }
        },
        mounted(){
            $(document).ready(()=>{
                // let ggg = $("#ggg").text("kkkk");
                $("#ggg").on("click",()=>{
                    let gg = $("#ggg").attr("bien");
                    alert(gg)
                })
            })
        }
    }
</script>