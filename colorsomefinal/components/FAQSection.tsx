// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "What is your typical project timeline?",
//     answer: "Project timelines vary based on complexity and scope. Typically, a standard web platform takes 8-12 weeks from discovery to launch. Large-scale architectural projects may extend to 16-20 weeks. We provide detailed timeline projections during the initial consultation phase."
//   },
//   {
//     question: "How do you approach technical discovery?",
//     answer: "Our discovery phase involves deep analysis of your requirements, technical infrastructure assessment, and architectural planning. We conduct stakeholder interviews, review existing systems, and create comprehensive technical specifications before any development begins."
//   },
//   {
//     question: "What technologies does Lumina specialize in?",
//     answer: "We specialize in modern web architectures including React, Next.js, TypeScript, Node.js, and cloud platforms (AWS, Vercel). Our stack prioritizes performance, scalability, and developer experience. We also explore emerging technologies in our Labs division."
//   },
//   {
//     question: "Do you offer ongoing maintenance and support?",
//     answer: "Yes, we provide comprehensive post-launch support packages including technical maintenance, performance monitoring, security updates, and feature enhancements. Our support retainer ensures your platform remains optimized and secure."
//   },
//   {
//     question: "How do you handle data privacy and security?",
//     answer: "Security is embedded throughout our development process. We implement industry-standard encryption, secure authentication protocols, and regular security audits. All projects comply with GDPR and relevant data protection regulations."
//   },
//   {
//     question: "Can I see examples of your previous work?",
//     answer: "Our Selected Archive showcases documented case studies spanning various industries including fintech, creative studios, and enterprise platforms. Each case study details our technical approach and measurable outcomes."
//   }
// ];

// const FAQItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
//   return (
//     <div className="border-t border-gray-200 last:border-b">
//       <button
//         onClick={onToggle}
//         className="w-full py-8 md:py-10 text-left group outline-none focus-visible:bg-gray-50/50 transition-colors"
//         aria-expanded={isOpen}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
//           <div className="col-span-1 md:col-span-9">
//             <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 group-hover:translate-x-1 transition-transform duration-300">
//               {item.question}
//             </h3>
//           </div>
//           <div className="col-span-1 md:col-span-3 flex justify-start md:justify-end">
//             <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-900 transition-colors">
//               <span className="text-xs uppercase tracking-widest font-semibold">
//                 {isOpen ? 'Close' : 'Read'}
//               </span>
//               <iconify-icon 
//                 icon={isOpen ? "solar:minus-linear" : "solar:add-linear"} 
//                 width="20" 
//                 height="20" 
//                 className="transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>
//           </div>
//         </div>
//       </button>
      
//       <div 
//         className={`overflow-hidden transition-all duration-500 ease-in-out ${
//           isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="pb-8 md:pb-10 pl-0 md:pl-0">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//             <div className="col-span-1 md:col-span-9 md:col-start-1">
//               <p className="text-gray-600 leading-relaxed font-normal">
//                 {item.answer}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const handleToggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div id="faq-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col py-24 md:py-32 relative z-10">
      
//       {/* Typography Section */}
//       <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16 md:mb-24">
//         <div className="col-span-1 md:col-span-2 flex flex-col justify-between order-2 md:order-1">
//           <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">05 / Inquiries</p>
//           <div className="flex flex-col gap-6">
//             <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
//               Common questions about our process, technology, and engagement models.
//             </p>
//           </div>
//         </div>

//         <div className="col-span-1 md:col-span-10 order-1 md:order-2">
//           <h2 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-medium tracking-tighter leading-[0.85] text-gray-900">
//             Frequently Asked
//             <br />
//             <span className="text-gray-500">Questions</span>
//           </h2>
//         </div>
//       </section>

//       {/* FAQ Accordion */}
//       <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
//         <div className="hidden md:block col-span-3">
//           {/* Spacer for alignment */}
//         </div>

//         <div className="col-span-1 md:col-span-9">
//           <div className="bg-white/50">
//             {faqData.map((item, index) => (
//               <FAQItem
//                 key={index}
//                 item={item}
//                 isOpen={openIndex === index}
//                 onToggle={() => handleToggle(index)}
//               />
//             ))}
//           </div>

