const About = () => {
  return (
    <div className="p-12">
      <img
        src="https://static.toiimg.com/thumb/msid-99068187,width-1280,resizemode-4/99068187.jpg"
        alt=""
      />
      <div className="grid lg:grid-cols-2 ">
        <div className="">
          <h2 className="text-2xl font-semibold my-5">
            Adriano Smith & Photographer
          </h2>
          <p>
            Hello, I am a creative photographer based in New York and happy to
            travel all over Europe to capture your big day in candid and
            authentic photos. I will create a lasting memory of the people.
          </p>
          <button className="btn btn-neutral my-5">Read More</button>
        </div>
        <div className="mt-8">
          <h3 className=" font-semibold">
            Birthday: <small>01.07.1990</small>
          </h3>
          <h3 className=" font-semibold">
            Age: <small>31</small>
          </h3>
          <h3 className=" font-semibold">
            Address: <small>Ave 11, New York, USA</small>
          </h3>
          <h3 className=" font-semibold">
            Email: <small>mail@gmail.com</small>
          </h3>
          <h3 className=" font-semibold">
            Phone: <small>+77 022 177 05 05</small>
          </h3>
          <h3 className=" font-semibold">
            Study: <small>Univercity of Texas</small>
          </h3>
          <h3 className=" font-semibold">
            Freelance: <small>Available</small>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
