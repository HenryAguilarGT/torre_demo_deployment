import React from 'react'

const People = ({ people = [] }) => {
  return (
    <div className="row">
        {people.map((item, index)=> (
            <div key={index} className="col">
                <div className="peopleCard">
                    <img src={item.picture} alt="" />
                </div>
            </div>
        ))}
        
    </div>
  );
};

export default People