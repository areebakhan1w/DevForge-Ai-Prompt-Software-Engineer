import type { UIScreen } from '@/types/blueprint';
import { BlueprintSection } from './BlueprintSection';

interface UIDesignSectionProps {
  screens: UIScreen[];
}

export function UIDesignSection({ screens }: UIDesignSectionProps) {
  return (
    <BlueprintSection id="5" title="UI Design Structure">
      <div className="space-y-6">
        {screens.map((screen, index) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Screen: {screen.name}</h4>
            <div className="mb-3">
              <span className="text-sm font-semibold text-slate-500">Purpose: </span>
              <span className="text-slate-700">{screen.purpose}</span>
            </div>
            <div className="mb-3">
              <span className="text-sm font-semibold text-slate-500">Components:</span>
              <ul className="list-disc list-inside mt-1 ml-2">
                {screen.components.map((component, cidx) => (
                  <li key={cidx} className="text-slate-700">{component}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-500">Layout Structure:</span>
              <pre className="mt-2 p-3 bg-slate-50 rounded text-sm font-mono text-slate-700 overflow-x-auto">
                {screen.layoutStructure}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </BlueprintSection>
  );
}
