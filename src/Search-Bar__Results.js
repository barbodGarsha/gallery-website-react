import * as React from "react";
import './Styles/Search-Bar.scss'

export default function Search_Bar__results({id ,name, filter}) {

    function is_empty_or_spaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }
    
    if(!is_empty_or_spaces(filter)) {
       
        //TODO: better search system
        if (name.toUpperCase().indexOf(filter) < 0) {
            return null
        }
    }

    return (
        <p id={id} className="search-bar__recommendations__item" data-search-bar__recommendations__item>{name}</p>
    )
}