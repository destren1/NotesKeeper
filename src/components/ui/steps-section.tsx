interface StepsSectionProps {
  title: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}

export function StepsSection({ title, steps }: StepsSectionProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">{step.number}</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}