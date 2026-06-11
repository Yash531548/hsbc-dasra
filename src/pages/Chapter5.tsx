import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Chapter5() {
  return (
    <Layout>
      <div className="py-20 bg-chHero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-7xl font-accent font-bold text-secondary leading-none mb-2">05</div>
            <h1 className="text-4xl md:text-5xl font-accent text-secondary leading-tight uppercase tracking-wide">
              Cornerstones for Collaborative Action: Strategic Shifts for Government, Philanthropy, Industry, and Civil Society
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">

          <section>
            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              This chapter articulates shifts required to deepen the ecosystem of disability inclusion, if held in common by actors across the field, including philanthropy, industry, government, and practitioners from various domains. Each cornerstone is a principle that cuts across stakeholders, domains, and levels, distilling evidence into specific and actionable responses for those best positioned to leverage them.
            </p>
          </section>

          {/* 5.1 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">5.1</span>
              <span>Cornerstone 1: Designing Access as a First Principle</span>
            </h3>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Access is most powerful when it is assumed from the start. When systems, products, and services are designed around a non-disabled norm, access becomes an accommodation made for something or someone that is an 'outlier'. On the other hand, when access is a founding condition, it shapes what gets built, who is consulted, and how success is evaluated. Universal design must be understood as an institutional disposition and ethic around which resources, capabilities, and representation must be oriented.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              The pace at which new infrastructure is being built in India calls for this principle to be integrated with urgency. Digital public goods, financial systems, and built environments all emerge as domains that can become new access points or create new barriers, depending on how they are designed. Access as a first principle provides a window of opportunity to embed universality and inclusion before standards around new services and environments calcify. When inaccessibility is embedded instead, it can also become expensive and cumbersome to undo, excluding users by default until it is corrected – illustrating how human costs cascade. Testing and designing with the most excluded users first, building feedback loops into implementation, and accounting for maintenance and upgrades all help unpack and respond to inaccessibility that begins as a design problem.
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-[#1a1a4e] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold w-1/4">Stakeholder</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Nudges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Industry &amp; Philanthropy</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Fund and scale community-led solutions and innovative pilots that help strengthen access and build a proof of concept</li>
                        <li>Make accessibility at the point of design an explicit criterion in investment and grant decisions, rather than in post-facto compliance checks</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Government</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Strengthen budgets and capacity for disability inclusion across constituencies, levels, and departments</li>
                        <li>Establish proactive accessibility audit measures for new digital, physical, and climate infrastructure before it is deployed at scale</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Intermediaries &amp; Field-Builders</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Integrate user-testing and participatory feedback mechanisms across both simple and complex solution portfolios</li>
                        <li>Treat maintenance, upgrades, and community-level support as core components of a product or service, focusing on long-term sustenance</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5.2 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">5.2</span>
              <span>Cornerstone 2: Resourcing Lifecycle Continuity</span>
            </h3>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Disability inclusion is a condition that must be maintained across the full arc of a person's life. Early identification, school participation, the education to employment transition, and access to social protection in adulthood: each stage shapes the next, and anything that is missed at one point typically compounds forward. The organizations in this ecosystem understand this intuitively. Many of them describe following the person as a core feature of their work. This is what helps services and programs stay present across transitions that formal systems are yet to acknowledge and bridge, holding continuity that single program budgets cannot account for.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              Making accountability to the lifecycle a shared principle entails applying this orientation at the level of systems, not just on-ground practice. Infrastructure across education, employment, health, and other domains must speak to one another across stages. Siloed action on these fronts leads to entire stages in the diverse lifecycles of disabled people where support and protections are simply missing altogether. The cost of navigation and follow-through in these stages is often absorbed by caregivers and frontline actors. Accounting for this continuity is one of the sector's most tangible and least visible contributions. When no single actor is formally understood to be accountable for what happens in the move from one system or program to the next, handovers, follow-through, and long-term support become challenging to extend. Treating the lifecycle as a unit of accountability can help address these white spaces and deepen impact.
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-[#1a1a4e] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold w-1/4">Stakeholder</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Nudges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Industry &amp; Philanthropy</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Extend patient capital towards multi-year solutions that hold lifecycle accountability, instead of exiting programs at discrete handover points</li>
                        <li>Invest in transition-specific support where funding is thinnest and compounding exclusion is acute – such as the education to employment gap</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Government</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Build cross-department referral and tracking mechanisms to follow people with disabilities across education, health, employment, and social protection, reducing navigation burdens</li>
                        <li>Design entitlements and welfare schemes to be continuous and responsive across life stages, with proactive outreach and fewer redundancies in documentation</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Intermediaries &amp; Field-Builders</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Strengthen structured handover protocols between health, early intervention, and education systems, to ensure seamless support to disabled children at each institutional threshold</li>
                        <li>Train frontline actors like teachers, healthcare workers, and rehabilitation workers to identify and respond to transition points more robustly</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5.3 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">5.3</span>
              <span>Cornerstone 3: Addressing Compounded Exclusion at Its Roots</span>
            </h3>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Disability is shaped by the social and economic contexts in which it is situated. In India, these contexts are defined by caste, class, gender, religion, geography, age, and other markers in ways that compound, as opposed to being merely additive. A Dalit woman with a psychosocial disability in a remote district faces a specific configuration of exclusion that is qualitatively different from what any single marker can help predict. The field knows this. Practitioners describe such contexts with care, asking who gets counted in government data, who can physically reach a certification center, who is believed when they report violence, who is considered a viable candidate for employment. The pattern is consistent: the further a disabled person sits from the norm around which systems were built, the less legible they become to those systems.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              Demarcating intersectionality as an analytical starting point changes how the field looks at inclusion and what it designs in response. Asking whose experience is not yet legible – within data, narratives, institutions, and entire systems – calls for identifying who sits at the last mile when it comes to specific and situated forms of access. Organizations that work at these intersections often have strong community linkages and hyperlocal impact, despite being small in scale and embedded in remote geographies. The populations they serve are typically the most difficult to make legible within funding architectures that reward scale and visibility. Shifting this requires deliberate choices across every stakeholder, built along intersectionality-first thinking.
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-[#1a1a4e] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold w-1/4">Stakeholder</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Nudges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Industry &amp; Philanthropy</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Explicitly prioritize funding for organizations working with intersectionally marginalized and excluded populations at the last mile</li>
                        <li>Build intersectionality-first thinking into internal systems linked to grant design and due diligence, asking whose experiences are least legible within existing grants</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Government</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Redesign administrative data systems like UDID and Census frameworks to capture disaggregated data on intersectional markers like caste, income, and gender</li>
                        <li>Strengthen last-mile delivery mechanisms for welfare schemes with a specific focus on populations facing compounded exclusion and institutional invisibility</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Media &amp; Research Actors</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Invest in community-embedded research focused on lived experience through collaborations with DPOs and grassroots organizations</li>
                        <li>Expand narratives around disability beyond visible and culturally recognized ideas of impairment, towards a broader and more heterogenous understanding</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5.4 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">5.4</span>
              <span>Cornerstone 4: Building Accountability Infrastructure</span>
            </h3>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              In India, the RPwD Act, international commitments, and a sequence of judicial interventions have expanded the formal framework of rights for people with disabilities substantially over the last decade. Yet, the field increasingly recognizes gaps in implementation, ranging from provisions that lack implementation infrastructure to entitlement processes that require navigating complex bureaucratic machinery and lack redressal mechanisms. Policy inclusion is often necessary, but not sufficient, for change in institutional behavior. Across domains, the cost of claiming a right is routinely borne by those that it was designed to protect. The lag in appointing State Commissioners and Special Courts mandated under the RPwD Act provides a visible manifestation of the problem – the grievance infrastructure envisioned by the law has not materialized at scale.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              Closing this gap requires making the architecture of accountability proactive rather than reactive. This is as much a sociopolitical and institutional question as a technical one. It requires actors in the ecosystem to embrace accountability towards processes, timelines, and the people cross-located furthest from systems. Where this has worked, it has entailed sensitization and awareness by disability-led organizations and movements, independent monitoring, and resourcing that treats legal aid and advocacy with the same relevance as other service delivery. At a deeper level, bridging the gap between legal frameworks and on-ground implementation calls for strengthening capacities and commitments towards destigmatizing disability, particularly within government and legal institutions.
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-[#1a1a4e] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold w-1/4">Stakeholder</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Nudges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Industry &amp; Philanthropy</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Support organizations working at the intersection of disability and legal empowerment through documentation drives, navigating entitlements, and wider awareness</li>
                        <li>Fund independent monitoring and evidence-building that can yield disaggregated data on scheme implementation, entitlement access, and on-ground gaps</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Government</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Strengthen State Commissioners, Special Courts, and other RPwD Act provisions through dedicated budgets and clearly defined systems of accountability</li>
                        <li>Design first access points and grievance redressal mechanisms within institutions with a focus on access, responding to communication, mobility, and documentation constraints</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Intermediaries &amp; Field-Builders</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Build stronger disability inclusion literacy among legal professionals through bar councils, law school curricula, and judicial training programs</li>
                        <li>Expand disability-specific legal aid infrastructure, with dedicated outreach in rural and remote geographies where legal recourse is often most critical and missing</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5.5 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">5.5</span>
              <span>Cornerstone 5: Investing in Disabled Leadership and Connective Infrastructure</span>
            </h3>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              The principle of "nothing about us without us" is widely cited across the disability inclusion ecosystem. In practice, however, people with disabilities are more often the recipients of programs than the architects shaping them. Disabled people's leadership is an epistemological gesture. The knowledge that comes from the lived experience of disability, particularly when they're situated at the intersections of markers like caste, gender, and geography, is not replicable through good intent or removed technical expertise. When these perspectives are underrepresented in corridors of influence, the field continues to obscure what is happening on the ground no matter how sophisticated frameworks become.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              Alongside leadership, the ecosystem has historically relied on connective infrastructure that is rarely prominently visible and supported. Convenings, peer networks, coalition work, and knowledge-sharing platforms are key to enabling a sector to operate as a field. DPOs occupy a particular place in this infrastructure. Typically emerging from within the folds of movements, they are among the field's most credible and proximate accountability mechanisms, remaining under-resourced. When this connective infrastructure is sustained, it allows the field to learn together, build shared agendas across organizations and mandates, and generate a wider body of evidence that can inform policy engagement. It also creates the conditions required for disabled leadership to develop and persist as an institutional norm that can be replicated across the ecosystem, emboldening voices from the ground.
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-[#1a1a4e] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold w-1/4">Stakeholder</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Nudges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Industry &amp; Philanthropy</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Extend flexible capital for institutional development, with a focus on proximate leadership pipelines, robust governance systems, and organizational resilience</li>
                        <li>Partner with DPOs and disabled people in participatory grant design and evaluation, enabling lived experience to shape funding priorities for the sector</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Government</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Build formal channels for DPOs to engage closely with policy design, welfare implementation, and monitoring at national, state, and hyperlocal levels</li>
                        <li>Invest in the development of disabled leaders within public institutions through targeted recruitment, retention support, and career progression mechanisms</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800 align-top">Intermediaries &amp; Field-Builders</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-800">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Strengthen convening, open knowledge-sharing, and coalition-building as explicit organizational functions that account for staff time and resources</li>
                        <li>Actively resource and amplify DPOs and grassroots disability networks, cultivating new avenues for influence and representation by connecting people to systems</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-4" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 04
            </Link>
            <Link href="/chapter-6" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 06 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
