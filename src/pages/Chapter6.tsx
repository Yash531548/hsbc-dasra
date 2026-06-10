import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Chapter6() {
  return (
    <Layout>
      <div className="py-20 bg-chHero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-7xl font-accent font-bold text-secondary leading-none mb-2">06</div>
            <h1 className="text-4xl md:text-5xl font-accent text-secondary leading-tight uppercase tracking-wide">
              Time Horizons for Disability
              Inclusion – From Immediate
              Access to Long-Term
              Systems Change
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">
          <section>
            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              Change in disability inclusion does not happen at a
              uniform speed, necessarily. Some priorities require
              immediate strengthening within existing systems, while
              others depend on longer-term institutional and narrative
              shifts. The three horizons framework helps locate these
              efforts across time: from access to formal recognition
              and services, to institutional pathways for inclusion, to
              systems integration and field leadership. Read this way,
              the horizon model is a map of overlapping responsibilities
              that must deepen together.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              The Three Horizons framework offers a lens to understand this evolution as a set
              of overlapping and mutually reinforcing shifts in focus and ambition. Rather than
              moving on from earlier roles, ecosystem actors are required to operate across
              horizons simultaneously: strengthening existing systems, embedding inclusion
              within institutions, and enabling long-term alignment and leadership across the
              field. The cornerstones identified in this report act as pathways through these
              horizons, deepening inclusion for the future, while remaining grounded in present
              realities.
            </p>
            <img src="/ch6/ch6Fig11.png" alt="three disablity inclusion" className="w-full object-contain mb-4" />
            <div className="space-y-8 mb-10">
              {[
                {
                  title: "Horizon 1: Strengthening Access to Existing Systems and Services",
                  text: "The foundation of the ecosystem lies in formal recognition and access—legal entitlements, disability certification, service delivery, assistive technology, and rehabilitation support. These are not transitional activities; they remain essential for millions of people still outside the reach of even basic provisions. Horizon 1 focuses on strengthening reach, quality, and continuity—ensuring that existing systems work more effectively, even as the ecosystem builds toward deeper change.",
                },
                {
                  title: "Horizon 2: Embedding Institutional Pathways for Inclusion",
                  text: "The next frontier is institutional. This requires moving beyond individual service delivery to embedding inclusion within how systems operate. It includes developing standards and protocols, advancing accessibility norms, enabling cross-sector coordination, and strengthening government partnerships. Horizon 2 focuses on building consistency and scale—shifting inclusion from isolated programs to practices embedded within institutions.",
                },
                {
                  title: "Horizon 3: Enabling Systems Integration and Field Leadership",
                  text: "The long horizon requires two reinforcing shifts: strengthening field leadership and enabling systems integration. This includes shaping narratives and leadership—building disability-led networks, advancing representation, and influencing discourse—while embedding inclusion across systems through integrated policy, financing, data, and accountability mechanisms. Horizon 3 focuses on sustaining inclusion through alignment—where systems, leadership, and institutions move together toward long-term coherence.",
                },
              ].map((horizon, i) => (
                <div key={i}>
                  <p className="text-black text-xl leading-relaxed mb-2 font-bold">{horizon.title}</p>
                  <p className="text-xl leading-relaxed text-gray-700">{horizon.text}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Taken together, the Three Horizons underscore a central insight of this report: the
              future of disability inclusion in India will be built on holding the tension between
              immediate delivery and long‑term transformation. Progress will be driven by
              actors and investments capable of working across horizons, responding to urgent
              needs while simultaneously building the institutional, systemic, and leadership
              foundations required for durable inclusion.
            </p>
            <p className="text-black text-xl leading-relaxed mb-2 font-bold">Supporting this mandate is not only a strategic imperative for the sector, but a
              necessary condition for achieving equitable and inclusive development at scale.</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Please note: The Three Horizons Framework is a foresight model used to manage
              transformational change. Horizon 1 represents the current system and its declining
              relevance; Horizon 2 involves the “pockets of the future” or innovations that disrupt
              the status quo; and Horizon 3 envisions the long-term systemic shifts required for
              a sustainable future. Organizations use this to balance immediate needs with longterm field-building goals.
            </p>
          </section>



          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-5" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 05
            </Link>
            <Link href="/resources" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Resources <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}