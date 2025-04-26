import React from 'react';
import { AlertTriangle, Server, Database, Archive } from 'lucide-react';

const FailureStory = () => {
  return (
    <div className="space-y-6">
      <div className="p-5 bg-amber-50 border border-amber-200 rounded-lg">
        <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center">
          <AlertTriangle size={20} className="mr-2" />
          Failure Scenarios Overview
        </h3>
        <p className="text-slate-700">
          If a pod crashes, traffic automatically routes to the remaining healthy pods through the load balancer's health checks. 
          In-flight requests might fail, but client retries (built into the crane and yard apps) will resubmit to a different pod. 
          If Redis dies, we fall back to direct database queries with a slightly higher latency but maintaining functionality. 
          Database failures are mitigated through read replicas for queries, while write failures are queued in Kafka for 
          retry when the database recovers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-slate-800 text-white p-3 flex items-center">
            <Server size={18} className="mr-2" />
            <h3 className="font-semibold">API Pod Failure</h3>
          </div>
          <div className="p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm text-slate-700">Pod crashes or becomes unresponsive</span>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Kubernetes detects failure via health probe</span>
                </div>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Load balancer removes pod from rotation</span>
                </div>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm text-slate-700">In-flight requests fail with 5xx error</span>
                </div>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Client retry logic sends request to another pod</span>
                </div>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Kubernetes starts replacement pod</span>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-slate-700">System returns to full capacity</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-slate-800 text-white p-3 flex items-center">
            <Database size={18} className="mr-2" />
            <h3 className="font-semibold">Redis Cache Failure</h3>
          </div>
          <div className="p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm text-slate-700">Redis instance becomes unavailable</span>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Connection errors detected by API pods</span>
                </div>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Circuit breaker opens Redis connections</span>
                </div>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Fallback to direct database queries</span>
                </div>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Response times increase (150-200ms)</span>
                </div>
              </div>
              <div className="ml-6 border-l-2 border-slate-200 pl-4 py-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Redis replica promoted or new instance started</span>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-slate-700">Circuit breaker closes, caching resumes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-slate-800 text-white p-3 flex items-center">
          <Archive size={18} className="mr-2" />
          <h3 className="font-semibold">Database Failure</h3>
        </div>
        <div className="p-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
              <span className="text-sm text-slate-700">Primary database instance fails</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="border border-slate-200 rounded-lg p-3">
                <h4 className="font-medium text-slate-800 mb-2">Read Operations</h4>
                <div className="ml-2 border-l-2 border-slate-200 pl-4 py-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-slate-700">Automatic failover to read replica</span>
                  </div>
                </div>
                <div className="ml-2 border-l-2 border-slate-200 pl-4 py-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-slate-700">Stale reads possible (1-10s lag)</span>
                  </div>
                </div>
                <div className="ml-2 border-l-2 border-slate-200 pl-4 py-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-slate-700">Redis cache continues serving recent data</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Yard map service uninterrupted</span>
                </div>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-3">
                <h4 className="font-medium text-slate-800 mb-2">Write Operations</h4>
                <div className="ml-2 border-l-2 border-slate-200 pl-4 py-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                    <span className="text-sm text-slate-700">Write operations fail temporarily</span>
                  </div>
                </div>
                <div className="ml-2 border-l-2 border-slate-200 pl-4 py-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-slate-700">Writes sent to Kafka for persistence</span>
                  </div>
                </div>
                <div className="ml-2 border-l-2 border-slate-200 pl-4 py-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-slate-700">Read replica promoted to primary (1-2 min)</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-slate-700">Kafka consumer processes queued writes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailureStory;