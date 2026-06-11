import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const sectorExperts = [
  "Anjanaben Acharya, Ashirvad Viklang Trust Sayla",
  "Adv. Mrunmayee Rajabhau Jodh, Manav Vikas Foundation (MVF), Nagpur",

  "Archana Chandra, Jai Vakeel Foundation",
  "Myroslava Tataryn, Disability Rights Fund (DRF)",

  "Bashir Ahmad Lone, Voluntary Medicare Society (VMS)",
  "Nargis Khatoon, Srijan Mahila Vikas Manch",

  "Beverly Louis, Mann",
  "Neha Soneji, Tech Mahindra Foundation",

  "Bhavana Mukherjee, ADAPT (formerly Spastics Society of India)",
  "Nidhi Goyal, Rising Flame",

  "Bhumika Modh, Association of People with Disabilities (APD)",
  "Nipun Malhotra, Nipman Foundation & The Quantum Hub",

  "Birbal Prasad, Manav Vikas Jharkhand",
  "Paul Ramanathan, SAMA Foundation",

  "D.P.K. Babu, Akshay Akruti",
  "Payal Wadhwa, Jai Vakeel Foundation",

  "Disket Angmo, Mann Talks",
  "Prashant Sude, GSP India Grameen Shramik Pratishthan",

  "Dr. Aman Preet Kaur, Bajaj Finserv",
  "Prateek Madhav, AssisTech Foundation (ATF)",

  "Dr. Anita Limaye, Ummeed Child Development Center",
  "R.A. Gopal, Global Trust",

  "Dr. Dipti Gandhi, Muskan Foundation",
  "Radhika Kannan, Mariwala Health Initiative (MHI)",

  "Dr. Koyeli Sengupta, Ummeed Child Development Center",
  "Richa Bhutani, Tata Institute of Social Sciences",

  "Dr. Lakshmi Narasimhan, Banyan Academy of Leadership in Mental Health",
  "Shamin Mehrotra, Ummeed Child Development Center",

  "Dr. N.S. Senthil Kumar, Association of People with Disabilities (APD)",
  "Shilpi Kapoor, BarrierBreak",

  "Dr. Nandini Ghosh, Institute of Development Studies (IDS), Kolkata",
  "Siddharth Agarwal, Upadhyaya Foundation",

  "Dr. O. P. Kulhari, CULP - Centre for Unfolding Learning Potentials",
  "Sonali Saini, Sol's ARC",

  "Dr. Pratima Sasindran, Gramin Shramik Pratishthan (GSP)",
  "Srilakshmi Bellamkonda, Dr. Reddy's Foundation",

  "Gazala Paul, Paul Hamlyn Foundation & Samerth Charitable Trust",
  "Sudeep Goyal, Asha Ka Jharna",

  "Jo Chopra-McGowan, Latika",
  "Sushri Sangita Deo, Sadbhabana",

  "Karthikeyan Ganesan, Sristi Foundation",
  "Subhojit Goswami, The Leprosy Mission Trust India",

  "",
  "Usha V, Akshay Akruti",
];

