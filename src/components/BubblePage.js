import React, { useEffect, useState } from "react";
import { fetchColors } from '../api/fetchColors';
import axiosWithAuth from '../helpers/axiosWithAuth';


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  console.log(fetchColors());

  // useEffect(() =>{
  //   fetchColors()
  //   .then(res =>{
  //     setColorList(res.data)
  //   })
  //   .catch((err) =>{
  //     console.log(err)
  //   })

  
    // const getColor = async () =>{
    //   const res = await fetchColors();
    //   setColorList(res);
    // }
    // getColor();
  // }, [])

useEffect(() =>{
    axiosWithAuth().get('/colors')
    .then(res =>{
      setColorList(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
