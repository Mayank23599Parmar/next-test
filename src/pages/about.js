import Link from 'next/link';
import React from 'react'

export default function About  ({res})  {
  return (
    <div>
      {res.map((cv,index)=>{
        return <div key={index}><Link href={`/products/${cv.id}`} >{cv.title}</Link><br/></div>
      })}
    </div>
  )
}
export async function getStaticProps(context){
  const data= await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const res= await data.json()
  return {
    props:{
      res
    }
  }
}