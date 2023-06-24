import React from 'react';
import Breadcrumb from '../components/drstinewblog/Breadcrumb';
import Newblogs from '../components/drstinewblog/Newblogs';
import MainForm from '../components/form/MainForm';
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';

function Blog() {
    return (
<>
      <Head>
        <title></title>
        <meta name="title" content="Meta description content goes here." />
        <meta name="description" content="Meta description content goes here." />
      </Head>


        <MainLayout title="drsti-blog">
            <MainForm/>
            <Breadcrumb/>
          <Newblogs/>
            
        </MainLayout>
        </>
    );
}

export default Blog;