import React, { useState, useEffect } from 'react';
import axios from "axios";
import style from '../pageStyles/upload.module.css';

const Upload = () => {

  const [file, setFile] = useState(null); // Initialize file state with null
  const [fetchedImage, setFetchedImage] = useState([]); // Initialize fetchedImage state with null

  useEffect(() => {
    console.log(file);
    console.log(fetchedImage);
  }, [file, fetchedImage]);

  const fetchImage = async () => {
    try {
      const res = await axios.get('http://localhost:5000/image/getImage');
      console.log(res);
      if (res) {
        setFetchedImage(res.data)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchImage()
  }, [])

  const uploadToServer = async () => {

    const formdata = new FormData();
    formdata.append('file', file)

    try {
      const res = await axios.post('http://localhost:5000/image/upload', formdata);
      console.log(res);
      if (res) {
        console.log(res);
        fetchImage();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={style.formContainer}>
        <label htmlFor="fileInput" className={style.inputBtnLabel}>Select Image</label>
        <input id='fileInput' type="file" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
        <button className={style.uploadBtn} onClick={uploadToServer}>Upload to server</button>
      </div>

      {/* solution to avoid error in preview is to render the image conditionally */}

      <h4>Preview before upload</h4>
      <div className={style.preview}>
        {!file && <p>No Image Selected</p>}
        {file && <img src={URL.createObjectURL(file)} alt={`x0`} />}
      </div>

      <h4>Fetch from server</h4>
      <div className={style.fetchedImages}>
        {fetchedImage && fetchedImage.map((image) => {
          return (
            <img 
              key={image._id}
              style={{width: "100px", display: "block", margin: "20px 0"}}
              src={`http://localhost:5000/images/` + image.image} alt={String(image.image)} 
            />
          )
        })}
      </div>
    </>
  );
}

export default Upload;
