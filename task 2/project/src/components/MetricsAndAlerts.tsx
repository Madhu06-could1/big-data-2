import React from 'react';
import { BarChart3, BellRing, Clock } from 'lucide-react';

const MetricsAndAlerts = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-indigo-600 text-white p-3 flex items-center">
            <BarChart3 size={18} className="mr-2" />
            <h3 className="font-semibold">Key Metrics</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="bg-indigo-50 p-3 rounded-lg">
                <h4 className="font-medium text-indigo-800 mb-2">Performance Metrics</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">P95 Response Time</span>
                    <p className="text-xs text-slate-500">Tracks our primary SLO of 300ms response time</p>
                  </li>
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">Requests Per Second (RPS)</span>
                    <p className="text-xs text-slate-500">Current traffic volume per pod and system-wide</p>
                  </li>
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">Error Rate</span>
                    <p className="text-xs text-slate-500">Percentage of 4xx and 5xx responses</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Resource Metrics</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">CPU Utilization</span>
                    <p className="text-xs text-slate-500">Per pod and average across the cluster</p>
                  </li>
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">Memory Usage</span>
                    <p className="text-xs text-slate-500">Per pod and total system memory</p>
                  </li>
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">Network I/O</span>
                    <p className="text-xs text-slate-500">Bytes in/out per pod and total</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Cache Metrics</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">Cache Hit Ratio</span>
                    <p className="text-xs text-slate-500">Percentage of requests served from Redis</p>
                  </li>
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">Cache Response Time</span>
                    <p className="text-xs text-slate-500">Redis query response time (should be {'<'} 10ms)</p>
                  </li>
                  <li className="text-sm text-slate-700">
                    <span className="font-medium">Cache Evictions</span>
                    <p className="text-xs text-slate-500">Number of keys evicted due to memory pressure</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-red-600 text-white p-3 flex items-center">
            <BellRing size={18} className="mr-2" />
            <h3 className="font-semibold">Alert Configuration</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="border border-red-200 rounded-lg p-3">
                <h4 className="font-medium text-red-800 mb-2">P95 Latency Alert</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Condition:</div>
                    <div className="col-span-2 text-slate-700">P95 {'>'} 280ms for 2 minutes</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Severity:</div>
                    <div className="col-span-2 text-slate-700">Warning</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Action:</div>
                    <div className="col-span-2 text-slate-700">Notify engineering team via Slack</div>
                  </div>
                </div>
              </div>
              
              <div className="border border-red-200 rounded-lg p-3">
                <h4 className="font-medium text-red-800 mb-2">Error Rate Alert</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Condition:</div>
                    <div className="col-span-2 text-slate-700">Error rate {'>'} 1% for 1 minute</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Severity:</div>
                    <div className="col-span-2 text-slate-700">Critical</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Action:</div>
                    <div className="col-span-2 text-slate-700">PagerDuty alert + Slack notification</div>
                  </div>
                </div>
              </div>
              
              <div className="border border-red-200 rounded-lg p-3">
                <h4 className="font-medium text-red-800 mb-2">Pod Resource Alert</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Condition:</div>
                    <div className="col-span-2 text-slate-700">CPU {'>'} 85% for 5 minutes</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Severity:</div>
                    <div className="col-span-2 text-slate-700">Warning</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Action:</div>
                    <div className="col-span-2 text-slate-700">Notify engineering team via Slack</div>
                  </div>
                </div>
              </div>
              
              <div className="border border-red-200 rounded-lg p-3">
                <h4 className="font-medium text-red-800 mb-2">SLO Breach Alert</h4>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Condition:</div>
                    <div className="col-span-2 text-slate-700">P95 {'>'} 300ms for 5 minutes</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Severity:</div>
                    <div className="col-span-2 text-slate-700">Critical</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium text-slate-700">Action:</div>
                    <div className="col-span-2 text-slate-700">PagerDuty alert + automatic scaling</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 text-white p-3 flex items-center">
          <Clock size={18} className="mr-2" />
          <h3 className="font-semibold">SLO Dashboard Example</h3>
        </div>
        <div className="p-4">
          <div className="relative border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-700 text-white text-sm py-2 px-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">/pickSpot API Service Status</div>
                <div className="text-xs">Last 24 hours</div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">P95 Response Time</div>
                  <div className="text-xl font-bold text-slate-800">187 ms</div>
                  <div className="flex items-center text-xs text-green-600">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>37.7% below limit</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">Request Rate</div>
                  <div className="text-xl font-bold text-slate-800">127 rps</div>
                  <div className="flex items-center text-xs text-green-600">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>25.6% increase</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">Error Rate</div>
                  <div className="text-xl font-bold text-slate-800">0.02%</div>
                  <div className="flex items-center text-xs text-green-600">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span>0.01% decrease</span>
                  </div>
                </div>
              </div>
              
              <div className="h-40 bg-slate-100 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Simulated response time graph */}
                  <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
                    <path
                      d="M0,100 C20,80 40,120 60,110 C80,100 100,150 120,130 C140,110 160,120 180,100 C200,80 220,70 240,90 C260,110 280,130 300,110 C320,90 340,60 360,70 C380,80 400,90 400,100"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                    />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4,4" />
                    <text x="380" y="95" fontSize="8" fill="#6B7280">300ms</text>
                  </svg>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs font-medium text-slate-700 mb-2">Recent Alerts</div>
                  <div className="text-xs text-slate-500">No alerts in the last 24 hours</div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-xs font-medium text-slate-700 mb-2">SLO Compliance</div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-xs text-slate-500">Monthly Uptime: 99.998%</div>
                      <div className="text-xs text-slate-500">Target: 99.95%</div>
                    </div>
                    <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-200">
                      <div style={{ width: "99.99%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-xs text-slate-500">Response Time SLO: 99.97%</div>
                      <div className="text-xs text-slate-500">Target: 99.9%</div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                      <div style={{ width: "99.97%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsAndAlerts;