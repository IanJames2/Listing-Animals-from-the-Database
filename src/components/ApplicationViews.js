import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeesCard } from "./employees/EmployeesCard"
import { LocationsCard } from "./locations/LocationsCard"
import { CustomersCard } from "./customers/CustomersCard"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>

            <Route path="/locations">
                <LocationsCard />
            </Route>

            <Route path="/customers">
                <CustomersCard />
            </Route>

            <Route path="/employees">
                <EmployeesCard />
            </Route>
        </>
    )
}