const surveyRespondents = [
  "A Hand for Help Development Society",
  "NEAID",

  "Aaina",
  "Odisha Rising Foundation",

  "Acc-Red",
  "Prabhat Education Foundation",

  "ACT2Enable Aadhaar Counselling and Therapy Council",
  "Pranjal Welfare Foundation",

  "Action for Autism",
  "Pratham Education Foundation",

  "Amar Seva Sangam",
  "Prerak",

  "Amhi Amchya Arogyasathi",
  "Prodigals' Home",

  "Anushkaa Foundation for Eliminating Clubfoot",
  "Rainbow Special Education and Rehabilitation Foundation",

  "Arj Foundation",
  "RampMyCity",

  "ARVI TRUST",
  "Raphael Ryder Cheshire International Centre",

  "Autism Welfare Trust",
  "Rising Star Kilte Chehre",

  "AWMH Maharashtra",
  "SaaD",

  "Bijapur Integrated Rural Development Society (BIRDS)",
  "Sadbhabana",

  "Blink Foundation",
  "Saheli HIV AIDS Karyakarta Sangh",

  "Buzz Women",
  "SAMA Foundation",

  "Calcutta Blind School",
  "Samarthanam Trust for the Disabled",

  "Centre for Community Initiative",
  "Samerth Talim Kendra Operated by Samerth Charitable Trust",

  "Centre for Mental Health Law and Policy, Indian Law Society",
  "Samhita",

  "Chehak Trust",
  "Sanchar AROD",

  "CORD",
  "Sangath",

  "Craftizen Foundation",
  "Sankalp Sanskritik Samiti",

  "CULP - Centre for Unfolding Learning Potentials",
  "Santhivardhana Ministries",

  "Dantan Manav Kalyan Kendra",
  "SARDS",

  "Darbar Sahitya Sansada",
  "Satya Special School",

  "Diocese of Varanasi Social Welfare Society",
  "Service Initiative for Voluntary Action Trust",

  "Dr. Anjali Morris Education & Health Foundation",
  "SEWA Punjab",

  "Ekalavya Educational And Charitable Trust",
  "Shanta Memorial Rehabilitation Centre",

  "EKTA",
  "Shikshit Yuva Sewa Simiti",

  "Evoluer Solutions",
  "Sisu Vikas Samiti",

  "Future Hope",
  "Snehadhara Foundation",

  "Ganpati Educational Society",
  "Sri Nrusingha Dev Anchalika Yuba Parisada (SNDAYP)",

  "Geohazards Society",
  "Srijan Mahila Vikash Manch",

  "Global Trust for the Differently Abled",
  "Sristi Foundation",

  "Gramin Vikas Sansthan",
  "Tamana",

  "Hind Yuva Shakti",
  "Team Vision Foundation",

  "Jai Vakeel Foundation & Research Centre",
  "The Association of People with Disability",

  "Jan Vikas Samiti",
  "The Banyan",

  "Jeevandeep Health Education and Charitable Trust",
  "The Education Audiology and Research Society",

  "JYOTIRMAY NGO (Under the aegis of Lila K Jagtiani Foundation)",
  "The Leprosy Mission Trust India",

  "Kalp Samaj Sevi Sanstha",
  "The Stephen High School for the Deaf",

  "Kandhamal Zilla Sabuja Vaidya Sangathan",
  "The Victoria Memorial School for the Blind",

  "Karnataka Hemophilia Society Davangere",
  "Torchit",

  "Kaveri Counselling Empowerment & Gifted Centre",
  "Udayan Care",

  "Kenduadihi Bikash Society",
  "Udbhav Vision Foundation",

  "Krida Vikas Sanstha (Slumsoccer)",
  "Ummeed Child Development Center",

  "Lohardaga Gram Swarajya Sansthjan",
  "Umoya Sports",

  "Lok Kalyan Seva Kendra",
  "UNNATI - Organisation for Development Education",

  "Manav Vikas Foundation",
  "V Can Autism Foundation",

  "Mitra Jyothi",
  "Vidhi Centre for Legal Policy",

  "Movement for Alternatives and Youth Awareness",
  "Vidyaranya",

  "Muskaan-PAEPID",
  "Vipla Foundation (Save The Children India)",

  "Muskan Foundation",
  "Vivekanand Lok Vikas Sansthan",

  "National Association of the Deaf",
  "Voluntary Integration for Education and Welfare of Society (VIEWS)",

  "Navkshitij",
  "Voluntary Medicare Society (VMS)",

  "",
  "Youth4Jobs Foundation",
];

const references = [
  "World Health Organization, 'Disability and Health', WHO, 2023; Ministry of Statistics and Programme Implementation, 'Disabled Persons in India: A Statistical Profile 2016', Government of India, 2016; Press Information Bureau, 'Persons with Disabilities in India: NSS 76th Round', Government of India, 2019.",
  "Government of India, 'The Rights of Persons with Disabilities Act, 2016', 2016; Supreme Court Observer, 'Visually Impaired Candidates Cannot Be Excluded from Judicial Services', 2025; Vidhi Centre for Legal Policy, 'Digital Access as a Fundamental Right', 2025.",
  "Sebastian Buckup, 'The Price of Exclusion: The Economic Consequences of Excluding People with Disabilities from the World of Work', International Labour Organization, 2010.",
  "Rashmi R, Mohanty SK. Socioeconomic and geographic variations of disabilities in India: evidence from the National Family Health Survey, 2019-21. Int J Health Geogr. 2024 Feb 18;23(1):4. doi: 10.1186/s12942-024-00363-w. PMID: 38369479; PMCID: PMC10874552.",
  "Mitra S, Posarac A, Vick B. Disability and poverty in developing countries: a multidimensional study. World Dev. 2013;41:1–18. doi: 10.1016/j.worlddev.2012.05.024.",
  "https://www.developmentpathways.co.uk/wp-content/uploads/2021/02/India-disability-Feb-2021-1.pdf",
  "https://niti.gov.in/sites/default/files/2024-02/NITI%20WORKING%20PAPER_Report.pdf",
  "Mehrotra, N. (2011). 'Disability rights movements in India: Politics and Practice.' Economic and Political Weekly, 46(6), 65–72; Addlakha, R. (2008). Deconstructing Mental Illness: An Ethnography of Psychiatry, Women and the Family. New Delhi: Zubaan.",
  "https://niua.in/intranet/sites/default/files/2458.pdf",
  "Mehrotra, N. (2011). Disability rights movements in India: Politics and practice. Economic and Political Weekly, 65-72.",
  "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/oct/doc2024105410301.pdf",
  "Mehrotra, N. (2011). Disability rights movements in India: Politics and practice. Economic and Political Weekly, 65-72.",
  "United Nations, 'Convention on the Rights of Persons with Disabilities (CRPD)', United Nations Department of Economic and Social Affairs, 2006.",
  "Department of Empowerment of Persons with Disabilities, 'Accessible India Campaign,' Government of India, https://depwd.gov.in/en/accessible-india-campaign/. See also Press Information Bureau (note 11).",
  "Department of School Education and Literacy, Ministry of Education, Government of India, UDISE+ 2024-25: Key Results – All India, https://www.education.gov.in/sites/upload_files/mhrd/files/statistics-new/UDISE%2BReport%202024-25%20-%20NEP%20Structure.pdf",
  "World Bank, People with Disabilities in India: From Commitments to Outcomes (Washington, DC: World Bank), https://documents1.worldbank.org/curated/en/577801468259486686/pdf/502090WP0Peopl1Box0342042B01PUBLIC1.pdf",
  "World Bank, 'People with Disabilities in India: From Commitments to Outcomes', World Bank, 2009.",
  "International Labour Organization (2019), The Next Normal: The changing world of work; World Bank (2022), Disability Inclusion in India: A Path to Inclusive Growth.",
  "NITI Aayog and SAMRIDH Healthcare Blended Finance Facility. Reimagining Healthcare in India through Blended Finance. New Delhi: NITI Aayog, 2022. ISBN: 978-81-953811-8-0.",
  "Ministry of Social Justice and Empowerment (various years), Annual Reports; World Bank (2022), Social Protection for Persons with Disabilities in India.",
  "UNESCO, \"N for Nose: State of the Education Report for India 2019, Children with Disabilities,\" UNESCO Office in New Delhi, 2019.",
  "Ministry of Education, Government of India, \"Unified District Information System for Education + (UDISE+) 2024-25,\" Department of Education & Literacy, 28 August 2025.",
  "UNICEF (Multiple Contributors), \"Global Disability Inclusion Report: Accelerating Disability Inclusion in a Changing and Diverse World,\" Global Disability Summit, 2-3 April 2025.",
  "Ministry of Statistics & Program Implementation, Government of India, \"Persons with Disabilities in India (NSS Report No. 583),\" National Statistical Office, 2019.",
  "PTI, \"Persons with disabilities represent less than 1% of the corporate workforce: Report,\" The Economic Times, 4 December 2025.",
  "Suraj Singh Senjam & Amarjeet Singh, \"Addressing the Health Needs of People with Disabilities in India,\" Indian Journal of Public Health 64(1), January-March 2020.",
  "Disability Rights India Foundation (DRIF), National Centre for Promotion of Employment for Disabled People (NCPEDP), & National Committee on the Rights of Persons with Disabilities (NCRPD), \"Two Years of The Rights of Persons with Disabilities (RPWD) Act 2016 – Status of Implementation in the States and UTs of India,\" 3 December 2018.",
  "Nikita Francis, \"Less than 40% of disabled persons in India have the ID needed for benefits,\" The Hindu, 7 September 2025.",
  "Young Leaders for Active Citizenship (YLAC), Nipman Foundation, & Samarth by Hyundai with NDTV, \"The State of Disability in India,\" 2024.",
  "Ministry of Education, Government of India, \"Unified District Information System for Education + (UDISE+) 2024-25,\" Department of Education & Literacy, 28 August 2025.",
  "Ministry of Statistics and Programme Implementation, Government of India, \"Persons with Disabilities (Divyangjan) in India – A Statistical Profile: 2021,\" National Statistical Office, 2021.",
  "Shruti Taneja-Johannson, Nidhi Singal, & Meera Samson, \"Education of Children with Disabilities in Rural Indian Government Schools: A Long Road to Inclusion,\" International Journal of Disability, Development and Education 70(5), 24 May 2021.",
  "Ajay Mahal et al, \"The Earnings and Conversion Gaps for Persons with Disability: Evidence from India,\" National Council of Applied Economic Research (NCAER) Working Paper 175, September 2024.",
  "Ministry of Statistics and Programme Implementation, Government of India, \"Persons with Disabilities (Divyangjan) in India – A Statistical Profile: 2021,\" National Statistical Office, 2021.",
  "World Health Organization (WHO), \"Global report on health equity for persons with disabilities,\" 2022.",
  "Suraj Singh Senjam & Amarjeet Singh, \"Addressing the Health Needs of People with Disabilities in India,\" Indian Journal of Public Health 64(1), January-March 2020.",
  "NCPEDP & Mphasis Foundation, \"Inclusive Health Coverage: White Paper on Disability, Discrimination and Health Insurance in India,\" 2025.",
  "Pavithra Jayasankar et al, \"Epidemiology of common mental disorders: Results from 'National Mental Health Survey' of India, 2016,\" Indian Journal of Psychiatry vol 64(1), January-February 2022.",
  "Bhavya Johari, \"India's Rights of Persons with Disabilities Act 2016: An Unfulfilled Promise,\" 24 June 2024.",
  "Shivani Gupta, Luc P de Witte, & Agnes Meershoek, \"Dimensions of invisibility: insights into the daily realities of persons with disabilities living in rural communities in India,\" Disability & Society 36(8), 9 July 2020.",
  "Rajvir & Dr Deepak Pancholi, \"Enhancing Electoral Participation for Persons with Disabilities: Insights from Rajasthan's State-Level Consultation,\" International Journal of Research and Review 12(8), 8 August 2025.",
  "The Centre for Internet & Society, \"Accessibility of Government Websites in India,\" 2021.",
  "Vivien Doll, Sumit Vij, & Jeroen Warner, \"How inclusive is disaster risk reduction? Perceptions and predicaments of persons with disabilities during disaster in Assam, India,\" Disasters 49(4), 5 July 2025.",
  "Taslim Uddin et al, \"Health impacts of climate-change related natural disasters on persons with disabilities in developing countries: A literature review,\" The Journal of Climate Change and Health 19, September-October 2024.",
  "Andrea M Wojnar, \"United efforts required to end violence against people with disabilities,\" Hindustan Times, 18 December 2024.",
  "Gobinda C Pal, \"Dalits with Disabilities: The Neglected Dimension of Social Exclusion,\" Indian Institute of Dalit Studies Working Paper Series IV(3), 2010.",
  "Nandita Saikia et al, \"Disability Divides in India: Evidence from the 2011 Census,\" PLoS One 11(8), 4 August 2016.",
  "Anjali Vyas, \"Removing barriers for persons with invisible disabilities,\" India Development Review, 27 June 2025.",
  "Abhilash Balakrishnan et al, \"The Rights of Persons with Disabilities Act 2016: Mental Health Implications,\" Indian Journal of Psychological Medicine 41(2), Mar-Apr 2019.",
  "Amnesty International, \"Clouds of injustice: Bhopal disaster 20 years on,\" 2004.",
  "Anita Ghai, Rethinking Disability in India, Routledge, 2015.",
  "Devi Vijay et al, \"Disability inclusion in Indian workplaces: Mapping the research landscape and exploring new terrains,\" IIMB Management Review 36(1), March 2024.",
  "James Staples, \"Doing disability through charity and philanthropy in contemporary South India,\" Contributions to Indian Sociology 52(2), 23 April 2018.",
  "Shivani Gupta, Luc P de Witte, & Agnes Meershoek, \"Dimensions of invisibility: insights into the daily realities of persons with disabilities living in rural communities in India,\" Disability & Society 36(8), 9 July 2020.",
  "World Health Organization & UNICEF, Global Report on Assistive Technology, 2022, available at: https://www.who.int/publications/i/item/9789240049451",
  "World Bank, Making Services Work for Poor People, World Development Report, 2004, available at: https://openknowledge.worldbank.org/handle/10986/5986",
  "The News Minute, 'Accessible' government websites still fail disabled users, 2023, available at: https://www.thenewsminute.com/article/accessible-government-websites-still-fail-disabled-users-181903",
  "Donella Meadows, Leverage Points: Places to Intervene in a System, Sustainability Institute, 1999, available at: https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/",
  "Stanford Social Innovation Review, The Nonprofit Starvation Cycle, 2009, available at: https://ssir.org/articles/entry/the_nonprofit_starvation_cycle",
  "Economic Times, India's nonprofits turn to 'everyday giving' amid funding crunch: report, 2025, available at: https://m.economictimes.indiatimes.com/news/company/corporate-trends/indias-nonprofits-turn-to-everyday-giving-amid-funding-crunch-report/articleshow/124331972.cms; see also Business Standard, Indian nonprofits turn to 'everyday giving' amid funding crunch: report, 2025, available at: https://www.business-standard.com/india-news/indian-nonprofits-turn-to-everyday-giving-amid-funding-crunch-report-125100600292_1.html",
  "Bain & Company and Dasra, 'India Philanthropy Report 2026', Bain & Company / Dasra, 2026.",
  "Nidhi Goyal and Raj Mariwala, 'Towards Inclusive and Intersectional Philanthropy: Centering Disability in India', The Wire, 2025.",
  "Bain & Company and Dasra, 'India Philanthropy Report 2024', Bain & Company / Dasra, 2024.",
  "Bajaj Finserv, 'Our Commitment to Society: Corporate Social Responsibility', Bajaj Finserv Annual Report 2024–25, 2025.",
  "Tech Mahindra Foundation, 'Disability Inclusion', Tech Mahindra Foundation, n.d.",
  "Bain & Company and Dasra, 'India Philanthropy Report 2025', Bain & Company / Dasra, 2025.",
  "Bain & Company and Dasra, 'India Philanthropy Report 2026', Bain & Company / Dasra, 2026.",
  "Priyanka, R., 'India's budget for people with disabilities is generous, but remains underutilised', Scroll.in, 2024.",
  "Supreme Court of India, 'In Re: Accessibility of Digital KYC for Persons with Disabilities', Supreme Court of India, 2025.",
  "ThePrint, 'Karnataka struck a blow to disability aid — students waiting for Braille kits, talking laptops', ThePrint, 2025.",
  "UNDP India, 'Bridging the Gap: Enabling Disability Inclusion in India's Private Sector Workplaces', UNDP India, 2025.",
  "Bridgespan Group, 'Funding Performance, Not Just Programs: A New Mindset for Nonprofit Funding', Bridgespan Group, 2020.",
  "India Development Review, 'The Polite Exclusions of Social Sector Conferences', India Development Review, 2026.",
  "UNICEF and Global Disability Summit Secretariat, 'Global Disability Inclusion Report 2025', UNICEF / Global Disability Summit, 2025.",
  "Bridgespan, \"Field Building for Population-Level Change,\" The Bridgespan Group, March 2020, https://www.bridgespan.org/getmedia/6d7adede-31e8-4a7b-ab87-3a4851a8abac/field-building-for-population-level-change-march-2020.pdf.",
];

