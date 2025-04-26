import React, { useEffect, useState } from 'react';
import ArchitectureDiagram from './ArchitectureDiagram';
import ComponentList from './ComponentList';
import ConcurrencyModel from './ConcurrencyModel';
import FailureStory from './FailureStory';
import ScalingStory from './ScalingStory';
import MetricsAndAlerts from './MetricsAndAlerts';

const SystemDesign = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    diagram: false,
    components: false,
    concurrency: false,
    failure: false,
    scaling: false,
    metrics: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setVisibleSections(prev => ({ ...prev, [id]: true }));
            
            // Add the visible class for animation
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      {/* Architecture Diagram Section */}
      <section id="diagram" className="bg-white rounded-lg shadow-md p-6 mb-8 section-animate">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          Architecture Diagram
        </h2>
        <p className="text-slate-600 mb-6">
          The following diagram illustrates the high-level architecture designed to handle 500 rps with a 300ms response time budget.
        </p>
        <ArchitectureDiagram />
      </section>
      
      {/* Component List Section */}
      <section id="components" className="bg-white rounded-lg shadow-md p-6 mb-8 section-animate">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          Component List
        </h2>
        <p className="text-slate-600 mb-6">
          Each component has been carefully selected to ensure optimal performance, scalability, and reliability.
        </p>
        <ComponentList />
      </section>
      
      {/* Concurrency Model Section */}
      <section id="concurrency" className="bg-white rounded-lg shadow-md p-6 mb-8 section-animate">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
          Concurrency Model
        </h2>
        <p className="text-slate-600 mb-6">
          How we'll distribute 500 rps efficiently across multiple API pods to maintain performance.
        </p>
        <ConcurrencyModel />
      </section>
      
      {/* Failure Story Section */}
      <section id="failure" className="bg-white rounded-lg shadow-md p-6 mb-8 section-animate">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
          Failure Story
        </h2>
        <p className="text-slate-600 mb-6">
          How the system handles different types of failures while maintaining service availability.
        </p>
        <FailureStory />
      </section>
      
      {/* Scaling Story Section */}
      <section id="scaling" className="bg-white rounded-lg shadow-md p-6 mb-8 section-animate">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
          Scaling Story
        </h2>
        <p className="text-slate-600 mb-6">
          Automatic scaling rules to handle traffic spikes while maintaining performance.
        </p>
        <ScalingStory />
      </section>
      
      {/* Metrics and Alerts Section */}
      <section id="metrics" className="bg-white rounded-lg shadow-md p-6 mb-8 section-animate">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
          Metrics and Alerts
        </h2>
        <p className="text-slate-600 mb-6">
          Key metrics to monitor and alerts to set up for ensuring the system meets its SLOs.
        </p>
        <MetricsAndAlerts />
      </section>
    </div>
  );
};

export default SystemDesign;