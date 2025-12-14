"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { X, Shield, Heart, AlertCircle, Sparkles } from "lucide-react";
import * as THREE from "three";

interface Condition {
  name: string;
  description: string;
  checkFrequency: string;
}

interface HealthPoint {
  id: string;
  name: string;
  position: [number, number, number];
  conditions: Condition[];
  icon: React.ReactNode;
}

const femaleHealthPoints: HealthPoint[] = [
  {
    id: "breasts",
    name: "Breast Health",
    position: [0, 0.8, 0.5],
    icon: <Heart className="w-4 h-4" />,
    conditions: [
      {
        name: "Breast Cancer",
        description:
          "1 in 8 women will develop breast cancer. Monthly self-exams and mammograms from age 40 save lives.",
        checkFrequency: "Monthly self-exam, Annual mammogram (40+)",
      },
      {
        name: "Fibrocystic Changes",
        description:
          "Common benign condition causing lumpy, tender breasts. Usually not harmful but should be monitored.",
        checkFrequency: "Note changes during self-exams",
      },
      {
        name: "Mastitis",
        description:
          "Breast infection common during breastfeeding. Symptoms include redness, swelling, and fever.",
        checkFrequency: "Seek care if symptoms occur",
      },
    ],
  },
  {
    id: "heart",
    name: "Cardiovascular Health",
    position: [0, 1.0, 0.4],
    icon: <Heart className="w-4 h-4" />,
    conditions: [
      {
        name: "Heart Disease",
        description:
          "Heart disease is the #1 killer of women. Symptoms often differ from men - fatigue, shortness of breath, and nausea can be warning signs.",
        checkFrequency: "Annual checkup, Blood pressure every visit",
      },
      {
        name: "Arrhythmia",
        description:
          "Irregular heartbeat that women experience more often than men. Can feel like fluttering or racing heart.",
        checkFrequency: "Report palpitations to doctor",
      },
    ],
  },
  {
    id: "skin",
    name: "Skin Health",
    position: [0.6, 0.5, 0.3],
    icon: <Shield className="w-4 h-4" />,
    conditions: [
      {
        name: "Skin Cancer (Melanoma)",
        description:
          "ABCDE rule: check moles for Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution.",
        checkFrequency: "Monthly self-check, Annual dermatologist visit",
      },
      {
        name: "Acne & Hormonal Breakouts",
        description:
          "Often linked to hormonal fluctuations. Can worsen around menstruation or during PCOS.",
        checkFrequency: "Consult dermatologist if persistent",
      },
      {
        name: "Rosacea",
        description:
          "Chronic skin condition causing redness and visible blood vessels, more common in women.",
        checkFrequency: "Avoid triggers, treat flare-ups",
      },
      {
        name: "Eczema",
        description:
          "Inflammatory skin condition causing dry, itchy patches. Stress and hormones can trigger flares.",
        checkFrequency: "Manage with moisturizers and medication",
      },
    ],
  },
  {
    id: "cervix",
    name: "Cervical Health",
    position: [0, -0.2, 0.3],
    icon: <Shield className="w-4 h-4" />,
    conditions: [
      {
        name: "Cervical Cancer",
        description:
          "Nearly 100% preventable through HPV vaccination and regular Pap smears that detect precancerous changes.",
        checkFrequency: "Pap smear every 3 years (21-65)",
      },
      {
        name: "HPV Infection",
        description:
          "Human Papillomavirus is extremely common. High-risk strains can lead to cervical cancer. Vaccine prevents 90% of cases.",
        checkFrequency: "HPV test every 5 years (30+)",
      },
      {
        name: "Cervicitis",
        description:
          "Inflammation of the cervix often caused by infections. Symptoms include discharge and bleeding.",
        checkFrequency: "STI screening as recommended",
      },
    ],
  },
  {
    id: "ovaries",
    name: "Ovarian Health",
    position: [-0.4, -0.1, 0.3],
    icon: <AlertCircle className="w-4 h-4" />,
    conditions: [
      {
        name: "Ovarian Cancer",
        description:
          "Called the 'silent killer' because symptoms are subtle. Know the signs: bloating, pelvic pain, difficulty eating, urinary urgency.",
        checkFrequency: "Discuss risk factors at annual exam",
      },
      {
        name: "Polycystic Ovary Syndrome (PCOS)",
        description:
          "Hormonal disorder affecting 1 in 10 women. Causes irregular periods, excess androgens, and metabolic issues.",
        checkFrequency: "Regular hormone and glucose monitoring",
      },
      {
        name: "Ovarian Cysts",
        description:
          "Fluid-filled sacs that usually resolve on their own. Large or persistent cysts may need treatment.",
        checkFrequency: "Ultrasound if symptomatic",
      },
    ],
  },
  {
    id: "thyroid",
    name: "Thyroid Health",
    position: [0, 1.5, 0.3],
    icon: <Sparkles className="w-4 h-4" />,
    conditions: [
      {
        name: "Hypothyroidism",
        description:
          "Underactive thyroid causing fatigue, weight gain, cold sensitivity. More common in women.",
        checkFrequency: "TSH test every 5 years or if symptomatic",
      },
      {
        name: "Hyperthyroidism",
        description:
          "Overactive thyroid causing weight loss, anxiety, rapid heartbeat, heat sensitivity.",
        checkFrequency: "TSH test if experiencing symptoms",
      },
      {
        name: "Thyroid Nodules",
        description:
          "Lumps in the thyroid. Usually benign but should be evaluated to rule out cancer.",
        checkFrequency: "Ultrasound and possible biopsy if detected",
      },
    ],
  },
];

