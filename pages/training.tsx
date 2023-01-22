import TrainCount from "@/components/TrainCount"
import Link from "next/link"
import React, { useState } from "react"
import { HiArrowSmLeft } from "react-icons/hi"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

export default function training() {
  const [series, setSeries] = useState(1)
  const [time, setTime] = useState(1)
  const [rest, setRest] = useState(1)

  const parseTime = (x: number) => {
    const minutes = x
    if (x === 0) {
      return x
    }
    if (x === 0.5) {
      return `30s`
    }
    if (x % 1 === 0) {
      return `${x}min`
    }
    return `${parseInt(x)}m30s`
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Link href={"/"}>
        <button className="fixed top-3 left-3 ">
          <HiArrowSmLeft size={70} color={"white"} />
        </button>
      </Link>
      <div className="flex flex-col text-3xl font-mono text-white text-center mb-8">
        <p className="select-none">Series</p>
        <div className="flex justify-center items-start mb-2">
          <button
            className=""
            onClick={() => {
              setSeries(series + 1)
            }}
          >
            <AiOutlinePlusCircle size={51} />
          </button>
          <input
            disabled
            type="text"
            value={series}
            id="series"
            className=" border rounded py-2 px-3 leading-tight focus:outline-none  w-28 bg-black focus:outline-gray-200 text-center mx-2 pointer-events-none"
          />
          <button>
            <AiOutlineMinusCircle
              size={51}
              onClick={() => {
                setSeries(Math.max(series - 1, 0))
              }}
            />
          </button>
        </div>
        <p className="select-none">Time</p>
        <div className="flex justify-center items-start mb-2">
          <button
            className=""
            onClick={() => {
              setTime(time + 0.5)
            }}
          >
            <AiOutlinePlusCircle size={51} />
          </button>
          <input
            disabled
            type="text"
            value={parseTime(time)}
            className="border rounded py-2 px-3 leading-tight focus:outline-none  w-28 bg-black focus:outline-gray-200 text-center mx-2 pointer-events-none"
          />
          <button
            onClick={() => {
              setTime(Math.max(0, time - 0.5))
            }}
          >
            <AiOutlineMinusCircle size={51} />
          </button>
        </div>
        <p className="select-none">Rest</p>
        <div className="flex justify-center items-start mb-2">
          <button
            className=""
            onClick={() => {
              setRest(rest + 0.5)
            }}
          >
            <AiOutlinePlusCircle size={51} />
          </button>
          <input
            disabled
            type="text"
            value={parseTime(rest)}
            className="border rounded py-2 px-3 leading-tight focus:outline-none  w-28 bg-black focus:outline-gray-200 text-center mx-2 pointer-events-none"
          />
          <button
            onClick={() => {
              setRest(Math.max(0, rest - 0.5))
            }}
          >
            <AiOutlineMinusCircle size={51} />
          </button>
        </div>
      </div>
      <TrainCount />
    </div>
  )
}
