
import React, { useEffect, useState } from "react";
import { CTNavbar } from "@/components/CTNavbar";
import { CTHero } from "@/components/CTHero";
import { CTServices } from "@/components/CTServices";
import { CTPricing } from "@/components/CTPricing";
import { CTCases } from "@/components/CTCases";
import { CTFAQ } from "@/components/CTFAQ";
import { CTContact } from "@/components/CTContact";
import { CTFooter } from "@/components/CTFooter";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string>();

  const handleChatOpen = (message?: string) => {
    setInitialMessage(message);
    setIsChatOpen(true);
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <CTNavbar onChatOpen={handleChatOpen} onChatToggle={handleChatToggle} />
      <main>
        <CTHero onChatOpen={handleChatOpen} />
        <CTServices onChatOpen={handleChatOpen} />
        <CTPricing onChatOpen={handleChatOpen} />
        <CTCases onChatOpen={handleChatOpen} />
        <CTFAQ onChatOpen={handleChatOpen} />
        <CTContact onChatOpen={handleChatOpen} />
      </main>
      <CTFooter />
      <ChatWidget 
        isOpen={isChatOpen} 
        onToggle={handleChatToggle}
        initialMessage={initialMessage}
      />
    </div>
  );
};

export default Index;
