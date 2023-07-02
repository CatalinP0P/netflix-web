import React, { useState } from "react";
import Containter from "../../components/Containter";
import axios from "axios";

export default function Add() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2010);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [videoURL, setVideo] = useState("");
  const [imageURL, setImage] = useState("");

  const postShow = async () => {
    await axios.post("http://localhost:3001/shows/", {
      show: {
        title: title,
        description: description,
        year: year,
        videoURL: videoURL,
        imageURL: imageURL,
        category: category,
      },
    });

    setTitle('')
    setYear(2010)
    setDescription("")
    setVideo('')
    setImage('')
    setCategory('')
  };

  const handleImageChange = (e: any) => {
    try {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const base64: any = fileReader.result;
        setImage(base64);
      };

      fileReader.readAsDataURL(file);
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <Containter className="mt-32 flex flex-col gap-4">
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="year"
        type="number"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <input
        placeholder="cateogry"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input value={videoURL} onChange={(e) => setVideo(e.target.value)} />
      <img className="w-[250px] h-full" src={imageURL} />
      <input type="file" accept="image" onChange={handleImageChange} />
      <button className="bg-white p-4" onClick={postShow}>
        Add
      </button>
    </Containter>
  );
}
