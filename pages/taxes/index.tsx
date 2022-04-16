import Link from 'next/link';
import React from 'react'
import Layout from '../../components/Layout';

export interface Post {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}
type Props = {
  data: Post[]
}

const index :React.FC<Props> = ({data}) => {
  console.log(data)
  return (
    <Layout
    title='Post'
    description='post'>
      <div className='flex flex-col items-center w-6/12 mx-auto'>
      {data.map(post => {
        return <div className='my-4'>
          <Link href={`/taxes/${post.id}`}>
            <h1 className='uppercase font-ArialBlack text-xl cursor-pointer'>{post.title}</h1>
          </Link>
          <p>{post.body}</p>
          <dd>{post.userId}</dd>
        </div>
      })
      }
      </div>

    </Layout>
  )
}

export default index

export async function getStaticProps () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } catch (error) {
      console.log(error)
  }
}