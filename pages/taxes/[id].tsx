import React from 'react'
import Layout from '../../components/Layout'

type Props = {
    data: any
}

const Post : React.FC<Props> = ({data}) => {
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
        const paths = data.map(function ({ id }: {id : any}): { params: { id: string} }  {
                return ({ params: { id: `${id}` } })
            })
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
    }
}
export const getStaticProps : any = async ({ params }: {params : any}) => {
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