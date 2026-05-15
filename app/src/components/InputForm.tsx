import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, FileText, Loader2 } from 'lucide-react';

interface InputFormProps {
  onSubmit: (idea: string) => void;
  isLoading: boolean;
}

const EXAMPLE_IDEAS = [
  'AI-powered code review platform that automatically detects bugs and suggests improvements',
  'E-commerce platform with real-time inventory management and AI product recommendations',
  'Healthcare appointment scheduling system with telemedicine integration',
  'Online learning platform with AI tutoring and progress tracking',
  'Social media analytics dashboard for brand monitoring and sentiment analysis',
];

export function InputForm({ onSubmit, isLoading }: InputFormProps) {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim() && !isLoading) {
      onSubmit(idea.trim());
    }
  };

  const handleExampleClick = (example: string) => {
    setIdea(example);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">DevForge AI</h1>
          <p className="text-lg text-slate-600">Technical Blueprint Generator</p>
          <p className="text-sm text-slate-500 mt-2">
            Transform your software idea into a complete pre-development blueprint
          </p>
        </div>

        {/* Input Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <FileText className="w-5 h-5 text-blue-600" />
              Describe Your Software Idea
            </CardTitle>
            <CardDescription>
              Enter a brief description of the software you want to build. Be as specific as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <Textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g., A platform that connects freelance designers with startups looking for branding services, featuring portfolio showcases, project management tools, and secure payment processing..."
                className="min-h-[150px] resize-none text-slate-700 placeholder:text-slate-400"
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                disabled={!idea.trim() || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating Blueprint...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Technical Blueprint
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Example Ideas */}
        <div className="mt-8">
          <p className="text-sm font-medium text-slate-500 mb-3">Or try one of these examples:</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_IDEAS.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example)}
                className="text-xs bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-slate-600 px-3 py-2 rounded-full transition-colors"
                disabled={isLoading}
              >
                {example.length > 50 ? example.substring(0, 50) + '...' : example}
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">15</div>
            <div className="text-sm text-slate-500">Blueprint Sections</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
            <div className="text-sm text-slate-500">Professional Format</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">Instant</div>
            <div className="text-sm text-slate-500">Generation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
