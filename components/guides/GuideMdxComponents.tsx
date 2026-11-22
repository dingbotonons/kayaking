"use client";

import React from "react";
import {
  Accordion as ShadcnAccordion,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
  AccordionContent as ShadcnAccordionContent,
} from "@/components/ui/accordion";
import { ShieldCheck, Sparkles, CheckCircle2, Info } from "@/components/ui/Icons";

/**
 * Clean, research & methodology notice
 * Small text, light color background, fully rounded borders
 */
export function ResearchNotice({
  title = "Research-backed field guide",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-[18px] bg-seafoam/40 border border-teal/15 p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-ink/75 leading-relaxed shadow-xs">
      <div className="w-8 h-8 rounded-full bg-white border border-teal/15 flex items-center justify-center shrink-0 text-teal shadow-xs mt-0.5">
        <ShieldCheck className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <span className="block font-bold text-teal text-xs uppercase tracking-wider mb-1">
          {title}
        </span>
        <div className="text-xs sm:text-sm text-ink/70 leading-relaxed font-sans space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * High-end Key Takeaways Card container
 */
export function KeyTakeaways({
  title = "Key takeaways",
  eyebrow = "Essential Summary",
  children,
}: {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-[20px] bg-white border border-teal/20 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider border border-teal/15">
          <Sparkles className="w-3.5 h-3.5 text-teal" />
          {eyebrow}
        </span>
      </div>
      <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

/**
 * Individual Key Takeaway Item card
 */
export function TakeawayItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[16px] bg-seafoam/30 border border-teal/15 p-4 sm:p-5 flex flex-col justify-start hover:border-teal/30 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
        <span className="font-bold text-xs uppercase tracking-wider text-teal">
          {label}
        </span>
      </div>
      <div className="text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
        {children}
      </div>
    </div>
  );
}

/**
 * Clean caption/source badge for tables
 */
export function TableNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mt-6 mb-8 px-4 py-2.5 bg-seafoam/30 rounded-[14px] border border-teal/10 text-xs text-ink/65 italic flex items-start gap-2 leading-relaxed">
      <Info className="w-4 h-4 text-teal shrink-0 mt-0.5" />
      <div className="flex-1">{children}</div>
    </div>
  );
}

/**
 * Shadcn-powered FAQ Accordion container
 */
export function FaqAccordion({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <ShadcnAccordion type="single" collapsible defaultValue={defaultValue} className="my-8 space-y-3">
      {children}
    </ShadcnAccordion>
  );
}

/**
 * Individual Shadcn FAQ Item
 */
export function FaqItem({
  question,
  value,
  children,
}: {
  question: string;
  value?: string;
  children: React.ReactNode;
}) {
  const itemValue = value || question.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 35);
  return (
    <ShadcnAccordionItem value={itemValue}>
      <ShadcnAccordionTrigger>{question}</ShadcnAccordionTrigger>
      <ShadcnAccordionContent>{children}</ShadcnAccordionContent>
    </ShadcnAccordionItem>
  );
}

export const Accordion = FaqAccordion;
export const AccordionItem = FaqItem;
