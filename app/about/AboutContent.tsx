import AboutSectionRow from "./AboutSectionRow";

const DIFFERENTIATORS = [
  {
    title: "End-to-end product builders",
    description:
      "Unlike most agencies, we build products from concept through production — not just wireframes and handoffs. We’ve shipped CRMs, commerce platforms, internal tools, and AI integrations that real teams use every day.",
  },
  {
    title: "Fluent in your stack",
    description:
      "We level with you on the tooling you already run. We assess your stack directly, identify where AI creates leverage, and recommend solutions that fit — without ripping out what’s working.",
  },
  {
    title: "AI that 10x’s output",
    description:
      "We’ve used AI to multiply our own productivity and pass that speed on to clients. Agile iteration, extensive testing, and production-grade delivery — not demos that never ship.",
  },
  {
    title: "Enterprise-proven",
    description:
      "We’ve worked with small and mid-sized companies and at enterprise scale — platforms serving millions of users. We can talk with executives with confidence, grounded in real delivery experience.",
  },
  {
    title: "Beyond integrations",
    description:
      "Because we’ve lived the full product lifecycle, we extend into marketing — email campaigns, audience targeting, and spend optimization where every word and dollar matters.",
  },
  {
    title: "Meticulous, fast, diligent",
    description:
      "If you want a partner who moves quickly but cares deeply about output quality, we’re built for that. Everything we touch — code, copy, campaigns — is treated as something that has impact.",
  },
];

const PRINCIPLES = [
  "End-to-end builders",
  "Stack-fluent",
  "Agile & tested",
  "Enterprise-proven",
  "Marketing that converts",
  "Meticulous output",
];

const AboutContent = () => {
  return (
    <>
      <section className="bg-white py-16 sm:py-20 border-b-2 border-black">
        <div className="container">
          <AboutSectionRow
            image={{
              src: "/images/design.svg",
              alt: "Product design and development",
              width: 400,
              height: 400,
            }}
            variant="illustration"
            imageBg="bg-skin-lavender"
          >
            <h2 className="heading-1 normal-case text-3xl sm:text-4xl md:text-5xl mb-6">
              We were shipping before AI was the headline
            </h2>
            <div className="space-y-5 text-base sm:text-lg font-manrope text-black/80 leading-relaxed">
              <p>
                Most agencies talk about digital transformation. We were already
                building products and putting them in production — CRMs, commerce
                stacks, internal tools — long before AI became the default
                conversation starter.
              </p>
              <p>
                That foundation matters. When we look at your stack, we&apos;re
                not guessing from a playbook. We assess your tooling directly,
                map where friction lives, and determine what solutions actually
                make sense in the age of AI — wired into Slack, Salesforce,
                HubSpot, and the systems your team already depends on.
              </p>
            </div>
          </AboutSectionRow>
        </div>
      </section>

      <section className="bg-skin-yellow-200 py-16 sm:py-20 border-b-2 border-black">
        <div className="container">
          <div className="max-w-[650px] mb-10 lg:mb-14">
            <h2 className="heading-1 normal-case text-3xl sm:text-4xl md:text-5xl">
              What sets us apart
            </h2>
            <p className="text-lg sm:text-xl font-manrope text-black/80 mt-4">
              Technical depth, executive confidence, and a track record that
              spans startups to enterprise — with the same attention to detail
              throughout.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="border-2 border-black rounded-10 bg-white p-6 sm:p-8 flex flex-col gap-3 shadow-[4px_4px_0_0_#000]"
              >
                <h3 className="text-lg font-clash_display font-semibold">
                  {item.title}
                </h3>
                <p className="text-base font-manrope text-black/75 flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-skin-pink-50 py-16 sm:py-20 border-b-2 border-black">
        <div className="container">
          <AboutSectionRow
            image={{
              src: "/images/digital_marketing.svg",
              alt: "Digital marketing and campaign strategy",
              width: 400,
              height: 400,
            }}
            variant="illustration"
            imageBg="bg-skin-lavender"
          >
            <h2 className="heading-1 normal-case text-3xl sm:text-4xl md:text-5xl mb-6">
              From the boardroom to the inbox
            </h2>
            <div className="space-y-5 text-base sm:text-lg font-manrope text-black/80 leading-relaxed">
              <p>
                We&apos;ve partnered with teams serving millions of users — large
                ops organizations, high-growth brands, and companies where
                downtime isn&apos;t an option. We can speak at an executive level
                because we&apos;ve been in the room where architecture, budget, and
                delivery timelines get decided.
              </p>
              <p>
                That same discipline extends into marketing. We&apos;ve run email
                campaigns for enterprise clients where every word is scrutinized
                — watching how spend is allocated, tailoring audiences precisely,
                and treating each touchpoint as something that moves the needle.
              </p>
              <p>
                Integrations and product shipping are our core. Marketing is how
                we help you launch what we build — because we believe everything
                you do has an impact, and it should be measured.
              </p>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {PRINCIPLES.map((principle) => (
                <li
                  key={principle}
                  className="text-sm font-manrope font-semibold border-2 border-black bg-white px-4 py-2 rounded-md"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </AboutSectionRow>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
