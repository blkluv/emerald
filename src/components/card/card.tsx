import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface CardProps {
    key : string;
    id : number;
    name : string;
    description : string;
    imageUrl : string;
    price : number;
    contractAddress : string;
}

const Card : React.FC<CardProps> = ({ key, id, name, description, imageUrl, price, contractAddress }) => {
  

  return (
    <div className="" id={key}>
        <Link href={`nft-details/${contractAddress}/${id}`}>
            <div className="relative h-64 overflow-hidden rounded-lg bg-gray-300 group">
            <img
               
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-full transform transition-all duration-300 group-hover:scale-110 brightness-75 group-hover:brightness-100 opacity-80 group-hover:opacity-100 group-hover:text-dark"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-gray-200 text-2xl font-bold group-hover:text-white
                
                capitalize">{name}</h2>
            </div>
            </div>
        </Link>
  </div>
  );
};

export default Card;
