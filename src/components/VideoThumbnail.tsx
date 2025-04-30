
interface VideoThumbnailProps {
  title: string;
  image: string;
  duration: string;
}

const VideoThumbnail = ({ title, image, duration }: VideoThumbnailProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group">
      {/* Image */}
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      {/* Video Duration */}
      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
        {duration}
      </div>
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-14 h-14 bg-viora-primary rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      </div>
      
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-medium text-base line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};

export default VideoThumbnail;
