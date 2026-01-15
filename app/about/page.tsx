import type { Metadata } from "next";

import Container from "../components/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about THE ONLINE MUSIC SCHOOL LTD and our mission to support accessible online music education using modern digital tools.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              About THE ONLINE MUSIC SCHOOL LTD
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We are a UK-based education company focused on online music education
              and digital music learning. Our work is guided by clear pedagogy,
              accessible delivery, and practical support for learners.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-slate-900">Our mission</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our mission is to make music learning more approachable for people
                studying independently. We aim to provide structured learning
                resources that support steady progress through practice, reflection
                and understanding.
              </p>

              <h2 className="mt-8 text-sm font-semibold text-slate-900">
                Accessibility and clarity
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We design our content to be easy to follow, with a focus on
                practical outcomes such as improving listening skills, building
                theory foundations, and supporting focused practice sessions.
              </p>

              <h2 className="mt-8 text-sm font-semibold text-slate-900">
                Technology as learning support
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We use modern digital tools, including AI where appropriate, to
                support the learning experience. AI is used as a support tool, not
                as a replacement for learning, and we avoid exaggerated claims
                about outcomes.
              </p>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">Company</p>
              <dl className="mt-4 grid gap-3 text-sm">
                <div>
                  <dt className="text-slate-500">Name</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    THE ONLINE MUSIC SCHOOL LTD
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Country</dt>
                  <dd className="mt-1 font-medium text-slate-900">United Kingdom</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Registered Office</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    London, England
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">SIC</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    85590 - Other education
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
