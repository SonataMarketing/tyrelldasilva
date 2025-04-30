import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import QuoteSection from '@/components/home/QuoteSection';
import BusinessCards from '@/components/home/BusinessCards';
import ClientReviewsSection from '@/components/home/ClientReviewsSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <QuoteSection />
      <BusinessCards />
      <ClientReviewsSection />
    </Layout>
  );
}
