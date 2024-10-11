"use client";

import CloseModalBtn from "./closeModalBtn";
import Input from "./input";
import { singUp } from "../actions";

export default function DialogFormSignUp() {
  const closeModal = () => {
    const dialog = document.getElementById(
      "signUpModal"
    ) as HTMLDialogElement | null;
    dialog?.close();
  };



  return (
    <dialog
      id="signUpModal"
      className="w-full max-w-xl rounded-xl border border-gray-400 border-solid h-[400px] px-2 py-5 relative"
    >
      <h2 className="text-2xl mt-2 text-center font-bold text-gray-800">
        Sign Up
      </h2>
      <form className="w-full p-2 max-w-md mx-auto" action={singUp}>
        <Input
          type="text"
          name="username"
          classname="rounded-xl px-2.5 py-2"
          labelName="Username"
        />
        <Input
          type="email"
          name="email"
          classname="rounded-xl px-2.5 py-2"
          labelName="Email"
        />
        <Input
          type="password"
          name="password"
          classname="rounded-xl px-2.5 py-2"
          labelName="Password"
        />
        <button type="submit" className="w-full py-1.5 border border-orange-600 rounded-2xl text-white bg-orange-500 font-semibold">
          <span>Create Account</span>
        </button>
      </form>
      <CloseModalBtn closeModal={closeModal} />
    </dialog>
  );
}
