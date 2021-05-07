import './../css/HomeNote.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from '@ckeditor/ckeditor5-react';

function ActiveNoteOrganizer(props) {
    useEffect(() => {
        let previousId;
        let currentId;
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
      });
    return (
        <div className="card text-white bg-dark mb-3 sticky-top">
            <div className="card-header">
                {props.active.title}
                <a onClick={props.edit} className="buttonRightPosition"><img className="buttonIcon" src="Images/Icons/edit.png"/></a>
            </div>
            <div className="card-body" style={{height: 30 + 'rem'}}>
                <div className="editor">
                    <CKEditor
                        id="ckeditor"
                        editor={ClassicEditor}
                        data={props.active.content}
                        onChange={(event, editor) => {
                            //Check if the note has been changed
                            if(props.currentNoteId == props.active.key){
                                const data = editor.getData()
                                let tempNote = props.active;
                                tempNote.content = data;
                                props.editNote(-1, tempNote)
                            }
                        }}
                        style={{color: + 'red'}}
                    />
                </div>                
            </div>
        </div>
    );
}
export default ActiveNoteOrganizer;