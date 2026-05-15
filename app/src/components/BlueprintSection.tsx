import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface BlueprintSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function BlueprintSection({ id, title, children, defaultExpanded = true }: BlueprintSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="mb-6 border-l-4 border-l-blue-600 shadow-sm">
      <CardHeader 
        className="cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-slate-500">{id}</span>
            <CardTitle className="text-xl font-semibold text-slate-800">{title}</CardTitle>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-slate-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-slate-500" />
          )}
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-6">
          {children}
        </CardContent>
      )}
    </Card>
  );
}
