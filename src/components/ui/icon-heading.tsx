interface IconHeadingProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export function IconHeading({ icon, title, subtitle }: IconHeadingProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
    </div>
  );
}