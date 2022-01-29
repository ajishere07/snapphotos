import React, { FC } from "react";

interface Props {
  images: any;
}
const PhotosListing: FC<Props> = ({ images }) => {
  console.log(images);

  return (
    <div className="w-full">
      <h1 className="my-4">All images</h1>
      <div className="border-black border-1 grid sm:grid-cols-2 gap-2 grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
        {images.map((data: any, index: number) => (
          <div
            key={index}
            className="relative md:h-52 md:w-48 h-32  w-36 mx-auto"
          >
            <img
              onClick={() => window.open(data.imageURL)}
              src={data.imageURL}
              className=" peer w-full h-full object-contain mr-2 mb-2 hover:opacity-50  transition-opacity target:duration-75 hover:border-2 border-black"
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosListing;
