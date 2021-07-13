import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationProvider } from "./locations/LocationProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"



export const ApplicationViews = () => {
    return (
      <>
        <Route exact path="/">
          <Home />
        </Route>

        <AnimalProvider>
          <Route exact path="/animals">
            <AnimalList />
          </Route>

          <LocationProvider>
            <CustomerProvider>
              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>
            </CustomerProvider>
          </LocationProvider>
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
