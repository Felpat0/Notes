import HomeNote from "./HomeNote";
import './../css/HomeNote.css';

function HomeNoteList(props){
    function deleteNote(id){
        const newList = props.starredNotes.filter((note) => note.id_note !== id);
        props.setNotesParent(newList);
    }
    
    //Get date string from note's datetime
    var dd = String(new Date(props.note.datetime).getDate()).padStart(2, '0');
    var mm = String(new Date(props.note.datetime).getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = new Date(props.note.datetime).getFullYear();
    let date = dd + '-' + mm + '-' + yyyy;

    return(
        <a href="#" onClick={() => props.setCurrentNoteIdFromChild(props.note.key)} className="list-group-item list-group-item-action homeNoteList">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.note.title}</h5>
                <small className="text-muted">{date}</small>
            </div>
            <p className="mb-1"><i>No description</i></p>
            <small className="text-muted">Tags: </small>
        </a>
    );
}
export default HomeNoteList;
