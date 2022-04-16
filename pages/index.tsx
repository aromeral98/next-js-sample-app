import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout
    title='Home'
    description='home'
    >
      <h1>HOME</h1>
    </Layout>
  )
}

export default Home
