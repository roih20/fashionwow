'use client'

import Link from "next/link";

export default function Navbar() {


  function showSignInModal() {
    const dialog = document.getElementById('signInModal') as HTMLDialogElement | null
    dialog?.showModal()
  }

  function showSingUpModal() {
    const dialog = document.getElementById('signUpModal') as HTMLDialogElement | null
    dialog?.showModal()
  }


  

  return (
    <nav className="h-16 py-2 border border-gray-300">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between">
        <Link href="/" className="font-semibold text-3xl text-gray-800">Fashion WoW</Link>
        <div className="space-x-1 flex items-center">
          <button onClick={showSignInModal} className="p-2 text-center border block w-24 border-white bg-orange-600 text-white rounded-2xl font-semibold hover:cursor-pointer hover:bg-orange-700">
            Sign In
          </button>
          <button onClick={showSingUpModal} className="p-2 block w-24 text-center text-orange-600 border-orange-600 border rounded-2xl font-semibold hover:cursor-pointer hover:bg-orange-100">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
