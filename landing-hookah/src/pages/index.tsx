import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WelcomeSection from '@/components/Sections/WelcomeSection';
import AboutSection from '@/components/Sections/AboutSection';
import FAQSection from '@/components/Sections/FAQSection';
import ContactSection from '@/components/Sections/ContactsSection';
import GallerySection from '@/components/Sections/GallerySection';
import PriceSection from '@/components/Sections/PriceSection';
import TargetSection from '@/components/Sections/TargetSection';
import PositivesSection from '@/components/Sections/PositivesSection';
import ProductSection from '@/components/Sections/ProductSection';
import DelimiterLogo from '@/components/Delimiters/DelimiterLogo';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../constants';

function Home() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <>
      <Header />
      <main>
        <Head>
          <title>{t('page-title')}</title>
        </Head>
        <WelcomeSection />
        <AboutSection />
        <PositivesSection />
        <TargetSection />
        <DelimiterLogo />
        <ProductSection />
        <DelimiterLogo />
        <PriceSection />
        <GallerySection />
        <ContactSection />
        <DelimiterLogo classes="logo-hp_2" />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
