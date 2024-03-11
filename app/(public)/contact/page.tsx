import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Title',
  description: 'Contact Title',
  keywords: ['Contact page', 'Andres', 'Next js'],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">Contact page</span>
    </>
  );
}
