import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container flex justify-evenly bg-blue-200 p-6 mx-auto my-2">
      <NavLink to="/">
        <Button title="Home" />
      </NavLink>
      <NavLink to="/events">
        <Button title="All Events" />
      </NavLink>
    </header>
  );
}
