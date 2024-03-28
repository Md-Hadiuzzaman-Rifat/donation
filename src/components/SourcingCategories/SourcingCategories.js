import React from "react";

const SourcingCategories = () => {
  return (
    <div className="scourgingCategories">
      <div className="container">
        <div className="scourgingCategories__content">
          <h3>Categories</h3>
          <div className="scourgingCategories__content__item"></div>
          <input type="checkbox" id="education" name="education" value="Education" />
          <label for="education">Education</label>

          <input type="checkbox" id="personal" name="personal" value="Personal" />
          <label for="personal">Personal</label>

          <input type="checkbox" id="medical" name="Medical" value="Medical" />
          <label for="Medical">Medical</label>

          <input type="checkbox" id="nonProfit" name="nonProfit" value="Non Profit" />
          <label for="Non Profit">Non Profit</label>
        </div>
        <button className="button">+ More</button>
      </div>
    </div>
  );
};

export default SourcingCategories;
