/** @format */

import React from "react";

const Smurf = ({ data }) => {
  return (
    <div>
      <h3>Name: {data.name}</h3>
      <div>Age: {data.age} years</div>
      <div>Height: {data.height}</div>
    </div>
  );
};

export default Smurf;
