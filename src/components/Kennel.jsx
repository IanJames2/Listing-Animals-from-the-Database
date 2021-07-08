import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)








// import React from 'react';
// import PropTypes from 'prop-types';

// export const Kennel = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// Kennel.propTypes = {};

// export default Kennel;

// import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
// import { EmployeesCard } from "./employees/EmployeesCard"
// import { LocationsCard } from "./locations/LocationsCard"
// import { CustomersCard } from "./customers/CustomersCard"
// import { PropsAndState } from "./PropsAndState/PropsAndState"


// //Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.
// export const Kennel = () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>

//         <h1><PropsAndState yourName="Ian"></PropsAndState></h1>

//         <h2>Animals</h2>
//         <article className="animals">
//             <AnimalCard />
//             <AnimalCard />
//             <AnimalCard />
//         </article>

//         <h2>Employees</h2>
//         <article className="employees">
//             <EmployeesCard />
//             <EmployeesCard />
//             <EmployeesCard />
//         </article>

//         <h2>Locations</h2>
//         <article className="locations">
//             <LocationsCard />
//             <LocationsCard />
//         </article>

//         <h2>Customers</h2>
//         <article className="cutomers">
//             <CustomersCard />
//             <CustomersCard />
//             <CustomersCard />
//             <CustomersCard />        
//         </article>
//     </>
// )
