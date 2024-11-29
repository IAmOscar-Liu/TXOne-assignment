import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="bg-secondary-background flex h-screen flex-col">
      <Header />
      <div className="grid flex-grow grid-cols-[240px,1fr] overflow-y-auto">
        <aside className="element-h-full">
          <Sidebar />
        </aside>
        <main className="element-h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
