import { API } from "@/pages/versal-studio/util/GlobalVariable"
import axios from "axios"
import { param } from "jquery";

//THE-LOAI-GAME
function getTheLoaiGame(postData){
    return axios.post(API.ADMIN.tournament.theLoaiGame.getAll, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getTheLoaiGameById(id){
    return axios.get(API.ADMIN.tournament.theLoaiGame.getById, {
        params:{
            id
        }
    });
}
function createTheLoaiGame(postData){
    return axios.post(API.ADMIN.tournament.theLoaiGame.create, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function updateTheLoaiGame(postData){
    return axios.post(API.ADMIN.tournament.theLoaiGame.update, postData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getAllTheLoaiGameActive(){
    return axios.get(API.ADMIN.tournament.theLoaiGame.getAllActive);
}
export const tournamentController = {
    getTheLoaiGame,
    createTheLoaiGame,
    getTheLoaiGameById,
    updateTheLoaiGame,
    getAllTheLoaiGameActive
}