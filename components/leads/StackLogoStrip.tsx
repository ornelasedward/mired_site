import IntegrationLogo from "@/components/home/IntegrationLogo";
import type { StackLogo } from "@/lib/landing-logos";

interface StackLogoStripProps {
  heading: string;
  logos: StackLogo[];
  className?: string;
}

export default function StackLogoStrip({
  heading,
  logos,
  className,
}: StackLogoStripProps) {
  return (
    <div className={className}>
      <p className="text-center text-sm font-manrope font-semibold uppercase tracking-wider text-skin-blue-800 mb-5">
        {heading}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg border-2 border-black bg-white p-2.5"
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
    </div>
  );
}
