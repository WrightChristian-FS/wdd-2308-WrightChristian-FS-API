import React, { useState, useEffect } from "react";
import "./ListDisplayPeople.css";
import { Link } from "react-router-dom";

function ListDisplayPeople() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id="display-table">
      <Link to="filter">
        <img src="filter.svg" alt="Filter" width={30} />
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Title</th>
            <th>Computer</th>
            <th>Office</th>
            <th>Hire Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <tr key={index}>
              <td>{employee.Name}</td>
              <td>{employee.Email}</td>
              <td>{employee.Department}</td>
              <td>{employee.Title}</td>
              <td>{employee.Computer}</td>
              <td>{employee.Office}</td>
              <td>{employee.HireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListDisplayPeople;
