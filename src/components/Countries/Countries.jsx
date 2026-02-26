import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ loadPromiseCountries }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountry = (country) => {
    console.log("add the country", country);
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  const handleVisitedFlag = (country) => {
    console.log("visit the flag", country);

    const newVisitedFlag = [...visitedFlag, country];
    setVisitedFlag(newVisitedFlag);
  };
  const countriesData = use(loadPromiseCountries);

  const countries = countriesData.countries;

  return (
    <div>
      <h2>In the country:{visitedCountry.length}</h2>
      {visitedCountry.map((country) => (
        <li>{country.name.common}</li>
      ))}
      //flags.flags.png
      <h2>In the flag:{visitedFlag.length}</h2>
     <div className="flex gap-2">
         {visitedFlag.map((flag) => (
      
         <img className="mt-4 w-16" src={flag.flags.flags.png}></img>
   
      ))}
     </div>
      <h2>This Is in the Country:{countries.length}</h2>
      <div className="border-4  border-amber-950 p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            key={country.cca3}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
