"use client";
import React, { useEffect, useState } from "react";

const Container = () => {
  const [showButton, setShowButton] = useState(false);
  let localdata = localStorage.getItem("products");

  if (localdata === null) {
    setShowButton(true);
  }

  return <div>{showButton && <button>Start</button>}</div>;
};

export default Container;
