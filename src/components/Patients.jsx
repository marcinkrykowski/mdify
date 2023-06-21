import { useState } from 'react';
import patients from "../assets/patients.json"

export default function Patient() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown(true);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Your Patients</button>
      </div>
      {isShown && 
      <div>
        {patients.map((patient) => (
          <div key={patient.id}>
            <h3>{patient.name}</h3>
          </div>
        ))}
      </div>
    }
    </>
  );
}
