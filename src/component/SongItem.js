
const SongItem = ({song}) => {

    return (
    <>
    <img src={song["im:image"][2].label}></img>
    <li>{song['im:name'].label} &nbsp; 
    {song["im:artist"].label}</li>

    </>
    )
}

export default SongItem