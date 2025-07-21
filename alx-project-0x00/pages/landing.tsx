// import Button from "@/components/Button";
import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight sm:rounded-sm md:rounded-md lg:rounded-lg rounded-full">
        Landing Page
      </h1>
      <Card />
      <Card />
      <Card />
      <Button title="Rent" styles="null" />
    </div>
  );
};

export default Landing;
