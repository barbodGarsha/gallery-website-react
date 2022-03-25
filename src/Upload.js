import React, { useState, useRef } from "react";
import './Styles/Upload.scss'

import Search_Bar from "./Search-Bar";
import Tag from "./Tag";

export default function Upload({ tags, is_hidden, on_close, on_save }) {

    let upload_file_input = useRef()
    let upload_name_input = useRef()
    let [upload_tags, set_upload_tags] = useState(tags)
    let [upload_chosen_tags, set_upload_chosen_tags] = useState([])

    function create_tag_id_array(tag_list) {
        let id_array = []
        for (let i = 0; i < tag_list.length; i++) {
            id_array.push(tag_list[i].id)
        }
        return id_array
    }

    function is_empty_or_spaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    function create_photo(photo_name, path, photo_tags) {
        //{id: '1', tags: ['ABSTRACT', 'ART'], name: 'Test', src: 'images/Test.jpeg'}
        return { id: Date.now().toString(), tags: photo_tags, name: photo_name, src: path }
    }

    function get_tag_by_id(id) {
        for (let i = 0; i < upload_tags.length; i++) {
            if (upload_tags[i].id == id) { return upload_tags[i] }
        }
    }

    function handle_add_new_tag(new_tag) {
        
        if(upload_chosen_tags.filter(function(e) { return e.id === new_tag.id }).length < 1) {    
            set_upload_chosen_tags([...upload_chosen_tags, new_tag])
            set_upload_tags([...upload_tags, new_tag])
        }
    }

    function handle_tag_container__click(e){
        if(e.target.hasAttribute('data-tag__close-btn')) {
            const tag_p = e.target.parentElement.querySelector('[data-tag__txt]')
            handle_chosen_tags_remove(get_tag_by_id(tag_p.id))
           //TODO: Tags filter changes and the photos that are being shown need to change
        }
    }
   
    function handle_chosen_tags_add(e) {
        if(e.target.hasAttribute('data-search-bar__recommendations__item')) { 
            const filter = get_tag_by_id(e.target.id)
            if(upload_chosen_tags.filter(function(tag) { return tag.id === filter.id }).length < 1) {    
                set_upload_chosen_tags([...upload_chosen_tags, filter])
            }
        }  
    }
      
    function handle_chosen_tags_remove(tag) {
        const index = upload_chosen_tags.findIndex(x => x.id == tag.id)
        set_upload_chosen_tags([...upload_chosen_tags.slice(0,index),...upload_chosen_tags.slice(index + 1)])
    }

    function handle_save_btn__click(e) {
        let new_tags = []
        let photo
        let uploaded_file 

        if(upload_file_input.current.files.length == 1) {
            uploaded_file = 'http://127.0.0.1:8887/' + upload_file_input.current.value.split(/(\\|\/)/g).pop()
            photo = create_photo(upload_name_input.current.value, uploaded_file, create_tag_id_array(upload_chosen_tags))
            for (let i = 0; i < upload_chosen_tags.length; i++) {
                let new_tag = true
                for (let j = 0; j < tags.length; j++) {
                    if(upload_chosen_tags[i].id === tags[j].id) { new_tag = false}
                }
                if(new_tag) { new_tags.push(upload_chosen_tags[i])}
            }
        }
        else {
            alert('Please upload a photo')
            return
        }

        if(is_empty_or_spaces(upload_name_input.current.value)) { 
            alert('Please give the photo a name')
            return
        } 
        set_upload_chosen_tags([])
        set_upload_tags(tags)
        on_save(photo, new_tags)
    }

    function handle_close_btn__click(e) {
        set_upload_chosen_tags([])
        set_upload_tags(tags)
        on_close()
    }

    if(is_hidden) { return null }
    return (
        <div className="upload" data-upload>
            <div className="upload__container">
                <div onClick={handle_close_btn__click} className="upload__close-btn" data-upload__close-btn>X</div>
                <div className="upload__top">
                    <div className="upload__inputs">
                        
                        <div className="upload__btn upload__btn--has-bottom-margin">
                            <input ref={upload_file_input} className="upload__btn__file-input"type="file" data-upload__btn__file-input/>
                            <p className="upload__btn__txt">Upload a Photo</p>
                        </div>
                        <div className="upload__name">
                            <input ref={upload_name_input} type="text" className="upload__name-input" placeholder="Give it a name" data-upload__name-input/>
                        </div>
                        <Search_Bar tags={upload_tags} is_dark={true} on_mouse_down={handle_chosen_tags_add} on_key_up={handle_add_new_tag}/>
                    </div>
                    <div onClick={handle_tag_container__click} className="upload__tag-container" data-upload__tag-container>
                    {
                        upload_chosen_tags.map(tag => {
                            return <Tag key={tag.id} id={tag.id} name={tag.name} is_dark={true}/>
                        })    
                    }
                    </div>
                </div>

                <div onClick={handle_save_btn__click} className="upload__btn">
                    <p className="upload__btn__txt" data-upload__save-btn>Save</p>
                </div>
            </div>
        </div>
    )
}