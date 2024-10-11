'use client'

import CloseModalBtn from "./closeModalBtn"
import Input from "./input"


export default function DialogForm() {

  function closeModal() {
    const dialog = document.getElementById('signInModal') as HTMLDialogElement | null
    dialog?.close()
  }


  return (
    <dialog id="signInModal" className="w-full max-w-xl rounded-xl border border-gray-400 border-solid h-80 px-2 py-5 relative">
      <h2 className="text-2xl mt-2 text-center font-bold text-gray-800">Sign In</h2>
      <form className="w-full p-2 max-w-md mx-auto space-y-3">
        <Input 
          type="email"
          name="email"
          classname="rounded-xl px-2.5 py-2"
          value="rodrigofigueroa@gmail.com"
          onChange={() => undefined}
          labelName="Email"
        />
        <Input 
          type="password"
          name="password"
          classname="rounded-xl px-2.5 py-2"
          value="*********"
          onChange={() => undefined}
          labelName="Password"
        />
        <button className="w-full py-2 border border-orange-600 rounded-3xl text-white bg-orange-500 font-bold">Sign In</button>
      </form>
      <CloseModalBtn closeModal={closeModal} />
    </dialog>
  ) 
}