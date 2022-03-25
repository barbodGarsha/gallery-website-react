import * as React from "react";
import './Styles/Tag.scss'

export default function Tag({ name, id, is_dark }) {
    
    let dark_modifer = ''
    if(is_dark) { dark_modifer = 'tag--dark'}

    return (
        <div className={"tag " + dark_modifer} data-tag>
            <div className="tag__close-btn" data-tag__close-btn>X</div>
            <p id={id} className="tag__txt" data-tag__txt>{name}</p>
        </div>
    )
}