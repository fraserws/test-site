// @ts-nocheck
import React, { useRef, useState } from "react";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  contenSpace: any | null;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-nocheck
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease -rotate-45"
    );
  }

  return (
    <div className="justify-center flex px-5 ">
      <div className="flex flex-col border-b-4 ">
        <button
          className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
          onClick={toggleAccordion}
        >
          <p className="inline-block font-bold text-xl light  max-w-3xl">
            {title}
          </p>
          <p className={`${rotate} iflex text-primary font-bold text-3xl px-5`}>
            +
          </p>
        </button>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="overflow-auto transition-max-height duration-700 ease-in-out max-w-3xl px-5"
        >
          <div className="pb-10">{content}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
