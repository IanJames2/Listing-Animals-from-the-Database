import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationProvider } from "./locations/LocationProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"



export const ApplicationViews = () => {
    return (
      <>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <Home />
        </Route>

        <AnimalProvider>
          <Route exact path="/animals">
            <AnimalList />
          </Route>
        </AnimalProvider>

        <CustomerProvider>
          <Route exact path="/customers">
            <CustomerList />
          </Route>
        </CustomerProvider>

        <EmployeeProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
        </EmployeeProvider>

        <LocationProvider>
          <Route exact path="/locations">
            <LocationList />
          </Route>
        </LocationProvider>
      </>
    );
}
