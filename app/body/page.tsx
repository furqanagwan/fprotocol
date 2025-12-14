"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FemaleBodyMap from "@/components/home/BodyMap";

export default function BodyPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="transition-colors duration-300">
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans">
        <Header
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Know Your Body
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Interactive guide to essential health checkpoints. Tap each area
              to learn about prevention, screening, and early detection.
            </p>
          </div>

          {/* Body Map */}
          <FemaleBodyMap />

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Regular Screenings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Most cancers are highly treatable when found early. Don&apos;t
                skip your annual checkups.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 flex items-center justify-center mb-4">
                <span className="text-2xl">💜</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Know Your Family History
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Family history can increase risk for many conditions. Share this
                info with your doctor.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 flex items-center justify-center mb-4">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Listen to Your Body</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Persistent changes in your body deserve attention. Don&apos;t
                dismiss symptoms that concern you.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
