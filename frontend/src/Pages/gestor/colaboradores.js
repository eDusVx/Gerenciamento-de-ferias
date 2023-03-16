import React, { useState } from "react";

export const Colaboradores = ()  => {
  const [filter, setFilter] = useState("");
  const handleFilterChange = (event) => setFilter(event.target.value.toUpperCase());

  const customers = [
    { name: "Alfreds Futterkiste", dish: "fish_1" },
    { name: "Berglunds snabbkop", dish: "fish_12" },
    { name: "Island Trading", dish: "chicken_1" },
    { name: "Koniglich Essen", dish: "chicken_12" },
    { name: "Laughing Bacchus Winecellars", dish: "fish_123" },
    { name: "Magazzini Alimentari Riuniti", dish: "chicken_123" },
    { name: "North/South", dish: "fish" },
    { name: "Paris specialites", dish: "chicken" },
  ];

  return (
    <>
      <h2>My Customers</h2>
      <select className="lista" id="mylist" onChange={handleFilterChange}>
        <option value="">ALL</option>
        <option value="fish_1">fish_1</option>
        <option value="fish_12">fish_12</option>
        <option value="chicken_1">chicken_1</option>
        <option value="chicken_12">chicken_12</option>
        <option value="fish_123">fish_123</option>
        <option value="chicken_123">chicken_123</option>
        <option value="fish">fish</option>
        <option value="chicken">chicken</option>
        <option value="c">c</option>
      </select>
      <div className="minhadiv">
      <table className="table" id="myTable">
        <thead>
          <tr>
            <th style={{ width: "60%" }}>Name</th>
            <th style={{ width: "40%" }}>dish</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className={filter && customer.dish.toUpperCase() !== filter ? "hide" : ""}>
              <td>{customer.name}</td>
              <td>{customer.dish}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  )
}