import React from 'react';
import "./Employees.css"


export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">Emma Beaton</h3>
        <div className="employee__location">{employee.location.name}</div>
    </section>
    )

