import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Astroid } from "lucide-react";

export default function Chapter3() {
  return (
    <Layout>
      <div className="py-20 bg-chHero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-7xl font-accent font-bold text-secondary leading-none mb-2">03</div>
            <h1 className="text-4xl md:text-5xl font-accent text-secondary leading-tight uppercase tracking-wide">
              Where Inclusion Breaks: Breakpoints and Intervention Patterns Across the Disability Ecosystem
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">

          {/* Intro */}
          <section>
            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              The chapter examines why certain forms of exclusion persist, and how collective effort can be better aligned to strengthen inclusion. It does so in two parts: first, through a breakpoint analysis that applies the iceberg model and five-domain framework to locate where exclusion becomes visible, where it repeats, and what deeper structures and beliefs sustain it; and second, through an intervention map that traces where nonprofit action currently clusters across the continuum of infrastructure, access, awareness, participation, and enablement. Read together, these show both the depth of issues and the unevenness of current response.
            </p>
          </section>

          {/* 3.1 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">3.1</span>
              <span>Breakpoint Analysis: Where Exclusion Operates and Persists</span>
            </h3>

            <blockquote className="pl-6 mb-10">
              <p className="text-xl leading-relaxed text-gray-700 italic mb-2">
                "The intentional move beyond narrow biomedical understandings of disability towards a psychosocial lens foreground how exclusion, disenfranchisement, and socioeconomic inequity shape everyday barriers. This reflects a growing recognition that disability is produced as much by context as condition, and that 'impairment' cannot be the crux of intervention."
              </p>
              <p className="text-base text-gray-500 italic">-Prateek Madhav, AssisTech Foundation</p>
            </blockquote>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              This shift in framing, from impairment to context, is what the iceberg model helps make legible. The breakpoint analysis maps specific challenges across four layers of depth and five domains that span the everyday lives of people with disabilities. Each cell names a documented challenge; its placement shows whether the challenge is best understood as a visible event, recurring pattern, structural condition, or underlying belief. Reading across a row shows how a single layer of exclusion cuts across all five domains. Reading down a column shows how exclusion in each domain moves from visible outcomes to deeper causes.
            </p>

            <p className="text-black text-xl leading-relaxed mb-1 font-bold">Figure 6:</p>
            <p className="text-base text-black font-bold mb-6">Breakpoint analysis</p>

            <div className="overflow-x-auto border border-border mb-12">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-4 py-3 font-bold border-r border-white/20">Education</th>
                    <th className="text-left px-4 py-3 font-bold border-r border-white/20">Employment</th>
                    <th className="text-left px-4 py-3 font-bold border-r border-white/20">Health</th>
                    <th className="text-left px-4 py-3 font-bold border-r border-white/20">Legal &amp; civic life</th>
                    <th className="text-left px-4 py-3 font-bold">Social participation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#F2C94C]">
                    <td colSpan={5} className="px-4 py-3 font-bold text-center text-gray-800 border-b border-border">
                      Events: What it captures — Visible symptoms
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-4 text-gray-800 border-r border-border border-b align-top">School dropouts and unequal learning outcomes</td>
                    <td className="px-4 py-4 text-gray-800 border-r border-border border-b align-top">Unemployment, underemployment, and workforce exclusion</td>
                    <td className="px-4 py-4 text-gray-800 border-r border-border border-b align-top">Lack of specialized and context-responsive healthcare</td>
                    <td className="px-4 py-4 text-gray-800 border-r border-border border-b align-top">Gaps in implementation of legal and policy mandates</td>
                    <td className="px-4 py-4 text-gray-800 border-b align-top">Social exclusion and limited public participation</td>
                  </tr>
                  <tr className="bg-[#F2C94C]">
                    <td colSpan={5} className="px-4 py-3 font-bold text-center text-gray-800 border-b border-border">
                      Patterns: What it captures — Recurring trends
                    </td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="px-4 py-4 text-gray-800 border-r border-border border-b align-top">Repeated exclusion and delayed institutional capacity</td>
                    <td className="px-4 py-4 text-gray-800 border-r border-border border-b align-top">Limited economic mobility and cycles of precarity</td>
                    <td className="px-4 py-4 text-gray-800 border-r border-border border-b align-top">Curative orientation and fragmented care pathways</td>
                    <td className="px-4 py-4 text-gray-800 border-r border-border border-b align-top">Persistent delivery gaps and narrow access to entitlements</td>
                    <td className="px-4 py-4 text-gray-800 border-b align-top">Compounding isolation and reduced public presence</td>
                  </tr>
                  <tr className="bg-[#F2C94C]">
                    <td colSpan={3} className="px-4 py-3 font-bold text-gray-800 border-r   border-black/30">
                      Structures: What it captures — Systemic causes across domains
                    </td>
                    <td colSpan={2} className="px-4 py-3 font-bold text-gray-800">
                      Mental models: What it captures — Underlying beliefs across domains
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td colSpan={5} className="px-4 py-4 text-gray-800  align-top">
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Exclusion by design; non-disabled norms; intersectional marginalization; selective evidence; invisibilized lived experience</li>
                        <li>Biomedical framing of disability; charity over accountability; privatization of care and public life</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3.1.1 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.1.1</span>
              <span>Events: Visible Symptoms Across Everyday Life</span>
            </h3>

            <div className="p-8 bg-chHero rounded-xl mb-10">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>THE MECHANISM:</strong> This layer captures what can be seen, counted, and reported, and yet lacks enduring solutions. Their persistence marks a wide gap between intention and action.
              </p>
            </div>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Breakpoints:</p>

            {/* School dropouts */}
            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              School dropouts and unequal learning outcomes
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Despite clear legal mandates, access to mainstream education for children with disabilities remains a persistent challenge. Inaccessible infrastructure, an absence of reasonable accommodations, and a lack of accountability towards inclusive classroom practice are well-documented across studies and government audits. A 2019 study estimated that more than 28% of children with disabilities aged between 6 and 13 years were not attending school, a number that rose to almost 44% when it came to children with multiple disabilities.<sup>21</sup> Gaps in physical infrastructure remain equally stark. Per recent data, only 35.6% of schools in India reported the availability of accessible toilets on their premises.<sup>22</sup>
            </p>

            <img src="/ch3/ch3Fig1.png" alt="2019 study children disability"  className="w-full object-contain mb-8"/>

            {/* Unemployment */}
            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Unemployment, underemployment, and workforce exclusion
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              The economic cost of excluding disabled people from the workforce is not incidental. Global data estimates that it can cost low- and middle-income countries up to 7% of GDP.<sup>23</sup> In India, recent estimates placed labor force participation among persons with disabilities aged 15 and above around a mere 23.8%.<sup>24</sup> Academician-activist Dr. Nandini Ghosh notes that a substantial number of people with disabilities in India are often <em className="text-secondary font-medium">"confined to home-based industries"</em>, excluded from meaningful workforce participation. People with disabilities make up less than 1% of the country's corporate workforce, and those who do make it in are often confined to entry-level or blue-collar positions irrespective of their qualifications.<sup>25</sup>
            </p>

            {/* Healthcare */}
            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Lack of specialized and context-responsive healthcare
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Even where biomedical and rehabilitative care exists, it remains structurally out of reach for a vast majority. Only 5.7% of persons with disabilities in India accessed any form of rehabilitation services, with coverage dropping to 3% in rural areas.<sup>26</sup> In urban centres, only half of disabled people report having sought any medical treatment. The infrastructure gap in healthcare emerges as geographic, economic, and deeply unequal in its distribution. As Dr. N.S. Senthil Kumar from The Association of People with Disability observed, <em className="text-secondary font-medium">"I don't think we could get a speech therapist to every rural area even in the next 5 to 10 years."</em> This reveals that even when a health intervention proves viable at the site of implementation, the ability to meaningfully scale coverage remains a barrier, especially in under-resourced contexts.
            </p>

            {/* Legal */}
            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Gaps in implementation of legal and policy mandates 
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              The gap between the RPwD Act's mandate and its reach into everyday governance is measurable and wide. In 2018, only 42% of states had notified their State Rules, despite a six-month statutory deadline spelt out under the Act.<sup>27</sup> While state engagement has improved since, policy coverage and implementation at the last mile continues to lag behind. Recent estimates suggest that less than 40% of India's estimated disabled population has been issued a UDID, envisioned as a gateway document for most central government schemes and entitlements.<sup>28</sup>
            </p>

            <blockquote className="pl-6 mb-10">
              <p className="text-xl leading-relaxed text-gray-700 italic mb-2">
                "We need to be mindful of the language we use because it shapes policy, and practice. For instance, when we use inclusion, exclusion is implied. And when we say accommodation, employers and schools may feel like the process is effort-intensive. We are moving away from these words to terms like an enabling environment. It helps reimagined practice and systems."
              </p>
              <p className="text-base text-gray-500 italic">-Shamin Mehrotra, Ummeed Child Development Centre</p>
            </blockquote>

            {/* Social exclusion */}
            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Social exclusion and limited public participation
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              Inaccessible transport systems and public spaces routinely prevent disabled people in India from participating in social environments such as markets, restaurants, or even entire neighbourhoods. A survey across 20 Indian cities found that the inability to participate meaningfully in social and public life is a significant source of psychological stress for them, often reinforcing dependence on families and other caregivers.<sup>29</sup> <em className="text-secondary font-medium">"People with disabilities were essentially facing a kind of apartheid, hidden away in their homes, unknown to society,"</em> reflected Bhavana Mukherjee from ADAPT. Nidhi Goyal from Rising Flame added, <em className="text-secondary font-medium">"If I was in a rural area with sparse roads, where would I use my white cane to help me navigate?"</em>
            </p>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>THE OPPORTUNITY:</strong> The field has demonstrated its ability to build new service delivery models and strong last-mile linkages. What remains underdeveloped is how these responses can be consolidated into approaches that sustain across time, contexts, and the changing needs of people with disabilities across their lives.
              </p>
            </div>

            {/* 3.1.2 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.1.2</span>
              <span>Patterns: Recurring Trajectories of Exclusion</span>
            </h3>

            <div className="p-8 bg-chHero rounded-xl mb-10">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>THE MECHANISM:</strong> This layer captures recurring trends visible across lifecycles, institutions, and geographies. These are repeated trajectories that reappear despite sustained effort, revealing systems that tend toward partial or uneven inclusion rather than durable change.
              </p>
            </div>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Breakpoints:</p>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Repeated exclusion and lags in institutional capacity
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Barriers faced by students with disabilities are concentrated at critical transition points. Pan-India school enrolment for children with disabilities peaked at almost 44% at the primary level, declining to less than one-fifth (around 7%) in secondary education, and further to a mere 5% in higher education.<sup>30,31</sup> Reflecting on exclusion in the education-to-employment pipeline, Shamin Mehrotra from Ummeed Child Development Center shared, <em className="text-secondary font-medium">"These are the 'missing years', where young disabled adults entering the world can't find meaningful employment."</em> These barriers are reinforced by inadequate educator training and a lack of inclusive curricula.<sup>32</sup> Richa Bhutani from Tata Institute of Social Sciences, highlighted that special educators are often trained in only one type of disability, <em className="text-secondary font-medium">"but classroom realities are different."</em>
            </p>

            <img src="/ch3/ch3Fig2.png" alt="Pan-India school enrolment for children with disabilities" className="w-full object-contain mb-8" />

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Limited economic mobility and cycles of precarity
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              The economic consequences of disability often compound upon entry into the workforce. A pan-India study indicated that workers with disabilities may earn between 1% to 24% lesser annually.<sup>33</sup> It also highlighted that households with one disabled person spent around 12% more annually, while those with multiple disabled members spent up to 16% more. Lower earnings stretched across higher cost burdens produce multidimensional poverty, a pattern replicated by the labor market. Socioeconomic dimensions like gender sharpen this further: only 23% of women with disabilities were estimated to be in the workforce, as compared to 47% of men.<sup>34</sup> Shilpi Kapoor from BarrierBreak added that traditional skilling initiatives can sometimes cast disabled people as <em className="text-secondary font-medium">"perpetual learners"</em>, deprioritizing workforce mobility.
            </p>

            <div className="p-8 bg-box rounded-xl mb-10">
              <p className="text-2xl leading-relaxed text-black font-medium">
                Only 23% of women with disabilities were estimated to be in the workforce, as compared to 47% of men.
              </p>
            </div>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Curative orientation and fragmented care pathways
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Global research notes that health solutions for disabled people focus on episodic treatment and acute conditions, overlooking the continuing and coordinated care often required by people with long-term disabilities.<sup>35</sup> In India, despite being the first point of contact for most people with disabilities, healthcare facilities and services are seldom equipped to provide disability-inclusive primary care.<sup>36</sup> The absence of coordinated institutional accountability translates directly into coverage failures on the ground. A recent study found that more than 80% of people with disabilities had no health insurance, further exacerbating inaccessibility.<sup>37</sup> Mental health is another key concern — almost 60% people with common mental disorders in India reported living with a disability, but the treatment gap remained high at 80%.<sup>38</sup>
            </p>

            <img src="/ch3/ch3Fig3.png" alt="Healthcare statistics for people with disabilities" className="w-full object-contain mb-8" />

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Persistent delivery gaps and narrow entitlement access
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Acquiring a UDID card entails producing documentation at a district hospital, often across multiple visits. Bashir Ahmad Lone from Voluntary Medicare Society shared, <em className="text-secondary font-medium">"In parts of Jammu, Kashmir, and Ladakh with harsh winters and low connectivity to the rest of the valley, people with disabilities find it very difficult to access government services. A disabled person with limited mobility in a rural area, for instance, will find it much harder to visit a hospital for a UDID certification,"</em> added Karthikeyan Ganesan from Sristi Foundation. Bottlenecks in access to entitlements persist across stages — State Commissioners and Special Courts were found to be absent or under-utilized in most Indian states even several years after the RPwD Act, and despite successive Supreme Court orders.<sup>39</sup>
            </p>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Compounding isolation and reduced public presence
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              Geographical differences can exacerbate disparities for disabled people, with the most affected people often concentrated in areas with low public infrastructure and services. A study in rural Andhra Pradesh found that such isolation can function like a loop: physical confinement produces stigma linked to dependency and care needs, leading to reduced social investment that reinforces isolation and confinement from family and other community actors.<sup>40</sup> Public participation-focused accessibility initiatives may also tend to prioritize certain disabilities over others. Research on inclusive electoral participation in Rajasthan found that support initiatives were concentrated around visual and locomotor disabilities, while an absence of interpreters, simplified materials, and inclusive communication materials.<sup>41</sup>
            </p>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>THE OPPORTUNITY:</strong> The evidence in this layer points to systems that respond at the point of visible crisis but lack the infrastructure to track what happens before or after. The opportunity lies in building cross-sectoral feedback loops that can follow people with disabilities across life stages, and resourcing the coordination required to make that continuity possible. The patterns documented here speak, in part, to systems designed to respond rather than to learn.
              </p>
            </div>

            {/* 3.1.3 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.1.3</span>
              <span>Structures: Systemic Conditions That Reproduce Vulnerability</span>
            </h3>

            <div className="p-8 bg-chHero rounded-xl mb-10">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>THE MECHANISM:</strong> This layer delves below the observable to identify the conditions that produce it. The breakpoints here are cross-sectoral — naming the institutional logics that shape how systems are designed, what they choose to measure, and whose lives they are organized around.
              </p>
            </div>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Breakpoints:</p>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Exclusion by design and the non-disabled norm
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Across built, digital, and even emergency and climate infrastructure, a non-disabled person is typically the assumed user at the point of design. <em className="text-secondary font-medium">"To date, most states haven't updated their building by-laws in line with the RPwD Act,"</em> added Nipun Malhotra from The Quantum Hub. A digital audit found that three out of four government websites were inaccessible for disabled users.<sup>42</sup> This ableist design logic extends beyond inaccessible physical and digital spaces, into how climate emergency and disaster response systems are configured and whom they exclude. A study in flood-prone Assam revealed that people with disabilities experienced two to four times higher disaster mortality due to inaccessible evacuation infrastructure, early warning systems, and emergency registers.<sup>43</sup> Similarly, disabled people faced disproportionately high morbidity and mortality in climate disasters, caused by heat illness, water-related disease, and disruptions in access to medication and treatment.<sup>44</sup>
            </p>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Intersectional identities and the compounding of marginalization
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Differential treatment often begins at home for disabled women in India. <em className="text-secondary font-medium">"Sometimes parents don't want to disclose a girl child's disability, fearing that it will affect her chances of getting married in the future,"</em> observed Beverly Louis from Mann. Research showed that disabled women and girls were up to ten times more likely to face violence — most often at the hands of caregivers, making it more difficult to report.<sup>45</sup> Caste dimensions are often even more underexplored in the mainstream. Dr. O.P. Kulhari from CULP - Centre for Unfolding Learning Potentials noted, <em className="text-secondary font-medium">"The 2011 Census records 2.2% children with disabilities, but a household survey in a tribal area reported 8%. Some disabled children can't even reach hospitals to ensure they're counted."</em> Research indicates that Dalit girls with disabilities are likely to be married off to older men, producing higher rates of widowhood and deepening precarity.<sup>46</sup> When marginalized identities converge, exclusion compounds in traceable rather than merely additive ways.
            </p>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Selective evidence and invisibilized experiences
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              A system's knowledge about disability is shaped by the questions it chooses to ask. The UDID database, for instance, records age, gender, disability type, and percentage — but not caste, income, or education. While the 2011 Census estimates disability prevalence in India at 2.2%, this figure predates the RPwD Act's expanded 21-category definition and falls far below WHO estimates of 10–16%.<sup>47</sup> Certification architecture also does not account for invisible and fluctuating manifestations, excluding certain forms of chronic illness and psychosocial disability entirely.<sup>48</sup> Even as new disabilities are recognized by systems, protections often lag or remain inadequate in scope. Acid attack survivors, who are legally classified under locomotor disability, lack support for their psychosocial and reconstructive needs.<sup>49</sup> A compensation framework based on employment fitness was used to track multigenerational health conditions among Bhopal gas tragedy survivors, leading to women and children automatically being categorized as minor injury cases.<sup>50</sup>
            </p>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>THE OPPORTUNITY:</strong> Addressing structural breakpoints calls for embedding disability-led perspectives in design processes, data architecture, and the questions that determine what counts as evidence. Across the field, this has taken the form of co-designed processes that centre the most excluded users, disaggregated data, and DPO participation in policymaking and evaluation. The opportunity lies in making representation and proximity non-negotiable — through design frameworks and resourcing models shaped by those currently obscured by the system.
              </p>
            </div>

            {/* 3.1.4 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.1.4</span>
              <span>Mental Models: Beliefs That Normalize Exclusion</span>
            </h3>

            <div className="p-8 bg-chHero rounded-xl mb-10">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>THE MECHANISM:</strong> This layer identifies the assumptions that rationalize the events, patterns, and structural logics in the preceding layers. Because mental models present inequity as natural — as common sense — they are hardest to make visible and slowest to shift.
              </p>
            </div>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Breakpoints:</p>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              The biomedicalization of disability
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Scholar Anita Ghai argued that disability is a construct that finds its meaning in social and cultural contexts — the shift from asking "how did you become disabled?" to "do you have the agency to live your life the way you want to?" changes the site of intervention from the body to the world.<sup>51</sup> Practitioners describe how this move away from biomedical models is taking shape within the field. As organizations expand from single-site programs into multi-service resource hubs, the limitations of curative approaches become harder to ignore, and addressing barriers to access emerges as integral to providing holistic support. A nonprofit Practitioner shared, <em className="text-secondary font-medium">"We need to build specialization without fragmentation, equipping professionals to address broader developmental difficulties."</em> However, this evolution towards more integrated, holistic practice has not percolated into how mainstream institutions understand inclusion. <em className="text-secondary font-medium">"Funders often associate special education with health and medical interventions, rather than education,"</em> observed Dr. Dipti Gandhi of Muskan Foundation.
            </p>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              Charity framing over institutional accountability
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Charity-based orientations have traditionally underpinned how government, industry, and philanthropy have tended to frame disability inclusion. These orientations position access, opportunity, and visibility in the mainstream as acts of extending goodwill, as opposed to conditions of belonging that disabled people hold claim to.<sup>52</sup> Research with disability organizations in Hyderabad revealed that the charity frame came with an invisible demand: if people with disabilities did not come across as 'helpless', mainstream charitable support was less likely to notice their needs.<sup>53</sup> The engagement thus produced is calibrated to an event or moment of mainstream visibility, veering away from the need for infrastructure that can sustain dignified, independent lives for disabled people. <em className="text-secondary font-medium">"Disability continues to be portrayed as 'bechara' — pitiable. That prevents the sector from moving beyond charity,"</em> shared Shilpi Kapoor from BarrierBreak.
            </p>

            <p className="text-xl font-bold text-gray-900 mb-4 flex gap-2 items-start">
              <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
              The privatization of public life
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              People with disabilities in India are rarely imagined as participants in public life — as workers, civic agents, or even merely as people whose presence in public spaces is the norm rather than an 'accommodation'. Drawing on Amartya Sen's capability approach, research from rural Indian communities found that exclusion from public spaces shaped how people with disabilities imagined their own lack of capacity to engage in socioeconomic and civic life.<sup>54</sup> Stigma places a normative ceiling on disabled people's aspirations. Paul Ramanathan of SAMA Foundation noted, <em className="text-secondary font-medium">"People with disabilities in rural India are often told that since they're not engaging in agriculture, they don't need inheritance and ownership over family land."</em> Widening this imagination calls for inclusion agendas shaped by disabled people themselves, rather than counting them in as recipients. <em className="text-secondary font-medium">"People with disabilities and their DPOs must be funded. Nothing about the disabled without the disabled,"</em> asserted Bhavana Mukherjee from ADAPT.
            </p>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>THE OPPORTUNITY:</strong> The most enduring shifts in practice have emerged where organizations have built around disabled people's own definitions of dignity, independence, and a good life through DPO-led initiatives, participatory evidence-building, and funding shaped by disabled people's own priorities. These models remain at the margins of how the landscape is resourced. The opportunity lies in making accountability to lived experience a condition of practice, not an aspiration.
              </p>
            </div>
          </section>

          {/* 3.2 */}
          <section>
            <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
              <span className="border-b-8 border-current pb-0 shrink-0">3.2</span>
              <span>Mapping Where Nonprofit Action Clusters</span>
            </h3>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Certain kinds of action in disability inclusion in India are common across the data — some highly visible, others embedded in the slower work of shifting systems and relationships; some easier to fund and measure, others sustained through institutional commitment rather than formal support. This section maps interventions as they are practiced, drawing on survey patterns and qualitative accounts from the nonprofit ecosystem. It does not aim to be exhaustive; rather, it organizes interventions into five practice areas reflecting how nonprofits themselves describe their work, making visible a broader continuum. Read alongside the breakpoints in the preceding section, this map also shows how interventions engage the layers of exclusion that produce challenges.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Notably, these suggest the emergence of a continuum in practice. Interventions range from building material and technical foundations, to shifting the people and systems that govern those conditions, to centering persons with disabilities in their own lives and in the field.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              As envisioned below, the continuum of practice areas and interventions denotes how most organizations work across types, but efforts are uneven, and geared towards what is legible and attracts funding. From infrastructure towards participation and enablement, the further an area sits along the continuum, the fewer the organizations, and the wider the gap between what is needed and what is supported. The funding cliff follows this pattern with uncomfortable precision: highest at infrastructure and access, tapering at awareness, dropping at participation, and thinnest at enablement.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              This mapping does not prescribe what organizations should do. It traces what is currently done, and in doing so, shows why certain challenges persist despite sustained effort.
            </p>

            <p className="text-black text-xl leading-relaxed mb-1 font-bold underline">Figure 7:</p>
            <p className="text-base text-black font-bold mb-12">An overview of Practice Areas and Interventions by Nonprofits working in Disability Inclusion</p>
            <img src="/ch3/ch3Fig7.png" alt="overview of practice Areas and Interventions by Nonprofits" className="w-full object-contain"/>
            <img src="/ch3/ch3Fig71.png" alt="overview of practice Areas and Interventions by Nonprofits" className="w-full object-contain mb-8"/>
            {/* 3.2.1 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.2.1</span>
              <span>Infrastructure: Building Material and Knowledge Foundations</span>
            </h3>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Infrastructure sits at the most recognizable end of the continuum. If a solution can be built, photographed, or measured, it likely lives here, in the devices, systems, research outputs, and emergency provisions that form the material foundations of disability inclusion. Funder confidence is often highest within this practice area, where the sector's footprint looks most visible, and where a case for investment can be made clearly. However, while infrastructure solutions are commonplace and concentrated, they remain less coordinated than visibility suggests. This illustrates how legibility is not the same as sufficiency.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              The key actors in this space include R&amp;D institutions, assistive technology developers, specialist nonprofits, and corporates investing in accessible design. These are diverse in scale and character but share a structural gap: there is no coordinating body connecting their work. Standards are frequently set without community input, and no systematic pipeline exists to move solutions from urban geographies where development solutions are typically concentrated, to rural and remote geographies where need is often greatest.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Estimates suggest that globally, only a fraction of those who require assistive products are able to access them, with gaps widening in resource-constrained settings.<sup>55</sup> In India, assistive technology organizations are widely distributed across size and geography, from national institutions to hyperlocal groups operating under budgets as small as INR 50 lakhs. Research in this space is largely applied, focused on deployable and scalable solutions, and concentrated within large, mature organizations. In our survey, 100% of organizations prioritizing this work had operated for more than ten years, most with budgets between INR 10 and INR 50 crore. Yet only 16% identified assistive technology as a primary focus, and just about 8% identified research and evidence-building, revealing how thin this end of the ecosystem remains.
            </p>

            <blockquote className="pl-6 mb-8">
              <p className="text-xl leading-relaxed text-gray-700 italic mb-2">
                "Everybody loves tech, but the ground reality is very different. There is no study on what works in government schools or rural areas. Assistive technology is market-led. The biggest problem is maintenance: once devices are distributed, no one supports them. An INR 2 lakhs device is not the answer. We need solutions that work at the bottom of the pyramid."
              </p>
              <p className="text-base text-gray-500 italic">-Nipun Malhotra, The Quantum Hub</p>
            </blockquote>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Even where technology and need both exist, the bridge between them — affordable, maintainable, locally supported — often does not.
            </p>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Interventions:</p>

            <ul className="space-y-4 mb-10 text-xl text-gray-700 leading-relaxed">
              {[
                "Undertaking research and development to generate disability-disaggregated evidence that informs policy, standards, and practice",
                "Developing and integrating assistive technologies to extend functional independence and participation in education, livelihoods, and civic life, prioritizing affordability, maintenance, and community-grounded design",
                "Building accessible physical and digital infrastructure, including universal design in built environments, government systems, and financial services, ensuring that access pathways do not become barriers",
                "Establishing crisis and emergency response systems, including transport, transitional care, and disaster protocols, to ensure continuity of support when systems fail",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800">
                <strong>MAPPING AND CONSTRAINT:</strong> Infrastructure work primarily addresses the visible, 'event-level' layer of the iceberg: the observable manifestations of exclusion that are easiest to document and report. R&amp;D and technology, at their best, extend into patterns and structures, shaping what the field understands as possible and setting standards for other actors. But the ecosystem remains stretched and uncoordinated. The technology-to-community pipeline fractures where urban development meets rural need, and where market logic meets affordability at the last mile.
              </p>
            </div>

            {/* 3.2.2 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.2.2</span>
              <span>Access: Closing the Gap Between Rights and Reality</span>
            </h3>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              In the nonprofit ecosystem, access sits one layer deeper than infrastructure. Where infrastructure asks whether something like a device, building, or platform exists, access asks whether a person with a disability can reach it and claim what it offers. In practice, the distance between these questions is enormous. Organizations in this space spend much of their effort navigating bureaucratic, attitudinal, physical, and digital frictions that shape the disconnect between inclusion on paper and rights in practice. Studies on public service delivery in India consistently show that accessing a single entitlement often requires multiple visits, repeated document verification, and navigation across administrative layers, effectively transferring the cost of coordination onto individuals.<sup>56</sup>
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Only around 7% of organizations in the survey data identified legal aid, documentation, and entitlements as a primary area of work, a figure that is dangerously low given how foundational documentation is to the rest of the ecosystem. Of these organizations, only one worked in rural or remote geographies, revealing a concentration of access work that mirrors the broader funding landscape. Procedurally complex, hard-to-resource work in this practice area remains clustered in urban centers, largely absent where need is most acute and solutions most sparse. Livelihoods, skilling, and workforce inclusion are a primary focus for 16% of organizations, but the mismatch between skilling someone and fostering long-term workforce inclusion remains wide and largely unaddressed by funding.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              The texture of access breakdown is specific. A practitioner shared, <em className="text-secondary font-medium">"Administrators routinely turn them away by simply stating 'the server is down,' closing off access to basic, life-sustaining entitlements for persons with disabilities who already navigate significant physical and geographical barriers to reach government offices."</em> Nonprofits and frontline actors step in as intermediaries to maintain linkages within these systems, translating requirements, accompanying individuals through processes, and absorbing the time and relational effort that the system does not account for.
            </p>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Interventions:</p>

            <ul className="space-y-4 mb-10 text-xl text-gray-700 leading-relaxed">
              {[
                "Facilitating access to legal identity and documentation including UDID cards, Aadhaar, and disability certificates, to establish the foundational gateway through which entitlements, employment, and services can be claimed",
                "Strengthening access to social protection by navigating pension schemes, insurance, and entitlements alongside individuals and families, closing the gap between schemes that exist and support that reaches",
                "Creating inclusive hiring practices and organizational SOPs to shift employment from compliance-driven quotas toward meaningful economic participation",
                "Improving primary care access by supporting frontline workers and caregivers, addressing the conditions that shape the quality of everyday care",
                "Expanding access to digital infrastructure, including banking, government portals, and assistive-compatible systems, so that the shift to digital delivery does not deepen exclusion",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                <strong>MAPPING AND CONSTRAINT:</strong> Access work spans the 'events' and 'patterns' layers, addressing inaccessible infrastructure, discriminatory hiring norms, and gaps in biomedical care. The most sustained interventions reach deeper into structural causes: enforcing RPWD provisions, generating data on access gaps, and negotiating change with employers and health systems. But constraints also remain persistent.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                Practitioners note that corporate employers often meet disability quotas through hiring individuals with visible and more easily accommodated disabilities, while those with intellectual, psychosocial, or complex support needs remain excluded. In practice, access tends to extend to the most administratively visible disabilities in the most legible contexts, dropping off sharply along the lines of who is already most excluded.
              </p>
            </div>

            {/* 3.2.3 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.2.3</span>
              <span>Awareness: Shifting Knowledge, Attitudes and Practice</span>
            </h3>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Awareness is the practice area most frequently reduced to its surface form — a sensitization workshop, a poster campaign, a one-day training. Yet this is where the disconnect between what the work requires and what is funded becomes most consequential. Done well, awareness is among the most structurally consequential forms of work in the ecosystem, shaping how institutions behave, how policies are implemented, and how individuals are treated in everyday interactions. When awareness work is done at the surface, it produces what the sector describes as 'acquired language'. Institutions are able to co-opt the language of inclusion much faster than they adapt to the necessary practices required to sustain in.
            </p>

            <blockquote className="pl-6 mb-10">
              <p className="text-xl leading-relaxed text-gray-700 italic mb-2">
                "The law has brought about a consciousness around rights beyond healthcare, like education, employment, and social security dimensions. Policies are politically correct… they are written to be inclusive. People in administration have also acquired respectful language. But acquiring the language does not mean the attitude is respectful."
              </p>
              <p className="text-base text-gray-500 italic">-Dr. Nandini Ghosh, Institute of Development Studies (IDS), Kolkata</p>
            </blockquote>

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              Community awareness and sensitization is a primary focus for 30% of organizations, distributed across sizes from hyperlocal groups to large national nonprofits. Research and evidence building, among the most systematic forms of awareness at the policy level, is a primary focus for 8%, concentrated among the largest and most mature institutions. Narrative change and advocacy, at 7%, is more distributed across organization size and age, often led by younger organizations despite limited financial runway. The split further reveals that community-level sensitization is relatively more common, it remains thinly resourced, and more system level narrative and evidence driven work is concentrated among a small number of organizations carrying much of the sector's advocacy and policy facing capacity.
            </p>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Interventions:</p>

            <ul className="space-y-4 mb-10 text-xl text-gray-700 leading-relaxed">
              {[
                "Building sensitization, narrative, and outreach efforts with communities, families, and institutions to shift deficit-based understandings of disability toward rights-based and dignity-centered frames",
                "Supporting caregiver mental health, knowledge, and capacity through parent networks, sibling groups, and frontline worker training",
                "Conducting community-level screening and early identification to close diagnostic gaps and enable timely access to support during critical developmental windows",
                "Building media and journalism capacity, through fellowships, guidelines, and reporting standards, to shift public narratives from charity-based to rights-based representations",
                "Generating data and evidence for policy influence through community data, government partnerships, and synthesis, to shape how disability is understood and acted upon at the systems level",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                <strong>MAPPING AND CONSTRAINT:</strong> Awareness work explicitly targets structures and mental models — the two deepest layers of the iceberg, and the ones that determine whether everything built above them sustains or collapses. This is why its underfunding is so consequential, and why it sits where it does in the continuum, between access and participation.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                Depth in this work is concentrated within a small number of organizations and is not a distributed capability. Short-term, restricted funding cannot sustain the slow, relational effort of shifting attitudes, leaving narrative change organizations reliant on institutional commitment rather than sustained support. Even in institutional systems, this gap is growing. Reports have found that many public-facing platforms in India claim compliance with accessibility standards, while remaining difficult or unusable in practice for persons with disabilities.<sup>57</sup>
              </p>
            </div>

            {/* 3.2.4 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.2.4</span>
              <span>Participation: Deepening Agency and Public Presence</span>
            </h3>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Participation is about the presence, voice, and agency of persons with disabilities in the spaces and decisions that shape their lives. This is where the principle of "nothing about us without us" is most directly operationalized, and where earlier gains in infrastructure, access, and awareness are tested for their depth.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              The sector's work in participation remains concentrated in traditional economic pathways. Inclusive and special education is a primary focus for 63% of organizations, and livelihoods, skilling, and workforce inclusion for 48%. Mental health and psychosocial support account for about 10%, while sports, recreation, and life skills remain marginal at 6%. The funding drop-off is consistent: interventions that move beyond education and employment, towards quality of life, self-determination, and civic voice, remain underfunded.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              In education, visual, intellectual and developmental, and physical disabilities are most represented, while neurological conditions and high-support needs remain largely absent. In livelihoods, hearing and speech disabilities are most commonly targeted, those most legible and least disruptive to standard employment settings. Psychosocial disabilities are largely absent in livelihoods programing.
            </p>

            <img src="/ch3/ch3Fig4.png" alt="Organizations focus areas in participation" className="w-full object-contain mb-8" />

            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              <em className="text-secondary font-medium">"Including children in mainstream schools is very difficult. Often it is only physical inclusion. The child sits there with a shadow teacher, but does not really progress,"</em> shared Dr. Dipti Gandhi from Muskan Foundation. Physical presence and genuine participation are not the same thing, a distinction that practitioners describe as the shift from integration to inclusion, from sharing space to participating meaningfully.
            </p>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Interventions:</p>

            <ul className="space-y-4 mb-10 text-xl text-gray-700 leading-relaxed">
              {[
                "Providing education and early childhood support to build foundational capabilities across learning, communication, and self-determination, moving beyond enrolment toward meaningful participation",
                "Building skilling and entrepreneurship pathways that extend economic agency beyond entry-level inclusion towards livelihood security and financial independence",
                "Supporting transitions through life stages, from early childhood through adulthood and aging, to ensure continuity of care and prevent drop-offs at critical junctures",
                "Creating opportunities for sports, recreation, mental health, arts, and culture, recognizing dignity, belonging, and wellbeing as integral to participation",
                "Enabling participation in civic and political life, including voter access, representation, and leadership, so that persons with disabilities shape the systems that govern them",
                "Strengthening disability-led leadership and networks so that persons with disabilities act as architects of the field, not only its beneficiaries",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                <strong>MAPPING AND CONSTRAINT:</strong> Participation work spans the full depth of the iceberg more than other practice areas. Education and skilling largely address 'events' and 'patterns' — the visible, measurable, reportable end of the continuum. Leadership, convening, and civic participation reach directly into 'structures' and 'mental models', challenging the foundational belief that persons with disabilities are recipients of services rather than agents of change. But funding does not tend to support this work at the depths.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                Nidhi Goyal from Rising Flame shared, <em className="font-medium">"There is a hierarchy of needs: education, employment, and basic rehabilitation. Anything beyond that, like leadership, autonomy, choice, is not seen as fundable."</em> Thus, the participation landscape is wide at the surface, with many organizations, programs, and reported numbers, but narrow at the depth, where sustained inclusion becomes possible. The tendency to prioritize entry into existing systems over transforming the conditions within them leads to what can be understood as presence without participation.
              </p>
            </div>

            {/* 3.2.5 */}
            <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
              <span className="pb-0 shrink-0">3.2.5</span>
              <span>Enablement: Building Sustainable Ecosystem Conditions</span>
            </h3>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Enablement marks where the sector confronts its structural limits. It operates not at the level of individuals or services, but across the ecosystem, shaping the actors, relationships, systems, and norms that determine whether inclusion can be sustained. This aligns with what systems thinking identifies as deeper leverage points — shifts in norms, relationships, and system design that determine how all other interventions function, but are the least visible and most difficult to fund.<sup>58</sup>
            </p>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              There are few organizations doing this work, and they are structurally distinct. Systems-level research and evidence-building is concentrated within the sector's oldest and most well-resourced institutions. In addition to scale, this is because this work requires long time horizons, institutional memory, and the ability to absorb unfunded costs. Unlike applied research that produces solutions, this work shapes how those solutions are interpreted, prioritized, and implemented at scale. Narrative change and advocacy, at 7%, is more distributed across organization types but remains chronically underfunded. Intersectional engagement reveals deeper gaps: 76% of organizations address gender, 37% address caste, and only 10% focus on LGBTQIA+ inclusion pointing to how far the sector remains from addressing compounded exclusion in practice. Despite consensus in the sector to push towards organizational resilience through large-scale funding, reports suggest that small donations now account for roughly one-third of nonprofit funding in India, which organizations find useful in part because institutional funding remains restrictive in mandate.<sup>59,60</sup>
            </p>

            <blockquote className="pl-6 mb-10">
              <p className="text-xl leading-relaxed text-gray-700 italic mb-2">
                "Many funders are comfortable supporting direct services — a school or a center. But when it comes to systems change, there are very few investors. Early-stage funding for new innovation is limited, and systemic impact is often expected within one or two years, even though this work requires a much longer horizon and patient capital"
              </p>
              <p className="text-base text-gray-500 italic">-Sonali Saini, Sol's ARC</p>
            </blockquote>

            <p className="text-xl font-bold text-secondary uppercase tracking-wide mb-6">Interventions:</p>

            <ul className="space-y-4 mb-10 text-xl text-gray-700 leading-relaxed">
              {[
                "Addressing intersectional exclusion of caste, gender, sexuality, geography, and poverty, to align disability inclusion efforts with the full complexity of lived experience",
                "Advancing non-biomedical understandings of disability across policy, funding, and public discourse, shifting the frame from conditions to be fixed toward rights to be realized",
                "Building disability-led networks, alliances, and grassroots infrastructure to enable persons with disabilities to shape field direction, policy priorities, and resource flows",
                "Developing field infrastructure including coalitions, peer networks, and shared knowledge platforms, to strengthen collective action and retain institutional learning",
                "Investing in transdisciplinary knowledge that connects disability with climate, gender, caste, mental health, and urban systems, embedding inclusion in the development ecosystem",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Astroid className="w-4 h-4 text-astroid shrink-0 mt-2" fill="#9196CD" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 bg-chHero rounded-xl mb-12">
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                <strong>MAPPING AND CONSTRAINT:</strong> The operations of this practice area are exclusively at the 'structural' and 'mental' model layers of the iceberg. It produces few visible outputs, resists attribution, and focuses on reshaping the conditions within which all other interventions occur. These characteristics also explain its underfunding, as reiterated by practitioners during interviews. Despite the sector consistently identifying this work as essential, it remains under-supported by the funding structures it depends on. As a result, organizations undertaking enablement work absorb the cost of a system not yet designed to sustain them, even as that system depends on their continued existence.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                Disability exclusion is rarely produced at a single point of failure. It accumulates across institutions, across life stages, and across assumptions that remain embedded within systems. This shifts the question from whether services exist to whether the conditions for inclusion can be sustained over time. The challenge, therefore, is not only intervention design, but the capital, coordination, and accountability required to make inclusion durable. The next chapter examines how current funding flows and capacity structures shape what the ecosystem is able to sustain.
              </p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-2" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 02
            </Link>
            <Link href="/chapter-4" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 04 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
