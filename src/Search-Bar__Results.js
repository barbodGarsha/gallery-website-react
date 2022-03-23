import * as React from "react";
import './Styles/Search-Bar.scss'

export default function Search_Bar__results({name}) {
    return (
        <p className="search-bar__recommendations__item" data-search-bar__recommendations__item>{name}</p>
    )
}