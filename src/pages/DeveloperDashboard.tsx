import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Star,
  Code,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle,
  Plus,
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';

const DeveloperDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const stats = [
    { label: 'Active Projects', value: '4', icon: Code, color: 'text-teal-600', bg: 'bg-teal-100' },
    { label: 'Total Earnings', value: '$12,450', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Client Rating', value: '4.9', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { label: 'Hours This Month', value: '168', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'E-commerce React App',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      progress: 75,
      dueDate: '2025-01-15',
      amount: '$3,500'
    },
    {
      id: 2,
      title: 'Mobile Dashboard UI',
      client: 'StartupXYZ',
      status: 'Under Review',
      progress: 100,
      dueDate: '2025-01-10',
      amount: '$2,800'
    },
    {
      id: 3,
      title: 'API Integration',
      client: 'Digital Agency',
      status: 'In Progress',
      progress: 45,
      dueDate: '2025-01-20',
      amount: '$1,950'
    }
  ];

  const recentBids = [
    {
      id: 1,
      title: 'Full Stack Web Application',
      budget: '$5,000 - $8,000',
      proposals: 12,
      timeAgo: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      title: 'React Native Mobile App',
      budget: '$3,000 - $5,000',
      proposals: 8,
      timeAgo: '1 day ago',
      status: 'shortlisted'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'text-blue-600 bg-blue-100';
      case 'Under Review':
        return 'text-yellow-600 bg-yellow-100';
      case 'Completed':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome Developer! 👋</h1>
            <p className="text-teal-100 text-lg">Ready to build something amazing today?</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">$2,450</div>
            <div className="text-teal-100">This month's earnings</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Projects & Bids */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Projects */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Projects</h2>
            <button className="text-teal-600 hover:text-teal-500 flex items-center gap-1 text-sm font-medium">
              View All <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.client}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Due: {project.dueDate}</span>
                  <span className="font-semibold text-green-600">{project.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Bids */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Bids</h2>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-1 text-sm">
              <Plus className="w-4 h-4" />
              New Bid
            </button>
          </div>
          <div className="space-y-4">
            {recentBids.map((bid) => (
              <div key={bid.id} className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{bid.title}</h3>
                  {bid.status === 'shortlisted' && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {bid.status === 'pending' && (
                    <Clock className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">{bid.budget}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{bid.proposals} proposals</span>
                  <span>{bid.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Developer Profile</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                MS
              </div>
              <h3 className="text-xl font-bold text-gray-900">Muskan Sewal</h3>
              <p className="text-gray-600 mb-4">Full Stack React Developer</p>
              <div className="flex items-center justify-center gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-500">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-900 hover:text-gray-700">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                defaultValue="Passionate full-stack developer with 5+ years of experience building modern web applications. Specialized in React.js, Node.js, and cloud technologies."
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Tech Stack</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>React.js</option>
                  <option>Angular</option>
                  <option>Vue.js</option>
                  <option>Node.js</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Senior (5+ years)</option>
                  <option>Mid-level (2-5 years)</option>
                  <option>Junior (0-2 years)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Next.js'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'profile':
        return renderProfile();
      case 'projects':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-gray-600">Project management coming soon...</p>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
            <p className="text-gray-600">This section is under development...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 p-8 ml-64">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DeveloperDashboard;