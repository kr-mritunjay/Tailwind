import React from "react";

const Body = () => {
  return (
    <div className="lg:flex lg:justify-end">
      <div className="flex items-center justify-center pt-16 md:pb-16 lg:flex-1 lg:order-2">
        <img
          src="./public/assets/Blue-Shape.svg"
          alt="1st"
          className="rotate-45 h-64 md:h-72  lg:h-[400px]"
        />
        <img
          src="./public/assets/Pink-Shape.svg"
          alt="2nd"
          className="absolute rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./public/assets/Purple-Shape.svg"
          alt="3rd"
          className="absolute rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./public/assets/Hero-Model.png"
          alt="hero"
          className="absolute h-64 md:h-72 lg:h-[400px] "
        />
      </div>
      <div className="lg:flex-1 lg:m-auto">
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          Host your Website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          quia inventore ea exercitationem quisquam facilis eum veritatis,
          reprehenderit cumque ratione molestiae? Animi illum quidem vero nulla
          doloribus accusamus. Rerum, et?
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row ">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2 pt-4">
          <img src="./assets/Checkmark.svg" alt="check" />
          <p className="font-lato text-gray-400">
            No Spam,ever Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
