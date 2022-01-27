import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import {
  getDownloadURL,
  ref as sRef,
  uploadBytes,
  uploadBytesResumable,
} from "@firebase/storage";
import { db, storage } from "../../configuration/firebase/firebase";
import Button from "../authentications/Button";
import { XCircleIcon } from "@heroicons/react/solid";
import {
  collection,
  doc,
  setDoc,
  Timestamp,
  addDoc,
} from "@firebase/firestore";
import { useAppSelector } from "../../hooks/hooks";
const UploadFile = () => {
  const { userAuthenticated } = useAppSelector((state) => state.credentials);
  const [fileAsURL, setFileAsURL] = useState<any | null>();
  const [fileAsImage, setFileAsImage] = useState<any>();

  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const storeFile = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      setProgress(0);
      // console.log(e.target.files[0]);
      setFileAsImage(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
        setFileAsURL(readerEvent?.target?.result);
      };
    }
  };
  console.log(progress);
  const uploadFile = () => {
    if (!fileAsImage) return;
    try {
      setLoading(true);
      // console.log(fileAsImage);
      const storageRef = sRef(storage, `/images/${fileAsImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, fileAsImage);

      console.log(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progressVal = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressVal);
          if (progressVal === 100) {
            setFileAsImage(null);
            setLoading(false);
          }
        },
        (err) => {
          alert("Image not uploaded");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            saveURLToFirebase(downloadURL);
          });
        }
      );

      // setProgress(progressValue);
    } catch (e) {
      console.log(e);
    }
  };
  const saveURLToFirebase = async (url: string) => {
    console.log("start");
    await addDoc(collection(db, "images"), {
      userId: userAuthenticated.uid,
      imageName: fileAsImage.name,
      imageURL: url,
      uploadedAt: Timestamp.fromDate(new Date()),
    });
    console.log("done");
  };
  // useEffect(() => {
  //   uploadFile();
  // }, [file]);

  return (
    <div className="my-4 rounded-lg bg-slate-200 flex justify-center items-center w-full hover:bg-slate-300 transition-all ease-out group">
      <div className="relative ">
        {!fileAsImage ? (
          <>
            <PlusIcon className="w-12 mx-auto text-slate-400 group-hover:rotate-180 transition-transform target:duration-150" />
            <label className="text-center text-slate-400">Upload a photo</label>
            <input
              type="file"
              className="absolute left-0 top-0 h-full w-full overflow-hidden opacity-0"
              onChange={storeFile}
            ></input>
          </>
        ) : (
          <div className=" max-w-xl grid grid-cols-1 ">
            <img
              src={fileAsURL}
              className="w-32 h-32 object-contain"
              alt="img"
            />
            <div className="">
              {loading && <h1>Upload {progress}%</h1>}
              <div className="flex items-center ">
                <Button
                  fun={uploadFile}
                  buttonName={loading ? `Uploading...` : `Upload`}
                />
                <XCircleIcon
                  className="text-red-500 w-16 h-16"
                  onClick={() => setFileAsImage(null)}
                ></XCircleIcon>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
