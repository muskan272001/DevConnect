import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Code, Zap, Star } from 'lucide-react';
import AnimatedLogo from '../components/AnimatedLogo';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <AnimatedLogo />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">About</a>
            <ThemeToggle />
            <button
              onClick={() => navigate('/select')}
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Connect
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent"> Developers </span>
            with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Users</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            The ultimate platform where talented developers meet innovative projects. 
            Build the future together with seamless collaboration and endless possibilities.
          </p>
          
          <div className="mb-12">
            <SearchBar />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => navigate('/select')}
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg group flex items-center gap-2"
            >
              Start Building Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-teal-500 hover:text-teal-600 transition-all duration-200 transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Users className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10,000+</div>
                <p className="text-gray-600 dark:text-gray-300">Active Developers</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Code className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5,000+</div>
                <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4.9/5</div>
                <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Preview */}
      <section id="features" className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose DevConnect?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to build amazing projects</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-white/80 dark:hover:bg-gray-700/50 transition-colors">
              <Zap className="w-16 h-16 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fast Matching</h3>
              <p className="text-gray-600 dark:text-gray-300">AI-powered matching connects you with the right talent instantly</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-white/80 dark:hover:bg-gray-700/50 transition-colors">
              <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Global Network</h3>
              <p className="text-gray-600 dark:text-gray-300">Access developers and projects from around the world</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-white/80 dark:hover:bg-gray-700/50 transition-colors">
              <Code className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quality Assured</h3>
              <p className="text-gray-600 dark:text-gray-300">Verified profiles and ratings ensure top-quality collaboration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;