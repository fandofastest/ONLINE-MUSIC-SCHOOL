export default function Home() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-700">
              United Kingdom - Private Limited Company
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Online music education, designed for modern digital learning.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              THE ONLINE MUSIC SCHOOL LTD is a UK-based education company focused
              on online music education and digital music learning. We develop and
              support learning experiences that help people practise, understand
              and explore music using clear content and modern tools.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/what-we-offer"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                View what we offer
              </a>
              <a
                href="/technology-learning-approach"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Our learning approach
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Education-first
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We focus on accessible learning resources in music theory and
                practical skills, designed for self-paced study.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Digital delivery
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Content is delivered through digital platforms to support
                flexible learning on modern devices.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Responsible AI support
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Where used, AI supports learning by generating original,
                royalty-free instrumental sounds for practice and focus.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-900">
              Company details
            </p>
            <dl className="mt-4 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
              <div>
                <dt className="text-slate-500">Company Name</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  THE ONLINE MUSIC SCHOOL LTD
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Registered Office</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  London, England
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Company Type</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  Private Limited Company
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">SIC</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  85590 - Other education
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
