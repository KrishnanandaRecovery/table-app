import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <main className="flex min-h-0 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
