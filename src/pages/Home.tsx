import { useState, useEffect, FC } from "react";
import Navbar from "../components/header/Navbar";

import UploadFile from "../components/homePage/UploadFile";
import PhotosListing from "../components/homePage/PhotosListing";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAppSelector } from "../hooks/hooks";
import { db } from "../configuration/firebase/firebase";

const Home: FC = () => {
  const { userAuthenticated } = useAppSelector((state) => state.credentials);
  const [images, setImages] = useState<any>(null);

  useEffect(() => {
    if (userAuthenticated) {
      fetchData(userAuthenticated.uid);
    }
  }, []);
  const fetchData = async (id: string) => {
    //firebase database reference

    const imagesCollectionRef = collection(db, "images");

    const queryObject = query(
      imagesCollectionRef,
      where("userId", "==", `${id}`)
    );
    onSnapshot(queryObject, (snapshot) => {
      const imagesArr: any = [];
      snapshot.docs.forEach((doc) => {
        imagesArr.push({ ...doc.data() });
      });
      setImages(imagesArr);
      console.log(imagesArr);
      console.log(images);
    });
  };
  console.log(images);

  return (
    <div className="h-full">
      <UploadFile />
      <PhotosListing images={images} />
    </div>
  );
};

export default Home;
