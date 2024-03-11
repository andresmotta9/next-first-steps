import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
  keywords: ['About page', 'Andres', 'Next js'],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About page</span>
    </>
  );
}
