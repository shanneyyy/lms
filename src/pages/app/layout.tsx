import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] w-full h-screen">
      <Sidebar />
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