//           {/* Contact CTA */}
//           <div className="mt-16 md:mt-24 p-8 md:p-12 bg-gray-50 border border-gray-200">
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
//               <div className="col-span-1 md:col-span-8">
//                 <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-3">
//                   Still have questions?
//                 </h4>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   Schedule a consultation to discuss your specific requirements and how Lumina can bring your vision to life.
//                 </p>
//               </div>
//               <div className="col-span-1 md:col-span-4 flex justify-start md:justify-end">
//                 <Link 
//                   href="/contact" 
//                   className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white hover:bg-black transition-all duration-300 text-sm font-medium tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
//                 >
//                   Initiate Dialogue
//                   <iconify-icon 
//                     icon="solar:arrow-right-up-linear" 
//                     width="18" 
//                     height="18" 
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. Typically, a standard web platform takes 8-12 weeks from discovery to launch. Large-scale architectural projects may extend to 16-20 weeks. We provide detailed timeline projections during the initial consultation phase."
  },
  {
    question: "How do you approach technical discovery?",
    answer: "Our discovery phase involves deep analysis of your requirements, technical infrastructure assessment, and architectural planning. We conduct stakeholder interviews, review existing systems, and create comprehensive technical specifications before any development begins."
  },
  {
    question: "What technologies does Lumina specialize in?",
    answer: "We specialize in modern web architectures including React, Next.js, TypeScript, Node.js, and cloud platforms (AWS, Vercel). Our stack prioritizes performance, scalability, and developer experience. We also explore emerging technologies in our Labs division."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we provide comprehensive post-launch support packages including technical maintenance, performance monitoring, security updates, and feature enhancements. Our support retainer ensures your platform remains optimized and secure."
  },
  {
    question: "How do you handle data privacy and security?",
    answer: "Security is embedded throughout our development process. We implement industry-standard encryption, secure authentication protocols, and regular security audits. All projects comply with GDPR and relevant data protection regulations."
  },
  {
    question: "Can I see examples of your previous work?",
    answer: "Our Selected Archive showcases documented case studies spanning various industries including fintech, creative studios, and enterprise platforms. Each case study details our technical approach and measurable outcomes."
  }
];

const FAQItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-t border-gray-200 last:border-b">
      <button
        onClick={onToggle}
        className="w-full py-8 md:py-10 text-left group outline-none focus-visible:bg-gray-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="col-span-1 md:col-span-10">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 group-hover:translate-x-1 transition-transform duration-300">
              {item.question}
            </h3>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-start md:justify-end">
            <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-900 transition-colors">
              <iconify-icon 
                icon="solar:add-circle-linear" 
                width="24" 
                height="24" 
                className={`transition-all duration-300 ease-out group-hover:scale-110 ${
                  isOpen ? 'rotate-45' : 'rotate-0'
                }`}
              />
            </div>
          </div>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 md:pb-10 pl-0 md:pl-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-10 md:col-start-1">
              <p className="text-gray-600 leading-relaxed font-normal">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col py-24 md:py-32 relative z-10">
      
      {/* Typography Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16 md:mb-24">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between order-2 md:order-1">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">05 / Inquiries</p>
          <div className="flex flex-col gap-6">
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
              Common questions about our process, technology, and engagement models.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-10 order-1 md:order-2">
          <h2 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-medium tracking-tighter leading-[0.85] text-gray-900">
            Frequently Asked
            <br />
            <span className="text-gray-500">Questions</span>
          </h2>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="hidden md:block col-span-3">
          {/* Spacer for alignment */}
        </div>

        <div className="col-span-1 md:col-span-9">
          <div className="bg-white/50">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 md:mt-24 p-8 md:p-12 bg-gray-50 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="col-span-1 md:col-span-8">
                <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-3">
                  Still have questions?
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Schedule a consultation to discuss your specific requirements and how Lumina can bring your vision to life.
                </p>
              </div>
              <div className="col-span-1 md:col-span-4 flex justify-start md:justify-end">
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white hover:bg-black transition-all duration-300 text-sm font-medium tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                >
                  Initiate Dialogue
                  <iconify-icon 
                    icon="solar:arrow-right-up-linear" 
                    width="18" 
                    height="18" 
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}