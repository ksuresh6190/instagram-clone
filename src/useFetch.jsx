import { useEffect, useState } from "react";

import React from 'react'

const useFetch = (url) => {

    const [data, setData]=useState([]);
    const [err, setErr]=useState(null);



useEffect(()=>{
        setTimeout(()=>{
          fetch(url)
        .then(response => {return response.json()})
        .then(data => setData(data))
        .catch((err)=>setErr(err))
        })
},[data]);
  return [data, err]
};

export default useFetch
