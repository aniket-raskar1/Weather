import React from 'react'
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi'
import { BsCloudSun } from 'react-icons/bs'

function Weather({ data }) {
  console.log(data)

  if (!data || !data.weather || !data.weather[0]) {
    return <p className="text-center text-xl text-gray-400">Loading weather...</p>
  }

  return (
    <div className='relative flex flex-col justify-between max-w-[500px] h-[90vh] m-auto p-6 text-gray-300'>
      {/* Top Section */}
      <div className='relative flex justify-between items-center pt-24'>
        <div className='flex items-center gap-3'>
          <BsCloudSun size={30} />
          <p className='text-2xl capitalize'>{data.weather[0].description}</p>
        </div>
        <p className='text-3xl font-semibold'>
          {data.main.temp}&#176;
        </p>
      </div>

      {/* Bottom Section */}
      <div className='bg-black/40 relative mt-60 p-6 rounded-xl border border-gray-700 shadow-md hover:scale-105 transition-transform'>
        <p className='text-2xl text-center pb-6 font-semibold text-white'>
          Weather in <span className='text-yellow-400'>{data.name}</span>
        </p>

        <div className='flex justify-between text-center text-white'>
          <div className='flex flex-col items-center'>
            <WiThermometer size={36} />
            <p className='text-xl font-bold'>{data.main.feels_like}&#176;</p>
            <p className='text-md'>Feels Like</p>
          </div>

          <div className='flex flex-col items-center'>
            <WiHumidity size={36} />
            <p className='text-xl font-bold'>{data.main.humidity}%</p>
            <p className='text-md'>Humidity</p>
          </div>

          <div className='flex flex-col items-center'>
            <WiStrongWind size={36} />
            <p className='text-xl font-bold'>{data.wind.speed} KPH</p>
            <p className='text-md'>Winds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
