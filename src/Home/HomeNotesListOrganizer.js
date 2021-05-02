import HomeNoteList from "./HomeNoteList";
import { useEffect, useState } from 'react';
import './../css/HomeNote.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import getEmptyNote from './../Utilities/GetEmptyNote'
import {addNote} from './../Utilities/NotesOperations'

//https://getbootstrap.com/docs/5.0/components/list-group/
function HomeNotesListOrganizer(props){
    let currentNoteList = [];
    let currentNotebookName = "Notebook";
    
    props.notes.map((note) =>{
        if(note.id_notebook == props.currentNotebookId){
            currentNoteList.push(note);
        }
    });

    //Order note list by datetime
    currentNoteList.sort(function(a,b){
        return new Date(b.datetime) - new Date(a.datetime);
      });

    props.notebooks.map((notebook) =>{
        if(notebook.key == props.currentNotebookId){
            currentNotebookName = notebook.name_notebook;
        }
    });
    
    
    return(
        <div>
            <div className="mb-2">
                <Button className="addNoteButton" variant="success" onClick={()=>{
                    let note = getEmptyNote(props.currentNotebookId);
                    let key = addNote(getEmptyNote(props.currentNotebookId));
                    note[0].key = key;
                    props.setNotesFromChild(note.concat(props.notes));
                    props.setCurrentNoteIdFromChild(key);
                }}>Add Note</Button>
                <DropdownButton
                    as={ButtonGroup}
                    key={'right'}
                    id={`dropdown-button-drop-${'right'}`}
                    drop={"right"}
                    variant="info"
                    title={currentNotebookName}
                >
                    {props.notebooks.map((notebook) => (
                        <Dropdown.Item onClick={() => props.setCurrentNotebookIdFromChild(notebook.key)}>{notebook.name_notebook}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </div>
            <div className="list-group">
                {currentNoteList.map((note) => (
                    <HomeNoteList className="homeNoteList" note={note} setCurrentNoteIdFromChild={props.setCurrentNoteIdFromChild}/>
                ))}
            </div>
        </div>
    );

}
export default HomeNotesListOrganizer;


