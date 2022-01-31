import { FC, useRef, useState } from "react";
import Loader from "../../assets/animations/Loader";
import { db, storage } from "../../configuration/firebase/firebase";
import { TrashIcon } from "@heroicons/react/solid";
import { deleteObject, ref } from "@firebase/storage";
import { deleteDoc, doc } from "@firebase/firestore";
import img from "../../assets/images/NoImagesIllustration.svg";
interface Props {
  images: any;
}
const PhotosListing: FC<Props> = ({ images }) => {
  const [loading, setLoading] = useState(true);

  const deleted = async (imageName: string, dataId: string) => {
    //deleting the image file from storage
    const imgRef = ref(storage, `images/${imageName}`);

    deleteObject(imgRef)
      .then(() => {
        alert("file deleted");
      })
      .catch((e) => {
        console.log("error", e);
      });
    //deleting the download link of the image file from the firestore
    const imgDataRef = doc(db, "/images", dataId);
    const res = await deleteDoc(imgDataRef);
  };
  console.log(images);
  if (!images?.length)
    return (
      <div className="w-full h-64 my-2 flex justify-center items-center">
        <div>
          <img src={img} alt="No Data" className="h-48 w-48 object-contain" />
          <h1 className=" font-serif text-center font-extrabold opacity-40 text-3xl">
            No Images
          </h1>
        </div>
      </div>
    );
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
                className=" cursor-pointer peer w-full h-full object-contain mr-2 mb-2 hover:opacity-50  transition-opacity target:duration-75 hover:border-2 border-black"
                alt="img"
              />
              <TrashIcon
                className="absolute bottom-1 hidden right-1 w-6 h-6 hover:block hover:scale-150 text-secondaryDark peer-hover:block cursor-pointer transition-all ease-out"
                onClick={() => deleted(data.imageName, data.id)}
              />
              {loading && (
                <div className="w-full h-full flex justify-center items-center cursor-pointer">
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
