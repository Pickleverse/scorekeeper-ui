'use client';
import FeatureCard from "./FeatureCard";
import { FeatureContent } from "./FeatureContent";

const Features = () => {
    return (
      <section id="features" className="py-20 px-4 bg-neutral-950">
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Us
          </h2>
          <div className="flex gap-12 justify-center">
            {FeatureContent.map((feature, index) => {
              return (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              )
            })}
          </div>
        </div>
      </section>
    )
}

export default Features;