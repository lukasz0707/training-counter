import TrainCount from "@/components/TrainCount"
import Link from "next/link"
import React from "react"
import { HiArrowSmLeft } from "react-icons/hi"

export default function training() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Link href={"/"}>
        <button className="fixed top-3 left-3 ">
          <HiArrowSmLeft size={70} color={"white"} />
        </button>
      </Link>
      <TrainCount />
    </div>
  )
}
