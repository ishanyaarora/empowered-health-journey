
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

interface TooltipWrapperProps {
  children: React.ReactNode;
}

const TooltipWrapper = ({ children }: TooltipWrapperProps) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};

export default TooltipWrapper;
