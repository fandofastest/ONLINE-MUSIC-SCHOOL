import type { Metadata } from "next";

import Container from "../components/Container";

export const metadata: Metadata = {
  title: "Technology & Learning Approach",
  description:
    "How THE ONLINE MUSIC SCHOOL LTD delivers educational content digitally, and how we use AI responsibly for learning support.",
};

export default function TechnologyLearningApproachPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Technology & learning approach
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We use digital platforms to deliver educational content in a clear,
              consistent way. Our approach supports independent learners and
              encourages steady, responsible progress.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-slate-900">
                Digital platform delivery
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our content is delivered through digital platforms, making it
                accessible across devices. We aim for simple navigation, clear
                language and structured learning pathways.
              </p>

              <h2 className="mt-8 text-sm font-semibold text-slate-900">
                Educational content design
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Lessons and materials are written to support comprehension, with a
                focus on practical application. We prioritise accuracy, clarity and
                educational usefulness.
              </p>

              <h2 className="mt-8 text-sm font-semibold text-slate-900">
                Ethical and responsible use of AI
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Where AI is used, it is used responsibly and in support of the
                learning experience. We do not use AI to claim credentials or
                certifications, and we avoid misleading statements about what AI
                can do.
              </p>

              <h2 className="mt-8 text-sm font-semibold text-slate-900">
                Original, royalty-free instrumental sounds
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                AI-assisted tools may generate original, royalty-free instrumental
                sounds that can be used for practice and focus. These sounds are
                designed for learning support and are not intended to reproduce or
                distribute copyrighted music.
              </p>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">Principles</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                <li>Clear educational purpose</li>
                <li>Respect for intellectual property</li>
                <li>Transparent and responsible AI usage</li>
                <li>Accessible digital learning</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
