'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import { careers } from '../../data/careers';
import SearchFilters from '../../components/SearchFilters';

interface FilterOptions {
  salaryRange: string;
  difficulty: string;
  demand: string;
  timeToLearn: string;
}

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const skillsParam = searchParams.get('skills') || '';
  const selectedSkills = skillsParam.split(',').map(s => s.trim()).filter(Boolean);
  const [filters, setFilters] = useState<FilterOptions>({
    salaryRange: '',
    difficulty: '',
    demand: '',
    timeToLearn: ''
  });

  // Filter careers based on selected skills/tags and filters
  const filteredCareers = useMemo(() => {
    let results = selectedSkills.length === 0
      ? []
      : careers.filter(career =>
          selectedSkills.some(skill =>
            career.skills.core.includes(skill) || career.tags.includes(skill)
          )
        );

    // Apply filters
    if (filters.salaryRange) {
      results = results.filter(career => {
        const entrySalary = parseInt(career.salary.entry.split('-')[0].replace('₹', '').replace(' LPA', ''));
        switch (filters.salaryRange) {
          case 'low':
            return entrySalary < 8;
          case 'medium':
            return entrySalary >= 8 && entrySalary <= 15;
          case 'high':
            return entrySalary >= 15 && entrySalary <= 25;
          case 'very-high':
            return entrySalary > 25;
          default:
            return true;
        }
      });
    }

    if (filters.difficulty) {
      results = results.filter(career => career.difficulty === filters.difficulty);
    }

    if (filters.demand) {
      results = results.filter(career => career.demand === filters.demand);
    }

    if (filters.timeToLearn) {
      results = results.filter(career => {
        const timeToLearn = career.timeToLearn;
        const months = parseInt(timeToLearn.split('-')[0]);
        switch (filters.timeToLearn) {
          case 'short':
            return months < 6;
          case 'medium':
            return months >= 6 && months <= 12;
          case 'long':
            return months > 12;
          default:
            return true;
        }
      });
    }

    return results;
  }, [selectedSkills, filters]);

  const handleViewPath = (careerId: string) => {
    router.push(`/career/${careerId}?skills=${encodeURIComponent(selectedSkills.join(','))}`);
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Career paths for: <span className="text-blue-600">{selectedSkills.length > 0 ? selectedSkills.join(', ') : 'None'}</span>
        </h1>
        <p className="text-gray-600">Found {filteredCareers.length} relevant career paths</p>
      </div>

      {/* Search Filters */}
      <SearchFilters 
        onFiltersChange={handleFiltersChange}
        totalResults={filteredCareers.length}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => (
          <div key={career.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-semibold text-gray-800">{career.title}</h2>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                career.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                career.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {career.difficulty}
              </span>
            </div>
            
            <p className="text-gray-600 mb-3 text-sm">{career.summary}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {career.tags.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Time to learn:</span>
                <span className="font-medium">{career.timeToLearn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Salary range:</span>
                <span className="font-medium text-green-600">{career.salary.entry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Demand:</span>
                <span className={`font-medium ${
                  career.demand === 'Very High' ? 'text-green-600' :
                  career.demand === 'High' ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {career.demand}
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Key skills:</p>
              <div className="flex flex-wrap gap-1">
                {career.skills.core.slice(0, 3).map((skill: string) => (
                  <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {skill}
                  </span>
                ))}
                {career.skills.core.length > 3 && (
                  <span className="text-gray-400 text-xs">+{career.skills.core.length - 3} more</span>
                )}
              </div>
            </div>
            
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
              onClick={() => handleViewPath(career.id)}
            >
              View Full Path
            </button>
          </div>
        ))}
      </div>

      {filteredCareers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No careers found</h3>
          <p className="text-gray-500">Try adjusting your search or filters to find more career paths.</p>
        </div>
      )}
    </main>
  );
}