import React, { useState } from 'react';

// basic form to enter name, email and phone

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [email, setPhone] = useState('');

  const submitForm = (event) => {
    // prevent browser default action of event from occurring
    event.preventDefault();
    // TODO send form data via API call here
    console.log("Name:", name, "Email:", email, "Phone:", phone);
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
