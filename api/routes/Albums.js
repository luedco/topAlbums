var express = require('express');
var router = express.Router();


const fetch = require('node-fetch');

/*(async () => {
	const response = await fetch('https://api.github.com/users/github');
	const json = await response.json();

	//console.log(json);
})();*/


const fetchApi = async()=>{
    const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=20/json')
    const json = await response.json();
    return json.feed.entry;
}
router.get('/', async function(req,res,next){
    res.send(await fetchApi());
});
  
  module.exports = router;