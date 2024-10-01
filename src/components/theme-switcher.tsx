"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 transition duration-300 ease-in-out rounded-md focus:outline-none ${
        theme === "light" ? "hover:bg-neutral-100" : "hover:bg-dark-50"
      }`}
    >
      <Image
        className="transition-opacity duration-500 ease-in-out opacity-100"
        src={theme === "light" ? "/icons/moon.svg" : "/icons/sun.svg"}
        alt="Ícone de tema"
        width={16}
        height={16}
      />
    </button>
  );
}
