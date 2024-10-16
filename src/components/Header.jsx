import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-evenly bg-slate-900 p-6">
      <NavLink to="/">
        <Button title="Home" />
      </NavLink>
      <NavLink to="/events">
        <Button title="All Events" />
      </NavLink>
    </header>
  );
}
