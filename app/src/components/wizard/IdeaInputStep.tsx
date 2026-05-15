import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Lightbulb, Loader2 } from 'lucide-react';

interface IdeaInputStepProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  isLoading: boolean;
}

const EXAMPLE_IDEAS = [
  'AI-powered code review platform that automatically detects bugs and suggests improvements',
  'E-commerce platform with real-time inventory management and AI product recommendations',
  'Healthcare appointment scheduling system with telemedicine integration',
  'Online learning platform with AI tutoring and progress tracking',
  'Social media analytics dashboard for brand monitoring and sentiment analysis',
  'Project management tool with automated task assignment and time tracking',
  'Food delivery app with real-time order tracking and restaurant management',
  'Fitness tracking app with personalized workout plans and nutrition guidance',
];

export function IdeaInputStep({ value, onChange, onSubmit, isLoading }: IdeaInputStepProps) {
  const [localValue, setLocalValue] = useState(value);

  const handleSubmit = () => {
    if (localValue.trim()) {
      onChange(localValue.trim());
      onSubmit(localValue.trim());
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
          <Lightbulb className="w-8 h-8 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Describe Your Software Idea</h2>
        <p className="text-slate-600 max-w-lg mx-auto">
          Tell us what you want to build. The more details you provide, the better your blueprint will be.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="idea" className="text-sm font-medium text-slate-700">
          Your Software Idea
        </Label>
        <Textarea
          id="idea"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          placeholder="e.g., A platform that connects freelance designers with startups looking for branding services, featuring portfolio showcases, project management tools, and secure payment processing..."
          className="min-h-[150px] resize-none"
          disabled={isLoading}
        />
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!localValue.trim() || isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700"
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Analyzing Your Idea...
          </>
        ) : (
          'Generate Requirements'
        )}
      </Button>

      <div className="pt-4">
        <p className="text-sm font-medium text-slate-500 mb-3">Or try one of these examples:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_IDEAS.map((example, index) => (
            <button
              key={index}
              onClick={() => setLocalValue(example)}
              disabled={isLoading}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-full transition-colors text-left"
            >
              {example.length > 50 ? example.substring(0, 50) + '...' : example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
