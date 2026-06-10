import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
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
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-14 ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <FadeIn>
                <h1 className="text-5xl lg:text-[64px] leading-[1.1] font-accent font-bold text-secondary mb-6">
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
                  {/* <Link href="/foreword" className=" inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-secondary text-secondary shadow-sm hover:bg-secondary hover:text-white h-14 px-8 rounded-full text-base">
                    Start Reading
                  </Link> */}
                </div>
              </FadeIn>
            </div>

            <div className="hidden lg:block relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-full aspect-[3/4] max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden relative"
                style={{ backgroundImage: "url('/illustration.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About HSBC */}
      <section className="py-10 lg:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <h2 className="text-4xl font-heading font-bold text-primary mb-3">About HSBC</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </FadeIn>

          <div className="space-y-10">
            <FadeIn delay={0.1}>
              <h3 className="font-heading font-bold text-secondary uppercase tracking-widest text-sm mb-3">
                HSBC India and Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                HSBC India’s strategy to support sustainable economic growth, focuses on Community Investment (CSR interventions), Sustainable Operations, Sustainable Finance and Sustainability Risk. The strategy is delivered through a combination of programmes, collaboration, and partnerships. We believe it requires a concerted effort between business, governments and other stakeholders on policies and programmes to support transition to a more sustainable future.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="font-heading font-bold text-secondary uppercase tracking-widest text-sm mb-3">
                HSBC India
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                HSBC India offers a full range of banking and financial services through 31 branches across 19 cities. The Bank is at the forefront in arranging deals for Indian companies investing overseas and foreign investments into the country. HSBC is one of India’s leading financial services groups, with over 47,000 employees in its banking, investment banking and capital markets, asset management, insurance, software development and global resourcing operations in the country. It is a leading custodian in India.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="font-heading font-bold text-secondary uppercase tracking-widest text-sm mb-3">
                HSBC HOLDINGS PLC
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                HSBC Holdings plc, the parent company of HSBC, is headquartered in London. HSBC serves customers worldwide from offices in 56 countries and territories. With assets of US$3,306bn at 31 March 2026, HSBC is one of the world’s largest banking and financial services organisations.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h3 className="font-heading font-bold text-secondary uppercase tracking-widest text-sm mb-3">
                THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                The Hongkong and Shanghai Banking Corporation Limited is the founding member of the HSBC Group. HSBC serves customers worldwide from offices in 56 countries and territories. With assets of US$3,306bn at 31 March 2026, HSBC is one of the world’s largest banking and financial services organisations.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3: About Dasra */}
      <section className="py-10 lg:py-24 bg-muted">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 gap-16 items-center">
            <div className="">
              <FadeIn>
                <h2 className="text-4xl font-heading font-bold text-secondary mb-3">About Dasra</h2>
                <div className="w-16 h-1 bg-secondary rounded-full mb-12" />
              </FadeIn>
              <div className="space-y-10">
                <FadeIn delay={0.1}>

                  <p className="text-gray-600 leading-relaxed text-justify mb-1">
                    Dasra, meaning ‘enlightened giving’ in Sanskrit, is a pioneering strategic philanthropic organization that aims for a transformed India where a billion thrive with dignity and equity.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    In 1999, Dasra began as a venture philanthropy fund to invest in earlystage nonprofit organizations in India. We recognized early that we had the responsibility, the capability, the connections, and the energy to be a long-game change agent and we resolved to make a transformative difference through it. Dasra has gone through different stages of evolution - from a philanthropy fund to a bridge between NGOs and funders, and now two decades later, it has cemented its identity as a leading nonprofit systems orchestrator working with diverse stakeholders across the social impact ecosystem. Over 26 years, we have engaged 1,208+ funders, mobilised $475 million in philanthropic capital, and supported 2,623+ organizations. We strengthen organizations and leaders, build philanthropy infrastructure, and unlock knowledge and long-term capital to cocreate solutions that shift systems and advance a more equitable future.
                  </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h3 className="font-heading font-bold text-secondary uppercase tracking-widest text-sm mb-3">
                    How to cite
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Dasra, From Promise to Practice: A Landscape Report on Disability Inclusion and Civil Society Action in India (Mumbai: Dasra, 2026).
                  </p>
                </FadeIn>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: About the Artwork */}
      <section className="py-10 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="aspect-square rounded-2xl p-8 flex items-center justify-center relative overflow-hidden -ml-9">
                <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <img src="/illustration.jpeg" alt="" className="bg-cover bg-center " />
              </div>
            </FadeIn>
            <div>
              <FadeIn>
                <div className="text-primary font-heading font-bold tracking-widest uppercase mb-4 text-sm">About the Artwork</div>
                <h2 className="text-4xl font-heading font-bold mb-8">Rolling Against Odds</h2>
                <div className="space-y-6 text-lg text-white/80 mb-10 leading-relaxed">
                  <p>This painting portrays a girl with one artificial leg who embraces her disability with courage and pride. Balancing beautifully on skates, she transforms a challenge into a graceful expression of strength and resilience. She flaunts her difference, not as a weakness, but as a source of joy, confidence, and inspiration. Rolling Against Odds celebrates her journey of balance, inclusion, and unshakable determination — showing the world that nothing, not even disability, can stop her from living fully, freely, and beautifully.</p>
                </div>
              </FadeIn>
            </div>
          </div>
          {/* About the Artist */}
          <FadeIn>
            <div className="mt-20 pt-16 border-t border-white/10">
              <h2 className="text-4xl font-heading font-bold text-primary mb-10">About the Artist</h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <div>
                  <h3 className="font-heading font-bold text-white text-xl mb-3">Shaily</h3>
                  <p>
                    An aspiring artist with a locomotor disability and an amputated right hand, Shaily paints solely with their left hand — a powerful testament to resilience and creativity. Art has been an inseparable part of their life since childhood. At the age of six, they began sketching deities from calendar images, instinctively seeing the world through a unique lens. While others painted the sun in shades of yellow and orange, they envisioned it in hues of white and blue.
                  </p>
                </div>
                <p>
                  Untrained in any formal institution, their artistry is driven purely by passion and instinct. Praised early on for distinctive handwriting and imaginative thinking, they discovered that true joy in art lies in expressing emotions rather than replicating visuals. For them, painting is not just a creative outlet, but a means of transformation — turning limitations into possibilities and imagination into impactful expression.
                </p>
                <p className="font-semibold text-white">
                  We also extend our sincere thanks to <a
                    href="https://atypicaladvantage.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >Atypical Advantage</a> for their support in helping source and facilitate the artwork for the cover page of this report.
                </p>
                <p>
                  Discover more inspiring artwork by artists with disabilities at{" "}
                  <a
                    href="https://atypicaladvantage.in/atypical-art/arts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    Atypical Advantage Arts
                  </a>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Continue Reading */}
      <section className="py-10 lg:py-24 bg-white">
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
                  <div className="flex flex-col h-full">
                    {card.num && <div className="text-primary font-heading font-bold text-xl mb-4">Chapter {card.num}</div>}
                    {!card.num && <div className="text-secondary font-heading font-bold text-xl mb-4">Overview</div>}
                    <h3 className="font-heading font-bold text-secondary text-lg mb-3">{card.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{card.desc}</p>
                    <ArrowRight className="w-5 h-5 text-primary mt-auto group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}