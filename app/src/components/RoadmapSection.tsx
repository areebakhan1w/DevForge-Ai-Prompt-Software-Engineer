import type { DevelopmentPhase } from '@/types/blueprint';
import { BlueprintSection } from './BlueprintSection';

interface RoadmapSectionProps {
  phases: DevelopmentPhase[];
}

export function RoadmapSection({ phases }: RoadmapSectionProps) {
  return (
    <BlueprintSection id="13" title="Development Roadmap">
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-slate-800">{phase.phase}</h4>
              <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {phase.weeks}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {phase.deliverables.map((deliverable, didx) => (
                <li key={didx} className="text-slate-700">{deliverable}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BlueprintSection>
  );
}
