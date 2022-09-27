import React from "react";

import { useState, useRef } from "react";
interface ProgressProps {
  value: number;
  tag: string | boolean;
}

export const Progress: React.FC<ProgressProps> = ({ tag, value }) => {
  const [progress, setProgress] = useState(value * 10);

  return (
    <div className="flex flex-col overflow-auto  justify-center px-2">
      <p className=" text-l font-bold pb-5">{tag} </p>

      <div className="flex flex-row  ">
        <div className="h-4 w-full flex flex-row bg-accent">
          <div
            style={{ width: `${progress}%;`, height: 15 }}
            className={`h-full ${progress < 40 ? "bg-warning" : "bg-blue-600"}`}
          ></div>
        </div>

        <p className=" text-m font-bold pl-10 pb- justify-center items-center ">
          {value}
        </p>
      </div>
    </div>
  );
};
