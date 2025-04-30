
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiHome, 
  FiMessageSquare, 
  FiBarChart2, 
  FiHeart,
  FiUser 
} from 'react-icons/fi';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: FiHome, label: 'Home', path: '/' },
    { id: 'chatbot', icon: FiMessageSquare, label: 'Chatbot', path: '/chatbot' },
    { id: 'progress', icon: FiBarChart2, label: 'Progress', path: '/progress' },
    { id: 'support', icon: FiHeart, label: 'Support', path: '/support' },
    { id: 'profile', icon: FiUser, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-viora-grey-light rounded-t-3xl shadow-lg h-20 z-50">
      <div className="flex justify-around items-center h-full px-2">
        {tabs.map((tab) => (
          <Link 
            key={tab.id}
            to={tab.path}
            className="flex flex-col items-center justify-center w-full"
            onClick={() => setActiveTab(tab.id)}
          >
            <div className={`
              ${activeTab === tab.id ? 'text-viora-primary bg-viora-light/30' : 'text-viora-grey-dark'} 
              p-3 rounded-full transition-all duration-300 ease-in-out
            `}>
              <tab.icon size={20} />
            </div>
            <span className={`
              text-xs mt-1 
              ${activeTab === tab.id ? 'text-viora-primary font-medium' : 'text-viora-grey-dark'}
            `}>
              {tab.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
