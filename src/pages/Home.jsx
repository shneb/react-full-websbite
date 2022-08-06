import React from "react";
import { Brand, CTA } from "../components";
import { Blog, Features, Header, Possibility, WhatGPT3 } from "../containers";

const Home = () => {
  return (
    <>
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </>
  );
};

export default Home;
