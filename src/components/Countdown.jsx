import React from 'react'
import { meetup } from '../config'
import messages from '../messages.json'
import TabView from './TabView'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [jiggle, setJiggle] = React.useState(false)

  const [ruruMsgIndex, setRuruMsgIndex] = React.useState(0)
  const [rikaMsgIndex, setRikaMsgIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRuruMsgIndex((prev) => (prev + 1) % messages.ruru.length)
      setRikaMsgIndex((prev) => (prev + 1) % messages.rika.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getTimeLeft()
      setTimeLeft(newTime)

      if (newTime.seconds % 10 === 0) {
        setJiggle(true)
        setTimeout(() => setJiggle(false), 600)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const getTimeLeft = () => {
    const now = new Date()
    const eventDate = new Date(meetup.date)
    const timeLeft = eventDate - now
    const totalSeconds = Math.floor(timeLeft / 1000)
    const days = Math.floor(totalSeconds / (3600 * 24))
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return { days, hours, minutes, seconds }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-red-200 flex flex-col justify-center items-center text-rose-800 font-['Inter_Tight'] p-4 relative overflow-x-hidden">
      {/* Top row with characters + speech bubbles */}
      <div className="w-full flex justify-between items-start px-4 sm:px-16">
        {/* Ruru Side */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mt-6">
          <img
            src="./ruru.jpg"
            alt="ruru img"
            className="w-32 sm:w-52 rotate-[-12deg] opacity-90 pointer-events-none border-4 border-white"
          />
          <div className="bg-white/80 rounded-xl px-3 py-2 text-sm sm:text-2xl shadow-md max-w-[300px]">
            {messages.ruru[ruruMsgIndex]}
          </div>
        </div>

        {/* Rika Side */}
        <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-2 sm:gap-4 mt-6">
          <img
            src="./rika.jpg"
            alt="rika img"
            className="w-32 sm:w-52 rotate-[12deg] opacity-90 pointer-events-none border-4 border-white"
          />
          <div className="bg-white/80 rounded-xl px-3 py-2 text-sm sm:text-2xl shadow-md max-w-[300px]">
            {messages.rika[rikaMsgIndex]}
          </div>
        </div>
      </div>

      {/* Countdown Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mt-10 mb-8 text-center px-4">
        Ruru coming to meet {meetup.name} in...
      </h1>

      {/* Countdown Boxes */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-center">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div
            key={unit}
            className={`bg-white/60 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-md border border-rose-300 min-w-[70px] sm:min-w-[90px] transition-transform duration-500 ${
              jiggle ? 'jiggle' : ''
            }`}
          >
            <div className="text-2xl sm:text-3xl font-semibold text-rose-700">
              {timeLeft[unit]}
            </div>
            <div className="text-sm sm:text-xl font-light text-rose-500 capitalize">
              {unit}
            </div>
          </div>
        ))}
      </div>
 

       <div className='mt-8'>
  <TabView/>
       </div>
     


      {/* Potato image and text below */}
    <div className="mt-20 sm:mt-32 flex flex-col items-center space-y-2">
  <div className="flex items-center justify-center gap-4 sm:gap-10">
    <div className="text-3xl sm:text-5xl font-extrabold text-rose-700">POTATU</div>

    <img
      src="/potatu.png"
      alt="potatu"
      className="w-40 sm:w-56 opacity-90 pointer-events-none"
    />

    <div className="text-3xl sm:text-5xl font-extrabold text-rose-700">PUTTU</div>
  </div>


</div>

    </div>
  )
}

export default Countdown
