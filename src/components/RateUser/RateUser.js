import React, { useState } from "react";
import "./RateUser.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const RateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams() || {};
  const [user, setUser] = useState({});

  // get The user
  useEffect(() => {
    fetch(`http://localhost:2020/findUser/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const [rating, setRating]= useState()
  const [newRating, setNewRating]= useState(5)

  useEffect(()=>{
    setRating(()=>{
      setRating(user?.rate  / user?.count || 0 )
    },[])
  },[user?.rate, user?.count])
  
  const submitRating = (e) => {
    e.preventDefault()
    fetch(`http://localhost:2020/editUser/${id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count:user.count+1 , rate:parseInt(user.rate) + parseInt(newRating)})
    })
    navigate('/loan')
  };

  return (
    <div className="rateUser">
      <div className="rateUser__container">
        <div className="rateUser__back" onClick={() => navigate(-1)}>
          {" "}
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft>{" "}
        </div>
        <h2 style={{ marginBottom: "10px" }}>Rate The User</h2>
        {user && (
          <div>
            <p style={{ marginTop: "-30px" }}>Name: {user.name}</p>
            <p style={{ marginTop: "-30px" }}>Rating: {rating}</p>
            <p style={{ marginTop: "-30px" }}>Email: {user.email}</p>
          </div>
        )}
        <form onSubmit={submitRating} className="ratingForm">
          <input value={newRating} onChange={e=>setNewRating(e.target.value)} className="rateInput" type="number" id="quantity" name="quantity" min="0" max="5" />
          <button className="btn-semi-green" type="submit">
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RateUser;
