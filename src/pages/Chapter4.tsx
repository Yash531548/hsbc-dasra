import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Astroid } from "lucide-react";

export default function Chapter4() {
  return (
    <Layout>
      <div className="py-20 bg-chHero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-7xl font-accent font-bold text-secondary leading-none mb-2">04</div>
            <h1 className="text-4xl md:text-5xl font-accent text-secondary leading-tight uppercase tracking-wide">
              Strengthening the Ecosystem: Capital, Capacity, and the Conditions for Durable Action
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">

          {/* Intro */}
          <section>
            <p className="text-lg leading-relaxed text-black mb-10">
              Nonprofits sustain continuity across systems, extending beyond their mandates to keep access, care, and participation from collapsing. Strengthening this ecosystem, therefore, cannot be understood as a question of scale alone. It is as much a question of what kinds of work the current architecture is able to sustain, and what it continues to defer. This chapter follows two forces shaping the nonprofit ecosystem today: funding flows and capacity.
            </p>
          </section>

          {/* 4.1 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">4.1</span>
              <span>How Philanthropic Capital Shapes the Ecosystem</span>
            </h3>

            <p className="text-lg leading-relaxed text-black mb-8">
              Funding plays a critical role in shaping India's disability ecosystem, explaining why certain forms of work flourish, others stall, and some never find room to exist at all. This defines the stakes around how philanthropic capital enters and moves through the nonprofit ecosystem, within a broader funding context that is already constrained.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              India's overall social sector funding landscape, including private philanthropy, CSR, and government spending has expanded significantly in recent years, reaching roughly INR 27 lakh crore in FY25 and growing at a 13% CAGR since FY20, with public spending accounting for about 95% of the total. While growth is promising, it is insufficient in relation to the sectoral needs. The overall funding shortfall to meet the Sustainable Development Goals, stands at approximately INR 16 lakh crore in FY25 and is projected to widen further by FY30. Disaggregated data on disability-specific philanthropic flows to India remains scarce. Based on proxy data available via the National CSR Portal, disability commands a marginal share in India's philanthropic landscape.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              But the challenge goes beyond underfunding; it is also driven by the diversity of funder mandates, timelines, and constraints — shaping what kinds of work find support, and what remains harder to sustain. This section examines how different streams of capital enter the disability ecosystem, what kinds of work they are structured to support, and what this architecture implies for the field as a whole.
            </p>

            {/* 4.1.1 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">4.1.1</span>
              <span>Funding Streams and Logics: Who Funds What, and Why</span>
            </h3>

            <p className="text-lg leading-relaxed text-black mb-10">
              Philanthropic capital moves through the disability ecosystem through a set of distinct actors, CSR, family philanthropy, international funders, and the state, each shaping what kinds of work it is able to support. At the broadest level, disability remains underfunded globally. Even as the language of inclusion has expanded, resource allocation has not kept pace – estimates suggest that disability inclusion receives less than 2% of global development funding. This wider imbalance matters because it places disability within a funding environment where recognition has grown faster than commitment.
            </p>

            {/* CORPORATE SOCIAL RESPONSIBILITY */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Corporate Social Responsibility</p>

            <p className="text-lg leading-relaxed text-black mb-8">
              The National CSR Portal classifies spending by sector. Disability inclusion is grouped under the broader category of 'Education, Differently Abled, and Livelihood', making it difficult to isolate disability-specific figures precisely. However, the reporting undertaken for FY 23-24, for the sub-head of 'Special Education,' offers preliminary insights about the state of funding.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Special Education received just 1.14% of total CSR spending in FY 2023–24 i.e., INR 396.57 crore out of INR 34,908.75 crore. This a small slice for a sub-category serving one of India's most underserved populations. The participation gap is equally notable. Only 1,182 of 27,188 eligible companies, about 4.35%, directed any funds to Special Education at all. It can be assumed that many companies either chose not to engage with this sub-category or folded disability-related giving into other buckets (like vocational training or healthcare) that wouldn't appear here.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              The average spend per company in Special Education (INR 33.5 lakh) is also considerably lower than the all-CSR average of INR 1.28 crore per company, suggesting that when companies do engage, they tend to treat it as a supplementary rather than primary giving area. The top 10 companies alone drive nearly a quarter of all Special Education CSR, which points to how dependent this sub-sector is on a handful of motivated corporate champions rather than broad-based participation.
            </p>

            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Figure: 8</p>
            <p className="text-base text-black font-bold mb-4">Disability Inclusion in CSR Expenditure</p>
            <img src="/ch4/ch4Fig8.png" alt="Figure 8 – Disability Inclusion in CSR Expenditure" className="w-full object-contain mb-4" />


            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800">
                Special Education receives just ₹1.14 of every INR 100 spent on CSR across India - despite disability inclusion being a Schedule VII priority.
              </p>
            </div>
            <p className="text-base text-black font-bold mb-4">Special Education CSR growth since 2014</p>
            <img src="/ch4/ch4Graph.png" alt="special Education CSR growth since 2014" className="w-full object-contain mb-4" />
            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800">
                Spend has grown 7.6x since FY 2014-15, but remains a thin slice of the expanding CSR total.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-900 mb-10">
              Source: Government of India, Ministry of Corporate Affairs, National CSR Portal <br />
              <a href="https://www.csr.gov.in/content/csr/global/master/home/home.html" target="_blank" className="underline cursor-pointer">(https://www.csr.gov.in/ )</a>
            </p>
            <p className="text-xl leading-relaxed text-gray-900 mb-10">
              Still, in India CSR remains one of the largest and most visible channels of domestic
              private capital, including within the disability ecosystem63. Its compliance-driven
              architecture aligns well with interventions that are well-defined, time-bound, and
              measurable, sustaining investment in service delivery, accessibility infrastructure,
              assistive support, and skilling initiatives.
            </p>
            <p className="text-xl leading-relaxed text-gray-900 mb-10">
              For many organizations in the disability ecosystem, CSR is the stream around which
              financial survival is often organized. Participants across the qualitative dataset
              repeatedly identified CSR as a central funding channel. That dependence can give
              CSR significant influence over the shape of the field. Its preference for bounded,
              visible, and reportable interventions often determines what becomes easier to
              propose, repeat, but also harder to move beyond.
            </p>

            <blockquote className=" pl-6 mb-10">
              <p className="text-lg leading-relaxed text-black italic mb-2">
                "Corporates often compare disability programs with mainstream youth skilling initiatives, expecting similar numbers and unit costs. However, training costs for people with disabilities is higher, due to requirements such as special educators, assistive infrastructure, and accessible hostel facilities for rural participants."
              </p>
              <p className="text-base text-gray-500 italic">-Srilakshmi Bellamkonda, Dr. Reddy's Foundation</p>
            </blockquote>

            <p className="text-lg leading-relaxed text-black mb-12">
              There are, however, examples of corporates beginning to work through deeper and more sustained partnership models. Bajaj Finserv's disability-focused initiatives and Tech Mahindra Foundation's lifecycle approach to disability inclusion demonstrate how CSR can move beyond one-off support toward longer-horizon engagement with implementation partners and institutions.
            </p>

            {/* FAMILY AND INDIVIDUAL PHILANTHROPY */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Family and Individual Philanthropy</p>

            <p className="text-lg leading-relaxed text-black mb-8">
              In India, family philanthropy has emerged as a significant and growing part of giving, accounting for almost a third of domestic private contributions and expanding steadily over recent years. Family and individual philanthropy often operate with greater flexibility, supporting areas such as core funding, organizational growth, early-stage experimentation, and slower forms of institutional work. In a sector where not all essential functions can be cleanly bounded as programs, this difference matters greatly. Investments with the potential to be far-reaching and enduring in their mandate, such as building evidence, shifting narratives and practice, and developing replicable models, rarely produce legible outputs within a time-bound quarterly or annual grant window. Sustaining such work demands long-term engagement and a high appetite for innovation among funders, which family philanthropy is uniquely positioned to drive.
            </p>

            <blockquote className=" pl-6 mb-10">
              <p className="text-lg leading-relaxed text-black italic mb-2">
                "Our role as organizations is to experiment, innovate, inspire. Scaling is the government's responsibility. We don't want to standardize our efforts or dictate uniform practices. Given our belief in diversity and our confidence in local solutions, one-size-fits-all is a bit boring. Haldiram delivers reliable namkeen, year after year, no matter where you buy it but it's still the local guy with the tiny shop and the limited stock we come back to again and again. We love the kaleidoscope of approaches our children and their families have come up with. We'll stick with them."
              </p>
              <p className="text-base text-gray-500 italic">-Jo Chopra-McGowan, Latika</p>
            </blockquote>

            <p className="text-lg leading-relaxed text-black mb-10">
              Nonetheless, such investments are still to catch up with the massive deficits, and are often dispersed and relationship-driven, with fewer mechanisms for coordinated, long-term ecosystem deployment. Harnessing family and individual philanthropy to support work that is slower, less visible, or harder to fit within narrower grant structures remains an important opportunity to build greater coherence at the level of the field.
            </p>

            <div className="p-8 bg-box rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-black font-semibold">
                International funders have played an important role in advancing rights-based approaches, research, and movement-building within the disability ecosystem.
              </p>
            </div>

            {/* INTERNATIONAL FUNDERS */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">International Funders</p>

            <p className="text-lg leading-relaxed text-black mb-8">
              International funders have played an important role in advancing rights-based approaches, research, and movement-building within the disability ecosystem. Their contribution is often as normative as it is financial, widening how the field is funded and what it treats as fundable. This support takes several forms: core and flexible funding from disability-focused funds and private philanthropies, programmatic investments from multilaterals and disability inclusion INGOs, and niche grants from organizations working on particular conditions or interventions. International funding has played a key role in seeding participatory grantmaking approaches, intersectional practice, and systemic change – precisely the areas where domestic funding has historically lagged.
            </p>

            <blockquote className=" pl-6 mb-10">
              <p className="text-lg leading-relaxed text-black italic mb-2">
                "Our aim is not to bring in any blueprint or strategy. Instead, we want to be sensitive to the needs of a particular region, community, or experience of disability. We work with partners closely to understand their context, needs, and skillsets, and try to understand their work intersectionally"
              </p>
              <p className="text-base text-gray-500 italic">-Gazala Paul, Paul Hamlyn Foundation</p>
            </blockquote>

            <p className="text-lg leading-relaxed text-black mb-12">
              Their presence in India, however, remains limited relative to the scale of the field, and concentrated among organizations with the institutional capacity to engage at that level. In practice, this has meant that international funders often partner with larger organizations that can convene and resource hyperlocal actors that are closer to the ground. The support has deepened parts of the ecosystem but has not shifted the wider imbalance in how disability is funded.
            </p>

            {/* THE STATE */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">The State</p>

            <p className="text-lg leading-relaxed text-black mb-8">
              The primary central government body responsible for disability welfare is the Department of Empowerment of Persons with Disabilities (DEPwD), which sits within the Ministry of Social Justice and Empowerment (MSJE). The table below traces DEPwD budget allocations over recent years.
            </p>

            <p className="text-xl font-bold text-black mb-1 underline">Figure: 9</p>
            {/* <p className="text-base text-black font-bold mb-4">DEPwD Budget Over the Last 3 Years</p> */}
            <img src="/ch4/ch4Fig91.png" alt="Figure 9 – DEPwD Budget Over the Last 3 Years" className="w-full object-contain mb-4" />

            <div className="p-8 bg-chHero rounded-xl mb-4">
              <p className="text-xl leading-relaxed text-gray-800">
                FY 2026-27 sees the sharpest rise — +INR 395 Cr year-on-year — driven largely by two new schemes: Divyangjan Kaushal Yojana (INR 200 Cr) and Divyang Sahara Yojana (INR 100 Cr), which together account for 79% of the increase.
              </p>
            </div>
            <p className="text-sm text-gray-800 mb-12">Source: Government of India – Budget Documents <a href="https://www.indiabudget.gov.in/" target="_blank" className="underline cursor-pointer">(https://www.indiabudget.gov.in)</a></p>

            <p className="text-lg leading-relaxed text-black mb-8">
              The FY 2026–27 allocation of INR 1,670 crore represents a significant nominal increase, approximately 30% over revised estimates for 2025–26. However, two new schemes account for the bulk of this rise: the Divyangjan Kaushal Yojana (INR 200 crore, focused on industry-aligned skill development) and the Divyang Sahara Yojana (INR 100 crore, for assistive devices). Together, these two new schemes make up around 79% of the year-on-year increase, while funding for existing institutional and administrative programs has grown only marginally. A lack of up-to-date estimates of disability prevalence makes it challenging to map how DEPwD budget allocations sit alongside coverage requirements.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Public funding is foundational in principle, moving through schemes, entitlements, and welfare infrastructure that remain key to how disability support is delivered at scale. It sets the baseline architecture within which all other funding streams operate. Where state systems are more coherent, they demonstrate that entitlements must exist through funding, implementation, and access in practice. In addition to administrative complexity and regional variation, inter-departmental coordination emerges as a bottleneck in resources reaching the ground. Beyond the MSJE, central ministries working on critical issues like housing and rural development often lack dedicated resources for disability inclusion. Coordination between central and state government departments can also dictate how resources flow towards mandates. For nonprofits, public funding is rarely separable from the translation and follow-through that must accompany it.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              These four streams of funding for disability inclusion in India function more like distinct, sometimes intersecting systems operating in the same landscape, rather than a cohesive ecosystem. Each operates through its own internally coherent, sometimes institutionally defined logic, but often ends up working in silos. The result is a landscape where work that falls neatly within a single funding stream's logic is likelier to draw resourcing. The funding architecture required to sustain large-scale efforts that require multiple streams to align, such as coordination, field-building, long-horizon institutional development, remains nascent. The characteristics of each funding stream elucidate, in aggregate, what reaches whom and where.
            </p>

            <div className="p-8 bg-box rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-2">
                The FY 2026-27 allocation of INR 1,670 crore represents a significant increase,
              </p>
              <p className="text-2xl font-bold text-gray-900">
                approximately 30% over revised estimates for 2025–26.
              </p>
            </div>

            <p className="text-xl font-bold text-black underline mb-1">Figure: 10</p>
            <p className="text-base text-black font-bold mb-4">What Current Funding Makes Possible</p>
            <img src="/ch4/ch4Fig10.png" alt="Figure 10 – What Current Funding Makes Possible" className="w-full object-contain mb-12" />

            {/* 4.1.2 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">4.1.2</span>
              <span>What Philanthropic Capital Reaches, and What It Misses</span>
            </h3>

            <p className="text-lg leading-relaxed text-black mb-10">
              At the last mile, disability inclusion is made or unmade in everyday settings — where individuals and families must move through schools, health systems, documentation processes, livelihoods pathways, and local institutions to access what formally exists. Beyond whether or not a solution is available, it matters whether support can travel across these touchpoints in ways that remain usable, continuous, and responsive to lived needs.
            </p>

            {/* THE VISIBLE CORE */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">The Visible Core: Work That Is Easy to Fund</p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Current funding structures reach some parts of this work more easily than others. Our survey data showed that nonprofits' work is concentrated in areas that are easier to define and support as standalone interventions: inclusive and special education (63%), livelihoods and workforce inclusion (48%), early intervention (42%), and healthcare, rehabilitation, and therapy (40%). Beyond these, the distribution dropped sharply. Research and evidence building accounted for 8% of organizations, caregiver support 8%, legal aid and documentation 7%, narrative change and advocacy 7%, mental health and psychosocial support 10%, and accessibility around 6%.
            </p>

            <img src="/ch4/ch4Fig11.png" alt="Figure – Underfunded work areas" className="w-full object-contain mb-10" />

            <p className="text-lg leading-relaxed text-black mb-12">
              This pattern illustrates how thinner areas can be harder to articulate and stabilize within prevailing funding logics. Education, therapy, and skilling can be structured as programs with clear outputs. Caregiver support, legal navigation, accessibility, research, and advocacy sit closer to the enabling edge of the ecosystem. They make interventions usable and durable, but do not always present themselves as discrete programs. As Prashant Sude from GSP India Grameen Shramik Pratishthan shared, <em className="text-secondary font-medium">"Skill development, distribution of assistive aids, and to an extent education are favored interventions, but there is a lot of scope to go beyond this that is difficult to explain to funders."</em> The thinness of interventions is not evenly distributed – it follows visibility and resource flows.
            </p>

            {/* THE THINNER EDGE */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">The Thinner Edge: Work That Is Still Underfunded</p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Several of the thinner areas showed a distinct budget threshold. In the survey, no organization operating under INR 50 lakh identified research, mental health, or caregiver support as a primary area of work. Research and evidence-building was concentrated almost entirely among larger organizations; mental health followed a similar pattern. This suggests that some parts of the ecosystem's efforts require a financial runway that only a narrow band of organizations currently have.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              The same disparities appeared geographically as well. Organizations prioritizing mental health, advocacy, and accessibility showed effectively no rural or remote focus in the survey. Legal aid and caregiver support reached rural areas only rarely. Rural and remote organizations, by contrast, remained concentrated in visible, community-facing work: schooling, community awareness, therapy, and livelihoods. What remains thin, then, is also a question of who can afford to sustain certain kinds of interventions, and where.
            </p>

            <p className="text-lg leading-relaxed text-black mb-12">
              Funding selectivity also shapes which disabilities are more readily recognized. Radhika Kannan from Mariwala Health Initiative observed, <em className="text-secondary font-medium">"Three to maybe six disabilities are funded the most by all CSRs, out of all the 21 specified in the RPwD Act. The other 14 to 15 are lesser-known and often underfunded."</em> The consequences of this selectivity shape what becomes familiar to capital, what is left at the margins of funder attention, and which organizations end up operating in more complexity than funding structures are designed to absorb.
            </p>

            {/* THE CONNECTIVE LAYER */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">The Connective Layer: Functions That Sustain the Ecosystem</p>

            <p className="text-lg leading-relaxed text-black mb-8">
              At the last mile, the work of holding continuity across interventions often depends
              on partnerships, shared information, referrals, follow up, and trust. Yet partnerships
              and coalition work were underfunded for 15% of organizations in our sample, MEL
              and data systems for 15%, and digital systems for 14%. These are often sidelined
              as backend functions. In practice, they are part of the infrastructure that allows
              people to move across a fragmented ecosystem without disappearing between one
              intervention and the next. <em className="text-secondary font-medium">“As a CSR organization in disability space, we believe our
              role extends beyond funding established programs. We work alongside nonprofits
              91
              as co-creation partners to design and pilot innovative solutions, transforming
              promising ideas into structured, evidence-based interventions. Successful pilots
              can then evolve into scalable and replicable models with the potential to create
              sustained, long-term impact. This approach reflects our belief that CSR should
              be collaborative rather than transactional, grounded in shared learning and a
              collective commitment to advancing inclusion and improving the lives of persons
              with disabilities.”</em> shared Dr. Aman Preet Kaur from Bajaj Finserv. These perspectives
              from funding practice outline how what is required at the last mile often needs to
              be articulated a certain way to become fundable.
            </p>

            <div className="p-8 bg-box rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-black font-medium">
                Coordination across organizations was difficult for 33%, and 28% reported that partnerships do not move beyond discussion into joint action.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-black mb-8">
              The issue here, then, is not only one of underinvestment. It is one of fit. Current funding structures support visible interventions more easily than the broader conditions that allow those interventions to hold. They fund delivery more readily than coordination, categories more readily than complexity, and program units more readily than the connective labor required to make support usable over time.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              The effects of funding architecture do not stop at the level of programs. They travel inward, shaping what organizations must ultimately absorb, build, and sustain in order to keep the ecosystem functioning. Flows and constraints shape how teams, systems, leadership, and coordination can all be built. This is where the question of capacity begins.
            </p>
          </section>

          {/* 4.2 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">4.2</span>
              <span>Organizational Capacity as a Structural Condition</span>
            </h3>

            <p className="text-lg leading-relaxed text-black mb-8">
              Capacity in the nonprofit ecosystem is better read as an outcome of how the ecosystem itself is structured: what is funded, what is deferred, and what organizations are expected to carry on without support. Over time, organizations have learned to operate within these conditions, building systems, teams, and relationships as they go. The stability required to sustain that work has rarely been provided. The result is a sector that has absorbed the functions of a mature field, like convening, peer-strengthening, knowledge generation, and institutional memory, without the resourcing a mature field requires.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              Understanding capacity as a structural condition, not an organizational mandate, is the prerequisite for changing it. The following section traces how these conditions take form across four dimensions: what organizations are asking for, where the foundational pressures concentrate, why collaboration remains structurally out of reach, and how field-building functions are currently being carried invisibly, and at cost.
            </p>

            {/* 4.2.1 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">4.2.1</span>
              <span>What Organizations Are Asking For: Signals from the Field</span>
            </h3>

            <blockquote className="pl-6 mb-10">
              <p className="text-lg leading-relaxed text-black italic mb-2">
                "We didn't take a salary, we couldn't hire people, we were doing all of the roles"
              </p>
              <p className="text-base text-gray-500 italic">-Beverly Louis, Mann</p>
            </blockquote>

            <p className="text-lg leading-relaxed text-black mb-10">
              This could have been spoken by the founder of almost any organization in this sector — and in some form, it was. Not as a story of early struggle, but as a condition that has never quite lifted. As organizations experience it, capacity is not a question of skill. Instead, it reproduces itself with a consistency that reflects how the ecosystem is built rather than how organizations are run. Survey data on where capacity gaps cluster paints a picture that is simultaneously expected, yet insightful. Nonprofits were asked to identify their most pressing capacity needs over two time horizons: the next twelve months and the next two to three years.
            </p>

            <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Table 8</p>
            <p className="text-black text-xl leading-relaxed mb-6 font-bold">Capacity needs of nonprofits across two time horizons, n=109</p>
            <div className="overflow-x-auto border border-border mb-12">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-5 py-4 font-bold border-r border-white/20">Need</th>
                    <th className="text-left px-5 py-4 font-bold border-r border-white/20">Immediate (next 12 months)</th>
                    <th className="text-left px-5 py-4 font-bold">Long-term (next 2–3 years)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { need: "Fundraising and financial sustainability", immediate: "70%", longterm: "88%" },
                    { need: "Strategic planning and growth", immediate: "42%", longterm: "Not prioritized" },
                    { need: "Leadership and succession", immediate: "38%", longterm: "48%" },
                    { need: "Collaboration and partnerships", immediate: "27%", longterm: "51%" },
                    { need: "Monitoring, evaluation and learning", immediate: "15%", longterm: "36%" },
                    { need: "Narratives and advocacy", immediate: "12%", longterm: "28%" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                      <td className="px-5 py-4 text-gray-800 border-r border-border border-b">{row.need}</td>
                      <td className="px-5 py-4 text-gray-800 border-r border-border border-b">{row.immediate}</td>
                      <td className="px-5 py-4 text-gray-800 border-b">{row.longterm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed text-black mb-6">Several things are worth holding together from these results.</p>
            <ol className="list-decimal list-inside space-y-4 mb-10 text-xl text-black leading-relaxed marker:text-secondary marker:font-bold">
              <li><strong className="text-secondary font-bold">Fundraising</strong> moves from a third of immediate responses to near-universal agreement at 90%, signalling that the sector reads its funding challenge as structural and long-term rather than temporary.</li>
              <li><strong className="text-secondary font-bold">Collaboration and partnerships</strong> are registered as a priority for around 27% of organizations in the near term, but rise to 52% over the longer term. This is evidence of constraint.</li>
              <li><strong className="text-secondary font-bold">MEL, narratives, field coordination</strong>, the functions that are most absent from immediate priorities, but become a part of the longer term signal the need for field-building.</li>
            </ol>

            <p className="text-lg leading-relaxed text-black mb-8">
              The sector is not unaware of what it needs. It is unable to fund those needs in the present.
            </p>
            <p className="text-lg leading-relaxed text-black mb-8">
              Immediate needs are internal and operational: securing funds, retaining staff, and managing delivery. Long-term needs are systemic: collaboration, coordination, shared infrastructure. The distance between those two registers, and the gap in funding that maintains it, is where funders need to act.
            </p>
            <p className="text-lg leading-relaxed text-black mb-10">
              As systems of welfare, finance, and identity have expanded, their architecture has not always expanded with accessibility in mind. In 2025, the Supreme Court observed that inaccessible digital KYC processes were preventing persons with disabilities from opening bank accounts and accessing essential services — effectively excluding them from systems that had already become mandated for participation. Capacity, in this sense, is a function of how systems are designed, how they expand and contract, and who they are designed to include.
            </p>

            {/* 4.2.2 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">4.2.2</span>
              <span>Fundraising and Leadership: Foundational Pressures on Organizational Stability</span>
            </h3>

            <p className="text-lg leading-relaxed text-black mb-8">
              That fundraising should dominate both time horizons is, on one level, predictable — and on another, worth examining more closely. A large majority of organizations in our sample (84%) had been operating for over a decade. This indicates that funding is not an early-stage fragility. It is a condition that persists over time, settling into something chronic and less visible.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Smaller organizations operating with budgets under INR 1 crore report immediate fundraising pressure at significantly higher rates than mid-sized or large ones. Funding comes, extends, drops, and reappears in ways that rarely allow planning beyond the immediate horizon. <em className="text-secondary font-medium">"You are always between grants, never fully inside one,"</em> shared Dr. Lakshmi Narasimhan from The Banyan Academy of Leadership in Mental Health. Dr. Dipti Gandhi, Muskan Foundation, described the constant recalibration this produces: <em className="text-secondary font-medium">"We plan for a year, but think in quarters, and survive month to month."</em>
            </p>

            <blockquote className="pl-6 mb-10">
              <p className="text-lg leading-relaxed text-black italic mb-2">
                "Our founder had brought the organization as far as she could with our existing skills and practices. We had a really strong clinical team, and we needed the organization to now bring in systems, processes, futuristic thinking."
              </p>
              <p className="text-base text-gray-500 italic">-Shamin Mehrotra, Ummeed Child Development Center</p>
            </blockquote>

            <p className="text-lg leading-relaxed text-black mb-8">
              Mid- and large-sized organizations show the sharpest demand for strategic planning and growth as an immediate need, suggesting a ceiling that emerges once organizations move beyond survival but before they reach enduring stability. The geography of this pressure, as in the case of other dimensions of practice, is uneven. Urban organizations with proximity to corporate networks, proposal infrastructure, and relationship capital can navigate funding with greater traction. For rural and remote organizations, the system is difficult and inaccessible. <em className="text-secondary font-medium">"The population we serve is very thinly dispersed and scattered,"</em> Prashant Sude, GSP India Grameen Shramik Pratishthan described — a condition that also applies to the funding meant to reach them.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              This unevenness has material implications. In Karnataka, recent budget reductions sharply cut allocations for assistive devices such as Braille kits and talking laptops, leaving hundreds of visually impaired students waiting without support. What appears as a capacity gap at the organizational level is often the downstream effect of such systemic volatility. Similarities persist at the level of individuals and families. Access to pensions, allowances, and welfare schemes is frequently mediated through fragmented processes, documentation gaps, and repeated verification requirements, making continuity of support uncertain even where entitlements formally exist.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Leadership sits alongside fundraising in this foundational layer. The sector is old enough that founder dependency is a structural need. Organizations built on lived experience, personal networks, and institutional knowledge now face the question of continuity without having been supported to foster it. Almost 35% of organizations included persons with disabilities in governance roles, but only 20% are disability-led at the founder or CEO level. Organizations closest to lived experience are often among those operating with the least institutional support.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              <em className="text-secondary font-medium">"We want exact numbers, exact figures, exact activity, exact everything,"</em> said Nidhi Goyal from Rising Flame, <em className="text-secondary font-medium">"but people don't want to fund those who are executing, or leading organizations."</em> The ability to invest in second-line leadership, governance systems, or institutional memory requires resources that are rarely explicitly prioritized by funders. At 49%, leadership development and succession planning appeared clearly as long-term capacity needs in our data. However, the groundwork for them cannot be laid from within program budgets alone.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              Recent workplace inclusion efforts continue to note that while organizations increasingly adopt disability inclusion policies, gaps in accessibility, training, and institutional readiness limit actual participation. Here, as elsewhere, the constraint is not recognition — it is the systems and resourcing that determine whether policy becomes practice.
            </p>

            {/* 4.2.3 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">4.2.3</span>
              <span>Collaboration and the Missing Middle: Why Collective Work Stays Fragile</span>
            </h3>

            <p className="text-lg leading-relaxed text-black mb-8">
              Collaboration and partnerships registered as a priority for around 27% of organizations in the immediate term, but rose sharply to 52% in the long term. Among organizations that identified collaboration barriers, 51% cited limited staff time to build and manage partnerships, 52% pointed to restrictive funding and reporting requirements, and 42% said it was difficult to identify the right partners. This gap is not about willingness. Even where intent exists, the conditions to sustain collaboration do not.
            </p>

            <img src="/ch4/ch4Fig12.png" alt="Figure – Collaboration barriers" className="w-full object-contain mb-10" />

            <p className="text-lg leading-relaxed text-black mb-8">
              Sitting beneath both the fragmentation and the desire to overcome it is a structural absence that the sector itself names with considerable precision: the missing middle. Not missing in recognition — organizations can describe, often in operational detail, the coordination mechanisms, shared systems, and platforms that would change how the field functions. Missing in the sense of being systematically unfunded, treated as overhead rather than architecture, often valued in conversation but starved in practice.
            </p>

            <blockquote className="pl-6 mb-10">
              <p className="text-lg leading-relaxed text-black italic mb-2">
                "Funders and organisations have their own approaches, and that's important. But when you're dealing with a problem that needs deeper engagement, ecosystem-building becomes critical. A certain amount of capital needs to be deployed thoughtfully, and the right stakeholders must be brought together. It is equally important for funders to collaborate and engage with each other more toward common goals"
              </p>
              <p className="text-base text-gray-500 italic">-Siddharth Agarwal, Upadhyaya Foundation</p>
            </blockquote>

            <p className="text-lg leading-relaxed text-black mb-8">
              Across the social sector, functions such as coordination, knowledge infrastructure, and ecosystem-building are widely acknowledged as critical but among the least directly funded — reinforcing a system where collective capacity is expected but not resourced for. Most notably, collaboration and partnerships do not register as a dominant priority for organizations in the immediate term (around 27%), often overshadowed by more urgent demands, and then rise sharply to 52% as a long-term priority. This indicates that organizations are not unwilling to collaborate; they are unable to afford or account for it presently. Amid limited staff time, restrictive funding requirements, and constraints in terms of identifying the right partners, pathways to collaboration are riddled with bottlenecks.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              For organizations working in rural or remote geographies, the pathways to collaboration are far less available. <em className="text-secondary font-medium">"Even meeting regularly is difficult,"</em> Bashir Ahmad Lone, Voluntary Medicare Society shared. Nargis Khatoon from Srijan Mahila Vikas Manch added, <em className="text-secondary font-medium">"Travel itself becomes the barrier in hard-to-reach regions with geographically difficult terrain."</em> In such contexts, collaboration is not only about alignment, but access — to people, platforms, and the time required to build relationships.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Qualitative accounts illustrate the relational texture of collaboration under constraint. <em className="text-secondary font-medium">"I would love to see an ecosystem that is more compassionate,"</em> Myroslava Tataryn, Disability Rights Fund reflected, pointing to an environment where competition is accepted as a norm. The fragmentation that follows is adaptive, shaped by conditions where visibility, access, and participation are unevenly distributed and systematically demarcated, even within spaces designed for collaboration. <em className="text-secondary font-medium">"If you put ten visual impairment organizations together, they'll compete for funding, visibility, and influence,"</em> said Shilpi Kapoor, BarrierBreak. "Fear drives secrecy." This observation names something that sits uncomfortably beneath most formal accounts. Over time, organizations in this landscape may have discovered that the architecture around them rewards isolation more readily than cooperation.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              Also visible in the same landscape is that organizations find ways to work together, often informally, sometimes deliberately. Qualitative data surfaced several examples of locally sustained collaboration, including coordination between nonprofits in Dehradun, hub-and-spoke outreach in Karnataka, peer problem-solving networks in Pune, and forms of public-system collaboration in Tamil Nadu, though these remained dispersed, locally held, and difficult to sustain without dedicated support. In each case, collaboration was enabled by some form of supporting infrastructure, such as a convening, a platform, or even a shared communication channel. The infrastructure required was often modest, but it mattered that it existed, and that it was held long enough for trust to accumulate. These examples illustrate that collaboration is not absent, but instead fragile. Without sustained support, it remains episodic rather than structural.
            </p>

            {/* 4.2.4 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">4.2.4</span>
              <span>Field-Building on Program Budgets: Ecosystem Work Without Ecosystem Funding</span>
            </h3>

            <p className="text-lg leading-relaxed text-black mb-8">
              There is a category of organization in this landscape that the funding architecture has never quite known how to hold. What these organizations do is among the most legible and consequential work in the sector, but it typically does not produce the kind of outputs that grant cycles are designed to recognize. These are the field-builders: organizations that have absorbed convening, peer-strengthening, research, institutional memory, and coalition work into their identity, and that carry out these efforts largely in the margins of grants designed for something else.
            </p>

            <blockquote className="pl-6 mb-10">
              <p className="text-lg leading-relaxed text-black italic mb-2">
                "People often ask why our work on inclusion is so resource-intensive. The truth is, many of the families we work with are already carrying the weight of financial insecurity, caregiving burdens, social stigma, and the daily pressure to survive. So before we can ask the family of a child or adult with Intellectual Disability to participate consistently in our programme, we first have to understand what is pulling them away from it. Sometimes the solution is educational, sometimes emotional, sometimes economic. Their participation, therefore, cannot be rolled out as a standardized system. It is more like weaving a safety net, thread by thread, around each family. That process takes time, patience, and deep human engagement. But if inclusion is to be real and lasting, there is no other way"
              </p>
              <p className="text-base text-gray-500 italic">-Archana Chandra, Jai Vakeel Foundation</p>
            </blockquote>

            <p className="text-lg leading-relaxed text-black mb-8">
              Ecosystem-facing functions such as research, narrative building, convening, are among the least funded, even when widely recognized as critical. This reflects a deeper misalignment in how value is defined. Work that produces system-level change operates on longer time horizons and diffused outcomes, almost by design. This makes it less legible to funding models oriented towards results that can be clearly quantified and attributed. The organizational response is predictable. When field-building work is unfunded, it gets relocated into unrestricted funds, leadership time, and institutional margins. As a result, a significant portion of the sector's core is being built and maintained without formal recognition, and without sustainable resourcing. Global disability inclusion efforts increasingly recognize that such connective infrastructure is essential for sustained change, despite its low visibility in the mainstream.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              This is a load-bearing arrangement that is unsustainable. The sector is currently asking its most experienced organizations to absorb field-building functions as a condition of participation. That arrangement works until the founders carrying institutional memory step back, the networks built on personal relationships dissolve, or the organizations doing ecosystem work conclude that the cost is no longer manageable. Articulating the critical value delivered to the ecosystem by field-building initiatives is a necessary first step towards resourcing this work with greater ambition and vigor.
            </p>

            {/* 4.2.5 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">4.2.5</span>
              <span>Limits of the Current Model: What Cannot Sustain</span>
            </h3>

            <p className="text-lg leading-relaxed text-black mb-8">
              Organizations in this sector have learned to keep moving, filling gaps that systems leave open, holding continuity that funders do not pay for, and carrying field-building functions in the margins of grants designed for something else. This absorption has been misread for too long as resilience — as though the capacity to continue under constraint is evidence that the constraint is manageable.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              More precisely, while the disability inclusion ecosystem looks like it is holding together, it can also be understood as a sector that is compensating. This compensation is disproportionate: it falls heaviest on organizations closest to the ground, least resourced to carry it, and most distant from the funding relationships that might eventually relieve it. Founder-led organizations without second lines. Rural organizations without the runway to build systems. Field-builders doing ecosystem work on program budgets, invisible to the logframes that determine what counts.
            </p>

            <p className="text-lg leading-relaxed text-black mb-6">Four structural conditions cannot be sustained under the current approach:</p>
            <ul className="space-y-4 mb-10 text-xl text-black leading-relaxed">
              {[
                { bold: "Capacity treated as overhead rather than foundation", rest: " — organizations are expected to build institutional systems without explicit funding for them." },
                { bold: "Coordination expected but never resourced", rest: " — collaboration is identified as critical by over half the sector's long-term respondents but is practically absent from funded work." },
                { bold: "Leadership continuity left to chance", rest: " — succession planning and second-line development require dedicated investment that uniform grant models do not provide." },
                { bold: "Differentiated need met with uniform models", rest: " — the pressures facing a rural, founder-led organization under INR 1 crore are categorically different from those facing a mid-sized urban one; the funding architecture does not yet reflect this." },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
                  <span><strong>{item.bold}</strong>{item.rest}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg leading-relaxed text-black mb-8">
              Bridgespan's field-building framework offers funders a precise vocabulary for what this sector is already attempting and what it needs resourced.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Our research emphasizes that the core needs of nonprofit organizations are met most effectively when momentum is directed toward field building. This is achieved through collaborative action designed to consolidate outcomes and strategically influence funders.
            </p>

            <p className="text-lg leading-relaxed text-black mb-8">
              Leadership development, so organizations can sustain themselves beyond their founders. Network-building and coordination, so collaboration becomes structural rather than episodic. Research and knowledge generation, the sector can speak from evidence. Narrative change, so nonprofits can act from a position of shared purpose rather than fragmented survival.
            </p>

            <p className="text-lg leading-relaxed text-black mb-12">
              These efforts are preconditions for the ecosystem's work being credible, sustainable, and heard. The sector has named them consistently and in detail, across both survey data and qualitative testimony. The gap lies in whether funders are willing to resource the field-building capacity that determines whether organizations can sustain their leadership, advocate for their work, and shape the systems they are trying to change. Capacity, understood this way, is not a support function. It is the condition through which everything else becomes possible.
            </p>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-4">
                The preceding chapters show that disability inclusion is constrained by fragmentation across systems, funding, and accountability. Nonprofits are often required to bridge these gaps informally, sustaining continuity where formal systems do not. Breakpoints reveal where exclusion is reproduced; funding flows reveal why responses remain uneven.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                The cornerstones that follow do not propose new actors; they clarify the conditions required for collective action across those already present: government, philanthropy, industry, civil society, and disabled people themselves. The task is not to add complexity, but to build alignment around what makes inclusion durable.
              </p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-3" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 03
            </Link>
            <Link href="/chapter-5" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 05 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
