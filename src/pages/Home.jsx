import React from 'react'
import Slider from 'react-slick';
// import Navbar from '../components/Navbar'


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
 
        <div className="home  w-full h-screen pt-32 ps-32" style={{backgroundImage: "url('https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/banner-bg-1.png')"}} >
          <div className='w-5/6 mx-auto'>
    <h1 className='text-3xl font-bold ml-21 '>Travelling and Exploring the World And  
        <br />
        Find The Beauty
        </h1> 
        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed quasi dolorum perspiciatis <br /> ratione totam ipsam incidunt explicabo earum aspernatur dolorem, sunt animi ullam. Odit?</p>
        <button className='mt-6 border-solid border-2 border-red-500 rounded-md h-12 w-40 text-xl hover:bg-slate-500 '>APPOINTMENT</button>
        
        
        <form>
            <div class="sm:col-span-3 ">
             <label for="Destination" class="block text-sm font-medium text-grey-900 mt-10">Destination</label>  
            <div class="md-2 ">
                <select id="Destination" name='Destination' autoComplete='destination-name'clas='block w-full rounded-md border-solid border-2 text-grey-900 shadow-sm'>
                    Destination
<option >Bhutan</option>
<option >pokhara</option>
<option >Switzweland</option>
<option>Unites state</option>
                </select> 
</div>
            </div>

  
        </form>
       
        </div>
        </div>

{/* Tips awesome */}
<div className='px-8 pt-16 mx-auto w-5/6'>
  <div className="Tips text-center">
    <h6 className='text-xl pb-2'> Travel Essential Tips</h6>
    <h1 className='text-4xl font-bold pb-6'>Awesome Tips That Makes Your Travel Beautiful</h1>
  </div>
  <div className='flex  '>
  <img src="/Image/pic4.jpeg" alt="" className=' w-2/3' />
  
  <div className="sun ">
    <div className='border-2 border-solid border-b-gray-400 mt-14 px-6 py-6 -ms-16' style={{backgroundColor:"wheat"}}>
  <h1 className='text-xl pb-2'> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
  <h1 className='text-2xl font-bold pb-3' >10 Sun Hats For Beach Days, Long Hikes, And </h1>
  <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corrupti officia quisquam ipsam, tempore deleniti?</p>
  <button className='border-2 border-solid border-red-300  hover:bg-slate-500 px-2 py-2 '>Read More</button>
  </div>
  </div>
  </div>

