import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-4 ${className}`}>
      {children}
    </section>
  );
}
