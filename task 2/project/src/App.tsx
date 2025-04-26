import React from 'react';
import { Menu, ChevronRight } from 'lucide-react';
import SystemDesign from './components/SystemDesign';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-slate-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">System Design: High-Traffic API Architecture</h1>
          <button 
            className="md:hidden p-2 rounded hover:bg-slate-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
          <nav className="hidden md:flex space-x-6">
            <a href="#diagram" className="hover:text-blue-300 transition-colors">Architecture</a>
            <a href="#components" className="hover:text-blue-300 transition-colors">Components</a>
            <a href="#concurrency" className="hover:text-blue-300 transition-colors">Concurrency</a>
            <a href="#failure" className="hover:text-blue-300 transition-colors">Failure Handling</a>
            <a href="#scaling" className="hover:text-blue-300 transition-colors">Scaling</a>
            <a href="#metrics" className="hover:text-blue-300 transition-colors">Metrics</a>
          </nav>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-slate-700 text-white">
          <nav className="flex flex-col p-4">
            <a href="#diagram" className="py-2 hover:text-blue-300 transition-colors" onClick={() => setMenuOpen(false)}>Architecture</a>
            <a href="#components" className="py-2 hover:text-blue-300 transition-colors" onClick={() => setMenuOpen(false)}>Components</a>
            <a href="#concurrency" className="py-2 hover:text-blue-300 transition-colors" onClick={() => setMenuOpen(false)}>Concurrency</a>
            <a href="#failure" className="py-2 hover:text-blue-300 transition-colors" onClick={() => setMenuOpen(false)}>Failure Handling</a>
            <a href="#scaling" className="py-2 hover:text-blue-300 transition-colors" onClick={() => setMenuOpen(false)}>Scaling</a>
            <a href="#metrics" className="py-2 hover:text-blue-300 transition-colors" onClick={() => setMenuOpen(false)}>Metrics</a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Traffic Profile Requirements</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left">Metric</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Normal Day</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Peak Hour</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-medium">Requests per second</td>
                    <td className="border border-slate-300 px-4 py-2">100 rps</td>
                    <td className="border border-slate-300 px-4 py-2">500 rps</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-medium">95th‑percentile response budget</td>
                    <td className="border border-slate-300 px-4 py-2">≤ 300 ms</td>
                    <td className="border border-slate-300 px-4 py-2">Same (no grace)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-medium">Data growth</td>
                    <td className="border border-slate-300 px-4 py-2">Yard map refresh every 10s (tiny JSON)</td>
                    <td className="border border-slate-300 px-4 py-2">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="mr-4 bg-blue-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Stateless API</h3>
                <p className="text-slate-600">Each call must complete without relying on local session data</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="mr-4 bg-green-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Blue-Green Deploys</h3>
                <p className="text-slate-600">Ship new versions with zero downtime</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="mr-4 bg-purple-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Observability</h3>
                <p className="text-slate-600">Must know P95 latency and error rate at any moment</p>
              </div>
            </div>
          </div>
          
          <SystemDesign />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 High-Traffic API System Design</p>
        </div>
      </footer>
    </div>
  );
}

export default App;