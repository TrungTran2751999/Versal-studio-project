import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"
import Cookies from "js-cookie"

function authorizedUser(){
    return axios.get(API.ADMIN.authorize.admin, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    })
}
function getAll(postData){
    return axios.post(API.ADMIN.user.getAll, postData,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    })
}
function getById(id){
    return axios.get(API.ADMIN.user.getByUid, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        },
        params: {
            id:id
        }
    })
}
function update(postData){
    return axios.post(API.ADMIN.user.update, postData,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    })
}
function create(postData){
    return axios.post(API.ADMIN.user.register, postData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    })
}
function filter(postData){
    return axios.post(API.ADMIN.user.filter, postData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    })
}
function getCount(postData){
    return axios.post(API.ADMIN.user.count, postData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    })
}
function getAllActive(){
    return axios.get(API.ADMIN.user.getAllActive, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    });
}
function getAllUserActive(){
    return axios.get(API.ADMIN.user.getAllCaNhanActive, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    });
}
function login(postData){
    return axios.post(API.ADMIN.user.login, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function updateAdmin(postData){
    return axios.post(API.ADMIN.user.updateAdmin, postData,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    })
}
export const userController = {
    getAll,
    getById,
    update,
    create,
    filter,
    getCount,
    getAllActive,
    getAllUserActive,
    login,
    updateAdmin,
    authorizedUser
}