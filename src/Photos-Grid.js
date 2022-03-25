import * as React from "react";
import './Styles/Photos-Grid.scss'
import Photos_Grid__Item from './Photos-Grid__Item'
import Photos_Grid__Upload from './Photos-Grid__Upload'

export default function Photos_Grid({ photos, chosen_tags, on_photo_click, on_upload_click }) {
    return (
        <div className="photos-grid" data-gallery__viewer__photos-grid>
            <Photos_Grid__Upload on_click={on_upload_click}/>
            {
                photos.map(photo => {
                    return <Photos_Grid__Item key={photo.id} name={photo.name} src={photo.src} photo_tags={photo.tags} chosen_tags={chosen_tags} on_photo_click={on_photo_click}/>
                }) 
            }
        </div>
    )
}