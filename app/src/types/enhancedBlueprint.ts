// Enhanced DevForge AI Types with UI/UX and UML

export interface UseCase {
  id: string;
  name: string;
  actor: string;
  description: string;
  preconditions: string[];
  postconditions: string[];
  mainFlow: string[];
  alternativeFlows: string[];
}

export interface SequenceStep {
  from: string;
  to: string;
  message: string;
  type: 'sync' | 'async' | 'return';
}

export interface SequenceDiagram {
  title: string;
  actors: string[];
  steps: SequenceStep[];
}

export interface ClassAttribute {
  name: string;
  type: string;
  visibility: 'public' | 'private' | 'protected';
}

export interface ClassMethod {
  name: string;
  returnType: string;
  parameters: string;
  visibility: 'public' | 'private' | 'protected';
}

export interface ClassDiagram {
  className: string;
  attributes: ClassAttribute[];
  methods: ClassMethod[];
  relationships: string[];
}

export interface UIMockup {
  screenName: string;
  description: string;
  elements: UIElement[];
  layoutGrid: string;
  colorScheme: string;
  typography: string;
}

export interface UIElement {
  type: 'header' | 'button' | 'input' | 'card' | 'sidebar' | 'modal' | 'chart' | 'table' | 'navigation' | 'footer';
  name: string;
  position: string;
  description: string;
  style: string;
}

export interface WireframeSection {
  name: string;
  components: string[];
  layout: string;
}

export interface EnhancedBlueprint {
  // Original sections
  projectOverview: {
    problemStatement: string;
    proposedSolution: string;
    targetUsers: { type: string; description: string; primaryNeeds: string }[];
  };
  
  // Step 1: Requirements (confirmed by user)
  functionalRequirements: { id: string; description: string; priority: 'high' | 'medium' | 'low' }[];
  nonFunctionalRequirements: { category: string; requirement: string; priority: 'high' | 'medium' | 'low' }[];
  
  // Step 2: Use Case Diagrams
  useCases: UseCase[];
  
  // Step 3: Sequence Diagrams
  sequenceDiagrams: SequenceDiagram[];
  
  // Step 4: Class Diagrams
  classDiagrams: ClassDiagram[];
  
  // Step 5: UI/UX Design
  uiMockups: UIMockup[];
  wireframes: WireframeSection[];
  designSystem: {
    colors: { name: string; hex: string; usage: string }[];
    typography: { element: string; font: string; size: string; weight: string }[];
    spacing: string;
    components: string[];
  };
  
  // Step 6: System Architecture
  systemModules: { name: string; responsibility: string; inputs: string; outputs: string }[];
  highLevelArchitecture: string;
  componentLevelBreakdown: string;
  
  // Step 7: Database
  databaseTables: {
    name: string;
    fields: { name: string; dataType: string; constraints: string; description: string }[];
    relationships: string;
  }[];
  
  // Step 8: Folder Structure
  backendFolderStructure: string;
  frontendFolderStructure: string;
  
  // Step 9: Flow Diagrams
  systemFlowDiagram: string;
  userFlowDiagram: string;
  
  // Step 10: Tech Stack & Roadmap
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    aiIntegration: string;
    hosting: string;
  };
  developmentRoadmap: { phase: string; weeks: string; deliverables: string[] }[];
  scalabilityPlan: {
    microservices: string;
    loadBalancing: string;
    databaseScaling: string;
    apiOptimization: string;
  };
  futureEnhancements: string[];
}

export type WizardStep = 
  | 'input'
  | 'requirements'
  | 'usecases'
  | 'sequence'
  | 'class'
  | 'uiux'
  | 'architecture'
  | 'database'
  | 'structure'
  | 'flows'
  | 'techstack'
  | 'roadmap'
  | 'complete';
