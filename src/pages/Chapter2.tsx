import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid } from "recharts";



export default function Chapter2() {
  return (
    <Layout>
      {/* Chapter Header Band */}
      <div className="py-20 bg-chHero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-7xl font-heading font-bold text-secondary leading-none mb-2">02</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight uppercase tracking-wide">
              The Nonprofit Landscape:<br />
              Roles, Reach, and Operating<br />
              Realities
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">

          <section>
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-10">
              The nonprofit sector in disability inclusion occupies a position that is structurally unusual and rarely named as such. It sits at the intersection of the state, the market, the family, and the community, translating between systems that do not always speak to each other, compensating for functions that have been formally claimed but practically abandoned, and holding together the continuity that no single system has been designed to provide. While inclusion is shaped by multiple actors, this chapter focuses on nonprofits as a central site of action. It traces how organizations have accumulated a form of knowledge about disability exclusion that exceeds what any formal system has been willing to recognize, over decades of sustained presence
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-10">
              The chapter draws on survey data and qualitative accounts from across the nonprofit landscape. The survey reveals a sector that is older and more experienced than it is typically understood to be, working across a wider range of functions and geographies than any single program logic would predict. The qualitative material sits alongside this and surfaces what the numbers cannot fully explain: how organizations understand their own position, what they carry that was never formally assigned to them, and what the accumulated weight of that carrying looks like from the inside.
            </p>
          </section>

          {/* 2.1 */}
          <section>
            <div>
              <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
                <span className="border-b-8 border-current pb-0 shrink-0">2.1</span>
                <span>Tracing the Shape of the Sector</span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-12">
                The 109 organizations that responded to this survey represent a cross-section of nonprofits working on disability inclusion across India. They vary substantially in age, budget, geography, and governance structure. Before examining what the sector does, it is worth establishing the terrain of this landscape through its institutional profile, resource base, geographic footprint, and leadership composition.
              </p>

              {/* 2.1.1 */}
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className="pb-0 shrink-0">2.1.1</span>
                <span>Institutional Age and Maturity: A Sector Built Over Time</span>
              </h3>

              <div className="p-8 bg-box rounded-xl mb-8">
                <p className="text-2xl font-heading font-regular text-black">
                  <span className="font-bold text-3xl">82% of responding</span><br />
                  organizations had been operational for more than ten years. The remaining 18% reported five to ten years of operation.
                </p>
              </div>

              <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Table 1:</p>
              <p className="text-black text-xl leading-relaxed mb-6 font-bold">Nonprofits by year of operation, n=109</p>

              <div className="overflow-x-auto border border-border mb-12">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-secondary text-white">
                      <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/2 border-r border-white/20">Years of Operation</th>
                      <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4 border-r border-white/20">% of Orgs</th>
                      <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { years: "More than 10 years", pct: "82%", count: "89" },
                      { years: "5–10 years", pct: "18%", count: "20" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                        <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b">{row.years}</td>
                        <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b text-center">{row.pct}</td>
                        <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 text-center border-b">{row.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 text-xl leading-relaxed mb-12">
                This reveals that the field of disability inclusion in India is not in a nascent stage. An
                overwhelming majority of actors in this sample predate current CSR and funding
                mandates, and recent policy frameworks. In addition to longevity, this points
                towards the depth of practice. Organizations operating across a decade or more
                today have typically navigated multiple policy cycles such as the introduction of
                the RPwD Act, absorbed changes in funding priorities, and sustained relationships
                with communities and state actors while enduring through transitions.
              </p>

              {/* 2.1.2 */}
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className="pb-0 shrink-0">2.1.2</span>
                <span>Budget Profile and Organizational Scale: The Mid-Sized Majority</span>
              </h3>
              <p className="text-gray-700 mb-12 leading-relaxed">
                Nearly half of all organizations in our sample (48%) operated with annual budgets
                below INR 3 Crore. The largest concentration (30%) sat in the INR 1–3 Crore band.
                Fewer than one in five organizations (2%) exceeded INR 10 Crore annually. Only two
                organizations (2%) reported budgets above INR 50 Crore.
              </p>
              <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Figure 1:</p>
              <p className="text-black text-xl leading-relaxed mb-6 font-bold">Nonprofits working in Disability Inclusion by Budget Size</p>
              <img src="/ch2/ch2Fig1.png" alt="Nonprofits working in Disability Inclusion by Budget Size" className="w-full object-contain mb-12" />

              <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Table 2</p>
              <p className="text-black text-xl leading-relaxed mb-6 font-bold">Nonprofits by annual budget size (FY 2025-26), n=109</p>

              <div className="overflow-x-auto border border-border mb-12">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-secondary text-white">
                      <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/2 border-r border-white/20">Annual Budget (FY 2025-26)</th>
                      <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4 border-r border-white/20">% of Orgs</th>
                      <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { budget: "Under ₹50 Lac", pct: "14%", count: "15" },
                      { budget: "₹50 Lac – ₹1 Cr", pct: "18%", count: "18" },
                      { budget: "₹1 – 3 Cr", pct: "30%", count: "31" },
                      { budget: "₹3 – 10 Cr", pct: "21%", count: "21" },
                      { budget: "₹10 – 50 Cr", pct: "16%", count: "17" },
                      { budget: "Greater than ₹50 Cr", pct: "2%", count: "2" },
                      { budget: "Prefer not to say", pct: "5%", count: "5" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                        <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b">{row.budget}</td>
                        <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b text-center">{row.pct}</td>
                        <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 text-center border-b">{row.count}</td>
                      </tr>
                    ))}
                    <tr className="bg-white font-bold">
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-900 border-r border-border">Total</td>
                      <td className="px-3 md:px-5 py-3 md:py-4 border-r border-border"></td>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-900 text-center">109</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                The sector showed breadth and continuity, with actors across budgets operating over sustained periods. Viewed through the lens of resourcing, small- and medium-sized organizations emerged as the most prominent subset. The thinness of the upper end of the budget range shows a paucity of organizations with steady, large-scale resources. Such large-scale anchor organizations typically play a role in building infrastructure and absorbing sectoral risk in most sectors.
              </p>
            </div>
          </section>

          {/* 2.1.3 */}
          <section>
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.1.3</span>
              <span>Geographic Spread and Depth of Presence: Local Reach, Uneven Visibility</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-8">
              Approximately 64% of organizations in our sample reported working at the state or regional level. While 40% operated at the district or city level, national-scale work had a slightly smaller share at 38%. Critically, only 18% reached hyperlocal areas like villages, blocks, and urban clusters.
            </p>
            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Figure: 3</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Geographical spread of nonprofits</p>
            <img src="/ch2/ch2Fig3.png" alt="Geographical spread of nonprofits" className="w-full object-contain mb-4" />
            <p className="text-sm text-gray-500  mb-10 leading-relaxed">
              (Note: The above data adds up to more than 100% as the respondents could select multiple choices. Hyperlocal work adjusted down to 18% based on its 18.34% share, state/ regional adjusted down to 64% based on its 64.22% share and district / city adjusted to 40% based on its 40.36% share).
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              These categories are not mutually exclusive; many organizations operated across more than one tier. The dominant mode was state-level operation. Pan-India or national reach had a smaller share, at nearly half. Hyperlocal presence, the most proximate form of community engagement, was reported by fewer than one in five organizations. It also typically appeared alongside state or district operations, rather than independently. Coverage is distributed across India's geography, but sustained, proximate presence at the community level is not.
            </p>
          </section>

          {/* 2.1.4 */}
          <section>
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.1.4</span>
              <span>Leadership and Governance Composition: Representation and Decision-Making</span>
            </h3>
            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Figure: 4</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Leadership and governance structure of nonprofits</p>
            <img src="/ch2/ch2Fig4.png" alt="Leadership and governance structure of nonprofits" className="w-full object-contain mb-4" />
            <p className="text-sm text-gray-500  mb-10 leading-relaxed">
              (Note: Because organizations could select multiple overlapping leadership structures, the percentages add up to more than 100%. Additionally, 7 organizations selected "Prefer not to say", and a few exclusively selected "We do not have a Board/Advisory structure currently").
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Across our sample, representation was more common at governance and management levels than at the founder or executive level. Nearly 36% of organizations had disabled people represented in their boards and advisory committees, alongside 35% in management and decision-making roles. However, only 20% of organizations reported having people with disabilities in founder, CEO, and director roles.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              These four dimensions of institutional age, resource base, geographic footprint, and leadership composition describe a sector that is mature, but predominantly made up of organizations with small to mid-scale budgets. Its geographical scale is distributed across national and hyperlocal coverage, without deep concentration at either end. Representation for people with disabilities is present, but unevenly dispersed within organizational hierarchies.
            </p>
          </section>

          {/* 2.2 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">2.2</span>
              <span>Mapping Where Nonprofit Work Concentrates</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              This section examines how the sector's activity is distributed. It maps where efforts are concentrated, where they thin, and what patterns emerge when work areas, disability types, population focus, and constraints are read together.
            </p>

            {/* 2.2.1 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.2.1</span>
              <span>Program Concentration: Education and Livelihoods as Dominant Sites</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-8">
              Four primary areas of work accounted for the majority of organizational activity across the sector – education (63%), livelihoods (48%), early intervention (42%), and healthcare, rehabilitation and therapy (40%).
            </p>
            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Figure: 5</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Primary Areas of Work (%) - n=109</p>
            <img src="/ch2/ch2Fig5.png" alt="Primary Areas of Work" className="w-full object-contain mb-4" />
            <p className="text-sm text-gray-500  mb-10 leading-relaxed">
              (Note: Because organizations could select multiple overlapping leadership structures, the percentages add up to more than 100%)
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              Each of the four primary areas of work was cited by more than two-fifths of the organizations in our sample. The distribution then drops steeply: no other area was cited by more than one-third of organizations, and over half fell below 10%. At the tail end of this distribution, legal aid (7%), narrative change (7%), sports & life skills (6%), and accessibility (6%) represented areas that were present in the sector, but least prominent. The pattern around the four primary areas of work was consistent across budget bands and years of operation.
            </p>

            {/* 2.2.2 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.2.2</span>
              <span>Disability Coverage: Cross-Disability Practice and Persistent Gaps</span>
            </h3>
            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Table 3</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Nonprofits by disability group focus, n=109</p>
            <div className="overflow-x-auto border border-border mb-4">
              <table className="w-full text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/2 border-r border-white/20">Range of disabilities covered</th>
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4 border-r border-white/20">% of organizations</th>
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4">Coverage marker</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { range: "Intellectual / developmental (incl. learning disabilities, autism)", pct: "60%", marker: "High" },
                    { range: "Physical / mobility (e.g., locomotor, CP, muscular dystrophy)", pct: "51%", marker: "High" },
                    { range: "We work across disability types (cross disability)", pct: "51%", marker: "High" },
                    { range: "Hearing and/or speech", pct: "39%", marker: "Medium" },
                    { range: "Visual (blindness / low vision)", pct: "39%", marker: "Medium" },
                    { range: "Multiple / high support needs", pct: "25%", marker: "Low" },
                    { range: "Psychosocial / mental health", pct: "24%", marker: "Low" },
                    { range: "Neurological", pct: "19%", marker: "Low" },
                    { range: "We do not categorize our work by disability type", pct: "14%", marker: "Low" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b">{row.range}</td>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b text-center">{row.pct}</td>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-b">{row.marker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500  mb-10 leading-relaxed">
              (Note: Organizations could select multiple categories; percentages reflect reported coverage, not distribution of need or mutually exclusive shares. The "Other" category includes write-in responses such as deafblindness, clubfoot, invisible disabilities like leprosy-induced sensory loss, and blood disorders like hemophilia).
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              The distribution indicates a strong cross-disability orientation in the sector, alongside concentration around intellectual, developmental, physical, and mobility-related disabilities. More specialized or highly stigmatized disability groups, including psychosocial and neurological conditions, remain more thinly represented.
            </p>

            {/* 2.2.3 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.2.3</span>
              <span>Intersectional Priorities: Who Is Reached and Who Remains Peripheral</span>
            </h3>
            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Table 4</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Nonprofits by identity/population focus, n=109</p>
            <div className="overflow-x-auto border border-border mb-4">
              <table className="w-full text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/2 border-r border-white/20">Identity / population focus</th>
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4 border-r border-white/20">% of organizations</th>
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4">Coverage marker</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { focus: "Children and adolescents with disabilities", pct: "80%", marker: "High" },
                    { focus: "Women and girls with disabilities", pct: "76%", marker: "High" },
                    { focus: "Low-income households", pct: "63%", marker: "Medium" },
                    { focus: "Rural or remote populations", pct: "55%", marker: "Medium" },
                    { focus: "High-support needs", pct: "43%", marker: "Medium" },
                    { focus: "SC/ST communities", pct: "37%", marker: "Low" },
                    { focus: "Migrant communities", pct: "20%", marker: "Low" },
                    { focus: "LGBTQIA+ persons with disabilities", pct: "10%", marker: "Low" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b">{row.focus}</td>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b text-center">{row.pct}</td>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-b">{row.marker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500  mb-10 leading-relaxed">
              (Note: Organizations could select multiple categories; percentages reflect reported coverage, not distribution of need or mutually exclusive shares.)
            </p>
            <p className="text-gray-700 leading-relaxed mb-12 text-xl">
              The sector shows stronger
              focus on children, women
              and girls, low-income
              households, and rural or
              remote communities, while
              caste, migration, sexuality,
              and high-support needs
              remain less consistently
              centred in organizational
              mandates.
            </p>
          </section>

          {/* 2.2.4 */}
          <section>
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.2.4</span>
              <span>Program Distribution: What Gets Funded and What Gets Deferred</span>
            </h3>

            <div className="p-8 bg-box rounded-xl mb-10">
              <p className="text-2xl font-heading font-regular text-black">
                <span className="font-bold text-3xl">Approximately 89% of</span><br />
                organizations cited funding constraints like short grant cycles, restricted use, and disbursements as a primary bottleneck in delivery.
              </p>
            </div>

            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              The distribution of work areas described in 2.2.1 maps onto a corresponding pattern in reported organizational constraints. Areas that were well-represented in primary mandates, like education, livelihoods, early intervention, and healthcare, were also found to be areas with relatively more established funding pathways. Areas that were thinly represented, including caregiver support, mental health, legal aid, advocacy, and research, were consistently described as difficult to sustain within available funding.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Approximately 89% of organizations cited funding constraints like short grant cycles, restricted use, and disbursements as a primary bottleneck in delivery. This figure was consistent across budget bands, years of operation, and primary work areas. It was the most widely shared single constraint in the dataset.
            </p>

            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Table 5</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Bottlenecks in nonprofit delivery, n=109</p>
            <div className="overflow-x-auto border border-border mb-10">
              <table className="w-full text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-3/4 border-r border-white/20">Bottlenecks in Delivery</th>
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4">% of organizations</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Funding system constraints (short-term grants, restrictions, delays)", pct: "89%" },
                    { item: "Policy Engagement", pct: "37%" },
                    { item: "Talent (hiring, retention, burnout)", pct: "37%" },
                    { item: "Digital / tech systems (tools, accessibility, workflows)", pct: "28%" },
                    { item: "Community stigma / caregiver dynamics", pct: "23%" },
                    { item: "Compliance / regulatory burden", pct: "18%" },
                    { item: "Data, reporting & evidence expectations", pct: "18%" },
                    { item: "Partnership management (roles, trust, coordination)", pct: "16%" },
                    { item: "Employer engagement / workplace inclusion pathways", pct: "13%" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b">{row.item}</td>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-b text-center">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              When it comes to sector collaboration, structural and resource constraints far outweigh interpersonal issues. Beyond funding, policy engagement challenges (37%) and talent-related constraints such as hiring, retention, and burnout (37%) were the next most commonly cited barriers. Digital and technology system limitations were reported by 28% of organizations. These constraints appear more prominent than interpersonal ones: issues related to partnership management were cited by 16% of organizations, while challenges linked to community stigma and caregiver dynamics were reported by 23%. Overall, the data suggests that the sector largely faces constraints related to funding structures, administrative burden, and limited human bandwidth, rather than a lack of willingness or trust to collaborate.
            </p>

            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Table: 6</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Constraints to collaboration for nonprofits, n=109</p>
            <div className="overflow-x-auto border border-border mb-10">
              <table className="w-full text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-3/4 border-r border-white/20">Collaboration Constraint</th>
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4">% of organizations</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Funding and reporting requirements make collaboration hard", pct: "52%" },
                    { item: "Limited staff time to build and manage partnerships", pct: "51%" },
                    { item: "It is hard to identify the right partners", pct: "42%" },
                    { item: "Coordination across organizations is difficult (planning, follow up, decisions)", pct: "33%" },
                    { item: "Partnerships don't move beyond discussion into joint action", pct: "28%" },
                    { item: "Organizations have different goals or ways of working", pct: "24%" },
                    { item: "Partnerships are informal, so roles and responsibilities are unclear", pct: "24%" },
                    { item: "Lack of trust makes sharing information or relying on others difficult", pct: "12%" },
                    { item: "Power, credit, or control issues create tension", pct: "12%" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b">{row.item}</td>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-b text-center">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              When examining internal capacity, fundraising and donor relations emerges as a pain point, selected as a critically underfunded function by 27% of the sector. Following this, there is a tight cluster of operational and strategic areas competing for limited resources: MEL and data systems (15%), partnerships and coalition work (15%), and digital/tech systems (15%). Conversely, core administrative functions like finance and compliance (5%) and program design (5%) are the least frequently cited as underfunded—likely because these are non-negotiable baselines for survival or are more directly covered by restricted programmatic grants.
            </p>

            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Table 7</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Underfunded functions in nonprofits, n=109</p>
            <div className="overflow-x-auto border border-border mb-10">
              <table className="w-full text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-3/4 border-r border-white/20">Underfunded Functions</th>
                    <th className="text-left px-3 md:px-5 py-3 md:py-4 font-bold w-1/4">% of organizations</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Fundraising / donor relations", pct: "27%" },
                    { item: "Monitoring, evaluation & learning (MEL) / data systems", pct: "41%" },
                    { item: "Partnerships & coalition work", pct: "41%" },
                    { item: "Digital / tech systems", pct: "39%" },
                    { item: "Human resources (HR) / people systems", pct: "33%" },
                    { item: "Communications & narrative", pct: "27%" },
                    { item: "Program design & adaptation", pct: "15%" },
                    { item: "Finance & compliance", pct: "13%" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-r border-border border-b">{row.item}</td>
                      <td className="px-3 md:px-5 py-3 md:py-4 text-gray-800 border-b text-center">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Taken together, the distribution of work areas, disability coverage, intersectional focus, and reported constraints produces a recognizable map. Activity concentrates in service delivery areas with established pathways and measurable outputs. It thins at the edges, when it comes to systemic, equity-focused, evidentiary, and population-facing work where fundraising is difficult and impact harder to demonstrate especially within short grant cycles. Constraints and bottlenecks are not randomly distributed across the sector. They cluster around the same functions and areas where the distribution of effort is already thinnest. The shape of the sector's activity and the shape of its constraints mirror each other.
            </p>
          </section>

          {/* 2.3 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">2.3</span>
              <span>How Nonprofits Understand Their Role(s)</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              The previous sections map where nonprofit efforts are concentrated, and where they thin. This section examines how organizations understand their own position in the ecosystem, and what this reveals about how the field defines its work.
            </p>

            {/* 2.3.1 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.3.1</span>
              <span>Multifunctionality as Practice: Beyond Service Delivery Alone</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Ask any disability nonprofit what they do, and the answer can seem like a list — early intervention and special education, then rehabilitation, then livelihood support, sometimes legal documentation, sometimes caregiver counselling, sometimes emergency response.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Most organizations in the survey reported working across multiple intervention areas simultaneously, with most selecting between two and four primary areas of work. Very few maintained a singular, specialized focus; those that do tend to be among the sector's newest. The dominant model is bundling inclusive education, healthcare, rehabilitation, and livelihood support delivered in parallel, often within the same organizational structure, by the same small team, through the same overstretched budget.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              This bundling extends across the lifecycle, though unevenly. Very few organizations in the sample report spanning the full continuum from early childhood intervention through to adult livelihoods and workforce inclusion. Most operate across adjacent stages, engaging with multiple points in a person's life without fully holding the arc of it. Organizations describe this less as a programmatic gap and more as a reflection of how they found the work: they followed the person, and the person's needs kept moving across boundaries that the system had drawn but never adequately staffed.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              The pattern is visible across disability types and social identities as well. Around 76% of organizations work with women and girls alongside disability, 63% with low income households, and 37% with SC/ST communities. They reflect how exclusion actually arrives in the field — layered, intersecting, and rarely confined to a single domain that any one funding stream was designed to address.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              What this produces is less a set of programmatic choices than a shared way of making sense of the work oriented less toward bounded interventions and more toward staying present across whatever the person in front of you actually needs. Organizations do not describe this as multifunctionality, or as a model, or as a theory of change. They describe it as doing what needs to be done. The grammar is shared because the conditions that produced it are shared and those conditions, as the following sections examine, run deeper than any individual organization's choices about scope.
            </p>

            {/* 2.3.2 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.3.2</span>
              <span>Proximity and Identity: How Location Shapes Organizational Role</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Where an organization sits in the ecosystem shapes how it understands its own purpose. Organizations embedded closely in community contexts — working daily with individuals and families, often in geographies where services are sparse and distances are long — tend to understand their role through sustained, relational engagement with exclusion as people experience it. They describe their work as staying present where other actors enter and leave, navigating the space between what formally exists and what practically reaches the people who need it.
            </p>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6 ">
              "We have to engage closely with families, communities, service providers and front-line workers — going group by group, speaking with them, and building awareness on how they can access services and entitlements"
            </p>
            <p className="text-gray-500 text-base mb-10 pl-6">— Nargis Khatoon, Srijan Mahila Vikas Manch</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              In rural and remote geographies, this proximity takes on a particular texture. Organizations describe traveling into communities that no other actor reaches regularly, building trust over months and years before any formal intervention becomes possible, and holding the role of navigation itself, becoming the only consistent point of contact across a person's interaction with services, entitlements, and institutions that were designed without them in mind. The role is defined less by program logic than by an accumulation of presence, where showing up is already a form of accountability that the formal system has not assumed. Several organizations that work in this way also explicitly identify as cross-disability actors working across four to six impairment categories within the same organizational setting, and across multiple social identities simultaneously.
            </p>

            {/* 2.3.3 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.3.3</span>
              <span>Partial Intervention: Seeing the Full System While Acting in Parts</span>
            </h3>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6">
              "We understand the system... but we can only intervene in parts of it. The rest, we really just try to work around"
            </p>
            <p className="text-gray-500 text-base mb-10 pl-6">— Nonprofit Practitioner</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              This awareness of a pathway that exceeds their reach — gaps they can see but cannot close — is one of the most consistently expressed features of how community-embedded organizations understand their position. They do not describe themselves as failing to complete the continuum; they describe the continuum itself as incomplete, and their role as holding whatever portion of it they can while remaining accountable to the people moving through the parts they cannot.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">Organizations operating at a greater distance from
              direct community engagement understand their role
              differently. Their work involves developing frameworks,
              training practitioners, and enabling models to travel
              from one context to another so that what is learned in
              one setting can inform action elsewhere without the
              same organization being physically present everywhere.
              They hold the field together at a level of abstraction that
              community-embedded organizations rarely have the
              bandwidth to occupy</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              These positions are dynamic. Many organizations
              move between them over time, developing fieldbuilding functions alongside direct delivery as they
              grow, or deepening community relationships as they
              come to understand what the work requires. What
              both orientations share is an awareness that routinely
              exceeds their point of intervention. Organizations see
              pathways they cannot complete, gaps they cannot
              close, and needs they cannot fully meet and remain
              accountable to the people moving through those
              pathways regardless.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Anita is then left to also ask: “Where does our mandate
              stop… and what is the mandate we are giving ourselves?”
              This is a question that most organizations in this sector
              have asked themselves, and most have answered
              by expanding the mandate rather than holding the
              boundary. The conditions that produce that answer and
              what it costs to keep giving it are what the next section
              examines.
            </p>
          </section>

          {/* 2.4 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">2.4</span>
              <span>Key Conditions Shaping Current Nonprofit Action</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              This section examines the sectoral conditions that shape nonprofit action: how roles accumulate, responsibilities expand, and organizations are drawn beyond their formal mandates.
            </p>

            {/* 2.4.1 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.4.1</span>
              <span>Expansion Across Domains: Work That Extends Beyond Mandate</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              The expansion of nonprofit roles is not limited to taking on multiple functions within a defined scope. In many cases, organizations move across entirely different domains of work and across contexts, where system boundaries do not hold.
            </p>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6">
              "While our understanding was always that we work in mental health rather than disability, this natural progression led us to engage in disability-related work over time"
            </p>
            <p className="text-gray-500 text-base mb-8 pl-6">— Disket Angmo, Mann Talks</p>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6 ">
              "We don't come from the food and beverage sector... so we spent time studying it first, built a curriculum for people with disabilities"
            </p>
            <p className="text-gray-500 text-base mb-8 pl-6">— Beverly Louis, Mann</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              In both cases, the organization did not set out to work in a new domain. The domain arrived through the people they were already working with, and the gaps they encountered in referral pathways. The shift is framed consistently as a response to what was missing rather than as an expansion of ambition and it repeats across the sector with enough consistency to suggest it is a feature of the ecosystem, not of individual organizations.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              In some instances, this movement becomes more pronounced, with organizations stepping into functions typically associated with the state or specialized institutions — functions well beyond their original positioning, and that they are often neither trained nor resourced for durability.
            </p>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6 ">
              "The government hospitals would refer those complicated cases to private NGOs like us... the government facilities themselves are not capable enough of doing those surgeries"
            </p>
            <p className="text-gray-500 text-base mb-8 pl-6">— Subhojit Goswami, The Leprosy Mission Trust India</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Here, the boundary dissolves. The organization becomes the site of last resort, and the transfer happens without negotiation, without resources, and without formal acknowledgment that a responsibility has changed hands. The contours of the organization's role are continually reshaped by what the system leaves unaddressed.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              Organizations describe this drift with a mixture of resignation and practicality. They do not, for the most part, resist the expansion. They absorb it because the alternative is that the person in front of them goes without. But the accumulation of absorbed functions produces organizations that are doing far more than they were designed or funded to do, in ways that are rarely visible to the systems and funders that surround them.
            </p>

            {/* 2.4.2 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.4.2</span>
              <span>Responsibility Without Formal Recognition: Work That Settles Informally</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Alongside domain expansion, there is a quieter but equally consistent shift in how responsibility is distributed. Rather than being clearly assigned, it settles with the actors closest to the point of need — regardless of whether those actors are formally mandated to hold it, resourced to sustain it, or even aware the transfer has occurred until it is already complete.
            </p>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6">
              "The NGO's role is very practical, right from filing forms of the government... even accompanying beneficiaries to the offices"
            </p>
            <p className="text-gray-500 text-base mb-8 pl-6">— Adv. Mrunmayee Rajabhau Jodh, Manav Vikas Foundation</p>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6">
              "When the... parents passed away... no one else is coming forward to look after both of them... currently they are living with us"
            </p>
            <p className="text-gray-500 text-base mb-8 pl-6">— Karthikeyan Ganesan, Sristi Foundation</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              In both cases, the organization took responsibility by default through the absence of anyone else willing to assume it. Filing government forms is administrative work that public systems are supposed to hold. Long-term residential care is a function that specialized institutions are supposed to provide. In both instances, responsibility has migrated informally.
            </p>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6">
              "When we train an Anganwadi worker... then the Anganwadi worker is doing the work, over and above everything else"
            </p>
            <p className="text-gray-500 text-base mb-8 pl-6">— Nonprofit Practitioner</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              The Anganwadi worker does not become a different kind of actor because an NGO has trained her. She absorbs an additional function within the same role, with the same resources, and without recognition that her responsibilities have expanded. The organization, similarly, absorbs the cost of training her — a cost that sits outside its program budget and inside the gap between what the state has committed to and what it has actually staffed. Responsibility accumulates at the bottom of the system, in organizations and individuals closest to the point of need, because that is where failures are most immediately felt.
            </p>

            {/* 2.4.3 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">2.4.3</span>
              <span>Continuity Beyond Program Cycles: Presence Without Institutional Security</span>
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              As roles expand and responsibilities accumulate, the nature of engagement itself begins to shift. What might begin as time-bound support — a skilling program, a rehabilitation intervention, a documentation drive — extends into long-term and often indefinite involvement, sustained by the organization rather than by any formal system.
            </p>
            <p className="text-gray-700 text-xl italic leading-relaxed mb-2 pl-6">
              "You can't help a disabled person get a job and then expect that they will be independent for the rest of their life. Sustaining an income-generation program requires us to provide long-term support, rather than providing results that can be measured over just one period of time"
            </p>
            <p className="text-gray-500 text-base mb-8 pl-6">— Adv. Mrunmayee Rajabhau Jodh, Manav Vikas Foundation</p>
            <p className="text-gray-700 text-xl leading-relaxed mb-10">
              Support does not conclude at the point of placement, certification, or service delivery. It continues through follow-ups, retention support, and ongoing troubleshooting across situations the original intervention was never designed to address. If handoff to the next stage of support does not happen reliably, the organization becomes the stage itself — holding the person in place until something else becomes possible, or indefinitely, if nothing does.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mb-12">
              Responses from the survey also reflect how difficult it is to stabilize reliable pathways across actors. Almost 24% of organizations report that partnerships remain informal, with unclear roles and responsibilities; 33% note that coordination across organizations is difficult in practice; and 28% indicate that partnerships often do not move beyond discussion into joint action. These are signals of a system that has not built the infrastructure to make coordination routine, leaving organizations to manage the gaps through individual effort and personal relationships rather than institutionalized mechanisms.
            </p>

            {/* Closing box */}
            <div className="p-8 bg-chHero rounded-xl mb-6">
              <p className="text-gray-700 text-xl leading-relaxed">
                Disability nonprofits operate on a far wider terrain than formal definitions of service delivery suggest. They move between direct support, institutional navigation, family engagement, and ecosystem coordination, often within the same organizational life. What appears as diversity in practice is, in many cases, a response to structural absence elsewhere. This makes nonprofits not only service providers, but stabilizers of continuity within systems that remain fragmented. To understand why this burden recurs so consistently, the next chapter turns from organizations to the deeper conditions that produce exclusion itself.
              </p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-1" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 01
            </Link>
            <Link href="/chapter-3" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 03 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
