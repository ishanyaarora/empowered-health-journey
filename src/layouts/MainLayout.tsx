
import { ReactNode } from "react";
import BottomNav from "@/components/BottomNav";
import EmergencyButton from "@/components/EmergencyButton";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-viora-background">
      <main className="pb-20">
        {children}
      </main>
      <EmergencyButton />
      <BottomNav />
    </div>
  );
};

export default MainLayout;
