import {React, useState} from 'react'
import SongItem from "../component/SongItem"

const SongList = ({songs}) => {
    const songItems = songs.map((song, index) => {
        return <SongItem song={song} key={song['id']['attributes']['im:id']}/>
      })

    return (
        <>
        <ol>{songItems}</ol>
        </>
    )
}

export default SongList