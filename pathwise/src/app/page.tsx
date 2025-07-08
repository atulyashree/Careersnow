'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { careers } from '../data/careers';
import SkillMultiSelect from '../components/SkillMultiSelect';

function getAllSkillsAndTags() {
  const skillSet = new Set<string>();
  careers.forEach(career => {
    career.skills.core.forEach((skill: string) => skillSet.add(skill));
    career.tags.forEach((tag: string) => skillSet.add(tag));
  });
  return Array.from(skillSet).sort();
}

export default function Home() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const router = useRouter();
  const allSkills = getAllSkillsAndTags();

  const handleExplore = () => {
    if (selectedSkills.length > 0) {
      router.push(`/results?skills=${encodeURIComponent(selectedSkills.join(','))}`);
    }
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-500">Find your path after your degree</h1>
        <p className="mb-6 text-lg text-gray-600 text-center">Discover the best careers for your background and interests.</p>
        <div className="mb-6 w-full max-w-md">
          <SkillMultiSelect
            options={allSkills}
            value={selectedSkills}
            onChange={setSelectedSkills}
          />
        </div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold disabled:opacity-50"
          onClick={handleExplore}
          disabled={selectedSkills.length === 0}
        >
          Explore Careers
        </button>
        <a href="#how-it-works" className="mt-8 text-blue-500 underline">Learn how it works ↓</a>
      </main>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-700">How Pathwise Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">1️⃣</span>
            <p className="text-center text-gray-500">Select your skills or interests</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">2️⃣</span>
            <p className="text-center text-gray-500">Get personalized career recommendations</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">3️⃣</span>
            <p className="text-center text-gray-500">Explore detailed roadmaps and resources</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">4️⃣</span>
            <p className="text-center text-gray-500">Save your path and track your progress</p>
          </div>
        </div>
      </section>
    </>
  );
}