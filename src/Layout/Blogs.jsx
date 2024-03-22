import React from 'react'
import Header from './Header'
// import { MailIcon } from '@heroicons/react/outline'

import './Blogs.css'


const Blogs = () => {
  return (
   <>
   <Header/>
   <div className='Blogs flex justify-between'>
        <div className="blog-left w-4/6 ">

        
            <div className=' w-full '>
            <img src="\Image\pic3.webp" alt="" className='pic3'/>
        <div className='blogscontainer border-2 border-slate-600  '>
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>The salty breeze that carries with it the unmistakable scent of the ocean, mingling with the faint whispers of palm trees swaying in the distance.</h1>
                <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>As the sun dances upon the water's surface, it paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry. Footprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary. Here, time seems to slow, allowing for moments of pure tranquility and connection with the natural world.</p>
               <div className='m-3'>
               <i className="bi bi-calendar pe-8">12 December 2023</i>
               <i className="bi bi-eye-fill pe-8">Views(367)</i>
               <i class="bi bi-chat-right-dots pe-8">0 comments</i>
               </div>
                <button className='font-bold'>READ MORE <i class="bi bi-arrow-right text-lg"></i></button>
            </div>
            </div>

        
        {/* <div className='w-full'> */}
            <img src="\Image\pic2.webp" alt="" className='pic2'/>
            <div className='blogscontainer border-2 border-slate-600'>
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
                
                <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and defining of landscapes and to look for what is common or universal.It paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry</p>
               <div className='m-3'>
                <i class="bi bi-calendar pe-8">12 December 2023</i>
                <i class="bi bi-eye-fill pe-8">Views(345)</i>
                <i class="bi bi-chat-right-dots pe-8">0 comments</i>
                </div>
                <button className='font-bold'>READ MORE <i class="bi bi-arrow-right"></i></button>
            </div>
            

            <img src="\Image\pic1.jpeg" alt="" className='pic1'/>
            <div className='blogscontainer border-2 border-slate-600'>
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
                <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and look for what is common or universal.It paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry</p>
               <div className='m-3'>
                <i class="bi bi-calendar pe-8">12 December 2023</i>
                <i class="bi bi-eye-fill pe-8">Views(200)</i>
                <i class="bi bi-chat-right-dots pe-8">0 comments</i>
                </div>

                <button className='font-bold'><span></span>READ MORE  <i class="bi bi-arrow-right"></i></button>
            </div>        
        </div>
            
                    
      
      <div className="blog-right w-2/6 flex flex-col">
        <div className="search">
            <h1 className='font-extrabold leading-10 text-3xl font-serif underline m-5 '>SEARCH</h1>
             <input  type="text"
            className="w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 cursor-pointer"
            />SEARCH
        </div>
        
        <div className="blogdown">
        <h1 className='font-extrabold leading-10 text-3xl font-serif underline m-5'>RECENT POSTS</h1>
      </div>
      <div className='m-5 flex flex-col justify-center w-full'>
      <img src="\Image\pic3.webp" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8">12 December 2023</i>
      <h1>The number of tourists visiting the Maldives in 2023 surpassed the government's estimated figure by 78,537. </h1>



      <img src="\Image\pic2.webp" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8">12 December 2023</i>
      <h1>The messages for Greek tourism at ITB Berlin, one of the world's largest travel exhibitions, give high hopes for 2024.</h1>



      <img src="\Image\pic1.jpeg" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8">12 December 2023</i>
      <h1>Thailand has positioned itself astutely to capture outbound travel demand from China with its bilateral visa waiver. </h1>



      </div>

      <div className='font-extrabold leading-10 text-3xl font-serif underline m-5'>CATEGORIES</div>
      <ul className='list-unstyled'>
       <div className=' border-2'>
        <li className='py-2 bg-orange-400 my-1 rounded-lg hover:bg-violet-600'><a href="">ADVENTURE(5)</a></li>
        <li className='py-2 bg-red-400 my-1 rounded-lg hover:bg-violet-600'><a href="">FOOD(3)</a></li>
        <li className='py-2 bg-pink-400 my-1 rounded-lg hover:bg-violet-600'><a href="">SUMMER(2)</a></li>
        <li className='py-2 bg-purple-400 my-1 rounded-lg hover:bg-violet-600'><a href="">TRAVEL(6)</a></li>
       </div>
      </ul>
      

      <div className='font-extrabold leading-10 text-3xl font-serif underline m-5'>NEWSLETTER</div>
      <input type="email" placeholder='Enter your email here' name='user_email' required className='w-96 py-2 m-3' />
      <button type='submit' className='w-96 py-2 m-3'>SUBSCRIBE</button>



      <div className='font-extrabold leading-10 text-3xl font-serif underline m-5'>NEVER MISS NEWS</div>
      <div className='icons flex m-3 justify-center'>
      <a href="" className='text-4xl rounded-full'><i class=" fab bi bi-facebook pe-8"></i></a>
      <a href="" className='text-4xl'><i class="fab bi bi-instagram pe-8 "></i></a>
      <a href="" className='text-4xl'><i class="fab bi bi-twitter pe-8 "></i></a>
      <a href="" className='text-4xl'><i class="fab bi bi-pinterest pe-8 "></i></a>
      </div>







       
      









      </div>
      
    </div>
     
                
   
   


   
   
   </>
  )
}

export default Blogs