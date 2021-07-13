import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
// import { LocationContext } from "../locations/LocationProvider";
// import { CustomerContext } from "../customers/CustomerProvider";
import { AnimalCard } from "./AnimalCard";
import { useHistory } from 'react-router-dom';
import "./Animal.css";

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    // const { locations, getLocations } = useContext(LocationContext)
    // const { customers, getCustomers } = useContext(CustomerContext)
    const history = useHistory()

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
        // .then(getCustomers)
        // .then(getAnimals)
    }, [])


    return (
      <>
        <h2>Animals</h2>
        <button
          className="clickMe"
          onClick={() => {
            history.push("/animals/create");
          }}
        >
          Add Animal
        </button>
        <div className="animals">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </>
    );
}

