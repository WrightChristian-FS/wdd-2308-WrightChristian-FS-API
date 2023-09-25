import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./FilterAssets.css";
import Assets from "../../pages/Assets/Assets";

function FilterAssets() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/assets");
  };
  const devices = ["Laptop", "Phone", "Desktop", "Key Fob"];
  const makes = ["HP", "Dell", "Apple", "Samsung"];
  const models = ["G5", "Latitude", "Wolf", "FOB"];
  return (
    <>
      <Assets />
      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header>
          <Modal.Title>FILTER ASSET</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="filter-form">
            <div>
              <input type="checkbox" name="assigned" id="assigned-input" />
              <label htmlFor="assigned-input">Assigned</label>
            </div>
            <div>
              <input type="checkbox" name="assigned" id="assigned-input" />
              <label htmlFor="assigned-input">Active Warranty</label>
            </div>
            <div className="group">
              <p>Device Type</p>
              <hr />
              <section>
                {devices.map((device) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-devices"
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
            <div className="group">
              <p>Make</p>
              <hr />
              <section>
                {makes.map((make) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-makes"
                        id={`option-${make.toLowerCase()}`}
                      />
                      <label
                        className="btn btn-secondary"
                        htmlFor={`option-${make.toLowerCase()}`}
                      >
                        {make}
                      </label>
                    </>
                  );
                })}
              </section>
            </div>
            <div className="group">
              <p>Model Type</p>
              <hr />
              <section>
                {models.map((model) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-models"
                        id={`option-${model.toLowerCase()}`}
                      />
                      <label
                        className="btn btn-secondary"
                        htmlFor={`option-${model.toLowerCase()}`}
                      >
                        {model}
                      </label>
                    </>
                  );
                })}
              </section>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleClose}>
            FILTER
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FilterAssets;
