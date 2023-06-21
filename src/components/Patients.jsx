import { useState } from 'react';

export default function Patient() {
  const [isShown, setIsShown] = useState(false);

  const patients = [
    {
      name: 'Morpheus',
      id: '199',
      createdAt: '2020-02-20T11:00:28.107Z',
      contactdetails: {
        phone: '8439743294793',
        email: 'test@abc.com',
      },
    },
    {
      name: 'MorpheusII',
      id: '200',
      createdAt: '2020-02-20T11:00:28.107Z',
      contactdetails: {
        phone: '8439743294793',
        email: 'test@abc.com',
      },
    },
  ];

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
