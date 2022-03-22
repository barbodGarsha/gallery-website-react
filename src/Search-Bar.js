import React, { useRef } from "react";
import './Styles/Search-Bar.scss'

import Search_Bar__results from "./Search-Bar__Results"

export default function Search_Bar() {
    const search_bar__recs = useRef()
    const search_bar__recs__conatiner = useRef()

    function handle_mouse_down(e) {
        /*
        if(e.target.hasAttribute('data-search-bar__recommendations__item')) { 
            filter = get_tag_by_id(e.target.id)
            if(chosen_tags.filter(function(e) { return e.id === filter.id }).length < 1) {    
                chosen_tags.push(filter)
                const tag = document.importNode(tag_template.content, true)
                const tag_p = tag.querySelector('[data-tag__txt]')   
                tag_p.id = filter.id
                tag_p.innerText = filter.name
                tag_container.appendChild(tag)
                render_gallery_viewer(chosen_tags)
            }
            search_bar__input.value = ''
        }
        */
    }
    
    function handle_focus(e) {
        
        search_bar__recs.current.style.display = 'block'
        console.log("WORKING")
        //render_search_results('', search_bar__recs__conatiner, search_bar__recs.current)
        
    }

    function handle_blur(e) { 
        search_bar__recs.current.style.display = ''
    } 
    
    function handle_input(e) {
        /*
        var filter, li, i, txtValue
        var found_smth = false
        filter = e.target.value.toUpperCase()
        render_search_results(filter, search_bar__recs__conatiner, search_bar__recs)
        */
    }


    return (
        <div className="search-bar">
            <input type="text" className="search-bar__input" placeholder="Search for tags" data-search-bar__input onFocus={handle_focus} onMouseDown={handle_mouse_down} onBlur={handle_blur} onInput={handle_input}/>
            <div className="search-bar__recommendations" ref={search_bar__recs}>
                <div className="search-bar__recommendations__container" data-search-bar__recommendations__container ref={search_bar__recs__conatiner}>
                    <Search_Bar__results name={"Barbod"}/>
                </div>
            </div>        
        </div>
    )
}