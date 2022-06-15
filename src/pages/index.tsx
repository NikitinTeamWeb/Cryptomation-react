import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import MainSection from '../components/MainSection/MainSection';
import Powered from '../components/Powered/Powered';
import Helper from '../components/Helper/Helper';
import Lightweight from '../components/Lightweight/Lightweight';

import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <MainSection />
      <Powered />
      <Helper />
      <Lightweight />
    </Layout>
  );
};

export default Home;
