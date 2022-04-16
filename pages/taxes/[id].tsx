import React from 'react'
import Layout from '../../components/Layout'

const Post = ({data}) => {
    console.log(data)
  return (
    <Layout >
        <h1>Mi primer post</h1>
        <div className='my-4'>
          <h1 className='uppercase font-ArialBlack text-xl'>{data.title}</h1>
          <p>{data.body}</p>
          <dd>{data.userId}</dd>
        </div>
    </Layout>
  )
}

export default Post

export async function getStaticPaths(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({id}): { params: { id: string } }=> ({ params: { id: `${id}`}}))
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
    }
}
export async function getStaticProps ({ params }) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
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