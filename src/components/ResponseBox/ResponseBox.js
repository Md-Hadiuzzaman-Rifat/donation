import React from 'react';
import "./ResponseBox.css"

const ResponseBox = ({data}) => {
    console.log(data);
    return (
        <div className='responseBox'>
            <div className="response__container">
                <h3>Interested to pay: {data.title}</h3>
                <h3>Reason: {data.cause}</h3>
                <p>Opinion: {data.desc}</p>
                <p>Payback Time: {data.payTime} month</p>
                <p>Interest Rate: {data.pay} %</p>
                <h2>Benefactor Info</h2>
                <p>Name: {data?.currentUser?.displayName}</p>
                <p>Email: {data?.currentUser?.email}</p>
                <p>User ID: {data?.currentUser?.uid}</p>
                <button style={{marginTop: "1rem"}} className='button btn-green'>Accept</button>
            </div>
        </div>
    );
};

export default ResponseBox;