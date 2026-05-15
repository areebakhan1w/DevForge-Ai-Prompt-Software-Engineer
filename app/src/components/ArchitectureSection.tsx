import { BlueprintSection } from './BlueprintSection';

interface ArchitectureSectionProps {
  highLevel: string;
  componentLevel: string;
}

export function ArchitectureSection({ highLevel, componentLevel }: ArchitectureSectionProps) {
  return (
    <>
      <BlueprintSection id="6" title="System Architecture">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">6.1 High-Level Architecture Diagram</h4>
            <pre className="p-4 bg-slate-900 text-green-400 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
              {highLevel}
            </pre>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">6.2 Component-Level Breakdown</h4>
            <div className="p-4 bg-slate-50 rounded-lg whitespace-pre-wrap text-slate-700 text-sm leading-relaxed">
              {componentLevel}
            </div>
          </div>
        </div>
      </BlueprintSection>
    </>
  );
}
