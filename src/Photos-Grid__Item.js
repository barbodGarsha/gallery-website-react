import * as React from "react";
import './Styles/Photos-Grid.scss'

export default function Photos_Grid__Item({ src, name, photo_tags, chosen_tags, on_photo_click }) {
    
    function is_img_vertical(img_el) {
        if(img_el.height > img_el.width) { return true}
    }

    function handle_on_click(e) {
        let is_vertical = false
        if(is_img_vertical(e.target)) { is_vertical = true }
        on_photo_click({src: src, is_vertical: is_vertical, is_hidden: false})
    }

    function check_tags(img_tags, filters) {
        if(filters.length < 1) { return true }
        let matched = false
        for (let i = 0; i < img_tags.length; i++) {
            for (let j = 0; j < filters.length; j++) {
                if(img_tags[i] === filters[j].id) { matched = true }
            }   
        }
        return matched
    }

    if(!check_tags(photo_tags, chosen_tags)) { return null }
    
    return (
        <div className="photos-grid__item" data-photos-grid__item onClick={handle_on_click}>
            <div className="photos-grid__item__details">
                <div className="photos-grid__item__details-container">
                    <p className="photos-grid__item__name" data-photos-grid__item-name>{name}</p>
                </div>
            </div>
            <img src={src} alt="Photo" className="photos-grid__img" data-photos-grid__img/>
        </div>
    )
}