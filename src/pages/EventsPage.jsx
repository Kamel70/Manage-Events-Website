import { useState } from "react";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  return (
    <section className="container relative h-full">
      <NavLink to="add-event">
        <Button>Add Event</Button>
      </NavLink>
    </section>
  );
}