</div>


        {/*Adventure  */}
        <div className="adventure ps-5 pe-4  w-5/6 mx-auto">
          <div className='flex  '>
            <div className="para border-2 border-solid border-b-gray-600 ps-3 py-5  w-2/3 my-24 -me-16 z-10 " style={{backgroundColor:"wheat"}}>
          <h1 className='text-xl pb-2'> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
          <h1 className='text-3xl font-bold pb-3'>Pokhara In August:Waiting for vistors</h1>
          <p className='pb-3'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, laboriosam?</p>
          <button className=' border-2 border-solid border-red-300 hover:bg-slate-400 px-3 py-2 '>Read More</button>
          </div>
          <div className=' pt-5'>
            <img src="/Image/pic10.jpeg" alt="" className='h-96' />
          </div>
          </div>
        </div>

        {/* Awesome tour */}
      
        <div className="blog text-center py-5  ">
          <div className='w-4/5 mx-auto'>
          <h4 >Awesome Tours</h4>
          <h1 className='pt-2 text-4xl font-bold'>Best Holiday Package</h1>
          <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam modi sequi! Laudantium, quia illum.</p>
          
          <div className="slider-container">
      <Slider {...settings}>
        <div className='pe-2'>
        <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full'>
                <img src="/Image/pic7.jpeg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible England With AkA Travels</h1>
                </div>
                <div className="div flex ">
                  <div className='ps-2'>
                  <h1 className='mr-14 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i> High Tower,England</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
        <div className='pe-2'> 
        <div className="div border-2 border-solid">
              <div className='px-3 py-3 w-full '>
                <img src="/Image/pic8.jpeg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible USA With AKA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-7 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i>  United Sate of America</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
        <div className='pe-2'>
        <div className="flex space-x-3">
            <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full'>
                <img src="/Image/manakamana.jpg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible Nepal With AkA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-3 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i>  Manakama kurintar, Nepal</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            </div>
        </div>
        <div className='pe-2'>
        <div className="flex space-x-3">
            <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full'>
                <img src="/Image/manakamana.jpg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible Nepal With AkA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-3 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i>  Manakama kurintar, Nepal</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            </div>
        </div>
        <div className='pe-2'>
        <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full '>
                <img src="/Image/pic8.jpeg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible USA With AKA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-7 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i>  United Sate of America</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
        <div className='pe-2'>
        <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full'>
                <img src="/Image/pic7.jpeg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible England With AkA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-14 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i> High Tower,England</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
      </Slider>
    </div>
          </div>
        </div>
        <div className="div text-center">
          <button className='border-2 border-solif border-red-300 hover:bg-slate-300  px-8 py-2 text-xl'>View More</button>
        </div>
        
        {/*  Breathtaking cities*/}
        
        
        <div className='flex pt-9 w-5/6 mx-auto'>
          {/* <div className="wrapper w-4/5 mx-auto"> */}
            <div className="cities flex  flex-col px-4 ">
              <div className="para">
                <h6 className='text-xl'>Go & Discover</h6>
                <h1 className='pt-2 font-bold text-6xl  '>Breathtaking Cities</h1>
                <p className='pt-3  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, vero. Similique minus odit corrupti perspiciatis ab accusantium iste.</p>
              </div>
              
              <div className='flex flex-row h-80 space-x-2 pt-4 ' >
                <img src="/Image/2.jpg" alt="" className='w-2/4 ' />
                <img src="/Image/pic2.webp" alt="" className='w-2/4' />
                </div>
                </div>  
                
              
              
            <div className='pe-3 '>
              
              <img src="/Image/pic14.jpeg" alt="" className='w-full h-full px-2' />
              </div>
          {/* </div> */}
          </div>

          {/* special activities */}
          
          <div className='pt-5  ps-3 flex justify-betwern items-center space-x-1 pe-3 ' >
            <div className=' w-5/6  flex mx-auto space-x-3'>

            <div className="special border-2 border-solid border-slate-500 w-1/4 text-center py-6 h-64" >
              <h1 className='text-4xl  '><i class="fa-solid fa-star"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Special Activities</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni reiciendis vero omnis</p>
            </div>

           
       

            <div className="special border-2 border-solid border-slate-500 w-1/4 text-center py-6 h-64 " >
              <h1 className='text-4xl '><i class="fa-solid fa-person"></i>
              </h1>
              <h1 className='pt-3 font-bold text-xl '>Proper Guide</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni reiciendis vero omnis .</p>
            </div>
            <div className="special border-2 border-solid border-slate-500 w-1/4 text-center py-6 h-64 " >
              <h1 className='text-4xl '><i class="fa-solid fa-plane"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Travel Arrangement</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni </p>
            </div>
            <div className="special border-2 border-solid border-slate-500 w-1/4 text-center py-6 h-64" >
              <h1 className='text-4xl '><i class="fa-solid fa-location-dot"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Location Manager </h1>
              <p className='pt-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni </p>
            </div>
            </div>
            </div>

            {/* Get Special Offer */}

         <div className='ram flex justify-between items-center   mt-9 bg-slate-50 ' >
         
          <div className="sita w-full">

            <div className="wrapper w-5/6 mx-auto flex  px-6 py-28">
              <div className="offer">
                <h6 className='text-xl'>Go & Discover</h6>
                <h1 className='text-6xl font-bold pt-2'>Get Special Offer</h1>
                <p className='pt-8 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dicta hic tenetur aut excepturi velit.</p>
                <button className='border-2 border-solid border-slate-600 rounded-full py-2 px-2 hover:bg-slate-600'>OPEN AN ACCOUNT</button>
              </div>
              <h1 className='text-9xl ml-10 font-bold'>35% off</h1>

            </div>
         
              
          </div>

          </div>



       

     

         {/* breathtaking cities */}
         
