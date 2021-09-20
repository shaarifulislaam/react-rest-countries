import React from 'react';
import './CourtrySet.css'

const CourtrySet = (props) => {
  // console.log(props.country);
  const {name,population,capital,flag,region} =  props.country;
    return (
        <div className="Country">
      <h1>Name : {name}</h1>
      <img width="200px" src={flag} alt="" />
      <h2>Capital : {capital} </h2>
      <h3>Polulation : {population}</h3>

      <p><small><b>Region : </b>{region}</small></p>
      
    </div>
    );
};

export default CourtrySet;