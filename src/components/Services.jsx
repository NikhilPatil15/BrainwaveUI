import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1 } from "../assets";
import { brainwaveServices } from "../constants";
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="mb-8 text-n-4">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex gap-4 border-y border-n-1/10 p-4"
                  >
                    <img src={check} alt="check" />
                    <p>{service}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className=" absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;