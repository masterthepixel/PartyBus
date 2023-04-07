// components/MasonryLayout.js
import React from 'react';
import Image from 'next/image';

const MasonryLayout = ({ items }) => {
  return (
    <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-6 grid-cols-8 grid-cols-10 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? 'row-span-2' : 'col-span-2'
          } p-4 bg-blue-500`}
        >
          <div className="h-full p-4 bg-white">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h2 className="mb-2 text-lg font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
