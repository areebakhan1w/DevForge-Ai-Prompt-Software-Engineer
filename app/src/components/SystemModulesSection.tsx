import type { SystemModule } from '@/types/blueprint';
import { BlueprintSection } from './BlueprintSection';
// Table components available for future use

interface SystemModulesSectionProps {
  modules: SystemModule[];
}

export function SystemModulesSection({ modules }: SystemModulesSectionProps) {
  return (
    <BlueprintSection id="4" title="System Modules">
      <div className="space-y-6">
        {modules.map((module, index) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">{module.name}</h4>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <span className="text-sm font-semibold text-slate-500">Responsibility: </span>
                <span className="text-slate-700">{module.responsibility}</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-500">Inputs: </span>
                <span className="text-slate-700">{module.inputs}</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-500">Outputs: </span>
                <span className="text-slate-700">{module.outputs}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BlueprintSection>
  );
}
