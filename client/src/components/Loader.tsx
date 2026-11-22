import { LoaderProps } from "@/types/loader.types";
import React from "react";
import { LuLoaderCircle } from "react-icons/lu";

const sizeStyle = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

const Loader = ({ size = "sm" }: LoaderProps) => {
  return (
    <LuLoaderCircle
      className={`${sizeStyle[size]} text-foreground animate-spin`}
    />
  );
};

export default Loader;
