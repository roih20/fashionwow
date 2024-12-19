"use client";

import { signIn } from "@app/actions";
import Input from "@componets/input";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
  email: '',
  password: ''
}

export default function Page() {
  const [state, formAction] = useFormState(signIn, initialState)
  return (
    <div className="mx-auto max-w-lg flex flex-col items-center">
      <h3 className="text-xl font-medium py-4">Sign In</h3>
      <form className="w-full flex flex-col" action={formAction}>
        <Input type="email" name="email" labelName="Email" error={state?.email} />
        {state?.email && ( <p className="text-pink-600 text-sm mt-1">{state.email}</p>)}
        <Input type="password" name="password" labelName="Password" error={state?.password} style="mt-2"/>
        {state?.password && ( <p className="text-pink-600 text-sm mt-1">{state.password}</p>)}
        <button className="py-2 px-4 border border-orange-600 rounded-3xl text-white bg-orange-500 font-bold mt-4 hover:bg-orange-600">
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
        className="mt-4 w-full text-center rounded-full px-4 py-2 block border border-orange-600 text-orange-500 bg-white font-bold hover:bg-gray-50"
      >
        Create Account
      </Link>
    </div>
  );
}
