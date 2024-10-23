import Form from "../components/Form";

export default function AddEvent() {
  return (
    <section className="w-full h-full container flex flex-col gap-11 justify-center items-center">
      <h3 className="text-blue-600">Add New Event</h3>
      <Form />
    </section>
  );
}
