import React from 'react';
import Welcome from '@/components/freelance/Welcome';
import Services from '@/components/freelance/Services';
import Contact from '@/components/default/Hero/Contact';

import Platforms from '@/components/freelance/Platforms';
import Price from '@/components/freelance/Price';

const Page = () => {
    return (
        <>
        <Welcome />
        <Services />
        <Price />
        <Platforms />
        <Contact />
        </>
    )
};

export default Page;