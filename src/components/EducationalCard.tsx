
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface EducationalCardProps {
  title: string;
  summary: string;
  image: string;
  category: string;
  to: string;
  className?: string;
}

const EducationalCard = ({
  title,
  summary,
  image,
  category,
  to,
  className
}: EducationalCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "block bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 card-shadow",
        className
      )}
    >
      <div className="aspect-video w-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-viora-light text-viora-primary rounded-full mb-2">
          {category}
        </span>
        <h3 className="font-poppins font-semibold text-base mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{summary}</p>
      </div>
    </Link>
  );
};

export default EducationalCard;
