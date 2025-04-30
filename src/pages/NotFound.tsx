
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-viora-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-viora-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 15h8M9.5 9h.01M14.5 9h.01"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-6">
          We couldn't find the page you're looking for. It might be under construction or may have been moved.
        </p>
        <Link to="/">
          <Button className="bg-viora-primary hover:bg-viora-primary/80">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
