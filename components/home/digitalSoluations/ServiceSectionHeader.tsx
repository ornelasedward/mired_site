interface ServiceSectionHeaderProps {
  label: string;
  subtitle: string;
}

const ServiceSectionHeader = ({ label, subtitle }: ServiceSectionHeaderProps) => {
  return (
    <div className="space-y-3">
      <span className="inline-block border-2 border-black rounded-md px-4 py-1.5 text-xl sm:text-2xl font-manrope font-bold normal-case">
        {label}
      </span>
      <p className="text-2xl font-manrope font-bold">{subtitle}</p>
    </div>
  );
};

export default ServiceSectionHeader;
