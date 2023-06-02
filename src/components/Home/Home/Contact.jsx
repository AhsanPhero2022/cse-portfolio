const Contact = () => {
  return (
    <div className="ms-8 lg:py-32">
      <button className="btn btn-ghost bg-gray-400 my-8">Contact</button>
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <div className="mt-3 ">
        <label htmlFor="name">Name: </label>
        <input
          className="block w-1/2 px-2 py-2 rounded"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="mt-3 ">
        <label htmlFor="email">Email:</label>
        <input
          className="block w-1/2 px-2 py-2 rounded"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mt-3 mb-5">
        <label htmlFor="message">Message:</label>
        <textarea
          className="block w-1/2 px-2 py-2 rounded"
          id="message"
          name="message"
          required
        ></textarea>
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </div>
  );
};

export default Contact;
