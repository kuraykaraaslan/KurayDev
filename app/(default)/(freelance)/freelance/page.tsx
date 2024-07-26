import React from 'react';
import Welcome from '@/components/freelance/Welcome';
import Services from '@/components/freelance/Services';
import Contact from '@/components/default/Hero/Contact';

import Platforms from '@/components/freelance/Platforms';
import Price from '@/components/freelance/Price';
import Testimonials from '@/components/default/Hero/Testimonials';

const Page = () => {
    return (
        <>
        <Welcome />
        <Services />
        <Price />
        <Platforms />
        <Testimonials />
        <Contact bsckgroundColor='bg-base-100' />
        </>
    )
};

export default Page;