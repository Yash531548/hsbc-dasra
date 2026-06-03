import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Foreword() {
  return (
    <Layout>
      <div className="bg-muted min-h-screen py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-3xl bg-white shadow-sm border border-border rounded-2xl p-8 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-heading font-bold text-secondary mb-2 uppercase tracking-wide">Foreword</h1>
            <p className="text-lg text-primary font-medium mb-12">by ALOKA MAJUMDAR, MD, Head of Sustainability, HSBC India</p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="my-10 p-8 bg-muted border-l-4 border-primary rounded-r-xl">
                <p className="text-2xl font-heading font-bold text-primary italic leading-snug m-0">
                  "The cost of exclusion is far greater than the cost of inclusion."
                </p>
              </div>

              <p>
                For persons with disabilities, exclusion is designed into the fabric of everyday life. It reveals itself in the systemic choices that determine who participates and who is left out: how classrooms are built, how work is organized, how public services function and whose voices inform them. Disability itself is only part of the constraint. The greater burden lies in negotiating with barriers that persist through design, where infrastructure, social attitudes, policy and power intersect.
              </p>

              <p>
                The scale of that exclusion is difficult to ignore. Nearly one in six people globally lives with a disability. In India, many remain on the margins of education, employment and public life, unable to access fundamental protections and opportunities to lead a secure and dignified life. This is particularly alarming given the economic cost of failing to build a disability-inclusive economy has been estimated at over USD 210 billion.
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

              <p>
                Equal opportunity and decent work for people with disabilities deserves dedicated and sustained action. We hope this report contributes to that action, by elevating the organizations leading the way, by helping funders see the gaps more clearly, and by making the case for strategic, sustained investment.
              </p>

              <p className="font-semibold text-secondary">
                At HSBC India, we believe a stronger push for disability inclusion needs to become a part of the vision toward a Viksit Bharat by 2047.
              </p>
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