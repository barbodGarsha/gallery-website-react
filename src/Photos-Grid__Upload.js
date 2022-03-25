import React, { useRef } from "react";
import './Styles/Photos-Grid.scss'

export default function Photos_Grid__Upload({ on_click }) {

    function handle_on_click(e) {
        on_click()
    }
    return (
        <div onClick={handle_on_click} className="photos-grid__item photos-grid__item--empty" data-upload-a-photo>
            <p className="photos-grid__upload">Upload a Photo</p>
        </div>
    )
}