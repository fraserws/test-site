import { useState, useLayoutEffect, useRef } from "react";

type ReadMoreProps = {
  text: string;
};

export default function ReadMore({ text }: ReadMoreProps) {
  const contentRef = useRef<HTMLParagraphElement>(null);

  const [showMore, setShowMore] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useLayoutEffect(() => {
    if (
      contentRef.current &&
      contentRef.current?.clientHeight < contentRef.current?.scrollHeight
    ) {
      setShowLink(true);
    }
  }, [contentRef]);

  function onToggle() {
    setShowMore((prevState) => !prevState);
  }

  return (
    <div className=" min-h-5 overflow-hidden pb-12  pb-6rounded-md  text-info  ">
      <p
        ref={contentRef}
        className={showMore ? "line-clamp-none " : "line-clamp-4   "}
      >
        {text}
      </p>
      <div className="text-right font-bold   ">
        <button
          className={showLink ? "text-primary " : "text-primary invisible  "}
          onClick={onToggle}
        >
          {showMore ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
}
