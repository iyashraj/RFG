// src/components/ui/button.jsx
export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
