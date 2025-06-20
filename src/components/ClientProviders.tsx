"use client";
import { Toaster as AppToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <AppToaster />
      <SonnerToaster />
      {children}
    </TooltipProvider>
  );
} 