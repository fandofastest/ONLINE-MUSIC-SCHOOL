import Link from "next/link";

import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              THE ONLINE MUSIC SCHOOL LTD
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Private Limited Company
              <br />
              Registered Office: London, England
              <br />
              SIC: 85590 - Other education
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Pages</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-slate-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/what-we-offer" className="hover:text-slate-900">
                  What We Offer
                </Link>
              </li>
              <li>
                <Link
                  href="/technology-learning-approach"
                  className="hover:text-slate-900"
                >
                  Technology & Learning Approach
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-slate-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-slate-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Notes</p>
            <p className="mt-3 text-sm text-slate-600 leading-6">
              This website provides company information and describes our approach
              to online music education. We do not claim accreditation and we do
              not provide copyrighted music.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} THE ONLINE MUSIC SCHOOL LTD. All rights
            reserved.
          </p>
          <p>London, United Kingdom</p>
        </div>
      </Container>
    </footer>
  );
}
