import React from 'react';

/**
 * Service card vector illustrations designed for the concentric ripple / blob area
 * adhering strictly to the Tekloria color schema (#0B0B0F, #EF4444, #FFFFFF, #E5E7EB, #F8FAFC)
 */

export const WebIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <img 
    src="/web-development.svg" 
    alt="Web Development Illustration" 
    className={`${className} object-contain object-bottom-right`} 
  />
);

export const AppIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <img 
    src="/mobile-development.svg" 
    alt="Mobile App Development Illustration" 
    className={`${className} object-contain object-bottom-right`} 
  />
);

export const DesignIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <img 
    src="/ui-ux-design.svg" 
    alt="Graphic & UI/UX Design Illustration" 
    className={`${className} object-contain object-bottom-right`} 
  />
);

export const ErpIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <img 
    src="/erp-development.svg" 
    alt="ERP Development Illustration" 
    className={`${className} object-contain object-bottom-right`} 
  />
);

export const StrategyIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <img 
    src="/business-strategy-marketing.svg" 
    alt="Business Strategy & Marketing Illustration" 
    className={`${className} object-contain object-bottom-right`} 
  />
);

export const HrIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <img 
    src="/hr-recruiting.svg" 
    alt="HR Recruiting Services Illustration" 
    className={`${className} object-contain object-bottom-right`} 
  />
);
