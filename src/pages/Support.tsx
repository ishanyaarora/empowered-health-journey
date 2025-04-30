
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiPhoneCall, FiCalendar, FiUsers, FiFileText } from "react-icons/fi";

const SupportCard = ({ icon: Icon, title, description, buttonText, to }: {
  icon: React.ElementType,
  title: string,
  description: string,
  buttonText: string,
  to: string
}) => (
  <div className="bg-white rounded-3xl p-5 card-shadow mb-4">
    <div className="flex items-start mb-4">
      <div className="w-12 h-12 rounded-full bg-viora-light flex items-center justify-center text-viora-primary mr-4 flex-shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
    <Link to={to}>
      <Button className="w-full bg-viora-primary hover:bg-viora-primary/80">
        {buttonText}
      </Button>
    </Link>
  </div>
);

const Support = () => {
  return (
    <div className="pb-24">
      <div className="bg-viora-primary text-white p-4 sticky top-0 z-10 flex items-center gap-3">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <FiArrowLeft size={20} />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Support</h1>
      </div>
      
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-1">How can we help you?</h2>
          <p className="text-sm text-gray-600">Access our resources and support channels</p>
        </div>
        
        {/* Support Options */}
        <SupportCard 
          icon={FiPhoneCall}
          title="Consult a Specialist"
          description="Book video or chat consultations with gynecologists, oncologists, nutritionists, and therapists."
          buttonText="Find a Specialist"
          to="/support/specialists"
        />
        
        <SupportCard 
          icon={FiCalendar}
          title="Upcoming Events"
          description="View and register for virtual workshops, support groups, and awareness campaigns."
          buttonText="View Events"
          to="/support/events"
        />
        
        <SupportCard 
          icon={FiUsers}
          title="Community Support"
          description="Connect with others on similar journeys. Share experiences and find support in our moderated forums."
          buttonText="Join Community"
          to="/support/community"
        />
        
        <SupportCard 
          icon={FiFileText}
          title="Resource Library"
          description="Access our collection of guides, PDFs, and educational materials about women's health."
          buttonText="Browse Resources"
          to="/support/resources"
        />
        
        {/* Partner Organizations */}
        <div className="mt-8">
          <h3 className="font-medium mb-3">Partner Organizations</h3>
          <div className="bg-white rounded-3xl p-4 card-shadow">
            <p className="text-sm text-gray-600 mb-4">VIORA works with these trusted organizations to provide you with the best support and resources.</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center p-2">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">Logo</div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center p-2">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">Logo</div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center p-2">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">Logo</div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center p-2">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">Logo</div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center p-2">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">Logo</div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center p-2">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">Logo</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="mt-6 text-center">
          <p className="font-medium mb-1">Need immediate help?</p>
          <p className="text-sm text-gray-600 mb-4">Our support team is available Monday-Friday, 9am-5pm EST</p>
          <Button variant="outline" className="border-viora-primary text-viora-primary">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Support;
