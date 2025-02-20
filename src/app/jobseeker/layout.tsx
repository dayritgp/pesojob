import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full min-h-screen">
        <Navbar />
        <main className="mt-16 p-6">{children}</main>
      </div>
    </div>
  );
}
