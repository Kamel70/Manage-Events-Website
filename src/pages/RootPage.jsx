import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootPage() {
  return (
    <div className="bg-slate-900">
      <Header />
      <Outlet />
    </div>
  );
}
