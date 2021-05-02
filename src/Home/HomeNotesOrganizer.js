import HomeNote from "./HomeNote";
import './../css/HomeNote.css';

function HomeNotesOrganizer(props){
    function deleteNote(id){
        const newList = props.notes.filter((note) => note.key !== id);
        props.setNotesParent(newList);
    }
    return(
        <div className="HomeNotesOrganizer">
            {props.notes.map((note) => (
                <HomeNote titolo={note.title} testo={note.content} id_note={note.key} delete={() => deleteNote(note.key)}/>
            ))}
        </div>
    );
}
export default HomeNotesOrganizer;