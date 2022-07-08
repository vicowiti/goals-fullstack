import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <FaSpinner size={50} className="animate-spin" />
    </div>
  );
};

export default Spinner;
