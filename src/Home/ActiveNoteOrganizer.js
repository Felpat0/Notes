import './../css/HomeNote.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function ActiveNoteOrganizer(props) {
    const [content, setContent] = useState(props.active.content);
    useEffect(() => {
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
                <div id="activeNoteContent" contentEditable={true} className="card-text" dangerouslySetInnerHTML={{
                    __html: content
                }}>
                </div>
                
            </div>
        </div>
    );
}
export default ActiveNoteOrganizer;