import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>kyle zielinsky | web developer, photography, and other stuff</title>
      <meta name="description" content="kyle zielinsky is an experienced web developer and occasional artist." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>kyle zielinsky</h1>
  </div>
);

export default Home;
