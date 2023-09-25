import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import People from "../../pages/People/People";
import { useNavigate } from "react-router-dom";
import "./CreatePerson.css";

function CreatePerson() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/people");
  };
  const textFields = ["Name", "Title", "Email", "Department", "Office"];
  const phoneFields = [
    "Phone Number - Desk",
    "Phone Number - Cell",
    "Assigned Computer",
    "Assigned Phone",
  ];
  return (
    <>
      <People />
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header>
          <Modal.Title>CREATE PERSON</Modal.Title>
        </Modal.Header>
        <Modal.Body className="create-modal">
          <form>
            {textFields.map((field) => {
              return (
                <div id={`${field.toLowerCase()}-input`}>
                  <label htmlFor={`person-${field.toLowerCase()}`}>
                    {field}
                  </label>
                  <input type="text" id={`person-${field.toLowerCase()}`} />
                </div>
              );
            })}
            <div>
              <label htmlFor="onboard">Onboard Date</label>
              <input type="date" />
            </div>
            {phoneFields.map((field) => {
              return (
                <div>
                  <label htmlFor={`${field.toLowerCase()}`}>{field}</label>
                  <input type="text" id={`${field.toLowerCase()}`} />
                </div>
              );
            })}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleClose}>
            CREATE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreatePerson;