export default function Chapter6() {
  return (
    <Layout>
      <div className="py-20 bg-chHero">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-7xl font-accent font-bold text-secondary leading-none mb-2">06</div>
            <h1 className="text-4xl md:text-5xl font-accent text-secondary leading-tight uppercase tracking-wide">
              Time Horizons for Disability Inclusion – From Immediate Access to Long-Term Systems Change
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">

          <section>
            <p className="text-lg leading-relaxed text-black mb-10">
              Change in disability inclusion does not happen at a uniform speed, necessarily. Some priorities require immediate strengthening within existing systems, while others depend on longer-term institutional and narrative shifts. The three horizons framework helps locate these efforts across time: from access to formal recognition and services, to institutional pathways for inclusion, to systems integration and field leadership. Read this way, the horizon model is a map of overlapping responsibilities that must deepen together.
            </p>

            <p className="text-lg leading-relaxed text-black mb-10">
              The Three Horizons framework offers a lens to understand this evolution as a set of overlapping and mutually reinforcing shifts in focus and ambition. Rather than moving on from earlier roles, ecosystem actors are required to operate across horizons simultaneously: strengthening existing systems, embedding inclusion within institutions, and enabling long-term alignment and leadership across the field. The cornerstones identified in this report act as pathways through these horizons, deepening inclusion for the future, while remaining grounded in present realities.
            </p>
            <img src="/ch6/ch6Fig11.png" alt="Three disability inclusion horizons" className="w-full object-contain mb-4" />
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
                  <p className="text-lg leading-relaxed text-black">{horizon.text}</p>
                </div>
              ))}
            </div>

            <p className="text-black text-xl leading-relaxed mb-10">
              Taken together, the Three Horizons underscore a central insight of this report: the future of disability inclusion in India will be built on holding the tension between immediate delivery and long‑term transformation. Progress will be driven by actors and investments capable of working across horizons, responding to urgent needs while simultaneously building the institutional, systemic, and leadership foundations required for durable inclusion.
            </p>
            <p className="text-black text-xl leading-relaxed mb-2 font-bold">Supporting this mandate is not only a strategic imperative for the sector, but a necessary condition for achieving equitable and inclusive development at scale.</p>
            <p className="text-black text-xl leading-relaxed mb-10">
              Please note: The Three Horizons Framework is a foresight model used to manage transformational change. Horizon 1 represents the current system and its declining relevance; Horizon 2 involves the "pockets of the future" or innovations that disrupt the status quo; and Horizon 3 envisions the long-term systemic shifts required for a sustainable future. Organizations use this to balance immediate needs with long-term field-building goals.
            </p>
          </section>

          {/* ANNEXURES */}
          <section>
            <h2 className="text-4xl font-accent font-bold text-secondary uppercase tracking-wide mb-10">Annexures</h2>

            <h3 className="text-2xl font-heading font-bold text-subHeading mb-8">Methodology Note</h3>

            <p className="text-lg leading-relaxed text-black mb-8">
              This report draws on a mixed-methods research design combining secondary research, primary qualitative inquiry, and a nonprofit diagnostic survey.
            </p>
            <p className="text-lg leading-relaxed text-black mb-8">
              The secondary research included a review of laws, policies, schemes, judicial developments, published literature, and available sectoral data relevant to disability inclusion in India. This helped situate the study within the current policy and institutional landscape and informed the analytical lenses used in the report.
            </p>
            <p className="text-lg leading-relaxed text-black mb-8">
              The primary research consisted of 23 semi-structured interviews with stakeholders from the disability ecosystem, including nonprofit leaders, disability rights practitioners, philanthropic actors, researchers, and other sector enablers. In addition, two FGDs were conducted with 9 nonprofit practitioners to deepen understanding of shared organizational realities, including collaboration, capacity constraints, and ecosystem gaps.
            </p>
            <p className="text-lg leading-relaxed text-black mb-8">
              To complement the qualitative inquiry, Dasra administered the <em>Disability NGOs Capacity & Ecosystem Diagnostic Survey</em>, which was circulated online through Dasra's networks as well as partner and ecosystem networks. It was designed as a structured diagnostic tool to gather information on organizational scale, budgets, geographic reach, leadership composition, disability focus, areas of work, collaboration patterns, operational bottlenecks, and short- and long-term capacity needs. Following final data cleaning, three duplicate survey responses were removed. The final analytical sample comprises 109 organizations.
            </p>
            <p className="text-lg leading-relaxed text-black mb-8">
              The study used purposive and convenience sampling across its primary research components. As a result, the findings are indicative rather than statistically representative of the disability ecosystem in India. Organizations and actors that are smaller, less networked, more informally organized, less digitally connected, or based in remote or conflict geographies may be underrepresented.
            </p>
            <p className="text-lg leading-relaxed text-black mb-10">
              <strong>Limitations</strong>: While this research surfaces critical patterns, tensions, and operating realities across the ecosystem, several limitations must be acknowledged. First, the study may underrepresent smaller, informal, or less networked actors who often operate outside established visibility. Furthermore, the analysis maintains an implicit focus on civil society; consequently, the specific roles of the family, community, the state, and the market in ensuring disability inclusion have been explored only in a limited manner. Finally, the findings and interpretations may be influenced by our inherent bias and positioning as a sector intermediary within the philanthropic landscape.
            </p>
          </section>

          {/* ACKNOWLEDGEMENTS */}
          <section>
            <h3 className="text-3xl font-heading font-bold text-subHeading mb-8">Acknowledgements</h3>

            <p className="text-lg leading-relaxed text-black mb-8">
              This report was developed as part of HSBC India's partnership with Dasra to strengthen the disability ecosystem in India through a landscape study, stakeholder consultations, a nonprofit diagnostic survey, and the design of a longer-term ecosystem-strengthening initiative. It builds on a shared commitment to examining disability inclusion not as a narrow sectoral concern, but as a structural question that cuts across institutions, lifecycles, and systems.
            </p>
            <p className="text-lg leading-relaxed text-black mb-8">
              We are grateful to HSBC India for their support, partnership, and belief in the importance of investing in evidence, institutional strengthening, and long-horizon thinking for disability inclusion. We are especially thankful to Aloka Majumdar for her stewardship of this work and for helping anchor the report within a broader commitment to strategic, sustained action on disability inclusion. The research and report were led by the Research and Insights team at Dasra, in collaboration with Cohorts & Training, and Catalytic Philanthropy teams, with contributions spanning research design, stakeholder engagement, analysis, synthesis, and strategic direction. The broader project team and leadership team guiding this work included Neera Nundy, Deval Sanghavi, Ami Misra, Pratyaksha Jha, Yash Thakoor, Rukmini Banerjee, Arshiya Uraizee, Unaiza Rajan, Kavneet Kaur, Jija Dutt, Harshita Maheshwari, Shrestha Satpathy, Divya Puri, Jessica Bernard, Gaurvi Singhvi, and Ayush Mehrotra. We extend our sincere appreciation to the nonprofit leaders, disability rights practitioners, funders, researchers, intermediaries, and other ecosystem actors who shared their time, experiences, and reflections with us through interviews, focus group discussions, and consultations. Their insights made it possible to understand the disability ecosystem through the operational realities, tensions, and forms of care, translation, and continuity that hold it together in practice. The report also draws on the responses of 109 organizations that participated in the online survey, whose contributions helped anchor the analysis in patterns visible across the broader nonprofit landscape. We would like to extend our sincere gratitude to Atypical Advantage for serving as the accessibility consultant for this report and for their valuable guidance in helping make this publication more inclusive and accessible.
            </p>
            <p className="text-lg leading-relaxed text-black mb-10">
              Above all, we acknowledge persons with disabilities, caregivers, and community actors whose lives, labor, and daily negotiations with exclusion sit beneath every institutional question this report asks. Even where they are not always directly visible in the research process, their realities shape the field, and their experiences remain central to any meaningful account of disability inclusion in India. We are conscious that this report draws on knowledge produced through lived experience, movement-building, practice, and long years of work across the ecosystem. We hope it contributes, in however partial a way, to efforts aimed at building a more accountable, inclusive, and dignified social order.
            </p>
          </section>

          {/* LIST OF SECTOR EXPERTS */}
          <section>
            <h3 className="text-2xl font-heading font-bold text-chHeading mb-8">List of Sector Experts and Practitioners (A-Z)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
              {sectorExperts.map((expert, i) => (
                // <p key={i} className="text-base text-black leading-relaxed">• {expert}</p>
                <p
                  key={i}
                  className={`text-base text-black leading-relaxed ${expert ? "before:content-['•'] before:mr-2" : ""
                    }`}
                >
                  {expert}
                </p>
              ))}
            </div>
          </section>

          {/* LIST OF SURVEY RESPONDENTS */}
          <section>
            <h3 className="text-2xl font-heading font-bold text-chHeading mb-8">List of Survey Respondents (A-Z)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
              {surveyRespondents.map((org, i) => (
                // <p key={i} className="text-base text-black leading-relaxed">• {org}</p>
                <p
                  key={i}
                  className={`text-base text-black leading-relaxed ${org ? "before:content-['•'] before:mr-2" : ""
                    }`}
                >
                  {org}
                </p>
              ))}
            </div>
          </section>

          {/* REFERENCES */}
          <section>
            <h2 className="text-4xl font-accent font-bold text-secondary uppercase tracking-wide mb-10">References</h2>
            <ol className="space-y-4 text-sm text-black leading-relaxed list-none">
              {references.map((ref, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 font-bold text-gray-500">{i + 1}.</span>
                  <span>{ref}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/chapter-5" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Chapter 05
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
