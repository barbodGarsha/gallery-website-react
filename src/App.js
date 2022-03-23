import React, { useState }  from "react";
import './Styles/Resets.scss'

import Header from "./Header"
import Gallery from "./Gallery"

function App() {

  let [tags, set_tags] = useState([{id: 'ABSTRACT', name: 'Abstract'}, {id: 'ART', name: 'Art'}, {id: 'TEST', name: 'Test'}])

  return (
    <div>
      <Header/>
      <Gallery tags={tags}/>
    </div>
  )
}

export default App;
