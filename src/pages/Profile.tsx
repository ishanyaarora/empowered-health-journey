
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser, FiSettings, FiClock, FiBookmark, FiHelpCircle, FiShield, FiLogOut } from "react-icons/fi";

const ProfileOption = ({ icon: Icon, label, to }: { icon: React.ElementType, label: string, to: string }) => (
  <Link to={to} className="flex items-center p-4 hover:bg-viora-background rounded-xl">
    <div className="w-10 h-10 rounded-full bg-viora-light flex items-center justify-center text-viora-primary mr-4">
      <Icon size={20} />
    </div>
    <span className="font-medium">{label}</span>
    <div className="ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
  </Link>
);

const Profile = () => {
  return (
    <div className="pb-24">
      <div className="bg-viora-primary text-white p-4 sticky top-0 z-10 flex items-center gap-3">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <FiArrowLeft size={20} />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Profile</h1>
      </div>
      
      <div className="p-4">
        {/* User Info */}
        <div className="flex items-center p-4 bg-white rounded-3xl card-shadow mb-6">
          <div className="w-16 h-16 bg-viora-light rounded-full flex items-center justify-center text-viora-primary mr-4">
            <FiUser size={30} />
          </div>
          <div>
            <h2 className="font-bold text-lg">Guest User</h2>
            <p className="text-sm text-gray-500">Create an account to save your progress</p>
            <div className="flex gap-2 mt-2">
              <Button size="sm" className="bg-viora-primary hover:bg-viora-primary/80">
                Sign Up
              </Button>
              <Button size="sm" variant="outline" className="border-viora-primary text-viora-primary hover:bg-viora-background">
                Log In
              </Button>
            </div>
          </div>
        </div>
        
        {/* Options */}
        <div className="bg-white rounded-3xl p-2 card-shadow mb-6">
          <ProfileOption icon={FiUser} label="Personal Information" to="/profile/personal" />
          <ProfileOption icon={FiSettings} label="Settings" to="/profile/settings" />
          <ProfileOption icon={FiClock} label="Health History" to="/profile/history" />
          <ProfileOption icon={FiBookmark} label="Saved Articles" to="/profile/saved" />
        </div>
        
        {/* Support Options */}
        <div className="bg-white rounded-3xl p-2 card-shadow mb-6">
          <ProfileOption icon={FiHelpCircle} label="Help Center" to="/profile/help" />
          <ProfileOption icon={FiShield} label="Privacy & Security" to="/profile/privacy" />
        </div>
        
        {/* Language & Accessibility */}
        <div className="bg-white rounded-3xl p-4 mb-6">
          <h3 className="font-medium mb-3">Language & Accessibility</h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <Button variant="outline" size="sm" className="bg-viora-primary text-white border-none">
              English
            </Button>
            <Button variant="outline" size="sm">
              Español
            </Button>
            <Button variant="outline" size="sm">
              Français
            </Button>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">Font Size</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">A</Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-lg">A</Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-xl">A</Button>
            </div>
          </div>
        </div>
        
        {/* App Info */}
        <div className="text-center text-sm text-gray-500 space-y-1 mb-4">
          <p>VIORA v1.0.0</p>
          <p><a href="#" className="hover:text-viora-primary">Terms of Service</a> • <a href="#" className="hover:text-viora-primary">Privacy Policy</a></p>
          <p>© {new Date().getFullYear()} VIORA. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
