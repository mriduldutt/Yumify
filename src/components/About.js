import React from 'react';
import { Component } from 'react';
import { LOGO_URL2 } from '../utils/constant';

import { COMPANY_IMG_URL, 
  GITHUB_IMG_URL, LINKEDIN_IMG_URL, LOCATION_IMG_URL, LOGO_URL, PHONE_IMG_URL } from '../utils/constant';


class About extends React.Component{
  
  constructor(props){
     super(props);
     this.state = {
         userInfo : {
          name : "Dummy name", 
          location : "Vaishali (Delhi-NCR)", 
          avatar_url : "https://avatars.githubusercontent.com/u/65560761?s=400&u=35afd3f05eea3764074c5691243c475101d9f18c&v=4"
        },
     }
   }

   componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

   render(){
   const {avatar_url,name,location}=this.state.userInfo;
   return(
    
    <div>
        <div className='w-full h-auto bg-blue-200 p-12 mb-3 text-xs sm:text-base text-center shadow-lg'>
            <div className=' mx-auto p-2 '>
                <div className='flex justify-center'>
                    <img src={LOGO_URL2} className=' h-16'/>
                    <span className='font-semibold mt-5'>Yumify </span>
                </div>     
            </div>
            <p className='text-gray-700 p-2'>  To retrieve restaurant information in real time, it uses Swiggy's Live API data features that include the Redux toolkit shopping cart feature and UI configuration with conditional rendering. The application also incorporates lazy loading, react-top-loader functionality, and shimmer UI.
            </p>
        </div>
        <div className='w-full h-auto p-6 flex flex-wrap font-semibold text-sm sm:text-base mb-3 justify-around'>
        <div className='mt-4'>
            <img src={avatar_url} className='rounded-full h-40' ></img>
                <p className='font-bold m-2 ml-0 p-2 pl-0 text-center'>Mridul Dutt</p>
            </div>
        <div className='m-2 p-2'>
            <div className='m-2 p-2 flex justify-start'><img  className="w-5 m-1"src={COMPANY_IMG_URL}/> <span>Wipro Limited (Project Engineer)</span></div>
            <div className='m-2 p-2 flex justify-start'><img  className="w-5 m-1" src={LOCATION_IMG_URL}/> <span>{location}</span></div>
        </div>
            <div className='m-2 p-2 '>
            <div className='m-2 p-2 flex justify-start hover:underline'><img  className="w-5 m-1 mt-0" src={LINKEDIN_IMG_URL}/> <span><a target='_blank' href='https://www.linkedin.com/in/mridul-dutt/'>Linkedin</a></span></div>
            <div className='m-2 p-2 flex justify-start hover:underline'><img  className="w-5  m-1 mt-0" src={GITHUB_IMG_URL}/> <span><a href='https://github.com/mriduldutt' target='_blank'>Github</a></span></div>
        </div>
        </div>
    </div>
    )
   }
}


export default About;
