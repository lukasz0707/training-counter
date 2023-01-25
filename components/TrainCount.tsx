import React, { useEffect, useState } from "react"

export default function TrainCount({ series, workout, rest }) {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])
  return (
    <div className="text-white text-4xl md:text-5xl border-white border-2 w-[95vw] max-w-lg rounded-full bg-black select-none">
      <div style={running ? { color: "white" } : { color: "#333333" }} className=" font-mono text-center text-5xl md:text-6xl p-8">
        <span className="pr-1">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
        <span className="pr-1">:</span>
        <span className="pr-1">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        <span className="pr-1">:</span>
        <span className="pr-1">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className=" flex justify-around font-mono pb-8">
        <button className="" onClick={() => setRunning(!running)}>
          {running ? "Stop" : "Start"}
        </button>
        <button
          className=""
          onClick={() => {
            setTime(0)
            setRunning(false)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
