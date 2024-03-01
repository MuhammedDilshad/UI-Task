import React from "react";
import McbHeader from "../../Components/McbHeader/McbHeader";
import GrContent from "../../Components/GrContent/GrContent";
import { useNavigate } from "react-router-dom";

function GraphPage() {
  const navigate = useNavigate();
  const hangleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="bg-white">
      <McbHeader />
      <GrContent />
      <div className="flex justify-center">
        <button
          onClick={hangleNavigate}
          className="rounded-lg max-sm:p-2 p-4 cursor-pointer text-white bg-blue-500"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default GraphPage;
