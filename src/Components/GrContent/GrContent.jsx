import React from "react";
import GraphOne from "../GraphOne/GraphOne";
import GraphTwo from "../GraphTwo/GraphTwo";
import GraphThre from "../GraphThre/GraphThre";

function GrContent() {
  return (
    <div className="bg-white flex max-sm:gap-2 flex-col">
      <div className="flex justify-evenly  max-sm:gap-2 max-lg:flex-col">
        <GraphOne />
        <GraphTwo />
      </div>
      <GraphThre />
    </div>
  );
}

export default GrContent;
