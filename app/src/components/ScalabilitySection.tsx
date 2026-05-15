import type { ScalabilityPlan } from '@/types/blueprint';
import { BlueprintSection } from './BlueprintSection';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

interface ScalabilitySectionProps {
  plan: ScalabilityPlan;
}

export function ScalabilitySection({ plan }: ScalabilitySectionProps) {
  return (
    <BlueprintSection id="14" title="Scalability Plan">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold text-slate-800 w-48">Microservices</TableCell>
            <TableCell className="text-slate-700">{plan.microservices}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold text-slate-800">Load Balancing</TableCell>
            <TableCell className="text-slate-700">{plan.loadBalancing}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold text-slate-800">Database Scaling</TableCell>
            <TableCell className="text-slate-700">{plan.databaseScaling}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold text-slate-800">API Optimization</TableCell>
            <TableCell className="text-slate-700">{plan.apiOptimization}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </BlueprintSection>
  );
}
