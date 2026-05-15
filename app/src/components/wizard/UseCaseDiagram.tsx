import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { UseCase } from '@/types/enhancedBlueprint';

interface UseCaseDiagramProps {
  useCases: UseCase[];
}

export function UseCaseDiagram({ useCases }: UseCaseDiagramProps) {
  const actors = [...new Set(useCases.map(uc => uc.actor))];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Use Case Diagram</h3>
        <p className="text-slate-600">System functionality from user perspective</p>
      </div>

      {/* Visual Use Case Diagram */}
      <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-block bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold">
              System: {useCases[0]?.name.split(' ')[0] || 'Application'}
            </div>
          </div>

          <div className="flex items-start justify-center gap-12">
            {/* Actors Column */}
            <div className="flex flex-col gap-8">
              <h4 className="text-sm font-semibold text-slate-500 text-center uppercase tracking-wide">Actors</h4>
              {actors.map((actor, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-2">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{actor}</span>
                </div>
              ))}
            </div>

            {/* Use Cases Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-slate-500 text-center uppercase tracking-wide">Use Cases</h4>
              {useCases.map((useCase, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-48 bg-white border-2 border-slate-300 rounded-lg px-4 py-3 text-center shadow-sm">
                    <span className="text-sm font-medium text-slate-800">{useCase.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-500 font-mono">{useCase.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Use Cases */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-slate-800">Use Case Details</h4>
        {useCases.map((useCase, index) => (
          <Card key={index} className="border-l-4 border-l-blue-500">
            <CardContent className="pt-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="font-mono text-xs">{useCase.id}</Badge>
                    <h5 className="font-semibold text-slate-800">{useCase.name}</h5>
                  </div>
                  <p className="text-sm text-slate-600">{useCase.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <User className="w-4 h-4" />
                  {useCase.actor}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h6 className="text-xs font-semibold text-slate-500 uppercase mb-2">Preconditions</h6>
                  <ul className="space-y-1">
                    {useCase.preconditions.map((pre, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                        {pre}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className="text-xs font-semibold text-slate-500 uppercase mb-2">Postconditions</h6>
                  <ul className="space-y-1">
                    {useCase.postconditions.map((post, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                        {post}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h6 className="text-xs font-semibold text-slate-500 uppercase mb-2">Main Flow</h6>
                <ol className="space-y-1">
                  {useCase.mainFlow.map((step, i) => (
                    <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {useCase.alternativeFlows.length > 0 && (
                <div className="mt-4">
                  <h6 className="text-xs font-semibold text-slate-500 uppercase mb-2">Alternative Flows</h6>
                  <ul className="space-y-1">
                    {useCase.alternativeFlows.map((alt, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-5 h-5 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                          A{i + 1}
                        </span>
                        {alt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
