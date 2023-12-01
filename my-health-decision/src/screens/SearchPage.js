import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import ListElement from "../features/ListElement";

// dummy data to test our search on
const data = [
  {
    facility: "Abbeville Area Medical Center",
    distance: "420 Thomson Circle (5 miles)",
    quality: "High",
    cost: "$$",
  },
  {
    facility: "Monongahela Valley Hospital",
    distance: "1163 Country Club Road (10 miles)",
    quality: "Medium",
    cost: "$$",
  },
  {
    facility: "Oakdale Community Hospital",
    distance: "130 North Hospital Drive (8 miles)",
    quality: "Medium",
    cost: "$$$",
  },
  {
    facility: "Carle BroMenn Medical Center",
    distance: "1304 Franklin Avenue (10 miles)",
    quality: "Medium",
    cost: "$$$",
  },
  {
    facility: "Carle Eureka Hospital",
    distance: "101 South Major Street (10 miles)",
    quality: "Medium",
    cost: "$$",
  },
  {
    facility: "RML Specialty Hospital",
    distance: "5601 South County Line Road (15 miles)",
    quality: "Medium",
    cost: "$$$",
  },
  {
    facility: "West Allis Memorial Hospital",
    distance: "8901 West Lincoln Avenue (13 miles)",
    quality: "Medium",
    cost: "$$",
  },
  {
    facility: "Alameda Hospital",
    distance: "2070 Clinton Avenue (15 miles)",
    quality: "High",
    cost: "$$",
  },
  {
    facility: "Highland Hospital",
    distance: "1411 East 31st Street (15 miles)",
    quality: "Low",
    cost: "$$",
  },
  {
    facility: "San Leandro Hospital",
    distance: "13855 East 14th Street (16 miles)",
    quality: "Medium",
    cost: "$$",
  },
  {
    facility: "Albany Medical Center Hospital",
    distance: "43 New Scotland Avenue (15 miles)",
    quality: "Low",
    cost: "$$",
  },
  {
    facility: "Columbia Memorial Hospital",
    distance: "71 Prospect Avenue (20 miles)",
    quality: "High",
    cost: "$$",
  },
  {
    facility: "Saratoga Hospital",
    distance: "211 Church Street (20 miles)",
    quality: "Medium",
    cost: "$$",
  },
  {
    facility: "St Rose Hospital",
    distance: "27200 Calaroga Avenue (20 miles)",
    quality: "Medium",
    cost: "$$",
  },
];

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = data.filter((item) =>
      item.facility.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const results2 = data.filter((item) =>
      item.distance.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const results3 = data.filter((item) =>
      item.quality.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const results4 = data.filter((item) =>
      item.cost.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results.concat(results2, results3, results4));
  }, [searchTerm]);

  return (
    <div className="searchpage_outer_container">
      <div className="searchpage-container">
        <div className="searchpage-heading">
          What are you looking for today?
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Find procedures, doctors, or hospitals"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="prescription">
          <button className="button" onclick="submit">
            Upload Prescription
          </button>
        </div>
      </div>

      <div className="data-container">
        <div className="dummy-data-header">
          <span className="facility"> Facility </span>{" "}
          <span className="dist"> Distance </span>{" "}
          <span className="quality"> Quality </span>{" "}
          <span className="cost"> Cost </span>
        </div>

        <div className="dummy-data-container">
          <ul className="dummy-data">
            {searchResults.map((item, index) => (
              <ListElement key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
