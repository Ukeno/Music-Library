import { useState } from 'react' 

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '79.9vw',
        'height': '40vh',
        'border': '1px solid black',
        'margin': '2px',
        'background-color': 'orange',
        'border-radius': '1px',
        'opacity':'.8'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '40vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow',
        'border-radius': '1px'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div className="item" onClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
                {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem