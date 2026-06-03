import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, HeartPulse, Briefcase, Building, Scale, HeartHandshake } from "lucide-react";

export default function Chapter3() {
  const breakpoints = [
    {
      title: "Education",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Only 36% of schools are accessible. 2.14 million children with special needs enrolled but systemic gaps remain in assistive tech and teacher training."
    },
    {
      title: "Healthcare",
      icon: <HeartPulse className="w-6 h-6" />,
      desc: "Physical access barriers, lack of sign language interpreters, inaccessible hospital infrastructure."
    },
    {
      title: "Livelihoods",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Labor force participation at 24%. Employment discrimination, inaccessible workplaces, skills mismatches."
    },
    {
      title: "Accessibility (Infrastructure)",
      icon: <Building className="w-6 h-6" />,
      desc: "Transport gaps, digital exclusion, built environment barriers."
    },
    {
      title: "Legal & Civic",
      icon: <Scale className="w-6 h-6" />,
      desc: "Less than 40% possess UDID cards. Complex documentation, low awareness of RPwD Act entitlements."
    },
    {
      title: "Caregiver Support",
      icon: <HeartHandshake className="w-6 h-6" />,
      desc: "Invisible labor, chronic burnout, zero institutional support systems."
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-6xl md:text-8xl font-heading font-bold text-primary mb-6 opacity-90">03</div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">Where Inclusion Breaks: Breakpoints and Intervention Patterns</h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">
          
          <section>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-6">3.1 Breakpoint Analysis</h3>
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-12">
              Inclusion does not fail entirely all at once; it breaks at specific, identifiable junctions in a person's life.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {breakpoints.map((bp, i) => (
                <div key={i} className="group relative p-6 bg-muted rounded-2xl border border-border hover:border-primary transition-all duration-300 overflow-hidden">
                  <div className="flex items-center gap-4 mb-4 text-secondary group-hover:text-primary transition-colors">
                    {bp.icon}
                    <h4 className="font-heading font-bold text-lg">{bp.title}</h4>
                  </div>
                  <div className="relative">
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                      {bp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-8">3.2 Mapping Nonprofit Action</h3>
            <div className="bg-muted p-8 rounded-3xl border border-border">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-heading font-bold text-primary uppercase tracking-wider mb-4">More Fundable</h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Education</span>
                      <span className="text-primary font-bold">63%</span>
                    </li>
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Livelihoods</span>
                      <span className="text-primary font-bold">48%</span>
                    </li>
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Early Intervention</span>
                      <span className="text-primary font-bold">42%</span>
                    </li>
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Healthcare</span>
                      <span className="text-primary font-bold">40%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary uppercase tracking-wider mb-4">Thinly Resourced</h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Research</span>
                      <span className="text-secondary font-bold">8%</span>
                    </li>
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Caregiver Support</span>
                      <span className="text-secondary font-bold">8%</span>
                    </li>
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Legal Access</span>
                      <span className="text-secondary font-bold">7%</span>
                    </li>
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Narrative Change</span>
                      <span className="text-secondary font-bold">7%</span>
                    </li>
                    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-medium">Accessibility</span>
                      <span className="text-secondary font-bold">6%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-2" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 02
            </Link>
            <Link href="/chapter-4" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 04 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}