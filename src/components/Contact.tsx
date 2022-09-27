import React from "react";
import Image from "next/image";
import person from "../assets/person.png";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <div className="justify-center flex py-10  ">
      <div className=" bg-primary py-4    rounded-lg ">
        <div className="mx-auto md:flex   pt-1 pl-3  ">
          <div className="pl-3 ">
            <Image
              className=""
              src={person}
              width={161.3}
              height={153}
              layout="fixed"
            ></Image>
          </div>
          <div>
            <div className="pl-10 text-accent mr-10   ">
              <h1 className="font-bold  text-2xl pb-3">David Evans</h1>
              <div className="flex flex-row text-2xl gap-5 pb-4">
                <AiFillFacebook /> <AiFillLinkedin />
              </div>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                adipiscing convallis tincidunt vulputate ibero, condimentum
                erat. Scelerisque id cursus vitae facilisis etiam id morbi et.
                Eu pellentesque dui.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
