import React from 'react'

 const CollectionPage = ({title}) => {
  return (
    <div>{title}</div>
  )
}
export async function getServerSideProps(context){
const {params,req,res}=context
return {
    props:{title:params.handel}
}
}
export default CollectionPage;