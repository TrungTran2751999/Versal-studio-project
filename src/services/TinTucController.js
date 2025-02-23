import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"

function getAll(postData){
    return axios.post(API.ADMIN.tinTuc.getAllTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function create(postData){
    return axios.post(API.ADMIN.tinTuc.createTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function update(postData){
    return axios.post(API.ADMIN.tinTuc.updateTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getCount(postData){
    return axios.post(API.ADMIN.tinTuc.getCount, postData,{
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
function getAllLoaiTinTucActive(){
    return axios.get(API.ADMIN.tinTuc.getAllLoaiTinTucActive);
}
function getById(id){
    return axios.get(API.ADMIN.tinTuc.getById, {
        params:{id:id}
    });
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
function duyetBai(postData){
    return axios.post(API.ADMIN.tinTuc.duyetBai, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getByIdClient(id, loaiTinTucId){
    return axios.get(API.ADMIN.tinTuc.getByIdCient, {
        params:{
            id:id,
            loaiTinTucId: loaiTinTucId
        }
    });
}
export const tinTucController = {
    getAll,
    create,
    update,
    getCount,
    getById,
    getAllLoaiTintuc,
    getAllLoaiTinTucActive,
    createLoaiTinTuc,
    getCountLoaiTinTuc,
    updateLoaiTinTuc,
    getLoaiTinTucById,
    duyetBai,
    getByIdClient
}