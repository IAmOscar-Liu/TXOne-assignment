import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex h-screen flex-col bg-secondary-background">
      <Header />
      <div className="grid flex-grow grid-cols-[240px,1fr] overflow-y-auto">
        <aside className="element-h-full">
          <Sidebar />
        </aside>
        <main className="element-h-full">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default Layout;
