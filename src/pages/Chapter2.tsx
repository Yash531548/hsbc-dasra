import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid } from "recharts";

const geographicalData = [
  { name: 'State/Regional', value: 64 },
  { name: 'District/City', value: 40 },
  { name: 'Nationally', value: 38 },
  { name: 'Hyperlocal', value: 18 },
];

const budgetData = [
  { name: 'Under 50L', value: 15 },
  { name: '50L-1Cr', value: 18 },
  { name: '1-3Cr', value: 31 },
  { name: 'Over 50Cr', value: 2 },
];

const leadershipData = [
  { name: 'Board/Committee', value: 36 },
  { name: 'Management', value: 35 },
  { name: 'Founder/CEO', value: 20 },
];

const boardData = [
  { name: 'Representation', value: 36 },
  { name: 'No Representation', value: 64 },
];

const COLORS = ['#F26621', '#292563', '#94A3B8', '#D1D5DB'];

export default function Chapter2() {
  return (
    <Layout>
      <div className="bg-secondary py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-6xl md:text-8xl font-heading font-bold text-primary mb-6 opacity-90">02</div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">The Nonprofit Landscape: Roles, Reach, and Operating Realities</h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">
          <section>
            <div className="p-8 bg-muted border-l-4 border-primary rounded-r-xl mb-12">
              <p className="text-2xl font-heading font-bold text-secondary italic leading-snug m-0">
                "Those closest to need are also those least resourced to absorb its complexity."
              </p>
            </div>
          </section>

          <section className="space-y-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">2.1 Tracing the Shape</h3>
              <p className="text-gray-700">
                The disability nonprofit landscape is predominantly composed of deeply embedded, mature organizations. A striking 82% of surveyed nonprofits have been operational for over 10 years, reflecting immense persistence despite limited resources.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">2.2 Geographic Mapping</h3>
              <div className="h-[300px] w-full mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={geographicalData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" unit="%" />
                    <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                    <Tooltip cursor={{fill: '#f3f4f6'}} />
                    <Bar dataKey="value" fill="#F26621" radius={[0, 4, 4, 0]} animationDuration={1500} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">2.3 Understanding Roles</h3>
                <p className="text-gray-700 mb-6">Leadership representation of Persons with Disabilities (PwD) within organizations remains a growth area, with about a third showing representation at the board or management level.</p>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={boardData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        animationDuration={1500}
                      >
                        {boardData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="text-center text-sm font-medium text-gray-600 mt-2">Board Representation of PwD</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">2.4 Operating Conditions</h3>
                <p className="text-gray-700 mb-6">Organizations operate in highly constrained resource environments. The majority manage complex programmatic work on modest budgets.</p>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={budgetData} margin={{ top: 5, right: 5, left: -20, bottom: 25 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" />
                      <YAxis unit="%" />
                      <Tooltip cursor={{fill: '#f3f4f6'}} />
                      <Bar dataKey="value" fill="#292563" radius={[4, 4, 0, 0]} animationDuration={1500} />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="text-center text-sm font-medium text-gray-600 mt-2">Budget Distribution</div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-1" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 01
            </Link>
            <Link href="/chapter-3" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 03 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}