function BodyModel({
  onHotspotClick,
  activeId,
}: {
  onHotspotClick: (point: HealthPoint) => void;
  activeId: string | null;
}) {
  const bodyRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (bodyRef.current) {
      bodyRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={bodyRef}>
      {/* Head */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#f4a8c4" />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="#f4a8c4" />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0.7, 0]}>
        <capsuleGeometry args={[0.35, 0.8, 16, 32]} />
        <meshStandardMaterial color="#e890b0" />
      </mesh>

      {/* Hips */}
      <mesh position={[0, -0.1, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#e890b0" />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.2, -0.9, 0]}>
        <capsuleGeometry args={[0.12, 0.8, 16, 32]} />
        <meshStandardMaterial color="#f4a8c4" />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.2, -0.9, 0]}>
        <capsuleGeometry args={[0.12, 0.8, 16, 32]} />
        <meshStandardMaterial color="#f4a8c4" />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.55, 0.85, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.08, 0.6, 16, 32]} />
        <meshStandardMaterial color="#f4a8c4" />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.55, 0.85, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.08, 0.6, 16, 32]} />
        <meshStandardMaterial color="#f4a8c4" />
      </mesh>

      {/* Health Hotspots */}
      {femaleHealthPoints.map((point) => (
        <group key={point.id} position={point.position}>
          <mesh onClick={() => onHotspotClick(point)}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={activeId === point.id ? "#a855f7" : "#ffffff"}
              emissive={activeId === point.id ? "#a855f7" : "#ec4899"}
              emissiveIntensity={activeId === point.id ? 0.8 : 0.4}
            />
          </mesh>
          <Html center distanceFactor={4}>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-transform ${
                activeId === point.id
                  ? "bg-purple-600 text-white scale-125"
                  : "bg-white text-purple-600 hover:scale-110"
              } shadow-lg`}
              onClick={() => onHotspotClick(point)}
            >
              <span className="text-xs">●</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function FemaleBodyMap() {
  const [selectedPoint, setSelectedPoint] = useState<HealthPoint | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 3D Canvas */}
        <div className="relative aspect-square bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl overflow-hidden">
          <Canvas camera={{ position: [0, 0.5, 4], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, 5, 5]} intensity={0.4} />
            <Suspense fallback={null}>
              <BodyModel
                onHotspotClick={setSelectedPoint}
                activeId={selectedPoint?.id ?? null}
              />
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={2.5}
              maxDistance={6}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>

          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-900/80 rounded-lg px-3 py-2">
              🔄 Drag to rotate • Scroll to zoom • Click hotspots for details
            </p>
          </div>
        </div>

        {/* Info Panel */}
        <div className="flex flex-col">
          {selectedPoint ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-purple-200 dark:border-purple-800 animate-in slide-in-from-right-4 duration-300">
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

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {selectedPoint.conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4"
                  >
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      {condition.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {condition.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400">
                      <Shield className="w-3 h-3" />
                      <span>{condition.checkFrequency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center h-full min-h-[300px] text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 flex items-center justify-center mb-4">
                <span className="text-3xl">👆</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Select a Health Point
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                Click on any glowing hotspot on the 3D model to learn about
                health conditions and recommended screenings.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
