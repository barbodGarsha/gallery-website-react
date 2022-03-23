import React, { useState, useRef } from "react";
import './Styles/Search-Bar.scss'

import Search_Bar__results from "./Search-Bar__Results"

export default function Search_Bar({ tags, on_mouse_down }) {

    let [filter, set_filter] = useState('')

    const search_bar__input = useRef()
    const search_bar__recs = useRef()
    const search_bar__recs__conatiner = useRef()

    function handle_mouse_down(e) {   
        on_mouse_down(e)
        search_bar__input.current.value = ''
    }
    
    function handle_focus(e) {
        
        search_bar__recs.current.style.display = 'block'
        set_filter('')
        //render_search_results('', search_bar__recs__conatiner, search_bar__recs.current)
        
    }

    function handle_blur(e) { 
        search_bar__recs.current.style.display = ''
    } 
    
    function handle_input(e) {
        
        var filter = e.target.value.toUpperCase()
        //render_search_results(filter, search_bar__recs__conatiner, search_bar__recs)
        set_filter(filter)
    }


    return (
        <div className="search-bar">
            <input type="text" className="search-bar__input" placeholder="Search for tags" data-search-bar__input ref={search_bar__input} onFocus={handle_focus} onBlur={handle_blur} onInput={handle_input}/>
            <div className="search-bar__recommendations" ref={search_bar__recs}  onMouseDown={handle_mouse_down} >
                <div className="search-bar__recommendations__container" data-search-bar__recommendations__container ref={search_bar__recs__conatiner}>
                    {
                        tags.map(tag => {
                            return <Search_Bar__results key={tag.id} id={tag.id} name={tag.name} filter={filter}/>
                        })    
                    }
                </div>
            </div>        
        </div>
    )
}