import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Chapter4() {
  return (
    <Layout>
      <div className="py-20 bg-chHero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-7xl font-heading font-bold text-secondary leading-none mb-2">04</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight uppercase tracking-wide">
              Strengthening the Ecosystem: Capital, Capacity, and the Conditions for Durable Action
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">

          {/* Intro */}
          <section>
            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              Nonprofits sustain continuity across systems, extending beyond their mandates to keep access, care, and participation from collapsing. Strengthening this ecosystem, therefore, cannot be understood as a question of scale alone. It is as much a question of what kinds of work the current architecture is able to sustain, and what it continues to defer. This chapter follows two forces shaping the nonprofit ecosystem today: funding flows and capacity.
            </p>
          </section>

          {/* 4.1 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">4.1</span>
              <span>How Philanthropic Capital Shapes the Ecosystem</span>
            </h3>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Funding plays a critical role in shaping India's disability ecosystem, explaining why certain forms of work flourish, others stall, and some never find room to exist at all. This defines the stakes around how philanthropic capital enters and moves through the nonprofit ecosystem, within a broader funding context that is already constrained.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              India's overall social sector funding landscape, including private philanthropy, CSR, and government spending has expanded significantly in recent years, reaching roughly INR 27 lakh crore in FY25 and growing at a 13% CAGR since FY20, with public spending accounting for about 95% of the total. While growth is promising, it is insufficient in relation to the sectoral needs. The overall funding shortfall to meet the Sustainable Development Goals, stands at approximately INR 16 lakh crore in FY25 and is projected to widen further by FY30. Disaggregated data on disability-specific philanthropic flows to India remains scarce. Based on proxy data available via the National CSR Portal, disability commands a marginal share in India's philanthropic landscape.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              But the challenge goes beyond underfunding; it is also driven by the diversity of funder mandates, timelines, and constraints — shaping what kinds of work find support, and what remains harder to sustain. This section examines how different streams of capital enter the disability ecosystem, what kinds of work they are structured to support, and what this architecture implies for the field as a whole.
            </p>

            {/* 4.1.1 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">4.1.1</span>
              <span>Funding Streams and Logics: Who Funds What, and Why</span>
            </h3>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              Philanthropic capital moves through the disability ecosystem through a set of distinct actors, CSR, family philanthropy, international funders, and the state, each shaping what kinds of work it is able to support. At the broadest level, disability remains underfunded globally. Even as the language of inclusion has expanded, resource allocation has not kept pace – estimates suggest that disability inclusion receives less than 2% of global development funding. This wider imbalance matters because it places disability within a funding environment where recognition has grown faster than commitment.
            </p>

            {/* CORPORATE SOCIAL RESPONSIBILITY */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Corporate Social Responsibility</p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              The National CSR Portal classifies spending by sector. Disability inclusion is grouped under the broader category of 'Education, Differently Abled, and Livelihood', making it difficult to isolate disability-specific figures precisely. However, the reporting undertaken for FY 23-24, for the sub-head of 'Special Education,' offers preliminary insights about the state of funding.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Special Education received just 1.14% of total CSR spending in FY 2023–24 i.e., INR 396.57 crore out of INR 34,908.75 crore. This a small slice for a sub-category serving one of India's most underserved populations. The participation gap is equally notable. Only 1,182 of 27,188 eligible companies, about 4.35%, directed any funds to Special Education at all. It can be assumed that many companies either chose not to engage with this sub-category or folded disability-related giving into other buckets (like vocational training or healthcare) that wouldn't appear here.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
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
              (https://www.csr.gov.in/ )
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
              <p className="text-xl leading-relaxed text-gray-700 italic mb-2">
                "Corporates often compare disability programs with mainstream youth skilling initiatives, expecting similar numbers and unit costs. However, training costs for people with disabilities is higher, due to requirements such as special educators, assistive infrastructure, and accessible hostel facilities for rural participants."
              </p>
              <p className="text-base text-gray-500 italic">-Srilakshmi Bellamkonda, Dr. Reddy's Foundation</p>
            </blockquote>

            <p className="text-xl leading-relaxed text-gray-700 mb-12">
              There are, however, examples of corporates beginning to work through deeper and more sustained partnership models. Bajaj Finserv's disability-focused initiatives and Tech Mahindra Foundation's lifecycle approach to disability inclusion demonstrate how CSR can move beyond one-off support toward longer-horizon engagement with implementation partners and institutions.
            </p>

            {/* FAMILY AND INDIVIDUAL PHILANTHROPY */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Family and Individual Philanthropy</p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              In India, family philanthropy has emerged as a significant and growing part of giving, accounting for almost a third of domestic private contributions and expanding steadily over recent years. Family and individual philanthropy often operate with greater flexibility, supporting areas such as core funding, organizational growth, early-stage experimentation, and slower forms of institutional work. In a sector where not all essential functions can be cleanly bounded as programs, this difference matters greatly. Investments with the potential to be far-reaching and enduring in their mandate, such as building evidence, shifting narratives and practice, and developing replicable models, rarely produce legible outputs within a time-bound quarterly or annual grant window. Sustaining such work demands long-term engagement and a high appetite for innovation among funders, which family philanthropy is uniquely positioned to drive.
            </p>

            <blockquote className=" pl-6 mb-10">
              <p className="text-xl leading-relaxed text-gray-700 italic mb-2">
                "Our role as organizations is to experiment, innovate, inspire. Scaling is the government's responsibility. We don't want to standardize our efforts or dictate uniform practices. Given our belief in diversity and our confidence in local solutions, one-size-fits-all is a bit boring. Haldiram delivers reliable namkeen, year after year, no matter where you buy it but it's still the local guy with the tiny shop and the limited stock we come back to again and again. We love the kaleidoscope of approaches our children and their families have come up with. We'll stick with them."
              </p>
              <p className="text-base text-gray-500 italic">-Jo Chopra-McGowan, Latika</p>
            </blockquote>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              Nonetheless, such investments are still to catch up with the massive deficits, and are often dispersed and relationship-driven, with fewer mechanisms for coordinated, long-term ecosystem deployment. Harnessing family and individual philanthropy to support work that is slower, less visible, or harder to fit within narrower grant structures remains an important opportunity to build greater coherence at the level of the field.
            </p>

            <div className="p-8 bg-box rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-black font-semibold">
                International funders have played an important role in advancing rights-based approaches, research, and movement-building within the disability ecosystem.
              </p>
            </div>

            {/* INTERNATIONAL FUNDERS */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">International Funders</p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              International funders have played an important role in advancing rights-based approaches, research, and movement-building within the disability ecosystem. Their contribution is often as normative as it is financial, widening how the field is funded and what it treats as fundable. This support takes several forms: core and flexible funding from disability-focused funds and private philanthropies, programmatic investments from multilaterals and disability inclusion INGOs, and niche grants from organizations working on particular conditions or interventions. International funding has played a key role in seeding participatory grantmaking approaches, intersectional practice, and systemic change – precisely the areas where domestic funding has historically lagged.
            </p>

            <blockquote className=" pl-6 mb-10">
              <p className="text-xl leading-relaxed text-gray-700 italic mb-2">
                "Our aim is not to bring in any blueprint or strategy. Instead, we want to be sensitive to the needs of a particular region, community, or experience of disability. We work with partners closely to understand their context, needs, and skillsets, and try to understand their work intersectionally"
              </p>
              <p className="text-base text-gray-500 italic">-Gazala Paul, Paul Hamlyn Foundation</p>
            </blockquote>

            <p className="text-xl leading-relaxed text-gray-700 mb-12">
              Their presence in India, however, remains limited relative to the scale of the field, and concentrated among organizations with the institutional capacity to engage at that level. In practice, this has meant that international funders often partner with larger organizations that can convene and resource hyperlocal actors that are closer to the ground. The support has deepened parts of the ecosystem but has not shifted the wider imbalance in how disability is funded.
            </p>

            {/* THE STATE */}
            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">The State</p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
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
            <p className="text-sm text-gray-800 mb-12">Source: Government of India – Budget Documents <a href="https://www.indiabudget.gov.in/" target="_blank">(https://www.indiabudget.gov.in)</a></p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              The FY 2026–27 allocation of INR 1,670 crore represents a significant nominal increase, approximately 30% over revised estimates for 2025–26. However, two new schemes account for the bulk of this rise: the Divyangjan Kaushal Yojana (INR 200 crore, focused on industry-aligned skill development) and the Divyang Sahara Yojana (INR 100 crore, for assistive devices). Together, these two new schemes make up around 79% of the year-on-year increase, while funding for existing institutional and administrative programs has grown only marginally. A lack of up-to-date estimates of disability prevalence makes it challenging to map how DEPwD budget allocations sit alongside coverage requirements.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Public funding is foundational in principle, moving through schemes, entitlements, and welfare infrastructure that remain key to how disability support is delivered at scale. It sets the baseline architecture within which all other funding streams operate. Where state systems are more coherent, they demonstrate that entitlements must exist through funding, implementation, and access in practice. In addition to administrative complexity and regional variation, inter-departmental coordination emerges as a bottleneck in resources reaching the ground. Beyond the MSJE, central ministries working on critical issues like housing and rural development often lack dedicated resources for disability inclusion. Coordination between central and state government departments can also dictate how resources flow towards mandates. For nonprofits, public funding is rarely separable from the translation and follow-through that must accompany it.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
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
