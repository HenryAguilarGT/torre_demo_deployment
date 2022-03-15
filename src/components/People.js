import React from 'react'

const People = ({ people = [] }) => {
  return (
    <div className="boxPeople">
        {people.map((item, index)=> (
            <>
            <div key={index} className="peopleCard">
                <div className="makeHexagon">
                    <img className="imagePeople" src={item.picture} alt="" />
                </div>
                <h3 className="peopleName">{item.name}</h3>
                <p>{item.locationName}</p>
                <p className="peopleHeadline">{item.professionalHeadline}</p>
                <ul>
                    {item.skills.map((sub) =>
                    <li>
                        {sub.name}
                    </li>
                    )}
                </ul>
            </div>
            </>
        ))}
        
    </div>
  );
};

export default People