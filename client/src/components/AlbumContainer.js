import React from 'react'
import Album from './Album'
import { getAlbumsByPopular } from '../services/Album'
import Title from './Title'
import Search from './Search'
class AlbumContainer extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor")
        this.state = {
            albums: [],
            isFetch:true
        }
    }
    //obteener de api
    async componentDidMount(){
        const responseJSON = await getAlbumsByPopular()
        this.setState(
            {albums: responseJSON,isFetch:false}
            )
    }

    handleSearch = (search)=>{
        const {albums} = this.state
        this.setState({
            albums: ()=>{
                if(albums[0]["im:name"].label === search){
                    return albums
                }else{
                    const newData = albums.shift();
                    return []
                }
            }
        })
    }
    componentDidUpdate(){

    }
    //render info
    render(){
        const {isFetch, albums} = this.state
        if(isFetch){
            return "Loading ..."
        }
        //const name = this.state.albums[0].title.label
        return (
            <React.Fragment>
                <Title>iTunes App</Title>
                <Search handleSearch={this.handleSearch}></Search>
                <section className="albums-container">
                {
                    albums.map(
                    (album) => <a href="" className="album-href"><Album 
                    imageurl={album["im:image"][2].label} 
                    name={album["im:name"].label}
                    artist={album["im:artist"].label}
                    category={album.category.attributes.term}
                    key={album.id.attributes["im:id"]}/></a>
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}

export default AlbumContainer