import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

function SideBar() {
  return (
    <div className="flex  justify-center pt-12">
      <div className="grid max-w-fit ">
        <Header />
        <Image
          src="/../public/logo.png"
          className=" align-end "
          width={300}
          height={300}
          layout={"fixed"}
        />
        <Link href="https://wise.com/">
          <button className="btn btn-warning mt-2 text-accent">
            Visit website
          </button>
        </Link>
        <div className="text-center space-y-4 ">
          <h1 className="font-bold text-2xl text-secondary pt-8 ">
            Quick info
          </h1>
          <ul className="font-bold  space-y-4 ">
            <li>
              Exchange Rate:
              <span className="font-light text-sm pl-1">0.5-1.2%</span>
            </li>
            <li>
              Transfer Fees:
              <span className="font-light text-sm pl-1">$30</span>
            </li>
            <li>
              Added-Costs:
              <span className="font-light text-sm pl-1">3%</span>
            </li>
            <li>
              Published:<span className="font-light text-sm pl-1">3%</span>
            </li>
            <li>
              Edited on:
              <span className="font-light text-sm pl-1">May 12, 2020</span>
            </li>
            <li>
              Fact Checked:
              <span className="font-light text-sm pl-1">0.5-1.2%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
