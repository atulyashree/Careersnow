'use client';
import { useState } from 'react';

interface ProgressStep {
  id: string;
  title: string;
  completed: boolean;
  dateCompleted?: Date;
}

interface ProgressTrackerProps {
  careerId: string;
  roadmap: {
    phase: string;
    steps: string[];
  }[];
}

export default function ProgressTracker({ careerId, roadmap }: ProgressTrackerProps) {
  const [progress, setProgress] = useState<ProgressStep[]>(() => {
    // Initialize progress from localStorage or create new
    const saved = localStorage.getItem(`progress-${careerId}`);
    if (saved) {
      return JSON.parse(saved);
    }
    
    // Create progress steps from roadmap
    const steps: ProgressStep[] = [];
    roadmap.forEach((phase, phaseIndex) => {
      phase.steps.forEach((step, stepIndex) => {
        steps.push({
          id: `${phaseIndex}-${stepIndex}`,
          title: step,
          completed: false
        });
      });
    });
    return steps;
  });

  const toggleStep = (stepId: string) => {
    const updatedProgress = progress.map(step => {
      if (step.id === stepId) {
        return {
          ...step,
          completed: !step.completed,
          dateCompleted: !step.completed ? new Date() : undefined
        };
      }
      return step;
    });
    
    setProgress(updatedProgress);
    localStorage.setItem(`progress-${careerId}`, JSON.stringify(updatedProgress));
  };

  const completedSteps = progress.filter(step => step.completed).length;
  const totalSteps = progress.length;
  const progressPercentage = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Your Progress</h3>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{progressPercentage}%</div>
          <div className="text-sm text-gray-500">{completedSteps} of {totalSteps} steps</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="space-y-4">
        {roadmap.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-medium text-blue-600 mb-2">{phase.phase}</h4>
            <div className="space-y-2">
              {phase.steps.map((step, stepIndex) => {
                const stepId = `${phaseIndex}-${stepIndex}`;
                const progressStep = progress.find(p => p.id === stepId);
                const isCompleted = progressStep?.completed || false;
                
                return (
                  <div key={stepIndex} className="flex items-start space-x-3">
                    <button
                      onClick={() => toggleStep(stepId)}
                      className={`flex-shrink-0 w-5 h-5 rounded-full border-2 mt-0.5 transition-colors ${
                        isCompleted 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      {isCompleted && (
                        <svg className="w-3 h-3 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <div className="flex-1">
                      <span className={`text-sm ${isCompleted ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {step}
                      </span>
                      {isCompleted && progressStep?.dateCompleted && (
                        <div className="text-xs text-green-600 mt-1">
                          Completed on {new Date(progressStep.dateCompleted).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Reset Progress Button */}
      {completedSteps > 0 && (
        <div className="mt-6 pt-4 border-t">
          <button
            onClick={() => {
              const resetProgress = progress.map(step => ({
                ...step,
                completed: false,
                dateCompleted: undefined
              }));
              setProgress(resetProgress);
              localStorage.setItem(`progress-${careerId}`, JSON.stringify(resetProgress));
            }}
            className="text-sm text-red-600 hover:text-red-800"
          >
            Reset Progress
          </button>
        </div>
      )}
    </div>
  );
} 