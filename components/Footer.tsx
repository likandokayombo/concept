"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-white text-center border-t border-gray-200">
      <p className="text-gray-500 text-sm">
        © {currentYear} Concept. All rights reserved.
      </p>
    </footer>
  );
}
