// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import heroimg from "/heroimg.png";
import tick from "/tick.png";
import hero from "/new_hero.png";

function Hero() {
  return (
    <main className="w-full h-[92vh] bg-light_blue">
      <section className="h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center px-3 md:px-6 lg:px-8 gap-y-6">
        {/* text container */}
        <section className="flex flex-col items-center text-center lg:text-left lg:items-start justify-center gap-y-12 order-2 lg:order-1">
          <div className="space-y-4 flex items-center flex-col lg:block">
            {/* heading */}
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-dark_theme tracking-tight">
              Always caring about your
              <span className="text-primary ml-4">health</span>
            </h1>

            {/* para */}
            <p className="text-text_gray md:max-w-md">
              Microcare brings together all your healthcare needs in one place—book doctor appointments and buy medical essentials with ease.
            </p>
          </div>

          {/* ctas */}
          <div className="space-y-4">
            <NavLink
              to={"/alldoctors"}
              className="  rounded flex  items-center px-3 md:px-4 py-3 md:py-4 text-md shadow-md hover:shadow-lg bg-primary hover:bg-accent text-black gap-2 md:gap-4"
            >
              <img
                src="https://images.apollo247.in/images/ic-doctor.svg"
                alt="icon"
                className="hidden md:block md:size-7 size-5"
              />
              Book Your Appointment Now
            </NavLink>
            <NavLink
              to={"/medicines/all"}
              className="rounded flex w-fit items-center px-3 md:px-4 py-3 md:py-4 text-md shadow-md hover:shadow-lg bg-primary hover:bg-accent text-black gap-2 md:gap-4"
            >
              <img
                src="https://www.svgrepo.com/download/88732/medicines.svg"
                alt="icon"
                className="hidden md:block md:size-7 size-5"
              />
              Medication
            </NavLink>
          </div>
        </section>

        {/* image section */}
        <section className="relative md:w-[400px] lg:w-full order-1 lg:order-2">
          {/* image container */}
          <div className="w-full h-full">
            <img
              src={heroimg}
              alt="heroImage"
              className="object-cover object-center"
            />
          </div>

          {/* Medical achievements card */}
          <div className="hidden absolute top-[4%] left-[-11%] bg-primary/10 backdrop-filter backdrop-blur-md shadow-md border border-primary/50 rounded-md px-4 py-4 lg:flex items-center gap-3 text-primary">
            <img src={tick} alt="tick" />
            <p className="font-semibold">20+ Medical Achievements</p>
          </div>
          {/* Experienced doctors card */}
          <div className="hidden absolute top-[40%] right-[-24%] bg-primary/10 backdrop-filter backdrop-blur-md shadow-md border border-primary/50 rounded-md px-4 py-4 lg:flex items-center gap-3 text-primary">
            <img src={tick} alt="tick" />
            <p className="font-semibold">50+ Experienced Doctors</p>
          </div>

          {/* Doctor card */}
          <div className="hidden absolute bottom-[-20%] left-[-16%] bg-primary/10 backdrop-filter backdrop-blur-md shadow-md border border-primary/50 rounded-md px-4 py-3 lg:flex flex-col items-center gap-3 text-primary">
            {/* image div */}
            <div className="flex items-center gap-4">
              <img
                src={hero}
                alt="hero"
                className="w-14 h-14 px-1 py-1 object-cover bg-primary/70 backdrop-blur-md rounded-full border border-primary"
              />
              
            </div>
            <p className="font-semibold text-center">Make Appointment</p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Hero;
