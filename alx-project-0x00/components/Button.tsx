import React from "react";
import { ButtonProps } from "@/interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return <button>{title}</button>;
};

export default Button;
