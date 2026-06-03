import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Chapter6() {
  return (
    <Layout>
      <div className="bg-secondary py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-6xl md:text-8xl font-heading font-bold text-primary mb-6 opacity-90">06</div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">Time Horizons for Disability Inclusion: From Immediate Access to Long-Term Systems Change</h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-secondary text-white py-16 lg:py-24 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 space-y-24">
          
          <div className="space-y-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 p-8 rounded-2xl md:w-3/4"
            >
              <h3 className="text-primary font-heading font-bold text-2xl mb-2">Horizon 1: Access</h3>
              <p className="text-white/60 uppercase tracking-widest text-sm font-bold mb-6">Immediate</p>
              <div className="mb-4">
                <span className="font-bold text-white/80">Core question:</span> <span className="text-white text-lg">Are existing systems reachable and usable?</span>
              </div>
              <div>
                <span className="font-bold text-white/80">What to build:</span> <span className="text-white/90">Certification, entitlements, services, rehabilitation, assistive technology, and direct support.</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/15 border border-white/30 p-8 rounded-2xl md:w-3/4 md:ml-auto"
            >
              <h3 className="text-primary font-heading font-bold text-2xl mb-2">Horizon 2: Architecture</h3>
              <p className="text-white/60 uppercase tracking-widest text-sm font-bold mb-6">Medium-term</p>
              <div className="mb-4">
                <span className="font-bold text-white/80">Core question:</span> <span className="text-white text-lg">Are institutions designed to carry inclusion?</span>
              </div>
              <div>
                <span className="font-bold text-white/80">What to build:</span> <span className="text-white/90">Accessibility standards, referral pathways, coordination mechanisms, government partnerships, accountability systems.</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/20 border border-white/40 p-8 rounded-2xl w-full"
            >
              <h3 className="text-primary font-heading font-bold text-2xl mb-2">Horizon 3: Leadership</h3>
              <p className="text-white/60 uppercase tracking-widest text-sm font-bold mb-6">Long-term</p>
              <div className="mb-4">
                <span className="font-bold text-white/80">Core question:</span> <span className="text-white text-lg">Can the field shape its own future?</span>
              </div>
              <div>
                <span className="font-bold text-white/80">What to build:</span> <span className="text-white/90">Disability-led institutions, shared evidence, financing architecture, narrative change, systems integration.</span>
              </div>
            </motion.div>

          </div>

          <div className="py-12 px-8 bg-black/30 rounded-3xl border-l-4 border-primary">
            <p className="text-2xl md:text-3xl font-heading font-semibold italic leading-relaxed text-white">
              "Disability exclusion is produced by systems built around a narrow idea of whose bodies, minds, and lives are expected to fit. The work ahead lies in building the legitimacy of disabled life itself — not as burden, exception, or compromise, but as complete lives with equal claim to dignity, participation, investment, and continuity."
            </p>
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-5" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 05
            </Link>
            <Link href="/resources" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
              Resources <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}