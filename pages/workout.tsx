import Link from "next/link"
import React from "react"
import { HiArrowSmLeft } from "react-icons/hi"
export default function workout() {
  return (
    <div className="flex justify-center items-center  h-screen">
      <Link href={"/"}>
        <button className="fixed top-3 left-3 ">
          <HiArrowSmLeft size={70} color={"white"} />
        </button>
      </Link>
      <div className="text-white text-2xl">TODO: workout page</div>
    </div>
  )
}
