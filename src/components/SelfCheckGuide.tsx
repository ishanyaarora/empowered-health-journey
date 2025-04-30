
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiArrowLeft, FiArrowRight, FiCalendar } from 'react-icons/fi';

const steps = [
  {
    id: 1,
    title: "Prepare",
    description: "Stand in front of a mirror with your arms at your sides.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Look",
    description: "Look for changes in breast size, shape, or color. Note any visible distortion or swelling.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "Raise Arms",
    description: "Raise your arms and look for the same changes, paying attention to any dimpling or puckering.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    title: "Check",
    description: "Lie down and use your right hand to check your left breast and vice versa, using circular motions.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    title: "Complete",
    description: "Finally, check your breasts while standing or sitting, using the same hand motions.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=600"
  }
];

const SelfCheckGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md card-shadow">
      <div className="relative h-48">
        <img 
          src={step.image} 
          alt={step.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-bold">{step.title}</h3>
            <div className="flex mt-1">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 w-1/5 mx-0.5 rounded-full ${idx === currentStep ? 'bg-viora-primary' : 'bg-white/40'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-700 mb-4">{step.description}</p>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={prevStep} 
            disabled={currentStep === 0}
            className="flex items-center gap-1"
          >
            <FiArrowLeft size={16} />
            <span>Previous</span>
          </Button>
          
          {currentStep === steps.length - 1 ? (
            <Button 
              size="sm" 
              className="flex items-center gap-1 bg-viora-primary hover:bg-viora-primary/80"
            >
              <FiCalendar size={16} />
              <span>Set Reminder</span>
            </Button>
          ) : (
            <Button 
              variant="default" 
              size="sm" 
              onClick={nextStep}
              className="flex items-center gap-1 bg-viora-primary hover:bg-viora-primary/80"
            >
              <span>Next</span>
              <FiArrowRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfCheckGuide;
