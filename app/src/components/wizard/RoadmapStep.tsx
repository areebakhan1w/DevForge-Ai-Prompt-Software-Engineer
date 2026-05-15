import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle2, 
  Clock, 
  Database,
  Rocket, 
  TrendingUp,
  Zap
} from 'lucide-react';
import type { EnhancedBlueprint } from '@/types/enhancedBlueprint';

interface RoadmapStepProps {
  roadmap: EnhancedBlueprint['developmentRoadmap'];
  scalability: EnhancedBlueprint['scalabilityPlan'];
  enhancements: string[];
}

const phaseIcons = [
  <Rocket className="w-6 h-6" />,
  <TrendingUp className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
  <CheckCircle2 className="w-6 h-6" />,
];

const phaseColors = [
  'bg-blue-100 text-blue-700 border-blue-200',
  'bg-green-100 text-green-700 border-green-200',
  'bg-amber-100 text-amber-700 border-amber-200',
  'bg-purple-100 text-purple-700 border-purple-200',
];

export function RoadmapStep({ roadmap, scalability, enhancements }: RoadmapStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Development Roadmap</h3>
        <p className="text-slate-600">Project phases, scalability plan, and future enhancements</p>
      </div>

      {/* Development Phases */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-slate-800">Development Phases</h4>
        {roadmap.map((phase, index) => (
          <Card key={index} className={`border-l-4 ${phaseColors[index].replace('bg-', 'border-').split(' ')[2]}`}>
            <CardContent className="pt-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${phaseColors[index].split(' ')[0]}`}>
                  {phaseIcons[index]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-slate-800">{phase.phase}</h5>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {phase.weeks}
                    </Badge>
                  </div>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, didx) => (
                      <li key={didx} className="text-sm text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scalability Plan */}
      <Card>
        <CardContent className="pt-4">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Scalability Plan</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-slate-800">Microservices</h5>
              </div>
              <p className="text-sm text-slate-600">{scalability.microservices}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-600" />
                <h5 className="font-semibold text-slate-800">Load Balancing</h5>
              </div>
              <p className="text-sm text-slate-600">{scalability.loadBalancing}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-green-600" />
                <h5 className="font-semibold text-slate-800">Database Scaling</h5>
              </div>
              <p className="text-sm text-slate-600">{scalability.databaseScaling}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-purple-600" />
                <h5 className="font-semibold text-slate-800">API Optimization</h5>
              </div>
              <p className="text-sm text-slate-600">{scalability.apiOptimization}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Enhancements */}
      <Card>
        <CardContent className="pt-4">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Future Enhancements</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {enhancements.map((enhancement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-sm text-slate-700">{enhancement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="pt-4">
          <h4 className="font-semibold text-slate-800 mb-3">Project Timeline Summary</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600">Total Development Time</span>
                <span className="font-semibold text-slate-800">24 weeks (6 months)</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2 bg-white rounded">
                <div className="font-semibold text-blue-600">MVP</div>
                <div className="text-slate-500">Weeks 1-6</div>
              </div>
              <div className="p-2 bg-white rounded">
                <div className="font-semibold text-green-600">Expansion</div>
                <div className="text-slate-500">Weeks 7-12</div>
              </div>
              <div className="p-2 bg-white rounded">
                <div className="font-semibold text-amber-600">Optimization</div>
                <div className="text-slate-500">Weeks 13-18</div>
              </div>
              <div className="p-2 bg-white rounded">
                <div className="font-semibold text-purple-600">Deployment</div>
                <div className="text-slate-500">Weeks 19-24</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
