import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Code2, Github, ExternalLink } from 'lucide-react';

const DeveloperSignup: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    techStack: '',
    linkedInUrl: '',
    githubUrl: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const techStackOptions = [
    'React.js', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java', 'C#', 'PHP',
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Go', 'Ruby', 'TypeScript'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.techStack) newErrors.techStack = 'Tech stack is required';
    
    if (formData.linkedInUrl && !formData.linkedInUrl.includes('linkedin.com')) {
      newErrors.linkedInUrl = 'Please enter a valid LinkedIn URL';
    }
    
    if (formData.githubUrl && !formData.githubUrl.includes('github.com')) {
      newErrors.githubUrl = 'Please enter a valid GitHub URL';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/developer/dashboard');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-2xl">
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join as a Developer</h1>
            <p className="text-gray-600">Create your profile and start building amazing projects</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                    errors.firstName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your Name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                    errors.lastName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your LastName"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Name@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all pr-12 ${
                      errors.password ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all pr-12 ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Tech Stack
              </label>
              <select
                name="techStack"
                value={formData.techStack}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                  errors.techStack ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">Select your primary technology</option>
                {techStackOptions.map((tech) => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
              {errors.techStack && <p className="text-red-500 text-sm mt-1">{errors.techStack}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn URL (Optional)
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="linkedInUrl"
                    value={formData.linkedInUrl}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                      errors.linkedInUrl ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  <ExternalLink className="absolute inset-y-0 right-4 flex items-center pointer-events-none w-4 h-4 text-gray-400" />
                </div>
                {errors.linkedInUrl && <p className="text-red-500 text-sm mt-1">{errors.linkedInUrl}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub URL (Optional)
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                      errors.githubUrl ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="https://github.com/yourusername"
                  />
                  <Github className="absolute inset-y-0 right-4 flex items-center pointer-events-none w-4 h-4 text-gray-400" />
                </div>
                {errors.githubUrl && <p className="text-red-500 text-sm mt-1">{errors.githubUrl}</p>}
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <div className="ml-3">
                <label className="text-sm text-gray-700">
                  I agree to the{' '}
                  <button type="button" className="text-teal-600 hover:text-teal-500">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button type="button" className="text-teal-600 hover:text-teal-500">
                    Privacy Policy
                  </button>
                </label>
                {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Create Developer Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/developer/login')}
                className="text-teal-600 hover:text-teal-500 font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/select')}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Back to selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSignup;