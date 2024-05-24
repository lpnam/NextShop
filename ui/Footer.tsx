"use client";
import { useRouter } from "next/navigation";
import NextLogo from "@/logo/NextLogo";

export default function Footer() {
  return (
    <div className="w-full flex flex-col rounded-t-md bg-headerColor transition-shadow">
      <div className="w-[80%] m-auto py-6">
        <div className="grid ssm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-4 gap-6">
          <div className="About flex flex-col items-center">
            <h2 className="text-2xl font-bold xl:mb-3">About</h2>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Creater
            </h3>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              NextShop
            </h3>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Careers
            </h3>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Contact
            </h3>
          </div>
          <div className="Policy flex flex-col items-center">
            <h2 className="text-2xl font-bold xl:mb-3">Policy</h2>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Warranty
            </h3>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Delivery
            </h3>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Payment
            </h3>
          </div>
          <div className="Help flex flex-col items-center">
            <h2 className="text-2xl font-bold xl:mb-3">Help</h2>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Your Account
            </h3>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Returns & Replacements
            </h3>
            <h3 className="text-gray-300 text-sm hover:underline cursor-pointer xl:mb-1">
              Others
            </h3>
          </div>
        </div>
        <hr className="w-[60%] mx-auto my-4" />
        <div className="px-2 py-4 flex justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <NextLogo setWidth={30} setHeight={30} />
            <span className="text-md font-bold">NextShop</span>
          </div>
          <span>lpnam © Copyright 2024</span>
        </div>
      </div>
    </div>
  );
}
