import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Server, 
  Database, 
  Brain, 
  Cloud, 
  Code2, 
  Layers,
  Cpu,
  HardDrive,
  Globe
} from 'lucide-react';
import type { EnhancedBlueprint } from '@/types/enhancedBlueprint';

interface TechStackStepProps {
  stack: EnhancedBlueprint['techStack'];
}

const techCategories = [
  { 
    key: 'frontend' as const, 
    icon: <Monitor className="w-6 h-6" />, 
    title: 'Frontend',
    color: 'bg-blue-100 text-blue-700 border-blue-200'
  },
  { 
    key: 'backend' as const, 
    icon: <Server className="w-6 h-6" />, 
    title: 'Backend',
    color: 'bg-green-100 text-green-700 border-green-200'
  },
  { 
    key: 'database' as const, 
    icon: <Database className="w-6 h-6" />, 
    title: 'Database',
    color: 'bg-amber-100 text-amber-700 border-amber-200'
  },
  { 
    key: 'aiIntegration' as const, 
    icon: <Brain className="w-6 h-6" />, 
    title: 'AI Integration',
    color: 'bg-purple-100 text-purple-700 border-purple-200'
  },
  { 
    key: 'hosting' as const, 
    icon: <Cloud className="w-6 h-6" />, 
    title: 'Hosting',
    color: 'bg-cyan-100 text-cyan-700 border-cyan-200'
  },
];

export function TechStackStep({ stack }: TechStackStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Suggested Tech Stack</h3>
        <p className="text-slate-600">Recommended technologies for implementation</p>
      </div>

      {/* Main Tech Stack Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techCategories.map((category) => (
          <Card key={category.key} className={`border-2 ${category.color}`}>
            <CardContent className="pt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color.split(' ')[0]}`}>
                  {category.icon}
                </div>
                <h4 className="font-semibold text-lg">{category.title}</h4>
              </div>
              <p className="text-sm text-slate-700">{stack[category.key]}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Breakdown */}
      <Card>
        <CardContent className="pt-4">
          <h4 className="font-semibold text-slate-800 mb-4">Detailed Technology Breakdown</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-slate-800">Frontend Stack</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React 18', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'React Query'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-green-600" />
                  <h5 className="font-semibold text-slate-800">Backend Stack</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'Fastify', 'Python', 'FastAPI', 'GraphQL'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <HardDrive className="w-5 h-5 text-amber-600" />
                  <h5 className="font-semibold text-slate-800">Data Layer</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Redis', 'Elasticsearch', 'AWS S3', 'Snowflake'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-slate-800">AI/ML Stack</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['OpenAI GPT-4', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-learn'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-cyan-600" />
                  <h5 className="font-semibold text-slate-800">Infrastructure</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS EKS', 'Kubernetes', 'Docker', 'Terraform', 'CloudFlare', 'GitHub Actions'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="w-5 h-5 text-slate-600" />
                  <h5 className="font-semibold text-slate-800">DevOps & Monitoring</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Datadog', 'Prometheus', 'Grafana', 'ELK Stack', 'Sentry'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selection Rationale */}
      <Card className="bg-slate-50">
        <CardContent className="pt-4">
          <h4 className="font-semibold text-slate-800 mb-3">Technology Selection Rationale</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>React + TypeScript</strong> provides type safety and component reusability for scalable frontend development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span><strong>Node.js + Express</strong> offers high performance and extensive ecosystem for backend services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span><strong>PostgreSQL</strong> provides ACID compliance and JSON support for flexible data modeling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span><strong>OpenAI GPT-4</strong> enables advanced natural language processing capabilities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 font-bold">•</span>
              <span><strong>AWS EKS</strong> offers managed Kubernetes for container orchestration at scale</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
