import React, { useState, useRef } from "react";
import "../../styles/createFood.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Createfood() {
		const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState("");

  const fileInputRef = useRef(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!video) {
      alert("Please select a video");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("video", video);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/food",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      // Reset form
      setName("");
      setDescription("");
      setVideo(null);
      setPreview("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      alert("Food uploaded successfully!");
			navigate('/')
    } catch (error) {
      console.log(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="create-food-page">
      <div className="food-card">
        <h2>Create Food</h2>

        <p className="subtitle">
          Upload a short video, give it a name, and add a description.
        </p>

        <form onSubmit={onSubmit}>
          <label>FOOD VIDEO</label>

          <div className="upload-box">
            {preview ? (
              <video
                src={preview}
                controls
                className="preview-video"
              />
            ) : (
              <>
                <span className="upload-icon">📁</span>
                <p>Tap to upload or drag and drop</p>
                <small>MP4, WebM, MOV · Up to 100MB</small>
              </>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
            />
          </div>

          <label>NAME</label>
          <input
            type="text"
            placeholder="e.g. Spicy Paneer Wrap"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>DESCRIPTION</label>
          <textarea
            rows="5"
            placeholder="Write a short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">
            Save Food
          </button>
        </form>
      </div>
    </div>
  );
}

export default Createfood;