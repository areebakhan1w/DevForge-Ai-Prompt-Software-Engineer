// DevForge AI - Technical Blueprint Types

export interface ProjectOverview {
  problemStatement: string;
  proposedSolution: string;
  targetUsers: TargetUser[];
}

export interface TargetUser {
  type: string;
  description: string;
  primaryNeeds: string;
}

export interface FunctionalRequirement {
  id: string;
  description: string;
}

export interface NonFunctionalRequirement {
  category: string;
  requirement: string;
}

export interface SystemModule {
  name: string;
  responsibility: string;
  inputs: string;
  outputs: string;
}

export interface UIScreen {
  name: string;
  purpose: string;
  components: string[];
  layoutStructure: string;
}

export interface DatabaseTable {
  name: string;
  fields: TableField[];
  relationships: string;
}

export interface TableField {
  name: string;
  dataType: string;
  constraints: string;
  description: string;
}

export interface TechStack {
  frontend: string;
  backend: string;
  database: string;
  aiIntegration: string;
  hosting: string;
}

export interface DevelopmentPhase {
  phase: string;
  weeks: string;
  deliverables: string[];
}

export interface ScalabilityPlan {
  microservices: string;
  loadBalancing: string;
  databaseScaling: string;
  apiOptimization: string;
}

export interface TechnicalBlueprint {
  projectOverview: ProjectOverview;
  functionalRequirements: FunctionalRequirement[];
  nonFunctionalRequirements: NonFunctionalRequirement[];
  systemModules: SystemModule[];
  uiScreens: UIScreen[];
  highLevelArchitecture: string;
  componentLevelBreakdown: string;
  databaseTables: DatabaseTable[];
  backendFolderStructure: string;
  frontendFolderStructure: string;
  systemFlowDiagram: string;
  userFlowDiagram: string;
  techStack: TechStack;
  developmentRoadmap: DevelopmentPhase[];
  scalabilityPlan: ScalabilityPlan;
  futureEnhancements: string[];
}

export interface BlueprintSection {
  id: string;
  title: string;
  content: React.ReactNode;
}
