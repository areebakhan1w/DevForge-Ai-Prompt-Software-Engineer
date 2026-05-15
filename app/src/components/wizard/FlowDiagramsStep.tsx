import { Card, CardContent } from '@/components/ui/card';
import { GitBranch, Users, ArrowRight } from 'lucide-react';

interface FlowDiagramsStepProps {
  systemFlow: string;
  userFlow: string;
}

export function FlowDiagramsStep({ systemFlow, userFlow }: FlowDiagramsStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Flow Diagrams</h3>
        <p className="text-slate-600">System and user interaction flows</p>
      </div>

      {/* System Flow */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-slate-800">System Flow Diagram</h4>
          </div>
          <pre className="p-4 bg-slate-900 text-blue-400 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
            {systemFlow}
          </pre>
        </CardContent>
      </Card>

      {/* User Flow */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-purple-600" />
            <h4 className="font-semibold text-slate-800">User Flow Diagram</h4>
          </div>
          <pre className="p-4 bg-slate-900 text-purple-400 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
            {userFlow}
          </pre>
        </CardContent>
      </Card>

      {/* Flow Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-4">
            <h4 className="font-semibold text-blue-900 mb-3">System Flow Explanation</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>User requests flow through CDN for caching</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Load balancer distributes traffic across instances</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>API Gateway handles authentication and rate limiting</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Microservices process business logic</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Data layer provides persistence and caching</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="pt-4">
            <h4 className="font-semibold text-purple-900 mb-3">User Flow Explanation</h4>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Onboarding guides new users through setup</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Dashboard provides central access to features</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Core features accessible from main navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Settings allow customization of preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Notifications keep users informed of updates</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
