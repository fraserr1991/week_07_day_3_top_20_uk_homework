
const SongItem = ({song}) => {

    return (
    <>
    <li>{song['im:name'].label} &nbsp; 
    {song["im:artist"].label}</li>
    </>
    )
}

export default SongItem