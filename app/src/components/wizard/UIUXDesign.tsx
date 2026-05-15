import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Layout, 
  Type, 
  Palette, 
  Grid3X3, 
  Monitor, 
  Box,
  Circle,
  Square,
  AlignLeft,
  Menu,
  X
} from 'lucide-react';
import type { UIMockup, WireframeSection } from '@/types/enhancedBlueprint';

interface UIUXDesignProps {
  mockups: UIMockup[];
  wireframes: WireframeSection[];
  designSystem: {
    colors: { name: string; hex: string; usage: string }[];
    typography: { element: string; font: string; size: string; weight: string }[];
    spacing: string;
    components: string[];
  };
}

const elementIcons: Record<string, React.ReactNode> = {
  'header': <Layout className="w-4 h-4" />,
  'button': <Box className="w-4 h-4" />,
  'input': <AlignLeft className="w-4 h-4" />,
  'card': <Square className="w-4 h-4" />,
  'sidebar': <Menu className="w-4 h-4" />,
  'modal': <X className="w-4 h-4" />,
  'chart': <Grid3X3 className="w-4 h-4" />,
  'table': <Grid3X3 className="w-4 h-4" />,
  'navigation': <Circle className="w-4 h-4" />,
  'footer': <Layout className="w-4 h-4" />,
};

