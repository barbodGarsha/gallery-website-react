import React, { useState }  from "react";
import './Styles/Resets.scss'
import './Styles/Responsive.scss'

import Header from "./Header"
import Gallery from "./Gallery"
import Photo_Viewer from "./Photo-Viewer"
import Upload from "./Upload"

function App() {

  let [tags, set_tags] = useState([{id: 'ABSTRACT', name: 'Abstract'}, {id: 'ART', name: 'Art'}, {id: 'TEST', name: 'Test'}])
  let [chosen_tags, set_chosen_tags] = useState([])
  let [photos, set_photos] = useState([{id: '1', tags: ['ART', 'ABSTRACT'], name: 'Test', src: 'http://127.0.0.1:8887/Test.jpeg'}, {id: '2', tags: ['ART'], name: 'Test2', src: 'http://127.0.0.1:8887/Test02.jpg'}])
  let [photo_viewer, set_photo_viewer] = useState({src: '', is_vertical: false, is_hidden: true})
  let [upload, set_upload] = useState({is_hidden: true})

  function handle_upload_save(photo, new_tags) {
    if(new_tags != null) {
      console.log(new_tags)
      set_tags(tags => tags.concat(new_tags))
    }
    set_photos([...photos, photo])
    set_upload({is_hidden: true})
    console.log(photo)
  }

  function handle_upload_close() {
    set_upload({is_hidden: true})
  }
 
  function handle_upload_click() {
    set_upload({is_hidden: false})
  }

  function handle_chosen_tags_add(tag) {
    set_chosen_tags([...chosen_tags, tag])
  }
  
  function handle_chosen_tags_remove(tag) {
    const index = chosen_tags.findIndex(x => x.id == tag.id)
    set_chosen_tags([...chosen_tags.slice(0,index),...chosen_tags.slice(index + 1)])
  }

  function handle_show_photo_viewer(photo_viewer_par) {
    set_photo_viewer({src: photo_viewer_par.src, is_vertical: photo_viewer_par.is_vertical, is_hidden: photo_viewer_par.is_hidden})
  }
  
  function handle_close_photo_viewer() {
    set_photo_viewer({src: '', is_vertical: false, is_hidden: true})
  }

  return (
    <div>
      <Header/>
      <Gallery key={'MAIN_GALLERY'} photos ={photos} tags={tags} chosen_tags={chosen_tags} on_chosen_tags_add={handle_chosen_tags_add} on_chosen_tags_remove={handle_chosen_tags_remove} on_photo_click={handle_show_photo_viewer} on_upload_click={handle_upload_click}/>
      <Photo_Viewer src={photo_viewer.src} is_vertical={photo_viewer.is_vertical} is_hidden={photo_viewer.is_hidden} on_close={handle_close_photo_viewer}/>
      <Upload tags={tags} is_hidden={upload.is_hidden} on_close={handle_upload_close} on_save={handle_upload_save}/>
    </div>
  )
}

export default App;
