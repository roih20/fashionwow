"use client";

import Input from "@componets/input";
import { useFormState } from "react-dom";
import { singUp } from "@app/actions";

const initialState = {
  message: '',
};

export default function Page() {
  const [state, formAction] = useFormState(singUp, initialState);

  return (
    <div className="mx-auto max-w-lg w-full flex flex-col items-center">
      <h3 className="text-xl font-medium my-4">Sign Up</h3>
      {
        state?.message  && (
          <p className="text-red-500 font-semibold">{state.message}</p>
        )
      }
      <form className="flex flex-col w-full space-y-4" action={formAction}>
        <Input type="text" name="username" labelName="Username" />
        <Input type="email" name="email" labelName="Email" />
        <Input type="password" name="password" labelName="Password" />
        <button
          type="submit"
          className="w-full mt-3 py-1.5 border border-orange-600 rounded-2xl text-white bg-orange-500 font-semibold"
        >
          <span>Create Account</span>
        </button>
      </form>
    </div>
  );
}
