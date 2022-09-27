import React from "react";
const style = {
  "--value": "80",
  "--size": "12rem",
  "--thickness": "1rem",
} as React.CSSProperties;
import { Progress } from "../components/Bar";
import { CircularProgressbar } from "react-circular-progressbar";
import Features from "../components/Features";

function Breakdown() {
  return (
    <div className="flex flex-col -  ">
      <h1 className="flex  py-5 text-2xl font-bold">Rating Breakdown.</h1>

      <div className="flex flex-col   py-5  text-xl font-bold text-left border-radius-2px  items-center">
        <h1 className="pr-16">Overall</h1>
        <h1 className="pr-16">Score</h1>
        <div
          className="radial-progress  text-primary bg-accent  mb-10"
          style={style}
        >
          <h1 className="text-5xl font-bold text-secondary ">9.4</h1>
        </div>
      </div>
      <div className="md:grid grid-cols-2   gap-5  ">
        <Progress value={2} tag={"Support"} />
        <Progress value={8.3} tag={"Fees"} />
        <Progress value={3.5} tag={"Service"} />
        <Progress value={9.2} tag={"Speed"} />
      </div>

      <h1 className=" py-10 text-2xl font-bold">Pros and Cons.</h1>
      <div className="md:grid grid-cols-2  text-center  gap-6 justify-center   ">
        <div className="flex font-bold border-solid border-2 border-info-50 rounded-md pt-5 flex-col    ">
          <h1 className="font-bold py-5">Pros</h1>
          <div className="flex justify-center">
            <ul className="text-left">
              <li className="pb-2">Great customer service</li>

              <li className="pb-2">Low Fees</li>
              <li className="pb-4"> $30 off with signup</li>
              <li>Really quick</li>
            </ul>
          </div>
          <div className="flex justify-end">
            <div>
              <svg
                className="flex"
                width="219"
                height="50"
                viewBox="0 0 219 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.287 38.5652L1 49H100.276H160.332H192.198H211.276C219.12 49 217.936 47 217.936 43V1L198.326 12.4783L184.844 10.3913L177.491 16.6522H150.527L130.917 29.1739L92.9222 28.1304L67.184 38.5652H24.287Z"
                  fill="#BFFFDC"
                  stroke="#5EF07E"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex font-bold border-solid border-2 border-info-50 rounded-md pt-5 flex-col    ">
          <h1 className="font-bold py-5 ">Pros</h1>
          <div className="flex justify-center">
            <ul className="text-left">
              <li className="pb-2">Great customer service</li>

              <li className="pb-2">Low Fees</li>
              <li className="pb-2">$30 off with signup</li>
              <li className="pb-2">Really quick</li>
            </ul>
          </div>
          <div className="flex justify-start">
            <div>
              <svg
                width="219"
                height="50"
                viewBox="0 0 219 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M194.713 38.5652L218 49H118.724H58.6682H26.8019H7.72395C-0.120071 49 1.06363 47 1.06363 43V1L20.6737 12.4783L34.1556 10.3913L41.5094 16.6522H68.4733L88.0833 29.1739L126.078 28.1304L151.816 38.5652H194.713Z"
                  fill="#FFC3C3"
                  stroke="#FF8A8A"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
}

export default Breakdown;
