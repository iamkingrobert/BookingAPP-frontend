import { Link } from "react-router-dom";
import relax from "../assets/Relax.avif";

export default function Hotel() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[600px]">
          <img src={relax} className="h-[700px] w-[700px] object-contain " />
        </div>

        {/* Description Container */}
        <div className="w-[600px] ml-8">
          <h1 className="text-[40px] font-semibold">PRESIDENTIAL SUITES</h1>
          <p className="text-[16px] font-normal pt-1">
            Welcome to African Star, where luxury meets the heart of Africa.
            Nestled amidst the enchanting landscapes of this vibrant continent,
            our 5-star hotel beckons discerning travelers seeking an
            unforgettable experience. From the moment you arrive, you wll be
            captivated by our blend of modern elegance and African charm. Our
            impeccable service, world-class amenities, and stunning surroundings
            promise to make your stay truly exceptional. Whether you are here
            for business or leisure, African Star is your gateway to a world of
            comfort, culture, and adventure. Discover the warmth of African
            hospitality like never before at African Star.
          </p>
          <p className="pt-2 text-[20px] text-gray-600">OUR VISION</p>
          <p className="text-[14px] text-gray-600">
            We are redefining luxury with African culture. Immersive
            experiences, sustainability, and unrivaled service. Your premier
            African destination.
          </p>

          <Link to={"/account/places/"}>
            <div className="bg-black mt-[15px] w-[140px] custom-radius  cursor-pointer">
              <p className="text-white p-4 text-center">see our listing</p>
            </div>
          </Link>
        </div>
      </div>
      <div className=" self-center mb-2">
        <p className="text-gray-600 text-center">
          © 2023 King Robert Kehinde. All Right Reserved
        </p>
      </div>

      {/* </div> */}
    </>
  );
}
