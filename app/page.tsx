import SideBar from "@/ui/SideBar";
import Banner from "@/ui/Banner";
import OutstandingHeader from "@/ui/OutstandingHeader";

export default function Home() {
  return (
    <div className="body-container mt-[8%]">
      <Banner />
      <OutstandingHeader />
    </div>
  );
}
