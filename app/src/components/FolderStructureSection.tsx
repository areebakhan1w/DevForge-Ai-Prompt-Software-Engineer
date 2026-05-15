import { BlueprintSection } from './BlueprintSection';

interface FolderStructureSectionProps {
  backend: string;
  frontend: string;
}

export function FolderStructureSection({ backend, frontend }: FolderStructureSectionProps) {
  return (
    <>
      <BlueprintSection id="8" title="Backend Folder Structure">
        <pre className="p-4 bg-slate-900 text-green-400 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
          {backend}
        </pre>
      </BlueprintSection>

      <BlueprintSection id="9" title="Frontend Folder Structure">
        <pre className="p-4 bg-slate-900 text-green-400 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
          {frontend}
        </pre>
      </BlueprintSection>
    </>
  );
}
