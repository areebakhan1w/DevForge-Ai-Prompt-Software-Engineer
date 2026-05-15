import { Card, CardContent } from '@/components/ui/card';
import { FileCode, FolderOpen } from 'lucide-react';

interface FolderStructureStepProps {
  backend: string;
  frontend: string;
}

export function FolderStructureStep({ backend, frontend }: FolderStructureStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Folder Structure</h3>
        <p className="text-slate-600">Recommended project organization</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Backend Structure */}
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 mb-4">
              <FolderOpen className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-slate-800">Backend Structure</h4>
            </div>
            <pre className="p-4 bg-slate-900 text-green-400 rounded-lg overflow-x-auto text-xs font-mono leading-relaxed">
              {backend}
            </pre>
          </CardContent>
        </Card>

        {/* Frontend Structure */}
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 mb-4">
              <FileCode className="w-5 h-5 text-purple-600" />
              <h4 className="font-semibold text-slate-800">Frontend Structure</h4>
            </div>
            <pre className="p-4 bg-slate-900 text-green-400 rounded-lg overflow-x-auto text-xs font-mono leading-relaxed">
              {frontend}
            </pre>
          </CardContent>
        </Card>
      </div>

      {/* Structure Guidelines */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-4">
          <h4 className="font-semibold text-blue-900 mb-3">Structure Guidelines</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-blue-800 mb-2">Backend Principles</h5>
              <ul className="space-y-1 text-blue-700">
                <li>• Separation of concerns with microservices</li>
                <li>• Shared modules for common functionality</li>
                <li>• Infrastructure as Code (IaC) with Terraform</li>
                <li>• Docker containers for each service</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-800 mb-2">Frontend Principles</h5>
              <ul className="space-y-1 text-blue-700">
                <li>• Component-based architecture</li>
                <li>• Feature-based folder organization</li>
                <li>• Shared hooks and utilities</li>
                <li>• Clear separation of pages and components</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
