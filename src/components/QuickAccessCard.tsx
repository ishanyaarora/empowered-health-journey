
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface QuickAccessCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  to: string;
  className?: string;
}

const QuickAccessCard = ({
  icon,
  title,
  description,
  to,
  className
}: QuickAccessCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "flex items-start p-5 bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 card-shadow",
        className
      )}
    >
      <div className="mr-4 mt-1 text-viora-primary text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="font-poppins font-semibold text-base mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default QuickAccessCard;