<div className="breathtaking pt-5 ps-4  text-center mx-auto w-5/6  ">
  <h6 className='text-xl '>Go & Discover</h6>
  <h1 className='text-4xl pt-2 pb-3 font-bold'>Breathtaking Cities</h1>
  <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dict Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dignissimos corporis ullam?</p>
 
</div>
<div className="  ps-4 pe-4 pb-16  mx-auto w-5/6">
<div className="slider-container w-full">
      <Slider {...settings}>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic4.jpeg" alt=""className='pic4 h-96 '/>
  <h1 className='text-xl pt-2'>Maldives <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic5.jpeg" alt=""className='pic5 h-96 '/>
  <h1 className='text-xl pt-2'>Colombo <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic6.webp" alt=""className=' pic6 h-96 '/>
  <h1 className='text-xl pt-2'>Bhutan <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic8.jpeg" alt=""className='h-96 pic8 '/>
  <h1 className='text-xl pt-2'>England <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic7.jpeg" alt=""className='pic7 h-96 '/>
  <h1 className='text-xl pt-2'>France <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic9.webp" alt=""className='h-96 pic9 '/>
  <h1 className='text-xl pt-2'>USA <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
      </Slider>
    </div>

</div>
<div>


</div>

{/* Clients words */}
<div style={{backgroundColor:"wheat"}}>
 <div className='w-5/6 mx-auto flex py-5 px-5'>

 <div className="discover">
    <h6 className='text-xl'>Go & Discover</h6>
    <h1 className='text-4xl font-bold py-4'>What's Our Client's Words</h1>
    <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint aliquid cumque deleniti nostrum iure eum neque optio labore aperiam!</p>
    <button className='px-4 py-2 border-2 border-solid border-red-300'>View More</button>
  </div>
  
  <div className="ceo  ">
   
    <img src="/Image/women.jpg" alt="" className=' gita border-2 border-solid  px-2 py-2 w-10/12 m-auto border-b-gray-400' />
    <h1 className='text-center pt-3 text-xl font-bold'>Alax Markun</h1>
        <h4 className='text-center'>CEO, Vecuro</h4>
  </div> 

</div>
 </div>
  
{/* Our blog */}
      
      <div className="blog text-center pt-24 pb-4 mx-auto w-5/6">
        <h6 className='text-xl pb-3'> Blog & News</h6>
        <h1 className='text-5xl font-bold pb-4'>Our Latest Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia tempora reiciendis quisquam id consequuntur. Tempora, fugiat beatae?</p>
       
      </div>
<div className="div1 flex pt-4 px-4 space-x-2 mx-auto w-5/6">
<div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-3/4'>
        <img src="/Image/pic4.jpeg" alt="" className='pic4' />
        <h1 className='text-xl font-bold pt-3 pb-2'> 10 Sun Hats For Beach Days, Long</h1>
        <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
        <div className='flex items-center pb-9'>
        <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
        <div className='text-xl ps-9'>
        <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300  px-4 py-2'><a href="Blogs.html"> Read More</a></button>
        </div>
        </div>
      </div>
      <div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-3/4'>
        <img src="/Image/pic9.webp" alt="" className='pic4' />
        <h1 className='text-xl font-bold pt-3 pb-2'> Cambodia In USA: Island Hopping And Weather Tips</h1>
        <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
        <div className='flex items-center pb-9'>
        <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
        <div className='text-xl ps-9'>
        <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300 px-4 py-2 '><a href="Blogs.html"> Read More</a></button>
        </div>
        </div>
      </div>
      <div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-3/4'>
        <img src="/Image/pic7.jpeg" alt="" className='pic4' />
        <h1 className='text-xl font-bold pt-3 pb-2'> Beauty when sunset</h1>
        <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
        <div className='flex items-center pb-9'>
        <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
        <div className='text-xl ps-9'>
        <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300 px-4 py-2'><a href="Blogs.html"> Read More</a></button>
        </div>
        </div>
      </div>
      </div>
      <div className='text-center py-8 '>
        <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300 px-5 py-3' >View More</button>
      </div>


    </>
    

  )
}

export default Home