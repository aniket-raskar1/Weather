'use client'
import axios from "axios";

import { Flamenco } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from 'react-icons/bs'
import Weather from "./components/Weather";
export default function Home() {

  const [city,setCity] = useState('');
  const [weather , setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperical&appid=${process.env.NEXT_PUBLIC_API_KEY}`

  
  const feathWeather = (e) =>{
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((responce) =>{
      setWeather(responce.data)
      // console.log(responce.data)
      console.log(responce.data.weather[0].description)
    })
    setCity('')
    setLoading(false)
  }

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      {/* search */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form  onSubmit={feathWeather} className="flex justify-between items-center w-full m-auto bg-transparent border-gray-300 text-white rounded-3xl">
          <div>
            <input onChange={(e)=>setCity(e.target.value)} className="w-full bg-transparent text-white focus:outline-none text-xl mt-5 mx-8 border px-2 py-3 rounded-3xl" type="text" placeholder="Search City"></input>
          </div>
          <button  className="pt-5 mx-2" onClick={feathWeather}><BsSearch size={20}/></button>
        </form>
      </div>

      {/* weather */}
      <Weather data={weather}/>

    </div>
  );
}
