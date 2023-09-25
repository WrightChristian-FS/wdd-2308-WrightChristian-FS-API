import React, { useState, useEffect } from "react";
import "./ListDisplayPeople.css";
import { Link } from "react-router-dom";

function ListDisplayAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch("/assets.json")
      .then((response) => response.json())
      .then((data) => setAssets(data))
      .catch((error) => console.error("Error fetching assets:", error));
  }, []);

  return (
    <>
      <div id="display-table">
        <Link to="filter">
          <img src="filter.svg" alt="Filter" width={30} />
        </Link>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Make</th>
              <th>Model</th>
              <th>Serial Number</th>
              <th>Assigned To</th>
              <th>PRICE</th>
              <th>WARRANTY</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={index}>
                <td>{asset.Type}</td>
                <td>{asset.Name}</td>
                <td>{asset.Make}</td>
                <td>{asset.Model}</td>
                <td>{asset.SerialNumber}</td>
                <td>{asset.AssignedTo}</td>
                <td>{asset.Price}</td>
                <td>{asset.Warranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListDisplayAssets;
