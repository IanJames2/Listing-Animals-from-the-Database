import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <address className="location__address">{location.name}</address>
        <customer className="customer__name">{customer.name}</customer>
    </section>
)
