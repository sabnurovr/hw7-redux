import React, { useState } from "react";
import { jsonData } from "./data/jsonData";
import './Repres.css';

const Repres = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <div className="repres-container">
      {jsonData.map((repres) => (
        <div className="card" key={repres.id}>
          <img src={repres.image} alt={repres.name} />
          <div>
            <div className="card-content">
              <h2>{repres.name}</h2>
              <p>
                {expandedId === repres.id
                    ? repres.bio
                    : `${repres.bio.slice(0, 100)}...`}
              </p>
              <button onClick={() => handleExpand(repres.id)}>
                {expandedId === repres.id ? "no more" : "more"}
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Repres;
