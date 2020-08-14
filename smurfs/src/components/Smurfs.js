/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

//axios call & store
import { axiosCall } from "../store/redux";
import store from "../store/store";

// Smurf component
import Smurf from "./Smurf";

const Smurfs = () => {
  useEffect(() => {
    store.dispatch(axiosCall());
  }, []);

  const smurfsArray = useSelector((state) => state.smurfs);
  
  return (
    <div>
      {smurfsArray.map((data) => (
        <Smurf data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Smurfs;
