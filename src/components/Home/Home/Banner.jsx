import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="lg:h-[800px] p-12">
        <div className="flex gap-5 items-center lg:px-24  lg:py-56">
          <div>
            <img
              src="https://s.ndtvimg.com/images/entities/300/steven-smith-1053.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="uppercase text-3xl font-bold">
              Adriano <br /> smith
            </h2>
            <p>
              Creative Photographer based in New York and happy to travel all
              over Europe to capture photos.
            </p>
            <div className="flex gap-2 mt-4">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
