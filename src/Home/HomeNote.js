import './../css/HomeNote.css';
import Button from 'react-bootstrap/Button';

function HomeNote(props) {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">
                {props.titolo}
                <a onClick={props.edit} className="buttonRightPosition"><img className="buttonIcon" src="Images/Icons/edit.png"/></a>
            </div>
            <div className="card-body">
                <div className="card-text" dangerouslySetInnerHTML={{
                    __html: props.testo
                }}>
                </div>
            </div>
        </div>
        
    );
}
export default HomeNote;

