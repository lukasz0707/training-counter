import React from "react"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-800 shadow select-none sm:flex sm:items-center sm:justify-between sm:px-6">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Łukasz Syczewski . All Rights Reserved.</span>
      <ul className="flex flex-wrap items-center mt-1 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className=" hover:underline  p-2 sm:p-4">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline p-2 sm:p-4">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}
