import React, { useEffect, useState } from "react";
import axios from "axios";
import SwagForm from "./SwagForm";

const SwaggerAPI = () => {
  const [initialData, setInitialData] = useState(null);
  const [displayedDog, setDisplayedDog] = useState(null);

  useEffect(() => {
    axios
      .get("https://petstore.swagger.io/v2/pet/1")
      .then((response) => {
        setInitialData(response.data);
      })
      .catch((error) => {
        console.error("Error while fetching initial data: ", error);
      });
  }, []);

  const postDogData = (dogName, dogStatus) => {
    axios
      .post("https://petstore.swagger.io/v2/pet/1", {
        name: dogName,
        status: dogStatus,
      })
      .then(() => {
        setInitialData(null); // Clear initial data
        setDisplayedDog({ name: dogName, status: dogStatus });
      })
      .catch((error) => {
        console.error("Error while posting data: ", error);
      });
  };

  return (
    <div className="swagAPI">
      {displayedDog ? (
        <div>
          <h1 className="name">{displayedDog.name}</h1>
          <p className="status">{displayedDog.status}</p>
        </div>
      ) : (
        initialData && (
          <div>
            <h1 className="name">{initialData.name}</h1>
            <p className="status">{initialData.status}</p>
          </div>
        )
      )}
      <SwagForm postDogData={postDogData} />
    </div>
  );
};

export default SwaggerAPI;
