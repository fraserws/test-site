import React from "react";

function Features() {
  return (
    <div className="flex flex-col font-bold text-left  ">
      <h1 className="text-3xl pt-5 pb-5">Key Features.</h1>
      <div className="md:grid grid-cols-2  gap-y-5   ">
        <div className="flex flex-row gap-5  ">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-primary"
            checked
            readOnly
          />
          <h4 className="text-sm inline-block  ">Great customer service</h4>
        </div>

        <div className="flex flex-row gap-5 ">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-primary"
            checked
            readOnly
          />
          <h4 className="text-sm  ">$30 off with signup</h4>
        </div>

        <div className="flex flex-row gap-5">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-primary"
            checked
            readOnly
          />
          <h4 className="text-sm  ">Great Low Fees</h4>
        </div>

        <div className="flex flex-row gap-5">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-primary"
            checked
            readOnly
          />
          <h4 className="text-sm  ">Really quick</h4>
        </div>
      </div>
    </div>
  );
}

export default Features;
