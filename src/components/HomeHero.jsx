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
            <div className="mt-1">
              <h1 className="text-[18px] font-mono">
                discover adventure and luxury.
              </h1>
            </div>
            <motion.div
              animate={{
                x: 0,
                y: 1,
                scale: 1,
                rotate: -9,
                transition: { duration: 1, delay: 1 },
              }}
              className="flex justify-between mt-6"
            >
              <div className="bg-black rounded-full h-[20px] w-[20px] "></div>
              <div className="bg-black rounded-full h-[20px] w-[20px] "></div>
              <div className="bg-black rounded-full h-[20px] w-[20px] "></div>
              <div className="bg-black rounded-full h-[20px] w-[20px] "></div>
              <div className="bg-black rounded-full h-[20px] w-[20px] "></div>
            </motion.div>
          </div>
          <div className="bg-black mt-7 w-[140px] custom-radius ml-[265px] cursor-pointer">
            <p className="text-white p-4 text-center">about us</p>
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

      <div className=" self-center mt-[200px]">
        <h2 className="text-[30px] text-center">Book Hotel</h2>
      </div>
    </>
  );
}
