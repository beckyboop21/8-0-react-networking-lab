import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";


export const Employee = ({employee}) => {

  const [showPetList,setShowPetList]=useState(false)
  let fullName= employee.prefix + " "+ employee.firstName + " " + employee.lastName + ", " + employee.postfix
  let title=employee.title

  return (
    <article className="employee">
      
      <h3>{fullName}</h3>
      <h4>{title}</h4>
      <button onClick={()=>setShowPetList(true)}>Show Pets</button>
      { showPetList && <PetList id={employee.id}/>}
    </article>
  );
};

export default Employee;