import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"

function create(postData){
    return axios.post(API.ADMIN.user.register, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const userController = {
    create
}