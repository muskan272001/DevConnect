import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, User, ArrowRight, Briefcase } from 'lucide-react';
import AnimatedLogo from '../components/AnimatedLogo';

const UserSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <AnimatedLogo />
          <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">Join DevConnect</h1>
          <p className="text-xl text-gray-600">Choose your path and start your journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Developer Card */}
          <div
            onClick={() => navigate('/developer/login')}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 group"
          >
            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-blue-600 p-6 rounded-2xl">
                  <Code2 className="w-16 h-16 text-white mx-auto" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">I'm a Developer</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Showcase your skills, find exciting projects, and collaborate with innovative teams. 
                Build your portfolio and grow your career.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-500">
                  <Briefcase className="w-4 h-4 mr-2 text-teal-500" />
                  Find projects that match your expertise
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Code2 className="w-4 h-4 mr-2 text-teal-500" />
                  Showcase your portfolio and skills
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="w-4 h-4 mr-2 text-teal-500" />
                  Connect with potential clients
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105 flex items-center justify-center gap-2">
                Continue as Developer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* User Card */}
          <div
            onClick={() => navigate('/user/login')}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 group"
          >
            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl">
                  <User className="w-16 h-16 text-white mx-auto" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">I'm a User</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Turn your ideas into reality by connecting with talented developers. 
                Post projects and find the perfect team for your vision.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-500">
                  <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                  Post your project requirements
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="w-4 h-4 mr-2 text-blue-500" />
                  Browse verified developer profiles
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Code2 className="w-4 h-4 mr-2 text-blue-500" />
                  Collaborate and build together
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 group-hover:scale-105 flex items-center justify-center gap-2">
                Continue as User
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;