export function UIUXDesign({ mockups, wireframes, designSystem }: UIUXDesignProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">UI/UX Design</h3>
        <p className="text-slate-600">Interface mockups, wireframes, and design system</p>
      </div>

      <Tabs defaultValue="mockups" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="mockups" className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            Mockups
          </TabsTrigger>
          <TabsTrigger value="wireframes" className="flex items-center gap-2">
            <Grid3X3 className="w-4 h-4" />
            Wireframes
          </TabsTrigger>
          <TabsTrigger value="colors" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center gap-2">
            <Type className="w-4 h-4" />
            Typography
          </TabsTrigger>
        </TabsList>

        {/* Mockups Tab */}
        <TabsContent value="mockups" className="space-y-6">
          {mockups.map((mockup, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Mockup Header */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-800">{mockup.screenName}</h4>
                      <p className="text-sm text-slate-500">{mockup.description}</p>
                    </div>
                    <Badge variant="outline">{mockup.layoutGrid}</Badge>
                  </div>
                </div>

                {/* Visual Mockup */}
                <div className="p-6 bg-slate-50">
                  <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden max-w-2xl mx-auto">
                    {/* Browser Chrome */}
                    <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-slate-400 text-center">
                        {mockup.screenName.toLowerCase().replace(/\s+/g, '-')}.com
                      </div>
                    </div>

                    {/* Mockup Content */}
                    <div className="p-4 min-h-[200px]">
                      {mockup.screenName === 'Login Screen' && (
                        <div className="max-w-xs mx-auto py-8">
                          <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-3" />
                            <div className="h-4 bg-slate-200 rounded w-32 mx-auto" />
                          </div>
                          <div className="space-y-3">
                            <div className="h-10 bg-slate-100 rounded border border-slate-200" />
                            <div className="h-10 bg-slate-100 rounded border border-slate-200" />
                            <div className="h-10 bg-blue-600 rounded" />
                          </div>
                        </div>
                      )}
                      {mockup.screenName === 'Dashboard' && (
                        <div>
                          <div className="h-12 bg-slate-800 mb-4 flex items-center px-4">
                            <div className="w-8 h-8 bg-slate-600 rounded" />
                            <div className="flex-1" />
                            <div className="w-8 h-8 bg-slate-600 rounded-full" />
                          </div>
                          <div className="grid grid-cols-4 gap-3 mb-4">
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className="h-20 bg-white border border-slate-200 rounded-lg p-3">
                                <div className="w-8 h-8 bg-blue-100 rounded mb-2" />
                                <div className="h-3 bg-slate-200 rounded w-16" />
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-40 bg-white border border-slate-200 rounded-lg p-4">
                              <div className="h-3 bg-slate-200 rounded w-24 mb-4" />
                              <div className="h-24 bg-slate-100 rounded" />
                            </div>
                            <div className="h-40 bg-white border border-slate-200 rounded-lg p-4">
                              <div className="h-3 bg-slate-200 rounded w-24 mb-4" />
                              <div className="space-y-2">
                                {[1, 2, 3].map(i => (
                                  <div key={i} className="h-8 bg-slate-100 rounded" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {mockup.screenName === 'Data List View' && (
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="h-8 bg-slate-100 rounded w-48 border border-slate-200" />
                            <div className="h-8 bg-blue-600 rounded w-24" />
                          </div>
                          <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex">
                              {['Name', 'Status', 'Date', 'Actions'].map((_h, i) => (
                                <div key={i} className="flex-1 h-4 bg-slate-300 rounded mr-2" />
                              ))}
                            </div>
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className="px-4 py-3 border-b border-slate-100 flex">
                                {['w-24', 'w-16', 'w-20', 'w-12'].map((w, j) => (
                                  <div key={j} className={`h-3 bg-slate-200 rounded mr-4 ${w}`} />
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {mockup.screenName === 'Detail/Edit Form' && (
                        <div className="max-w-lg mx-auto py-4">
                          <div className="h-6 bg-slate-200 rounded w-32 mb-6" />
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            {[1, 2, 3, 4].map(i => (
                              <div key={i}>
                                <div className="h-3 bg-slate-300 rounded w-20 mb-2" />
                                <div className="h-10 bg-slate-100 rounded border border-slate-200" />
                              </div>
                            ))}
                          </div>
                          <div className="mb-4">
                            <div className="h-3 bg-slate-300 rounded w-24 mb-2" />
                            <div className="h-24 bg-slate-100 rounded border border-slate-200" />
                          </div>
                          <div className="flex justify-end gap-3">
                            <div className="h-10 bg-white border border-slate-300 rounded w-24" />
                            <div className="h-10 bg-blue-600 rounded w-24" />
                          </div>
                        </div>
                      )}
                      {mockup.screenName === 'Settings Page' && (
                        <div className="flex gap-4">
                          <div className="w-48 bg-slate-50 rounded-lg p-3">
                            {['Profile', 'Security', 'Notifications', 'Billing'].map((_t, i) => (
                              <div key={i} className={`h-8 rounded mb-2 flex items-center px-3 ${i === 0 ? 'bg-blue-100' : ''}`}>
                                <div className={`h-3 rounded w-20 ${i === 0 ? 'bg-blue-400' : 'bg-slate-300'}`} />
                              </div>
                            ))}
                          </div>
                          <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4">
                            <div className="h-5 bg-slate-200 rounded w-32 mb-4" />
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-16 h-16 bg-slate-200 rounded-full" />
                              <div className="h-8 bg-blue-600 rounded w-32" />
                            </div>
                            <div className="space-y-3">
                              {[1, 2, 3].map(i => (
                                <div key={i}>
                                  <div className="h-3 bg-slate-300 rounded w-20 mb-2" />
                                  <div className="h-10 bg-slate-100 rounded border border-slate-200" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Element Breakdown */}
                <div className="border-t border-slate-200 p-4">
                  <h5 className="text-sm font-semibold text-slate-700 mb-3">UI Elements</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mockup.elements.map((element, eidx) => (
                      <div key={eidx} className="flex items-start gap-3 p-2 bg-slate-50 rounded">
                        <div className="w-8 h-8 bg-white rounded border border-slate-200 flex items-center justify-center text-slate-500">
                          {elementIcons[element.type] || <Box className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm text-slate-800">{element.name}</span>
                            <Badge variant="outline" className="text-xs">{element.type}</Badge>
                          </div>
                          <p className="text-xs text-slate-500">{element.description}</p>
                          <p className="text-xs text-slate-400 mt-1">{element.style}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Specs */}
                <div className="border-t border-slate-200 p-4 bg-slate-50">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Color Scheme:</span>
                      <p className="text-slate-700">{mockup.colorScheme}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Typography:</span>
                      <p className="text-slate-700">{mockup.typography}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Wireframes Tab */}
        <TabsContent value="wireframes" className="space-y-4">
          {wireframes.map((wireframe, index) => (
            <Card key={index}>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-slate-800 mb-2">{wireframe.name}</h4>
                <p className="text-sm text-slate-500 mb-3">{wireframe.layout}</p>
                <div className="flex flex-wrap gap-2">
                  {wireframe.components.map((comp, cidx) => (
                    <Badge key={cidx} variant="secondary" className="text-xs">
                      {comp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {designSystem.colors.map((color, index) => (
              <Card key={index} className="overflow-hidden">
                <div 
                  className="h-24 w-full" 
                  style={{ backgroundColor: color.hex }}
                />
                <CardContent className="pt-3">
                  <h5 className="font-semibold text-sm text-slate-800">{color.name}</h5>
                  <p className="text-xs font-mono text-slate-500">{color.hex}</p>
                  <p className="text-xs text-slate-600 mt-1">{color.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-6">
          <Card>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {designSystem.typography.map((type, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div>
                      <span 
                        className="block text-slate-800"
                        style={{ 
                          fontSize: type.size, 
                          fontWeight: type.weight,
                          fontFamily: type.font
                        }}
                      >
                        {type.element}
                      </span>
                      <span className="text-xs text-slate-500">
                        {type.font} · {type.size} · {type.weight}
                      </span>
                    </div>
                    <Badge variant="outline">{type.element}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <h4 className="font-semibold text-slate-800 mb-3">Component Library</h4>
              <div className="flex flex-wrap gap-2">
                {designSystem.components.map((comp, idx) => (
                  <Badge key={idx} variant="secondary">{comp}</Badge>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <h5 className="text-sm font-semibold text-slate-700 mb-2">Spacing</h5>
                <p className="text-sm text-slate-600">{designSystem.spacing}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
