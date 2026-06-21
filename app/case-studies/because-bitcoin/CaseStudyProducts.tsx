import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "BecauseBitcoin.com",
    url: "https://becausebitcoin.com/",
    tag: "Media & membership hub",
    description:
      "The public home of the BB desk — articles, Premium Discord, Academy, and the product ecosystem that ties everything together. Designed and built by Mired to convert visitors into members and keep the brand cohesive across every touchpoint.",
    image: "/images/case-studies/because-bitcoin/becausebitcoin-home.png",
    features: [
      "Seven-analyst desk showcase",
      "Premium membership funnel",
      "Articles, Academy & product discovery",
      "Designed by Mired — footer credit on live site",
    ],
  },
  {
    name: "BB Terminal",
    url: "https://bbterminal.com/",
    tag: "Market command center",
    description:
      "One terminal for every chart. Real-time degen dashboards, multi-chain pool discovery, portfolio tracking across wallets, and liquidation heatmaps layered over candlesticks — built for traders who need speed, not signup funnel theater.",
    image: "/images/case-studies/because-bitcoin/bb-terminal-home.png",
    features: [
      "Degen screener & multi-chain pools",
      "On-chain charts with BB Score & security scans",
      "Unified portfolio & multi-wallet support",
      "Liquidation heatmap overlays",
    ],
  },
  {
    name: "BB Trader X",
    url: "https://www.bbtraderx.com/dashboard",
    tag: "AI strategy & automation",
    description:
      "The next-generation trading platform — exchange integration, custom strategy builder, AI-assisted workflows, and a dashboard built for the workflows serious traders run every session. Premium members get first access; we ship builds continuously.",
    image: "/images/case-studies/because-bitcoin/bb-traderx-dashboard.png",
    features: [
      "Dashboard, exchange & strategy modules",
      "AI Builder for automated workflows",
      "Leaderboard & performance tracking",
      "Purpose-built for active crypto trading",
    ],
  },
];

const CaseStudyProducts = () => {
  return (
    <section className="bg-skin-yellow-200 py-16 sm:py-20 border-b-2 border-black">
      <div className="container">
        <div className="max-w-[650px] mb-12 lg:mb-16">
          <h2 className="heading-1 normal-case text-4xl md:text-5xl">
            What we built
          </h2>
          <p className="text-xl mt-4">
            Three production platforms — each one live, each one maintained, each
            one scaling with the business.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.name}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <span className="inline-block text-xs font-manrope font-bold uppercase tracking-wider bg-white border border-black px-3 py-1 rounded-md mb-4">
                  {product.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-clash_display font-semibold mb-4">
                  {product.name}
                </h3>
                <p className="text-base sm:text-lg font-manrope text-black/80 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm sm:text-base font-manrope"
                    >
                      <span className="text-skin-blue-800 mt-1">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-manrope font-semibold text-skin-blue-800 hover:underline"
                >
                  Open live site →
                </Link>
              </div>

              <div
                className={`border-2 border-black rounded-[20px] overflow-hidden shadow-[8px_8px_0_0_#000] ${
                  index % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <Image
                  src={product.image}
                  alt={`${product.name} dashboard screenshot`}
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyProducts;
