import { useState } from 'react';

export default function CheckList() {
  const [consent, setConsent] = useState(false);

  return (
    <>
      <div>
        <h1>Elective total hip replacement planned on:</h1>
        <p>25.05.2023</p>
      </div>
      <div>
        <form>
          <input
            type='checkbox'
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <label>Patient Consent</label>
        </form>
      </div>
    </>
  );
}
