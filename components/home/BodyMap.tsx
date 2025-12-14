"use client";

import React, { useState } from "react";
import { X, AlertCircle, Heart, Shield, Sparkles } from "lucide-react";

interface HealthPoint {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
  importance: string;
  checkFrequency: string;
  icon: React.ReactNode;
}

const femaleHealthPoints: HealthPoint[] = [
  {
    id: "breasts",
    name: "Breast Health",
    x: 50,
    y: 28,
    description:
      "Breast cancer is the most common cancer in women. Early detection through self-exams and mammograms is crucial.",
    importance:
      "1 in 8 women will develop breast cancer. Monthly self-exams and mammograms from age 40 (or earlier with family history) save lives.",
    checkFrequency: "Monthly self-exam, Annual mammogram (40+)",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: "heart",
    name: "Cardiovascular Health",
    x: 50,
    y: 34,
    description:
      "Heart disease is the #1 killer of women, claiming more lives than all cancers combined.",
    importance:
      "Symptoms in women often differ from men - fatigue, shortness of breath, and nausea can be warning signs.",
    checkFrequency: "Annual checkup, Blood pressure every visit",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: "skin",
    name: "Skin Health",
    x: 75,
    y: 40,
    description:
      "Skin cancer is highly preventable and curable when caught early. UV protection and mole monitoring are essential.",
    importance:
      "The ABCDE rule: check moles for Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution.",
    checkFrequency: "Monthly self-check, Annual dermatologist visit",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "cervix",
    name: "Cervical Health",
    x: 50,
    y: 55,
    description:
      "Cervical cancer is nearly 100% preventable through HPV vaccination and regular screening.",
    importance:
      "Pap smears detect precancerous changes years before cancer develops. HPV vaccine prevents 90% of cervical cancers.",
    checkFrequency:
      "Pap smear every 3 years (21-65), HPV test every 5 years (30+)",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "ovaries",
    name: "Ovarian Health",
    x: 40,
    y: 52,
    description:
      "Ovarian cancer is called the 'silent killer' because symptoms are often subtle until advanced stages.",
    importance:
      "Know the symptoms: bloating, pelvic pain, difficulty eating, urinary urgency. Family history increases risk significantly.",
    checkFrequency: "Discuss risk factors at annual exam",
    icon: <AlertCircle className="w-5 h-5" />,
  },
  {
    id: "thyroid",
    name: "Thyroid Health",
    x: 50,
    y: 15,
    description:
      "Women are 5-8x more likely than men to develop thyroid conditions, affecting metabolism, energy, and mood.",
    importance:
      "Symptoms include fatigue, weight changes, hair loss, and temperature sensitivity. TSH blood test is the gold standard.",
    checkFrequency: "Every 5 years (or if symptomatic)",
    icon: <Sparkles className="w-5 h-5" />,
  },
];

export default function FemaleBodyMap() {
  const [selectedPoint, setSelectedPoint] = useState<HealthPoint | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Body SVG Container */}
      <div className="relative aspect-[1/1.8] bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl overflow-hidden">
        {/* Simplified Female Silhouette */}
        <svg
          viewBox="0 0 100 180"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Body silhouette */}
          <path
            d="M50 10 
               C60 10 65 20 65 25
               C65 30 60 35 58 38
               C62 40 68 45 70 55
               C72 65 70 75 68 85
               C66 95 60 100 55 105
               C55 120 58 150 60 170
               L55 170
               C54 155 52 130 50 120
               C48 130 46 155 45 170
               L40 170
               C42 150 45 120 45 105
               C40 100 34 95 32 85
               C30 75 28 65 30 55
               C32 45 38 40 42 38
               C40 35 35 30 35 25
               C35 20 40 10 50 10"
            fill="url(#bodyGradient)"
            className="drop-shadow-lg"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Interactive hotspots */}
        {femaleHealthPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => setSelectedPoint(point)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              selectedPoint?.id === point.id
                ? "bg-purple-600 text-white scale-125 shadow-lg shadow-purple-500/50"
                : "bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-md hover:scale-110 hover:shadow-lg"
            }`}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            aria-label={point.name}
          >
            <span className="relative flex h-3 w-3">
              {selectedPoint?.id !== point.id && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              )}
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
          </button>
        ))}
      </div>

      {/* Info Panel */}
      {selectedPoint && (
        <div className="mt-6 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-purple-200 dark:border-purple-800 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-600 dark:text-purple-400">
                {selectedPoint.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedPoint.name}
              </h3>
            </div>
            <button
              onClick={() => setSelectedPoint(null)}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {selectedPoint.description}
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-4">
            <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
              <strong>Why It Matters:</strong> {selectedPoint.importance}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Shield className="w-4 h-4" />
            <span>
              <strong>Check Frequency:</strong> {selectedPoint.checkFrequency}
            </span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span>Tap to learn about health checkpoints</span>
        </div>
      </div>
    </div>
  );
}
