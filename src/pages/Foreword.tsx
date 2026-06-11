import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Foreword() {
  return (
    <Layout>
      <div className="py-20 bg-chHero" >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-5xl md:text-7xl font-accent  text-secondary leading-none mb-2">Foreword</div>
            <h1 className="text-3xl md:text-5xl font-accent text-secondary leading-tight uppercase tracking-wide">
              <p className="text-lg md:text-xl text-secondary font-extrabold  font-sans">ALOKA MAJUMDAR</p>
              <p className="text-base md:text-lg  font-sans">MD, Head of Sustainability</p>
              <p className="text-base md:text-lg font-sans ">HSBC India</p>
            </h1> 

          </motion.div>
        </div>
      </div>
      <div className="bg-white min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl bg-white   rounded-2xl ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <h1 className="text-3xl font-heading font-bold text-chapter mb-2 uppercase tracking-wide">Foreword</h1> */}

            {/* <div className="bg-secondary  w-full h-px my-1 mb-8" /> */}
            <div className="prose md:prose-lg max-w-none text-black space-y-6">

              <p>
                The cost of exclusion is far greater than the cost of inclusion. For persons with disabilities, exclusion is designed into the fabric of everyday life. It reveals itself in the systemic choices that determine who participates and who is left out: how classrooms are built, how work is organized, how public services function and whose voices inform them. Disability itself is only part of the constraint. The greater burden lies in negotiating with barriers that persist through design, where infrastructure, social attitudes, policy and power intersect.
              </p>

              <p>
                The scale of that exclusion is difficult to ignore. Nearly one in six people globally lives with a disability. In India, many remain on the margins of education, employment and public life, unable to access fundamental protections and opportunities to lead a secure and dignified life.i This is particularly alarming given the economic cost of failing to build a disability-inclusive economy has been estimated at over USD 210 billion.ii While the Rights of Persons with Disabilities Act, 2016 marked an important shift toward a rights-based framework, a lot remains to be done so that we are able to not only make a difference in the lives of people with disability but also create a supporting ecosystem for them.iii
              </p>

              <p>
                This report is therefore both timely and necessary. It presents a snapshot on nonprofits across India that are working every day to expand opportunity, dignity and agency for persons with disabilities. Their work reminds us that to have meaningful impact, disability inclusion must sit at the heart of all social development work.
              </p>

              <p>
                Despite a strong legislative foundation and evolving accessibility standards, persons with disabilities in India continue to face persistent disadvantages in literacy, education, and workforce participation.
              </p>

              <p>
                At HSBC India, this understanding is shaping and will continue to evolve our own journey. As we have sought to deepen and diversify our engagement with disability inclusion, one lesson has become increasingly clear: advancing inclusion requires strengthening the field of disability inclusion itself. This includes investing in leadership, institutional resilience, accessible practices, evidence generation, and the ability to build movements that can drive collective action and systemic reform.
              </p>

              <p>
                While capital flows into the social sector have steadily increased over the past decade, philanthropic commitment has yet to fully align with the scale and complexity of the challenge of disability. To bridge this gap, grant capital must urgently find its way to the interconnected ecosystem of nonprofits working across this space. The next phase of philanthropy will be defined by its ability to embed inclusion by design across strategies, solutions, and systems already being championed by the Government of India.
              </p>
              <p>Equal opportunity and decent work for people with disabilities deserves dedicated and sustained action. We hope this report contributes to that action, by elevating the organizations leading the way, by helping funders see the gaps more clearly, and by making the case for strategic, sustained investment. </p>
              <p>
                At HSBC India, we believe a stronger push for disability inclusion needs to become a part of the vision toward a Viksit Bharat by 2047.
              </p>

              <div className="border-t border-border pt-4 mt-6">
                <ol className="list-[lower-roman] list-inside space-y-2 text-sm text-gray-600 p-0">
                  <li>
                    United Nations Development Programme (UNDP) India. (2024).{" "}
                    <a href="https://www.undp.org/india/blog/bridging-gap-enabling-disability-inclusion-indias-private-sector-workplaces" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                      Bridging the Gap: Enabling Disability Inclusion in India's Private Sector Workplaces.
                    </a>
                  </li>
                  <li>
                    World Bank. (2019).{" "}
                    <a href="https://www.worldbank.org/en/news/video/2019/06/11/disability-inclusion-matters-for-all" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                      Disability Inclusion Matters for All [Video].
                    </a>{" "}
                    Washington, DC: World Bank.
                  </li>
                  <li>
                    Organiser. (2026).{" "}
                    <a href="https://organiser.org/2026/02/22/340768/bharat/from-welfare-to-workforce-rethinking-disability-inclusion-in-indias-growth-story/" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                      From Welfare to Workforce: Rethinking Disability Inclusion in India's Growth Story.
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <Link href="/executive-summary" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium">
              Executive Summary <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}