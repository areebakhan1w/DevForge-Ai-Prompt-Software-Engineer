import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import type { WizardStep } from '@/types/enhancedBlueprint';

interface WizardContainerProps {
  currentStep: WizardStep;
  onNext: () => void;
  onBack: () => void;
  onComplete: () => void;
  children: React.ReactNode;
  canProceed: boolean;
}

const steps: { id: WizardStep; label: string; description: string }[] = [
  { id: 'input', label: 'Idea Input', description: 'Describe your software idea' },
  { id: 'requirements', label: 'Requirements', description: 'Review and confirm requirements' },
  { id: 'usecases', label: 'Use Cases', description: 'System use case diagrams' },
  { id: 'sequence', label: 'Sequence', description: 'Interaction sequence diagrams' },
  { id: 'class', label: 'Class Diagram', description: 'Object-oriented design' },
  { id: 'uiux', label: 'UI/UX Design', description: 'Interface mockups and design system' },
  { id: 'architecture', label: 'Architecture', description: 'System architecture design' },
  { id: 'database', label: 'Database', description: 'Database schema design' },
  { id: 'structure', label: 'Structure', description: 'Folder structure' },
  { id: 'flows', label: 'Flow Diagrams', description: 'System and user flows' },
  { id: 'techstack', label: 'Tech Stack', description: 'Technology recommendations' },
  { id: 'roadmap', label: 'Roadmap', description: 'Development roadmap' },
  { id: 'complete', label: 'Complete', description: 'Your blueprint is ready' },
];

export function WizardContainer({ 
  currentStep, 
  onNext, 
  onBack, 
  onComplete, 
  children, 
  canProceed 
}: WizardContainerProps) {
  const currentIndex = steps.findIndex(s => s.id === currentStep);
  const progress = ((currentIndex) / (steps.length - 1)) * 100;

  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === steps.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">DevForge AI</h1>
                <p className="text-sm text-slate-500">Technical Blueprint Generator</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-700">Step {currentIndex + 1} of {steps.length}</p>
              <p className="text-xs text-slate-500">{steps[currentIndex]?.label}</p>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      {/* Step Indicators */}
      <div className="bg-white border-b border-slate-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-3 min-w-max">
            {steps.map((step, index) => {
              const isCompleted = index < currentIndex;
              const isCurrent = index === currentIndex;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div 
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      isCurrent 
                        ? 'bg-blue-50 text-blue-700' 
                        : isCompleted 
                          ? 'text-green-600' 
                          : 'text-slate-400'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Circle className={`w-4 h-4 ${isCurrent ? 'fill-blue-600 text-blue-600' : ''}`} />
                    )}
                    <span className="text-sm font-medium whitespace-nowrap">{step.label}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-300 mx-1" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Card className="shadow-lg">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-lg font-semibold text-slate-800">
              {steps[currentIndex]?.description}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {children}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isFirstStep}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          {!isLastStep ? (
            <Button
              onClick={onNext}
              disabled={!canProceed}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={onComplete}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <CheckCircle className="w-4 h-4" />
              Complete
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
