import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import { useHistory } from 'react-router-dom';
import "./Animal.css";

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const history = useHistory()

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
          .then(getAnimals)
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
          {animals.map((animal) => {
            return (
              <AnimalCard key={animal.id} animal={animal} />
            );
          })}
        </div>
      </>
    );
}

