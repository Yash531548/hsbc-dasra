import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Astroid } from "lucide-react";

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
                Yet, for an estimated <br /><span className="font-extrabold text-3xl">40–90 million </span><br /> persons with disabilities, the distance between legal recognition and lived reality remains wide.
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
            <div className="grid md:grid-cols-5 gap-0 mb-10 text-center">
              <div className="bg-usp p-4 md:p-6 rounded-2xl border border-border">
                <div className="text-2xl md:text-4xl font-heading font-bold text-black mb-2">23</div>
                <div className="text-xs md:text-sm font-medium text-black">Semi-structured interviews</div>
              </div>
              <div className="self-center text-3xl md:text-6xl text-green-700">+</div>
              <div className="bg-usp p-4 md:p-6 rounded-2xl border border-border text-center">
                <div className="text-2xl md:text-4xl font-heading font-bold text-black mb-2">2</div>
                <div className="text-xs md:text-sm font-medium text-black">Focus group discussions (FGDs)</div>
              </div>
              <div className="self-center text-3xl md:text-6xl text-green-700">+</div>
              <div className="bg-usp p-4 md:p-6 rounded-2xl border border-border text-center">
                <div className="text-2xl md:text-4xl font-heading font-bold text-black mb-2">109</div>
                <div className="text-xs md:text-sm font-medium text-black">Diagnostic survey of nonprofits</div>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-10">This report draws on secondary research, 23 semi-structured interviews, two focus group
              discussions (FGDs), and a diagnostic survey of 109 disability-focused nonprofits. The
              findings are intended as a landscape diagnostic, with a focus on civil society action, rather
              than a representative census. While the report surfaces patterns, tensions, and operating
              realities across the ecosystem, we acknowledge the limitations. Furthermore, the
              research has an implicit focus on civil society. The role of the family, community, the state,
              and the market in ensuring disability inclusion has been explored in a limited manner. The
              study may also be biased by our role as a sector intermediary. </p>

            <div className="space-y-16">
              {/* one */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-chHeading mb-4 flex items-center gap-3">
                  <span className="text-background rounded-full bg-chHeading w-8 aspect-square flex item-center justify-center">1</span> Disability Inclusion as a Structural Condition
                </h2>
                <p className="text-gray-900 mb-4 text-xl">Disability exclusion is not simply a failure of implementation. It is produced by how
                  systems are designed, resourced, and held accountable. Most institutions continue to be
                  built around a narrow idea of the “normal” user, learner, or worker. When bodies, minds, or
                  communication styles fall outside this norm, exclusion is reproduced through inaccessible
                  infrastructure, fragmented service delivery, weak enforcement, and limited data visibility.</p>
                <h3 className="text-secondary text-xl font-heading font-bold mb-6 ">THREE DYNAMICS SHAPE HOW THIS EXCLUSION OPERATES:</h3>
                <div className="space-y-5 text-gray-900 mb-4 ">
                  <div className="text-xl">
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                      <Astroid className="w-4 h-4 text-astroid   shrink-0" fill="#9196CD" />
                      Across the lifecycle early gaps compound.
                    </div>
                    <p className="pl-6 mt-1">Although over 2.14 million children with special needs are enrolled in schools, only 36% of schools are accessible, and 55% have ramps with handrails. Early barriers translate into constrained outcomes in education, employment, and autonomy.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-5 text-xl">
                      {[
                        { heading: "Within systems, access is mediated through processes that often exclude.", text: "Less than 40% of persons with disabilities possess a UDID card, despite its role as a gateway to entitlements." },
                        { heading: "Across social locations, exclusion intensifies. ", text: "Labor force participation among persons with disabilities is around 24%, and significantly lower for women with disabilities, reflecting the  effects of caste, gender, geography, and poverty" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex items-start  gap-2 font-bold text-gray-900 ">
                            <Astroid className="w-4 h-4 text-astroid  mt-2 shrink-0" fill="#9196CD" />
                            {item.heading}
                          </div>
                          <p className="pl-6 mt-1">{item.text}</p>
                        </div>
                      ))}
                    </div>
                    <img src="/executive/10.png" alt="lifecycle" className="w-auto object-contain" />
                  </div>
                </div>
                <p className="leading-relaxed text-xl ">The result is a persistent misalignment: rights exist, but systems remain underprepared to deliver them.</p>
              </section>
              {/* Two */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-chHeading mb-4 flex items-center gap-3">
                  <span className="text-background rounded-full bg-chHeading w-8 aspect-square flex item-center justify-center">2</span> The Nonprofit Landscape  </h2>
                <p className="text-gray-900 mb-4 text-xl">The nonprofit sector occupies a structurally unusual position in the disability ecosystem.
                  It sits between the state, the market, the family, and the community, translating across
                  fragmented or siloed systems, which have been formally claimed but practically underdelivered.</p>
                <h3 className="text-secondary text-xl font-heading font-bold mb-6 ">DATA FROM 109 DISABILITY-FOCUSED NONPROFITS REVEALS A SECTOR THAT
                  IS MATURE, ADAPTIVE, AND CHRONICALLY STRETCHED:</h3>
                <div className="space-y-5 text-gray-900 mb-4 ">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-5 text-xl">
                      {[
                        { heading: "A stable and mature sector", text: "82% of organizations have been operational for more than a decade, reflecting institutional experience and depth of practice." },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex items-center gap-2 font-bold text-gray-900 ">
                            <Astroid className="w-4 h-4 text-astroid   shrink-0" fill="#9196CD" />
                            {item.heading}
                          </div>
                          <p className="pl-6 mt-1">{item.text}</p>
                        </div>
                      ))}
                    </div>
                    <img src="/executive/secondheadingchart.png" alt="lifecycle" className="w-auto object-contain" />
                  </div>

                  {/*  */}
                  <div className="text-xl">
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                      <Astroid className="w-4 h-4 text-astroid   shrink-0" fill="#9196CD" />
                      The sector is largely small to mid-sized
                    </div>
                    <p className="pl-6 mt-1">15% organizations operate under INR 50 lakh, 18% between INR 50 lakh and INR 1 crore, and 31% between INR 1–3 crore. Only 2% organizations reported budgets above INR 50 crore.</p>
                    <img src="/executive/secondpointchart.png" alt="" className="object-contain w-auto" />
                  </div>
                  {/*  */}
                  <div className="text-xl">
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                      <Astroid className="w-4 h-4 text-astroid   shrink-0" fill="#9196CD" />
                      Geographic reach is distributed but uneven
                    </div>
                    <p className="pl-6 mt-1">64% of organizations work at the state or regional level, 40% at the district or city level,38% nationally, and only 18% at the hyperlocal level</p>
                    <img src="/executive/thirdpointchart.png" alt="" className="object-contain w-auto mt-1" />
                  </div>
                  {/*  */}
                  <div className="text-xl">
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                      <Astroid className="w-4 h-4 text-astroid   shrink-0" fill="#9196CD" />
                      Representation of persons with disabilities is uneven across authority levels
                    </div>
                    <p className="pl-6 mt-1">36% of organizations report representation on boards or advisory committees, 35% in
                      management or decision-making roles, and 20% at founder, CEO, or director level.</p>
                    <img src="/executive/representationPie.png" alt="" className="object-contain w-auto mt-1" />
                    <p className="pl-6 mt-1">Organizations routinely work across multiple domains like education, health, livelihoods,
                      early intervention, not by design expansion, but because lived needs do not align with
                      institutional silos. The outcome leads to a structural inversion: those closest to need are
                      also those least resourced to absorb its complexity. Over time, responsibility settles with
                      nonprofits, while systems meant to carry that responsibility remain underdeveloped.</p>
                  </div>
                </div>
              </section>
              {/* Three */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-chHeading mb-4 flex items-center gap-3">
                  <span className="text-background rounded-full bg-chHeading w-8 aspect-square flex item-center justify-center">3</span> Viewing Disability Across Systems and Domains
                </h2>
                <p className="text-gray-900 mb-4 text-xl">Disability exclusion is not confined to any one domain. It cuts across education,
                  employment, health, legal and civic life, and social participation. Across these domains,
                  exclusion appears not as isolated breakdowns but as repeating pathways, from school
                  dropout to workforce exclusion, from fragmented care to limited public participation.</p>
                <p className="text-gray-900 mb-4 text-xl">These pathways are shaped at multiple levels: visible events, recurring patterns,
                  underlying structures, and mental models. As a result, exclusion is reproduced through
                  physical inaccessibility, along with assumptions about productivity, independence, and
                  whose participation is considered necessary.</p>
                <p className="text-gray-900 mb-4 text-xl">Nonprofit efforts are concentrated in more fundable domains: education (63%), livelihoods
                  (48%), early intervention (42%), and healthcare (40%). Work that addresses deeper
                  conditions — research (8%), legal access (7%), narrative change (7%), accessibility (6%),
                  and caregiver support (8%) — remains thinly resourced. </p>
                <img src="/executive/morefundable.png" alt="" className="w-full object-contain" />
                <p className="text-gray-900 mb-4 text-xl font-bold">This is the central finding for funders and policymakers: the work most difficult to fund
                  is often the work most necessary for durable change. </p>
                <p className="text-gray-900 mb-4 text-xl">Service delivery may respond to visible exclusion, but shifts in systems, accountability,
                  leadership, evidence, and mental models determine whether that exclusion continues to
                  be reproduced.</p>
              </section>
              {/* Fourth */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-chHeading mb-4 flex items-center gap-3">
                  <span className="text-background rounded-full bg-chHeading w-8 aspect-square flex item-center justify-center">4</span>Funding Architecture and Organizational Capacity
                </h2>
                <p className="text-gray-900 mb-4 text-xl">India’s social sector spending has expanded to approximately INR 27 lakh crore, yet a
                  financing gap of INR 16 lakh crore persists to meet the Sustainable Development Goals.
                  Within this landscape, disability remains marginal</p>
                <p className="text-gray-900 mb-4 text-xl">CSR spending on disability-linked categories accounts for just 1% of total CSR expenditure,
                  with only 4% of companies contributing at all. State funding remains the primary source,
                  with INR 1,670 crore allocated to the Department of Empowerment of Persons with
                  Disabilities in FY 2026–27. Recent increases are concentrated in scheme-based spending,
                  particularly skilling and assistive devices.</p>
                <p className="text-gray-900 mb-4 text-xl">The structure of funding shapes what the ecosystem can sustain. Work that fits within
                  clear mandates is easier to fund than work that requires coordination, long-term
                  investment, or system-level change.</p>
                <p className="font-bold text-gray-900 mb-4 text-xl">Organizations report consistent capacity gaps:</p>
                <img src="/executive/fourthBar.png" alt="" className="w-full object-contain" />
                <p className="text-gray-900 mb-4 text-xl font-bold">The current funding architecture shows underinvestment in core, connective, and
                  field-building functions — the very elements required for long-term system change.</p>
              </section>
              {/* Fifth */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-chHeading mb-4 flex items-center gap-3">
                  <span className="text-background rounded-full bg-chHeading w-8 aspect-square flex item-center justify-center">5</span> Cornerstones for Collaborative Action
                </h2>
                <p className="text-gray-900 mb-6 text-xl">The report closes by identifying five cornerstones that can help move disability inclusion
                  from fragmented effort to durable systems change. These priorities are not standalone
                  recommendations; they are shared conditions for action across government, philanthropy,
                  industry, and civil society.</p>

                <div className="overflow-x-auto border border-border mb-6">
                  <table className="w-full text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-secondary text-white">
                        <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4 border-r border-white/20">Cornerstones</th>
                        <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-[37.5%] border-r border-white/20">System Shift Required</th>
                        <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-[37.5%]">What it Unlocks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          cornerstone: "Design access from the start",
                          shift: "Accessibility must be built into digital, physical, workplace, and service systems at inception, not added later.",
                          unlocks: "Reduces the need for repeated accommodation and creates models that can inform wider institutional standards.",
                        },
                        {
                          cornerstone: "Resource lifecycle continuity",
                          shift: "Support must hold across transitions: early identification, schooling, skilling, work, adulthood, care, and ageing.",
                          unlocks: "Prevents people from falling between systems and strengthens pathways that reflect how disability is actually lived over time.",
                        },
                        {
                          cornerstone: "Address compounded exclusion",
                          shift: "Systems must account for disabled people least visible in data, schemes, and mainstream programs.",
                          unlocks: "Brings caste, gender, poverty, geography, disability type, and support needs into the core of design and delivery.",
                        },
                        {
                          cornerstone: "Build accountability infrastructure",
                          shift: "Rights must be backed by enforcement, grievance redressal, legal literacy, monitoring, and better data.",
                          unlocks: "Moves inclusion from formal recognition to claimable access, especially for those furthest from institutions.",
                        },
                        {
                          cornerstone: "Invest in disabled leadership and connective infrastructure",
                          shift: "DPOs, disabled leaders, coalitions, peer networks, and knowledge platforms need sustained support.",
                          unlocks: "Allows the field to learn, align, set priorities, and shape systems through lived expertise rather than external interpretation alone.",
                        },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                          <td className="px-3 md:px-5 py-3 md:py-4 font-bold text-gray-900 border-r border-border align-top bg-[#F7FAF1] border-b">{row.cornerstone}</td>
                          <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border align-top">{row.shift}</td>
                          <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 align-top">{row.unlocks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xl mb-6 text-gray-900">The three horizons framework helps locate these efforts across time: from access to
                  formal recognition and services, to institutional pathways for inclusion, to systems
                  integration and field leadership.</p>
                {/* point */}
                <div className="space-y-6 text-base md:text-xl mb-6">
                  {[
                    {
                      heading: "Horizon 1: Access",
                      question: "Are existing systems reachable and usable?",
                      build: "Certification, entitlements, services, rehabilitation, assistive technology, and direct support that reliably reach people currently excluded from basic access.",
                    },
                    {
                      heading: "Horizon 2: Architecture",
                      question: "Are institutions designed to carry inclusion?",
                      build: "Accessibility standards, referral pathways, coordination mechanisms, government partnerships, and accountability systems that reduce dependence on individual navigation.",
                    },
                    {
                      heading: "Horizon 3: Leadership",
                      question: "Can the field shape its own future?",
                      build: "Disability-led institutions, shared evidence, financing architecture, narrative change, and systems integration that make inclusion durable.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 font-bold text-gray-900">
                        <Astroid className="w-4 h-4 shrink-0" fill="#9196CD" stroke="#9196CD" />
                        {item.heading}
                      </div>
                      <p className="pl-4 md:pl-6 mt-1"><span className="font-bold">Core question:</span> {item.question}</p>
                      <p className="pl-4 md:pl-6 mt-1"><span className="font-bold">What to build:</span> {item.build}</p>
                    </div>
                  ))}
                </div>
                {/* image */}
                <img src="/executive/fifthheading1.png" alt="Horizon" className="w-full object-contain mb-4" />
                <p className="text-xl text-gray-900 mb-6">This further reframes the recommendations as a map of responsibility over time, not only
                  what must change, but where change can be anchored so inclusion no longer depends on
                  negotiation each time.</p>
                <p className="text-xl text-gray-900 mb-6 font-bold">Disability exclusion is produced by systems built around a narrow idea of whose bodies,
                  minds, and lives are expected to fit. The work ahead lies in building the legitimacy of
                  disabled life itself not as burden, exception, or compromise, but as complete lives with
                  equal claim to dignity, participation, investment, and continuity.</p>

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