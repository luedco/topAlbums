import { func } from "prop-types"

const baseurl='https://itunes.apple.com/us/rss/topalbums/'

export async function getAlbumsByPopular(){
    //const response = await fetch(`${baseurl}/limit=100/json`)
    const response = await fetch('http://localhost:9000/album')
    const responseJSON = await  response.json()
    return responseJSON
}

export default {
    getAlbumsByPopular
}