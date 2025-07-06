'use client';
import { useState } from 'react';

interface FilterOptions {
  salaryRange: string;
  difficulty: string;
  demand: string;
  timeToLearn: string;
}

interface SearchFiltersProps {
  onFiltersChange: (filters: FilterOptions) => void;
  totalResults: number;
}

export default function SearchFilters({ onFiltersChange, totalResults }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    salaryRange: '',
    difficulty: '',
    demand: '',
    timeToLearn: ''
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      salaryRange: '',
      difficulty: '',
      demand: '',
      timeToLearn: ''
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Filters</h3>
          <p className="text-sm text-gray-500">{totalResults} careers found</p>
        </div>
        <div className="flex items-center space-x-2">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Clear all
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {isExpanded ? 'Hide' : 'Show'} filters
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Salary Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salary Range
            </label>
            <select
              value={filters.salaryRange}
              onChange={(e) => handleFilterChange('salaryRange', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All salaries</option>
              <option value="low">Under ₹8 LPA</option>
              <option value="medium">₹8-15 LPA</option>
              <option value="high">₹15-25 LPA</option>
              <option value="very-high">Above ₹25 LPA</option>
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty Level
            </label>
            <select
              value={filters.difficulty}
              onChange={(e) => handleFilterChange('difficulty', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Demand Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Demand
            </label>
            <select
              value={filters.demand}
              onChange={(e) => handleFilterChange('demand', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All demand levels</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
          </div>

          {/* Time to Learn Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time to Learn
            </label>
            <select
              value={filters.timeToLearn}
              onChange={(e) => handleFilterChange('timeToLearn', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any duration</option>
              <option value="short">Under 6 months</option>
              <option value="medium">6-12 months</option>
              <option value="long">Over 12 months</option>
            </select>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t">
          <div className="flex flex-wrap gap-2">
            {filters.salaryRange && (
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                Salary: {filters.salaryRange}
              </span>
            )}
            {filters.difficulty && (
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                Difficulty: {filters.difficulty}
              </span>
            )}
            {filters.demand && (
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                Demand: {filters.demand}
              </span>
            )}
            {filters.timeToLearn && (
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                Duration: {filters.timeToLearn}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 