export default function Button({ title, ...props }) {
  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700  active:scale-95 box-border hover:scale-105 transition"
      {...props}
    >
      {title}
    </button>
  );
}
