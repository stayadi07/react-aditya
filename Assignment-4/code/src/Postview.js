import React from "react";
import "./Postview.css";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header";
import Post from "./Components/Post";
const Postview = () => {
  const [data,usedata] = useState([])

  const getData = async() =>{
    let response = await
    fetch("http://localhost:3004/user");
    let actualData = await response.json();
    usedata(actualData);

  }
  useEffect(() => {getData()},[]);
  console.log(data);

  return <div className="site-container">
    <Header/>
    {data.map((element,idx)=>{
      return(
        <Post
        key = {idx} 
        name = {element.name}
        location = {element.location}
        likes = {element.likes}
        description = {element.description}
        PostImage = {element.PostImage}
        date = {element.date} />

      )
    })}
  </div>;
};

export default Postview;
