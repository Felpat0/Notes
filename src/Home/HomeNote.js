import './../css/HomeNote.css';
import Button from 'react-bootstrap/Button';

function HomeNote(props) {
    return (
        <div className="HomeNote">
            <h2 align="center">{props.titolo}</h2>
            <p>{props.testo}</p>
            <Button onClick={() => props.deleteNote}>Delete</Button>
        </div>
    );
}

export default HomeNote;
