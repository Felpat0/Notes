import axios from 'axios';

import HomeNotesOrganizer from './HomeNotesOrganizer';
import ActiveNoteOrganizer from './ActiveNoteOrganizer';
import { useEffect, useState } from 'react';
import HomeNotesListOrganizer from './HomeNotesListOrganizer';

/*
INSTALLS:
- npm install react-contenteditable
*/

function HomeOrganizer() {
  const [currentNotebookId, setCurrentNotebookId] = useState(1);
  const [notes, setNotes] = useState([
    {
      key: 1,
      title: "title",
      content: "<b>ao</b> questa è una nota e io NON SONO LILLO <br/> Basta questo meme non fa più ridere per favore smettetela",
      datetime: "12-04-2022",
      is_to_do: false,
      is_in_home: true,
      target_date: "20-04-2021",
      id_notebook: 2,
    },{
      key: 2,
      title: "title2",
      content: "<i>ai</i>",
      datetime: "12-04-2022",
      is_to_do: false,
      is_in_home: false,
      target_date: "20-04-2021",
      id_notebook: 1
    }
  ]);
  const [notebooks, setNotebooks] = useState([
    {
      key: 1,
      name_notebook: "Notebook1"
    },
    {
      key: 2,
      name_notebook: "Notebook2"
    }
  ]);
  const [currentNoteId, setCurrentNoteId] = useState(1);
  const [currentNote, setCurrentNote] = useState(notes[0]);

  useEffect(() => {
    getNotes();
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  useEffect(()=>{
    getCurrentNote();
  })
  
  return (
    <div className="container-fluid">
      <h1><b>Notes</b></h1>
      <div className="row">
        <div className="col-3">
          <HomeNotesListOrganizer notes={notes} notebooks={notebooks} currentNotebookId={currentNotebookId} setCurrentNotebookIdFromChild={setCurrentNotebookIdFromChild} setCurrentNoteIdFromChild={setCurrentNoteIdFromChild} setNotesFromChild={setNotesFromChild}/>
        </div>
        <div className="col-5">
          <ActiveNoteOrganizer active={currentNote}/>
        </div>
        <div className="col-4">
          <HomeNotesOrganizer notes={notes} setNotesParent={setNotesFromChild}/>
        </div>
      </div>
    </div>
  );
  
  function setNotesFromChild(notes){
    setNotes(notes);
  }
  function setCurrentNotebookIdFromChild(id){
    setCurrentNotebookId(id);
  }
  function setCurrentNoteIdFromChild(id){
    setCurrentNoteId(id);
  }

  function getNotes(){
    // GET request using axios inside useEffect React hook
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      let temp = [];
      response.data.map((note) =>{
        temp.push({
          key: note.id,
          title: "title2",
          content: "<i>ai</i>" + note.id,
          datetime: new Date(),
          is_to_do: false,
          is_in_home: false,
          target_date: "20-04-2021",
          id_notebook: 1
        });
      })
      setNotes(temp);
    });
  }

  function getCurrentNote(){
    notes.map((note) =>{
      if(note.key == currentNoteId){
        setCurrentNote(note);
      }
    });
  }
}



export default HomeOrganizer;