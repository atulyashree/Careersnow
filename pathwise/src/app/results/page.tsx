'use client';
import { useSearchParams } from 'next/navigation';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  // Mock data for demonstration
  const careers = [
    {
      title: "Backend Developer",
      summary: "Build and maintain server-side applications.",
      tags: ["Coding", "Remote", "High Salary"],
      timeToLearn: "6-12 months",
      salary: "₹8-20 LPA",
    },
    {
      title: "UI/UX Designer",
      summary: "Design user interfaces and experiences.",
      tags: ["Design", "Creative", "Remote"],
      timeToLearn: "4-8 months",
      salary: "₹5-15 LPA",
    },
    // Add more mock careers as needed
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Career paths for: <span className="text-blue-600">{query}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careers.map((career, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">{career.title}</h2>
            <p className="mb-2">{career.summary}</p>
            <div className="flex gap-2 mb-2">
              {career.tags.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{tag}</span>
              ))}
            </div>
            <p className="text-sm text-gray-600">Time to learn: {career.timeToLearn}</p>
            <p className="text-sm text-gray-600">Salary: {career.salary}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">View Full Path</button>
          </div>
        ))}
      </div>
    </main>
  );
}