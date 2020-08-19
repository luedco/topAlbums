var express = require('express');
var router = express.Router();


const fetch = require('node-fetch');
const { json } = require('express');
let listaAlbums = []
/*(async () => {
	const response = await fetch('https://api.github.com/users/github');
	const json = await response.json();

	//console.log(json);
})();*/


const fetchApi = async(name)=>{
    const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    const json = await response.json();
    listaAlbums = json.feed.entry;
    return filtrarNombre(name,listaAlbums);
}

const filtrarNombre =  (name,listaAlbums)=>{
    console.log("name: "+name+"\n")
    //console.log(listaAlbums)
    let listaFiltrada = []
    for(let i=0 ; i<listaAlbums.length ; i++){
        //valida por nombreAlbum o artistAlbum
        if(String(listaAlbums[i]["im:name"]["label"]).includes(name) || String(listaAlbums[i]["im:artist"]["label"]).includes(name)
            || String(listaAlbums[i].category.attributes.term).includes(name)){
            listaFiltrada.push(listaAlbums[i])
        }
    }
    return listaFiltrada
}
router.get('/:artista', async function(req,res,next){
    const name = req.params.artista
    res.send(await fetchApi(name));
});


  module.exports = router;