import React from "react";
import "./SourcingCategory.css";

const SourcingCategories = () => {
  return (
    <div className="scourgingCategories">
      <div className="scourgingCategories___container">
        <div className="scourgingCategories__content">
          <h3>Categories</h3>
          <div className="scourgingCategories__content__item">

          <div>
            <input
              type="checkbox"
              id="personal"
              name="personal"
              value="Personal"
            />
            <label for="personal">Personal</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="medical"
              name="Medical"
              value="Medical"
            />
            <label for="Medical">Medical</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="nonProfit"
              name="nonProfit"
              value="Non Profit"
            />
            <label for="Non Profit">Non Profit</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="emergency"
              name="emergency"
              value="Emergency"
            />
            <label for="Emergency">Emergency</label>
            </div>
          </div>
        </div>
        <button className="button btn-white">+ More</button>
      </div>
    </div>
  );
};

export default SourcingCategories;