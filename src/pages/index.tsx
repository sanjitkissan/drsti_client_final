import Blogpageiner from "../components/blogpage/Blogpageiner";
import MainForm from "../components/form/MainForm";
import Brandactivation from "../components/landingPage/BrandActivation";
import Breadcrumb from "../components/landingPage/Breadcrumb";
import CardSection from "../components/landingPage/CardSection";
import HeroSection from "../components/landingPage/HeroSection";
import LinkedInPosts from "../components/landingPage/LinkedInPost";
import MessageSection from "../components/landingPage/MessageSection";
import NewBreadcrumb from "../components/landingPage/NewBreadcrumb";
import OurReachSection from "../components/landingPage/OurReachSection";
import OurWork from "../components/landingPage/OurWork";
import RoadMap from "../components/landingPage/RoadMap";
import RoadMapResponsive from "../components/landingPage/RoadMapResponsive";
import SesponsiveBreadcrumb from "../components/landingPage/SesponsiveBreadcrumb";
import MainLayout from "../layouts/MainLayout";
import Head from 'next/head';




export default function Home() {
  return (
  <>
    <Head>
        <title></title>
        <meta name="title" content="Meta description content goes here." />
        <meta name="description" content="Meta description content goes here." />
    </Head>
    <MainLayout>
      {/* <Blogpageiner/> */}
      <MainForm/>
      <SesponsiveBreadcrumb/>
      <Breadcrumb/>
      <HeroSection/>
      <OurReachSection/>
      {/* <RoadMap/>
      <RoadMapResponsive/> */}
      
      <CardSection/>   
      <MessageSection/>
      <LinkedInPosts/>

    </MainLayout>
    </>
  )
}
