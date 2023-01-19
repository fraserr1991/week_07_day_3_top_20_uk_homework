import React, { useState, useEffect} from 'react'
import SongList from "./SongList"
import SongSelect from '../component/SongSelect'

const SongBox = () => {

    const [songs, setSongs] = useState([]) 
    // const [selectedSong, setSelectedSong] = useState(null)

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs['feed']['entry']))
        .catch(err => console.error(`Loading songs error: ${err}`))
    }

    return (
        <>
        <SongList songs={songs}/>
        {/* <SongSelect songs={songs}/> */}
        </>
    )
}

export default SongBox
