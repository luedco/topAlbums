import React from 'react'
import PropTypes from 'prop-types'
import selectedShow from './AlbumContainer'

const Album = ({name,imageurl,artist,category,realeaseDate})=> (
    <div className="single-album-container">
        <h2>{name}</h2>
        <img src={imageurl} alt={name} className="image"></img>
        <div className="middle">
            <p className="text">Artist: {artist} / Genrere {category} / Release Date: {realeaseDate}</p>
        </div>
    </div>
)

Album.propTypes = {
    name: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    realeaseDate: PropTypes.string.isRequired
}

export default Album;