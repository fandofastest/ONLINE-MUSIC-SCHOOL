import type { Metadata } from "next";

import Container from "../components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for THE ONLINE MUSIC SCHOOL LTD. We collect minimal data, do not sell user data, and comply with UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This Privacy Policy explains how THE ONLINE MUSIC SCHOOL LTD handles
              personal data when you use our website and related educational
              services.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="max-w-3xl space-y-8 text-sm leading-6 text-slate-600">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Our approach to privacy
              </h2>
              <p className="mt-2">
                We aim to collect only the information we need to operate and
                improve our educational services. We do not sell user data.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Data we may collect
              </h2>
              <p className="mt-2">Depending on how you interact with us, we may collect:</p>
              <ul className="mt-3 grid gap-2">
                <li>Basic contact details when you email us (such as your email address)</li>
                <li>Limited technical data (such as browser type and approximate location derived from IP) for security and performance</li>
                <li>Website usage information through analytics, if enabled</li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">How we use data</h2>
              <ul className="mt-3 grid gap-2">
                <li>To respond to enquiries</li>
                <li>To maintain and secure our website</li>
                <li>To improve educational content delivery</li>
              </ul>
              <p className="mt-3">
                We use data for educational and operational purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">UK GDPR compliance</h2>
              <p className="mt-2">
                We process personal data in line with the UK General Data Protection
                Regulation (UK GDPR) and applicable UK data protection law.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">Your rights</h2>
              <p className="mt-2">
                You may have rights to access, correct, or delete personal data, and
                to object to certain processing. If you would like to exercise your
                rights, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">Contact</h2>
              <p className="mt-2">
                If you have privacy questions, contact: 
                <span className="font-medium text-slate-900">
                  contact@theonlinemusicschool.co.uk
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-900">Important note</p>
              <p className="mt-2">
                This page is provided for general information. If your usage
                involves additional services (such as a mobile app), there may be a
                separate privacy notice specific to that service.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
