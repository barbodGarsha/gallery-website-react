import * as React from "react";
import './Styles/Gallery.scss'

import Search_Bar from "./Search-Bar";
import Photo_Grid from "./Photos-Grid";
import Tag from "./Tag";

export default function Gallery({ photos, tags, chosen_tags, on_chosen_tags_add, on_chosen_tags_remove, on_photo_click, on_upload_click }) {
    function get_tag_by_id(id) {
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id == id) { return tags[i] }
        }
    }
    
    function handle_tag_container__click(e){
        if(e.target.hasAttribute('data-tag__close-btn')) {
            const tag_p = e.target.parentElement.querySelector('[data-tag__txt]')
            on_chosen_tags_remove(get_tag_by_id(tag_p.id))
           //TODO: Tags filter changes and the photos that are being shown need to change
        }
    }

    function handle_search_bar_mouse_down(e) { 
           
        if(e.target.hasAttribute('data-search-bar__recommendations__item')) { 
            const filter = get_tag_by_id(e.target.id)
            if(chosen_tags.filter(function(e) { return e.id === filter.id }).length < 1) {    
                on_chosen_tags_add(filter)
            }
        }
        
    }

    return (
        <div className="gallery">
            <div className="gallery__sidebar">
                <div className="gallery__search-container">
                    <Search_Bar tags={tags} on_mouse_down={handle_search_bar_mouse_down}/>
                </div>
                
                <div className="gallery__tag-container" data-gallery__tag-container onClick={handle_tag_container__click}>
                    {
                        chosen_tags.map(tag => {
                            return <Tag key={tag.id} id={tag.id} name={tag.name} is_dark={false}/>
                        })    
                    }
                </div>
            </div>

            <div className="gallery__viewer">
                <Photo_Grid photos={photos} chosen_tags={chosen_tags} on_photo_click={on_photo_click} on_upload_click={on_upload_click}/>
            </div>
        </div>
    )
}