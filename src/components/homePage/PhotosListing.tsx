import React, { FC } from "react";
import spiderman from "../../assets/DemoData/spiderman.jpg";
import dog from "../../assets/DemoData/dog.jpg";
import wallpaper from "../../assets/DemoData/wallpaper.jpg";
import { Navigate, useNavigate } from "react-router";

interface Props {
  images: any;
}
const PhotosListing: FC<Props> = ({ images }) => {
  const navigate = useNavigate();
  console.log(images);

  return (
    <div className="w-full">
      <h1 className="my-4">All images</h1>
      <div className="border-black border-1 flex flex-wrap">
        {/* <img
          src={spiderman}
          className="h-60 w-50 object-contain mr-2 mb-2 hover:opacity-50 transition-opacity target:duration-75"
          alt="img"
        />
        <img
          src={dog}
          className="h-60 w-50 object-contain mr-2 mb-2 hover:opacity-50 transition-opacity target:duration-75"
          alt="img"
        />
        <img
          src={wallpaper}
          className="h-60 w-50 object-contain mr-2 mb-2 hover:opacity-50 transition-opacity target:duration-150"
          alt="img"
        /> */}
        {images.map((data: any, index: number) => (
          <div key={index} className="relative h-52 w-48">
            <img
              onClick={() => window.open(data.imageURL)}
              src={data.imageURL}
              className="peer w-full h-full object-contain mr-2 mb-2 hover:opacity-50  transition-opacity target:duration-75 "
              alt="img"
            />
            {/* <div className="absolute hidden bottom-0 text-sm peer-hover:block hover:block ">
              <button
                className="rounded-xl opacity-50 bg-black text-white p-1 m-1 block border-2 border-white"
                onClick={() => window.open(data.imageURL)}
              >
                Save in device
              </button> */}
            {/* <button className="rounded-xl opacity-50 bg-black text-white p-1 m-1 block border-2 border-white">
                Delete From Cloud
              </button> */}
            {/* </div> */}
          </div>
        ))}
        {/* <img
          src={dog}
          className="h-60 w-50 object-contain mr-2 mb-2 hover:opacity-50 transition-opacity target:duration-75"
          alt="img"
        /> */}
      </div>
    </div>
  );
};

export default PhotosListing;
