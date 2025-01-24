import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"

function getAll(postData){
    return axios.post(API.ADMIN.user.getAll, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getById(id){
    return axios.get(API.ADMIN.user.getByUid, {
        params: {
            id:id
        }
    })
}
function update(postData){
    return axios.post(API.ADMIN.user.update, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function create(postData){
    return axios.post(API.ADMIN.user.register, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function filter(postData){
    return axios.post(API.ADMIN.user.filter, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getCount(postData){
    return axios.post(API.ADMIN.user.count, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const userController = {
    getAll,
    getById,
    update,
    create,
    filter,
    getCount
}