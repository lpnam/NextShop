import SideBar from "@/ui/SideBar";
import Banner from "@/ui/Banner";
import OutstandingHeader from "@/ui/OutstandingHeader";

export default function Home() {
  return (
    <main>
      <div className="body-container">
        <Banner />
        <OutstandingHeader />
      </div>
    </main>
  );
}
