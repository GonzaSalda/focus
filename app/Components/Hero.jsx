"use client";
import { motion, useScroll, useTransform } from "framer-motion";
//Components
import Header from "./Header";
import Button from "./Button";

export const Hero = () => {
  const { scrollY } = useScroll();

  const imgTopPosition = useTransform(scrollY, [0, 400], ["480px", "240px"]);
  const imgScale = useTransform(scrollY, [0, 200, 1300], [1, 1.4, 1]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const textDisplay = useTransform(scrollY, [0, 800], ["flex", "none"]);

  return (
    <section className="h-screen xl:h-[1600px] overflow-x-clip relative">
      <Header/>
      <div className="container mx-auto h-full flex items-center xl:items-start">
        {/* Texto */}
        <motion.div
          className="flex flex-col justify-center items-center gap-6 text-center fixed left-0 right-0 mt-24 xl:mt-[160px]"
          style={{ opacity: textOpacity, scale: textScale, display: textDisplay }}
        >
          <h1 className="text-[60px] font-bold tracking-[-0.5px] leading-none max-w-[800px] xl:max-w-max">
            Boost Your Productivity Instantly
          </h1>
          <p className="max-w-[600px] text-[20px] text-white/80 font-light px-8 xl:px-0 mb-2">
            StreamLine tasks and manage your time effortlessly with our
            powerful, intuitive, all in one productivity platform
          </p>
          <Button btnText="Get started"/>
        </motion.div>
        {/* Image */}
        <motion.div
          className="hidden lg:flex w-full max-w-[960px] mx-auto h-[520px] sticky left-0 right-0"
          style={{
            backgroundImage: "url('/hero/img.svg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            top: imgTopPosition,
            scale: imgScale,
          }}
        ></motion.div>
      </div>
    </section>
  );
};
