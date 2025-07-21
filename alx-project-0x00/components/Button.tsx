import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className="sm:rounded-sm md:rounded-md lg:rounded-full">
      {title}
    </button>
  );
};

export default Button;
