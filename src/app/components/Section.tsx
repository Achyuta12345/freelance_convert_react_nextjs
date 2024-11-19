// components/Section.tsx
import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className, children }) => (
  <section id={id} className={className}>
    {children}
  </section>
);
