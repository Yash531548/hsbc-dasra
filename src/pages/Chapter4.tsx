import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid } from "recharts";

const capacityData = [
  { name: 'Fundraising', value: 88 },
  { name: 'Partnerships', value: 51 },
  { name: 'Leadership', value: 48 },
  { name: 'MEL', value: 36 },
];

const fundingData = [
  { name: 'Disability CSR', value: 1 },
  { name: 'Other CSR', value: 99 },
];

const COLORS = ['#F26621', '#E2E8F0'];

export default function Chapter4() {
  return (
    <Layout>
      <div className="bg-secondary py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-6xl md:text-8xl font-heading font-bold text-primary mb-6 opacity-90">04</div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">Strengthening the Ecosystem: Capital, Capacity, and the Conditions for Durable Action</h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">
          
          <section>
            <div className="p-8 bg-muted border-l-4 border-primary rounded-r-xl mb-12">
              <p className="text-2xl font-heading font-bold text-secondary italic leading-snug m-0">
                "The current funding architecture shows underinvestment in core, connective, and field-building functions — the very elements required for long-term system change."
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-8">4.1 Philanthropic Capital</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-muted p-6 rounded-2xl border border-border text-center">
                <div className="text-3xl font-heading font-bold text-secondary mb-2">₹27L Cr</div>
                <div className="text-sm font-medium text-gray-600">India's Social Sector Spending</div>
              </div>
              <div className="bg-muted p-6 rounded-2xl border border-border text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">1%</div>
                <div className="text-sm font-medium text-gray-600">CSR Allocated to Disability</div>
              </div>
              <div className="bg-muted p-6 rounded-2xl border border-border text-center">
                <div className="text-3xl font-heading font-bold text-secondary mb-2">₹1,670 Cr</div>
                <div className="text-sm font-medium text-gray-600">DEPwD Budget FY 26-27</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Philanthropic capital dedicated to disability inclusion remains disproportionately small compared to the scale of the need. Only about 4% of companies contribute to this space at all, and of total CSR spending, a mere 1% reaches disability initiatives.
                </p>
              </div>
              <div className="h-[250px] relative flex flex-col items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={fundingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      animationDuration={1500}
                    >
                      {fundingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center -mt-4">
                  <div className="text-2xl font-bold text-primary">1%</div>
                </div>
                <div className="text-center text-sm font-medium text-gray-600 mt-2">Disability vs Total CSR</div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-8">4.2 Organizational Capacity</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              System change requires resilient organizations. However, nonprofits working in this sector identify profound gaps in their organizational capacity, limiting their ability to scale and sustain impact.
            </p>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={capacityData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" unit="%" />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                  <Tooltip cursor={{fill: '#f3f4f6'}} />
                  <Bar dataKey="value" fill="#292563" radius={[0, 4, 4, 0]} animationDuration={1500} />
                </BarChart>
              </ResponsiveContainer>
              <div className="text-center text-sm font-medium text-gray-600 mt-4">Reported Organizational Capacity Needs</div>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-3" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 03
            </Link>
            <Link href="/chapter-5" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 05 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}