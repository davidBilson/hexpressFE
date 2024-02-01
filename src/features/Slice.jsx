import React, { useState } from "react";

const Slice = () => {
  const [userDetails, setUserDetails] = useState({
    name: "David",
    age: 2,
  });

  const updateUser = (e) => {
    setUserDetails((prevState) => ({
      ...prevState,
      name:
        e.target.value === "David"
          ? "david"
          : e.target.value === "AB"
          ? "ab"
          : e.target.value === "XYZ"
          ? "xyz"
          : prevState.name,
    }));
  };

  return (
    <>
      <h1>Name: {userDetails.name}</h1>
      <h1>Age: {userDetails.age}</h1>
      <button onClick={updateUser}>Update User Details</button>
    </>
  );
};

export default Slice;
