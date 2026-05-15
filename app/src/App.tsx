import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { WizardContainer } from '@/components/wizard/WizardContainer';
import { IdeaInputStep } from '@/components/wizard/IdeaInputStep';
import { RequirementsStep } from '@/components/wizard/RequirementsStep';
import { UseCaseDiagram } from '@/components/wizard/UseCaseDiagram';
import { SequenceDiagram } from '@/components/wizard/SequenceDiagram';
import { ClassDiagram } from '@/components/wizard/ClassDiagram';
import { UIUXDesign } from '@/components/wizard/UIUXDesign';
import { ArchitectureStep } from '@/components/wizard/ArchitectureStep';
import { DatabaseStep } from '@/components/wizard/DatabaseStep';
import { FolderStructureStep } from '@/components/wizard/FolderStructureStep';
import { FlowDiagramsStep } from '@/components/wizard/FlowDiagramsStep';
import { TechStackStep } from '@/components/wizard/TechStackStep';
import { RoadmapStep } from '@/components/wizard/RoadmapStep';
import { CompleteStep } from '@/components/wizard/CompleteStep';
import { generateEnhancedBlueprint, generateRequirements } from '@/services/enhancedBlueprintGenerator';
import type { EnhancedBlueprint, WizardStep } from '@/types/enhancedBlueprint';

