<template>
    <NavAdmin>
        <v-container>
            <v-card class="mx-auto" max-width="1500">
                <v-card-title style="text-align: center;">THÔNG TIN TIN TỨC</v-card-title>
                <v-card-actions class="justify-center">
                    <v-container fuild>
                        <QuillEditor ref="quillEditor"  style="height: 70vh;" :options="editorOptions"></QuillEditor>
                    </v-container>
                </v-card-actions>
                <v-card-actions class="justify-center">
                    <v-btn @click="getHtmlContent" style="background-color: green; color: white; margin-bottom: 20px;">XÁC NHẬN</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </NavAdmin>
</template>
<script>
import NavAdmin from '../layout/NavAdmin.vue';
import { QuillEditor } from '@vueup/vue-quill';
import $ from "jquery";
    export default{
        data(){
            return {
                loaiTaiKhoan:"caNhan" ,
                quillContent:"",
                bien:"hihllkpytt",
                htmlContent:'',
                editorOptions: {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, false] }], // Tiêu đề
                            ['bold', 'italic', 'underline', 'strike'], // Định dạng văn bản
                            [{ list: 'ordered' }, { list: 'bullet' }], // Danh sách
                            ['link', 'image', 'video'], // Chèn liên kết, hình ảnh, video
                            [{ color: [] }, { background: [] }], // Màu chữ và nền
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
        methods:{
            getHtmlContent(){
                const content = this.$refs.quillEditor.getHTML(); // Tham chiếu đến đối tượng Quill
                console.log(content); // In ra console nếu cần
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