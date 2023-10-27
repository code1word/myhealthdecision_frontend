import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./SearchPage.css";

// dummy data to test our search on
const data = [
  "Colonoscopy",
  "Knee surgery",
  "Covid-19",
  "MRI",
  "Ultrasound",
  "EKG",
  "Emergency visit"
];

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = data.filter(data =>
      data.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="searchpage_outer_container">
      <div className="searchpage-heading">What are you looking for today?</div>
      <br></br><br></br>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          {searchResults.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default SearchPage;
