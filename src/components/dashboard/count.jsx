import React from "react";
import "../dashboard/count.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

export function Count() {
  return (
    <div className="container">
      <div className="container-box">
        <FontAwesomeIcon icon={faShuffle} className="icon" />
        <span>65%</span>
        <span>Growth</span>
      </div>
    </div>
  );
}
