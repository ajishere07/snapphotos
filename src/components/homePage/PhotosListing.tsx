import { FC, useRef, useState } from "react";

import Loader from "../../assets/animations/Loader";
import LoadingImage from "../../assets/animations/loadingIcon.png";
interface Props {
  images: any;
}
const PhotosListing: FC<Props> = ({ images }) => {
  const [loading, setLoading] = useState(true);

  console.log(images);

  return (
    <div className="w-full">
      <h1 className="my-4">All images</h1>

      {images ? (
        <div className="border-black border-1 grid sm:grid-cols-2 gap-2 grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
          {images.map((data: any, index: number) => (
            <div
              key={index}
              className="relative md:h-52 md:w-48 h-32 w-36 mx-auto"
            >
              <img
                onClick={() => window.open(data.imageURL)}
                src={data.imageURL}
                onLoad={() => {
                  setLoading(false);
                }}
                style={{ display: loading ? "none" : "block" }}
                className="peer w-full h-full object-contain mr-2 mb-2 hover:opacity-50  transition-opacity target:duration-75 hover:border-2 border-black"
                alt="img"
              />

              {loading && (
                <div className="w-full h-full flex justify-center items-center">
                  <div
                    className="
    spinner-border
    animate-spin
    inline-block
    w-8
    h-8
    border-4
    rounded-full
    text-brand
  "
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-64 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default PhotosListing;
