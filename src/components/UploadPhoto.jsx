import React, { useState } from "react";
import { getStorage, ref,uploadBytes } from "firebase/storage";


const UploadPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const storage = getStorage();
  const name = localStorage.getItem('userId')
  const storageRef = ref(storage, name);
  const uploadPhoto = (pic)=>{
      uploadBytes(storageRef, pic).then((snapshot) => {
  });}
  
  return (
    <div>
      <h5>Upload your photo</h5>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="image"
        onChange={(e) => {
          console.log(e.target.files[0]);
          setSelectedImage(e.target.files[0]);
          uploadPhoto(e.target.files[0])

        }}
      />
    </div>
  );
};

export default UploadPhoto;