import React from "react";

import Slider from "./../components/Slider";
import Card from "./../components/Card";
export default function Home() {
  return (
    <>
      <Slider />
      {/* This is my Home Page Component */}
      <div className="container">
        <Card />
      </div>
    </>
  );
}
