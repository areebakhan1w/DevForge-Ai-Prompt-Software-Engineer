import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Download, 
  FileText, 
  Sparkles,
  ArrowRight,
  RefreshCw,
  Layers,
  Code,
  Database,
  Palette,
  GitBranch
} from 'lucide-react';
import type { EnhancedBlueprint } from '@/types/enhancedBlueprint';

interface CompleteStepProps {
  blueprint: EnhancedBlueprint;
  idea: string;
  onExport: () => void;
  onRestart: () => void;
}

export function CompleteStep({ blueprint, idea, onExport, onRestart }: CompleteStepProps) {
  const sections = [
    { name: 'Requirements', count: blueprint.functionalRequirements.length + blueprint.nonFunctionalRequirements.length, icon: <FileText className="w-4 h-4" /> },
    { name: 'Use Cases', count: blueprint.useCases.length, icon: <Layers className="w-4 h-4" /> },
    { name: 'Sequence Diagrams', count: blueprint.sequenceDiagrams.length, icon: <GitBranch className="w-4 h-4" /> },
    { name: 'Class Diagrams', count: blueprint.classDiagrams.length, icon: <Code className="w-4 h-4" /> },
    { name: 'UI Mockups', count: blueprint.uiMockups.length, icon: <Palette className="w-4 h-4" /> },
    { name: 'Database Tables', count: blueprint.databaseTables.length, icon: <Database className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-8">
      {/* Success Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Your Blueprint is Ready!</h3>
        <p className="text-slate-600 max-w-lg mx-auto">
          We've generated a comprehensive technical blueprint for your software idea. 
          Review all sections and export when ready.
        </p>
      </div>

      {/* Project Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">Project Summary</h4>
          </div>
          <p className="text-blue-800 text-sm mb-2">{idea}</p>
          <p className="text-blue-700 text-sm">{blueprint.projectOverview.proposedSolution}</p>
        </CardContent>
      </Card>

      {/* Blueprint Statistics */}
      <div>
        <h4 className="text-lg font-semibold text-slate-800 mb-4">Blueprint Contents</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mx-auto mb-2">
                  {section.icon}
                </div>
                <div className="text-2xl font-bold text-slate-800">{section.count}</div>
                <div className="text-sm text-slate-500">{section.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <Card>
        <CardContent className="pt-4">
          <h4 className="font-semibold text-slate-800 mb-4">What's Included in Your Blueprint</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Project Overview with Problem & Solution',
              'Functional & Non-Functional Requirements',
              'Use Case Diagrams with detailed flows',
              'Sequence Diagrams for system interactions',
              'Class Diagrams for OOP design',
              'UI/UX Mockups with design system',
              'System Architecture (High-level & Component)',
              'Database Schema with relationships',
              'Backend & Frontend Folder Structure',
              'System & User Flow Diagrams',
              'Recommended Tech Stack',
              'Development Roadmap (24 weeks)',
              'Scalability Plan',
              'Future Enhancements',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onExport} 
          className="flex-1 bg-blue-600 hover:bg-blue-700 h-12"
          size="lg"
        >
          <Download className="w-5 h-5 mr-2" />
          Export as Markdown
        </Button>
        <Button 
          onClick={onRestart} 
          variant="outline" 
          className="flex-1 h-12"
          size="lg"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Create New Blueprint
        </Button>
      </div>

      {/* Tips */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="pt-4">
          <h4 className="font-semibold text-amber-900 mb-2">Next Steps</h4>
          <ul className="space-y-2 text-sm text-amber-800">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Export the blueprint and share with your development team</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Use the folder structure to set up your project repository</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Follow the development roadmap for phased implementation</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Review and customize the tech stack based on team expertise</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
