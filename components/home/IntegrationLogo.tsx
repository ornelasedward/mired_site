import Image from "next/image";

interface IntegrationLogoProps {
  src: string;
  alt: string;
  color?: string;
  size?: "sm" | "lg";
}

const sizeClasses = {
  sm: "h-7 w-7",
  lg: "h-9 w-9",
};

const IntegrationLogo = ({
  src,
  alt,
  color,
  size = "sm",
}: IntegrationLogoProps) => {
  const dimension = sizeClasses[size];

  if (color) {
    return (
      <div
        className={`${dimension} shrink-0`}
        style={{
          backgroundColor: color,
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
        title={alt}
        aria-label={alt}
        role="img"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size === "lg" ? 36 : 28}
      height={size === "lg" ? 36 : 28}
      className={`${dimension} shrink-0 object-contain`}
    />
  );
};

export default IntegrationLogo;
