import type { DatabaseTable } from '@/types/blueprint';
import { BlueprintSection } from './BlueprintSection';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface DatabaseSectionProps {
  tables: DatabaseTable[];
}

export function DatabaseSection({ tables }: DatabaseSectionProps) {
  return (
    <BlueprintSection id="7" title="Database Design">
      <div className="space-y-8">
        {tables.map((table, index) => (
          <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-100 px-4 py-2 border-b border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800">Table: {table.name}</h4>
            </div>
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold">Field</TableHead>
                    <TableHead className="font-semibold">Data Type</TableHead>
                    <TableHead className="font-semibold">Constraints</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {table.fields.map((field, fidx) => (
                    <TableRow key={fidx}>
                      <TableCell className="font-mono text-sm text-slate-700">{field.name}</TableCell>
                      <TableCell className="text-slate-600">{field.dataType}</TableCell>
                      <TableCell className="text-slate-600">{field.constraints}</TableCell>
                      <TableCell className="text-slate-600">{field.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-sm font-semibold text-slate-500">Relationships: </span>
                <span className="text-slate-700">{table.relationships}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BlueprintSection>
  );
}
