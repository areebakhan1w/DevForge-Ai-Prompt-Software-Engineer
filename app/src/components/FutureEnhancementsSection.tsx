import { BlueprintSection } from './BlueprintSection';

interface FutureEnhancementsSectionProps {
  enhancements: string[];
}

export function FutureEnhancementsSection({ enhancements }: FutureEnhancementsSectionProps) {
  return (
    <BlueprintSection id="15" title="Future Enhancements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {enhancements.map((enhancement, index) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 bg-slate-50">
            <span className="text-sm font-mono text-slate-500 mr-2">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-slate-700">{enhancement}</span>
          </div>
        ))}
      </div>
    </BlueprintSection>
  );
}
