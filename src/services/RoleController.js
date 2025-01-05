import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"

function getAll(){
    return axios.get(API.ADMIN.role.getAll)
}
const roleController = {
    getAll
}
export default roleController