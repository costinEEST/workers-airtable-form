import { PencilAltIcon } from "@heroicons/react/outline";

import { Form } from "./Form";

const REPO_URL = "https://github.com/signalnerve/workers-airtable-form";

const ExternalLink = ({ children, hoverColor = "text-teal-800", href }) => (
  <a
    className={`underline hover:${hoverColor} transition-all`}
    href={href}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

export default function FormPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-warm-gray-50">
        <nav
          className="relative flex items-center justify-between px-6 pt-6 mx-auto max-w-7xl xl:px-8"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <button>
                <span className="sr-only">Workflow</span>
                <PencilAltIcon className="w-auto h-8 text-teal-800 sm:h-10" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-warm-gray-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                Workers Airtable Form Example
              </h1>
              <p className="max-w-3xl mt-6 text-xl text-warm-gray-500">
                An example form that uses serverless functions, provided by{" "}
                <ExternalLink href="https://workers.dev">
                  Cloudflare Workers
                </ExternalLink>
                , to submit form data to an{" "}
                <ExternalLink href="https://airtable.com">
                  Airtable
                </ExternalLink>{" "}
                table.{" "}
                <ExternalLink href={REPO_URL}>
                  Check out the source to learn more.
                </ExternalLink>
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className="relative pb-24 bg-white"
          aria-labelledby="contactHeading"
        >
          <div
            className="absolute w-full h-1/2 bg-warm-gray-50"
            aria-hidden="true"
          />
          {/* Decorative dot pattern */}
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <svg
              className="absolute top-0 right-0 z-0 transform translate-x-1/2 -translate-y-16 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-warm-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contactHeading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative px-6 py-10 overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Example form
                  </h3>
                  <p className="max-w-3xl mt-6 text-base text-teal-50">
                    A fully-featured HTML5 <code>form</code> element that
                    submits data to a serverless function. This data is added to
                    an{" "}
                    <ExternalLink
                      hoverColor="text-teal-300"
                      href="https://airtable.com"
                    >
                      Airtable
                    </ExternalLink>{" "}
                    table, which can be connected with various integrations and
                    extensions to notify you on new submissions and changes.
                  </p>
                </div>

                {/* Contact form */}
                <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-warm-gray-900">
                    Send us a message
                  </h3>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-warm-gray-900" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <p className="text-base text-warm-gray-400 xl:text-center">
            Workers Airtable Form Example is{" "}
            <ExternalLink hoverColor="text-warm-gray-200" href={REPO_URL}>
              open source on GitHub
            </ExternalLink>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
