import React, { useState, useRef, useEffect } from 'react';

const ContactForm = () => {
  // State for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  // Reference to the iframe
  const iframeRef = useRef(null);

  // Effect to listen for the iframe load event
  useEffect(() => {
    const iframe = iframeRef.current;

    const handleIframeLoad = () => {
      alert('Form submitted successfully!');
      // Clear the form fields after successful submission
      setName('');
      setEmail('');
      setDescription('');
    };

    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <div className="sm:w-5/5 lg:w-2/5 mg:w-2/5 mx-auto p-6 bg-slate-700 shadow-md rounded-lg">
      <h3>Let's Talk</h3>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxstC0l-ih8mQZi1NXV-yKLigbU2_310NFuNFxPuL-eZEs_g/formResponse"
        method="POST"
        id="mG61Hd"
        target="iframe" // Ensure that the form submits to the hidden iframe
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-400">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="entry.622841713"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border bg-slate-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="entry.1005701677"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border bg-slate-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-400">
            Message *
          </label>
          <textarea
            id="description"
            name="entry.1530938541"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 text-black block w-full px-3 py-2 border bg-slate-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            value="Submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              setName('');
              setEmail('');
              setDescription('');
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Clear form
          </button>
        </div>
      </form>
      <iframe
        name="iframe"
        title='test'
        style={{ position: 'absolute', visibility: 'hidden' }}
        ref={iframeRef} // Reference to the iframe element
      ></iframe>
    </div>
  );
};

export default ContactForm;
