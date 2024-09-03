import React from 'react';
import Welcome from '@/components/freelance/Welcome';
import Services from '@/components/freelance/Services';
import Contact from '@/components/default/Hero/Contact';

import Platforms from '@/components/freelance/Platforms';
import Price from '@/components/freelance/Price';
import Testimonials from '@/components/default/Hero/Testimonials';
import PayWith from '@/components/freelance/PayWith';

const Page = () => {
    return (
        <>
        <Welcome />
        <Services />
        <Price />
        <Platforms />
        <Testimonials />
        <PayWith />
        <Contact bsckgroundColor='bg-base-200' />
        </>
    )
};

export default Page;