import React, { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import { getUserImage } from "../actions";

const UploadPhoto = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const storage = getStorage();
  const name = localStorage.getItem("userId");
  const storageRef = ref(storage, name);
  const uploadPhoto = (pic) => {
    uploadBytes(storageRef, pic).then((snapshot) => {});
  };

  return (
    <div>
      <p>Upload your photo</p>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
        </div>
      )}

      <input
        type="file"
        name="img"
        onChange={(e) => {
          setSelectedImage(e.target.files[0]);
          uploadPhoto(e.target.files[0]);
          dispatch(getUserImage());
        }}
      />
    </div>
  );
};

export default UploadPhoto;