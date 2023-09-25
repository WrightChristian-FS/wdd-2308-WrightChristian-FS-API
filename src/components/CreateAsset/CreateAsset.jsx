import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./CreateAsset.css";
import Assets from "../../pages/Assets/Assets";

function CreateAsset() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/assets");
  };
  const textFields = [
    "Name",
    "Serial Number",
    "Make",
    "Purchase Price",
    "Model",
    "Assigned User",
  ];
  const devices = ["Laptop", "Mobile", "Desktop"];
  return (
    <>
      <Assets />
      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header>
          <Modal.Title>CREATE ASSET</Modal.Title>
        </Modal.Header>
        <Modal.Body className="create-modal">
          <form>
            <div className="device-input d-flex flex-column">
              <p>Device Type</p>
              <section className="d-inline-flex justify-content-start">
                {devices.map((device) => {
                  return (
                    <>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id={`option-${device.toLowerCase()}`}
                      />
                      <label
                        className="btn btn-secondary"
                        htmlFor={`option-${device.toLowerCase()}`}
                      >
                        {device}
                      </label>
                    </>
                  );
                })}
              </section>
            </div>
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
              <label htmlFor="onboard">Purchase Date</label>
              <input type="date" />
            </div>
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

export default CreateAsset;
