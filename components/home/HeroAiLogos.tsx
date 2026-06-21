import IntegrationLogo from "./IntegrationLogo";

const heroAiLogos = [
  {
    src: "/images/ai-logos/claude.svg",
    alt: "Claude",
    color: "#D97757",
  },
  {
    src: "/images/ai-logos/openai.svg",
    alt: "ChatGPT",
    color: "#000000",
  },
  {
    src: "/images/ai-logos/googlegemini.svg",
    alt: "Google Gemini",
    color: "#1C69FF",
  },
  {
    src: "/images/ai-logos/meta.svg",
    alt: "Meta AI",
    color: "#0467DF",
  },
];

const HeroAiLogos = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {heroAiLogos.map((logo) => (
        <div
          key={logo.alt}
          className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white p-2.5 shadow-[2px_2px_0_0_#000]"
          title={logo.alt}
        >
          <IntegrationLogo
            src={logo.src}
            alt={logo.alt}
            color={logo.color}
            size="lg"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroAiLogos;
