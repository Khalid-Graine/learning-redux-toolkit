import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../store/features/color";

const Color = () => {
  // Destructure for better readability
  const currentColor = useSelector((state) => state.color.color);
  const dispatch = useDispatch(); // Corrected variable name

  // Function to handle color change
  const handleColorChange = () => {
    dispatch(changeColor('red'));
  };

  return (
    <div>
      <p>The color: {currentColor}</p>
      <button onClick={handleColorChange}>Change color</button>
    </div>
  );
};

export default Color;
