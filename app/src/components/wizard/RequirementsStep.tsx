import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, Edit2, Save, Plus, Trash2 } from 'lucide-react';
import type { EnhancedBlueprint } from '@/types/enhancedBlueprint';

interface RequirementsStepProps {
  data: {
    projectOverview: EnhancedBlueprint['projectOverview'];
    functionalRequirements: EnhancedBlueprint['functionalRequirements'];
    nonFunctionalRequirements: EnhancedBlueprint['nonFunctionalRequirements'];
  };
  onConfirm: () => void;
  onUpdate: (data: {
    functionalRequirements: EnhancedBlueprint['functionalRequirements'];
    nonFunctionalRequirements: EnhancedBlueprint['nonFunctionalRequirements'];
  }) => void;
}

export function RequirementsStep({ data, onConfirm, onUpdate }: RequirementsStepProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [functional, setFunctional] = useState(data.functionalRequirements);
  const [nonFunctional, setNonFunctional] = useState(data.nonFunctionalRequirements);
  const [confirmed, setConfirmed] = useState(false);

  const handleSave = () => {
    onUpdate({ functionalRequirements: functional, nonFunctionalRequirements: nonFunctional });
    setIsEditing(false);
  };

  const handleAddFunctional = () => {
    const newId = `FR-${String(functional.length + 1).padStart(2, '0')}`;
    setFunctional([...functional, { id: newId, description: 'New requirement', priority: 'medium' }]);
  };

  const handleAddNonFunctional = () => {
    setNonFunctional([...nonFunctional, { category: 'Other', requirement: 'New requirement', priority: 'medium' }]);
  };

  const handleDeleteFunctional = (index: number) => {
    setFunctional(functional.filter((_, i) => i !== index));
  };

  const handleDeleteNonFunctional = (index: number) => {
    setNonFunctional(nonFunctional.filter((_, i) => i !== index));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Project Overview */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Project Overview</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-blue-700 mb-1">Problem Statement</h4>
              <p className="text-sm text-blue-800">{data.projectOverview.problemStatement}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-700 mb-1">Proposed Solution</h4>
              <p className="text-sm text-blue-800">{data.projectOverview.proposedSolution}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit/Save Button */}
      <div className="flex justify-end gap-2">
        {isEditing ? (
          <Button onClick={handleSave} variant="outline" className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} variant="outline" className="flex items-center gap-2">
            <Edit2 className="w-4 h-4" />
            Edit Requirements
          </Button>
        )}
      </div>

      {/* Functional Requirements */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-slate-800">Functional Requirements</h3>
          {isEditing && (
            <Button onClick={handleAddFunctional} size="sm" variant="outline" className="flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Add
            </Button>
          )}
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="w-20">ID</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-28">Priority</TableHead>
              {isEditing && <TableHead className="w-16">Action</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {functional.map((req, index) => (
              <TableRow key={req.id}>
                <TableCell className="font-mono text-sm">{req.id}</TableCell>
                <TableCell>
                  {isEditing ? (
                    <input
                      type="text"
                      value={req.description}
                      onChange={(e) => {
                        const updated = [...functional];
                        updated[index].description = e.target.value;
                        setFunctional(updated);
                      }}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  ) : (
                    <span className="text-slate-700">{req.description}</span>
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <select
                      value={req.priority}
                      onChange={(e) => {
                        const updated = [...functional];
                        updated[index].priority = e.target.value as 'high' | 'medium' | 'low';
                        setFunctional(updated);
                      }}
                      className="px-2 py-1 border rounded text-sm"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  ) : (
                    <Badge variant="outline" className={getPriorityColor(req.priority)}>
                      {req.priority}
                    </Badge>
                  )}
                </TableCell>
                {isEditing && (
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteFunctional(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Non-Functional Requirements */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-slate-800">Non-Functional Requirements</h3>
          {isEditing && (
            <Button onClick={handleAddNonFunctional} size="sm" variant="outline" className="flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Add
            </Button>
          )}
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="w-32">Category</TableHead>
              <TableHead>Requirement</TableHead>
              <TableHead className="w-28">Priority</TableHead>
              {isEditing && <TableHead className="w-16">Action</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {nonFunctional.map((req, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-slate-700">
                  {isEditing ? (
                    <input
                      type="text"
                      value={req.category}
                      onChange={(e) => {
                        const updated = [...nonFunctional];
                        updated[index].category = e.target.value;
                        setNonFunctional(updated);
                      }}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  ) : (
                    req.category
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <input
                      type="text"
                      value={req.requirement}
                      onChange={(e) => {
                        const updated = [...nonFunctional];
                        updated[index].requirement = e.target.value;
                        setNonFunctional(updated);
                      }}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  ) : (
                    <span className="text-slate-700">{req.requirement}</span>
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <select
                      value={req.priority}
                      onChange={(e) => {
                        const updated = [...nonFunctional];
                        updated[index].priority = e.target.value as 'high' | 'medium' | 'low';
                        setNonFunctional(updated);
                      }}
                      className="px-2 py-1 border rounded text-sm"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  ) : (
                    <Badge variant="outline" className={getPriorityColor(req.priority)}>
                      {req.priority}
                    </Badge>
                  )}
                </TableCell>
                {isEditing && (
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteNonFunctional(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Confirmation */}
      {!isEditing && (
        <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <Checkbox
            id="confirm"
            checked={confirmed}
            onCheckedChange={(checked) => setConfirmed(checked as boolean)}
            className="mt-1"
          />
          <div>
            <Label htmlFor="confirm" className="text-sm font-medium text-amber-900 cursor-pointer">
              I confirm these requirements are accurate
            </Label>
            <p className="text-xs text-amber-700 mt-1">
              Confirm to proceed to the next step. You can always come back and edit.
            </p>
          </div>
        </div>
      )}

      {!isEditing && (
        <Button
          onClick={onConfirm}
          disabled={!confirmed}
          className="w-full bg-green-600 hover:bg-green-700"
          size="lg"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Confirm & Continue to Use Cases
        </Button>
      )}
    </div>
  );
}
