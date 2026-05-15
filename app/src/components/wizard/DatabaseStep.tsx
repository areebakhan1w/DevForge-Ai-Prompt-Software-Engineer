import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Database, Key, Link2 } from 'lucide-react';
import type { EnhancedBlueprint } from '@/types/enhancedBlueprint';

interface DatabaseStepProps {
  tables: EnhancedBlueprint['databaseTables'];
}

export function DatabaseStep({ tables }: DatabaseStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Database Design</h3>
        <p className="text-slate-600">Entity-Relationship model and table schemas</p>
      </div>

      {/* ER Diagram Visual */}
      <Card className="bg-slate-50">
        <CardContent className="pt-4">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Entity Relationship Diagram</h4>
          <div className="flex flex-wrap items-center justify-center gap-8 p-4">
            {tables.map((table, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-slate-300 rounded-lg p-4 min-w-[150px]">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-slate-800">{table.name}</span>
                  </div>
                  <div className="space-y-1">
                    {table.fields.slice(0, 4).map((field, fidx) => (
                      <div key={fidx} className="flex items-center gap-1 text-xs">
                        {field.constraints.includes('PRIMARY KEY') && (
                          <Key className="w-3 h-3 text-amber-500" />
                        )}
                        {field.constraints.includes('FK') && (
                          <Link2 className="w-3 h-3 text-blue-500" />
                        )}
                        <span className="font-mono text-slate-600">{field.name}</span>
                      </div>
                    ))}
                    {table.fields.length > 4 && (
                      <div className="text-xs text-slate-400">+{table.fields.length - 4} more fields</div>
                    )}
                  </div>
                </div>
                {index < tables.length - 1 && (
                  <div className="absolute top-1/2 -right-8 w-8 h-px bg-slate-400">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-slate-400 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Table Schemas */}
      <div className="space-y-6">
        <h4 className="text-lg font-semibold text-slate-800">Table Schemas</h4>
        {tables.map((table, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-slate-800">{table.name}</h5>
              </div>
              <div className="p-4">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead className="w-8"></TableHead>
                      <TableHead>Field</TableHead>
                      <TableHead>Data Type</TableHead>
                      <TableHead>Constraints</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table.fields.map((field, fidx) => (
                      <TableRow key={fidx}>
                        <TableCell>
                          {field.constraints.includes('PRIMARY KEY') && (
                            <Key className="w-4 h-4 text-amber-500" />
                          )}
                          {field.constraints.includes('FK') && (
                            <Link2 className="w-4 h-4 text-blue-500" />
                          )}
                        </TableCell>
                        <TableCell className="font-mono text-sm">{field.name}</TableCell>
                        <TableCell className="text-slate-600">{field.dataType}</TableCell>
                        <TableCell className="text-slate-600">{field.constraints}</TableCell>
                        <TableCell className="text-slate-600">{field.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-sm">
                  <Link2 className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-600">{table.relationships}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
