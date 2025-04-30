
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiCheckCircle, FiActivity, FiClock } from "react-icons/fi";
import { useState } from "react";

const ProgressCard = ({ title, value, total, color }: {
  title: string,
  value: number,
  total: number,
  color: string
}) => {
  const percentage = (value / total) * 100;
  
  return (
    <div className="bg-white rounded-3xl p-4 card-shadow">
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 relative">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            {/* Background Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#f3f3f3"
              strokeWidth="3"
            />
            {/* Progress Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeDasharray="100"
              strokeDashoffset={100 - percentage}
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
              style={{
                transition: "stroke-dashoffset 0.5s ease",
              }}
            />
            {/* Percentage Text */}
            <text
              x="18"
              y="18"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill="#333"
            >
              {Math.round(percentage)}%
            </text>
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-500">Progress</div>
          <div className="font-medium">
            {value} of {total} complete
          </div>
        </div>
      </div>
    </div>
  );
};

const Progress = () => {
  const [activeTab, setActiveTab] = useState("summary");
  
  return (
    <div className="pb-24">
      <div className="bg-viora-primary text-white p-4 sticky top-0 z-10 flex items-center gap-3">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <FiArrowLeft size={20} />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Progress Tracker</h1>
      </div>
      
      <div className="p-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none">
          <Button 
            variant={activeTab === "summary" ? "default" : "outline"} 
            className={activeTab === "summary" ? "bg-viora-primary" : ""} 
            onClick={() => setActiveTab("summary")}
          >
            Summary
          </Button>
          <Button 
            variant={activeTab === "checks" ? "default" : "outline"} 
            className={activeTab === "checks" ? "bg-viora-primary" : ""} 
            onClick={() => setActiveTab("checks")}
          >
            Self-Checks
          </Button>
          <Button 
            variant={activeTab === "appointments" ? "default" : "outline"} 
            className={activeTab === "appointments" ? "bg-viora-primary" : ""} 
            onClick={() => setActiveTab("appointments")}
          >
            Appointments
          </Button>
          <Button 
            variant={activeTab === "mood" ? "default" : "outline"} 
            className={activeTab === "mood" ? "bg-viora-primary" : ""} 
            onClick={() => setActiveTab("mood")}
          >
            Mood
          </Button>
        </div>
        
        {/* Summary View */}
        {activeTab === "summary" && (
          <div className="space-y-4">
            {/* Monthly Progress */}
            <div className="bg-white rounded-3xl p-4 card-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-base">Monthly Progress</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar size={14} className="mr-1" /> April 2025
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <ProgressCard 
                  title="Self-Checks" 
                  value={1} 
                  total={1} 
                  color="#00D1FF" 
                />
                <ProgressCard 
                  title="Appointments" 
                  value={2} 
                  total={3} 
                  color="#4CAF50" 
                />
                <ProgressCard 
                  title="Education" 
                  value={4} 
                  total={10} 
                  color="#FFC107" 
                />
                <ProgressCard 
                  title="Wellness" 
                  value={15} 
                  total={30} 
                  color="#9C27B0" 
                />
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-3xl p-4 card-shadow">
              <h3 className="font-semibold text-base mb-3">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start p-2 bg-viora-background rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-viora-light flex items-center justify-center text-viora-primary mr-3">
                    <FiCheckCircle size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Completed monthly self-check</p>
                    <p className="text-xs text-gray-500">April 15, 2025 • 10:30 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start p-2 bg-viora-background rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-viora-light flex items-center justify-center text-viora-primary mr-3">
                    <FiActivity size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Logged wellness activity</p>
                    <p className="text-xs text-gray-500">April 12, 2025 • 3:15 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start p-2 bg-viora-background rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-viora-light flex items-center justify-center text-viora-primary mr-3">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Scheduled doctor appointment</p>
                    <p className="text-xs text-gray-500">April 10, 2025 • 11:45 AM</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-3 text-viora-primary border-viora-primary/30">
                View All Activity
              </Button>
            </div>
            
            {/* Export Option */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 mb-2">Need to share your progress with a healthcare provider?</p>
              <Button variant="outline" className="border-viora-primary text-viora-primary">
                Export Progress Report
              </Button>
            </div>
          </div>
        )}
        
        {/* Placeholder for other tabs */}
        {activeTab !== "summary" && (
          <div className="bg-white rounded-3xl p-8 card-shadow flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-viora-light flex items-center justify-center text-viora-primary mb-4">
              {activeTab === "checks" && <FiCheckCircle size={32} />}
              {activeTab === "appointments" && <FiCalendar size={32} />}
              {activeTab === "mood" && <FiActivity size={32} />}
            </div>
            <h3 className="font-semibold text-lg mb-2">
              {activeTab === "checks" && "Self-Checks"}
              {activeTab === "appointments" && "Appointments"}
              {activeTab === "mood" && "Mood Tracker"}
            </h3>
            <p className="text-center text-gray-500 mb-4">
              {activeTab === "checks" && "Track your monthly self-examinations and get timely reminders."}
              {activeTab === "appointments" && "Schedule and manage your healthcare appointments."}
              {activeTab === "mood" && "Monitor your emotional wellbeing and identify patterns."}
            </p>
            <Button className="bg-viora-primary hover:bg-viora-primary/80">Get Started</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