function App() {
  const [currentStep, setCurrentStep] = useState<WizardStep>('input');
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<EnhancedBlueprint | null>(null);
  const [requirements, setRequirements] = useState<{
    projectOverview: EnhancedBlueprint['projectOverview'];
    functionalRequirements: EnhancedBlueprint['functionalRequirements'];
    nonFunctionalRequirements: EnhancedBlueprint['nonFunctionalRequirements'];
  } | null>(null);

  const steps: WizardStep[] = [
    'input', 'requirements', 'usecases', 'sequence', 'class', 
    'uiux', 'architecture', 'database', 'structure', 'flows', 
    'techstack', 'roadmap', 'complete'
  ];

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleIdeaSubmit = async (submittedIdea: string) => {
    setIsLoading(true);
    setIdea(submittedIdea);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const reqs = generateRequirements(submittedIdea);
      setRequirements(reqs);
      toast.success('Requirements generated!', {
        description: 'Please review and confirm the requirements.',
      });
      handleNext();
    } catch (error) {
      toast.error('Failed to generate requirements');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequirementsConfirm = () => {
    // Generate full blueprint
    const fullBlueprint = generateEnhancedBlueprint(idea);
    
    // Merge with any edited requirements
    if (requirements) {
      fullBlueprint.functionalRequirements = requirements.functionalRequirements;
      fullBlueprint.nonFunctionalRequirements = requirements.nonFunctionalRequirements;
    }
    
    setBlueprint(fullBlueprint);
    toast.success('Blueprint generated!', {
      description: 'Proceeding to use case diagrams.',
    });
    handleNext();
  };

  const handleRequirementsUpdate = (data: {
    functionalRequirements: EnhancedBlueprint['functionalRequirements'];
    nonFunctionalRequirements: EnhancedBlueprint['nonFunctionalRequirements'];
  }) => {
    if (requirements) {
      setRequirements({
        ...requirements,
        functionalRequirements: data.functionalRequirements,
        nonFunctionalRequirements: data.nonFunctionalRequirements,
      });
    }
  };

  const handleExport = () => {
    if (!blueprint) return;

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
    toast.success('Blueprint exported!', {
      description: 'Your blueprint has been downloaded.',
    });
  };

  const handleRestart = () => {
    setCurrentStep('input');
    setIdea('');
    setBlueprint(null);
    setRequirements(null);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'input':
        return idea.length > 0 && !isLoading;
      case 'requirements':
        return false; // Requires explicit confirmation
      default:
        return true;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'input':
        return (
          <IdeaInputStep
            value={idea}
            onChange={setIdea}
            onSubmit={handleIdeaSubmit}
            isLoading={isLoading}
          />
        );
      
      case 'requirements':
        return requirements ? (
          <RequirementsStep
            data={requirements}
            onConfirm={handleRequirementsConfirm}
            onUpdate={handleRequirementsUpdate}
          />
        ) : null;
      
      case 'usecases':
        return blueprint ? <UseCaseDiagram useCases={blueprint.useCases} /> : null;
      
      case 'sequence':
        return blueprint ? <SequenceDiagram diagrams={blueprint.sequenceDiagrams} /> : null;
      
      case 'class':
        return blueprint ? <ClassDiagram diagrams={blueprint.classDiagrams} /> : null;
      
      case 'uiux':
        return blueprint ? (
          <UIUXDesign 
            mockups={blueprint.uiMockups} 
            wireframes={blueprint.wireframes}
            designSystem={blueprint.designSystem}
          />
        ) : null;
      
      case 'architecture':
        return blueprint ? (
          <ArchitectureStep
            modules={blueprint.systemModules}
            highLevel={blueprint.highLevelArchitecture}
            componentLevel={blueprint.componentLevelBreakdown}
          />
        ) : null;
      
      case 'database':
        return blueprint ? <DatabaseStep tables={blueprint.databaseTables} /> : null;
      
      case 'structure':
        return blueprint ? (
          <FolderStructureStep
            backend={blueprint.backendFolderStructure}
            frontend={blueprint.frontendFolderStructure}
          />
        ) : null;
      
      case 'flows':
        return blueprint ? (
          <FlowDiagramsStep
            systemFlow={blueprint.systemFlowDiagram}
            userFlow={blueprint.userFlowDiagram}
          />
        ) : null;
      
      case 'techstack':
        return blueprint ? <TechStackStep stack={blueprint.techStack} /> : null;
      
      case 'roadmap':
        return blueprint ? (
          <RoadmapStep
            roadmap={blueprint.developmentRoadmap}
            scalability={blueprint.scalabilityPlan}
            enhancements={blueprint.futureEnhancements}
          />
        ) : null;
      
      case 'complete':
        return blueprint ? (
          <CompleteStep
            blueprint={blueprint}
            idea={idea}
            onExport={handleExport}
            onRestart={handleRestart}
          />
        ) : null;
      
      default:
        return null;
    }
  };

  // For input step, show centered form without wizard container
  if (currentStep === 'input') {
    return (
      <>
        <IdeaInputStep
          value={idea}
          onChange={setIdea}
          onSubmit={handleIdeaSubmit}
          isLoading={isLoading}
        />
        <Toaster position="top-right" />
      </>
    );
  }

  // For complete step, show without navigation
  if (currentStep === 'complete') {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <CompleteStep
              blueprint={blueprint!}
              idea={idea}
              onExport={handleExport}
              onRestart={handleRestart}
            />
          </div>
        </div>
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <>
      <WizardContainer
        currentStep={currentStep}
        onNext={handleNext}
        onBack={handleBack}
        onComplete={() => {}}
        canProceed={canProceed()}
      >
        {renderStepContent()}
      </WizardContainer>
      <Toaster position="top-right" />
    </>
  );
}

