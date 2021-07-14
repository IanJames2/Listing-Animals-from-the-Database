import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { useHistory } from 'react-router-dom';
import "./Employees.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()

  }, [])

  return (
    <>
      <h2>Employees</h2>
      <button
        className="clickMe"
        onClick={() => {
          history.push("/employees/create");
        }}
      >
        Add Employee
      </button>

      <div className="employees">
        {employees.map((employee) => {
          return (
            <EmployeeCard key={employee.id} employee={employee} />
          );
        })}
      </div>
    </>
  );
}

