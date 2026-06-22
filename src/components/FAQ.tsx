"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";
import Script from "next/script";

const faqData = [
  {
    question: "Who is Chamod Anjana?",
    answer:
      "Chamod Anjana is a Software Engineer specializing in Flutter mobile development and full-stack engineering. He currently works at eVision microsystems, where he has built 5 major enterprise Flutter applications for SFA, ERP, POS, and HRIS systems. He is not to be confused with the Sri Lankan rugby player of the same name.",
  },
  {
    question: "What technologies does Chamod Anjana work with?",
    answer:
      "Chamod Anjana is an expert in Flutter, Dart, Riverpod, Drift, Shorebird, ASP.NET, C#, SQL, Vue.js, Python, FastAPI, Docker, Kubernetes, GitHub Actions, Firebase, and Scikit-learn. He builds end-to-end solutions from mobile apps to backend microservices and cloud infrastructure.",
  },
  {
    question: "What languages does Chamod Anjana speak?",
    answer:
      "Chamod Anjana is multilingual and speaks English, German, Romanian, and Finnish at a professional level, alongside his native Sinhala. This makes him a strong candidate for EU-based engineering positions across multiple European countries.",
  },
  {
    question: "Where can I hire or contact Chamod Anjana?",
    answer:
      "You can reach Chamod Anjana via email at chamodanjana9651@gmail.com, connect on LinkedIn at linkedin.com/in/chamodanjana, or view his open-source work on GitHub at github.com/ChamodAnjana. His portfolio is available at chamodanjana.me.",
  },
  {
    question: "What kind of projects has Chamod Anjana built?",
    answer:
      "Chamod Anjana has developed enterprise-grade applications including a Sales Force Automation (SFA) mobile app with GPS tracking and offline-first architecture, an ERP dashboard with DevExpress and Vue.js, an HRIS mobile portal with biometric attendance, and predictive analytics microservices using Python FastAPI and Scikit-learn.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-32">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-zinc-100 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-blue-500"></span>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={false}
              className="bg-zinc-900/40 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle
                    size={20}
                    className="text-blue-400 flex-shrink-0"
                  />
                  <span className="text-lg font-medium text-zinc-200">
                    {item.question}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-zinc-500 text-2xl flex-shrink-0 ml-4"
                >
                  +
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === idx ? "auto" : 0,
                  opacity: openIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-zinc-400 leading-relaxed ml-9">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
