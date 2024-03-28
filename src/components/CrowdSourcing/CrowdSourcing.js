import React from 'react';
import SourcingBox from '../SourcingBox/SourcingBox';
import SourcingCategories from '../SourcingCategories/SourcingCategories';
import "./CrowdSourcing.css"
const CrowdSourcing = () => {
    return (
        <div className='crowdSourcing'>
            <div className="crowdSourcing__container">
                <SourcingCategories></SourcingCategories>
                <SourcingBox></SourcingBox>
            </div>
        </div>
    );
};

export default CrowdSourcing;