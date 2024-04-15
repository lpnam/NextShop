"use client";

import SideBar from "@/ui/SideBar";
import Banner from "@/ui/Banner";
import OutstandingHeader from "@/ui/OutstandingHeader";

export default function Home() {
  return (
    <div>
      <SideBar />
      <div className="body-container">
        <Banner />
        <OutstandingHeader />
      </div>
      <div className="h-screen w-1/6 fixed right-0"></div>
    </div>
  );
}
