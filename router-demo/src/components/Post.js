import React from 'react'
import {useLocation,useParams} from 'react-router-dom'

export const Post = () => {
    const {id} = useParams()
    const qury = new URLSearchParams(useLocation().search);
  return (
    <div>Post
    <h1>The Id is : {id}</h1>
    <h2>{qury.get("name")}</h2>
    </div>
  )
}


