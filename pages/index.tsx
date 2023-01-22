import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Navbar />
      <Link href={"/training"} className="relative rounded-full text-center hover:scale-110  transition ease-in-out delay-70">
        <h1
          style={{ "text-shadow": "1px 1px 2px black" }}
          className=" text-3xl text-white font-bold select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  drop-shadow-sm"
        >
          Start Training
        </h1>
        <button className="rounded-full">
          <Image src={"/../public/android-chrome-192x192.png"} width={156} height={156} alt={"training"} className="self-center"></Image>
        </button>
      </Link>
      <Footer />
    </div>
  )
}
