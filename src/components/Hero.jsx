import React, { useRef } from "react";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
const Hero = () => {

    const parallaxRef = useRef(null)
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative text-center  max-w-[62rem] mx-auto mb-[3.875rem] md:mb-20 lg:mb-[6rem] z-1">
          <h1 className="h1 mb-6">
            Explore the Possiblities of&nbsp;AI&nbsp; Chatting with
            <span className="inline-block relative">
              BrainWave
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {" "}
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="rounded-xl z-1 p-0.5 bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] z-1">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="Robot"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                />
                <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] p-1  bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                        {heroIcons.map((item,index)=>(
                            <li key={index} className="p-5">
                                <img src={item} alt="item"
                                width={24}
                                height={25} />
                            </li>
                        ))}
                    </ul>
                </ScrollParallax>
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] ">
            <img
              src={heroBackground}
              alt="Hero"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
