import React from 'react';

const ScalingStory = () => {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden bg-white border border-slate-200 rounded-lg shadow-sm">
        <div className="p-4 md:p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Horizontal Auto-Scaling Rules</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="font-medium text-blue-800 mb-2">CPU Utilization</div>
                <div className="text-sm text-slate-700">
                  <p><span className="font-medium">Trigger:</span> CPU {'>'} 70% for 1 minute</p>
                  <p><span className="font-medium">Scale up:</span> Add 1 pod</p>
                  <p><span className="font-medium">Cooldown:</span> 3 minutes</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="font-medium text-green-800 mb-2">Memory Usage</div>
                <div className="text-sm text-slate-700">
                  <p><span className="font-medium">Trigger:</span> Memory {'>'} 80% for 1 minute</p>
                  <p><span className="font-medium">Scale up:</span> Add 1 pod</p>
                  <p><span className="font-medium">Cooldown:</span> 3 minutes</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="font-medium text-purple-800 mb-2">Request Rate</div>
                <div className="text-sm text-slate-700">
                  <p><span className="font-medium">Trigger:</span> {'>'} 80 rps per pod for 2 minutes</p>
                  <p><span className="font-medium">Scale up:</span> Add 2 pods</p>
                  <p><span className="font-medium">Cooldown:</span> a minutes</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <div className="font-medium text-amber-800 mb-2">Response Time</div>
                <div className="text-sm text-slate-700">
                  <p><span className="font-medium">Trigger:</span> P95 latency {'>'} 250ms for 2 minutes</p>
                  <p><span className="font-medium">Scale up:</span> Add 1 pod</p>
                  <p><span className="font-medium">Cooldown:</span> 5 minutes</p>
                  <p><span className="font-medium">Note:</span> This is a defensive scaling trigger to ensure we maintain our 300ms SLO</p>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <div className="font-medium text-red-800 mb-2">Scale Down Policy</div>
                <div className="text-sm text-slate-700">
                  <p><span className="font-medium">Trigger:</span> CPU {'<'} 30% for 10 minutes</p>
                  <p><span className="font-medium">Scale down:</span> Remove 1 pod</p>
                  <p><span className="font-medium">Cooldown:</span> 5 minutes</p>
                  <p><span className="font-medium">Minimum pods:</span> 3 pods (never scale below)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Predictive Scaling</h3>
          
          <div className="space-y-3">
            <p className="text-slate-700 text-sm">
              In addition to reactive auto-scaling, we implement predictive scaling based on historical patterns:
            </p>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <ul className="space-y-2 list-disc pl-5 text-sm text-slate-700">
                <li>Pre-emptively scale up at 7:30 AM as yard operations begin</li>
                <li>Increase capacity 30 minutes before known ship arrival times</li>
                <li>Schedule extra capacity during monsoon season (Jun-Sep)</li>
                <li>Use machine learning to predict traffic patterns based on historical data</li>
              </ul>
            </div>
            
            <div className="text-xs text-slate-500 mt-2">
              Predictive scaling helps us avoid the delay between traffic increases and reactive scaling, ensuring we maintain our SLO during predictable traffic surges.
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Database Scaling</h3>
          
          <div className="space-y-3">
            <p className="text-slate-700 text-sm">
              Our database scaling strategy focuses on read scaling and connection management:
            </p>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <ul className="space-y-2 list-disc pl-5 text-sm text-slate-700">
                <li>Connection pooling via PgBouncer with 20-50 connections per API pod</li>
                <li>3 read replicas for distributing read queries</li>
                <li>Vertical scaling of primary database for write throughput</li>
                <li>Partitioning of historical data for efficient queries</li>
                <li>Redis caching to reduce database load by ~80% for read operations</li>
              </ul>
            </div>
            
            <div className="text-xs text-slate-500 mt-2">
              The database is typically not the bottleneck due to our caching strategy, but we ensure it can scale to handle the full load if the cache fails.
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Scaling Timeline</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-2 px-4 text-left text-sm font-medium text-slate-700">Traffic Level</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-slate-700">Pod Count</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-slate-700">Redis Capacity</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-slate-700">Response Time (P95)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-2 px-4 text-sm text-slate-700">Normal (100 rps)</td>
                <td className="py-2 px-4 text-sm text-slate-700">3 pods</td>
                <td className="py-2 px-4 text-sm text-slate-700">2GB RAM</td>
                <td className="py-2 px-4 text-sm text-slate-700">~120ms</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="py-2 px-4 text-sm text-slate-700">Medium (250 rps)</td>
                <td className="py-2 px-4 text-sm text-slate-700">4 pods</td>
                <td className="py-2 px-4 text-sm text-slate-700">4GB RAM</td>
                <td className="py-2 px-4 text-sm text-slate-700">~180ms</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-slate-700">High (400 rps)</td>
                <td className="py-2 px-4 text-sm text-slate-700">5 pods</td>
                <td className="py-2 px-4 text-sm text-slate-700">6GB RAM</td>
                <td className="py-2 px-4 text-sm text-slate-700">~220ms</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="py-2 px-4 text-sm text-slate-700">Peak (500 rps)</td>
                <td className="py-2 px-4 text-sm text-slate-700">6 pods</td>
                <td className="py-2 px-4 text-sm text-slate-700">8GB RAM</td>
                <td className="py-2 px-4 text-sm text-slate-700">~250ms</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-slate-700">Emergency (600+ rps)</td>
                <td className="py-2 px-4 text-sm text-slate-700">8 pods</td>
                <td className="py-2 px-4 text-sm text-slate-700">12GB RAM</td>
                <td className="py-2 px-4 text-sm text-slate-700">~280ms</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-xs text-slate-500">
          Our scaling rules ensure that we maintain our 300ms P95 response time SLO even under maximum load conditions, with a 20ms buffer to account for network variance.
        </div>
      </div>
    </div>
  );
};

export default ScalingStory;