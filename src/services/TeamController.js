import { API } from "@/pages/versal-studio/util/GlobalVariable";
import axios from "axios";

function getAll(postData){
    return axios.post(API.ADMIN.tournament.team.getAll, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function getById(id, guid){
    return axios.get(API.ADMIN.tournament.team.getById, {
        params:{id, guid}
    })
}
function create(postData){
    return axios.post(API.ADMIN.tournament.team.create, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function update(postData){
    return axios.post(API.ADMIN.tournament.team.update, postData, {
        
    })
}
function getMemberOfTeam(postData){
    return axios.post(API.ADMIN.tournament.team.getMemberOfTeam, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function addMember(postData){
    return axios.post(API.ADMIN.tournament.team.addMemberTeam, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
function xoaMember(postData){
    return axios.post(API.ADMIN.tournament.team.xoaMemberTeam, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const teamController = {
    getAll,
    getById,
    create,
    update,
    getMemberOfTeam,
    addMember,
    xoaMember
}