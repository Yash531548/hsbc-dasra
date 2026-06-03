import { Layout } from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { FileText, PieChart, Info, BookOpen, Quote, Sparkles, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Counter = ({ to, prefix = "", suffix = "" }: { to: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * to));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, to]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export default function Resources() {
  const resources = [
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Download Full Report",
      desc: "From Promise to Practice: Complete Landscape Report (PDF, 2026)",
      link: "/pdf/report.pdf",
      action: "Download PDF"
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Executive Summary",
      desc: "Key findings and recommendations",
      link: "/executive-summary",
      action: "Read Summary"
    },
    {
      icon: <Info className="w-8 h-8 text-secondary" />,
      title: "Research Methodology",
      desc: "How the research was conducted",
      link: "/#about",
      action: "View Methodology"
    },
    {
      icon: <PieChart className="w-8 h-8 text-secondary" />,
      title: "Figures & Charts",
      desc: "All data visualizations and ecosystem maps",
      link: "/chapter-2",
      action: "View Charts"
    },
    {
      icon: <Quote className="w-8 h-8 text-secondary" />,
      title: "How to Cite",
      desc: "Dasra, From Promise to Practice... Mumbai: Dasra, 2026.",
      link: "#",
      action: "Copy Citation"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Atypical Advantage Arts",
      desc: "Discover artwork by artists with disabilities",
      link: "https://atypicaladvantage.in/",
      action: "Visit Site"
    }
  ];

  return (
    <Layout>
      <div className="bg-muted py-16 lg:py-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl space-y-20">
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6 text-center">Resources & Downloads</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">Access the full report, methodology, and supplementary materials to deepen your understanding of disability inclusion.</p>
          </motion.div>

          {/* KPI Banner */}
          <div className="bg-secondary rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-xl font-heading font-bold mb-8 text-primary uppercase tracking-widest text-center">Key Statistics Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2"><Counter to={90} suffix="M" /></div>
                <div className="text-xs text-white/70">Persons with Disabilities (Est)</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2"><Counter to={24} suffix="%" /></div>
                <div className="text-xs text-white/70">Workforce Participation</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2"><Counter to={36} suffix="%" /></div>
                <div className="text-xs text-white/70">Accessible Schools</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2"><Counter to={1} suffix="%" /></div>
                <div className="text-xs text-white/70">CSR on Disability</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2"><Counter to={1670} prefix="₹" suffix="Cr" /></div>
                <div className="text-xs text-white/70">DEPwD Budget</div>
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all flex flex-col h-full group"
              >
                <div className="mb-6 bg-muted w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-8 flex-1">{item.desc}</p>
                <a 
                  href={item.link} 
                  className={`font-semibold text-sm uppercase tracking-wider ${item.title.includes('Download') ? 'text-primary' : 'text-secondary group-hover:text-primary'} transition-colors`}
                >
                  {item.action} →
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}