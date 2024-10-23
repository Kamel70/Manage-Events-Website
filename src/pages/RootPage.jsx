import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootPage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
