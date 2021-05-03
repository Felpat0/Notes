import './../css/HomeNote.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from '@ckeditor/ckeditor5-react';

function ActiveNoteOrganizer(props) {
    const [content, setContent] = useState(props.active.content); //Togliere sta roba e usare direttamente content
    useEffect(() => {
        if(content == "Loading...")
            setContent(props.active.content);
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
                        data={content}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setContent(data)
                        }}
                        style={{color: + 'red'}}
                    />
                </div>                
            </div>
        </div>
    );
}
export default ActiveNoteOrganizer;