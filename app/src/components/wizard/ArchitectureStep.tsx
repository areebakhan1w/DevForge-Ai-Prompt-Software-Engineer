import { Card, CardContent } from '@/components/ui/card';
import { Server, Globe, Layers, Cpu, HardDrive } from 'lucide-react';
import type { EnhancedBlueprint } from '@/types/enhancedBlueprint';

interface ArchitectureStepProps {
  modules: EnhancedBlueprint['systemModules'];
  highLevel: string;
  componentLevel: string;
}

export function ArchitectureStep({ modules, highLevel, componentLevel }: ArchitectureStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">System Architecture</h3>
        <p className="text-slate-600">High-level and component-level architecture design</p>
      </div>

      {/* System Modules */}
      <div>
        <h4 className="text-lg font-semibold text-slate-800 mb-4">System Modules</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((module, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-slate-800">{module.name}</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-slate-500 font-medium">Responsibility:</span>
                    <p className="text-slate-700">{module.responsibility}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">Inputs:</span>
                    <p className="text-slate-700">{module.inputs}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">Outputs:</span>
                    <p className="text-slate-700">{module.outputs}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* High-Level Architecture */}
      <Card>
        <CardContent className="pt-4">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">High-Level Architecture Diagram</h4>
          <pre className="p-4 bg-slate-900 text-green-400 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
            {highLevel}
          </pre>
        </CardContent>
      </Card>

      {/* Component-Level Breakdown */}
      <Card>
        <CardContent className="pt-4">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Component-Level Breakdown</h4>
          <div className="p-4 bg-slate-50 rounded-lg whitespace-pre-wrap text-slate-700 text-sm leading-relaxed">
            {componentLevel}
          </div>
        </CardContent>
      </Card>

      {/* Architecture Layers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Globe className="w-6 h-6" />, name: 'Frontend', desc: 'React + TypeScript' },
          { icon: <Layers className="w-6 h-6" />, name: 'API Gateway', desc: 'Kong / AWS API Gateway' },
          { icon: <Cpu className="w-6 h-6" />, name: 'Services', desc: 'Microservices Architecture' },
          { icon: <HardDrive className="w-6 h-6" />, name: 'Data Layer', desc: 'PostgreSQL + Redis + S3' },
        ].map((layer, idx) => (
          <Card key={idx} className="text-center">
            <CardContent className="pt-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-2">
                {layer.icon}
              </div>
              <h5 className="font-semibold text-slate-800">{layer.name}</h5>
              <p className="text-xs text-slate-500">{layer.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
