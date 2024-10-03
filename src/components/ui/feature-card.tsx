interface FeatureCardProps {
  title: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export function FeatureCard({ title, features }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="text-left">
            <h3 className="font-medium text-gray-900 mb-2">
              {feature.icon} {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}