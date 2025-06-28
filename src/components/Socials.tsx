// src/components/Socials.tsx
import IconGithub from './icons/IconGithub';
import IconLinkedin from './icons/IconLinkedin';
import IconX from './icons/IconX';
import IconMail from './icons/IconMail';

export default function Socials() {
  return (
    <div className="flex w-full items-center justify-between">
      {/* GitHub */}
      <a href="https://github.com/Terra-01/" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
        <IconGithub size={22} />
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/shivam91s/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
        <IconLinkedin size={22} />
      </a>
      {/* X (formerly Twitter) */}
      <a href="https://x.com/Shivam_Terra" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter) profile" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
        <IconX size={18} />
      </a>
      {/* Email */}
      <a href="mailto:thisisshivam@icloud.com" aria-label="Email address" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
        <IconMail size={24} />
      </a>
    </div>
  );
}