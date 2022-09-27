import React from "react";
import { Accordion } from "../components/Accordian";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar diam, et massa vitae  aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ";
const title = "This is a sample question that is long to ask?";
function Question() {
  return (
    <div className="flex justify-center flex-col text-center pb-2  ">
      <div className="">
        <h1 className=" font-bold text-secondary pb-5 text-4xl">Questions</h1>
        <h1 className="  text-info font-light pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h1>
        <div className="max-w-4xl mx-auto  my-2 border-solid border-y-4  border-secondary">
          <Accordion title={title} content={text} />
          <Accordion title={title} content={text} />
          <Accordion title={title} content={text} />
          <Accordion title={title} content={text} />
        </div>
      </div>
    </div>
  );
}

export default Question;
