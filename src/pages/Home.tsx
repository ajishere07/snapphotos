import React, { useState, useEffect, FC } from "react";
import Navbar from "../components/header/Navbar";
import spiderman from "../assets/DemoData/spiderman.jpg";
import dog from "../assets/DemoData/dog.jpg";
import wallpaper from "../assets/DemoData/wallpaper.jpg";
import UploadFile from "../components/homePage/UploadFile";
import PhotosListing from "../components/homePage/PhotosListing";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAppSelector } from "../hooks/hooks";
import { db } from "../configuration/firebase/firebase";

const Home: FC = () => {
  const { userAuthenticated } = useAppSelector((state) => state.credentials);
  const [images, setImages] = useState<any>([]);

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
  // const fetchNotes = async (id) => {
  //   //firebase database reference

  //   const notesCollectionRef = collection(db, "notes");

  //   const queryObject = query(
  //     notesCollectionRef,
  //     where("userId", "==", `${id}`)
  //   );
  //   onSnapshot(queryObject, (snapshot) => {
  //     let notes = [];
  //     snapshot.docs.forEach((doc) => {
  //       notes.push({ ...doc.data(), id: doc.id });
  //     });
  //     setNotes(notes);
  //   });
  // };
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl min-h-screen grid grid-rows-2 mx-auto">
        {/* <div className="my-4 rounded-lg bg-slate-200 flex justify-center items-center w-full hover:bg-slate-300 transition-all ease-out group">
          <div className="">
            <PlusIcon className="w-12 mx-auto text-slate-400 group-hover:rotate-180 transition-transform target:duration-150" />
            <label className="text-center text-slate-400">Upload a photo</label>
            <input type="file"></input>
          </div>
        </div> */}
        <UploadFile />

        <PhotosListing images={images} />
      </main>
    </div>
  );
};

export default Home;
