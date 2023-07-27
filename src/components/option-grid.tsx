import React from "react";
import Image, { StaticImageData } from "next/image";

interface OptionGridProps {
  src: StaticImageData;
  title: string;
}

const OptionGrid: React.FC<OptionGridProps> = ({ src, title }) => {
  return (
    <div className="">
      <div className="relative h-64 overflow-hidden rounded-lg bg-gray-300 group">
        <Image
          src={src}
          alt={title}
          className="object-cover w-full h-full transform transition-all duration-300 group-hover:scale-110 brightness-75 group-hover:brightness-100 opacity-80 group-hover:opacity-100 group-hover:text-dark"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-gray-200 text-2xl font-bold group-hover:text-white">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default OptionGrid;
