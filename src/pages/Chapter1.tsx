import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Chapter1() {
  return (
    <Layout>
      {/* Chapter Header Band */}
      <div className="bg-secondary py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-6xl md:text-8xl font-heading font-bold text-primary mb-6 opacity-90">01</div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">Mapping the Terrain: How Disability Inclusion is Structured in India</h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">
          <section>
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-12">
              "Every landscape is shaped twice: once by what exists on the ground, and once by what a society decides to make visible."
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">1.1 How to Read This Report</h3>
                <p className="text-gray-700">This report provides a structural analysis of disability inclusion in India, examining the interplay between policy frameworks, philanthropic capital, and the operational realities of nonprofits.</p>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">1.2 How the Terrain of Disability Inclusion was Assembled</h3>
                <p className="text-gray-700">The evolution from a charity-based perspective to a rights-based approach marks a significant shift in India's legal and social landscape.</p>
              </div>
            </div>
          </section>

          {/* Iceberg Diagram */}
          <section className="bg-muted p-8 md:p-12 rounded-3xl border border-border">
            <h3 className="text-2xl font-heading font-bold text-secondary mb-8 text-center">The Iceberg of Exclusion</h3>
            <div className="max-w-md mx-auto relative">
              <div className="relative z-10 w-full h-32 bg-blue-100/50 backdrop-blur-sm border-b-2 border-blue-300 rounded-t-xl flex flex-col items-center justify-center p-4 text-center">
                <span className="text-primary font-bold tracking-widest text-sm mb-1">VISIBLE (10%)</span>
                <span className="text-secondary font-medium">Physical access, Laws, Certifications</span>
              </div>
              <div className="relative z-0 w-full h-64 bg-secondary text-white rounded-b-3xl rounded-t-sm mt-1 flex flex-col items-center justify-center p-8 text-center shadow-inner" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}>
                <span className="text-primary font-bold tracking-widest text-sm mb-2 opacity-90">INVISIBLE (90%)</span>
                <span className="text-white/90 font-medium">Stigma, Systemic exclusion, Assumptions, Power structures</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-8">1.3 Rights Timeline</h3>
            <div className="relative border-l-2 border-border ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:flex md:justify-between md:pt-8 space-y-8 md:space-y-0 pb-8">
              {[
                { year: "1995", title: "Persons with Disabilities Act", desc: "First major legal recognition" },
                { year: "2007", title: "UN CRPD", desc: "Ratification by India" },
                { year: "2016", title: "RPwD Act", desc: "Expanded 21 disability categories" },
                { year: "2026", title: "Report", desc: "From Promise to Practice" }
              ].map((item, i) => (
                <div key={i} className="relative pl-8 md:pl-0 md:w-1/4 md:pr-4">
                  <div className="absolute left-[-9px] md:left-auto md:-top-[41px] w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <div className="text-primary font-heading font-bold text-2xl mb-1">{item.year}</div>
                  <div className="font-heading font-bold text-secondary mb-1 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-4">1.4 Making the System Visible</h3>
            <p className="text-gray-700 mb-8">Addressing disability requires understanding it not as an individual deficit, but as a systemic issue.</p>
            
            <h3 className="text-2xl font-heading font-bold text-secondary mb-4">1.5 Who Makes the Ecosystem Function</h3>
            <p className="text-gray-700">A complex web of actors operates within this space: Government bodies, Disabled People's Organizations (DPOs), NGOs, Philanthropic entities, and Corporate CSR initiatives.</p>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/executive-summary" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Executive Summary
            </Link>
            <Link href="/chapter-2" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 02 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}