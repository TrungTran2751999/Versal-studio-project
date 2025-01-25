import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"

function getAll(postData){
    return axios.post(API.ADMIN.tinTuc.getAllTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getAllLoaiTintuc(postData){
    return axios.post(API.ADMIN.tinTuc.getAllLoaiTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getLoaiTinTucById(id){
    return axios.get(API.ADMIN.tinTuc.getLoaiTinTucById,{
         params: {
            id:id
        }
        
    })
}
function getCountLoaiTinTuc(postData){
    return axios.post(API.ADMIN.tinTuc.getCountLoaiTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function createLoaiTinTuc(postData){
    return axios.post(API.ADMIN.tinTuc.createLoaiTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function updateLoaiTinTuc(postData){
    return axios.post(API.ADMIN.tinTuc.updateLoaiTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const tinTucController = {
    getAll,
    getAllLoaiTintuc,
    createLoaiTinTuc,
    getCountLoaiTinTuc,
    updateLoaiTinTuc,
    getLoaiTinTucById
}