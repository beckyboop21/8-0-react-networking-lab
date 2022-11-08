// import React from "react";
import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


export const EmployeeList = () => {
const [PetEmpl,setPetEmpl]=useState([])
  useEffect(()=>{
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees")
    .then((res)=>res.json())
    .then((res)=>setPetEmpl(res))
  },[])
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
       
       { PetEmpl.map((employee)=>{
        return <Employee employee={employee} />
       })

}
      </section>
    </main>
  );
};
export default EmployeeList;