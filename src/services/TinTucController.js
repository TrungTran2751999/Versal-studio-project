import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"
import Cookies from "js-cookie"

function getAll(postData){
    return axios.post(API.ADMIN.tinTuc.getAllTinTuc, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function getAllClient(){
    return axios.get(API.CLIENT.tinTuc.getAllTinTucClient,{
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
function create(postData){
    return axios.post(API.ADMIN.tinTuc.createTinTuc, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function update(postData){
    return axios.post(API.ADMIN.tinTuc.updateTinTuc, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function getCount(postData){
    return axios.post(API.ADMIN.tinTuc.getCount, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function getAllLoaiTintuc(postData){
    return axios.post(API.ADMIN.tinTuc.getAllLoaiTinTuc, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function getAllLoaiTinTucActive(){
    return axios.get(API.ADMIN.tinTuc.getAllLoaiTinTucActive,{
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
function getById(id){
    return axios.get(API.ADMIN.tinTuc.getById, {
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        },
        params:{id:id}
    });
}
function getLoaiTinTucById(id){
    return axios.get(API.ADMIN.tinTuc.getLoaiTinTucById,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        },
         params: {
            id:id
        }
        
    })
}
function getCountLoaiTinTuc(postData){
    return axios.post(API.ADMIN.tinTuc.getCountLoaiTinTuc, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function createLoaiTinTuc(postData){
    return axios.post(API.ADMIN.tinTuc.createLoaiTinTuc, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function updateLoaiTinTuc(postData){
    return axios.post(API.ADMIN.tinTuc.updateLoaiTinTuc, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function duyetBai(postData){
    return axios.post(API.ADMIN.tinTuc.duyetBai, postData,{
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        }
    })
}
function getByIdClient(id, loaiTinTucId){
    return axios.get(API.CLIENT.tinTuc.getByIdCient, {
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
            'Content-Type': 'application/json'
        },
        params:{
            id:id,
            loaiTinTucId: loaiTinTucId
        }
    });
}
function getAllTinTucByLoaiTinTuc(postData){
    return axios.post(API.CLIENT.tinTuc.getTinTucByLoaiTinTuc, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getByLoaiTinTuc(loaiTinTucId){
    return axios.get(API.CLIENT.loaiTinTuc.getById, {
        params:{
            id:loaiTinTucId
        }
    });
}
function getListTinTucByLoai(){
    return axios.get(API.CLIENT.tinTuc.getListTinTucTheoLoai)
}
export const tinTucController = {
    getAll,
    getAllClient,
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
    getByIdClient,
    getAllTinTucByLoaiTinTuc,
    getByLoaiTinTuc,
    getListTinTucByLoai
}