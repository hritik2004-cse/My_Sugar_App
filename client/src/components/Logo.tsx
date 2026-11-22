import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <span className="flex items-center justify-start">
      <Image
        alt="icon"
        width={50}
        height={50}
        aria-label="logo icon"
        src="/icon.png"
        loading="eager"
        className="h-10 xl:h-12 w-auto"
        role="icon"
      />
      <h1 className="text-lg xl:text-xl font-bold capitalize">my sugar</h1>
    </span>
  );
};

export default Logo;
