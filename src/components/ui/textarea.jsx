// src/components/ui/textarea.jsx
export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
      {...props}
    />
  );
}
