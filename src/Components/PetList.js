import { useEffect, useState } from "react";

export const PetList = ({ id }) => {
  const [emplPets, setEmplPets] = useState([]);

  useEffect(() => {
    fetch(
      `https://vet-resource-api-9-2.herokuapp.com/api/pets?employeeId=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setEmplPets(res);
        console.log(res);
      });
  }, [id]);

  return (
    <aside className="pets-list">
      
      {emplPets.length ? (
        emplPets.map((pet) => <p>{pet.name}</p>)
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};
export default PetList;