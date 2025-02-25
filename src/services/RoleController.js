import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"
import Cookies from "js-cookie"

function getAll(){
    return axios.get(API.ADMIN.role.getAll, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    })
}
const roleController = {
    getAll
}
export default roleController