import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="  md:flex">
      <Topbar />

      <div className="sm:flex sm:flex-1">
        <div className="hidden md:block fixed h-full w-64">
          <LeftSidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 md:ml-64 ">
          <section className="h-screen">
            <Outlet />
          </section>
        </div>
      </div>

      <Bottombar />
    </div>
  );
}

export default RootLayout;
