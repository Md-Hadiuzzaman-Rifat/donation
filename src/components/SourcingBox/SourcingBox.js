import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./SourcingBox.css";
import Transaction from "../Transaction/Transaction";
import { useNavigate } from "react-router-dom";

const SourcingBox = () => {
  const navigate= useNavigate()

  const SourcingCategories = [
    {
      id: 1,
      title: "medical",
      describe: "Help Reyna to cure cancer",
      img: "https://i.ibb.co/pf6WpJf/dengue.jpg",
    },
    {
      id: 2,
      title: "emergency",
      describe: "Help Susan to achieve her dream",
      img: "https://i.ibb.co/jZP8vLx/education.png",
    },
    {
      id: 3,
      title: "personal",
      describe: "Need money to travel the world",
      img: "https://i.ibb.co/dgdgSZb/travel-1.png",
    },
    {
      id: 4,
      title: "non profit",
      describe: "Raising Fund for Orphans",
      img: "https://i.ibb.co/G0bXmqS/nonprofite.png",
    },
  ];
  return (
    <div className="sourcingBox">
      <div className="sourcingBox__container">
        {/* item  */}
        {SourcingCategories.map((item) => (
          <div key={item.id} className="sourcingBox__item">
            <div className="sourcingBox__item__image">
              <img src={item.img} alt="" />
            </div>
            <div className="sourcingBox__item__content">
              <p>{item.describe}</p>
              <div className="sourcingBox__item__content__button">
                <button className="btn-white">Medical</button>
                <button onClick={()=>navigate('/profile/transaction')} className="btn-white">Donate</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourcingBox;
