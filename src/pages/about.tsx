import React from 'react';
import Breadcrumb from '../components/about/Breadcrumb';
import CreateEvents from '../components/about/CreateEvents';
import OurPartners from '../components/about/OurPartners';
import OurTeam from '../components/about/OurTeam';
import WhyChoose from '../components/about/WhyChoose';
import MainForm from '../components/form/MainForm';
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';
import RoadMap from '../components/landingPage/RoadMap';
import RoadMapResponsive from '../components/landingPage/RoadMapResponsive';


function About() {
    return (
        <>
        <Head>
        <title></title>
        <meta name="title" content="Meta description content goes here." />
        <meta name="description" content="Meta description content goes here." />
      </Head>
        <MainLayout title="drsti-about">
            <MainForm/>
            {/* <Breadcrumb/> */}
            <RoadMap/>
            <RoadMapResponsive/>
            {/* <CreateEvents/> */}
            <OurTeam/>
            <WhyChoose/>
          
        </MainLayout>
        </>
    );
}

export default About;