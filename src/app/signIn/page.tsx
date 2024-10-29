"use client";

import { signIn } from "@app/actions";
import Input from "@componets/input";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
  message: ' '
}

export default function Page() {
  const [state, formAction] = useFormState(signIn, initialState)
  return (
    <div className="mx-auto max-w-lg flex flex-col items-center">
      <h3 className="text-xl font-medium py-4">Sign In</h3>
      {
        state?.message && (
          <p className="text-red-500 font-semibold">{state.message}</p>
        )
      }
      <form className="w-full flex flex-col space-y-4" action={formAction}>
        <Input type="email" name="email" labelName="Email" />
        <Input type="password" name="password" labelName="Password" />
        <button className="py-2 px-4 border border-orange-600 rounded-3xl text-white bg-orange-500 font-bold">
          Sign In
        </button>
      </form>
      <div className="mt-4 flex items-center w-full justify-center">
        <hr className="border-gray-400 w-full" />
        <span className="px-3">or</span>
        <hr className="border-gray-400 w-full" />
      </div>
      <Link
        href="/createAccount"
        className="mt-4 w-full text-center rounded-full px-4 py-2 block border border-orange-600 text-orange-500 bg-white font-medium"
      >
        Create Account
      </Link>
    </div>
  );
}
