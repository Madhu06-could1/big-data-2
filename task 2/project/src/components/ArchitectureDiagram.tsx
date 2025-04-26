import React from 'react';

const ArchitectureDiagram = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-4xl h-[600px] border border-slate-200 rounded-lg bg-slate-50 p-4 overflow-hidden">
        {/* External Traffic */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white border border-slate-200 rounded-lg p-3 shadow-sm component-node">
          <div className="text-center">
            <div className="text-sm font-semibold mb-1">External Traffic</div>
            <div className="text-xs text-slate-500">HTTPS Requests</div>
          </div>
        </div>
        
        {/* Connection Line */}
        <svg className="absolute top-[72px] left-1/2 transform -translate-x-1/2" width="2" height="50" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="0" x2="1" y2="50" stroke="#CBD5E1" strokeWidth="2" className="connection-line" />
          <polygon points="1,50 -3,42 5,42" fill="#CBD5E1" />
        </svg>
        
        {/* Load Balancer */}
        <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2 bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-sm component-node">
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-blue-700">Load Balancer</div>
            <div className="text-xs text-slate-500">NGINX / HAProxy</div>
          </div>
        </div>
        
        {/* Connection Lines to API Pods */}
        <svg className="absolute top-[198px] left-1/2 transform -translate-x-1/2" width="300" height="50" xmlns="http://www.w3.org/2000/svg">
          {/* Left line */}
          <path d="M 0,0 Q 0,25 -100,50" stroke="#CBD5E1" strokeWidth="2" fill="none" className="connection-line" />
          <polygon points="-100,50 -105,42 -95,42" fill="#CBD5E1" />
          
          {/* Middle line */}
          <line x1="0" y1="0" x2="0" y2="50" stroke="#CBD5E1" strokeWidth="2" className="connection-line" />
          <polygon points="0,50 -4,42 4,42" fill="#CBD5E1" />
          
          {/* Right line */}
          <path d="M 0,0 Q 0,25 100,50" stroke="#CBD5E1" strokeWidth="2" fill="none" className="connection-line" />
          <polygon points="100,50 95,42 105,42" fill="#CBD5E1" />
        </svg>
        
        {/* API Pods */}
        <div className="absolute top-[250px] left-[calc(50%-150px)] transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm component-node pulse">
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-green-700">API Pod 1</div>
            <div className="text-xs text-slate-500">Spring Boot</div>
          </div>
        </div>
        
        <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm component-node pulse">
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-green-700">API Pod 2</div>
            <div className="text-xs text-slate-500">Spring Boot</div>
          </div>
        </div>
        
        <div className="absolute top-[250px] left-[calc(50%+150px)] transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm component-node pulse">
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-green-700">API Pod 3</div>
            <div className="text-xs text-slate-500">Spring Boot</div>
          </div>
        </div>
        
        {/* Connection Lines to Redis and DataStore */}
        <svg className="absolute top-[318px] left-1/2 transform -translate-x-1/2" width="400" height="50" xmlns="http://www.w3.org/2000/svg">
          {/* Left line to Redis */}
          <path d="M 0,0 Q 0,25 -150,50" stroke="#CBD5E1" strokeWidth="2" fill="none" className="connection-line" />
          <polygon points="-150,50 -155,42 -145,42" fill="#CBD5E1" />
          
          {/* Right line to DataStore */}
          <path d="M 0,0 Q 0,25 150,50" stroke="#CBD5E1" strokeWidth="2" fill="none" className="connection-line" />
          <polygon points="150,50 145,42 155,42" fill="#CBD5E1" />
        </svg>
        
        {/* Redis Cache */}
        <div className="absolute top-[370px] left-[calc(50%-150px)] transform -translate-x-1/2 bg-red-50 border border-red-200 rounded-lg p-3 shadow-sm component-node">
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-red-700">Redis Cache</div>
            <div className="text-xs text-slate-500">Hot Yard-Map Reads</div>
          </div>
        </div>
        
        {/* DataStore */}
        <div className="absolute top-[370px] left-[calc(50%+150px)] transform -translate-x-1/2 bg-purple-50 border border-purple-200 rounded-lg p-3 shadow-sm component-node">
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-purple-700">Data Store</div>
            <div className="text-xs text-slate-500">PostgreSQL</div>
          </div>
        </div>
        
        {/* Connection Line to Kafka (optional) */}
        <svg className="absolute top-[438px] left-1/2 transform -translate-x-1/2" width="2" height="50" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="0" x2="1" y2="50" stroke="#CBD5E1" strokeWidth="2" className="connection-line" />
          <polygon points="1,50 -3,42 5,42" fill="#CBD5E1" />
        </svg>
        
        {/* Kafka */}
        <div className="absolute top-[490px] left-1/2 transform -translate-x-1/2 bg-yellow-50 border border-yellow-200 rounded-lg p-3 shadow-sm component-node">
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-yellow-700">Kafka</div>
            <div className="text-xs text-slate-500">Async Logging & Retries</div>
          </div>
        </div>
        
        {/* Monitoring Stack - Right Side */}
        <div className="absolute top-[190px] right-8 bg-indigo-50 border border-indigo-200 rounded-lg p-3 shadow-sm component-node" style={{ width: '120px' }}>
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-indigo-700">Prometheus</div>
            <div className="text-xs text-slate-500">Metrics Collection</div>
          </div>
        </div>
        
        <div className="absolute top-[260px] right-8 bg-indigo-50 border border-indigo-200 rounded-lg p-3 shadow-sm component-node" style={{ width: '120px' }}>
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-indigo-700">Grafana</div>
            <div className="text-xs text-slate-500">Visualization</div>
          </div>
        </div>
        
        <div className="absolute top-[330px] right-8 bg-indigo-50 border border-indigo-200 rounded-lg p-3 shadow-sm component-node" style={{ width: '120px' }}>
          <div className="text-center">
            <div className="text-sm font-semibold mb-1 text-indigo-700">Alertmanager</div>
            <div className="text-xs text-slate-500">Alert Notifications</div>
          </div>
        </div>
        
        {/* Connection Lines from API Pods to Monitoring */}
        <svg className="absolute top-[280px] left-[calc(50%+100px)]" width="100" height="2" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="1" x2="100" y2="1" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5,5" />
          <polygon points="100,1 92,-3 92,5" fill="#CBD5E1" />
        </svg>
      </div>
      
      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded-sm mr-2"></div>
          <span className="text-sm text-slate-700">Load Balancing</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-100 border border-green-200 rounded-sm mr-2"></div>
          <span className="text-sm text-slate-700">Application Services</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-100 border border-red-200 rounded-sm mr-2"></div>
          <span className="text-sm text-slate-700">Caching Layer</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded-sm mr-2"></div>
          <span className="text-sm text-slate-700">Persistence</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-100 border border-yellow-200 rounded-sm mr-2"></div>
          <span className="text-sm text-slate-700">Message Queue</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-indigo-100 border border-indigo-200 rounded-sm mr-2"></div>
          <span className="text-sm text-slate-700">Monitoring</span>
        </div>
        <div className="flex items-center col-span-2">
          <div className="w-10 h-0 border-t-2 border-slate-300 border-dashed mr-2"></div>
          <span className="text-sm text-slate-700">Monitoring Data Flow</span>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;