"use client";
import { SpecsData } from "@/lib/define";
import { Fragment, useState } from "react";

interface specs {
  specs_list: SpecsData[];
}

export default function SpecsList({ specs_list }: specs) {
  const [isShow, setShow] = useState<boolean>(false);
  const handleClick = () => {
    setShow((prev) => (prev = !prev));
  };
  return (
    <>
      <h1 className="max-w-[80%] m-auto font-bold text-2xl my-6">
        {" "}
        Product Specifications
      </h1>
      <div
        className={`transition-slide max-w-[80%] m-auto mb-6 overflow-hidden ${
          isShow ? "" : "max-h-[200px]"
        }`}
      >
        <hr className="border-gray-500" />
        {specs_list.map((each, index) => {
          return (
            <Fragment key={index}>
              <div className="mt-4 flex justify-between">
                <span className="font-bold">{each.header}</span>
                <span>{each.specs}</span>
              </div>
              <hr className="border-gray-500" />
            </Fragment>
          );
        })}
      </div>
      <div
        className="border cursor-pointer border-black rounded-lg p-1 z-99 absolute w-[100px] bottom-2 ssm:ml-[35%] md:ml-[43%] text-center"
        onClick={() => handleClick()}
      >
        {isShow ? <span>Read Less</span> : <span>Read More</span>}
      </div>
    </>
  );
}
