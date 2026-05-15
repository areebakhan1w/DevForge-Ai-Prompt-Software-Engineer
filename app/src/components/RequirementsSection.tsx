import type { FunctionalRequirement, NonFunctionalRequirement } from '@/types/blueprint';
import { BlueprintSection } from './BlueprintSection';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface RequirementsSectionProps {
  functional: FunctionalRequirement[];
  nonFunctional: NonFunctionalRequirement[];
}

export function RequirementsSection({ functional, nonFunctional }: RequirementsSectionProps) {
  return (
    <>
      <BlueprintSection id="2" title="Functional Requirements">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-semibold w-24">ID</TableHead>
              <TableHead className="font-semibold">Requirement Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {functional.map((req) => (
              <TableRow key={req.id}>
                <TableCell className="font-mono text-sm text-slate-600">{req.id}</TableCell>
                <TableCell className="text-slate-700">{req.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </BlueprintSection>

      <BlueprintSection id="3" title="Non-Functional Requirements">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-semibold w-40">Category</TableHead>
              <TableHead className="font-semibold">Requirement</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nonFunctional.map((req, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-slate-800">{req.category}</TableCell>
                <TableCell className="text-slate-700">{req.requirement}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </BlueprintSection>
    </>
  );
}
