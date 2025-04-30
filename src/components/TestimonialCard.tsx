
interface TestimonialCardProps {
  quote: string;
  name: string;
  age?: number;
  location?: string;
  image?: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  age, 
  location, 
  image = "/placeholder.svg" 
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-5 rounded-3xl card-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          {(age || location) && (
            <p className="text-xs text-gray-500">
              {age && `${age} years`}{age && location && ", "}{location}
            </p>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
