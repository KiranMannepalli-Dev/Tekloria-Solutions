import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { CtaSection } from '../components/CtaSection';
import { ConcentricRipple } from '../components/ConcentricRipple';

export default function Pricing() {
  const { format, toggle, currency } = useCurrency();

  return (
    <div className="w-full bg-white text-[#0B0B0F]">
      {/* 
        ========================================================================
        PRICING SECTION 
        ========================================================================
      */}
      <section className="relative px-6 sm:px-10 pt-28 pb-16 sm:pb-24 bg-white overflow-hidden">
        {/* Large Background Ripple */}
        <div className="absolute -left-48 -top-48 w-[800px] h-[800px] pointer-events-none opacity-30">
          <ConcentricRipple id="pricing-bg-ripple" variant="outline-rings" placement="top-left" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-widest text-[#EF4444] font-semibold mb-2">Transparent Pricing</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0B0F] tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Clear Investment, Real Returns
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
              Every business is unique. These starting packages provide a baseline for our premium services. We tailor every final proposal to your exact technical scope.
            </p>
            
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm font-medium ${currency === 'INR' ? 'text-[#0B0B0F]' : 'text-[#475569]'}`}>INR (₹)</span>
              <button 
                onClick={toggle}
                className="w-12 h-6 rounded-full bg-[#E5E7EB] relative transition-colors duration-300"
                aria-label="Toggle currency"
              >
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-[#EF4444] transition-transform duration-300 ${currency === 'USD' ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm font-medium ${currency === 'USD' ? 'text-[#0B0B0F]' : 'text-[#475569]'}`}>USD ($)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Web Development", inr: 25000, desc: "Custom SPA, CMS integration, and scalable hosting architecture.", features: ["React / Next.js Setup", "Responsive Design", "Basic SEO Optimization", "Admin Dashboard"] },
              { title: "App Development", inr: 85000, desc: "Native-like cross-platform mobile app for iOS and Android.", features: ["React Native / Flutter", "Push Notifications", "App Store Submission", "API Integration"] },
              { title: "Graphic & UI/UX", inr: 10000, desc: "Complete visual identity and high-fidelity product prototypes.", features: ["Brand Identity Kit", "Figma Prototypes", "Design System", "Marketing Assets"] },
              { title: "ERP Systems", inr: 150000, desc: "Custom business logic for operations, inventory, and billing.", features: ["Role-Based Access", "Inventory Tracking", "Custom Reports", "Secure Data Migration"] },
              { title: "Business Strategy", inr: 25000, desc: "Data-driven marketing, SEO, and conversion optimization.", features: ["Technical SEO Audit", "Funnel Optimization", "Analytics Setup", "Growth Consulting"] },
              { title: "HR Recruiting", inr: 20000, desc: "Dedicated tech talent sourcing, screening, and placement.", features: ["Technical Vetting", "Culture Fit Screening", "Interview Coordination", "Onboarding Support"] }
            ].map((pkg, idx) => (
              <div key={idx} className="relative overflow-hidden p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-[8px] hover:border-[#EF4444] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full">
                {/* Concentric Ripple on Hover */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-500 transform group-hover:scale-110">
                  <ConcentricRipple id={`pricing-card-ripple-${idx}`} variant="soft-rose" placement="bottom-right" />
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EF4444]/0 to-[#EF4444]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[8px]" />
                
                <h3 className="text-lg font-bold text-[#0B0B0F] mb-2">{pkg.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-grow">{pkg.desc}</p>
                
                <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
                  <div className="text-[11px] text-[#475569] uppercase tracking-wider font-semibold mb-1">Starting from</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#EF4444] tracking-tight">{format(pkg.inr)}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5 text-sm text-[#0B0B0F]">
                      <CheckCircle2 size={16} className="text-[#EF4444] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <Link 
                    to="/contact" 
                    state={{ subject: `Inquiry: ${pkg.title} Package` }}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] border border-[#E5E7EB] text-sm font-semibold text-[#0B0B0F] bg-white group-hover:bg-[#EF4444] group-hover:border-[#EF4444] group-hover:text-white transition-all duration-300"
                  >
                    Request Proposal <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        CTA SECTION 
        ========================================================================
      */}
      <CtaSection 
        id="pricing"
        badge="Get Started"
        title="Ready to build?"
        description="Contact us to get a precise quote tailored to your exact project requirements."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
