import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Astroid } from "lucide-react";

export default function Chapter1() {
  return (
    <Layout>
      {/* Chapter Header Band */}
      <div className="py-20 bg-chHero" >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-7xl  font-heading font-bold text-secondary leading-none mb-2">01</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight uppercase tracking-wide">
              Mapping the Terrain:<br />
              How Disability Inclusion<br />
              is Structured in India
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">
          <section>
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-10">
              Every landscape is shaped twice: once by what
              exists on the ground, and once by what a society
              has learned to notice. Disability inclusion in India
              has been shaped across many sites at once:
              census data, medical certification, welfare
              schemes, court orders, school admissions,
              workplace practices, family care, and the
              everyday work of civil society. These are part
              of the machinery through which inclusion is
              enabled, delayed, negotiated, or denied.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-10">This is the first clue that disability inclusion is
              a systems question. It is located only in law,
              service delivery, or individual experience, and
              in the relationship between them: how people
              move through institutions, how support is made
              available, and how responsibility is distributed
              when systems do not align.</p>

            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-10">
              Scale is one of the first places where this relationship becomes visible. Globally,
              the World Health Organization estimates that 1.3 billion people, or around 16% of
              the world’s population, experience significant disability. In India, official estimates
              remain much lower: Census 2011 recorded 2.68 crore persons with disabilities, or
              2.21% of the population, and the NSS 76th Round estimated disability prevalence at
              2.2%. These differences shape who is counted, who can claim support, and whose
              needs are planned for. Measurement, in this sense, helps define the boundaries of
              public responsibility
            </p>

            <div className="p-8 bg-box rounded-xl mb-12">
              <p className="text-2xl font-heading font-regular text-black ">
                <span className="font-bold text-3xl">In India,</span><br /> official estimates remain much
                lower: Census 2011 recorded 2.68
                crore persons with disabilities, or
                2.21% of the population, and the NSS
                76th Round estimated disability
                prevalence at 2.2%.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-xl font-medium mb-10">
              The formal architecture of disability inclusion has also changed over the past
              decade. The Rights of Persons with Disabilities Act, 2016 expanded recognized
              disability categories, introduced reasonable accommodation, and placed clearer
              obligations on government establishments and institutions. Recent judicial
              developments have widened this frame further, affirming disability inclusion as a
              question of access, dignity, and public responsibility rather than charity, discretion,
              or individual adjustment.
            </p>
            <p className="text-gray-700 leading-relaxed text-xl font-medium mb-10">
              These shifts matter because they alter the terms on which persons with
              disabilities can make claims, and the terms on which institutions can be held
              to account. Yet access is still shaped through many ordinary points of contact:
              securing certification, navigating entitlements, entering school, requesting
              accommodation, accessing transport, using digital systems, finding responsive
              officials, and sustaining support through families, caregivers, or nonprofit workers.
              Across education, employment, healthcare, social protection, infrastructure, and
              civic participation, inclusion turns on whether systems have imagined persons with
              disabilities as ordinary users, learners, workers, and citizens.
            </p>

            <p className="text-gray-900 leading-relaxed text-xl font-bold mb-6">This is where the everyday design of institutions becomes visible.</p>
            <img src="/ch1/text.png" alt="text" className="w-auto object-contain mb-10" />
            <p className="text-gray-700 leading-relaxed text-xl font-regular mb-10">When these assumptions do not match people’s lives, the work of access shifts
              onto persons with disabilities and those closest to them.</p>
            <p className="leading-relaxed text-secondary mb-10 text-xl">Families compensate for inaccessible services. Women and girls carry
              disproportionate unpaid care. Persons with disabilities living at the
              intersections of poverty, caste, gender, rurality, and age face additional
              barriers to recognition and support that compound in ways most schemes
              are not designed to reach. Civil society organizations step in, not only as
              service providers, but as translators, navigators, advocates, trust-builders,
              and holders of continuity across fragmented systems. </p>

            <p className="text-xl text-gray-700 font-regular leading-relaxed mb-10">
              This is why disability inclusion is a structural question. It asks how access is
              designed, who carries the burden of navigation, what forms of support are treated
              as essential, and why disabled lives are still so often required to justify their claim
              to ordinary participation. The economic case is significant: excluding persons with
              disabilities from the labor market can cost countries between 3% and 7 % of GDP.3
              But the deeper question is civic and institutional: whether systems built in the
              name of the public are prepared to serve the full diversity of the public.
            </p>
            <div className="p-8 bg-box rounded-xl mb-12">
              <p className="text-2xl font-heading font-regular text-black ">
                The economic case is significant: excluding
                persons with disabilities from the labor
                market can cost countries between <br />
                <span className="font-bold text-3xl">3 % and 7 % of GDP.3</span>
              </p>
            </div>
            <p className="text-xl text-gray-700 font-regular leading-relaxed mb-10">
              This chapter lays the foundation for the report. It situates disability inclusion within
              the human continuum; traces how India’s legal, policy, and institutional landscape
              has evolved; identifies why access remains uneven; and locates the actors working
              across this field. The rest of the report builds from this starting point, examining
              how nonprofits hold continuity where systems fragment, where exclusion repeats
              across domains, how funding shapes what is possible, and what collective action is
              required for disability inclusion to become durable.
            </p>
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl font-heading font-bold text-subHeading mb-10"><span className="border-b-8 border-current  pb-0">1.1</span> How to Read This Report</h3>
                <p className="text-gray-700 text-xl leading-relaxed">Disability inclusion is a cross-cutting development imperative. However, it is often
                  approached through visible failure: a child pushed out of school, a job applicant
                  screened out, a pension denied, or a building constructed as unusable. While
                  these are important entry points, they do not fully explain how such outcomes are
                  produced. Therefore, in this report, we approach them as outcomes generated
                  within a wider terrain, shaped by policy, institutional design, budget priorities,
                  administrative practice, alongside social norms and uneven state capacity. Three
                  analytical lenses organize our inquiry:</p>
              </div>

              <div className="space-y-5 text-xl">
                {[
                  { heading: "Lifecycle Lens:", text: "Exclusion accumulates across the lifecycle, from early identification through schooling, skilling, employment, social protection, and into old age.4 Disability inclusion emerges as a priority long before employment and extends well beyond formal schooling. A child not identified early, or unsupported in school, is disproportionately likely to face exclusion from higher education, work, and income security. This lens also disrupts the notion of disability as a fixed or bounded identity. Individuals may experience disability at different moments, through birth, illness, accident, or aging. It allows for inclusion to be seen as the foundational condition that must be embedded continuously across the lifecycle." },
                  { heading: "Systems Lens:", text: "Here, the focus shifts from when exclusion occurs to why it persists. It recognizes that outcomes such as school dropout, unemployment, or barriers to healthcare are not merely discrete events, but visible expressions of deeper structural constraints. These include inaccessible physical and digital infrastructure, fragmented and siloed service delivery systems, institutional practices that exclude by design, and pervasive social norms shaped by ableism and stigma.5 Addressing the surface without addressing the roots produces gains that are inherently limited and difficult to sustain." },
                  { heading: "Intersectionality Lens:", text: "This helps understand how disability aggravates the lived experience in a socioculturally complex country such as India. Gender, caste, class, geography, and age shape how impairment is experienced and how institutions respond to it.6 Women with disabilities face specific vulnerabilities in safety, education, and economic participation. Persons from Scheduled Caste, Scheduled Tribe, and Other Backward Class communities with disabilities encounter layered disadvantages that standard disability schemes rarely address. Rural and low-income households bear disproportionate care burdens when public systems fail. " },
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

              <p className="text-greay-700 leading-relaxed font-regular text-xl">
                Together, these lenses allow the report in moving from isolated outcomes to a
                patterned explanation. Rather than reducing the analysis to a form of impairment,
                the report keeps in view the breadth of disability as recognized under the Rights of
                Persons with Disabilities (RPwD) Act, 2016 – and beyond. The breadth is necessary
                because exclusion is produced by systems built for a narrow idea of the ‘normal’
                user, learner, worker, or citizen.
              </p>



            </div>
          </section>
          {/* 1.2 */}
          <section>
            <div>
              <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
                <span className="border-b-8 border-current pb-0 shrink-0">1.2</span>
                <span>How the Terrain of Disability Inclusion was Assembled</span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">The disability ecosystem in India has been assembled over time, through policy,
                law, and society. Understanding why the system behaves as it does today require
                tracing how these layers came together.</p>
            </div>
            <div>
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className=" pb-0 shrink-0">1.2.1</span>
                <span>From Charity to Rights: The Long Shift in Disability Framing </span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                Before disability was framed in terms of rights, it was addressed primarily through a
                combination of state welfare, philanthropy, family responsibility, and rehabilitationoriented services. In pre-Independence India, services were limited: typically
                operated by voluntary organizations, a small number of special schools for blind
                and deaf children, and institutions linked to care or custodial management.
                Disability, particularly intellectual and psychosocial disability, was largely managed
                within the household, with families bearing primary responsibility of care, income,
                and everyday functioning.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                Post-Independence policy did not fully overcome this tendency to privatize
                disability. The constitutional promise of equality and social justice opened
                some space for change, but for many years disability remained within a welfarerehabilitation frame rather than a citizenship frame.9 Persons with disabilities were
                positioned as recipients of care rather than as people entitled to shape institutions
                on equal terms.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                The turn towards a rights-based approach emerged gradually, through both political
                and institutional change.10 Disability rights movements in India developed alongside
                other postcolonial struggles over equality and citizenship, challenging models
                that treated disability as a matter of sympathy rather than justice. The Persons
                with Disabilities (Equal Opportunities, Protection of Rights and Full Participation)
                Act, 1995 marked a major turning point, moving the policy conversation beyond
                charity to include education, employment, non-discrimination, affirmative action,
                and social security.11 At the same time, many of its provisions remained qualified by
                the state’s “economic capacity and development,” allowing rights to be mediated
                through administrative and fiscal discretion.
              </p>

            </div>
            <div>
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className=" pb-0 shrink-0">1.2.2</span>
                <span>International Anchors and Domestic Deepening:
                  How Rights Frameworks Expanded </span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                The 2000s brought another shift. The National Policy for Persons with Disabilities,
                2006 broadened the framing of inclusion to encompass equal opportunity and
                participation. More consequentially, India’s ratification of the United Nations
                Convention on the Rights of Persons with Disabilities (UNCRPD) in 2007 placed
                domestic policy within a stronger international framework, reinforcing expectations
                around non-discrimination, accessibility, participation, and accountability.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                This trajectory culminated in the Rights of Persons with Disabilities Act, 2016, the
                central legal anchor of the current terrain. In addition to replacing earlier legislation,
                the Act redefined the scope of disability inclusion. It expanded recognized
                disability categories from seven to twenty-one, strengthened equality and dignity
                provisions, mandated reasonable accommodation, broadened inclusive education
                and employment obligations, and embedded accessibility across physical spaces,
                transport, and information systems. It also established a more formal architecture,
                with designated authorities and responsibilities across levels of government.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                Even so, the disability ecosystem cannot be understood through the RPwD Act
                alone. The Rehabilitation Council of India Act, 1992 established a framework for
                the training of rehabilitation professionals, while The National Trust Act, 1999
                created a statutory body focused on specific disability groups. These laws and
                their trajectories suggest that disability inclusion has always depended not only on
                legislative frameworks, but on professional capacity, administrative specialization,
                inter-ministerial coordination, and local institutional presence.
              </p>

            </div>


            <div>
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className=" pb-0 shrink-0">1.2.3</span>
                <span>
                  Expansion Across Domains: How Disability Moved
                  Beyond Disability-Specific Policy
                </span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                Over time, disability spread into policy domains not originally framed as disabilityspecific. Accessibility became a national agenda through the Accessible India
                Campaign (Sugamya Bharat Abhiyan), bringing built environments, transport, and
                ICT into a framework of universal access. Education policy incorporated Children
                with Special Needs within Samagra Shiksha, while social protection systems
                expanded to include pension schemes, assistive devices, and targeted support.
                More recently, digital governance brought web accessibility, digital identity,
                grievance reporting, and accessible information formats into the inclusion agenda.
                The Union Budget 2026–27 further signaled strategic intent, enabling skilling,
                entrepreneurship, digital learning, and assistive technology for persons with
                disabilities.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                This is why disability inclusion in India is better understood as the formation of
                a terrain rather than the accumulation of laws or schemes. As the meaning of
                disability has evolved, so have the institutions, expectations, and responsibilities
                attached to it. The growth has been uneven and incomplete, but it has reshaped
                what can now be demanded of the state, markets, and civil society — and it explains
                why the terrain behaves the way it does today.
              </p>
            </div>
          </section>


          {/* 1.3 */}
          <section>
            <div>
              <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
                <span className="border-b-8 border-current pb-0 shrink-0">1.3</span>
                <span>Why Inclusion Remains Uneven</span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                A stronger framework for equity has not necessarily translated into consistent
                outcomes. The evidence is unambiguous. The UDISE+ 2024–25 report records
                more than 2.14 million children with special needs enrolled in school, yet only 36%
                of schools have the facilities and infrastructure designed for them, and only 55%
                have ramps with handrails.15 Current observations on the systems in India, point to
                challenges regarding procedural delays, accessibility, and the current availability of
                disability-disaggregated data for tracking accountability. Three structural tensions
                help explain the unevenness in the landscape.
              </p>
            </div>

            <div className="p-8 bg-box rounded-xl mb-12">
              <p className="text-2xl font-heading font-regular text-black ">
                The UDISE+ 2024–25 report records more than <br />   <span className="font-bold text-3xl">2.14 million children with special needs</span> <br /> enrolled in school, yet only 36% of schools have
                the facilities and infrastructure designed for
                them, and only 55% have ramps with handrails.
              </p>
            </div>

            <div>
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className=" pb-0 shrink-0">1.3.1</span>
                <span>
                  Design Mismatch: Systems Built Around
                  a Narrow Norm
                </span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                The most immediate source of unevenness is the mismatch between the diversity
                of disability and the uniformity of most institutional design. Schools, hospitals,
                workplaces, transport systems, and digital platforms were built around a narrow
                idea of the standard user. When a person’s body, communication style, pace of
                learning, or cognitive profile does not fit that norm, the system produces exclusion
                through the accumulated effect of inaccessible infrastructure, under-equipped
                service providers, and incomplete accommodations. The gap between what
                persons with disabilities need and what public services are designed to deliver is
                widest where design has been least informed by the people it is meant to serve.
              </p>
            </div>


            <div>
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className=" pb-0 shrink-0">1.3.2</span>
                <span>
                  State Variation: Uneven Institutional Capacity
                </span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                Health, education, and social welfare are concurrent or state subjects under
                India’s constitutional framework. While central legislation may establish rights,
                implementation depends on state-level capacity and priorities. Whether the
                RPwD Act translates into meaningful access hinges on the functionality of state
                commissioner’s offices, teacher training in inclusive design, accessibility standards,
                and procurement processes. Variation across states in all these dimensions is
                wide and well-documented.16 Unlike issues where concentrated harms generate
                clear pressure, the costs of disability exclusion are dispersed among households,
                unpaid care, interrupted education, and lost income. These are less legible to data
                systems that do not collect disaggregated information, and less easily attributed
                to specific institutional outcomes.
              </p>
            </div>

            <div>
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className=" pb-0 shrink-0">1.3.3</span>
                <span>
                  Shared Stakes: Building Coordination Across
                  Institutions and Sectors
                </span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                Disability inclusion spans multiple domains – education, health, labor, social
                justice, rural development, transport, housing, and digital infrastructure. And
                coordination among these sectors remains limited. Schemes may be well-designed
                in one ministry and unimplemented in another. Individuals navigating entitlements
                may encounter four different departments with incompatible documentation
                requirements, separate grievance mechanisms, and different implementation
                timelines.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                This fragmentation reflects the need for greater alignment and coordination to
                overcome institutional silos, by centering everyday contexts of disability. Closing
                the distance between the promise of inclusion and what institutions deliver on the
                ground requires both coordination and compliance.
              </p>
            </div>

          </section>
          {/* 1.4 */}
          <section>
            <div>
              <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
                <span className="border-b-8 border-current pb-0 shrink-0">1.4</span>
                <span>Making the System Visible</span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                A person does not experience disability in one sector at a time. Their life may involve
                early diagnosis in the health system, schooling in mainstream or special settings,
                skill training, attempts to secure employment, recourse to social protection,
                negotiation of public transport, use of assistive technology, and interaction
                with digital public infrastructure. Each of these sites can either widen or narrow
                participation. And at each site, the same structural tensions play out.
              </p>

              <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Figure 1:</p>
              <p className="text-black text-xl leading-relaxed mb-6 font-bold">Viewing the Disability Lifecycle through an Iceberg Model</p>
              <img src="/ch1/iceberg.png" alt="iceberg" className="w-full object-contain mb-10" />
            </div>
            <p className="text-gray-700 leading-relaxed text-xl mb-10">
              The iceberg model helps distinguish between visible outcomes and the underlying
              conditions that produce them. At the surface are the exclusion events that tend
              to attract most attention and funding. These are real and significant, but they are
              outcomes, not necessarily causes.
            </p>
            <p className="text-gray-700 leading-relaxed text-xl mb-10 ">
              Beneath the surface lie the patterns that produce those outcomes, like inaccessible
              infrastructure, poorly trained personnel, and inadequate accommodations. Deeper
              still are the structures that sustain those patterns: policy gaps, weak enforcement
              mechanisms, fragmented inter-institutional coordination, and underdeveloped
              data systems. And beneath all of these are the mental models – the ableism,
              stigma, and paternalism that shape how institutions, families, employers, and
              communities understand disability in the first place. What the iceberg model
              makes clear is that interventions focused only on visible outcomes are necessary
              but not sufficient. They must be accompanied by efforts to shift the patterns and
              structures beneath: improving implementation systems, building data capacity,
              strengthening accountability mechanisms, and, over time, challenging the mental
              models that license exclusion.
            </p>


            <div>
              <h3 className="flex gap-4 items-start text-2xl font-heading font-bold text-chHeading mb-10">
                <span className=" pb-0 shrink-0">1.4.1</span>
                <span>
                  The Domains of Inclusion: Where Participation
                  is Made and Unmade
                </span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                The terrain of disability inclusion spans at least five domains, each with its own
                actors, logic, and failure modes.
              </p>
            </div>

            <div className="space-y-5 text-xl mb-10">
              {[
                { heading: "Education", text: "is where trajectories are set, often before anyone has named what is happening. It is a powerful cascade, beginning from a missed developmental marker, a delayed referral, a classroom that cannot accommodate differences, a teacher who mistakes disability for low intelligence. By the time a child reaches adolescence without appropriate support, years of compounding disadvantage have already narrowed what remains possible. And yet, the gap between early identification in principle and early identification in practice remains wide." },
                { heading: "Employment", text: "is where earlier disadvantage either hardens into exclusion or, occasionally, can be interrupted. Skilling programs frequently carry the imprint of what employers are expected to want, which often reflects assumptions about who is “trainable” and for what. Labor markets, meanwhile, are structured around physical and communicative norms that treat departure from them as a problem to be managed rather than a diversity to be designed for." },
                { heading: "Health systems", text: "are typically where institutional contact begins — and where so much is decided before the rest of the system becomes relevant. Diagnostic accuracy, early intervention, and rehabilitation support are unevenly available across geographies, frequently missing in secondary and tertiary towns and in primary care settings that lack specialist capacity" },
                { heading: "Legal and civic life", text: "speaks to how policy mandates and social protections shape inclusion. Courts, grievance redressal channels, and disability commissioners are, at their best, the architecture that gives other commitments teeth. This is characteristically slow, expensive, and inaccessible to many of those it is meant to serve, and more effective for those with resources to sustain complaints over time." },
                { heading: "Social participation", text: " is where the cumulative effects of exclusion across other spheres of life register most concretely, in who is present within public life and who is not. It encompasses movement through shared spaces, civic engagement, and the degree to which people with disabilities are imagined as ordinary participants in community life, rather than exceptions to it." },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className=" mt-2">
                    <Astroid className="w-4 h-4 text-astroid   shrink-0" fill="#9196CD" />
                  </div>
                  <p className="pl-6 "><span className="font-bold text-gray-900"> {item.heading}</span> {item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-greay-700 leading-relaxed font-regular text-xl">
              Today, India’s disability rights framework is more robust than it was a decade
              ago. Yet practice tells an uneven story. Redistributive mechanisms like disability
              pensions, assistive technology schemes, and care support remain markers of
              how the system understands the relationship between disability and economic
              participation.20 The foundational work of enablement and capacity-building
              has historically relied on institutional philanthropy, while Corporate Social
              Responsibility (CSR) has clustered around livelihoods and skilling, where outcomes
              are more readily measurable. Rights-based and intersectional approaches remain
              less resourced. Assistive technology has largely grown within a narrow circle of
              accelerators and corporate partners, despite showing signs of momentum. The
              result is a field whose funding flows and programmatic priorities reflect the terrain
              as it has been assembled, rather than the terrain as inclusion requires it to be. This
              report examines how that gap is understood, and what it might take to close it.
            </p>
          </section>
          {/* 1.5 */}
          <section>
            <div>
              <h3 className="flex gap-4 items-start text-4xl font-heading font-bold text-subHeading mb-10">
                <span className="border-b-8 border-current pb-0 shrink-0">1.5</span>
                <span>Who Makes the Ecosystem
                  Function</span>
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                The ecosystem is experienced through sites like block offices, hospital
                assessments, and classrooms by people with disabilities in India. Behind every
                policy mandate and delivery gap is a set of actors whose decisions and span of
                influence determine what inclusion can look like. The table below maps the actors
                in this ecosystem, sketching out a picture of where leverage and influence sit, how
                they move, and what helps them reach the communities they serve.
              </p>

              <p className="text-black text-xl leading-relaxed mb-1 underline font-bold">Figure 2:</p>
              <p className="text-black text-xl leading-relaxed mb-6 font-bold">Actor map of the disability inclusion ecosystem by layer, type, role, mandates,
                and engagement</p>

              <div className="overflow-x-auto border border-border mb-6">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-secondary text-white">
                      <th className="text-left px-3 md:px-4 py-3 font-bold w-[22%] border-r border-white/20">Actor Type</th>
                      <th className="text-left px-3 md:px-4 py-3 font-bold w-[18%] border-r border-white/20">What They Do</th>
                      <th className="text-left px-3 md:px-4 py-3 font-bold w-[30%] border-r border-white/20">What Is Their Mandate</th>
                      <th className="text-left px-3 md:px-4 py-3 font-bold w-[30%]">Who and Where They Meet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Policy and Rights */}
                    <tr className="bg-[#F2C94C]">
                      <td colSpan={4} className="px-3 md:px-4 py-2 text-center font-bold text-black text-sm">Policy and Rights</td>
                    </tr>
                    {[
                      { actor: "Government Ministries and Departments", does: "Policy design, financing", mandate: "Set legal frameworks, allocate budgets, define eligibility systems", where: "At enrollment camps and through digital portals, families navigate scheme access with limited direct contact with decision makers" },
                      { actor: "Advocacy Networks, DPOs, and Parent Collectives", does: "Rights mobilization", mandate: "Build narratives, mobilize constituencies, influence policy discourse", where: "In community meetings and peer spaces, disabled persons and families gather to share experiences and organize around access and rights" },
                      { actor: "Legal Think Tanks", does: "Legal reform & interpretation", mandate: "Shape reform agendas through legal analysis and policy research", where: "Through litigation processes and policy consultations, activists and NGO representatives engage on specific legal challenges" },
                      { actor: "Elected Representatives", does: "Political agenda-setting", mandate: "Influence legislation, visibility, and prioritization", where: "In meetings and consultations, activists and NGO leaders present issues for legislative attention" },
                      { actor: "Child Welfare Committees", does: "Legal adjudication (child protection)", mandate: "Decide custody, institutionalization, and care pathways", where: "During crisis hearings, disabled children are brought before committees for decisions on care and placement" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                        <td className="px-3 md:px-4 py-3  font-medium border-r border-border align-top border-b">{row.actor}</td>
                        <td className="px-3 md:px-4 py-3  border-r border-border align-top border-b">{row.does}</td>
                        <td className="px-3 md:px-4 py-3  border-r border-border align-top border-b">{row.mandate}</td>
                        <td className="px-3 md:px-4 py-3  align-top border-b">{row.where}</td>
                      </tr>
                    ))}
                    {/* State Implementation */}
                    <tr className="bg-[#F2C94C]">
                      <td colSpan={4} className="px-3 md:px-4 py-2 text-center font-bold text-black text-sm">State Implementation</td>
                    </tr>
                    {[
                      { actor: "District and Local Administration", does: "Local scheme execution", mandate: "Provide approvals, fund disbursement, local coordination", where: "At block and panchayat offices, disabled adults and families submit documents for pensions, passes, and welfare schemes" },
                      { actor: "State-Level Disability Commissioners", does: "Compliance, enforcement & grievance redressal", mandate: "Address complaints, push departments toward compliance", where: "Through formal complaints and hearings, individuals and families seek redress for denied entitlements or inaccessibility" },
                      { actor: "Public Healthcare and Assessment Boards", does: "Certification, screening", mandate: "Determine disability status and eligibility for schemes", where: "At district hospitals, disabled persons (often with families) undergo medical assessment for certification and eligibility" },
                      { actor: "Frontline Health Workers", does: "Early identification & referral", mandate: "Provide first point of detection and referral pathways", where: "During home visits and local center check-ins, young children and families are monitored and referred for further care" },
                      
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                        <td className="px-3 md:px-4 py-3 font-medium border-r border-border align-top border-b">{row.actor}</td>
                        <td className="px-3 md:px-4 py-3 border-r border-border align-top border-b">{row.does}</td>
                        <td className="px-3 md:px-4 py-3 border-r border-border align-top border-b">{row.mandate}</td>
                        <td className="px-3 md:px-4 py-3 align-top border-b">{row.where}</td>
                      </tr>
                    ))}
                    {/* Service Delivery */}
                    <tr className="bg-[#F2C94C]">
                      <td colSpan={4} className="px-3 md:px-4 py-2 text-center font-bold text-black text-sm">Service Delivery</td>
                    </tr>
                    {[
                      { actor: "Specialized NGOs and Grassroots Implementers", does: "Direct service provision", mandate: "Provide design and delivery of interventions; build community trust", where: "At centers and through home visits, disabled individuals and families receive ongoing therapy, training, and support" },
                      { actor: "Rehabilitation Professionals and Special Educators", does: "Therapeutic intervention delivery", mandate: "Deliver specialized knowledge and intervention plans", where: "In therapy sessions and special education settings, disabled individuals engage directly, often alongside trained caregivers" },
                      { actor: "Mainstream and Inclusive Schools", does: "Educational inclusion platforms", mandate: "Provide access to mainstream education environments", where: "In classrooms, disabled students participate in daily schooling, with periodic engagement with parents around progress" },
                      { actor: "General Pediatricians", does: "Primary diagnosis & referral", mandate: "Provide early medical diagnosis", where: "In primary clinics, children and parents seek early diagnosis and guidance on developmental concerns" },
                      { actor: "Mental Health Practitioners and Psychologists", does: "Psychosocial care provision", mandate: "Deliver mental health assessment and care pathways", where: "In counseling sessions, disabled individuals and caregivers address behavioral, emotional, and psychosocial needs" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                        <td className="px-3 md:px-4 py-3  font-medium border-r border-border align-top border-b">{row.actor}</td>
                        <td className="px-3 md:px-4 py-3 border-r border-border align-top border-b">{row.does}</td>
                        <td className="px-3 md:px-4 py-3 border-r border-border align-top border-b">{row.mandate}</td>
                        <td className="px-3 md:px-4 py-3  align-top border-b">{row.where}</td>
                      </tr>
                    ))}
                    {/* Intermediaries */}
                    <tr className="bg-[#F2C94C]">
                      <td colSpan={4} className="px-3 md:px-4 py-2 text-center font-bold text-black text-sm">Intermediaries</td>
                    </tr>
                    {[
                      { actor: "Capacity and Field-Building Organizations", does: "Ecosystem capacity development", mandate: "Shape training systems, institutional capabilities, and sector standards", where: "In training programs and fellowships, practitioners and NGO leaders engage to build skills and institutional capacity" },
                      { actor: "Philanthropies and CSR", does: "Resource allocation & agenda shaping", mandate: "Control funding flows and define priority areas", where: "During site visits, funding events, and public distributions, disabled individuals and families are intermittently engaged" },
                      { actor: "Corporate Employers and DEI Initiatives", does: "Labor market inclusion", mandate: "Direct hiring, workplace norms, and accommodations", where: "In hiring processes and workplaces, disabled adults engage through interviews, onboarding, and day-to-day work" },
                      { actor: "Local Collaborative Forums", does: "Local coordination infrastructure", mandate: "Enable information sharing and collective action", where: "In local meetings, NGOs, self-advocates, and parent groups exchange resources and coordinate efforts" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                        <td className="px-3 md:px-4 py-3 font-medium border-r border-border align-top border-b">{row.actor}</td>
                        <td className="px-3 md:px-4 py-3 border-r border-border align-top border-b">{row.does}</td>
                        <td className="px-3 md:px-4 py-3 border-r border-border align-top border-b">{row.mandate}</td>
                        <td className="px-3 md:px-4 py-3 align-top border-b">{row.where}</td>
                      </tr>
                    ))}
                    {/* Frontier */}
                    <tr className="bg-[#F2C94C]">
                      <td colSpan={4} className="px-3 md:px-4 py-2 text-center font-bold text-black text-sm">Frontier</td>
                    </tr>
                    {[
                      { actor: "Family and Caregiver Ecosystem", does: "Informal care infrastructure", mandate: "Provide daily care, decision-making, and continuity", where: "At home and in the community, the disabled person is in continuous daily contact with family — for physical care, therapy reinforcement, and all decisions about participation in the world outside." },
                      { actor: "Assistive Technology (AT) Innovators and Startups", does: "Tech solutions development", mandate: "Shape design and availability of accessibility tools", where: "During product testing and use of devices, disabled individuals engage with tools for communication, mobility, and access" },
                      { actor: "Intersectional and Cross-Movement Collectives", does: "Cross-movement integration", mandate: "Cross-movement integration", where: "In workshops and community spaces, disabled individuals from marginalized groups engage around identity and rights" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                        <td className="px-3 md:px-4 py-3 font-medium border-r border-border align-top border-b">{row.actor}</td>
                        <td className="px-3 md:px-4 py-3 border-r border-border align-top border-b">{row.does}</td>
                        <td className="px-3 md:px-4 py-3 border-r border-border align-top border-b">{row.mandate}</td>
                        <td className="px-3 md:px-4 py-3 align-top border-b">{row.where}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>



          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/executive-summary" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Executive Summary
            </Link>
            <Link href="/chapter-2" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Chapter 02 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div >
    </Layout >
  );
}