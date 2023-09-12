import Luxury from "../assets/Hotel.png";
import "./HomeHero.css";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";

export default function HomeHero() {
  return (
    <>
      <div className="flex justify-center mt-[80px]">
        {/* Left Side Of Hero Section  */}
        <div className="mr-4 mt-9">
          <AnimatedTextWord text="5-STAR HOTELS" />
          <div className="w-[600px] ml-[35px] ">
            <p className="text-[16px]">
              Dream more, pay less with AFRICAN STAR, travel to ideal
              destinations like Cape Town, Lagos, Marrakech, Accra, Cairo and
              many more at a great price with this special offer. As a member of
              AFRICAN STAR, you’ll be recognized and rewarded across the Africa
              collection of luxury hotels of Global Hotel Alliance. We offer
              recognition from Day One — so our benefits, DISCOVERY Dollars,
              Experiences and Live Local are available to you instantly, at all
              membership tiers at any of our properties, at home or away, with
              or without a stay.
            </p>

            <p className="text-[16px] pt-4">
              Our philosophy is based on the principle that your professional,
              residential and social needs while traveling can be provided in a
              single location. Our hotels and serviced suites utilizes advanced
              engineering technology to form the cubicle design with each unit
              fitting neatly into the cantilevers above it to form the pod-like
              framework of the iconic structure.
            </p>
            <div className="mt-1">
              <h1 className="text-[16px] font-mono letter">
                Discover Adventure Luxury
              </h1>
            </div>

            <div className="bg-black mt-7 w-[140px] custom-radius ml-[265px] cursor-pointer">
              <p className="text-white p-4 text-center">about us</p>
            </div>
          </div>
        </div>

        <div className=" w-[20px]"></div>

        {/* Right Side Of Hero Section  */}
        <motion.div
          animate={{
            x: 0,
            y: 1,
            scale: 1,
            rotate: -9,
            transition: { duration: 1, delay: 1 },
          }}
          className="image-container object-cover mt-9"
        >
          <img src={Luxury} className="h-[500px]" />
        </motion.div>
      </div>
      <div className="flex justify-between items-center mt-[145px] bounce">
        <div className="bg-black rounded-full h-[10px] w-[10px] "></div>
        <div className="bg-black rounded-full h-[10px] w-[10px] "></div>
        <div className="bg-black rounded-full h-[10px] w-[10px] "></div>
        <div className="bg-black rounded-full h-[10px] w-[10px] "></div>
        <div className="bg-black rounded-full h-[10px] w-[10px] "></div>
      </div>
    </>
  );
}
