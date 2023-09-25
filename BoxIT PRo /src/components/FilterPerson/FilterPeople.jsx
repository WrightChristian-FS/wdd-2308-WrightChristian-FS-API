import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./FilterPeople.css";
import People from "../../pages/People/People";

function FilterPeople() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/people");
  };

  const departments = [
    "Digital Operations",
    "Customer Success",
    "Sales",
    "Engineering",
    "Quality",
    "Facilities",
  ];
  const titles = [
    "Marketing Manager",
    "Janitor",
    "IT Engineer",
    "QA Engineer",
    "Customer Serv Rep",
    "Jr. Web Dev",
    "Sales Rep",
    "DEVOPS ENG II",
    "HR Manager",
    "Network Tech",
    "CEO",
  ];
  const offices = [
    "Los Angles",
    "New York",
    "Miami",
    "Chicago",
    "Tijuana",
    "Austin",
  ];
  return (
    <>
      <People />
      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header>
          <Modal.Title>FILTER PEOPLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="filter-form-people">
            <div id="filter-department">
              <p>Department</p>
              <hr />
              <section>
                {departments.map((department) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-departments"
                        id={`option-${department.toLowerCase()}`}
                      />
                      <label
                        className="btn btn-secondary"
                        htmlFor={`option-${department.toLowerCase()}`}
                      >
                        {department}
                      </label>
                    </>
                  );
                })}
              </section>
            </div>
            <div id="filter-title">
              <p>Title</p>
              <hr />
              <section>
                {titles.map((title) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-titles"
                        id={`option-${title.toLowerCase()}`}
                      />
                      <label
                        className="btn btn-secondary"
                        htmlFor={`option-${title.toLowerCase()}`}
                      >
                        {title}
                      </label>
                    </>
                  );
                })}
              </section>
            </div>
            <div id="filter-office">
              <p>Office</p>
              <hr />
              <section>
                {offices.map((office) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-offices"
                        id={`option-${office.toLowerCase()}`}
                      />
                      <label
                        className="btn btn-secondary"
                        htmlFor={`option-${office.toLowerCase()}`}
                      >
                        {office}
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

export default FilterPeople;
