import * as React from "react";
import './Styles/Gallery.scss'

import Search_Bar from "./Search-Bar";
import Photo_Grid from "./Photos-Grid";

export default function Gallery({ tags }) {
    return (
        <div className="gallery">
            <div className="gallery__sidebar">
                <div className="gallery__search-container">
                    <Search_Bar tags={tags} />
                </div>
                
                <div className="gallery__tag-container" data-gallery__tag-container>
                </div>
            </div>

            <div className="gallery__viewer">
                <Photo_Grid/>
            </div>
        </div>
    )
}