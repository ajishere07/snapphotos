import React, { FC } from "react";

interface Props {
  images: any;
}
const PhotosListing: FC<Props> = ({ images }) => {
  console.log(images);

  return (
    <div className="w-full">
      <h1 className="my-4">All images</h1>
      <div className="border-black border-1 flex flex-wrap">
        {images.map((data: any, index: number) => (
          <div key={index} className="relative h-52 w-48">
            <img
              onClick={() => window.open(data.imageURL)}
              src={data.imageURL}
              className="peer w-full h-full object-contain mr-2 mb-2 hover:opacity-50  transition-opacity target:duration-75 "
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosListing;
