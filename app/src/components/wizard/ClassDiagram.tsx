import { Card, CardContent } from '@/components/ui/card';
import { Box, Link2, Lock, Unlock, Eye } from 'lucide-react';
import type { ClassDiagram as ClassDiagramType } from '@/types/enhancedBlueprint';

interface ClassDiagramProps {
  diagrams: ClassDiagramType[];
}

const visibilityIcons: Record<string, React.ReactNode> = {
  'public': <Unlock className="w-3 h-3 text-green-600" />,
  'private': <Lock className="w-3 h-3 text-red-600" />,
  'protected': <Eye className="w-3 h-3 text-amber-600" />,
};

const visibilitySymbols: Record<string, string> = {
  'public': '+',
  'private': '-',
  'protected': '#',
};

export function ClassDiagram({ diagrams }: ClassDiagramProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Class Diagram</h3>
        <p className="text-slate-600">Object-oriented design and relationships</p>
      </div>

      {/* Class Diagrams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {diagrams.map((cls, index) => (
          <Card key={index} className="overflow-hidden border-2 border-slate-300">
            <CardContent className="p-0">
              {/* Class Header */}
              <div className="bg-slate-800 text-white px-4 py-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Box className="w-5 h-5" />
                  <span className="font-bold text-lg">{cls.className}</span>
                </div>
              </div>

              {/* Attributes Section */}
              <div className="border-b border-slate-200">
                <div className="bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 uppercase">
                  Attributes
                </div>
                <div className="p-3 space-y-1">
                  {cls.attributes.map((attr, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-mono">
                      <span className="text-slate-500">{visibilitySymbols[attr.visibility]}</span>
                      <span className="text-slate-700">{attr.name}</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-blue-600">{attr.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methods Section */}
              <div>
                <div className="bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 uppercase">
                  Methods
                </div>
                <div className="p-3 space-y-1">
                  {cls.methods.map((method, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-mono">
                      <span className="text-slate-500">{visibilitySymbols[method.visibility]}</span>
                      <span className="text-slate-700">{method.name}</span>
                      <span className="text-slate-400">({method.parameters})</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-green-600">{method.returnType}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relationships */}
              {cls.relationships.length > 0 && (
                <div className="border-t border-slate-200 bg-slate-50 px-3 py-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Link2 className="w-3 h-3" />
                    {cls.relationships.join(', ')}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Legend */}
      <Card className="bg-slate-50">
        <CardContent className="pt-4">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Visibility Legend</h4>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-mono font-bold">+</span>
              <span className="text-sm text-slate-600">Public</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-mono font-bold">-</span>
              <span className="text-sm text-slate-600">Private</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-600 font-mono font-bold">#</span>
              <span className="text-sm text-slate-600">Protected</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Class Documentation */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-slate-800">Class Documentation</h4>
        {diagrams.map((cls, index) => (
          <Card key={index}>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Box className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-slate-800">{cls.className}</h5>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h6 className="text-xs font-semibold text-slate-500 uppercase mb-2">Attributes ({cls.attributes.length})</h6>
                  <ul className="space-y-1">
                    {cls.attributes.map((attr, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                        {visibilityIcons[attr.visibility]}
                        <span className="font-mono">{attr.name}: {attr.type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className="text-xs font-semibold text-slate-500 uppercase mb-2">Methods ({cls.methods.length})</h6>
                  <ul className="space-y-1">
                    {cls.methods.map((method, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                        {visibilityIcons[method.visibility]}
                        <span className="font-mono">{method.name}() → {method.returnType}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
