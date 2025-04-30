
import { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Button } from "@/components/ui/button";

const EmergencyButton = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const emergencyContacts = [
    { name: 'National Healthcare Helpline', number: '1-800-999-9999' },
    { name: 'Cancer Support Hotline', number: '1-800-888-8888' },
  ];

  return (
    <div className="fixed right-4 bottom-24 z-50">
      {expanded && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl p-4 w-64 shadow-lg animate-fade-in-up">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-bold font-poppins">Emergency Contacts</h3>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8" 
              onClick={toggleExpanded}
            >
              <IoMdClose size={16} />
            </Button>
          </div>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <a 
                key={index} 
                href={`tel:${contact.number}`} 
                className="flex justify-between items-center p-3 bg-viora-background hover:bg-viora-light/50 rounded-xl transition-all duration-200"
              >
                <div>
                  <p className="text-sm font-medium">{contact.name}</p>
                  <p className="text-xs text-viora-primary">{contact.number}</p>
                </div>
                <FiPhoneCall className="text-viora-primary" />
              </a>
            ))}
            <Button 
              variant="outline" 
              className="w-full mt-2 border-dashed border-viora-grey-light text-viora-grey-dark"
            >
              Add your contact
            </Button>
          </div>
        </div>
      )}
      <Button 
        className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg flex items-center justify-center"
        onClick={toggleExpanded}
      >
        <FiPhoneCall size={24} />
      </Button>
    </div>
  );
};

export default EmergencyButton;
