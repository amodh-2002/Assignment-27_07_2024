import React from "react";

const SwagForm = ({ postDogData }) => {
  return (
    <div>
      <input type="text" placeholder="Enter Dog Name" name="dogName" />
      <input type="text" placeholder="Enter Dog Status" name="dogStatus" />
      <button onClick={postDogData}>Upload Dog Data</button>
    </div>
  );
};

export default SwagForm;
