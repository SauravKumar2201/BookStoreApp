import React from "react";
import banner from "../../public/image.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to Your Ultimate Book Haven!
              <span className="text-pink-500"> Discover and Learn Every Day!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Our unique platform offers a selection of both free and paid books to cater to your reading needs. Enjoy the freedom to discover new authors, delve into insightful non-fiction, or lose yourself in gripping novels, all while staying within your budget.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/course" className="btn mt-4 md:mt-0 btn-secondary w-full md:w-auto">
                Premium Books
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Book Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
