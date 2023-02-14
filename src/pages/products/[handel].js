import { useRouter } from 'next/router'
import React from 'react'

 const ProductPage = (props) => {
  const router=  useRouter()
  const {handel}=router.query
  const {res}=props
 if(!res){
   return <h1>loading...</h1>
 }
  return (
    <div>
      <h1>{res.title}</h1>
      <p>{res.body}</p>
    </div>
  )
}
export async function getStaticPaths(){
  return{
    paths:[{
      params:{
        handel:"1"
      },
      params:{
        handel:"2"
      }
    }],
    fallback:true
  }
}
export async function getStaticProps(context){
  const {params}=context
  const data= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.handel}`);
  const res= await data.json()
  return {
    props:{
      res
    },
    ///notFound:true
  }
}
export default ProductPage