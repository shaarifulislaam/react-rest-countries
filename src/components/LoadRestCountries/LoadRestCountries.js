import React, { useEffect, useState } from 'react';
import CourtrySet from '../CourtrySet/CourtrySet';
import './LoadRestCountries.css';

const LoadRestCountries = () => {
    const [countries,setCountries] = useState([]);
  useEffect(()=>{
    const url ='https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
    return (
        <div>
          <h1>Travelling around the world</h1> 
        <h3>Countries Available : {countries.length}</h3>
          <div className="countries-container">
        {countries.map (country => <CourtrySet
                    key={country.alpha3Code}
                   country={country}>
                   </CourtrySet>)}
      </div>
        </div>
    );
};

export default LoadRestCountries;