import { BlueprintSection } from './BlueprintSection';

interface FlowDiagramsSectionProps {
  systemFlow: string;
  userFlow: string;
}

export function FlowDiagramsSection({ systemFlow, userFlow }: FlowDiagramsSectionProps) {
  return (
    <>
      <BlueprintSection id="10" title="System Flow Diagram">
        <pre className="p-4 bg-slate-900 text-blue-400 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
          {systemFlow}
        </pre>
      </BlueprintSection>

      <BlueprintSection id="11" title="User Flow Diagram">
        <pre className="p-4 bg-slate-900 text-purple-400 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
          {userFlow}
        </pre>
      </BlueprintSection>
    </>
  );
}
