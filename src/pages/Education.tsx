
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EducationalCard from "@/components/EducationalCard";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Education = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Breast Cancer: Signs, Symptoms, and Risk Factors",
      summary: "Learn about the common signs of breast cancer, how to identify symptoms early, and what factors might increase your risk.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600",
      category: "Breast Cancer",
      path: "/education/breast-cancer"
    },
    {
      id: 2,
      title: "The Importance of Regular Pap Smears",
      summary: "How Pap smears help detect cervical cancer early and why regular screening matters for your health.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&h=600",
      category: "Cervical Health",
      path: "/education/cervical-health"
    },
    {
      id: 3,
      title: "HPV Vaccination: Your Questions Answered",
      summary: "Comprehensive guide on HPV vaccines, their benefits, and the protection they offer against certain cancers.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&h=600",
      category: "Prevention",
      path: "/education/hpv-vaccination"
    },
    {
      id: 4,
      title: "Nutrition for Women's Health",
      summary: "Discover foods and dietary patterns that support hormonal balance and may help reduce cancer risk.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&h=600",
      category: "Lifestyle",
      path: "/education/nutrition"
    },
  ];

  return (
    <div className="pb-24">
      <div className="bg-viora-primary text-white p-4 sticky top-0 z-10 flex items-center gap-3">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <FiArrowLeft size={20} />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Educational Hub</h1>
      </div>
      
      <div className="p-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input 
            placeholder="Search for topics..." 
            className="pl-10 rounded-full border-gray-200"
          />
        </div>
        
        {/* Categories */}
        <div className="mb-6 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 pb-2">
            <Button variant="outline" className="rounded-full bg-viora-primary text-white border-none whitespace-nowrap">
              All Topics
            </Button>
            <Button variant="outline" className="rounded-full whitespace-nowrap">
              Breast Cancer
            </Button>
            <Button variant="outline" className="rounded-full whitespace-nowrap">
              Cervical Health
            </Button>
            <Button variant="outline" className="rounded-full whitespace-nowrap">
              Ovarian Cancer
            </Button>
            <Button variant="outline" className="rounded-full whitespace-nowrap">
              Prevention
            </Button>
          </div>
        </div>
        
        {/* Featured Articles */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Featured Articles</h2>
          <div className="grid gap-4">
            {articles.map((article) => (
              <EducationalCard
                key={article.id}
                title={article.title}
                summary={article.summary}
                image={article.image}
                category={article.category}
                to={article.path}
              />
            ))}
          </div>
        </div>
        
        {/* Interactive Content */}
        <div>
          <h2 className="text-lg font-bold mb-3">Interactive Content</h2>
          <div className="bg-viora-background rounded-3xl overflow-hidden card-shadow">
            <div className="bg-viora-light p-5 flex items-center">
              <div className="bg-viora-primary rounded-full w-12 h-12 flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 5 17.5v-6a2.5 2.5 0 0 1 2-2.45"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 19 17.5v-6a2.5 2.5 0 0 0-2-2.45"></path><path d="M4.5 13a2.5 2.5 0 0 1 2.5-2.5h1"></path><path d="M19.5 13a2.5 2.5 0 0 0-2.5-2.5h-1"></path></svg>
              </div>
              <div>
                <h3 className="font-semibold text-base">Cancer Awareness Quiz</h3>
                <p className="text-sm text-gray-600">Test your knowledge and learn important facts</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm mb-4">How much do you know about women's cancer prevention? Take our quiz to test your knowledge and learn important facts that could help you stay healthy.</p>
              <Button className="w-full bg-viora-primary hover:bg-viora-primary/80">
                Start Quiz Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
