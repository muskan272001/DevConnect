import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  FolderOpen, 
  LogOut, 
  Code2, 
  Settings, 
  Bell,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="w-64 bg-white h-screen shadow-xl border-r border-gray-100 fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <AnimatedLogo />
      </div>
      
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-8 left-4 right-4">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 text-red-600 hover:bg-red-50 group"
        >
          <LogOut className="w-5 h-5 mr-3 text-red-500" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;