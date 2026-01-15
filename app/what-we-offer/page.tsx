import type { Metadata } from "next";

import Container from "../components/Container";

export const metadata: Metadata = {
  title: "What We Offer",
  description:
    "An overview of learning resources and digital tools provided by THE ONLINE MUSIC SCHOOL LTD for online music education.",
};

export default function WhatWeOfferPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What we offer
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We provide online music education resources and digital learning
              support. Our services are designed for educational use and do not
              include formal qualifications.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Online music learning resources
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Structured guidance, educational explanations, and practice
                materials designed to support self-paced learning.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Music theory education
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Concepts presented in clear language, helping learners build a
                solid foundation in reading, listening and understanding music.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Digital music learning support
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tools and features designed to help you practise consistently and
                stay focused while learning through digital platforms.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-slate-900">
                AI-assisted instrumental sound tools
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Optional AI-assisted features that generate original, royalty-free
                instrumental sounds for practice and focus.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-sm font-semibold text-slate-900">
              What we do not offer
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              <li>No accredited degrees, diplomas or certificates</li>
              <li>No claims of famous instructors</li>
              <li>No copyrighted music distribution</li>
              <li>No guarantees of specific outcomes</li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
