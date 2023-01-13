import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const ArtistView = () => {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])

    const allAlbums = artistData.filter(entity => entity.collectionType === 'Album')
        .map((album, i) => {
            return (
                <div key={i}>
                    <Link to={`/album/${album.collectionId}`}>
                        <p>{album.collectionName}</p>
                    </Link>
                </div>)
        })

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate('/') }>Home</button>
                |
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        )
    }

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <p>loading...</p>}
            {navButtons()}
            {allAlbums} {/** renderAlbums? */}
        </div>
    )
}

export default ArtistView