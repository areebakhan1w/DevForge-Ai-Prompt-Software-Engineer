import type { TechnicalBlueprint } from '@/types/blueprint';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Download, ArrowLeft, CheckCircle } from 'lucide-react';
import { ProjectOverviewSection } from './ProjectOverviewSection';
import { RequirementsSection } from './RequirementsSection';
import { SystemModulesSection } from './SystemModulesSection';
import { UIDesignSection } from './UIDesignSection';
import { ArchitectureSection } from './ArchitectureSection';
import { DatabaseSection } from './DatabaseSection';
import { FolderStructureSection } from './FolderStructureSection';
import { FlowDiagramsSection } from './FlowDiagramsSection';
import { TechStackSection } from './TechStackSection';
import { RoadmapSection } from './RoadmapSection';
import { ScalabilitySection } from './ScalabilitySection';
import { FutureEnhancementsSection } from './FutureEnhancementsSection';
import { useState } from 'react';

interface BlueprintDisplayProps {
  blueprint: TechnicalBlueprint;
  idea: string;
  onReset: () => void;
}

export function BlueprintDisplay({ blueprint, idea, onReset }: BlueprintDisplayProps) {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const content = generateMarkdownContent(blueprint, idea);
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'technical-blueprint.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: '1', title: 'Project Overview' },
    { id: '2', title: 'Functional Requirements' },
    { id: '3', title: 'Non-Functional Requirements' },
    { id: '4', title: 'System Modules' },
    { id: '5', title: 'UI Design' },
    { id: '6', title: 'Architecture' },
    { id: '7', title: 'Database' },
    { id: '8', title: 'Backend Structure' },
    { id: '9', title: 'Frontend Structure' },
    { id: '10', title: 'System Flow' },
    { id: '11', title: 'User Flow' },
    { id: '12', title: 'Tech Stack' },
    { id: '13', title: 'Roadmap' },
    { id: '14', title: 'Scalability' },
    { id: '15', title: 'Future Enhancements' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onReset} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Technical Blueprint</h1>
              <p className="text-sm text-slate-500 truncate max-w-md">{idea}</p>
            </div>
          </div>
          <Button
            onClick={handleExport}
            className={`flex items-center gap-2 ${exported ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {exported ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Exported
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Export Markdown
              </>
            )}
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-lg shadow-sm border border-slate-200 p-4">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Sections</h3>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs font-mono text-slate-400">{section.id}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </ScrollArea>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          <div id="section-1">
            <ProjectOverviewSection data={blueprint.projectOverview} />
          </div>
          <div id="section-2">
            <RequirementsSection
              functional={blueprint.functionalRequirements}
              nonFunctional={blueprint.nonFunctionalRequirements}
            />
          </div>
          <div id="section-3" />
          <div id="section-4">
            <SystemModulesSection modules={blueprint.systemModules} />
          </div>
          <div id="section-5">
            <UIDesignSection screens={blueprint.uiScreens} />
          </div>
          <div id="section-6">
            <ArchitectureSection
              highLevel={blueprint.highLevelArchitecture}
              componentLevel={blueprint.componentLevelBreakdown}
            />
          </div>
          <div id="section-7">
            <DatabaseSection tables={blueprint.databaseTables} />
          </div>
          <div id="section-8">
            <FolderStructureSection
              backend={blueprint.backendFolderStructure}
              frontend={blueprint.frontendFolderStructure}
            />
          </div>
          <div id="section-9" />
          <div id="section-10">
            <FlowDiagramsSection
              systemFlow={blueprint.systemFlowDiagram}
              userFlow={blueprint.userFlowDiagram}
            />
          </div>
          <div id="section-11" />
          <div id="section-12">
            <TechStackSection stack={blueprint.techStack} />
          </div>
          <div id="section-13">
            <RoadmapSection phases={blueprint.developmentRoadmap} />
          </div>
          <div id="section-14">
            <ScalabilitySection plan={blueprint.scalabilityPlan} />
          </div>
          <div id="section-15">
            <FutureEnhancementsSection enhancements={blueprint.futureEnhancements} />
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Generated by DevForge AI - Technical Blueprint Generator
            </p>
            <Button onClick={onReset} variant="outline" className="mt-4">
              Generate Another Blueprint
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

function generateMarkdownContent(blueprint: TechnicalBlueprint, idea: string): string {
  return `# Technical Blueprint

> Generated for: ${idea}

---

## 1. Project Overview

### Problem Statement
${blueprint.projectOverview.problemStatement}

### Proposed Solution
${blueprint.projectOverview.proposedSolution}

### Target Users

| User Type | Description | Primary Needs |
|-----------|-------------|---------------|
${blueprint.projectOverview.targetUsers.map(u => `| ${u.type} | ${u.description} | ${u.primaryNeeds} |`).join('\n')}

---

## 2. Functional Requirements

| ID | Requirement Description |
|----|------------------------|
${blueprint.functionalRequirements.map(r => `| ${r.id} | ${r.description} |`).join('\n')}

---

## 3. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
${blueprint.nonFunctionalRequirements.map(r => `| ${r.category} | ${r.requirement} |`).join('\n')}

---

## 4. System Modules

${blueprint.systemModules.map(m => `### ${m.name}
**Responsibility:** ${m.responsibility}
**Inputs:** ${m.inputs}
**Outputs:** ${m.outputs}
`).join('\n')}

---

## 5. UI Design Structure

${blueprint.uiScreens.map(s => `### Screen: ${s.name}
**Purpose:** ${s.purpose}
**Components:** ${s.components.join(', ')}
**Layout Structure:**
\`\`\`
${s.layoutStructure}
\`\`\`
`).join('\n')}

---

## 6. System Architecture

### 6.1 High-Level Architecture Diagram

\`\`\`
${blueprint.highLevelArchitecture}
\`\`\`

### 6.2 Component-Level Breakdown

${blueprint.componentLevelBreakdown}

---

## 7. Database Design

${blueprint.databaseTables.map(t => `### Table: ${t.name}

| Field | Data Type | Constraints | Description |
|-------|-----------|-------------|-------------|
${t.fields.map(f => `| ${f.name} | ${f.dataType} | ${f.constraints} | ${f.description} |`).join('\n')}

**Relationships:** ${t.relationships}
`).join('\n')}

---

## 8. Backend Folder Structure

\`\`\`
${blueprint.backendFolderStructure}
\`\`\`

---

## 9. Frontend Folder Structure

\`\`\`
${blueprint.frontendFolderStructure}
\`\`\`

---

## 10. System Flow Diagram

\`\`\`
${blueprint.systemFlowDiagram}
\`\`\`

---

## 11. User Flow Diagram

\`\`\`
${blueprint.userFlowDiagram}
\`\`\`

---

## 12. Suggested Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | ${blueprint.techStack.frontend} |
| Backend | ${blueprint.techStack.backend} |
| Database | ${blueprint.techStack.database} |
| AI Integration | ${blueprint.techStack.aiIntegration} |
| Hosting | ${blueprint.techStack.hosting} |

---

## 13. Development Roadmap

${blueprint.developmentRoadmap.map(p => `### ${p.phase} (${p.weeks})
${p.deliverables.map(d => `- ${d}`).join('\n')}
`).join('\n')}

---

## 14. Scalability Plan

| Aspect | Strategy |
|--------|----------|
| Microservices | ${blueprint.scalabilityPlan.microservices} |
| Load Balancing | ${blueprint.scalabilityPlan.loadBalancing} |
| Database Scaling | ${blueprint.scalabilityPlan.databaseScaling} |
| API Optimization | ${blueprint.scalabilityPlan.apiOptimization} |

---

## 15. Future Enhancements

${blueprint.futureEnhancements.map((e, i) => `${i + 1}. ${e}`).join('\n')}

---

*Generated by DevForge AI*
`;
}
