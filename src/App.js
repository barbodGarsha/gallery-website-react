import React, { useState }  from "react";
import './Styles/Resets.scss'

import Header from "./Header"
import Gallery from "./Gallery"

function App() {

  let [tags, set_tags] = useState([{id: 'ABSTRACT', name: 'Abstract'}, {id: 'ART', name: 'Art'}, {id: 'TEST', name: 'Test'}])
  let [chosen_tags, set_chosen_tags] = useState([{id: 'ABSTRACT', name: 'Abstract'}])

  function handle_chosen_tags_change(change) {
    set_chosen_tags([...chosen_tags, change])
  }

  return (
    <div>
      <Header/>
      <Gallery key={'MAIN_GALLERY'} tags={tags} chosen_tags={chosen_tags} on_chosen_tags_change={handle_chosen_tags_change}/>
    </div>
  )
}

export default App;
