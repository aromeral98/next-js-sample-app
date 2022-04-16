import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/Layout'

const freelance = () => {
  return (
    <Layout title='TEST TITLE' description='Lorem impsum'>
      <div className='flex-grow flex h-full flex-col'>
        TEST FREELANCE DESCRIPTION
        <Image height={600} width={600} src='/img/1.jpg' />
      </div>
    </Layout>
  )
}

export default freelance