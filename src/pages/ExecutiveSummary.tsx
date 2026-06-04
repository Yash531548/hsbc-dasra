import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <Layout>
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-8">Executive Summary</h1>

            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Disability is often made to appear as something contained within the body or the mind:
              an impairment, a limitation, a difference to be named and managed. But exclusion is
              produced in the world around it — in institutions, infrastructures, and norms that decide
              whose needs are built in, and whose are treated as exceptions. In India, this reality now
              sits alongside a stronger legal and policy framework. The RPwD Act, 2016, expanded
              disability categories, and recent judicial decisions affirming accessibility, including digital
              access, have widened the legal language of equality, dignity, and participation. Yet, for an
              estimated 40–90 million persons with disabilities, the distance between legal recognition
              and lived reality remains wide.
            </p>

            <div className="p-8 bg-box rounded-xl mb-12">
              <p className="text-2xl font-heading font-medium text-black ">
                "Yet, for an estimated <br /><span className="font-extrabold text-3xl">40–90 million </span><br /> persons with disabilities, the distance between legal recognition and lived reality remains wide."
              </p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-10">Across education, employment, healthcare, public infrastructure, and civic life, access
              is uneven, fragmented, and contingent on individual navigation rather than institutional
              readiness. These exclusions are not incidental. They shape autonomy, participation,
              household resilience, and economic life, with workforce non-participation by persons
              with disabilities estimated to cost India 3–7% of GDP annually. Disability exclusion is
              therefore not peripheral to development. It reveals how systems are built: whose needs
              are anticipated, whose are treated as exceptions, and who is left negotiating for entry</p>


            <p className="text-xl text-gray-700 leading-relaxed mb-10">This report draws on secondary research, 23 semi-structured interviews, two focus group
              discussions (FGDs), and a diagnostic survey of 109 disability-focused nonprofits. The
              findings are intended as a landscape diagnostic, with a focus on civil society action, rather
              than a representative census. While the report surfaces patterns, tensions, and operating
              realities across the ecosystem, we acknowledge the limitations. Furthermore, the
              research has an implicit focus on civil society. The role of the family, community, the state,
              and the market in ensuring disability inclusion has been explored in a limited manner. The
              study may also be biased by our role as a sector intermediary. </p>
            <div className="grid md:grid-cols-3 gap-6 mb-16 text-center">
              <div className="bg-usp p-6 rounded-2xl border border-border">
                <div className="text-4xl font-heading font-bold text-black mb-2">23</div>
                <div className="text-sm font-medium text-black">Semi-structured interviews</div>
              </div>
              <div className="bg-usp p-6 rounded-2xl border border-border text-center">
                <div className="text-4xl font-heading font-bold text-black mb-2">2</div>
                <div className="text-sm font-medium text-black">Focus group discussions (FGDs)</div>
              </div>
              <div className="bg-usp p-6 rounded-2xl border border-border text-center">
                <div className="text-4xl font-heading font-bold text-black mb-2">109</div>
                <div className="text-sm font-medium text-black">Diagnostic survey of nonprofits</div>
              </div>
            </div>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="text-primary">1.</span> Disability Inclusion as a Structural Condition
                </h2>
                <p className="text-gray-700 mb-4">Disability exclusion is not simply a failure of implementation. It is produced by how systems are designed, resourced, and held accountable.</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Across the lifecycle early gaps compound.</strong> 36% of schools are accessible. 55% have ramps.</li>
                  <li><strong>Within systems, access is mediated.</strong> Less than 40% of PwD possess a UDID card.</li>
                  <li><strong>Across social locations, exclusion intensifies.</strong> Labor force participation ~24%.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="text-primary">2.</span> The Nonprofit Landscape
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted p-4 rounded-xl">82% operational 10+ years</div>
                  <div className="bg-muted p-4 rounded-xl">64% state-level reach</div>
                  <div className="bg-muted p-4 rounded-xl">40% district-level</div>
                  <div className="bg-muted p-4 rounded-xl">36% board representation</div>
                </div>
                <p className="text-sm text-gray-500 font-medium">Budget breakdown: 15% under INR 50L | 18% INR 50L–1Cr | 31% INR 1–3Cr | 2% above INR 50Cr</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="text-primary">3.</span> Viewing Disability Across Systems
                </h2>
                <p className="text-gray-700 mb-3">Nonprofit efforts are concentrated in more fundable domains: education (63%), livelihoods (48%), early intervention (42%), healthcare (40%).</p>
                <p className="text-gray-700">Work addressing deeper conditions — research (8%), legal access (7%), narrative change (7%) — remains thinly resourced.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="text-primary">4.</span> Funding Architecture
                </h2>
                <p className="text-gray-700 mb-4">CSR only 1% of total on disability. INR 1,670 crore government allocation.</p>
                <div className="grid sm:grid-cols-4 gap-4 text-center">
                  <div className="border border-border p-3 rounded-lg"><div className="font-bold text-primary">88%</div><div className="text-xs">Fundraising</div></div>
                  <div className="border border-border p-3 rounded-lg"><div className="font-bold text-primary">51%</div><div className="text-xs">Partnerships</div></div>
                  <div className="border border-border p-3 rounded-lg"><div className="font-bold text-primary">48%</div><div className="text-xs">Leadership</div></div>
                  <div className="border border-border p-3 rounded-lg"><div className="font-bold text-primary">36%</div><div className="text-xs">MEL</div></div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="text-primary">5.</span> Cornerstones + Three Horizons
                </h2>
                <p className="text-gray-700">A framework built on 5 cornerstones for collaborative action, mapped across 3 time horizons: Access (Immediate), Architecture (Medium-term), and Leadership (Long-term).</p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link href="/foreword" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
                <ArrowLeft className="w-4 h-4" /> Foreword
              </Link>
              <Link href="/chapter-1" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
                Chapter 01 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}