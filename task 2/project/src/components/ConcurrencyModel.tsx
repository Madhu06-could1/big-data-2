import React from 'react';

const ConcurrencyModel = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-blue-500 text-white p-3">
            <h3 className="font-semibold">Pod Configuration</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-slate-600">API Pods:</span>
                <span className="font-medium">6 pods</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Threads per pod:</span>
                <span className="font-medium">16 threads</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Max connections/pod:</span>
                <span className="font-medium">200</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Each pod handles:</span>
                <span className="font-medium">~85 rps</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Total capacity:</span>
                <span className="font-medium">510 rps</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-green-500 text-white p-3">
            <h3 className="font-semibold">Load Distribution</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-slate-600">Algorithm:</span>
                <span className="font-medium">Least Connections</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Health check:</span>
                <span className="font-medium">Every 5 seconds</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Session stickiness:</span>
                <span className="font-medium">None (stateless)</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Connection draining:</span>
                <span className="font-medium">30 seconds</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Idle timeout:</span>
                <span className="font-medium">60 seconds</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-red-500 text-white p-3">
            <h3 className="font-semibold">Back-Pressure Plan</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-slate-600">Circuit breaker:</span>
                <span className="font-medium">5xx errors {'>'} 20%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Rate limiting:</span>
                <span className="font-medium">550 rps total</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Request timeout:</span>
                <span className="font-medium">250 ms</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Retry policy:</span>
                <span className="font-medium">2x with backoff</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Queue overflow:</span>
                <span className="font-medium">503 response</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-lg mb-4">Concurrency Analysis</h3>
        
        <p className="text-slate-700 mb-4">
          With 500 rps as our peak load and a 300ms response time target, we need sufficient parallelism to handle incoming requests without queueing. Here's how we calculated the optimal pod count:
        </p>
        
        <div className="bg-slate-50 p-4 rounded-lg mb-4">
          <pre className="text-sm font-mono">
            # Concurrency required = Requests per second × Average response time
            C = 500 rps × 0.2 s = 100 concurrent requests
            
            # With 16 threads per pod and 80% target utilization
            Pods needed = Concurrency / (Threads per pod × Target utilization)
            Pods needed = 100 / (16 × 0.8) = 7.8 ≈ 8 pods
            
            # But we can optimize with Redis caching to lower avg. response time
            With caching: Avg response time = 0.12 s
            C = 500 rps × 0.12 s = 60 concurrent requests
            Pods needed = 60 / (16 × 0.8) = 4.7 ≈ 5 pods
            
            # Adding 1 extra pod for redundancy
            Final pod count = 6 pods
          </pre>
        </div>
        
        <div className="text-sm text-slate-600">
          <p><strong>Note:</strong> We provision 6 pods during peak periods, but scale down to 3 pods during normal traffic (100 rps). This provides a balance between performance, redundancy, and cost-efficiency.</p>
        </div>
      </div>
    </div>
  );
};

export default ConcurrencyModel;