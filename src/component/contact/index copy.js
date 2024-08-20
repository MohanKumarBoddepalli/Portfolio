import React, { useState } from 'react';

const ContactForm = () => {
  // State for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('clicked submit');
    console.log({ name, email, description });

    // Clear the form fields
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    <form
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxstC0l-ih8mQZi1NXV-yKLigbU2_310NFuNFxPuL-eZEs_g/formResponse"
      target="_self"
      method="POST"
      id="mG61Hd"
    //   onSubmit={handleSubmit}
    >
      <div>
        <div>
          <div>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="entry.622841713"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="entry.1005701677"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="entry.1530938541"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div>
        <button type="submit" value="Submit">Submit</button>
        <button 
          type="button" 
          onClick={() => {
            setName('');
            setEmail('');
            setDescription('');
          }}
        >
          Clear form
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
