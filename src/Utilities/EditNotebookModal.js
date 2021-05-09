import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function EditNotebookModal(props) {
  const [show, setShow] = useState(false);
  const [newNotebookName, setNewNotebookName] = useState(props.notebook.name_notebook);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(props.notebook)
  return (
    <>
    <Dropdown.Item onClick={handleShow}>Edit current notebook</Dropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing notebook "{props.notebook.name_notebook}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Type a new name for your notebook:</Form.Label>
              <Form.Control type="text" 
                            placeholder="Enter notebook name" 
                            value={newNotebookName}
                            onChange={
                              (e) => {
                                setNewNotebookName(e.target.value);
                              }
                            }/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }

  export default EditNotebookModal;