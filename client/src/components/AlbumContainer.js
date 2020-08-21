import React from 'react'
import Album from './Album'
import { getAlbumsByPopular, getAlbumsBySearch } from '../services/Album'
import Title from './Title'
import Search from './Search'


import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';


class AlbumContainer extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = {
            albums: [],
            isFetch: true
        }
    }
    //obteener de api
    async componentDidMount() {
        const responseJSON = await getAlbumsByPopular()
        this.setState(
            { albums: responseJSON, isFetch: false }
        )
        document.title = `Apple's Top Albums`;
    }

    handleSearch = async (search) => {
        const responseJSON = await getAlbumsBySearch(search)
        this.setState({
            albums: responseJSON
        })
    }

    selectedShow(album) {
        console.log(album)
    }
    componentDidUpdate() {

    }
    //render info
    render() {
        const { isFetch, albums } = this.state
        if (isFetch) {
            return "Loading ..."
        }
        //const name = this.state.albums[0].title.label
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <a href="" className="title-a"><Title>Apple Music</Title></a>
                    </Nav>
                    <Search handleSearch={this.handleSearch}></Search>
                </Navbar>
                <br />
               
               
                <section className="albums-container">
                    {
                        albums.map(
                            (album) => <div href="" className="album-href"><Album
                                imageurl={album["im:image"][2].label}
                                name={album["im:name"].label}
                                artist={album["im:artist"].label}
                                category={album.category.attributes.term}
                                realeaseDate={album["im:releaseDate"]["attributes"].label}
                                key={album.id.attributes["im:id"]} /></div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default AlbumContainer