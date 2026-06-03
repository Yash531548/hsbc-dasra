import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Accessibility, Eye, Keyboard, Monitor, Volume2 } from "lucide-react";

export default function AccessibilityPage() {
  const sections = [
    {
      icon: <Accessibility className="w-8 h-8 text-primary" />,
      title: "Our Commitment",
      desc: "This digital report is built with accessibility as a first principle, reflecting the report's own focus on disability inclusion. We believe content should be consumable by everyone, regardless of ability."
    },
    {
      icon: <Monitor className="w-8 h-8 text-secondary" />,
      title: "WCAG Compliance",
      desc: "We aim for WCAG 2.1 AA compliance. The site utilizes semantic HTML5, appropriate ARIA labels, and clear landmark regions to ensure assistive technologies can parse the content meaningfully."
    },
    {
      icon: <Keyboard className="w-8 h-8 text-secondary" />,
      title: "Keyboard Navigation",
      desc: "Full Tab navigation is supported across all interactive elements. The Escape key closes dropdown menus and overlays. Arrow keys can be used for scrolling. Focus indicators are preserved."
    },
    {
      icon: <Eye className="w-8 h-8 text-secondary" />,
      title: "Screen Reader Support",
      desc: "Tested with NVDA and VoiceOver. All images have descriptive alt text. Tables have proper header associations. Visual styling does not hide content from screen readers."
    },
    {
      icon: <Volume2 className="w-8 h-8 text-primary" />,
      title: "Read Aloud",
      desc: "Use the accessibility widget (orange button, bottom right) to have any page read aloud using your browser's built-in speech synthesis. Controls include pause, resume, and stop."
    },
    {
      icon: <Eye className="w-8 h-8 text-secondary" />,
      title: "Focus Reading Mode",
      desc: "Enable Focus Mode via the accessibility widget to hide distractions, increase font size, widen line-height, and optimize the layout for comfortable long-form reading."
    },
    {
      icon: <Monitor className="w-8 h-8 text-secondary" />,
      title: "Visual Adjustments",
      desc: "The accessibility widget provides options to increase/decrease text size, toggle high contrast mode, switch to dark mode, enable grayscale, and force underlines on all links."
    }
  ];

  return (
    <Layout>
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6">Accessibility Statement</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted p-8 rounded-2xl border border-border flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="bg-white p-4 rounded-xl shadow-sm shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-3">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-secondary text-white p-8 md:p-12 rounded-3xl text-center mt-16">
            <h3 className="text-2xl font-heading font-bold mb-4">Feedback & Contact</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              We welcome your feedback on the accessibility of this report. Please let us know if you encounter accessibility barriers.
            </p>
            <a href="mailto:accessibility@hsbc.com" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary transition-colors">
              accessibility@hsbc.com
            </a>
          </div>

        </div>
      </div>
    </Layout>
  );
}