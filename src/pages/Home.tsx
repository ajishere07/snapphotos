import { useState, useEffect, FC } from "react";

import UploadFile from "../components/homePage/UploadFile";
import PhotosListing from "../components/homePage/PhotosListing";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import { db } from "../configuration/firebase/firebase";
interface auth {
  userCre: any;
}
const Home: FC<auth> = ({ userCre }) => {
  const [images, setImages] = useState<any>(null);

  useEffect(() => {
    if (userCre) {
      fetchData(userCre.uid);
    }
  }, [userCre]);
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
    });
  };

  return (
    <div className="h-full">
      <UploadFile userAuth={userCre} />
      <PhotosListing images={images} />
    </div>
  );
};

export default Home;
