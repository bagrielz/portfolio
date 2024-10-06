"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useSound from "use-sound";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggleThemeSoundPlay] = useSound("/sounds/toggle-theme.mp3");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function Sun() {
    return (
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    );
  }

  function Moon() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.35334 8.28C1.59334 11.7133 4.50668 14.5067 7.99334 14.66C10.4533 14.7667 12.6533 13.62 13.9733 11.8133C14.52 11.0733 14.2267 10.58 13.3133 10.7467C12.8667 10.8267 12.4067 10.86 11.9267 10.84C8.66667 10.7067 6.00001 7.98 5.98667 4.76C5.98001 3.89334 6.16001 3.07334 6.48667 2.32667C6.84667 1.5 6.41334 1.10667 5.58001 1.46C2.94001 2.57334 1.13334 5.23334 1.35334 8.28Z"
          fill="#0D0D0D"
        />
      </svg>
    );
  }

  return (
    <button
      aria-label={
        theme === "dark" ? "Trocar para tema claro" : "Trocar para tema escuro"
      }
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        toggleThemeSoundPlay();
      }}
      className={`p-2 transition duration-300 ease-in-out rounded-md focus:outline-none ${
        theme === "light" ? "hover:bg-neutral-100" : "hover:bg-dark-50"
      }`}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
