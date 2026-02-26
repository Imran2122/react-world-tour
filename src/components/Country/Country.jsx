import React, { useState } from "react";

const Country = ({ country,handleVisitedCountry,handleVisitedFlag }) => {

  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    //   if(visited){
    //     setVisited(false)
    //   }else{
    //     setVisited(true)
    //   }
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountry(country)
  };
  return (
    <div className={`card border-2 p-2 rounded-2xl m-3 h-[450px] flex flex-col ${visited?"bg-green-500":""}`}>
      <img src={flags.flags.png} alt={flags.flags.png} />
      <h2>{name.common}</h2>
      <p>population:{population.population}</p>
      <p>
        population:{area.area} {area.area > 30000 ? "BIG" : "SMALL"} Country
      </p>

      <button onClick={handleVisited} className="btn btn-primary mt-auto">
        {visited ? "visited" : "not visited"}
      </button>
      <button onClick={()=> handleVisitedFlag(country)} className="btn">Add visited flugs</button>
    </div>
  );
};

export default Country;
