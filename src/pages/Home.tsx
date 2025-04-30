
import { FiBook, FiCheckCircle, FiUsers } from 'react-icons/fi';
import Logo from '@/components/Logo';
import QuoteRotator from '@/components/QuoteRotator';
import QuickAccessCard from '@/components/QuickAccessCard';
import VideoThumbnail from '@/components/VideoThumbnail';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="pb-24">
      {/* Hero Section with Gradient Background */}
      <div className="gradient-bg rounded-b-[40px] pt-10 pb-6 mb-6 relative overflow-hidden">
        <Logo />
        <QuoteRotator />
        
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">
            Sign Up
          </Button>
          <Button variant="outline" className="bg-white/20 border-white text-white hover:bg-white/30">
            Log In
          </Button>
        </div>
      </div>
      
      {/* Quick Access Cards */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold mb-4 px-1">Quick Access</h2>
        <div className="grid gap-4">
          <QuickAccessCard 
            icon={<FiBook />}
            title="Educational Video Library"
            description="Learn about prevention, symptoms, and treatments."
            to="/education"
          />
          <QuickAccessCard 
            icon={<FiCheckCircle />}
            title="Start Your Self-Check"
            description="Step-by-step guide for monthly self-examinations."
            to="/self-check"
          />
          <QuickAccessCard 
            icon={<FiUsers />}
            title="Join the Community"
            description="Connect with others on a similar health journey."
            to="/community"
          />
        </div>
      </div>
      
      {/* Featured Videos */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold mb-4 px-1">Featured Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <VideoThumbnail 
            title="Learn About Self-Checks"
            image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&h=600"
            duration="4:25"
          />
          <VideoThumbnail 
            title="Understanding Cancer Prevention"
            image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=600"
            duration="7:12"
          />
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold mb-4 px-1">User Stories</h2>
        <div className="grid grid-cols-1 gap-4">
          <TestimonialCard 
            quote="This app helped me establish a self-check routine that I never had before. The reminders and tracking are invaluable."
            name="Sarah M."
            age={32}
            location="New York"
            image="/placeholder.svg"
          />
          <TestimonialCard 
            quote="The specialist consultation feature connected me to a doctor who answered all my concerns promptly."
            name="Jennifer K."
            age={45}
            location="California"
            image="/placeholder.svg"
          />
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-4 pt-6 border-t border-viora-grey-light">
        <div className="flex justify-center gap-4 mb-4">
          {/* Social Media Icons */}
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Button>
        </div>
        
        <div className="text-center text-sm text-gray-500 space-y-1 mb-4">
          <p><a href="#" className="hover:text-viora-primary">Meet the Team</a></p>
          <p><a href="#" className="hover:text-viora-primary">Terms and Privacy</a></p>
          <p>© {new Date().getFullYear()} VIORA. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
