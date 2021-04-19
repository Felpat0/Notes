import HomeNote from './HomeNote';
import { useState } from 'react';

function HomeOrganizer() {
  const [notes, setNotes] = useState([
    {
      id_note: 1,
      title: "title",
      content: "<b>ao</b>",
      datetime: "12-04-2022",
      is_to_do: false,
      is_in_home: true,
      target_date: "20-04-2021"
    },{
      id_note: 2,
        title: "title2",
        content: "<i>ai</i>",
        datetime: "12-04-2022",
        is_to_do: false,
        is_in_home: false,
        target_date: "20-04-2021"
    }
  ]);

  function deleteNote(id){
    const newList = notes.filter((note) => note.id_note !== id);
    setNotes(newList);
  }

  return (
    <div className="HomeOrganizer">
      <h1>Note</h1>
      <div>
      {notes.map((note) => (
        <HomeNote titolo={note.title} testo={note.content} delete={deleteNote}/>
      ))}
      </div>
    </div>
  );
}


export default HomeOrganizer;