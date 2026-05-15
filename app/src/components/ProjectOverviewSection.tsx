import type { ProjectOverview } from '@/types/blueprint';
import { BlueprintSection } from './BlueprintSection';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ProjectOverviewSectionProps {
  data: ProjectOverview;
}

export function ProjectOverviewSection({ data }: ProjectOverviewSectionProps) {
  return (
    <BlueprintSection id="1" title="Project Overview">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Problem Statement</h4>
          <p className="text-slate-700 leading-relaxed">{data.problemStatement}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Proposed Solution</h4>
          <p className="text-slate-700 leading-relaxed">{data.proposedSolution}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Target Users</h4>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="font-semibold">User Type</TableHead>
                <TableHead className="font-semibold">Description</TableHead>
                <TableHead className="font-semibold">Primary Needs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.targetUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-slate-800">{user.type}</TableCell>
                  <TableCell className="text-slate-600">{user.description}</TableCell>
                  <TableCell className="text-slate-600">{user.primaryNeeds}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </BlueprintSection>
  );
}
