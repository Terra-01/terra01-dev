// src/components/Education.tsx
import IconSchool from './icons/IconSchool';

type Degree = {
  degree: string;
  institution: string;
  location: string;
  period: string;
};

type EducationProps = {
  degrees: Degree[];
};

export default function Education({ degrees = [] }: EducationProps) {
  return (
    <section id="education">
      <h2 className="text-base font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-6">Education</h2>
      <div className="bg-[var(--color-bg-secondary)] rounded-md p-6 transition-shadow shadow-[0_4px_14px_0_var(--color-shadow)]/10 hover:shadow-[0_6px_20px_0_var(--color-shadow)]/20">
        {degrees.map((degree, index) => (
          <div key={index} className="[&:not(:last-child)]:mb-6">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{degree.degree}</h3>
            <div className="flex items-center gap-2 mt-1">
              <IconSchool size={16} className="text-[var(--color-text-muted)]" />
              <p className="text-md text-[var(--color-text-secondary)]">{degree.institution}</p>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              {degree.location} | {degree.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}