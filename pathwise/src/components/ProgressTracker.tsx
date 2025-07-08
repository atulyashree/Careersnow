'use client';
import { useState, useEffect } from 'react';
import * as React from 'react';

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
  const [progress, setProgress] = useState<ProgressStep[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`progress-${careerId}`);
      if (saved) {
        // Parse and fix dateCompleted
        const parsed = (JSON.parse(saved) as Partial<ProgressStep>[]).map(step => ({
          ...step,
          dateCompleted: step.dateCompleted ? new Date(step.dateCompleted) : undefined
        }));
        setProgress(parsed as ProgressStep[]);
      } else {
        // Initialize steps
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
        setProgress(steps);
      }
    }
  }, [careerId, roadmap]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && progress.length > 0) {
      localStorage.setItem(`progress-${careerId}`, JSON.stringify(progress));
    }
  }, [progress, careerId]);

  const toggleStep = (stepId: string) => {
    console.log('Clicked step:', stepId);
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
  };

  const completedSteps = progress.filter(step => step.completed).length;
  const totalSteps = progress.length;
  const progressPercentage = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-600">Your Progress</h3>
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
        {roadmap.map((phase: { phase: string; steps: string[] }, phaseIndex: number) => {
          const renderStep = (step: string, stepIndex: number) => {
            const stepId = `${phaseIndex}-${stepIndex}`;
            const progressStep = progress.find(p => p.id === stepId);
            const isCompleted = progressStep?.completed || false;

            return (
              <div key={stepIndex} className="flex items-start space-x-5">
                <button
                  style={{ width: 20, height: 20, border: '2px solid blue', borderRadius: '50%' }}
                  onClick={() => toggleStep(stepId)}
                >
                  X
                </button>
                <div className="flex-1">
                  <span className={`text-sm ${isCompleted ? 'line-through text-gray-500' : 'text-gray-700'}`}>{step}</span>
                  {isCompleted && progressStep?.dateCompleted && (
                    <div className="text-xs text-green-600 mt-1">
                      Completed on {new Date(progressStep.dateCompleted).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            );
          };

          return (
            <div key={phaseIndex} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-blue-600 mb-2">{phase.phase}</h4>
              <div className="space-y-2">
                {phase.steps.map(renderStep)}
              </div>
            </div>
          );
        })}
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