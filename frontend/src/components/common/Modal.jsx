export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl">
        {children}
      </div>
    </div>
  );
}
