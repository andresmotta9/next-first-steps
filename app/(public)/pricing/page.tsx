import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Title',
  description: 'Pricing Title',
  keywords: ['Pricing page', 'Andres', 'Next js'],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  );
}
