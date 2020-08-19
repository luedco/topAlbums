import { func } from "prop-types"

const baseurl='http://localhost:9000'

export async function getAlbumsByPopular(){
    //const response = await fetch(`${baseurl}/limit=100/json`)
    const response = await fetch(`${baseurl}/album`)
    const responseJSON = await  response.json()
    return responseJSON
};

export async function getAlbumsBySearch(q){
    const response = await fetch(`${baseurl}/name/${q}`)
    const responseJSON = await response.json()
    return responseJSON
}

export default {
    getAlbumsByPopular,
    getAlbumsBySearch
}