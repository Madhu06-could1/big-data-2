import React from 'react';

const ComponentList = () => {
  const components = [
    {
      name: 'Load Balancer',
      tech: 'NGINX / AWS ALB',
      reasons: [
        'High-performance request distribution',
        'Built-in health checks and circuit breaking',
        'Handles TLS termination to offload encryption from API servers',
        'Supports blue-green deployments seamlessly',
        'Efficient connection pooling to backend services'
      ]
    },
    {
      name: 'API Service',
      tech: 'Spring Boot',
      reasons: [
        'Optimized for minimal startup time and resource footprint',
        'WebFlux for reactive processing handles high concurrency efficiently',
        'Built-in actuator endpoints for health, metrics, and monitoring',
        'Designed for stateless operation with distributed session support',
        'Extensive production-ready features like graceful shutdown'
      ]
    },
    {
      name: 'Container Orchestration',
      tech: 'Kubernetes',
      reasons: [
        'Auto-scaling based on CPU/memory metrics',
        'Self-healing through automatic restarts and rescheduling',
        'Simple rolling updates and blue-green deployments',
        'Built-in service discovery and load balancing',
        'Resource limits and requests to avoid noisy neighbor issues'
      ]
    },
    {
      name: 'Caching Layer',
      tech: 'Redis',
      reasons: [
        'Sub-millisecond response times for hot reads',
        'Cached yard map refreshed every 10s to reduce database load',
        'Cluster mode for high availability',
        'Pub/sub capabilities for cache invalidation',
        'Memory-optimized data structures for efficient storage'
      ]
    },
    {
      name: 'Message Queue',
      tech: 'Kafka',
      reasons: [
        'Handles retries for failed operations without blocking the API',
        'Asynchronous logging for detailed request analysis',
        'Acts as buffer during traffic spikes to maintain performance',
        'Enables event-driven architecture for extensibility',
        'High throughput with persistent storage'
      ]
    },
    {
      name: 'Database',
      tech: 'PostgreSQL',
      reasons: [
        'ACID-compliant for data consistency',
        'Connection pooling via PgBouncer for efficient resource usage',
        'Partitioned tables to handle growing historical data',
        'Read replicas to scale queries horizontally',
        'JSON support for flexible data model evolution'
      ]
    },
    {
      name: 'Monitoring Stack',
      tech: 'Prometheus + Grafana',
      reasons: [
        'Time-series data collection with minimal overhead',
        'Pre-calculated percentiles (P95, P99) for latency monitoring',
        'Rich visualization capabilities for operational dashboards',
        'Powerful alerting with customizable thresholds',
        'Historical data for trend analysis and capacity planning'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {components.map((component, index) => (
        <div key={index} className="bg-slate-50 rounded-lg p-4 transition-shadow hover:shadow-md">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/4 mb-2 md:mb-0">
              <h3 className="text-lg font-semibold text-slate-800">{component.name}</h3>
              <div className="text-sm text-blue-600 font-medium">{component.tech}</div>
            </div>
            <div className="w-full md:w-3/4">
              <ul className="list-disc pl-5 space-y-1">
                {component.reasons.map((reason, idx) => (
                  <li key={idx} className="text-slate-700 text-sm">{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentList;