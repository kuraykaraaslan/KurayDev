import Head from 'next/head';

// components
import HeroTop from '../components/elements/main/hero/HeroTop';
import HeroWelcome from '../components/elements/main/hero/HeroWelcome';
import HeroTestimonials from '../components/elements/main/hero/HeroTestimonials';
import HeroFeatures from '../components/elements/main/hero/HeroFeatures';
import HeroContact from '../components/elements/main/hero/HeroContact';


export default function Home() {


  return (
    <>
      <Head>
        <title>home | kuray.dev</title>
        <meta name="description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
        <meta name="keywords" content="software Development, freelancer, web development, mobile app development, full stack development, javascript, python, react, ui/ux design, backend development, frontend development, remote work, api integration, agile development, problem solving" />
        <meta name="author" content="kuray karaaslan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta property="og:title" content="home | kuray.dev" />
        <meta property="og:description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kuray.dev" />
        <meta property="og:site_name" content="kuray.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kuraykaraaslan" />
        <meta name="twitter:creator" content="@kuraykaraaslan" />
        <meta name="twitter:title" content="home | kuray.dev" />
        <meta name="twitter:description" content="i am committed to producing high-quality, efficient, and maintainable code. i thrive in collaborative environments, effectively communicating complex technical concepts to cross-functional teams including designers, product managers, and QA engineers. my strong analytical skills empower me to quickly identify and troubleshoot issues, ensuring smooth project progression and timely delivery." />
      </Head>
      
    
    <HeroTop />
    <HeroWelcome />
    <HeroFeatures />
    <HeroTestimonials />
    <HeroContact />

    </>
  )
}