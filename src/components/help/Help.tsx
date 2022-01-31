import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import img1 from "../../assets/helpGuideImages/plusContainer.png";
import img2 from "../../assets/helpGuideImages/deletionguide.png";
import img3 from "../../assets/helpGuideImages/ImgDownload.png";
const Help = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* <Modal ref={toggleModale} showModal={showModal} /> */}
      <div
        className={`${
          showModal ? `flex` : `hidden`
        } overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
      id="large-modal my-4 `}
      >
        <div className="relative px-4 w-full max-w-4xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Guide
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="large-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setShowModal(false)}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6 overflow-y-scroll h-80">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                How to upload image file
                <br />
                Click to the '+' icon &#38; select image from your device
              </p>

              <img
                src={img1}
                alt="img"
                className="w-full h-28 object-contain"
              />
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Save your images in your device,
                <br /> 1. click on the image you'll redirect to the image link.
                <br />
                2. right click on the image select SAVE IMAGE AS
              </p>
              <img
                src={img3}
                alt="img"
                className="w-full h-52 object-contain"
              />
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Delete from cloud,
                <br /> By clicking on that trash icon
              </p>
              <img
                src={img2}
                alt="img"
                className="w-full h-52 object-contain"
              />
            </div>
            {/* <!-- Modal footer --> */}
            {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="large-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="large-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
              >
                Decline
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <button
        className="rounded-lg fixed bottom-2  right-2 lg:bottom-12 lg:right-12 shadow-md"
        onClick={() => setShowModal(true)}
      >
        <QuestionMarkCircleIcon className="w-10 h-10" />
      </button>
    </>
  );
};

export default Help;
