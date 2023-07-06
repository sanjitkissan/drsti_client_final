import React from 'react'
import MainForm from '../components/form/MainForm'
import Breadcrumb from '../components/gallery/Breadcrumb'
import HeroSection from '../components/gallery/HeroSection'
import Photos from '../components/gallery/Photos'
import MainLayout from '../layouts/MainLayout'
import NewPhoto from '../components/gallery/NewPhoto'

export default function Gallery() {
  return (
    <MainLayout>
      <MainForm/>
      <Breadcrumb/>
      <HeroSection/>
      {/* <Photos/> */}
      <NewPhoto/>
    </MainLayout>
  )
}
