import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const cornerstones = [
  {
    num: "01",
    title: "Design access from the start",
    shift: "Accessibility built into digital, physical, workplace systems at inception",
    unlocks: "Reduces accommodation needs, creates institutional standards"
  },
  {
    num: "02",
    title: "Resource lifecycle continuity",
    shift: "Support across transitions: early ID, schooling, skilling, work, adulthood, care",
    unlocks: "Prevents falling between systems, strengthens pathways"
  },
  {
    num: "03",
    title: "Address compounded exclusion",
    shift: "Account for PwD least visible in data and programs",
    unlocks: "Brings caste, gender, poverty, geography into core design"
  },
  {
    num: "04",
    title: "Build accountability infrastructure",
    shift: "Rights backed by enforcement, grievance redressal, legal literacy, data",
    unlocks: "Moves from formal recognition to claimable access"
  },
  {
    num: "05",
    title: "Invest in disabled leadership",
    shift: "DPOs, disabled leaders, coalitions, peer networks",
    unlocks: "Field learns, aligns, sets priorities through lived expertise"
  }
];

export default function Chapter5() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      <div className="bg-secondary py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-6xl md:text-8xl font-heading font-bold text-primary mb-6 opacity-90">05</div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">Cornerstones for Collaborative Action</h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            Moving from isolated interventions to systemic change requires fundamental shifts in how the sector operates. These five cornerstones define the critical areas where collaborative action can unlock durable, systemic transformation.
          </p>

          <div className="space-y-4">
            {cornerstones.map((item, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden bg-muted transition-all">
                <button 
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-heading font-bold text-primary">{item.num}</span>
                    <h3 className="text-xl font-heading font-bold text-secondary">{item.title}</h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 md:p-8 bg-muted border-t border-border grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">System Shift Required</h4>
                      <p className="text-secondary font-medium text-lg">{item.shift}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">What it Unlocks</h4>
                      <p className="text-primary font-medium text-lg">{item.unlocks}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-4" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 04
            </Link>
            <Link href="/chapter-6" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 06 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}