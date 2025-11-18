'use client';
const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
    return (
      <div className="bg-white p-8 w-1/7 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
        <div className="text-5xl mb-4">{ icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {title}
              </h3>
              <p className="text-gray-600">
                {description}
              </p>
            </div>
    );
}

export default FeatureCard;