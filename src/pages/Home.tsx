import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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

export default function Home() {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className="relative bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-white"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <FadeIn>
                <h1 className="text-5xl lg:text-[64px] leading-[1.1] font-heading font-bold text-secondary mb-6">
                  FROM PROMISE<br />TO PRACTICE
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-xl lg:text-2xl font-heading font-semibold text-primary mb-6">
                  A Landscape Report on Disability Inclusion and Civil Society Action in India
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Understanding disability inclusion across policy, philanthropy, civil society, and systems change.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <a href="/pdf/report.pdf" download className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                    Download Report
                  </a>
                  <Link href="/foreword" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-secondary text-secondary shadow-sm hover:bg-secondary hover:text-white h-14 px-8 rounded-full text-base">
                    Start Reading
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="hidden lg:block relative">
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-full aspect-[3/4] max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden relative"
                style={{ backgroundImage: "url('/illustration.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
              >
                {/* <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #292563 0%, #F26621 100%)" }}></div> */}
                <div className="absolute inset-x-8 bottom-12 text-white">
                  <div className="flex gap-4 mb-8">
                    {/* <span className="font-heading font-bold text-xl">HSBC</span>
                    <span className="font-heading font-bold text-xl">DASRA</span> */}
                  </div>
                  <h2 className="font-heading font-bold text-4xl leading-tight mb-4">FROM PROMISE TO PRACTICE</h2>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About HSBC */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="aspect-square rounded-3xl bg-muted overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-primary/10 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="w-full h-full border-4 border-secondary/20 rounded-full flex items-center justify-center relative">
                    <div className="w-3/4 h-3/4 border-4 border-primary/30 rounded-full absolute -top-4 -right-4"></div>
                    {/* <span className="font-heading font-bold text-5xl text-secondary">HSBC</span> */}
                    <img src="/HSBC-Logo.png" alt="HSBC" className="h-48 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </FadeIn>
            <div>
              <FadeIn>
                <h2 className="text-4xl font-heading font-bold text-secondary mb-8">About HSBC</h2>
                <div className="space-y-6 text-lg text-gray-600 mb-10">
                  <p>HSBC India's strategy to support sustainable economic growth focuses on Community Investment (CSR interventions), Sustainable Operations, Sustainable Finance and Sustainability Risk.</p>
                  <p>HSBC India offers a full range of banking and financial services through 31 branches across 19 cities. Over 47,000 employees in banking, investment banking, capital markets, asset management, insurance, software development.</p>
                  <p>HSBC Holdings plc, headquartered in London, serves customers worldwide from 56 countries with assets of US$3,306bn.</p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Branches", val: 31 },
                  { label: "Cities", val: 19 },
                  { label: "Employees", val: 47000, suffix: "+" },
                  { label: "Countries", val: 56 }
                ].map((stat, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="p-6 rounded-2xl bg-muted border border-border">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">
                        <Counter to={stat.val} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm font-medium text-secondary">{stat.label}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: About Dasra */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <FadeIn>
                <h2 className="text-4xl font-heading font-bold text-secondary mb-8">About Dasra</h2>
                <div className="space-y-6 text-lg text-gray-600 mb-10">
                  <p>Dasra, meaning 'enlightened giving' in Sanskrit, is a pioneering strategic philanthropic organization that aims for a transformed India where a billion thrive with dignity and equity.</p>
                  <p>In 1999, Dasra began as a venture philanthropy fund. Over 26 years, we have engaged 1,208+ funders, mobilised $475 million in philanthropic capital, and supported 2,623+ organizations.</p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Funders", val: 1208, suffix: "+" },
                  { label: "Mobilized", val: 475, prefix: "$", suffix: "M" },
                  { label: "Organizations", val: 2623, suffix: "+" },
                  { label: "Years", val: 26 }
                ].map((stat, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="p-6 rounded-2xl bg-white border border-border">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">
                        <Counter to={stat.val} prefix={stat.prefix} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm font-medium text-secondary">{stat.label}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <FadeIn className="order-1 lg:order-2">
              <div className="aspect-square rounded-3xl bg-secondary overflow-hidden relative p-12 flex items-center justify-center">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at center, rgba(242, 102, 33, 0.2) 0%, transparent 70%)" }}></div>
                {/* <span className="font-heading font-bold text-5xl text-white relative z-10">DASRA</span> */}
                <img src="/Dasra.png" alt="Dasra" className="h-48 w-auto object-contain" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 4: About the Artwork */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                {/* <svg viewBox="0 0 200 200" className="w-full h-full text-white/80 drop-shadow-2xl z-10" fill="currentColor">
                  <path d="M100 20a20 20 0 100 40 20 20 0 000-40zm-15 50a15 15 0 00-15 15v40a15 15 0 0030 0v-10h10v50a15 15 0 0030 0v-40a15 15 0 00-15-15h-10V85a15 15 0 00-30 0z" />
                  <circle cx="85" cy="180" r="10" />
                  <circle cx="125" cy="180" r="10" />
                  <path d="M70 180h60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg> */}
                <img src="/illustration.jpeg" alt=""  className="bg-cover bg-center "/>
                {/* <div   style={{ backgroundImage: "url('/illustration.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}></div> */}
              </div>
            </FadeIn>
            <div>
              <FadeIn>
                <div className="text-primary font-heading font-bold tracking-widest uppercase mb-4 text-sm">About the Artwork</div>
                <h2 className="text-4xl font-heading font-bold mb-8">Rolling Against Odds</h2>
                <div className="space-y-6 text-lg text-white/80 mb-10 leading-relaxed">
                  <p>This painting portrays a girl with one artificial leg who embraces her disability with courage and pride. Balancing beautifully on skates, she transforms a challenge into a graceful expression of strength and resilience. She flaunts her difference, not as a weakness, but as a source of joy, confidence, and inspiration.</p>
                  <p><strong>Shaily</strong> — An aspiring artist with a locomotor disability and an amputated right hand, Shaily paints solely with their left hand — a powerful testament to resilience and creativity.</p>
                </div>
                <p className="text-sm text-white/60 italic">Discover more inspiring artwork by artists with disabilities at Atypical Advantage Arts.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Continue Reading */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <h2 className="text-4xl font-heading font-bold text-secondary mb-12 text-center">Continue Reading</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "", title: "Foreword", desc: "A message from HSBC India.", link: "/foreword" },
              { num: "", title: "Executive Summary", desc: "Key findings and overview.", link: "/executive-summary" },
              { num: "01", title: "Mapping the Terrain", desc: "How disability inclusion is structured.", link: "/chapter-1" },
              { num: "02", title: "The Nonprofit Landscape", desc: "Roles, reach, and operating realities.", link: "/chapter-2" },
              { num: "03", title: "Where Inclusion Breaks", desc: "Breakpoints and intervention patterns.", link: "/chapter-3" },
              { num: "04", title: "Strengthening the Ecosystem", desc: "Capital, capacity, and conditions.", link: "/chapter-4" },
              { num: "05", title: "Cornerstones for Action", desc: "Five shifts for collaborative action.", link: "/chapter-5" },
              { num: "06", title: "Time Horizons", desc: "From immediate access to systems change.", link: "/chapter-6" },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={card.link} className="block group h-full bg-muted p-8 rounded-2xl border border-border hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  {card.num && <div className="text-primary font-heading font-bold text-xl mb-4">Chapter {card.num}</div>}
                  {!card.num && <div className="text-secondary font-heading font-bold text-xl mb-4">Overview</div>}
                  <h3 className="font-heading font-bold text-secondary text-lg mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{card.desc}</p>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}