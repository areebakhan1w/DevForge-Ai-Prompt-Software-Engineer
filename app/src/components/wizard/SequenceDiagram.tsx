import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, User, Server, Database, Mail } from 'lucide-react';
import type { SequenceDiagram as SequenceDiagramType } from '@/types/enhancedBlueprint';

interface SequenceDiagramProps {
  diagrams: SequenceDiagramType[];
}

const actorIcons: Record<string, React.ReactNode> = {
  'User': <User className="w-5 h-5" />,
  'Frontend': <div className="w-5 h-5 flex items-center justify-center text-xs font-bold">UI</div>,
  'AuthService': <Server className="w-5 h-5" />,
  'APIService': <Server className="w-5 h-5" />,
  'BusinessLogic': <Server className="w-5 h-5" />,
  'ExportService': <Server className="w-5 h-5" />,
  'Database': <Database className="w-5 h-5" />,
  'Redis': <Database className="w-5 h-5" />,
  'EmailService': <Mail className="w-5 h-5" />,
  'StorageService': <Database className="w-5 h-5" />,
  'MessageQueue': <Server className="w-5 h-5" />,
};

export function SequenceDiagram({ diagrams }: SequenceDiagramProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Sequence Diagrams</h3>
        <p className="text-slate-600">Interaction flow between system components</p>
      </div>

      {diagrams.map((diagram, diagramIndex) => (
        <Card key={diagramIndex} className="overflow-hidden">
          <CardContent className="p-0">
            {/* Diagram Header */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-mono">SD-{String(diagramIndex + 1).padStart(2, '0')}</Badge>
                <h4 className="font-semibold text-slate-800">{diagram.title}</h4>
              </div>
            </div>

            {/* Sequence Diagram Visual */}
            <div className="p-6 overflow-x-auto">
              <div className="min-w-[500px]">
                {/* Actor Headers */}
                <div className="flex justify-between mb-4">
                  {diagram.actors.map((actor, idx) => (
                    <div key={idx} className="flex flex-col items-center" style={{ width: `${100 / diagram.actors.length}%` }}>
                      <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white mb-2">
                        {actorIcons[actor] || <Server className="w-5 h-5" />}
                      </div>
                      <span className="text-xs font-medium text-slate-700 text-center">{actor}</span>
                    </div>
                  ))}
                </div>

                {/* Lifelines */}
                <div className="relative" style={{ height: `${diagram.steps.length * 50 + 20}px` }}>
                  {diagram.actors.map((_actor, idx) => (
                    <div
                      key={idx}
                      className="absolute top-0 bottom-0 w-px bg-slate-300"
                      style={{ left: `${(idx + 0.5) * (100 / diagram.actors.length)}%` }}
                    />
                  ))}

                  {/* Messages */}
                  {diagram.steps.map((step, stepIdx) => {
                    const fromIdx = diagram.actors.indexOf(step.from);
                    const toIdx = diagram.actors.indexOf(step.to);
                    const isSelf = fromIdx === toIdx;
                    const isReturn = step.type === 'return';
                    
                    const leftPct = Math.min(fromIdx, toIdx) * (100 / diagram.actors.length) + (50 / diagram.actors.length);
                    const widthPct = isSelf ? 30 : Math.abs(toIdx - fromIdx) * (100 / diagram.actors.length);
                    
                    return (
                      <div
                        key={stepIdx}
                        className="absolute flex items-center"
                        style={{ 
                          top: `${stepIdx * 50 + 10}px`,
                          left: `${leftPct}%`,
                          width: `${widthPct}%`,
                        }}
                      >
                        <div className={`w-full flex items-center ${isReturn ? 'border-b border-dashed border-slate-400' : 'border-b-2 border-slate-600'}`}>
                          <span className={`text-xs ${isReturn ? 'text-slate-500' : 'text-slate-700'} bg-white px-1 -mb-3 mx-auto`}>
                            {step.message.length > 25 ? step.message.substring(0, 25) + '...' : step.message}
                          </span>
                        </div>
                        {!isSelf && (
                          <ArrowRight 
                            className={`absolute w-4 h-4 ${isReturn ? 'text-slate-400' : 'text-slate-600'}`}
                            style={{ 
                              right: fromIdx < toIdx ? '-8px' : 'auto',
                              left: fromIdx > toIdx ? '-8px' : 'auto',
                              transform: fromIdx > toIdx ? 'rotate(180deg)' : 'none'
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step Table */}
            <div className="border-t border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Step</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">From</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">To</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Message</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {diagram.steps.map((step, idx) => (
                    <tr key={idx} className="border-t border-slate-100">
                      <td className="px-4 py-2 font-mono text-xs text-slate-500">{idx + 1}</td>
                      <td className="px-4 py-2 text-slate-700">{step.from}</td>
                      <td className="px-4 py-2 text-slate-700">{step.to}</td>
                      <td className="px-4 py-2 text-slate-800">{step.message}</td>
                      <td className="px-4 py-2">
                        <Badge 
                          variant="outline" 
                          className={step.type === 'sync' ? 'bg-blue-50 text-blue-700' : step.type === 'async' ? 'bg-amber-50 text-amber-700' : 'bg-slate-50 text-slate-600'}
                        >
                          {step.type}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
