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

// import React, { useContext, useEffect } from "react"
// import { AnimalContext } from "./AnimalProvider"
// import { LocationContext } from "../locations/LocationProvider"
// import { CustomerContext } from "../customers/CustomerProvider"
// import { AnimalCard } from "./AnimalCard"
// import { useHistory } from 'react-router-dom';
// import "./Animal.css"

// export const AnimalList = () => {
//     const { animals, getAnimals } = useContext(AnimalContext)
//     const { locations, getLocations } = useContext(LocationContext)
//     const { customers, getCustomers } = useContext(CustomerContext)

//         const history = useHistory()


//     useEffect(() => {
//         console.log("AnimalList: Initial render before data")
//         getLocations()
//         .then(getCustomers)
//         .then(getAnimals)
//     }, [])


//     return (
//       <>
//         <button
//           className="clickMe"
//           onClick={() => {
//             history.push("/animals/create");
//           }}
//         >
//           Add Animal
//         </button>
//         <div className="animals">
//           {animals.map((animal) => {
//             const owner = customers.find((c) => c.id === animal.customerId);
//             const location = locations.find((l) => l.id === animal.locationId);

//             return (
//               <AnimalCard
//                 key={animal.id}
//                 location={location}
//                 customer={owner}
//                 animal={animal}
//               />
//             );
//           })}
//         </div>
//       </>
//     );
// }

