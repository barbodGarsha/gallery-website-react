import * as React from "react";
import './Styles/Tag.scss'

export default function Tag({ name }) {
    return (
        <div className="tag" data-tag>
            <div className="tag__close-btn" data-tag__close-btn>X</div>
            <p className="tag__txt" data-tag__txt>{name}</p>
        </div>
    )
}