import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-s p-4'>
                <div className='w-full flex justify-center b-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-sm' />

                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard