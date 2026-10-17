"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-surface-container/30 transition-colors"
            >
              <h3 className="font-headline-sm text-[1.125rem] text-primary font-medium">
                {item.question}
              </h3>
              <span className="material-symbols-outlined text-outline text-xl flex-shrink-0 transition-transform duration-200">
                {isOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-0 border-t border-outline-variant/30 text-body-md font-body-md text-on-surface-variant leading-relaxed animate-in fade-in duration-200">
                <p className="pt-4">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
