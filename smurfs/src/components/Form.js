/** @format */

import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

//action creatores
import {
  ageChange,
  nameChange,
  heightChange,
  clearInput,
  axiosCall,
} from "../store/redux";
//store
import store from "../store/store";

const Form = () => {
  const { name, age, height } = useSelector((state) => state);

  // input update

  const inputUpdate = (callback,event ) => {
    const { value } = event.target;
    store.dispatch(callback(value));
  };
  
  
  
//   const nameUpdate = (event) => {
//     const { value } = event.target;
//     store.dispatch(nameChange(value));
//   };
//   const ageUpdate = (event) => {
//     const { value } = event.target;
//     store.dispatch(ageChange(value));
//   };

//   const heightUpdate = (event) => {
//     const { value } = event.target;
//     store.dispatch(heightChange(value));
//   };



  // form submit

  const postSmurf = (newSmurf) => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => {
        
        store.dispatch(axiosCall());
      })
      .catch((err) => console.log("axios.post err", err));
  };

  const submit = (event) => {
    event.preventDefault();
    const newSmurf = {
      name,
      age,
      height: `${height}cm`,
    };
    //send this information to the function that post to axios
    postSmurf(newSmurf);
    store.dispatch(clearInput());
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">
          Name:
          <div>
            <input
              type="text"
              placeholder="Enter Smurf Name"
              name="name"
              id="name"
              value={name}
              onChange={(event)=>inputUpdate(nameChange,event)}
            />
          </div>
        </label>

        <label htmlFor="age">
          Age:
          <div>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Enter Smurf Age"
              value={age}
              onChange={(event)=>inputUpdate(ageChange,event)}
            />
          </div>
        </label>

        <label htmlFor="hight">
          Height:
          <div>
            <input
              type="number"
              placeholder="Enter Smurf Hight"
              name="hight"
              id="hight"
              value={height}
              onChange={(event)=>inputUpdate(heightChange,event)}
            />
          </div>
        </label>

        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default Form;
