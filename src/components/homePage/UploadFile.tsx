import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import {
  getDownloadURL,
  ref as sRef,
  uploadBytesResumable,
} from "@firebase/storage";
import { db, storage } from "../../configuration/firebase/firebase";
import Button from "../authentications/Button";
import { XCircleIcon } from "@heroicons/react/solid";
import { collection, Timestamp, addDoc } from "@firebase/firestore";
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

      const storageRef = sRef(storage, `/images/${fileAsImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, fileAsImage);

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

  return (
    <div className="my-4 rounded-lg bg-slate-200 flex justify-center items-center w-full hover:bg-slate-300 transition-all ease-out group h-64">
      {!fileAsImage ? (
        <div className="relative">
          <PlusIcon className="w-12 mx-auto text-slate-400 group-hover:rotate-180 transition-transform target:duration-150" />
          <label className="text-center text-slate-400">Upload a photo</label>
          <input
            type="file"
            className="absolute left-0 top-0 h-full w-full overflow-hidden opacity-0"
            onChange={storeFile}
          />
        </div>
      ) : (
        <div className="w-3/5 md:w-2/5 h-full ">
          <img
            src={fileAsURL}
            className="w-full h-4/6 object-contain"
            alt="img"
          />
          <div className="">
            {loading && (
              <h1 className="text-center text-md">Upload {progress}%</h1>
            )}
            <div className="flex items-center font-semibold">
              <Button
                fun={uploadFile}
                buttonName={loading ? `Uploading...` : `Upload`}
              />
              <XCircleIcon
                className="text-red-500 w-16 h-16 cursor-pointer hover:text-red-600"
                onClick={() => setFileAsImage(null)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
