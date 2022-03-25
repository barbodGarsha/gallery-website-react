import React, { useRef } from "react";
import './Styles/Photo-Viewer.scss'

export default function Photo_Viewer({ src, is_vertical, is_hidden, on_close }) {
   
    const background = useRef()

    function handle_on_click(e) {
        if(e.target === background.current) { on_close() }
    }

    if(is_hidden) { return null }

    let vertical_modifer = ''
    if(is_vertical) { vertical_modifer = 'photo-viewer--vertical'}
    return (
        <div ref={background} className={"photo-viewer " + vertical_modifer} data-photo-viewer onClick={handle_on_click}>
        <div className="photo-viewer__container">
            <img src={src} alt="Photo" className="photo-viewer__img" data-photo-viewer__img/>
        </div>
    </div>
    )
}