function generateMarkdownContent(blueprint: EnhancedBlueprint, idea: string): string {
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

| ID | Requirement | Priority |
|----|-------------|----------|
${blueprint.functionalRequirements.map(r => `| ${r.id} | ${r.description} | ${r.priority} |`).join('\n')}

---

## 3. Non-Functional Requirements

| Category | Requirement | Priority |
|----------|-------------|----------|
${blueprint.nonFunctionalRequirements.map(r => `| ${r.category} | ${r.requirement} | ${r.priority} |`).join('\n')}

---

## 4. Use Cases

${blueprint.useCases.map(uc => `### ${uc.id}: ${uc.name}
**Actor:** ${uc.actor}
**Description:** ${uc.description}

**Preconditions:**
${uc.preconditions.map(p => `- ${p}`).join('\n')}

**Postconditions:**
${uc.postconditions.map(p => `- ${p}`).join('\n')}

**Main Flow:**
${uc.mainFlow.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}

**Alternative Flows:**
${uc.alternativeFlows.map((alt) => `- ${alt}`).join('\n')}
`).join('\n---\n')}

---

## 5. Sequence Diagrams

${blueprint.sequenceDiagrams.map((sd) => `### ${sd.title}
**Actors:** ${sd.actors.join(', ')}

| Step | From | To | Message | Type |
|------|------|-----|---------|------|
${sd.steps.map((step, idx) => `| ${idx + 1} | ${step.from} | ${step.to} | ${step.message} | ${step.type} |`).join('\n')}
`).join('\n---\n')}

---

## 6. Class Diagrams

${blueprint.classDiagrams.map(cd => `### ${cd.className}

**Attributes:**
| Visibility | Name | Type |
|------------|------|------|
${cd.attributes.map(a => `| ${a.visibility} | ${a.name} | ${a.type} |`).join('\n')}

**Methods:**
| Visibility | Name | Parameters | Return Type |
|------------|------|------------|-------------|
${cd.methods.map(m => `| ${m.visibility} | ${m.name} | ${m.parameters} | ${m.returnType} |`).join('\n')}

**Relationships:** ${cd.relationships.join(', ')}
`).join('\n---\n')}

---

## 7. UI/UX Design

### Design System

**Colors:**
| Name | Hex | Usage |
|------|-----|-------|
${blueprint.designSystem.colors.map(c => `| ${c.name} | ${c.hex} | ${c.usage} |`).join('\n')}

**Typography:**
| Element | Font | Size | Weight |
|---------|------|------|--------|
${blueprint.designSystem.typography.map(t => `| ${t.element} | ${t.font} | ${t.size} | ${t.weight} |`).join('\n')}

**Components:**
${blueprint.designSystem.components.map(c => `- ${c}`).join('\n')}

### UI Mockups

${blueprint.uiMockups.map(m => `#### ${m.screenName}
${m.description}

**Layout:** ${m.layoutGrid}
**Colors:** ${m.colorScheme}
**Typography:** ${m.typography}

**Elements:**
| Type | Name | Position | Description |
|------|------|----------|-------------|
${m.elements.map(e => `| ${e.type} | ${e.name} | ${e.position} | ${e.description} |`).join('\n')}
`).join('\n')}

---

## 8. System Architecture

### High-Level Architecture

\`\`\`
${blueprint.highLevelArchitecture}
\`\`\`

### Component-Level Breakdown

${blueprint.componentLevelBreakdown}

### System Modules

${blueprint.systemModules.map(m => `**${m.name}**
- Responsibility: ${m.responsibility}
- Inputs: ${m.inputs}
- Outputs: ${m.outputs}
`).join('\n')}

---

## 9. Database Design

${blueprint.databaseTables.map(t => `### Table: ${t.name}

| Field | Data Type | Constraints | Description |
|-------|-----------|-------------|-------------|
${t.fields.map(f => `| ${f.name} | ${f.dataType} | ${f.constraints} | ${f.description} |`).join('\n')}

**Relationships:** ${t.relationships}
`).join('\n---\n')}

---

## 10. Folder Structure

### Backend

\`\`\`
${blueprint.backendFolderStructure}
\`\`\`

### Frontend

\`\`\`
${blueprint.frontendFolderStructure}
\`\`\`

---

## 11. Flow Diagrams

### System Flow

\`\`\`
${blueprint.systemFlowDiagram}
\`\`\`

### User Flow

\`\`\`
${blueprint.userFlowDiagram}
\`\`\`

---

## 12. Tech Stack

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

*Generated by DevForge AI - Enhanced Technical Blueprint Generator*
`;
}

export default App;
