import type { Metadata } from "next";

import Container from "../components/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact details for THE ONLINE MUSIC SCHOOL LTD (London, United Kingdom).",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Contact
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              For general enquiries, please contact us using the details below.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-6">
            <dl className="grid gap-6 text-sm">
              <div>
                <dt className="text-slate-500">Company name</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  THE ONLINE MUSIC SCHOOL LTD
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">City</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  London, United Kingdom
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Email</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  <a
                    href="mailto:contact@theonlinemusicschool.co.uk"
                    className="underline hover:text-slate-800"
                  >
                    contact@theonlinemusicschool.co.uk
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 max-w-3xl text-sm leading-6 text-slate-600">
            <p>
              Please do not send sensitive personal information by email. If you
              are contacting us regarding a specific product or service, include
              relevant details so we can respond efficiently.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
