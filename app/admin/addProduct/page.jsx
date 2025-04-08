'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {

    const [image, setImage] = useState(false)

    const [data, setData] = useState({
        title: "",
        description:"",
        category:"Starpup",
        author: "Don Kennie",
        authorImg:"/author_img.png"
    })

    const OnChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data, [name]:value}));
        console.log(data);
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description)
        formData.append('cateory', data.category)
        formData.append('author', data.author)
        formData.append('image', image);

        const response = await axios.post('/api/blog', formData);
        if(response.data.success){
            toast.success(response.data.msg)
        }
        else{
            toast.error("Error");
        }
    }

    return(
        <>
            <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'> Upload thumbnail</p>
                <label htmlFor="image">
                    <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
                </label>

                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required/>
                <p className='text-xl mt-4'>Blog title</p>
                <input name='title' onChange={OnChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type here' required />

                <p className='text-xl mt-4'>Blog description</p>
                <textarea name='description' onChange={OnChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Write content here' rows={6} required />
                <p className='text-xl mt-4'>Blog category</p>
                <select name="category" onChange={OnChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500' id="">
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <br />
                <button type="submit" className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
            </form>
        </>
    )
}

export default page