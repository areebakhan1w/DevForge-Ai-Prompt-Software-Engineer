import type { TechStack } from '@/types/blueprint';
import { BlueprintSection } from './BlueprintSection';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

interface TechStackSectionProps {
  stack: TechStack;
}

export function TechStackSection({ stack }: TechStackSectionProps) {
  return (
    <BlueprintSection id="12" title="Suggested Tech Stack">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold text-slate-800 w-40">Frontend</TableCell>
            <TableCell className="text-slate-700">{stack.frontend}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold text-slate-800">Backend</TableCell>
            <TableCell className="text-slate-700">{stack.backend}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold text-slate-800">Database</TableCell>
            <TableCell className="text-slate-700">{stack.database}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold text-slate-800">AI Integration</TableCell>
            <TableCell className="text-slate-700">{stack.aiIntegration}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold text-slate-800">Hosting</TableCell>
            <TableCell className="text-slate-700">{stack.hosting}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </BlueprintSection>
  );
}
