import { API } from '@/pages/versal-studio/util/GlobalVariable';
import axios from 'axios';
import Cookies from 'js-cookie';
import VueJwtDecode from 'vue-jwt-decode';
import * as XLSX from 'xlsx';

function getCookie(name){
    return Cookies.get(name);
}
function debouceComplete(timeDeboucing, value, time, arr, promise){
    clearTimeout(timeDeboucing)
    arr = Array.from(new Set(arr))
    timeDeboucing = setTimeout(()=>{
        let existData = false
        for(let data of arr){
            if(data.includes(value)){
                existData = true
                break
            }
        }
        if(!existData){
            promise
                .then((res)=>{
                    res.map((e)=>{
                        arr.push(`${e.TenKV}`)
                        arr = Array.from(new Set(arr))
                    })
            })
        }
    }, time)
}
function checkJWTToken(){
    let jwtToken = Cookies.get("tokenJWT");
    if(!jwtToken){
        return false
    }else{
        try{
            let resultDecode = VueJwtDecode.decode(jwtToken)
            return jwtToken
        }catch{
            return false
        }    
    }
}
function removeJWTToken(){
    Cookies.remove("tokenJWT");
}
function exportExcel(data){
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    let date = new Date().getDay();
    let month = new Date().getMonth();
    XLSX.writeFile(workbook, `DanhSachKhConNo-${new Date().toISOString()}.xlsx`);
}
function getListProvince(){
    return axios.get(API.UTIL.getProvince)
}
function convertFileToBase64(file){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
export const utilController = {
    debouceComplete,
    checkJWTToken,
    removeJWTToken,
    getCookie,
    exportExcel,
    getListProvince,
    convertFileToBase64
}