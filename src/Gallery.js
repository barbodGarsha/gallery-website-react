import * as React from "react";
import './Styles/Gallery.scss'

import Search_Bar from "./Search-Bar";
import Photo_Grid from "./Photos-Grid";
import Tag from "./Tag";

export default function Gallery({ tags, chosen_tags, on_chosen_tags_change }) {
    function get_tag_by_id(id) {
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id == id) { return tags[i] }
        }
    }
    
    function handle_search_bar_mouse_down(e) { 
        
         
        if(e.target.hasAttribute('data-search-bar__recommendations__item')) { 
            const filter = get_tag_by_id(e.target.id)
            if(chosen_tags.filter(function(e) { return e.id === filter.id }).length < 1) {    
                on_chosen_tags_change(filter)
            }
        }
        
    }

    return (
        <div className="gallery">
            <div className="gallery__sidebar">
                <div className="gallery__search-container">
                    <Search_Bar tags={tags} on_mouse_down={handle_search_bar_mouse_down}/>
                </div>
                
                <div className="gallery__tag-container" data-gallery__tag-container>
                    {
                        chosen_tags.map(tag => {
                            return <Tag key={tag.id} name={tag.name}/>
                        })    
                    }
                </div>
            </div>

            <div className="gallery__viewer">
                <Photo_Grid/>
            </div>
        </div>
    )
}