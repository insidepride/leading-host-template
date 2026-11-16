import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/prata';

export const metadata: Metadata = {
  title: 'Демо-шаблон сайта ведущего',
  description: 'Премиальный демо-шаблон сайта ведущего свадеб, корпоративов, частных и деловых событий.',
};

export default function ArseniyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
