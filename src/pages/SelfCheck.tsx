
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import SelfCheckGuide from "@/components/SelfCheckGuide";

const SelfCheck = () => {
  return (
    <div className="pb-24">
      <div className="bg-viora-primary text-white p-4 sticky top-0 z-10 flex items-center gap-3">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <FiArrowLeft size={20} />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Self-Check Guide</h1>
      </div>
      
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-1">Monthly Breast Self-Examination</h2>
          <p className="text-sm text-gray-600">Follow these steps to perform a thorough self-examination. Regular checks help detect any changes early.</p>
        </div>
        
        {/* Self Check Guide Component */}
        <SelfCheckGuide />
        
        {/* Additional Information */}
        <div className="mt-6 bg-white rounded-3xl p-4 card-shadow">
          <h3 className="font-semibold text-base mb-2">When to Contact a Doctor</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <div className="bg-viora-light text-viora-primary rounded-full min-w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                •
              </div>
              <p>A new lump or mass in the breast tissue</p>
            </div>
            <div className="flex items-start">
              <div className="bg-viora-light text-viora-primary rounded-full min-w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                •
              </div>
              <p>Any skin changes, such as dimpling, puckering, or redness</p>
            </div>
            <div className="flex items-start">
              <div className="bg-viora-light text-viora-primary rounded-full min-w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                •
              </div>
              <p>Nipple changes, including inversion, discharge, or pain</p>
            </div>
            <div className="flex items-start">
              <div className="bg-viora-light text-viora-primary rounded-full min-w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                •
              </div>
              <p>Any changes in breast shape or size that persists after your menstrual cycle</p>
            </div>
          </div>
        </div>
        
        {/* Reminder Button */}
        <div className="mt-6">
          <Button 
            className="w-full bg-viora-primary hover:bg-viora-primary/80 flex items-center justify-center gap-2"
          >
            <FiCalendar size={18} />
            <span>Set Monthly Reminder</span>
          </Button>
          
          <div className="text-center mt-3 text-sm text-gray-500">
            <p>Next recommended check: May 30, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCheck;
