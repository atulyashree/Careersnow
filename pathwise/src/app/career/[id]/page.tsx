'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { getCareerById } from '../../../data/careers';
import ProgressTracker from '../../../components/ProgressTracker';

export default function CareerPathPage() {
  const params = useParams();
  const router = useRouter();
  const careerId = params.id as string;
  
  const [activeTab, setActiveTab] = useState('overview');
  
  const career = getCareerById(careerId);
  
  if (!career) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Career not found</h1>
        <button 
          onClick={() => router.back()}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <button 
                onClick={() => router.back()}
                className="text-blue-600 hover:text-blue-800 mb-2 flex items-center"
              >
                ← Back to results
              </button>
              <h1 className="text-3xl font-bold text-gray-900">{career.title}</h1>
              <p className="text-gray-600 mt-2">{career.summary}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{career.salary.entry}</div>
              <div className="text-sm text-gray-500">Starting salary</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{career.timeToLearn}</div>
            <div className="text-sm text-gray-500">Time to learn</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600">{career.salary.senior}</div>
            <div className="text-sm text-gray-500">Senior salary</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-purple-600">{career.difficulty}</div>
            <div className="text-sm text-gray-500">Difficulty level</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-orange-600">{career.demand}</div>
            <div className="text-sm text-gray-500">Job demand</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <div className="border-b">
                <nav className="flex space-x-8 px-6">
                  {['overview', 'roadmap', 'skills', 'resources', 'companies'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-600">Career Overview</h3>
                    <p className="text-gray-600 mb-6">{career.overview}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Salary Progression</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Entry Level:</span>
                            <span className="font-medium text-gray-500">{career.salary.entry}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mid Level:</span>
                            <span className="font-medium text-gray-500">{career.salary.mid}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Senior Level:</span>
                            <span className="font-medium text-gray-500">{career.salary.senior}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Key Benefits</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• High earning potential</li>
                          <li>• Remote work opportunities</li>
                          <li>• Continuous learning</li>
                          <li>• Strong job security</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Work Environment</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Office or remote work</li>
                          <li>• Collaborative teams</li>
                          <li>• Flexible hours</li>
                          <li>• Modern tech stack</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Roadmap Tab */}
                {activeTab === 'roadmap' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-600">Learning Roadmap</h3>
                    <div className="space-y-6">
                      {career.roadmap.map((phase, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-6">
                          <h4 className="text-lg font-semibold text-blue-600 mb-3">{phase.phase}</h4>
                          <ul className="space-y-2">
                            {phase.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start">
                                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                                  {stepIndex + 1}
                                </span>
                                <span className="text-gray-700">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === 'skills' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-600">Required Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-600">Core Technical Skills</h4>
                        <div className="space-y-2">
                          {career.skills.core.map((skill) => (
                            <div key={skill} className="bg-green-50 text-green-700 px-3 py-2 rounded text-sm">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-600">Advanced Skills</h4>
                        <div className="space-y-2">
                          {career.skills.advanced.map((skill) => (
                            <div key={skill} className="bg-blue-50 text-blue-700 px-3 py-2 rounded text-sm">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-600">Soft Skills</h4>
                        <div className="space-y-2">
                          {career.skills.soft.map((skill) => (
                            <div key={skill} className="bg-purple-50 text-purple-700 px-3 py-2 rounded text-sm">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Resources Tab */}
                {activeTab === 'resources' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-600">Learning Resources</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-600">Recommended Courses</h4>
                        <div className="space-y-3">
                          {career.resources.courses.map((course, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <div className="font-medium text-gray-600">{course.name}</div>
                              <div className="text-sm text-gray-600">{course.platform}</div>
                              <div className="flex justify-between items-center mt-2">
                                <span className="text-green-600 font-medium">{course.price}</span>
                                <span className="text-yellow-600 text-sm">{course.rating}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-600">Essential Books</h4>
                        <div className="space-y-2">
                          {career.resources.books.map((book, index) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
                              {book}
                            </div>
                          ))}
                        </div>
                        
                        <h4 className="font-semibold mb-3 mt-6 text-gray-600">Tools & Software</h4>
                        <div className="flex flex-wrap gap-2">
                          {career.resources.tools.map((tool) => (
                            <span key={tool} className="bg-blue-100 text-yellow-800 px-3 py-1 rounded text-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Companies Tab */}
                {activeTab === 'companies' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-600">Top Companies Hiring</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {career.companies.map((company) => (
                        <div key={company} className="bg-purple-100 border border-gray-200 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                          <div className="font-medium text-gray-800">{company}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ProgressTracker careerId={careerId} roadmap={career.roadmap} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Save This Path
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
} 