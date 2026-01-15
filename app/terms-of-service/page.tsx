import type { Metadata } from "next";

import Container from "../components/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for THE ONLINE MUSIC SCHOOL LTD, including educational use disclaimer, intellectual property, and governing law (England and Wales).",
};

export default function TermsOfServicePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              These Terms of Service govern your use of the THE ONLINE MUSIC SCHOOL
              LTD website and related educational services.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="max-w-3xl space-y-8 text-sm leading-6 text-slate-600">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Educational use disclaimer
              </h2>
              <p className="mt-2">
                Our content and tools are provided for educational purposes only.
                We do not claim accreditation and we do not provide accredited
                qualifications.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                No guarantee of outcomes
              </h2>
              <p className="mt-2">
                Learning outcomes vary. We do not guarantee that you will achieve
                specific results, levels, or performance improvements.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Intellectual property
              </h2>
              <p className="mt-2">
                Unless stated otherwise, all website content, educational materials
                and software features are owned by THE ONLINE MUSIC SCHOOL LTD or
                its licensors. You may not copy, distribute, or create derivative
                works without permission.
              </p>
              <p className="mt-3">
                We do not provide copyrighted music. Any AI-assisted sound tools
                are intended to generate original, royalty-free instrumental sounds
                for learning support.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Limitation of liability
              </h2>
              <p className="mt-2">
                To the extent permitted by law, THE ONLINE MUSIC SCHOOL LTD will not
                be liable for any indirect, incidental, special, consequential or
                punitive damages, or any loss of profits or revenues.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Governing law
              </h2>
              <p className="mt-2">
                These Terms are governed by the laws of England and Wales. Any
                disputes will be subject to the exclusive jurisdiction of the
                courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">Contact</h2>
              <p className="mt-2">
                For questions about these Terms, please email:
                <span className="font-medium text-slate-900">
                  contact@theonlinemusicschool.co.uk
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
